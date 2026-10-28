import { PhasePlaceholder } from "@/components/ui/phase-placeholder";

export default function SettingsPage() {
  return (
    <PhasePlaceholder
      title="Settings"
      description="Settings will centralize profile preferences and future controls for standards, safety messaging, and notifications."
      plannedInLaterPhases={[
        "User preferences and language options",
        "Reference-standard defaults and jurisdiction preferences",
        "Safety messaging and notification controls",
      ]}
    />
  );
}
