import { PageHeader } from "@/app/_components/page-header";
import { Screen } from "@/app/_components/screen";
import {
  RestockPlanner,
  type TimeframeOption,
} from "@/app/restock/_components/restock-planner";
import { SupplierBoard } from "@/app/restock/_components/supplier-board";
import { readCatalog } from "@/lib/catalog";
import { pastOrders } from "@/lib/data/past-orders";
import { inventoryFromReceipts, readReceipts } from "@/lib/receipts";
import { buildRestockPlan, type RestockPlan } from "@/lib/restock";
import type { DailyUsage } from "@/lib/supplier-plan";
import { ingredientUsage, ordersInLastDays } from "@/lib/usage";

// Owner: TBD
// The plan is real arithmetic over lib/data/past-orders.ts and the saved
// invoices; the assistant in _components/restock-planner.tsx only paces how it
// is revealed. No model is called anywhere on this page.

/** How much history the weekly average is taken from. */
const SAMPLE_DAYS = 7;

const options: TimeframeOption[] = [
  { weeks: 1, label: "1 week" },
  { weeks: 2, label: "2 weeks" },
  { weeks: 4, label: "1 month" },
  { weeks: 13, label: "3 months" },
];

export default async function Page() {
  const [catalog, receipts] = await Promise.all([readCatalog(), readReceipts()]);
  const inventory = inventoryFromReceipts(receipts);
  const orders = ordersInLastDays(pastOrders, SAMPLE_DAYS);

  const plans: Record<number, RestockPlan> = {};
  for (const { weeks } of options) {
    plans[weeks] = buildRestockPlan({
      orders,
      sampleWeeks: SAMPLE_DAYS / 7,
      catalog,
      inventory,
      weeks,
    });
  }

  // What a single day gets through, averaged over the sample window. The
  // supplier advice is this against what each supplier delivers daily.
  const usedPerDay: DailyUsage = {};
  for (const row of ingredientUsage(orders, catalog)) {
    usedPerDay[row.ingredientId] = row.amount / SAMPLE_DAYS;
  }

  return (
    <Screen>
      <PageHeader
        title="Restock"
        description="Pick how far ahead you are planning, and we will work out the shopping list."
      />

      <RestockPlanner
        options={options}
        plans={plans}
        currencySymbol={catalog.currency === "USD" ? "$" : `${catalog.currency} `}
      />

      <SupplierBoard usedPerDay={usedPerDay} />
    </Screen>
  );
}
