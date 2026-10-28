"use client";

export default function AppError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
      <h2 className="text-xl font-semibold text-rose-900">
        Workspace temporarily unavailable
      </h2>
      <p className="mt-2 text-sm text-rose-900">
        We could not load this AquaVeris page right now. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-md bg-rose-700 px-4 py-2 text-sm font-medium text-white hover:bg-rose-800"
      >
        Retry
      </button>
    </div>
  );
}
