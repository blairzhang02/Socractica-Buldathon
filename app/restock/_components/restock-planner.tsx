"use client";

import { useEffect, useRef, useState } from "react";
import type { RestockPlan } from "@/lib/restock";
import { formatAmount } from "@/lib/usage";

/**
 * Mock assistant. No model is called — the plan is worked out from the saved
 * orders and invoices before the page even renders, and this component just
 * paces the reveal so it reads like something thinking out loud.
 */

export type TimeframeOption = {
  weeks: number;
  label: string;
};

type Props = {
  options: TimeframeOption[];
  /** One ready-made plan per option, keyed by week count. */
  plans: Record<number, RestockPlan>;
  currencySymbol: string;
};

type Stage = "idle" | "working" | "done";

const money = (value: number, symbol: string) =>
  `${symbol}${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function RestockPlanner({ options, plans, currencySymbol }: Props) {
  const [weeks, setWeeks] = useState(options[0]?.weeks ?? 4);
  const [stage, setStage] = useState<Stage>("idle");
  const [stepsShown, setStepsShown] = useState(0);
  const [typed, setTyped] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const plan = plans[weeks];
  const option = options.find((o) => o.weeks === weeks);

  const steps = [
    `Reading ${plan.sampleOrders} recent orders…`,
    `Working out how fast each ingredient goes…`,
    `Counting what is on the shelf from your invoices…`,
    `Planning the next ${option?.label.toLowerCase() ?? `${weeks} weeks`}…`,
  ];

  const summary = plan
    ? plan.buy.length === 0
      ? `Good news — you already have enough of everything for the next ${option?.label.toLowerCase()}. Nothing to buy.`
      : `For the next ${option?.label.toLowerCase()} you will need ${plan.buy.length} ${
          plan.buy.length === 1 ? "ingredient" : "ingredients"
        } topped up, at about ${money(plan.totalCost, currencySymbol)}. ${
          plan.covered.length > 0
            ? `The other ${plan.covered.length} you already have enough of.`
            : ""
        }`.trim()
    : "";

  // Clear any pending timers when the component goes away or we restart.
  const reset = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => reset, []);

  function generate() {
    reset();
    setStage("working");
    setStepsShown(0);
    setTyped("");

    steps.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setStepsShown(i + 1), 450 + i * 650),
      );
    });

    timers.current.push(
      setTimeout(() => setStage("done"), 450 + steps.length * 650),
    );
  }

  // Reveal the summary a word at a time once the steps have finished.
  useEffect(() => {
    if (stage !== "done") return;
    const words = summary.split(" ");
    let i = 0;
    const tick = setInterval(() => {
      i += 1;
      setTyped(words.slice(0, i).join(" "));
      if (i >= words.length) clearInterval(tick);
    }, 45);
    return () => clearInterval(tick);
  }, [stage, summary]);

  function choose(next: number) {
    reset();
    setWeeks(next);
    setStage("idle");
    setTyped("");
    setStepsShown(0);
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold text-chocolate-900">
          <span aria-hidden="true" className="mr-2">
            1.
          </span>
          How far ahead are we planning?
        </h2>
        <div
          role="group"
          aria-label="Plan length"
          className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap"
        >
          {options.map((o) => {
            const active = o.weeks === weeks;
            return (
              <button
                key={o.weeks}
                type="button"
                onClick={() => choose(o.weeks)}
                aria-pressed={active}
                className={`rounded-2xl border-4 border-chocolate-700 px-7 py-5 text-2xl font-bold transition-colors focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900 ${
                  active
                    ? "bg-chocolate-700 text-cream-50"
                    : "bg-cream-100 text-chocolate-900 hover:bg-custard"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-chocolate-900">
          <span aria-hidden="true" className="mr-2">
            2.
          </span>
          Make the plan
        </h2>
        <button
          type="button"
          onClick={generate}
          disabled={stage === "working"}
          className="w-full rounded-3xl border-4 border-chocolate-700 bg-custard px-8 py-7 text-3xl font-bold text-chocolate-900 shadow-[0_6px_0_var(--color-chocolate-700)] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900 active:translate-y-1 active:shadow-none disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0 sm:w-auto"
        >
          <span aria-hidden="true" className="mr-3">
            ✨
          </span>
          {stage === "working" ? "Thinking…" : "Generate restock plan"}
        </button>
      </section>

      <div aria-live="polite" aria-atomic="false">
        {stage !== "idle" && (
          <section className="rounded-3xl border-4 border-chocolate-700 bg-cream-100 p-6 sm:p-8">
            <ol className="space-y-3">
              {steps.slice(0, stepsShown).map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-xl text-chocolate-800"
                >
                  <span aria-hidden="true">✅</span>
                  <span>{step}</span>
                </li>
              ))}
              {stage === "working" && stepsShown < steps.length && (
                <li className="flex items-start gap-3 text-xl text-chocolate-600">
                  <span aria-hidden="true" className="animate-pulse">
                    ⏳
                  </span>
                  <span>{steps[stepsShown]}</span>
                </li>
              )}
            </ol>

            {stage === "done" && (
              <>
                <p className="mt-6 border-t-4 border-cream-300 pt-6 text-2xl leading-relaxed text-chocolate-900">
                  {typed}
                  {typed.length < summary.length && (
                    <span aria-hidden="true" className="animate-pulse">
                      ▍
                    </span>
                  )}
                </p>

                {plan.buy.length > 0 && (
                  <>
                    <h3 className="mt-8 mb-4 text-2xl font-bold text-chocolate-900">
                      Buy these
                    </h3>
                    <ul className="overflow-hidden rounded-2xl border-4 border-chocolate-700">
                      {plan.buy.map((line) => (
                        <li
                          key={line.ingredientId}
                          className="flex flex-wrap items-center gap-4 border-b-2 border-cream-300 bg-cream-50 px-5 py-4 last:border-b-0"
                        >
                          <span aria-hidden="true" className="text-4xl leading-none">
                            {line.icon}
                          </span>
                          <span className="flex-1 text-2xl text-chocolate-900">
                            {line.name}
                          </span>
                          <span className="rounded-full bg-chocolate-700 px-5 py-2 text-xl font-bold text-cream-50">
                            {formatAmount(line.toBuy, line.unit)}
                          </span>
                          <span className="w-24 text-right text-xl text-chocolate-600">
                            {money(line.cost, currencySymbol)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-right text-3xl font-bold text-chocolate-900">
                      Total about {money(plan.totalCost, currencySymbol)}
                    </p>
                  </>
                )}

                {plan.covered.length > 0 && (
                  <details className="mt-8">
                    <summary className="cursor-pointer text-xl font-semibold text-chocolate-700">
                      You already have enough of {plan.covered.length}{" "}
                      {plan.covered.length === 1 ? "ingredient" : "ingredients"}
                    </summary>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {plan.covered.map((line) => (
                        <li
                          key={line.ingredientId}
                          className="rounded-full bg-matcha px-4 py-2 text-lg text-chocolate-900"
                        >
                          <span aria-hidden="true" className="mr-1.5">
                            {line.icon}
                          </span>
                          {line.name}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {plan.unmatchedStock.length > 0 && (
                  <p className="mt-6 text-lg text-taupe">
                    Not counted, because no recipe uses them yet:{" "}
                    {plan.unmatchedStock.join(", ")}.
                  </p>
                )}
              </>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
