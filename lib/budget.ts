import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Budget } from "@/lib/budget-math";

const BUDGET_PATH = path.join(process.cwd(), "lib", "data", "budget.json");

export async function readBudget(): Promise<Budget> {
  return JSON.parse(await readFile(BUDGET_PATH, "utf8")) as Budget;
}

export async function saveBudget(budget: Budget): Promise<void> {
  await writeFile(BUDGET_PATH, `${JSON.stringify(budget, null, 2)}\n`, "utf8");
}
