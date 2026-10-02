import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Unit } from "@/lib/types";

const RECEIPTS_PATH = path.join(process.cwd(), "lib", "data", "receipts.json");

export type ReceiptLine = {
  name: string;
  quantity: number;
  unit: Unit;
  /** What she paid for this line, in dollars. */
  price: number;
};

export type Receipt = {
  id: string;
  label: string;
  lines: ReceiptLine[];
};

export type InventoryItem = {
  name: string;
  quantity: number;
  unit: Unit;
  /** Total paid for this ingredient across invoices. */
  price: number;
};

export async function readReceipts(): Promise<Receipt[]> {
  return JSON.parse(await readFile(RECEIPTS_PATH, "utf8")) as Receipt[];
}

export async function addReceipt(receipt: Receipt): Promise<void> {
  const receipts = await readReceipts();
  receipts.push(receipt);
  await writeFile(RECEIPTS_PATH, `${JSON.stringify(receipts, null, 2)}\n`, "utf8");
}

/** Totals the same ingredient and unit across every saved invoice. */
export function inventoryFromReceipts(receipts: Receipt[]): InventoryItem[] {
  const totals = new Map<string, InventoryItem>();

  for (const receipt of receipts) {
    for (const line of receipt.lines) {
      const name = line.name.trim();
      const key = `${name.toLowerCase()}|${line.unit}`;
      const existing = totals.get(key);
      if (existing) {
        existing.quantity += line.quantity;
        existing.price += line.price ?? 0;
      } else {
        totals.set(key, {
          name,
          quantity: line.quantity,
          unit: line.unit,
          price: line.price ?? 0,
        });
      }
    }
  }

  return [...totals.values()].sort((a, b) => a.name.localeCompare(b.name));
}
