import type { InventoryItem } from "@/lib/receipts";
import type { MenuCatalog, Unit } from "@/lib/types";
import { ingredientUsage } from "@/lib/usage";
import type { PastOrder } from "@/lib/data/past-orders";
import { ingredientIcons, FALLBACK_ICON } from "@/lib/data/ingredient-icons";

/** Buy this much more than the projection, so a busy week does not run us dry. */
const SAFETY_MARGIN = 1.1;

export type PlanLine = {
  ingredientId: string;
  name: string;
  icon: string;
  unit: Unit;
  /** Average used per week, from the orders in the sample window. */
  perWeek: number;
  /** What the timeframe needs, including the safety margin. */
  needed: number;
  /** Counted from the saved invoices. */
  onHand: number;
  /** `needed - onHand`, never below zero. */
  toBuy: number;
  /** `toBuy * unitPrice`. */
  cost: number;
};

export type RestockPlan = {
  weeks: number;
  /** How many orders the usage average was taken from. */
  sampleOrders: number;
  /** Lines that need buying, dearest first. */
  buy: PlanLine[];
  /** Lines already covered by what is on the shelf. */
  covered: PlanLine[];
  totalCost: number;
  /** Ingredients with stock on hand but no recorded usage yet. */
  unmatchedStock: string[];
};

const normalise = (name: string) => name.trim().toLowerCase();

/** Converts an invoice amount into the unit the catalog prices the item in. */
function toCatalogUnit(quantity: number, from: Unit, to: Unit): number | null {
  if (from === to) return quantity;
  if (from === "kg" && to === "g") return quantity * 1000;
  if (from === "g" && to === "kg") return quantity / 1000;
  if (from === "l" && to === "ml") return quantity * 1000;
  if (from === "ml" && to === "l") return quantity / 1000;
  return null;
}

/**
 * Projects the next `weeks` weeks from recent usage and subtracts what the
 * invoices say is already on the shelf.
 *
 * `sampleOrders` should be the orders the usage was measured over, and
 * `sampleWeeks` how long that window was, so the weekly average is honest even
 * when the sample is not exactly seven days.
 */
export function buildRestockPlan({
  orders,
  sampleWeeks,
  catalog,
  inventory,
  weeks,
}: {
  orders: PastOrder[];
  sampleWeeks: number;
  catalog: MenuCatalog;
  inventory: InventoryItem[];
  weeks: number;
}): RestockPlan {
  const usage = ingredientUsage(orders, catalog);
  const priceOf = new Map(catalog.ingredients.map((i) => [i.id, i.unitPrice]));
  const byName = new Map(catalog.ingredients.map((i) => [normalise(i.name), i]));

  const stock = new Map<string, number>();
  const unmatchedStock: string[] = [];
  for (const item of inventory) {
    const ingredient = byName.get(normalise(item.name));
    if (!ingredient) {
      unmatchedStock.push(item.name);
      continue;
    }
    const amount = toCatalogUnit(item.quantity, item.unit, ingredient.unit);
    if (amount === null) {
      unmatchedStock.push(item.name);
      continue;
    }
    stock.set(ingredient.id, (stock.get(ingredient.id) ?? 0) + amount);
  }

  const lines: PlanLine[] = usage.map((row) => {
    const perWeek = row.amount / sampleWeeks;
    const needed = perWeek * weeks * SAFETY_MARGIN;
    const onHand = stock.get(row.ingredientId) ?? 0;
    const toBuy = Math.max(0, needed - onHand);
    return {
      ingredientId: row.ingredientId,
      name: row.name,
      icon: ingredientIcons[row.ingredientId] ?? FALLBACK_ICON,
      unit: row.unit,
      perWeek,
      needed,
      onHand,
      toBuy,
      cost: toBuy * (priceOf.get(row.ingredientId) ?? 0),
    };
  });

  const buy = lines.filter((l) => l.toBuy > 0).sort((a, b) => b.cost - a.cost);
  const covered = lines.filter((l) => l.toBuy === 0).sort((a, b) => a.name.localeCompare(b.name));

  return {
    weeks,
    sampleOrders: orders.length,
    buy,
    covered,
    totalCost: buy.reduce((sum, l) => sum + l.cost, 0),
    unmatchedStock,
  };
}
