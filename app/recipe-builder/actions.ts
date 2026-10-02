"use server";

import { revalidatePath } from "next/cache";
import { addMenuItem, readCatalog, round2 } from "@/lib/catalog";
import type { Ingredient, MenuItem, MenuItemIngredient, Unit } from "@/lib/types";

export type NewRecipeLine = {
  name: string;
  quantity: number;
  unit: Unit;
};

export async function createMenuItem(input: {
  name: string;
  sellPrice: number;
  lines: NewRecipeLine[];
}) {
  const name = input.name.trim();
  if (!name) return { ok: false as const, error: "Give the recipe a name." };
  if (!(input.sellPrice >= 0)) {
    return { ok: false as const, error: "Enter what you charge." };
  }

  const catalog = await readCatalog();
  const known = [...catalog.ingredients];
  const created: Ingredient[] = [];
  const ingredients: MenuItemIngredient[] = [];

  for (const line of input.lines) {
    const ingredientName = line.name.trim();
    if (!ingredientName || !(line.quantity > 0)) continue;

    let ingredient = known.find(
      (item) => item.name.toLowerCase() === ingredientName.toLowerCase(),
    );
    if (!ingredient) {
      ingredient = {
        id: `${slug(ingredientName)}-${created.length}-${Date.now().toString(36)}`,
        name: ingredientName,
        unit: line.unit,
        unitPrice: 0,
      };
      known.push(ingredient);
      created.push(ingredient);
    }

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

  const totalCost = round2(ingredients.reduce((sum, line) => sum + line.lineCost, 0));
  const item: MenuItem = {
    id: `${slug(name)}-${Date.now().toString(36)}`,
    name,
    category: "pastry",
    yield: { quantity: 1, unit: "each" },
    sellPrice: round2(input.sellPrice),
    ingredients,
    totalCost,
  };

  await addMenuItem(item, created);
  revalidatePath("/recipe-builder");
  return { ok: true as const, name: item.name };
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
