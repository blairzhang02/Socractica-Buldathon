import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { MenuCatalog, MenuItem } from "@/lib/types";

const CATALOG_PATH = path.join(process.cwd(), "lib", "data", "menu-items.json");

export async function readCatalog(): Promise<MenuCatalog> {
  return JSON.parse(await readFile(CATALOG_PATH, "utf8")) as MenuCatalog;
}

/** Appends a menu item to the catalog file. Dev-time persistence — no DB yet. */
export async function addMenuItem(item: MenuItem): Promise<void> {
  const catalog = await readCatalog();
  catalog.menuItems.push(item);
  await writeFile(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
}

export const round2 = (n: number) => Math.round(n * 100) / 100;
