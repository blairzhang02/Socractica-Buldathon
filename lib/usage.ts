import { FALLBACK_ICON, ingredientIcons } from "@/lib/data/ingredient-icons";
import type { PastOrder } from "@/lib/data/past-orders";
import type { MenuCatalog, Unit } from "@/lib/types";

/** The cafe's wall clock. Every day boundary on the site is measured in it. */
export const CAFE_TIME_ZONE = "America/New_York";

/** YYYY-MM-DD in the cafe's timezone, so days group and compare correctly. */
const dayKeyFormat = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: CAFE_TIME_ZONE,
});

export const dayKey = (date: Date) => dayKeyFormat.format(date);

/** How ingredients are measured out in the kitchen — one list per way. */
export type UsageGroup = "weighed" | "poured" | "counted";

export type IngredientUsage = {
  ingredientId: string;
  name: string;
  icon: string;
  group: UsageGroup;
  /** Total used, in the ingredient's own catalog unit. */
  amount: number;
  unit: Unit;
};

const groupOf = (unit: Unit): UsageGroup =>
  unit === "g" || unit === "kg"
    ? "weighed"
    : unit === "ml" || unit === "l"
      ? "poured"
      : "counted";

/** Orders placed within the last `days` days, counting today as day one. */
export function ordersInLastDays(orders: PastOrder[], days: number) {
  const cutoff = new Set<string>();
  for (let i = 0; i < days; i++) {
    cutoff.add(dayKey(new Date(Date.now() - i * 86_400_000)));
  }
  return orders.filter((order) => cutoff.has(dayKey(new Date(order.placedAt))));
}

/**
 * Totals up what the given orders consumed. Each ordered item contributes its
 * recipe's ingredients divided by the recipe's yield, times the quantity sold.
 */
export function ingredientUsage(
  orders: PastOrder[],
  catalog: MenuCatalog,
): IngredientUsage[] {
  const menuById = new Map(catalog.menuItems.map((m) => [m.id, m]));
  const ingredientById = new Map(catalog.ingredients.map((i) => [i.id, i]));
  const totals = new Map<string, number>();

  for (const order of orders) {
    for (const line of order.items) {
      const menuItem = menuById.get(line.menuItemId);
      if (!menuItem) continue;
      const perServing = Math.max(1, menuItem.yield.quantity);
      for (const recipeLine of menuItem.ingredients) {
        const used = (recipeLine.quantity / perServing) * line.quantity;
        totals.set(
          recipeLine.ingredientId,
          (totals.get(recipeLine.ingredientId) ?? 0) + used,
        );
      }
    }
  }

  return [...totals]
    .flatMap(([ingredientId, amount]) => {
      const ingredient = ingredientById.get(ingredientId);
      if (!ingredient) return [];
      return [
        {
          ingredientId,
          name: ingredient.name,
          icon: ingredientIcons[ingredientId] ?? FALLBACK_ICON,
          group: groupOf(ingredient.unit),
          amount,
          unit: ingredient.unit,
        },
      ];
    })
    .sort((a, b) => b.amount - a.amount);
}

/** Plain-language amount: big units when the number would get long. */
export function formatAmount(amount: number, unit: Unit): string {
  if (unit === "g" || unit === "kg") {
    const grams = unit === "kg" ? amount * 1000 : amount;
    if (grams < 1) return "less than 1 g";
    return grams >= 1000 ? `${(grams / 1000).toFixed(1)} kg` : `${Math.round(grams)} g`;
  }
  if (unit === "ml" || unit === "l") {
    const ml = unit === "l" ? amount * 1000 : amount;
    if (ml < 1) return "less than 1 ml";
    return ml >= 1000 ? `${(ml / 1000).toFixed(1)} L` : `${Math.round(ml)} ml`;
  }
  return amount < 1 ? "less than 1" : `${Math.round(amount)}`;
}
