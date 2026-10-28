export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            AquaVeris
          </p>
          <p className="text-sm text-slate-600">ActionIQ — Phase 0 Foundation</p>
        </div>
      </div>
    </header>
  );
}
