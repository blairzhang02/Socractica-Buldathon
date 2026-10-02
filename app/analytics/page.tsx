import { PageHeader } from "@/app/_components/page-header";
import {
  UsageView,
  type UsagePeriod,
} from "@/app/analytics/_components/usage-view";
import { readCatalog } from "@/lib/catalog";
import { pastOrders } from "@/lib/data/past-orders";
import { ingredientUsage, ordersInLastDays } from "@/lib/usage";

// Owner: TBD
// How much of each ingredient the orders in lib/data/past-orders.ts consumed,
// costed out of the recipes in lib/data/menu-items.json.

const plural = (count: number) => (count === 1 ? "order" : "orders");

export default async function Page() {
  const catalog = await readCatalog();

  const today = ordersInLastDays(pastOrders, 1);
  const week = ordersInLastDays(pastOrders, 7);

  const periods: UsagePeriod[] = [
    {
      id: "today",
      label: "Today",
      summary: `From ${today.length} ${plural(today.length)} today.`,
      usage: ingredientUsage(today, catalog),
    },
    {
      id: "week",
      label: "This week",
      summary: `From ${week.length} ${plural(week.length)} over the last 7 days.`,
      usage: ingredientUsage(week, catalog),
    },
  ];

  return (
    <>
      <PageHeader
        title="Supply & analytics"
        description="What your orders used up."
      />
      <UsageView periods={periods} />
    </>
  );
}
