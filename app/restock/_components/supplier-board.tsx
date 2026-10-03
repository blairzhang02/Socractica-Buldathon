"use client";

import { useMemo, useState } from "react";
import { seedSuppliers, type Supplier } from "@/lib/data/suppliers";
import {
  adviseSupplier,
  dailyCost,
  money,
  type Advice,
  type DailyUsage,
} from "@/lib/supplier-plan";
import { formatAmount } from "@/lib/usage";

/**
 * Suppliers, what they deliver each day, and what the day's orders say should
 * change. Everything lives in component state — a mockup, so nothing is saved
 * and no email is ever really sent.
 */

type SentEmail = {
  supplierId: string;
  name: string;
  email: string;
  line: string;
};

const blankForm = { name: "", item: "", email: "", cost: "" };

const bigField =
  "w-full rounded-2xl border-4 border-chocolate-700 bg-cream-50 px-5 py-4 text-xl text-chocolate-900 outline-none focus:border-chocolate-500";
const bigLabel = "mb-2 block text-xl font-bold text-chocolate-900";

function amountLabel(supplier: Supplier) {
  if (supplier.dailyAmount == null || supplier.unit == null) return "—";
  return formatAmount(supplier.dailyAmount, supplier.unit);
}

function adviceLine(supplier: Supplier, advice: Advice) {
  if (advice.kind !== "up" && advice.kind !== "down") return null;
  const unit = supplier.unit ?? "each";
  return {
    from: formatAmount(supplier.dailyAmount ?? 0, unit),
    to: formatAmount(advice.suggested, unit),
  };
}

