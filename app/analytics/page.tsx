import { PageHeader } from "@/app/_components/page-header";

// Owner: TBD
// TODO: supply calculations (on-hand vs. committed per ingredient) and the
// usage/burn-rate charts that sit on top of them.
export default function Page() {
  return (
    <>
      <PageHeader
        title="Supply & analytics"
        description="What's on hand, what it's committed to, and how fast it moves."
      />
      <p className="text-sm opacity-60">Nothing here yet.</p>
    </>
  );
}
