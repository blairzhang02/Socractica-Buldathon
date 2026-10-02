/**
 * Mockup data for the order history screen. Hand-written stand-in until orders
 * are persisted for real — timestamp, item names and quantities only.
 */

export type PastOrderItem = {
  name: string;
  /** Emoji shown next to the name. Big and readable at a glance. */
  icon: string;
  quantity: number;
};

export type PastOrder = {
  id: string;
  /** ISO 8601, with the cafe's offset. */
  placedAt: string;
  items: PastOrderItem[];
};

/** Newest first. */
export const pastOrders: PastOrder[] = [
  {
    id: "order-1042",
    placedAt: "2026-10-02T09:15:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", quantity: 2 },
      { name: "Butter Croissant", icon: "🥐", quantity: 3 },
      { name: "Blueberry Scone", icon: "🫐", quantity: 1 },
    ],
  },
  {
    id: "order-1041",
    placedAt: "2026-10-02T08:05:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", quantity: 1 },
      { name: "Banana Bread", icon: "🍌", quantity: 2 },
    ],
  },
  {
    id: "order-1040",
    placedAt: "2026-10-01T15:40:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", quantity: 4 },
      { name: "Brown Butter Cookie", icon: "🍪", quantity: 6 },
    ],
  },
  {
    id: "order-1039",
    placedAt: "2026-10-01T12:20:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", quantity: 2 },
      { name: "Grilled Cheese", icon: "🧀", quantity: 2 },
      { name: "Lemonade", icon: "🍋", quantity: 1 },
    ],
  },
  {
    id: "order-1038",
    placedAt: "2026-09-30T10:30:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", quantity: 3 },
      { name: "Cinnamon Roll", icon: "🧁", quantity: 2 },
      { name: "Rosemary Focaccia", icon: "🍞", quantity: 1 },
    ],
  },
  {
    id: "order-1037",
    placedAt: "2026-09-28T16:55:00-04:00",
    items: [
      { name: "Chai Latte", icon: "🫖", quantity: 2 },
      { name: "Apple Pie Slice", icon: "🥧", quantity: 2 },
    ],
  },
];
