import { PageHeader } from "@/app/_components/page-header";
import { Screen } from "@/app/_components/screen";
import { pastOrders, type PastOrder } from "@/lib/data/past-orders";
import { CAFE_TIME_ZONE, dayKey } from "@/lib/usage";

// Owner: TBD
// Mockup: past orders showing items, quantity and timestamp only. Reads from
// lib/data/past-orders.ts until orders are stored for real.

const dayLabel = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: CAFE_TIME_ZONE,
});

const timeLabel = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: CAFE_TIME_ZONE,
});

function groupByDay(orders: PastOrder[]) {
  const today = dayKey(new Date());
  const yesterday = dayKey(new Date(Date.now() - 86_400_000));
  const groups: { key: string; label: string; orders: PastOrder[] }[] = [];

  for (const order of orders) {
    const date = new Date(order.placedAt);
    const key = dayKey(date);
    let group = groups.find((g) => g.key === key);
    if (!group) {
      const label =
        key === today
          ? "Today"
          : key === yesterday
            ? "Yesterday"
            : dayLabel.format(date);
      group = { key, label, orders: [] };
      groups.push(group);
    }
    group.orders.push(order);
  }

  return groups;
}

export default function Page() {
  const groups = groupByDay(pastOrders);

  return (
    <Screen>
      <PageHeader
        title="Order history"
        description="Every order placed so far, newest first."
      />

      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.key}>
            <h2 className="mb-4 text-2xl font-semibold text-chocolate-900">
              {group.label}
            </h2>

            <ul className="space-y-6">
              {group.orders.map((order) => (
                <li
                  key={order.id}
                  className="rounded-3xl border-2 border-chocolate-700 bg-cream-100 px-6 py-5"
                >
                  <p className="flex items-center gap-3 text-2xl font-semibold text-chocolate-800">
                    <span aria-hidden="true" className="text-3xl">
                      🕐
                    </span>
                    {timeLabel.format(new Date(order.placedAt))}
                  </p>

                  <ul className="mt-2">
                    {order.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-5 border-t-2 border-cream-300 py-4"
                      >
                        <span aria-hidden="true" className="text-5xl leading-none">
                          {item.icon}
                        </span>
                        <span className="flex-1 text-2xl text-chocolate-900">
                          {item.name}
                        </span>
                        <span className="rounded-full bg-chocolate-700 px-5 py-2 text-2xl font-semibold text-cream-50">
                          <span aria-hidden="true">×&nbsp;{item.quantity}</span>
                          <span className="sr-only">
                            {item.quantity} ordered
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Screen>
  );
}
