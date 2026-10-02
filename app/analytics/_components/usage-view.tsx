"use client";

import { useState } from "react";
import { formatAmount, type StockRow, type UsageGroup } from "@/lib/usage";
import type { Unit } from "@/lib/types";

export type UsagePeriod = {
  id: "today" | "week";
  /** Button label. */
  label: string;
  /** Sentence under the buttons, e.g. "13 orders in the last 7 days". */
  summary: string;
  stock: StockRow[];
};

/** Before and after share one unit, so 3.0 kg stays 2.6 kg rather than jumping to grams. */
function pairedAmounts(had: number, left: number, unit: Unit) {
  const before = formatWith(had, unit, had, left);
  const afterAmount = formatWith(Math.abs(left), unit, had, left);
  return {
    before,
    after: left < 0 ? `short ${afterAmount}` : afterAmount,
  };
}

function formatWith(amount: number, unit: Unit, had: number, left: number) {
  if (unit === "g" || unit === "kg") {
    const grams = unit === "kg" ? amount * 1000 : amount;
    const hadGrams = unit === "kg" ? had * 1000 : had;
    const leftGrams = unit === "kg" ? left * 1000 : left;
    if (hadGrams >= 1000 || Math.abs(leftGrams) >= 1000) {
      const digits =
        (hadGrams / 1000).toFixed(1) === (leftGrams / 1000).toFixed(1) ? 2 : 1;
      return `${(grams / 1000).toFixed(digits)} kg`;
    }
    return formatAmount(amount, unit);
  }
  if (unit === "ml" || unit === "l") {
    const ml = unit === "l" ? amount * 1000 : amount;
    const hadMl = unit === "l" ? had * 1000 : had;
    const leftMl = unit === "l" ? left * 1000 : left;
    if (hadMl >= 1000 || Math.abs(leftMl) >= 1000) {
      const digits = (hadMl / 1000).toFixed(1) === (leftMl / 1000).toFixed(1) ? 2 : 1;
      return `${(ml / 1000).toFixed(digits)} L`;
    }
    return formatAmount(amount, unit);
  }
  return formatAmount(amount, unit);
}

const groups: { id: UsageGroup; label: string; icon: string }[] = [
  { id: "weighed", label: "Weighed", icon: "⚖️" },
  { id: "poured", label: "Poured", icon: "🥛" },
  { id: "counted", label: "Counted", icon: "🔢" },
];

export function UsageView({ periods }: { periods: UsagePeriod[] }) {
  const [selected, setSelected] = useState<UsagePeriod["id"]>("today");
  const period = periods.find((p) => p.id === selected) ?? periods[0];

  return (
    <>
      <div
        role="group"
        aria-label="Choose a time period"
        className="flex flex-wrap gap-4"
      >
        {periods.map((option) => {
          const active = option.id === period.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(option.id)}
              className={`min-h-16 flex-1 rounded-2xl border-2 border-chocolate-700 px-8 text-2xl font-semibold transition-colors focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-tangerine ${
                active
                  ? "bg-chocolate-700 text-cream-50"
                  : "bg-cream-100 text-chocolate-800 hover:bg-cream-200"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-xl text-chocolate-600">{period.summary}</p>

      {period.stock.length === 0 ? (
        <p className="mt-10 rounded-3xl border-2 border-chocolate-700 bg-cream-100 px-6 py-8 text-center text-2xl text-chocolate-800">
          Add an invoice above. Then each ingredient shows what you had, and what is left.
        </p>
      ) : (
        <div className="mt-10 space-y-10">
          {groups.map((group) => {
            const rows = period.stock.filter((row) => row.group === group.id);
            if (rows.length === 0) return null;

            return (
              <section key={group.id}>
                <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-chocolate-900">
                  <span aria-hidden="true" className="text-3xl">
                    {group.icon}
                  </span>
                  {group.label}
                </h2>

                <ul className="rounded-3xl border-2 border-chocolate-700 bg-cream-100 px-6 py-2">
                  {rows.map((row) => {
                    const amounts = pairedAmounts(row.had, row.left, row.unit);
                    return (
                    <li
                      key={`${row.name}-${row.unit}`}
                      className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t-2 border-cream-300 py-4 first:border-t-0"
                    >
                      <span aria-hidden="true" className="text-5xl leading-none">
                        {row.icon}
                      </span>
                      <span className="min-w-40 flex-1 text-2xl text-chocolate-900">
                        {row.name}
                      </span>
                      <span className="text-2xl text-chocolate-800">
                        Before {amounts.before}
                      </span>
                      <span className="text-2xl font-semibold text-chocolate-900">
                        After {amounts.after}
                      </span>
                    </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
