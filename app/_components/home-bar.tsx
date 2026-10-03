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
    <div className="sticky top-0 z-20 border-b-4 border-chocolate-700 bg-linear-to-b from-cream-50 to-cream-200">
      <div className="mx-auto w-full max-w-5xl px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-linear-to-br from-chocolate-600 to-chocolate-900 px-8 py-4 font-display text-2xl font-bold text-cream-50 transition-all hover:from-chocolate-700 hover:to-chocolate-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-chocolate-900"
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
