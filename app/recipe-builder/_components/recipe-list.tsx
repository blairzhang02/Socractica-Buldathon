"use client";

import { useState } from "react";

export type SavedRecipe = {
  id: string;
  name: string;
  price: string;
  ingredients: { name: string; amount: string }[];
};

export function RecipeList({ recipes }: { recipes: SavedRecipe[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-chocolate-900">Recipes ({recipes.length})</h2>
      <ul className="mt-4 divide-y divide-cream-300 overflow-hidden rounded-2xl border border-cream-300 bg-cream-100">
        {recipes.map((recipe) => {
          const open = openId === recipe.id;
          return (
            <li key={recipe.id} className="px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-chocolate-900">{recipe.name}</p>
                  <p className="text-sm text-chocolate-600">{recipe.price}</p>
                </div>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : recipe.id)}
                  className="rounded-full border border-chocolate-500 px-3 py-1.5 text-sm font-semibold text-chocolate-700 hover:bg-cream-200"
                >
                  {open ? "Hide ingredients" : "View ingredients"}
                </button>
              </div>
              {open && (
                <ul className="mt-3 divide-y divide-cream-300 rounded-xl border border-cream-300 bg-cream-50">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={`${recipe.id}-${index}`}
                      className="flex items-center justify-between px-3 py-2 text-sm"
                    >
                      <span>{ingredient.name}</span>
                      <span className="text-chocolate-600">{ingredient.amount}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
