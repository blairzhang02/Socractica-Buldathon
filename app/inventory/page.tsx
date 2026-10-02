import { PageHeader } from "@/app/_components/page-header";
import { ReceiptForm } from "@/app/inventory/_components/receipt-form";
import { inventoryFromReceipts, readReceipts } from "@/lib/receipts";

function formatQty(quantity: number) {
  return Number.isInteger(quantity)
    ? quantity.toLocaleString("en-US")
    : quantity.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export default async function Page() {
  const receipts = await readReceipts();
  const inventory = inventoryFromReceipts(receipts);

  return (
    <>
      <PageHeader
        title="Inventory"
        description="Type an invoice, or upload a picture of one. The list below is everything those invoices add up to."
      />

      <ReceiptForm />

      <section className="mx-auto mt-12 max-w-xl">
        <h2 className="text-lg font-semibold text-chocolate-900">On hand</h2>
        {inventory.length === 0 ? (
          <p className="mt-3 text-sm text-chocolate-600">
            Nothing yet. Save an invoice and the ingredients show up here.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-cream-300 overflow-hidden rounded-2xl border border-cream-300 bg-cream-100">
            {inventory.map((item) => (
              <li
                key={`${item.name}-${item.unit}`}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-chocolate-600">
                  {formatQty(item.quantity)} {item.unit} · {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
