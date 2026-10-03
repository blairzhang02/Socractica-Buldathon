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
 * What a day's orders get through, rounded to an orderable amount. Null when
 * the supplier is not tied to an ingredient the recipes use.
 */
export function neededPerDay(
  supplier: Supplier,
  usedPerDay: DailyUsage,
): number | null {
  if (!supplier.ingredientId) return null;
  const used = usedPerDay[supplier.ingredientId];
  if (used == null) return null;
  return tidy(used);
}

/** What she currently has delivered each day: the need, times her habit. */
export function boughtPerDay(
  supplier: Supplier,
  usedPerDay: DailyUsage,
): number | null {
  if (!supplier.ingredientId) return null;
  const used = usedPerDay[supplier.ingredientId];
  if (used == null) return null;
  return tidy(used * (supplier.buyingFactor ?? 1));
}

/**
 * Compares what a supplier delivers each day against what the orders actually
 * used, and says whether to buy more or less.
 */
export function adviseSupplier(
  supplier: Supplier,
  usedPerDay: DailyUsage,
): Advice {
  const needed = neededPerDay(supplier, usedPerDay);
  const bought = boughtPerDay(supplier, usedPerDay);
  if (needed == null || bought == null) return { kind: "none" };
  if (needed === bought) return { kind: "keep" };

  const gap = Math.abs(bought - needed);
  if (gap <= Math.max(bought, needed) * TOLERANCE) return { kind: "keep" };

  return { kind: needed > bought ? "up" : "down", suggested: needed };
}

export function dailyCost(supplier: Supplier, usedPerDay: DailyUsage): number {
  const bought = boughtPerDay(supplier, usedPerDay);
  if (bought != null && supplier.unitPrice != null) {
    return bought * supplier.unitPrice;
  }
  return supplier.dailyCost ?? 0;
}

export const money = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
