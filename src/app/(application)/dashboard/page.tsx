import { PlaceholderState } from "@/components/ui/placeholder-state";
import { Section } from "@/components/ui/section";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PlaceholderState
        badge="Dashboard"
        title="ActionIQ dashboard is staged for authenticated insights."
        description="In the next phase, this dashboard will summarize saved water sources, recent analyses, and high-priority follow-up actions per user."
      />

      <Section title="What is planned next">
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• User-scoped summary cards for active water sources</li>
          <li>• Quick links into new analysis and report history</li>
          <li>• Safety-focused reminders when data is missing or outdated</li>
        </ul>
      </Section>
    </div>
  );
}
