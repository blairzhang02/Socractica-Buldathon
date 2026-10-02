"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The way back to the menu. Sticks to the top of every screen except the menu
 * itself, so you are never more than one tap from home — even halfway down a
 * long list.
 */
export function HomeBar() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="sticky top-0 z-20 border-b-4 border-chocolate-700 bg-cream-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-chocolate-700 px-8 py-4 text-2xl font-bold text-cream-50 transition-colors hover:bg-chocolate-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
        >
          <span aria-hidden="true" className="text-3xl leading-none">
            🏠
          </span>
          Back to menu
        </Link>
      </div>
    </div>
  );
}
