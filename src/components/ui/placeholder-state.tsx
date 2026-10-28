import type { ReactNode } from "react";

type PlaceholderStateProps = {
  badge: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderState({
  badge,
  title,
  description,
  children,
}: PlaceholderStateProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
        {badge}
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
