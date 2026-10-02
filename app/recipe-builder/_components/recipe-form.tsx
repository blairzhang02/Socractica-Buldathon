"use client";

import { useState, useTransition } from "react";
import { createMenuItem } from "@/app/recipe-builder/actions";
import type { Unit } from "@/lib/types";

type Line = { key: number; name: string; quantity: string; unit: Unit };

const units: Unit[] = ["g", "ml", "each"];

const field =
  "w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-lg text-chocolate-900 outline-none focus:border-chocolate-500";

let nextKey = 1;

export function RecipeForm() {
  const [step, setStep] = useState<"name" | "ingredients">("name");
  const [name, setName] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [draftName, setDraftName] = useState("");
  const [draftQty, setDraftQty] = useState("");
  const [draftUnit, setDraftUnit] = useState<Unit>("g");
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  function addIngredient() {
    const ingredientName = draftName.trim();
    if (!ingredientName || !(Number(draftQty) > 0)) {
      setMessage({ ok: false, text: "Enter the ingredient and how much." });
      return;
    }
    setLines((prev) => [
      ...prev,
      { key: nextKey++, name: ingredientName, quantity: draftQty, unit: draftUnit },
    ]);
    setDraftName("");
    setDraftQty("");
    setDraftUnit("g");
    setMessage(null);
  }

  function save() {
    setMessage(null);
    startTransition(async () => {
      const result = await createMenuItem({
        name,
        lines: lines.map((line) => ({
          name: line.name,
          quantity: Number(line.quantity),
          unit: line.unit,
        })),
      });
      if (!result.ok) {
        setMessage({ ok: false, text: result.error });
        return;
      }
      setMessage({ ok: true, text: `Saved ${result.name}.` });
      setName("");
      setLines([]);
      setStep("name");
    });
  }

  if (step === "name") {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name.trim()) setStep("ingredients");
        }}
        className="mx-auto max-w-xl rounded-2xl border border-cream-300 bg-cream-100 p-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-chocolate-900">
          What is this called?
        </h2>
        <input
          className={`${field} mt-5`}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Fall Parfait"
          autoFocus
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="mt-6 rounded-full bg-chocolate-700 px-5 py-2.5 text-sm font-bold text-cream-100 disabled:opacity-40"
        >
          Next
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addIngredient();
      }}
      className="mx-auto max-w-xl rounded-2xl border border-cream-300 bg-cream-100 p-6"
    >
      <p className="text-sm font-semibold text-taupe">{name.trim()}</p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-chocolate-900">
        What goes in it?
      </h2>

      <label className="mt-5 block text-sm font-semibold text-chocolate-700" htmlFor="ingredient">
        Ingredient
      </label>
      <input
        id="ingredient"
        className={`${field} mt-1`}
        value={draftName}
        onChange={(event) => setDraftName(event.target.value)}
        placeholder="Heavy cream"
        autoFocus
      />

      <label className="mt-4 block text-sm font-semibold text-chocolate-700" htmlFor="amount">
        Amount
      </label>
      <div className="mt-1 flex gap-2">
        <input
          id="amount"
          className={field}
          type="number"
          min="0"
          step="any"
          value={draftQty}
          onChange={(event) => setDraftQty(event.target.value)}
          placeholder="30"
        />
        <div className="flex shrink-0 rounded-2xl border border-cream-300 bg-cream-50 p-1">
          {units.map((unit) => (
            <button
              key={unit}
              type="button"
              onClick={() => setDraftUnit(unit)}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                draftUnit === unit
                  ? "bg-chocolate-700 text-cream-100"
                  : "text-chocolate-700"
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 rounded-full border border-chocolate-500 px-4 py-2 text-sm font-semibold text-chocolate-700 hover:bg-cream-200"
      >
        Add ingredient
      </button>

      {lines.length > 0 && (
        <ul className="mt-5 divide-y divide-cream-300 overflow-hidden rounded-2xl border border-cream-300 bg-cream-50">
          {lines.map((line) => (
            <li key={line.key} className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="font-medium">{line.name}</span>
              <span className="text-sm text-chocolate-600">
                {line.quantity} {line.unit}
                <button
                  type="button"
                  onClick={() => setLines((prev) => prev.filter((item) => item.key !== line.key))}
                  className="ml-3 font-semibold text-chocolate-700"
                >
                  Remove
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      {message && (
        <p
          className={`mt-4 text-sm font-semibold ${
            message.ok ? "text-ink-lime" : "text-ink-berry"
          }`}
        >
          {message.text}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setMessage(null);
            setStep("name");
          }}
          className="rounded-full px-4 py-2.5 text-sm font-semibold text-chocolate-700 hover:bg-cream-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={save}
          disabled={pending || lines.length === 0}
          className="rounded-full bg-custard px-5 py-2.5 text-sm font-bold text-chocolate-900 hover:bg-honey disabled:opacity-40"
        >
          {pending ? "Saving..." : "Save recipe"}
        </button>
      </div>
    </form>
  );
}
