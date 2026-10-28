"use client";

type ApplicationErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ApplicationError({
  error,
  reset,
}: ApplicationErrorProps) {
  return (
    <section className="rounded-xl border border-rose-200 bg-rose-50 p-6">
      <h1 className="text-lg font-semibold text-rose-900">
        Unable to load this ActionIQ section
      </h1>
      <p className="mt-2 text-sm text-rose-800">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-md bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800"
      >
        Try again
      </button>
    </section>
  );
}
