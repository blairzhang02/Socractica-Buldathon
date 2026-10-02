"use server";

import { revalidatePath } from "next/cache";
import { addMenuItem, readCatalog, round2 } from "@/lib/catalog";
import type {
  MenuItem,
  MenuItemCategory,
  MenuItemIngredient,
  Unit,
} from "@/lib/types";

export type NewRecipeInput = {
  name: string;
  category: MenuItemCategory;
  yieldQuantity: number;
  yieldUnit: Unit;
  sellPrice: number;
  lines: { ingredientId: string; quantity: number }[];
};

export async function createMenuItem(input: NewRecipeInput) {
  const name = input.name.trim();
  if (!name) return { ok: false as const, error: "Give the menu item a name." };

  const catalog = await readCatalog();
  const byId = new Map(catalog.ingredients.map((i) => [i.id, i]));

  const ingredients: MenuItemIngredient[] = [];
  for (const line of input.lines) {
    const ingredient = byId.get(line.ingredientId);
    if (!ingredient || !(line.quantity > 0)) continue;
    ingredients.push({
      ingredientId: ingredient.id,
      quantity: line.quantity,
      unit: ingredient.unit,
      unitPrice: ingredient.unitPrice,
      lineCost: round2(line.quantity * ingredient.unitPrice),
    });
  }

  if (ingredients.length === 0) {
    return { ok: false as const, error: "Add at least one ingredient." };
  }

  const totalCost = round2(ingredients.reduce((sum, i) => sum + i.lineCost, 0));
  const yieldQuantity = Math.max(1, input.yieldQuantity);

  const item: MenuItem = {
    id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`,
    name,
    category: input.category,
    yield: { quantity: yieldQuantity, unit: input.yieldUnit },
    sellPrice: input.sellPrice,
    ingredients,
    totalCost,
    ...(yieldQuantity > 1
      ? { costPerServing: round2(totalCost / yieldQuantity) }
      : {}),
  };

  await addMenuItem(item);
  revalidatePath("/recipe-builder");
  return { ok: true as const, name: item.name };
}
