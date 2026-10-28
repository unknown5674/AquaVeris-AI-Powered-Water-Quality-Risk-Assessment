import { Section } from "@/components/ui/section";

export default function SafetyMethodologyPage() {
  return (
    <div className="space-y-6">
      <Section
        title="Safety & Methodology"
        description="AquaVeris ActionIQ is being developed in phases, and this section explains how guidance will stay transparent and safety-focused."
      >
        <ul className="space-y-2 text-sm text-slate-700">
          <li>
            • Deterministic checks will evaluate measurements before any AI-written
            explanation is generated.
          </li>
          <li>
            • AI outputs will be educational and will not replace laboratory
            verification or medical advice.
          </li>
          <li>
            • Treatment recommendations will be contaminant-specific and evidence
            based in later phases.
          </li>
        </ul>
      </Section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-lg font-semibold text-amber-900">Safety disclaimer</h2>
        <p className="mt-2 text-sm leading-6 text-amber-900">
          AquaVeris ActionIQ is an educational risk-assessment tool. It does not
          replace certified laboratory testing, official water advisories, or
          professional medical advice.
        </p>
      </section>
    </div>
  );
}
