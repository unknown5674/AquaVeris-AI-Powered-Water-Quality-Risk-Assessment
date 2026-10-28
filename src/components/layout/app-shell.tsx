"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { appNavigation } from "@/lib/app-navigation";

type AppShellProps = {
  children: ReactNode;
};

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-1">
      {appNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`block rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-emerald-100 text-emerald-900"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                AquaVeris ActionIQ
              </p>
              <h1 className="text-base font-semibold text-slate-900">
                Application workspace (Phase 1)
              </h1>
            </div>
            <Link
              href="/"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Back to landing
            </Link>
          </div>

          <details className="mt-4 md:hidden">
            <summary className="cursor-pointer rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100">
              Open navigation menu
            </summary>
            <nav aria-label="Mobile" className="mt-3 rounded-lg border border-slate-200 bg-white p-3">
              <NavLinks />
            </nav>
          </details>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:block md:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Navigation
          </p>
          <nav aria-label="Primary application navigation">
            <NavLinks />
          </nav>
        </aside>

        <main id="main-content" className="min-w-0 flex-1">
          {children}
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
