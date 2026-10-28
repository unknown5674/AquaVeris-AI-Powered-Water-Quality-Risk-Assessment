import { PhasePlaceholder } from "@/components/ui/phase-placeholder";

export default function WaterSourcesPage() {
  return (
    <PhasePlaceholder
      title="Water Sources"
      description="Water source profiles will help organize assessments by household tap, well, community supply, or other sources."
      plannedInLaterPhases={[
        "Create and manage source profiles",
        "Associate source metadata with test sessions",
        "Track treatment methods linked to each source",
      ]}
    />
  );
}
