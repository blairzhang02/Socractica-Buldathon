"use client";

import { useMemo, useState, useTransition } from "react";
import { createMenuItem } from "@/app/recipe-builder/actions";
import type { Ingredient, MenuItemCategory, Unit } from "@/lib/types";

const categories: MenuItemCategory[] = [
  "pizza",
  "bread",
  "pastry",
  "drink",
  "side",
];
const units: Unit[] = ["each", "g", "kg", "ml", "l"];

type Line = { key: number; ingredientId: string; quantity: string };

const field =
  "w-full rounded-lg border border-cream-300 bg-cream-50 px-3 py-2 text-sm text-chocolate-900 outline-none focus:border-chocolate-500";
const label =
  "mb-1 block text-xs font-semibold uppercase tracking-wide text-taupe";

let nextKey = 1;

export function RecipeForm({
  ingredients,
  currency,
}: {
  ingredients: Ingredient[];
  currency: string;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<MenuItemCategory>("pizza");
  const [yieldQuantity, setYieldQuantity] = useState("1");
  const [yieldUnit, setYieldUnit] = useState<Unit>("each");
  const [sellPrice, setSellPrice] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { key: 0, ingredientId: ingredients[0]?.id ?? "", quantity: "" },
  ]);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const [pending, startTransition] = useTransition();

  const byId = useMemo(
    () => new Map(ingredients.map((i) => [i.id, i])),
    [ingredients],
  );

  const costed = lines.map((line) => {
    const ingredient = byId.get(line.ingredientId);
    const quantity = Number(line.quantity);
    const lineCost =
      ingredient && quantity > 0 ? quantity * ingredient.unitPrice : 0;
    return { ...line, ingredient, lineCost };
  });

  const totalCost = costed.reduce((sum, l) => sum + l.lineCost, 0);
  const servings = Math.max(1, Number(yieldQuantity) || 1);
  const costPerServing = totalCost / servings;
  const price = Number(sellPrice) || 0;
  const margin = price > 0 ? ((price - costPerServing) / price) * 100 : null;

  function update(key: number, patch: Partial<Line>) {
    setLines((prev) => prev.map((l) => (l.key === key ? { ...l, ...patch } : l)));
  }

  function submit() {
    setMessage(null);
    startTransition(async () => {
      const result = await createMenuItem({
        name,
        category,
        yieldQuantity: servings,
        yieldUnit,
        sellPrice: price,
        lines: lines.map((l) => ({
          ingredientId: l.ingredientId,
          quantity: Number(l.quantity),
        })),
      });

      if (!result.ok) {
        setMessage({ ok: false, text: result.error });
        return;
      }
      setMessage({ ok: true, text: `Saved ${result.name}.` });
      setName("");
      setSellPrice("");
      setLines([
        { key: nextKey++, ingredientId: ingredients[0]?.id ?? "", quantity: "" },
      ]);
    });
  }

  const money = (n: number) =>
    `${currency} ${n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="rounded-2xl border border-cream-300 bg-cream-100 p-6"
    >
      <h2 className="text-lg font-semibold text-chocolate-900">New menu item</h2>
      <p className="mt-1 text-sm text-chocolate-600">
        Cost is pulled from the ingredient catalog as you type.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Marinara"
          />
        </div>

        <div>
          <label className={label} htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className={field}
            value={category}
            onChange={(e) => setCategory(e.target.value as MenuItemCategory)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={label} htmlFor="sellPrice">
            Sell price per serving
          </label>
          <input
            id="sellPrice"
            className={field}
            type="number"
            min="0"
            step="0.01"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div>
          <label className={label} htmlFor="yieldQuantity">
            Batch yields
          </label>
          <input
            id="yieldQuantity"
            className={field}
            type="number"
            min="1"
            step="1"
            value={yieldQuantity}
            onChange={(e) => setYieldQuantity(e.target.value)}
          />
        </div>

        <div>
          <label className={label} htmlFor="yieldUnit">
            Yield unit
          </label>
          <select
            id="yieldUnit"
            className={field}
            value={yieldUnit}
            onChange={(e) => setYieldUnit(e.target.value as Unit)}
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3 className="mt-7 text-sm font-semibold uppercase tracking-wide text-taupe">
        Ingredients
      </h3>
      <ul className="mt-3 space-y-2">
        {costed.map((line) => (
          <li key={line.key} className="flex flex-wrap items-center gap-2">
            <select
              aria-label="Ingredient"
              className={`${field} min-w-0 flex-1`}
              value={line.ingredientId}
              onChange={(e) =>
                update(line.key, { ingredientId: e.target.value })
              }
            >
              {ingredients.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name}
                </option>
              ))}
            </select>
            <input
              aria-label="Quantity"
              className={`${field} w-24`}
              type="number"
              min="0"
              step="any"
              value={line.quantity}
              onChange={(e) => update(line.key, { quantity: e.target.value })}
              placeholder="qty"
            />
            <span className="w-8 text-sm text-taupe">
              {line.ingredient?.unit}
            </span>
            <span className="w-24 text-right font-mono text-sm text-chocolate-700">
              {money(line.lineCost)}
            </span>
            <button
              type="button"
              aria-label="Remove ingredient"
              onClick={() =>
                setLines((prev) =>
                  prev.length > 1 ? prev.filter((l) => l.key !== line.key) : prev,
                )
              }
              className="rounded-full px-2 py-1 text-sm text-chocolate-600 hover:bg-cream-200"
            >
              &#10005;
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() =>
          setLines((prev) => [
            ...prev,
            {
              key: nextKey++,
              ingredientId: ingredients[0]?.id ?? "",
              quantity: "",
            },
          ])
        }
        className="mt-3 rounded-full border border-chocolate-500 px-3 py-1.5 text-sm font-semibold text-chocolate-700 hover:bg-cream-200"
      >
        + Add ingredient
      </button>

      <dl className="mt-7 grid gap-3 rounded-xl bg-chocolate-700 p-4 text-cream-100 sm:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-wide text-cream-200">
            Batch cost
          </dt>
          <dd className="font-mono text-lg">{money(totalCost)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-cream-200">
            Cost per serving
          </dt>
          <dd className="font-mono text-lg">{money(costPerServing)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-cream-200">
            Margin
          </dt>
          <dd className="font-mono text-lg">
            {margin === null ? "—" : `${margin.toFixed(0)}%`}
          </dd>
        </div>
      </dl>

      {message && (
        <p
          className={`mt-4 text-sm font-semibold ${
            message.ok ? "text-ink-lime" : "text-ink-berry"
          }`}
        >
          {message.text}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 rounded-full bg-custard px-5 py-2.5 text-sm font-bold text-chocolate-900 hover:bg-honey disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save menu item"}
      </button>
    </form>
  );
}
