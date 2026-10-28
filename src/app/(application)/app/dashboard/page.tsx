import { PhasePlaceholder } from "@/components/ui/phase-placeholder";

export default function DashboardPage() {
  return (
    <PhasePlaceholder
      title="Dashboard"
      description="At-a-glance visibility for active water sources, latest analyses, and urgent follow-up reminders."
      plannedInLaterPhases={[
        "Saved source cards with latest risk summaries",
        "Recent analysis timeline and alert highlights",
        "Quick actions to start a new water assessment",
      ]}
    />
  );
}
