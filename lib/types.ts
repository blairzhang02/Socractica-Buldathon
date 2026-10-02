// Shared domain types. Agree on these before building out the pages so the
// four screens read and write the same shapes. Fields are a starting point —
// extend as needed.

export type Unit = "g" | "kg" | "ml" | "l" | "each";

export type Ingredient = {
  id: string;
  name: string;
  unit: Unit;
  /** Cost of one `unit` of this ingredient, in the catalog's currency. */
  unitPrice: number;
  supplier?: string;
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

/** One ingredient on a menu item, with its own cost broken out. */
export type MenuItemIngredient = {
  ingredientId: string;
  /** Amount used per `yield` of the menu item. */
  quantity: number;
  /** Matches the ingredient's catalog unit. */
  unit: Unit;
  /** Catalog price at the time this recipe was costed. */
  unitPrice: number;
  /** `quantity * unitPrice`, rounded to cents. */
  lineCost: number;
};

export type MenuItemCategory = "pizza" | "bread" | "pastry" | "drink" | "side";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuItemCategory;
  /** What one batch of this recipe produces. */
  yield: { quantity: number; unit: Unit };
  /** Menu price for one serving. */
  sellPrice: number;
  ingredients: MenuItemIngredient[];
  /** Sum of every `lineCost`, i.e. the cost of one batch. */
  totalCost: number;
  /** `totalCost / yield.quantity`. Omitted when the yield is 1. */
  costPerServing?: number;
};

/** Shape of `lib/data/menu-items.json`. */
export type MenuCatalog = {
  /** ISO 4217 code every price in the file is denominated in. */
  currency: string;
  ingredients: Ingredient[];
  menuItems: MenuItem[];
};
