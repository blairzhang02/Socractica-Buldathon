/**
 * Page body for everything except the menu. The menu fills the window edge to
 * edge, so the shared width and padding live here rather than in the layout.
 */
export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">{children}</div>
  );
}
