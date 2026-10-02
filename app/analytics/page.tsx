import { PageHeader } from "@/app/_components/page-header";
import { Screen } from "@/app/_components/screen";
import {
  UsageView,
  type UsagePeriod,
} from "@/app/analytics/_components/usage-view";
import { ReceiptForm } from "@/app/inventory/_components/receipt-form";
import { readCatalog } from "@/lib/catalog";
import { pastOrders } from "@/lib/data/past-orders";
import { inventoryFromReceipts, readReceipts } from "@/lib/receipts";
import { ingredientUsage, ordersInLastDays, stockAfterUse } from "@/lib/usage";

// Owner: TBD
// Invoices say what she bought. Orders say what was used. Each line shows both.

const plural = (count: number) => (count === 1 ? "order" : "orders");

export default async function Page() {
  const catalog = await readCatalog();
  const onHand = inventoryFromReceipts(await readReceipts());

  const today = ordersInLastDays(pastOrders, 1);
  const week = ordersInLastDays(pastOrders, 7);

  const periods: UsagePeriod[] = [
    {
      id: "today",
      label: "Today",
      summary: `After ${today.length} ${plural(today.length)} today.`,
      stock: stockAfterUse(onHand, ingredientUsage(today, catalog)),
    },
    {
      id: "week",
      label: "This week",
      summary: `After ${week.length} ${plural(week.length)} over the last 7 days.`,
      stock: stockAfterUse(onHand, ingredientUsage(week, catalog)),
    },
  ];

  return (
    <Screen>
      <PageHeader
        title="Supply"
        description="Add an invoice, then see what you had and what is left."
      />
      <ReceiptForm />
      <div className="mt-12">
        <UsageView periods={periods} />
      </div>
    </Screen>
  );
}
