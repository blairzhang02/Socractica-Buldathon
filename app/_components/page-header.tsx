export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 border-b-2 border-chocolate-700 pb-5">
      <h1 className="text-3xl font-semibold tracking-tight text-chocolate-900">
        {title}
      </h1>
      <p className="mt-2 text-lg text-chocolate-600">{description}</p>
    </div>
  );
}
