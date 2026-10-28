"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  APP_NAVIGATION_ITEMS,
  APP_SAFETY_LINK,
  type AppNavigationItem,
} from "@/lib/app-navigation";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  pathname,
  onClick,
}: {
  item: AppNavigationItem;
  pathname: string;
  onClick?: () => void;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-emerald-100 text-emerald-800"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {item.label}
    </Link>
  );
}

export function AppNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:hidden"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-app-navigation"
      >
        Menu
      </button>

      <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
        {APP_NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} pathname={pathname} />
        ))}
        <div className="mx-2 h-4 w-px bg-slate-300" />
        <NavLink item={APP_SAFETY_LINK} pathname={pathname} />
      </nav>

      {mobileMenuOpen ? (
        <nav
          id="mobile-app-navigation"
          aria-label="Mobile primary"
          className="absolute right-0 top-12 z-40 min-w-64 space-y-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg md:hidden"
        >
          {APP_NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <div className="my-2 h-px bg-slate-200" />
          <NavLink
            item={APP_SAFETY_LINK}
            pathname={pathname}
            onClick={() => setMobileMenuOpen(false)}
          />
        </nav>
      ) : null}
    </div>
  );
}
