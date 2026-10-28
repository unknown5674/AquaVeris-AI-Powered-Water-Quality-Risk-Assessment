import Link from "next/link";
import { Section } from "@/components/ui/section";

export default function ApplicationNotFound() {
  return (
    <Section
      title="Section not found"
      description="This ActionIQ route does not exist yet. Use the main navigation to continue through the currently available Phase 1 placeholders."
    >
      <Link
        href="/dashboard"
        className="inline-flex rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Return to dashboard
      </Link>
    </Section>
  );
}
