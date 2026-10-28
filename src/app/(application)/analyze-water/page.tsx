import { PlaceholderState } from "@/components/ui/placeholder-state";
import { Section } from "@/components/ui/section";

export default function AnalyzeWaterPage() {
  return (
    <div className="space-y-6">
      <PlaceholderState
        badge="Analyze Water"
        title="Water analysis intake will be added in a later phase."
        description="This screen will guide users through entering water-quality measurements, units, source context, and treatment details before deterministic evaluation begins."
      />
      <Section title="Planned inputs">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Parameter values (pH, turbidity, nitrates, metals, bacteria)</li>
          <li>• Water source profile and treatment method metadata</li>
          <li>• Reference-standard selection for evaluation consistency</li>
        </ul>
      </Section>
    </div>
  );
}
