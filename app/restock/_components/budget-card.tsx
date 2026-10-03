"use client";

import { useState, useTransition } from "react";
import { updateBudget } from "@/app/restock/actions";

type Props = {
  amount: number;
  label: string;
  /** Already spent on invoices this period. */
  spent: number;
  /** What the plan on screen would cost, or 0 before one is generated. */
  planned: number;
  currencySymbol: string;
};

const money = (value: number, symbol: string) =>
  `${value < 0 ? "−" : ""}${symbol}${Math.abs(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function BudgetCard({ amount, label, spent, planned, currencySymbol }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(amount));
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const left = amount - spent;
  const after = left - planned;

  // Bar segments. Everything is measured against whichever is bigger, the
  // budget or what the period actually costs, so going over is visible rather
  // than silently clipped.
  const scale = Math.max(amount, spent + planned, 1);
  const pct = (value: number) => `${Math.max(0, (value / scale) * 100)}%`;

  function save() {
    const next = Number(draft.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(next) || next < 0) {
      setError("Enter an amount of 0 or more.");
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await updateBudget({ amount: next });
      if (!result.ok) setError(result.error);
      else setEditing(false);
    });
  }

  return (
    <section className="mb-10 rounded-3xl border-4 border-chocolate-700 bg-linear-to-b from-cream-50 to-cream-200 p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl text-chocolate-900">
            <span aria-hidden="true" className="mr-2">
              👛
            </span>
            Restock budget for {label}
          </h2>
          {!editing && (
            <p className="mt-2 font-display text-5xl font-bold text-chocolate-900">
              {money(amount, currencySymbol)}
            </p>
          )}
        </div>

        {!editing && (
          <button
            type="button"
            onClick={() => {
              setDraft(String(amount));
              setEditing(true);
            }}
            className="rounded-full border-4 border-chocolate-700 bg-linear-to-b from-cream-50 to-cream-200 px-6 py-3 text-xl font-bold text-chocolate-900 hover:from-custard hover:to-honey focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
          >
            Change
          </button>
        )}
      </div>

      {editing && (
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <label htmlFor="budget-amount" className="sr-only">
            Restock budget amount
          </label>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="font-display text-4xl font-bold text-chocolate-900">
              {currencySymbol}
            </span>
            <input
              id="budget-amount"
              type="text"
              inputMode="decimal"
              value={draft}
              autoFocus
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && save()}
              className="w-44 rounded-2xl border-4 border-chocolate-700 bg-cream-50 px-4 py-3 font-display text-4xl font-bold text-chocolate-900 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-chocolate-900"
            />
          </div>
          <button
            type="button"
            onClick={save}
            disabled={pending}
            className="rounded-full border-4 border-chocolate-700 bg-linear-to-br from-custard to-honey px-7 py-3 font-display text-xl font-bold text-chocolate-900 disabled:opacity-70 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
          >
            {pending ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => {
              setEditing(false);
              setError(null);
            }}
            className="rounded-full px-4 py-3 text-xl text-chocolate-700 underline"
          >
            Cancel
          </button>
        </div>
      )}

      {error && <p className="mt-3 text-lg text-ink-berry">{error}</p>}

      {/* spent → planned → what is left */}
      <div
        className="mt-6 flex h-10 overflow-hidden rounded-full border-4 border-chocolate-700"
        role="img"
        aria-label={`${money(spent, currencySymbol)} spent, ${money(
          planned,
          currencySymbol,
        )} planned, ${money(after, currencySymbol)} left over`}
      >
        <div className="bg-linear-to-br from-chocolate-600 to-chocolate-800" style={{ width: pct(spent) }} />
        <div className="bg-linear-to-br from-custard to-honey" style={{ width: pct(planned) }} />
        <div className="flex-1 bg-cream-50" />
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Figure label="Budget" value={money(amount, currencySymbol)} swatch="bg-cream-50" />
        <Figure
          label="Spent on invoices"
          value={money(spent, currencySymbol)}
          swatch="bg-linear-to-br from-chocolate-600 to-chocolate-800"
        />
        <Figure
          label="This plan"
          value={planned > 0 ? money(planned, currencySymbol) : "—"}
          swatch="bg-linear-to-br from-custard to-honey"
        />
        <Figure
          label={after < 0 ? "Over by" : "Left over"}
          value={money(Math.abs(after), currencySymbol)}
          swatch={after < 0 ? "bg-rose-soft" : "bg-matcha"}
        />
      </dl>
    </section>
  );
}

function Figure({ label, value, swatch }: { label: string; value: string; swatch: string }) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-base text-chocolate-600">
        <span aria-hidden="true" className={`h-4 w-4 shrink-0 rounded-full border-2 border-chocolate-700 ${swatch}`} />
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl font-bold text-chocolate-900">{value}</dd>
    </div>
  );
}
