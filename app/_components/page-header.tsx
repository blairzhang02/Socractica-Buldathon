export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 pb-5">
      <h1 className="text-4xl tracking-tight text-chocolate-900">{title}</h1>
      <p className="mt-2 text-lg text-chocolate-600">{description}</p>
      {/* Gradient rule instead of a flat border, to match the tiles. */}
      <div className="mt-5 h-1 rounded-full bg-linear-to-r from-chocolate-700 via-tangerine-soft to-custard" />
    </div>
  );
}
