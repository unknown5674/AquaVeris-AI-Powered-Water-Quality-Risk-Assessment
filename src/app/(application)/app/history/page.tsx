import { PhasePlaceholder } from "@/components/ui/phase-placeholder";

export default function HistoryPage() {
  return (
    <PhasePlaceholder
      title="History"
      description="Historical tracking will show how water quality readings and risk flags evolve over time."
      plannedInLaterPhases={[
        "Timeline of prior assessments",
        "Comparison views across repeated samples",
        "Saved report summaries for trend review",
      ]}
    />
  );
}
