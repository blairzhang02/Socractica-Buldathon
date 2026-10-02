"use client";

import { useState } from "react";
import { formatAmount, type IngredientUsage, type UsageGroup } from "@/lib/usage";

export type UsagePeriod = {
  id: "today" | "week";
  /** Button label. */
  label: string;
  /** Sentence under the buttons, e.g. "13 orders in the last 7 days". */
  summary: string;
  usage: IngredientUsage[];
};

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

      {period.usage.length === 0 ? (
        <p className="mt-10 rounded-3xl border-2 border-chocolate-700 bg-cream-100 px-6 py-8 text-center text-2xl text-chocolate-800">
          No orders yet, so nothing has been used.
        </p>
      ) : (
        <div className="mt-10 space-y-10">
          {groups.map((group) => {
            const rows = period.usage.filter((u) => u.group === group.id);
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
                  {rows.map((row) => (
                    <li
                      key={row.ingredientId}
                      className="flex items-center gap-5 border-t-2 border-cream-300 py-4 first:border-t-0"
                    >
                      <span aria-hidden="true" className="text-5xl leading-none">
                        {row.icon}
                      </span>
                      <span className="flex-1 text-2xl text-chocolate-900">
                        {row.name}
                      </span>
                      <span className="text-2xl font-semibold text-chocolate-800">
                        {formatAmount(row.amount, row.unit)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
