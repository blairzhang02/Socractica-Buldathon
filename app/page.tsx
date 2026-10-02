import { PageHeader } from "@/app/_components/page-header";

// Owner: TBD
// TODO: list previous orders (date, supplier, item count, total, status) and
// link each row through to its detail view.
export default function Page() {
  return (
    <>
      <PageHeader
        title="Order history"
        description="Every order placed so far, newest first."
      />
      <p className="text-sm opacity-60">Nothing here yet.</p>
    </>
  );
}
