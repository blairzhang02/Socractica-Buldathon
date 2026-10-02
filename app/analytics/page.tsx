import { PageHeader } from "@/app/_components/page-header";

type IngredientRow = {
  name: string;
  unit: string;
  used: number;
  onHand: number;
};

// Used = servings sold × recipe amount. On hand is what is left in the kitchen.
const ingredients: IngredientRow[] = [
  { name: "Heavy cream", unit: "ml", used: 86 * 30, onHand: 800 },
  { name: "Greek yogurt", unit: "g", used: 86 * 120, onHand: 4200 },
  { name: "Apple compote", unit: "g", used: 86 * 80 + 31 * 90, onHand: 2500 },
  { name: "Pumpkin puree", unit: "g", used: 54 * 40, onHand: 400 },
  { name: "Butter", unit: "g", used: 54 * 25 + 31 * 30, onHand: 900 },
  { name: "Honey", unit: "g", used: 86 * 15, onHand: 900 },
  { name: "House granola", unit: "g", used: 86 * 40, onHand: 5000 },
  { name: "Cinnamon", unit: "g", used: 86 * 1 + 54 * 0.5, onHand: 200 },
  { name: "Flour", unit: "g", used: 54 * 80 + 31 * 60, onHand: 8000 },
  { name: "Sugar", unit: "g", used: 54 * 20 + 31 * 15, onHand: 2200 },
];

function formatQty(amount: number, unit: string) {
  const value = Number.isInteger(amount)
    ? amount.toLocaleString("en-US")
    : amount.toLocaleString("en-US", { maximumFractionDigits: 1 });
  return `${value} ${unit}`;
}

export default function Page() {
  const short = ingredients.filter((row) => row.used > row.onHand);
  const covered = ingredients.filter((row) => row.used <= row.onHand);

  return (
    <div className="text-[#4A1B16]">
      <PageHeader
        title="Supply"
        description="86 Fall Parfaits, 54 Pumpkin Scones, and 31 Apple Hand Pies sold this week."
      />

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-[#802824] uppercase">
          Buy more
        </h2>
        <ul className="divide-y divide-[#EEDCC4] overflow-hidden rounded-2xl border border-[#EEDCC4] bg-[#FCF5EB]">
          {short.map((row) => (
            <li key={row.name} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="font-medium">{row.name}</span>
              <span className="shrink-0 rounded-full bg-[#F7D3CE] px-2.5 py-1 text-xs font-semibold text-[#8A2016]">
                {formatQty(row.used - row.onHand, row.unit)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-[#802824] uppercase">
          Enough on hand
        </h2>
        <ul className="divide-y divide-[#EEDCC4] overflow-hidden rounded-2xl border border-[#EEDCC4] bg-[#FCF5EB]">
          {covered.map((row) => (
            <li key={row.name} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="font-medium">{row.name}</span>
              <span className="shrink-0 text-sm text-[#2B5120]">
                {formatQty(row.onHand - row.used, row.unit)} left
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
