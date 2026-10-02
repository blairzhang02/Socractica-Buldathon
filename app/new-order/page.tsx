import { PageHeader } from "@/app/_components/page-header";

// Owner: TBD
// TODO: order entry form (add/remove line items, quantities, units) plus the
// recipe template creator, so a saved recipe can prefill an order.
export default function Page() {
  return (
    <>
      <PageHeader
        title="New order"
        description="Enter order items, or build a reusable recipe template."
      />
      <p className="text-sm opacity-60">Nothing here yet.</p>
    </>
  );
}
