import { PageHeader } from "@/app/_components/page-header";

// Owner: TBD
// TODO: ranked restock suggestions — what to reorder, how much, by when —
// derived from the supply calculations on /analytics.
export default function Page() {
  return (
    <>
      <PageHeader
        title="Restock recommendations"
        description="What to reorder next, and how much of it."
      />
      <p className="text-sm opacity-60">Nothing here yet.</p>
    </>
  );
}
