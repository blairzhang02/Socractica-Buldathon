import { PageHeader } from "@/app/_components/page-header";
import { RecipeForm } from "@/app/recipe-builder/_components/recipe-form";
import { readCatalog } from "@/lib/catalog";

const categoryFill: Record<string, string> = {
  pizza: "bg-tan",
  bread: "bg-custard",
  pastry: "bg-rose",
  drink: "bg-periwinkle",
  side: "bg-matcha",
};

export default async function Page() {
  const { currency, ingredients, menuItems } = await readCatalog();

  const money = (n: number) =>
    `${currency} ${n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <>
      <PageHeader
        title="Recipe builder"
        description="Build a menu item from catalog ingredients and see what it costs you."
      />

      <RecipeForm ingredients={ingredients} currency={currency} />

      <h2 className="mt-12 text-lg font-semibold text-chocolate-900">
        Costed menu ({menuItems.length})
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-cream-300 bg-cream-100">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-taupe">
              <th className="px-4 py-3 text-left font-semibold">Item</th>
              <th className="px-4 py-3 text-left font-semibold">Yield</th>
              <th className="px-4 py-3 text-right font-semibold">Cost / serving</th>
              <th className="px-4 py-3 text-right font-semibold">Sells for</th>
              <th className="px-4 py-3 text-right font-semibold">Margin</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => {
              const perServing = item.costPerServing ?? item.totalCost;
              const margin =
                item.sellPrice > 0
                  ? ((item.sellPrice - perServing) / item.sellPrice) * 100
                  : 0;
              return (
                <tr key={item.id} className="border-t border-cream-300">
                  <td className="px-4 py-3">
                    <span className="font-semibold text-chocolate-900">
                      {item.name}
                    </span>
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold text-chocolate-900 ${
                        categoryFill[item.category] ?? "bg-cream-200"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="ml-2 text-xs text-taupe">
                      {item.ingredients.length} ingredients
                    </span>
                  </td>
                  <td className="px-4 py-3 text-chocolate-600">
                    {item.yield.quantity} {item.yield.unit}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-chocolate-700">
                    {money(perServing)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-chocolate-700">
                    {money(item.sellPrice)}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-semibold text-ink-lime">
                    {margin.toFixed(0)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
