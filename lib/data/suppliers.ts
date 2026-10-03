import type { Unit } from "@/lib/types";

/**
 * Mockup supplier list. Reserved `.example` addresses — nothing here can
 * actually be emailed.
 */
export type Supplier = {
  id: string;
  name: string;
  /** What this supplier delivers, in plain words. */
  item: string;
  email: string;
  icon: string;
  /** Catalog ingredient this supplier covers. Hand-added rows have none, so
   *  they get no recommendation. */
  ingredientId?: string;
  /** Amount bought each day, in `unit`. */
  dailyAmount?: number;
  unit?: Unit;
  /** Price of one `unit`. */
  unitPrice?: number;
  /** Cost per day, typed in by hand when there is no amount to multiply. */
  dailyCost?: number;
};

export const seedSuppliers: Supplier[] = [
  {
    id: "sup-bay-mills",
    name: "Bay Mills",
    item: "All-Purpose Flour",
    email: "orders@baymills.example",
    icon: "🌾",
    ingredientId: "flour-ap",
    dailyAmount: 900,
    unit: "g",
    unitPrice: 0.0014,
  },
  {
    id: "sup-valley-dairy",
    name: "Valley Dairy",
    item: "Whole Milk",
    email: "orders@valleydairy.example",
    icon: "🥛",
    ingredientId: "milk-whole",
    dailyAmount: 3500,
    unit: "ml",
    unitPrice: 0.0013,
  },
  {
    id: "sup-golden-churn",
    name: "Golden Churn",
    item: "Unsalted Butter",
    email: "hello@goldenchurn.example",
    icon: "🧈",
    ingredientId: "butter",
    dailyAmount: 600,
    unit: "g",
    unitPrice: 0.0094,
  },
  {
    id: "sup-roast-collective",
    name: "Roast Collective",
    item: "Espresso Beans",
    email: "beans@roastcollective.example",
    icon: "☕",
    ingredientId: "coffee-beans",
    dailyAmount: 200,
    unit: "g",
    unitPrice: 0.025,
  },
  {
    id: "sup-green-row",
    name: "Green Row",
    item: "Blueberries",
    email: "produce@greenrow.example",
    icon: "🫐",
    ingredientId: "blueberry",
    dailyAmount: 45,
    unit: "g",
    unitPrice: 0.0092,
  },
  {
    id: "sup-coastal-foods",
    name: "Coastal Foods",
    item: "San Marzano Tomatoes",
    email: "orders@coastalfoods.example",
    icon: "🍅",
    ingredientId: "tomato-san-marzano",
    dailyAmount: 700,
    unit: "g",
    unitPrice: 0.0048,
  },
  {
    id: "sup-hill-butchery",
    name: "Hill Butchery",
    item: "Eggs",
    email: "orders@hillbutchery.example",
    icon: "🥚",
    ingredientId: "egg",
    dailyAmount: 5,
    unit: "each",
    unitPrice: 0.34,
  },
  {
    id: "sup-packco",
    name: "PackCo",
    item: "12oz Hot Cups",
    email: "supply@packco.example",
    icon: "🥤",
    ingredientId: "cup-hot-12",
    dailyAmount: 40,
    unit: "each",
    unitPrice: 0.14,
  },
];
