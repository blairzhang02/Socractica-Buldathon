"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Order history" },
  { href: "/new-order", label: "New order" },
  { href: "/analytics", label: "Supply & analytics" },
  { href: "/restock", label: "Restock" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-1 px-6 py-3">
        <span className="mr-4 font-semibold tracking-tight">LeftNoCrumbs</span>
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
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
