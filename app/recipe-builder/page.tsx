import { PageHeader } from "@/app/_components/page-header";
import { Screen } from "@/app/_components/screen";
import { RecipeForm } from "@/app/recipe-builder/_components/recipe-form";
import { RecipeList } from "@/app/recipe-builder/_components/recipe-list";
import { readCatalog } from "@/lib/catalog";

export default async function Page() {
  const { currency, ingredients, menuItems } = await readCatalog();
  const names = new Map(ingredients.map((ingredient) => [ingredient.id, ingredient.name]));
  const symbol = currency === "USD" ? "$" : `${currency} `;

  const recipes = menuItems.map((item) => ({
    id: item.id,
    name: item.name,
    price: `${symbol}${item.sellPrice.toFixed(2)}`,
    ingredients: item.ingredients.map((line) => ({
      name: names.get(line.ingredientId) ?? "Ingredient",
      amount: `${line.quantity} ${line.unit}`,
    })),
  }));

  return (
    <Screen>
      <PageHeader
        title="Recipe builder"
        description="Name the recipe, set the price, then type each ingredient."
      />

      <RecipeForm currency={currency} />
      <RecipeList recipes={recipes} />
    </Screen>
  );
}
