"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Order history" },
  { href: "/new-order", label: "New order" },
  { href: "/analytics", label: "Supply & analytics" },
  { href: "/restock", label: "Restock" },
  { href: "/recipe-builder", label: "Recipe builder" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b-2 border-chocolate-700 bg-cream-100">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-1 px-6 py-3">
        <span className="mr-4 font-semibold tracking-tight text-chocolate-900">
          LeftNoCrumbs
        </span>
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-chocolate-700 text-cream-100"
                  : "text-chocolate-700 hover:bg-cream-200"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
