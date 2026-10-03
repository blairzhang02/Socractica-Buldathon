/**
 * Budget arithmetic, kept free of node:fs so the client components can import
 * it. The reading and writing of budget.json lives in lib/budget.ts.
 */
import type { Receipt } from "@/lib/receipts";
import type { PlanLine, RestockPlan } from "@/lib/restock";

export type Budget = {
  /** What she has set aside for restocking this period. */
  amount: number;
  /** What the period is called, e.g. "October". */
  label: string;
};

/** What the invoices add up to. Lines saved before prices were recorded count as nothing. */
export function spentFromReceipts(receipts: Receipt[]): number {
  let total = 0;
  for (const receipt of receipts) {
    for (const line of receipt.lines) total += line.price ?? 0;
  }
  return Math.round(total * 100) / 100;
}

export type BudgetBreakdown = {
  amount: number;
  /** Already gone, from the invoices. */
  spent: number;
  /** What the chosen plan would cost. */
  planned: number;
  /** `amount - spent`, before the plan is bought. Can go negative. */
  left: number;
  /** `left - planned`. Negative means the plan does not fit. */
  after: number;
  fits: boolean;
};

export function budgetBreakdown(amount: number, spent: number, planned: number): BudgetBreakdown {
  const left = Math.round((amount - spent) * 100) / 100;
  const after = Math.round((left - planned) * 100) / 100;
  return { amount, spent, planned, left, after, fits: after >= 0 };
}

export type TrimmedPlan = {
  /** Fits inside what is left, most urgent first. */
  afford: PlanLine[];
  /** Does not fit this time. */
  postpone: PlanLine[];
  affordCost: number;
  postponeCost: number;
};

/**
 * When the plan costs more than is left, decide what to buy now.
 *
 * Urgency is how long the shelf lasts at the current rate — `onHand / perWeek`
 * — so the things that run out first get bought first. Items are then taken in
 * that order while the money lasts; a dear item that does not fit is skipped
 * rather than ending the list, so cheaper urgent items still get through.
 */
export function trimToBudget(plan: RestockPlan, left: number): TrimmedPlan {
  const byUrgency = [...plan.buy].sort((a, b) => {
    const coverA = a.perWeek > 0 ? a.onHand / a.perWeek : Number.POSITIVE_INFINITY;
    const coverB = b.perWeek > 0 ? b.onHand / b.perWeek : Number.POSITIVE_INFINITY;
    return coverA - coverB;
  });

  const afford: PlanLine[] = [];
  const postpone: PlanLine[] = [];
  let running = 0;

  for (const line of byUrgency) {
    if (running + line.cost <= left) {
      afford.push(line);
      running += line.cost;
    } else {
      postpone.push(line);
    }
  }

  return {
    afford,
    postpone,
    affordCost: Math.round(running * 100) / 100,
    postponeCost: Math.round(postpone.reduce((s, l) => s + l.cost, 0) * 100) / 100,
  };
}
