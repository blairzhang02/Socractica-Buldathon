"use client";

import { useState, useTransition } from "react";
import { saveReceipt } from "@/app/inventory/actions";
import { parseInvoiceText } from "@/lib/invoice-file";
import type { Unit } from "@/lib/types";

type Line = { key: number; name: string; quantity: string; unit: Unit; price: string };

const units: Unit[] = ["g", "ml", "each"];

const field =
  "w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-lg text-chocolate-900 outline-none focus:border-chocolate-500";

let nextKey = 1;

export function ReceiptForm() {
  const [step, setStep] = useState<"label" | "lines">("label");
  const [label, setLabel] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [draftName, setDraftName] = useState("");
  const [draftQty, setDraftQty] = useState("");
  const [draftUnit, setDraftUnit] = useState<Unit>("g");
  const [draftPrice, setDraftPrice] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  function replacePreview(next: string | null) {
    setPreviewUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return next;
    });
  }

  function onUpload(file: File | undefined) {
    if (!file) return;
    const isPicture =
      file.type.startsWith("image/") || file.name.toLowerCase().endsWith(".svg");
    const nextPreview = isPicture ? URL.createObjectURL(file) : null;

    file.text().then((text) => {
      const parsed = parseInvoiceText(text);
      replacePreview(nextPreview);
      if (parsed) {
        setLabel(parsed.label);
        setLines(
          parsed.lines.map((line) => ({
            key: nextKey++,
            name: line.name,
            quantity: String(line.quantity),
            unit: line.unit,
            price: line.price.toFixed(2),
          })),
        );
        setMessage({ ok: true, text: "Read from the invoice. Change anything that looks wrong." });
        setStep("lines");
        return;
      }
      if (nextPreview) {
        setLabel(file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
        setLines([]);
        setMessage({
          ok: true,
          text: "Picture added. Type the ingredients you see on it.",
        });
        setStep("lines");
        return;
      }
      setMessage({
        ok: false,
        text: "That file is not an invoice we can read. Try the sample, or type it in.",
      });
    });
  }

  function addLine() {
    const name = draftName.trim();
    if (!name || !(Number(draftQty) > 0) || draftPrice.trim() === "" || Number(draftPrice) < 0) {
      setMessage({ ok: false, text: "Enter the ingredient, how much, and the price." });
      return;
    }
    setLines((prev) => [
      ...prev,
      { key: nextKey++, name, quantity: draftQty, unit: draftUnit, price: draftPrice },
    ]);
    setDraftName("");
    setDraftQty("");
    setDraftPrice("");
    setDraftUnit("g");
    setMessage(null);
  }

  function save() {
    setMessage(null);
    startTransition(async () => {
      const result = await saveReceipt({
        label,
        lines: lines.map((line) => ({
          name: line.name,
          quantity: Number(line.quantity),
          unit: line.unit,
          price: Number(line.price),
        })),
      });
      if (!result.ok) {
        setMessage({ ok: false, text: result.error });
        return;
      }
      setMessage({ ok: true, text: `Saved ${result.label}. Inventory is updated below.` });
      setLabel("");
      setLines([]);
      replacePreview(null);
      setStep("label");
    });
  }

  if (step === "label") {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (label.trim()) {
            setMessage(null);
            setStep("lines");
          }
        }}
        className="mx-auto max-w-xl rounded-2xl border border-cream-300 bg-cream-100 p-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-chocolate-900">
          Which invoice is this?
        </h2>
        <input
          className={`${field} mt-5`}
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          placeholder="Valley Dairy, Oct 1"
          autoFocus
        />
        <button
          type="submit"
          disabled={!label.trim()}
          className="mt-6 rounded-full bg-chocolate-700 px-5 py-2.5 text-sm font-bold text-cream-100 disabled:opacity-40"
        >
          Next
        </button>

        <p className="mt-6 text-sm text-chocolate-600">Or upload a picture of the receipt.</p>
        <label className="mt-3 inline-flex cursor-pointer rounded-full border border-chocolate-500 px-4 py-2 text-sm font-semibold text-chocolate-700 hover:bg-cream-200">
          Choose a file
          <input
            type="file"
            accept="image/*,.svg,.json,image/svg+xml"
            className="sr-only"
            onChange={(event) => {
              onUpload(event.target.files?.[0]);
              event.target.value = "";
            }}
          />
        </label>
        <a
          href="/sample-invoice.svg"
          download="sample-invoice.svg"
          className="mt-3 block text-sm font-semibold text-chocolate-700 underline"
        >
          Download a sample invoice
        </a>
        {message && (
          <p
            className={`mt-4 text-sm font-semibold ${
              message.ok ? "text-ink-lime" : "text-ink-berry"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addLine();
      }}
      className="mx-auto max-w-xl rounded-2xl border border-cream-300 bg-cream-100 p-6"
    >
      <p className="text-sm font-semibold text-taupe">{label.trim()}</p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-chocolate-900">
        What was on it?
      </h2>
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Uploaded invoice"
          className="mt-4 max-h-72 w-full rounded-2xl border border-cream-300 object-contain bg-cream-50"
        />
      )}
      {message?.ok && (
        <p className="mt-3 text-sm font-semibold text-ink-lime">{message.text}</p>
      )}

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
          placeholder="800"
        />
        <div className="flex shrink-0 rounded-2xl border border-cream-300 bg-cream-50 p-1">
          {units.map((unit) => (
            <button
              key={unit}
              type="button"
              onClick={() => setDraftUnit(unit)}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                draftUnit === unit ? "bg-chocolate-700 text-cream-100" : "text-chocolate-700"
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-4 block text-sm font-semibold text-chocolate-700" htmlFor="price">
        Price
      </label>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-lg font-semibold text-chocolate-700">$</span>
        <input
          id="price"
          className={field}
          type="number"
          min="0"
          step="0.01"
          inputMode="decimal"
          value={draftPrice}
          onChange={(event) => setDraftPrice(event.target.value)}
          placeholder="6.40"
        />
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
                {line.quantity} {line.unit} · ${Number(line.price).toFixed(2)}
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

      {message && !message.ok && (
        <p className="mt-4 text-sm font-semibold text-ink-berry">{message.text}</p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setMessage(null);
            setStep("label");
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
          {pending ? "Saving..." : "Save invoice"}
        </button>
      </div>
    </form>
  );
}
