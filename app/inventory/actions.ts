"use server";

import { revalidatePath } from "next/cache";
import { addReceipt, type ReceiptLine } from "@/lib/receipts";

export async function saveReceipt(input: { label: string; lines: ReceiptLine[] }) {
  const label = input.label.trim();
  if (!label) return { ok: false as const, error: "Give the invoice a name." };

  const lines = input.lines.flatMap((line) => {
    const name = line.name.trim();
    if (!name || !(line.quantity > 0) || !(line.price >= 0)) return [];
    return [
      {
        name,
        quantity: line.quantity,
        unit: line.unit,
        price: Math.round(line.price * 100) / 100,
      },
    ];
  });

  if (lines.length === 0) {
    return { ok: false as const, error: "Add at least one ingredient." };
  }

  await addReceipt({
    id: `${slug(label)}-${Date.now().toString(36)}`,
    label,
    lines,
  });
  revalidatePath("/inventory");
  return { ok: true as const, label };
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
