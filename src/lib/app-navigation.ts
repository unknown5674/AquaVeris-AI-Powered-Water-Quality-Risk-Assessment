export type AppNavItem = {
  label: string;
  href: string;
  description: string;
};

export const appNavigation: AppNavItem[] = [
  {
    label: "Dashboard",
    href: "/app/dashboard",
    description: "Overview of water sources, alerts, and recent assessments.",
  },
  {
    label: "Analyze Water",
    href: "/app/analyze-water",
    description: "Start a new sample intake and risk assessment workflow.",
  },
  {
    label: "Water Sources",
    href: "/app/water-sources",
    description: "Track monitored household and community water sources.",
  },
  {
    label: "History",
    href: "/app/history",
    description: "Review previous analyses and compare trend snapshots.",
  },
  {
    label: "Settings",
    href: "/app/settings",
    description: "Configure profile, reference standards, and app preferences.",
  },
  {
    label: "Safety & Methodology",
    href: "/app/safety-methodology",
    description: "Understand safeguards, limits, and evidence model assumptions.",
  },
];
