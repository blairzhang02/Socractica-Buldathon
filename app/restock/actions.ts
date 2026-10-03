"use server";

import { revalidatePath } from "next/cache";
import { readBudget, saveBudget } from "@/lib/budget";

export async function updateBudget(input: { amount: number; label?: string }) {
  const amount = Math.round(input.amount * 100) / 100;
  if (!Number.isFinite(amount) || amount < 0) {
    return { ok: false as const, error: "Enter an amount of 0 or more." };
  }

  const current = await readBudget();
  await saveBudget({
    amount,
    label: input.label?.trim() || current.label,
  });

  revalidatePath("/restock");
  return { ok: true as const, amount };
}
