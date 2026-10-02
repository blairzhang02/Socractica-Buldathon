/**
 * Mockup data for the order history screen. Hand-written stand-in until orders
 * are persisted for real — timestamp, item names and quantities only.
 *
 * `menuItemId` points at `lib/data/menu-items.json`, which is how the supply
 * page turns these orders into ingredient usage.
 */

export type PastOrderItem = {
  name: string;
  /** Emoji shown next to the name. Big and readable at a glance. */
  icon: string;
  /** Matches a `menuItems[].id` in the catalog. */
  menuItemId: string;
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
    id: "order-1018",
    placedAt: "2026-10-02T17:25:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 5 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-1017",
    placedAt: "2026-10-02T16:20:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
    ],
  },
  {
    id: "order-1016",
    placedAt: "2026-10-02T14:50:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-1015",
    placedAt: "2026-10-02T14:40:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-1014",
    placedAt: "2026-10-02T13:30:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-1013",
    placedAt: "2026-10-02T11:30:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-1012",
    placedAt: "2026-10-02T11:25:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
    ],
  },
  {
    id: "order-1011",
    placedAt: "2026-10-02T11:05:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-1042",
    placedAt: "2026-10-02T09:15:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
    ],
  },
  {
    id: "order-1010",
    placedAt: "2026-10-02T08:20:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-1041",
    placedAt: "2026-10-02T08:05:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
    ],
  },
  {
    id: "order-1009",
    placedAt: "2026-10-01T18:45:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
    ],
  },
  {
    id: "order-1008",
    placedAt: "2026-10-01T18:30:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-1040",
    placedAt: "2026-10-01T15:40:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 4 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 6 },
    ],
  },
  {
    id: "order-1007",
    placedAt: "2026-10-01T12:50:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-1006",
    placedAt: "2026-10-01T12:50:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 2 },
    ],
  },
  {
    id: "order-1005",
    placedAt: "2026-10-01T12:25:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
    ],
  },
  {
    id: "order-1039",
    placedAt: "2026-10-01T12:20:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-1004",
    placedAt: "2026-10-01T11:25:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
    ],
  },
  {
    id: "order-1003",
    placedAt: "2026-10-01T10:45:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-1002",
    placedAt: "2026-10-01T09:25:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-1001",
    placedAt: "2026-10-01T08:35:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-1000",
    placedAt: "2026-10-01T08:05:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-999",
    placedAt: "2026-10-01T07:50:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-998",
    placedAt: "2026-09-30T18:20:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
    ],
  },
  {
    id: "order-997",
    placedAt: "2026-09-30T13:40:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-996",
    placedAt: "2026-09-30T12:10:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-995",
    placedAt: "2026-09-30T11:05:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
    ],
  },
  {
    id: "order-1038",
    placedAt: "2026-09-30T10:30:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
    ],
  },
  {
    id: "order-994",
    placedAt: "2026-09-30T10:30:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-993",
    placedAt: "2026-09-30T10:25:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
    ],
  },
  {
    id: "order-992",
    placedAt: "2026-09-30T10:05:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-991",
    placedAt: "2026-09-30T09:25:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-990",
    placedAt: "2026-09-29T18:20:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-989",
    placedAt: "2026-09-29T17:50:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-988",
    placedAt: "2026-09-29T14:50:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-1033",
    placedAt: "2026-09-29T14:25:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 2 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
    ],
  },
  {
    id: "order-987",
    placedAt: "2026-09-29T14:10:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-986",
    placedAt: "2026-09-29T13:20:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
    ],
  },
  {
    id: "order-985",
    placedAt: "2026-09-29T12:40:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-1032",
    placedAt: "2026-09-29T11:10:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-984",
    placedAt: "2026-09-29T11:10:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
    ],
  },
  {
    id: "order-1031",
    placedAt: "2026-09-29T08:40:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
    ],
  },
  {
    id: "order-983",
    placedAt: "2026-09-29T07:40:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-1037",
    placedAt: "2026-09-28T16:55:00-04:00",
    items: [
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 2 },
    ],
  },
  {
    id: "order-982",
    placedAt: "2026-09-28T14:40:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-981",
    placedAt: "2026-09-28T13:05:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-980",
    placedAt: "2026-09-28T12:25:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
    ],
  },
  {
    id: "order-979",
    placedAt: "2026-09-28T12:05:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-978",
    placedAt: "2026-09-28T10:05:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-977",
    placedAt: "2026-09-28T09:45:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-976",
    placedAt: "2026-09-28T07:25:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
    ],
  },
  {
    id: "order-975",
    placedAt: "2026-09-28T07:20:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 1 },
    ],
  },
  {
    id: "order-974",
    placedAt: "2026-09-27T17:20:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 6 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-1030",
    placedAt: "2026-09-27T16:05:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 2 },
    ],
  },
  {
    id: "order-973",
    placedAt: "2026-09-27T14:35:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
    ],
  },
  {
    id: "order-972",
    placedAt: "2026-09-27T14:00:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-971",
    placedAt: "2026-09-27T13:15:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-970",
    placedAt: "2026-09-27T13:00:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 3 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
    ],
  },
  {
    id: "order-969",
    placedAt: "2026-09-27T12:25:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-968",
    placedAt: "2026-09-27T11:45:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-967",
    placedAt: "2026-09-27T11:35:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-966",
    placedAt: "2026-09-27T10:00:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-965",
    placedAt: "2026-09-27T09:30:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-1029",
    placedAt: "2026-09-27T08:40:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 2 },
    ],
  },
  {
    id: "order-964",
    placedAt: "2026-09-27T07:35:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-963",
    placedAt: "2026-09-27T07:30:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
    ],
  },
  {
    id: "order-962",
    placedAt: "2026-09-26T18:05:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-961",
    placedAt: "2026-09-26T17:20:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-1028",
    placedAt: "2026-09-26T16:05:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
    ],
  },
  {
    id: "order-960",
    placedAt: "2026-09-26T14:40:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-959",
    placedAt: "2026-09-26T13:35:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-958",
    placedAt: "2026-09-26T13:25:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-957",
    placedAt: "2026-09-26T13:10:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-956",
    placedAt: "2026-09-26T13:10:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-955",
    placedAt: "2026-09-26T12:05:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
    ],
  },
  {
    id: "order-954",
    placedAt: "2026-09-26T11:25:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-953",
    placedAt: "2026-09-26T10:55:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-952",
    placedAt: "2026-09-26T10:40:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-951",
    placedAt: "2026-09-26T10:35:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-950",
    placedAt: "2026-09-26T10:15:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-1027",
    placedAt: "2026-09-26T08:40:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
    ],
  },
  {
    id: "order-949",
    placedAt: "2026-09-25T17:45:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
    ],
  },
  {
    id: "order-1026",
    placedAt: "2026-09-25T16:05:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 3 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
    ],
  },
  {
    id: "order-948",
    placedAt: "2026-09-25T15:20:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-947",
    placedAt: "2026-09-25T14:05:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-946",
    placedAt: "2026-09-25T13:15:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-945",
    placedAt: "2026-09-25T12:00:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 3 },
    ],
  },
  {
    id: "order-1025",
    placedAt: "2026-09-25T11:10:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-944",
    placedAt: "2026-09-25T10:15:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-1024",
    placedAt: "2026-09-25T08:40:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
    ],
  },
  {
    id: "order-943",
    placedAt: "2026-09-25T07:50:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-942",
    placedAt: "2026-09-24T17:00:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-941",
    placedAt: "2026-09-24T16:30:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-940",
    placedAt: "2026-09-24T16:25:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-1023",
    placedAt: "2026-09-24T14:25:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-939",
    placedAt: "2026-09-24T13:20:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 3 },
    ],
  },
  {
    id: "order-938",
    placedAt: "2026-09-24T12:20:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-937",
    placedAt: "2026-09-24T09:35:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 1 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
    ],
  },
  {
    id: "order-936",
    placedAt: "2026-09-24T09:20:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-1022",
    placedAt: "2026-09-24T08:40:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 2 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
    ],
  },
  {
    id: "order-935",
    placedAt: "2026-09-24T08:25:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-934",
    placedAt: "2026-09-23T16:20:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 6 },
    ],
  },
  {
    id: "order-1021",
    placedAt: "2026-09-23T16:05:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-933",
    placedAt: "2026-09-23T15:35:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-932",
    placedAt: "2026-09-23T13:35:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-931",
    placedAt: "2026-09-23T13:20:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-930",
    placedAt: "2026-09-23T11:55:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-929",
    placedAt: "2026-09-23T11:35:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
    ],
  },
  {
    id: "order-1020",
    placedAt: "2026-09-23T11:10:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-928",
    placedAt: "2026-09-23T10:25:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-927",
    placedAt: "2026-09-23T10:20:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-1019",
    placedAt: "2026-09-23T08:40:00-04:00",
    items: [
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-926",
    placedAt: "2026-09-23T07:45:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-925",
    placedAt: "2026-09-22T18:05:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-924",
    placedAt: "2026-09-22T17:40:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-923",
    placedAt: "2026-09-22T17:30:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
    ],
  },
  {
    id: "order-922",
    placedAt: "2026-09-22T16:55:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
    ],
  },
  {
    id: "order-921",
    placedAt: "2026-09-22T16:05:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
    ],
  },
  {
    id: "order-920",
    placedAt: "2026-09-22T14:05:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-919",
    placedAt: "2026-09-22T13:30:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
    ],
  },
  {
    id: "order-918",
    placedAt: "2026-09-22T11:45:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-917",
    placedAt: "2026-09-22T07:35:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-916",
    placedAt: "2026-09-21T18:40:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-915",
    placedAt: "2026-09-21T16:00:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-914",
    placedAt: "2026-09-21T15:50:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-913",
    placedAt: "2026-09-21T14:40:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-912",
    placedAt: "2026-09-21T14:25:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-911",
    placedAt: "2026-09-21T13:40:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-910",
    placedAt: "2026-09-21T13:00:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
    ],
  },
  {
    id: "order-909",
    placedAt: "2026-09-21T12:35:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-908",
    placedAt: "2026-09-21T07:10:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
    ],
  },
  {
    id: "order-907",
    placedAt: "2026-09-20T18:20:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-906",
    placedAt: "2026-09-20T18:20:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-905",
    placedAt: "2026-09-20T17:50:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-904",
    placedAt: "2026-09-20T16:55:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-903",
    placedAt: "2026-09-20T15:50:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
    ],
  },
  {
    id: "order-902",
    placedAt: "2026-09-20T13:35:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
    ],
  },
  {
    id: "order-901",
    placedAt: "2026-09-20T13:30:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-900",
    placedAt: "2026-09-20T13:25:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-899",
    placedAt: "2026-09-20T11:30:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-898",
    placedAt: "2026-09-20T09:10:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-897",
    placedAt: "2026-09-19T18:45:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-896",
    placedAt: "2026-09-19T18:05:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 2 },
    ],
  },
  {
    id: "order-895",
    placedAt: "2026-09-19T18:05:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-894",
    placedAt: "2026-09-19T12:40:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
    ],
  },
  {
    id: "order-893",
    placedAt: "2026-09-19T12:05:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
    ],
  },
  {
    id: "order-892",
    placedAt: "2026-09-19T11:20:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
    ],
  },
  {
    id: "order-891",
    placedAt: "2026-09-19T09:10:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-890",
    placedAt: "2026-09-19T08:50:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-889",
    placedAt: "2026-09-19T08:40:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-888",
    placedAt: "2026-09-19T08:40:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
    ],
  },
  {
    id: "order-887",
    placedAt: "2026-09-19T08:05:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-886",
    placedAt: "2026-09-18T11:40:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
    ],
  },
  {
    id: "order-885",
    placedAt: "2026-09-18T11:30:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-884",
    placedAt: "2026-09-18T11:20:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-883",
    placedAt: "2026-09-18T09:15:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-882",
    placedAt: "2026-09-18T09:05:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-881",
    placedAt: "2026-09-18T07:55:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-880",
    placedAt: "2026-09-17T18:55:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 3 },
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
    ],
  },
  {
    id: "order-879",
    placedAt: "2026-09-17T11:50:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-878",
    placedAt: "2026-09-17T10:55:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-877",
    placedAt: "2026-09-17T10:15:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
    ],
  },
  {
    id: "order-876",
    placedAt: "2026-09-17T09:15:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-875",
    placedAt: "2026-09-17T08:35:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-874",
    placedAt: "2026-09-16T15:05:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 4 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-873",
    placedAt: "2026-09-16T15:00:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 2 },
    ],
  },
  {
    id: "order-872",
    placedAt: "2026-09-16T14:50:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 1 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-871",
    placedAt: "2026-09-16T14:45:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-870",
    placedAt: "2026-09-16T13:55:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-869",
    placedAt: "2026-09-16T13:05:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 3 },
    ],
  },
  {
    id: "order-868",
    placedAt: "2026-09-16T09:40:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-867",
    placedAt: "2026-09-16T09:40:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-866",
    placedAt: "2026-09-16T07:00:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-865",
    placedAt: "2026-09-15T12:45:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
    ],
  },
  {
    id: "order-864",
    placedAt: "2026-09-15T10:25:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 1 },
    ],
  },
  {
    id: "order-863",
    placedAt: "2026-09-15T10:10:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-862",
    placedAt: "2026-09-15T09:55:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
    ],
  },
  {
    id: "order-861",
    placedAt: "2026-09-15T09:35:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 2 },
    ],
  },
  {
    id: "order-860",
    placedAt: "2026-09-15T07:15:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 3 },
    ],
  },
  {
    id: "order-859",
    placedAt: "2026-09-14T17:00:00-04:00",
    items: [
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-858",
    placedAt: "2026-09-14T15:55:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 3 },
    ],
  },
  {
    id: "order-857",
    placedAt: "2026-09-14T13:15:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 2 },
    ],
  },
  {
    id: "order-856",
    placedAt: "2026-09-14T13:05:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-855",
    placedAt: "2026-09-14T11:10:00-04:00",
    items: [
      { name: "Grilled Cheese", icon: "🧀", menuItemId: "side-grilled-cheese", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-854",
    placedAt: "2026-09-14T10:00:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-853",
    placedAt: "2026-09-14T09:20:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-852",
    placedAt: "2026-09-14T07:45:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-851",
    placedAt: "2026-09-13T16:10:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 1 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-850",
    placedAt: "2026-09-13T14:55:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-849",
    placedAt: "2026-09-13T14:30:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 2 },
    ],
  },
  {
    id: "order-848",
    placedAt: "2026-09-13T11:55:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
    ],
  },
  {
    id: "order-847",
    placedAt: "2026-09-13T10:40:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
    ],
  },
  {
    id: "order-846",
    placedAt: "2026-09-13T09:15:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
    ],
  },
  {
    id: "order-845",
    placedAt: "2026-09-13T08:45:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
    ],
  },
  {
    id: "order-844",
    placedAt: "2026-09-13T07:55:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-843",
    placedAt: "2026-09-13T07:55:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-842",
    placedAt: "2026-09-13T07:20:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
    ],
  },
  {
    id: "order-841",
    placedAt: "2026-09-12T17:45:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 1 },
    ],
  },
  {
    id: "order-840",
    placedAt: "2026-09-12T15:30:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-839",
    placedAt: "2026-09-12T14:00:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-838",
    placedAt: "2026-09-12T13:35:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-837",
    placedAt: "2026-09-12T13:35:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-836",
    placedAt: "2026-09-12T11:15:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-835",
    placedAt: "2026-09-12T10:45:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-834",
    placedAt: "2026-09-12T10:15:00-04:00",
    items: [
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-833",
    placedAt: "2026-09-12T10:10:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-832",
    placedAt: "2026-09-12T09:55:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
    ],
  },
  {
    id: "order-831",
    placedAt: "2026-09-12T09:00:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
    ],
  },
  {
    id: "order-830",
    placedAt: "2026-09-12T08:05:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
    ],
  },
  {
    id: "order-829",
    placedAt: "2026-09-11T17:45:00-04:00",
    items: [
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 1 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 1 },
    ],
  },
  {
    id: "order-828",
    placedAt: "2026-09-11T15:35:00-04:00",
    items: [
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 2 },
    ],
  },
  {
    id: "order-827",
    placedAt: "2026-09-11T13:45:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-826",
    placedAt: "2026-09-11T13:00:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-825",
    placedAt: "2026-09-11T12:10:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-824",
    placedAt: "2026-09-11T10:25:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 1 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 3 },
    ],
  },
  {
    id: "order-823",
    placedAt: "2026-09-11T09:20:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
    ],
  },
  {
    id: "order-822",
    placedAt: "2026-09-11T08:25:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 3 },
    ],
  },
  {
    id: "order-821",
    placedAt: "2026-09-11T07:55:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 1 },
    ],
  },
  {
    id: "order-820",
    placedAt: "2026-09-10T17:30:00-04:00",
    items: [
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 2 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 1 },
    ],
  },
  {
    id: "order-819",
    placedAt: "2026-09-10T16:45:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 6 },
      { name: "Hot Chocolate", icon: "🍫", menuItemId: "drink-hot-chocolate", quantity: 3 },
    ],
  },
  {
    id: "order-818",
    placedAt: "2026-09-10T13:10:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 1 },
    ],
  },
  {
    id: "order-817",
    placedAt: "2026-09-10T13:05:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-816",
    placedAt: "2026-09-10T09:00:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 2 },
      { name: "Chai Latte", icon: "🫖", menuItemId: "drink-chai-latte", quantity: 3 },
    ],
  },
  {
    id: "order-815",
    placedAt: "2026-09-10T07:10:00-04:00",
    items: [
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Banana Bread", icon: "🍌", menuItemId: "pastry-banana-bread", quantity: 3 },
    ],
  },
  {
    id: "order-814",
    placedAt: "2026-09-09T15:50:00-04:00",
    items: [
      { name: "Brown Butter Cookie", icon: "🍪", menuItemId: "cookie-brown-butter", quantity: 3 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Cinnamon Roll", icon: "🧁", menuItemId: "pastry-cinnamon-roll", quantity: 2 },
    ],
  },
  {
    id: "order-813",
    placedAt: "2026-09-09T12:55:00-04:00",
    items: [
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-812",
    placedAt: "2026-09-09T12:50:00-04:00",
    items: [
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-811",
    placedAt: "2026-09-09T11:50:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 1 },
    ],
  },
  {
    id: "order-810",
    placedAt: "2026-09-09T09:10:00-04:00",
    items: [
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 1 },
      { name: "Chamomile Tea", icon: "🍵", menuItemId: "drink-chamomile-tea", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 1 },
    ],
  },
  {
    id: "order-809",
    placedAt: "2026-09-09T08:25:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-808",
    placedAt: "2026-09-08T17:50:00-04:00",
    items: [
      { name: "Apple Pie Slice", icon: "🥧", menuItemId: "pastry-apple-pie", quantity: 3 },
    ],
  },
  {
    id: "order-807",
    placedAt: "2026-09-08T14:00:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 1 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 2 },
    ],
  },
  {
    id: "order-806",
    placedAt: "2026-09-08T12:20:00-04:00",
    items: [
      { name: "Diavola", icon: "🌶️", menuItemId: "pizza-diavola", quantity: 1 },
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Tomato Soup", icon: "🍲", menuItemId: "side-tomato-soup", quantity: 2 },
    ],
  },
  {
    id: "order-805",
    placedAt: "2026-09-08T12:05:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-804",
    placedAt: "2026-09-08T12:00:00-04:00",
    items: [
      { name: "Margherita", icon: "🍕", menuItemId: "pizza-margherita", quantity: 2 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 2 },
    ],
  },
  {
    id: "order-803",
    placedAt: "2026-09-08T11:35:00-04:00",
    items: [
      { name: "Rosemary Focaccia", icon: "🍞", menuItemId: "focaccia-rosemary", quantity: 1 },
      { name: "Lemonade", icon: "🍋", menuItemId: "drink-lemonade", quantity: 3 },
    ],
  },
  {
    id: "order-802",
    placedAt: "2026-09-08T10:05:00-04:00",
    items: [
      { name: "Cappuccino", icon: "☕", menuItemId: "drink-cappuccino", quantity: 3 },
    ],
  },
  {
    id: "order-801",
    placedAt: "2026-09-08T08:30:00-04:00",
    items: [
      { name: "Butter Croissant", icon: "🥐", menuItemId: "pastry-croissant", quantity: 2 },
      { name: "Flat White", icon: "☕", menuItemId: "drink-flat-white", quantity: 3 },
      { name: "Blueberry Scone", icon: "🫐", menuItemId: "pastry-blueberry-scone", quantity: 3 },
    ],
  },
];
