import type { Unit } from "@/lib/types";

export type InvoiceLine = {
  name: string;
  quantity: number;
  unit: Unit;
  /** What she paid for this line, in dollars. */
  price: number;
};

const units = new Set<Unit>(["g", "kg", "ml", "l", "each"]);

/** Reads a sample invoice file, or a JSON invoice. Photos without that text stay pictures only. */
export function parseInvoiceText(text: string): { label: string; lines: InvoiceLine[] } | null {
  const embedded = text.match(/<!--\s*invoice\s*(\{[\s\S]*?\})\s*-->/);
  const raw = embedded?.[1] ?? (text.trim().startsWith("{") ? text.trim() : null);
  if (!raw) return null;

  let data: { label?: unknown; lines?: unknown };
  try {
    data = JSON.parse(raw) as { label?: unknown; lines?: unknown };
  } catch {
    return null;
  }

  if (typeof data.label !== "string" || !Array.isArray(data.lines)) return null;

  const lines: InvoiceLine[] = [];
  for (const line of data.lines) {
    if (!line || typeof line !== "object") continue;
    const row = line as { name?: unknown; quantity?: unknown; unit?: unknown; price?: unknown };
    if (typeof row.name !== "string" || typeof row.quantity !== "number") continue;
    if (typeof row.unit !== "string" || !units.has(row.unit as Unit)) continue;
    if (typeof row.price !== "number" || row.price < 0) continue;
    if (!row.name.trim() || !(row.quantity > 0)) continue;
    lines.push({
      name: row.name.trim(),
      quantity: row.quantity,
      unit: row.unit as Unit,
      price: row.price,
    });
  }

  if (!data.label.trim() || lines.length === 0) return null;
  return { label: data.label.trim(), lines };
}
