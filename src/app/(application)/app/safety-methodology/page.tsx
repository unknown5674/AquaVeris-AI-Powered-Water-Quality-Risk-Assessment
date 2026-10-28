import { Section } from "@/components/ui/section";

export default function SafetyMethodologyPage() {
  return (
    <div className="space-y-6">
      <Section
        title="Safety & Methodology"
        description="How AquaVeris ActionIQ will combine deterministic evaluation with clear, responsible communication."
      >
        <ul className="space-y-2 text-sm text-slate-700">
          <li>
            • Safety-first communication: assessments describe risk, not medical
            diagnosis.
          </li>
          <li>
            • Evidence-led analysis: future phases will compare measurements
            against selected reference standards.
          </li>
          <li>
            • Explainable guidance: recommendations will state limitations and
            uncertainty where appropriate.
          </li>
        </ul>
      </Section>

      <Section title="What will be added later">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Rule-engine implementation for parameter evaluation</li>
          <li>• Treatment compatibility checks per contaminant</li>
          <li>• AI-assisted plain-language explanation layer</li>
        </ul>
      </Section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-base font-semibold text-amber-900">Safety disclaimer</h2>
        <p className="mt-2 text-sm text-amber-900">
          AquaVeris ActionIQ is an educational risk-assessment tool. It does not
          replace certified laboratory testing, official water advisories, or
          professional medical advice.
        </p>
      </section>
    </div>
  );
}
