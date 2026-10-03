import Link from "next/link";

// The menu. Big targets, nothing else on screen — no nav bar, no scroll.
// Every other screen gets a "Back to menu" button from app/_components/home-bar.

type Destination = {
  href: "/orders" | "/analytics" | "/restock" | "/recipe-builder";
  icon: string;
  label: string;
  blurb: string;
  tile: string;
};

const destinations: Destination[] = [
  {
    href: "/orders",
    icon: "🧾",
    label: "Order history",
    blurb: "See what has been ordered",
    tile: "bg-linear-to-br from-custard to-honey hover:from-honey hover:to-tangerine-soft",
  },
  {
    href: "/analytics",
    icon: "🥣",
    label: "Supply",
    blurb: "Add invoices and see what's left",
    tile: "bg-linear-to-br from-matcha to-lime hover:from-lime hover:to-matcha",
  },
  {
    href: "/restock",
    icon: "🛒",
    label: "Restock",
    blurb: "See what to buy next",
    tile: "bg-linear-to-br from-tan to-tangerine-soft hover:from-tangerine-soft hover:to-tan",
  },
  {
    href: "/recipe-builder",
    icon: "📖",
    label: "Recipes",
    blurb: "Add and edit recipes",
    tile: "bg-linear-to-br from-periwinkle to-blueberry-soft hover:from-blueberry-soft hover:to-periwinkle",
  },
];

export default function Page() {
  return (
    <div className="flex flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8">
      <header className="mb-6 text-center sm:mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-chocolate-900 sm:text-5xl">
          LeftNoCrumbs
        </h1>
        <p className="mt-2 text-xl text-chocolate-600 sm:text-2xl">
          Tap a button to begin.
        </p>
      </header>

      <nav aria-label="Main menu" className="flex flex-1">
        <ul className="grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {destinations.map(({ href, icon, label, blurb, tile }) => (
            <li key={href} className="flex min-h-44">
              <Link
                href={href}
                className={`flex w-full flex-col items-center justify-center gap-3 rounded-[2rem] border-4 border-chocolate-700 p-6 text-center text-chocolate-900 shadow-[0_6px_0_var(--color-chocolate-700)] transition-all hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900 active:translate-y-1 active:shadow-none ${tile}`}
              >
                <span aria-hidden="true" className="text-7xl leading-none sm:text-8xl">
                  {icon}
                </span>
                <span className="font-display text-3xl font-bold sm:text-4xl">{label}</span>
                <span className="text-lg sm:text-xl">{blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
