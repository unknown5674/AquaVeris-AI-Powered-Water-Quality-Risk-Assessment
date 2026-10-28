import type { ReactNode } from "react";
import Link from "next/link";
import { AppNavigation } from "@/components/layout/app-navigation";
import { SiteFooter } from "@/components/layout/site-footer";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <a
        href="#app-main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:shadow"
      >
        Skip to main content
      </a>
      <header className="border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              AquaVeris
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-slate-700">ActionIQ</p>
              <span className="text-xs text-slate-400">Phase 1</span>
            </div>
          </div>
          <AppNavigation />
        </div>
      </header>
      <main id="app-main-content" className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">{children}</div>
      </main>
      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 text-sm leading-6 text-amber-900 lg:px-8">
          AquaVeris ActionIQ provides educational risk guidance only. Always verify
          water safety decisions with certified testing and local authority advice.
          <Link href="/safety-methodology" className="ml-1 font-semibold underline">
            Learn more
          </Link>
          .
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
