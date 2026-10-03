"use client";

import { useState } from "react";
import { BudgetCard } from "@/app/restock/_components/budget-card";
import {
  RestockPlanner,
  type TimeframeOption,
} from "@/app/restock/_components/restock-planner";
import type { Budget } from "@/lib/budget-math";
import type { RestockPlan } from "@/lib/restock";

/**
 * Holds the one number the budget card and the planner both care about: what
 * the plan currently on screen would cost. The planner reports it, the card
 * draws it.
 */
export function BudgetedRestock({
  budget,
  spent,
  options,
  plans,
  currencySymbol,
}: {
  budget: Budget;
  spent: number;
  options: TimeframeOption[];
  plans: Record<number, RestockPlan>;
  currencySymbol: string;
}) {
  const [planned, setPlanned] = useState(0);

  return (
    <>
      <BudgetCard
        amount={budget.amount}
        label={budget.label}
        spent={spent}
        planned={planned}
        currencySymbol={currencySymbol}
      />
      <RestockPlanner
        options={options}
        plans={plans}
        currencySymbol={currencySymbol}
        budgetLeft={budget.amount - spent}
        onPlannedChange={setPlanned}
      />
    </>
  );
}