export function SupplierBoard({ usedPerDay }: { usedPerDay: DailyUsage }) {
  const [suppliers, setSuppliers] = useState<Supplier[]>(seedSuppliers);
  const [form, setForm] = useState(blankForm);
  const [formError, setFormError] = useState("");
  const [confirmingDelete, setConfirmingDelete] = useState<string | null>(null);
  const [sent, setSent] = useState<SentEmail[] | null>(null);

  const advice = useMemo(
    () => new Map(suppliers.map((s) => [s.id, adviseSupplier(s, usedPerDay)])),
    [suppliers, usedPerDay],
  );

  const changes = suppliers.filter((s) => {
    const a = advice.get(s.id);
    return a?.kind === "up" || a?.kind === "down";
  });

  const totalPerDay = suppliers.reduce((sum, s) => sum + dailyCost(s), 0);

  function addSupplier() {
    const name = form.name.trim();
    const item = form.item.trim();
    const email = form.email.trim();
    const cost = Number(form.cost);

    if (!name || !item || !email) {
      setFormError("Please fill in the name, the item and the email.");
      return;
    }
    if (!email.includes("@")) {
      setFormError("That email address looks incomplete.");
      return;
    }
    if (!Number.isFinite(cost) || cost < 0) {
      setFormError("Please put in the cost per day, like 12.50");
      return;
    }

    setSuppliers((prev) => [
      ...prev,
      {
        id: `sup-${Date.now()}`,
        name,
        item,
        email,
        icon: "🧺",
        dailyCost: cost,
      },
    ]);
    setForm(blankForm);
    setFormError("");
  }

  function removeSupplier(id: string) {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
    setConfirmingDelete(null);
    setSent((prev) => prev?.filter((e) => e.supplierId !== id) ?? null);
  }

  function applyChanges() {
    // Built outside the state updater: React may run an updater twice, and
    // that would send every supplier the same email twice.
    const emails: SentEmail[] = [];

    const updated = suppliers.map((supplier) => {
      const a = advice.get(supplier.id);
      if (a?.kind !== "up" && a?.kind !== "down") return supplier;

      const unit = supplier.unit ?? "each";
      emails.push({
        supplierId: supplier.id,
        name: supplier.name,
        email: supplier.email,
        line: `${supplier.item}: ${formatAmount(supplier.dailyAmount ?? 0, unit)} a day to ${formatAmount(a.suggested, unit)} a day`,
      });

      return { ...supplier, dailyAmount: a.suggested };
    });

    setSuppliers(updated);
    setSent(emails);
  }

  return (
    <section className="mt-12 border-t-4 border-chocolate-700 pt-10">
      <h2 className="mb-6 text-3xl font-bold text-chocolate-900">
        <span aria-hidden="true" className="mr-2">
          🚚
        </span>
        Your suppliers
      </h2>

      <div className="rounded-3xl border-4 border-chocolate-700 bg-cream-100 p-6 sm:p-8">
        <h3 className="mb-5 text-2xl font-bold text-chocolate-900">
          Add a supplier
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={bigLabel} htmlFor="supplier-name">
              Supplier name
            </label>
            <input
              id="supplier-name"
              className={bigField}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Bay Mills"
            />
          </div>
          <div>
            <label className={bigLabel} htmlFor="supplier-item">
              What they bring
            </label>
            <input
              id="supplier-item"
              className={bigField}
              value={form.item}
              onChange={(e) => setForm({ ...form, item: e.target.value })}
              placeholder="Flour"
            />
          </div>
          <div>
            <label className={bigLabel} htmlFor="supplier-email">
              Their email
            </label>
            <input
              id="supplier-email"
              type="email"
              className={bigField}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="orders@baymills.example"
            />
          </div>
          <div>
            <label className={bigLabel} htmlFor="supplier-cost">
              Cost per day
            </label>
            <input
              id="supplier-cost"
              inputMode="decimal"
              className={bigField}
              value={form.cost}
              onChange={(e) => setForm({ ...form, cost: e.target.value })}
              placeholder="12.50"
            />
          </div>
        </div>

        {formError && (
          <p role="alert" className="mt-5 text-xl font-semibold text-ink-berry">
            {formError}
          </p>
        )}

        <button
          type="button"
          onClick={addSupplier}
          className="mt-6 w-full rounded-3xl border-4 border-chocolate-700 bg-custard px-8 py-6 text-2xl font-bold text-chocolate-900 shadow-[0_6px_0_var(--color-chocolate-700)] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900 active:translate-y-1 active:shadow-none sm:w-auto"
        >
          <span aria-hidden="true" className="mr-3">
            ➕
          </span>
          Add supplier
        </button>
      </div>

      <ul className="mt-8 space-y-5">
        {suppliers.map((supplier) => {
          const a = advice.get(supplier.id) ?? { kind: "none" as const };
          const change = adviceLine(supplier, a);

          return (
            <li
              key={supplier.id}
              className="rounded-3xl border-4 border-chocolate-700 bg-cream-100 p-6"
            >
              <div className="flex flex-wrap items-center gap-5">
                <span aria-hidden="true" className="text-5xl leading-none">
                  {supplier.icon}
                </span>
                <div className="flex-1">
                  <p className="text-2xl font-bold text-chocolate-900">
                    {supplier.name}
                  </p>
                  <p className="text-xl text-chocolate-600">{supplier.item}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-chocolate-900">
                    {amountLabel(supplier)} a day
                  </p>
                  <p className="text-xl text-chocolate-600">
                    {money(dailyCost(supplier))} a day
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 border-t-4 border-cream-300 pt-5">
                {change ? (
                  <p
                    className={`flex-1 rounded-2xl px-5 py-3 text-xl font-semibold text-chocolate-900 ${
                      a.kind === "up" ? "bg-honey" : "bg-matcha"
                    }`}
                  >
                    <span aria-hidden="true" className="mr-2">
                      {a.kind === "up" ? "⬆️" : "⬇️"}
                    </span>
                    {a.kind === "up" ? "Buy more" : "Buy less"} — {change.from}{" "}
                    to {change.to} a day
                  </p>
                ) : (
                  <p className="flex-1 text-xl text-chocolate-600">
                    <span aria-hidden="true" className="mr-2">
                      {a.kind === "keep" ? "✅" : "➖"}
                    </span>
                    {a.kind === "keep"
                      ? "Just right — no change"
                      : "No advice yet"}
                  </p>
                )}

                {confirmingDelete === supplier.id ? (
                  <span className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => removeSupplier(supplier.id)}
                      className="rounded-2xl border-4 border-chocolate-700 bg-berry px-6 py-4 text-xl font-bold text-cream-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
                    >
                      Yes, remove
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmingDelete(null)}
                      className="rounded-2xl border-4 border-chocolate-700 bg-cream-50 px-6 py-4 text-xl font-bold text-chocolate-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
                    >
                      Keep
                    </button>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmingDelete(supplier.id)}
                    className="rounded-2xl border-4 border-chocolate-700 bg-cream-50 px-6 py-4 text-xl font-bold text-chocolate-900 hover:bg-cream-200 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
                  >
                    <span aria-hidden="true" className="mr-2">
                      🗑️
                    </span>
                    Remove
                    <span className="sr-only"> {supplier.name}</span>
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-right text-2xl font-bold text-chocolate-900">
        All suppliers together: {money(totalPerDay)} a day
      </p>

      <div className="mt-10 rounded-3xl border-4 border-chocolate-700 bg-cream-100 p-6 sm:p-8">
        <h3 className="mb-4 text-2xl font-bold text-chocolate-900">
          <span aria-hidden="true" className="mr-2">
            🌙
          </span>
          End of day
        </h3>
        <p className="text-xl leading-relaxed text-chocolate-800">
          {changes.length === 0
            ? "Today's orders match what your suppliers bring. Nothing to change."
            : `Today's orders used a different amount than ${changes.length} ${
                changes.length === 1 ? "supplier brings" : "suppliers bring"
              }. Press the button to change the daily amounts and let them know.`}
        </p>

        <button
          type="button"
          onClick={applyChanges}
          disabled={changes.length === 0}
          className="mt-6 w-full rounded-3xl border-4 border-chocolate-700 bg-custard px-8 py-7 text-3xl font-bold text-chocolate-900 shadow-[0_6px_0_var(--color-chocolate-700)] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          <span aria-hidden="true" className="mr-3">
            ✅
          </span>
          Apply restock changes
        </button>
      </div>

      <div aria-live="polite">
        {sent && (
          <div className="mt-8 rounded-3xl border-4 border-chocolate-700 bg-matcha p-6 sm:p-8">
            <h3 className="mb-4 text-2xl font-bold text-chocolate-900">
              <span aria-hidden="true" className="mr-2">
                ✉️
              </span>
              {sent.length === 0
                ? "No one needed telling"
                : `${sent.length} ${
                    sent.length === 1 ? "supplier has" : "suppliers have"
                  } been told`}
            </h3>

            <ul className="space-y-4">
              {sent.map((email) => (
                <li
                  key={email.supplierId}
                  className="rounded-2xl bg-cream-50 px-5 py-4"
                >
                  <p className="text-xl font-bold text-chocolate-900">
                    {email.name} · {email.email}
                  </p>
                  <p className="text-xl text-chocolate-700">{email.line}</p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-lg text-chocolate-700">
              Preview only — no email actually leaves this app.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
