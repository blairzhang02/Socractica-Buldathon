import type { Supplier } from "@/lib/data/suppliers";

/** Average amount used per day, keyed by ingredient id. */
export type DailyUsage = Record<string, number>;

/** Buying within this much of what gets used is close enough to leave alone. */
const TOLERANCE = 0.1;

export type Advice =
  | { kind: "none" }
  | { kind: "keep" }
  | { kind: "up" | "down"; suggested: number };

/** Rounds to an amount a person would actually order. */
function tidy(amount: number): number {
  if (amount >= 1000) return Math.round(amount / 50) * 50;
  if (amount >= 100) return Math.round(amount / 10) * 10;
  if (amount >= 10) return Math.round(amount / 5) * 5;
  return Math.max(1, Math.round(amount));
}

/**
 * Compares what a supplier delivers each day against what the day's orders
 * actually used, and says whether to buy more or less.
 */
export function adviseSupplier(
  supplier: Supplier,
  usedPerDay: DailyUsage,
): Advice {
  const { ingredientId, dailyAmount } = supplier;
  if (!ingredientId || dailyAmount == null) return { kind: "none" };

  const used = usedPerDay[ingredientId];
  if (used == null) return { kind: "none" };

  const suggested = tidy(used);
  if (suggested === dailyAmount) return { kind: "keep" };

  const gap = Math.abs(dailyAmount - used);
  if (gap <= Math.max(dailyAmount, used) * TOLERANCE) return { kind: "keep" };

  return { kind: suggested > dailyAmount ? "up" : "down", suggested };
}

export function dailyCost(supplier: Supplier): number {
  if (supplier.dailyAmount != null && supplier.unitPrice != null) {
    return supplier.dailyAmount * supplier.unitPrice;
  }
  return supplier.dailyCost ?? 0;
}

export const money = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
