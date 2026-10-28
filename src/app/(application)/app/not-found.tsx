import Link from "next/link";

export default function AppNotFound() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Page not found</h2>
      <p className="mt-2 text-sm text-slate-700">
        This AquaVeris workspace page does not exist yet. Please continue from
        the dashboard or return to the landing page.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/app/dashboard"
          className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Go to dashboard
        </Link>
        <Link
          href="/"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Go to landing page
        </Link>
      </div>
    </div>
  );
}
