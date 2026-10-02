export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 border-b border-black/10 pb-5 dark:border-white/15">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-1.5 text-sm opacity-70">{description}</p>
    </div>
  );
}
