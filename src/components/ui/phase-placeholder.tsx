import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";

type PhasePlaceholderProps = {
  title: string;
  description: string;
  plannedInLaterPhases: string[];
  children?: ReactNode;
};

export function PhasePlaceholder({
  title,
  description,
  plannedInLaterPhases,
  children,
}: PhasePlaceholderProps) {
  return (
    <div className="space-y-6">
      <Section title={title} description={description}>
        <p className="text-sm text-slate-700">
          This area is intentionally a placeholder in Phase 1 while we finalize
          foundational navigation and layout.
        </p>
      </Section>

      <Section title="Planned in upcoming phases">
        <ul className="space-y-2 text-sm text-slate-700">
          {plannedInLaterPhases.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <section
        aria-labelledby="app-safety-disclaimer"
        className="rounded-xl border border-amber-200 bg-amber-50 p-5"
      >
        <h2 id="app-safety-disclaimer" className="text-base font-semibold text-amber-900">
          Safety disclaimer
        </h2>
        <p className="mt-2 text-sm text-amber-900">
          AquaVeris ActionIQ is an educational risk-assessment tool. It does not
          replace certified laboratory testing, official water advisories, or
          professional medical advice.
        </p>
      </section>

      {children}
    </div>
  );
}
