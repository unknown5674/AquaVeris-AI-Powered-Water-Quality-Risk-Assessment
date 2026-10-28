import { PhasePlaceholder } from "@/components/ui/phase-placeholder";

export default function AnalyzeWaterPage() {
  return (
    <PhasePlaceholder
      title="Analyze Water"
      description="This section will host the structured sample intake workflow for laboratory values and source context."
      plannedInLaterPhases={[
        "Validated sample input form for key water parameters",
        "Rule-based baseline evaluation before AI explanation",
        "Initial Smart Treatment Reality Check scaffolding",
      ]}
    />
  );
}
