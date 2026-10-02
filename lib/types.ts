// Shared domain types. Agree on these before building out the pages so the
// four screens read and write the same shapes. Fields are a starting point —
// extend as needed.

export type Unit = "g" | "kg" | "ml" | "l" | "each";

export type Ingredient = {
  id: string;
  name: string;
  unit: Unit;
};

/** A single line on an order or a recipe. */
export type LineItem = {
  ingredientId: string;
  quantity: number;
};

export type OrderStatus = "draft" | "placed" | "received" | "cancelled";

export type Order = {
  id: string;
  placedAt: string; // ISO 8601
  supplier: string;
  status: OrderStatus;
  items: LineItem[];
};

/** A reusable template that prefills an order. */
export type Recipe = {
  id: string;
  name: string;
  servings: number;
  items: LineItem[];
};

export type RestockSuggestion = {
  ingredientId: string;
  onHand: number;
  suggestedQuantity: number;
  /** Lower number = more urgent. */
  daysUntilStockout: number;
};
