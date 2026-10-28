export type AppNavigationItem = {
  label: string;
  href: string;
};

export const APP_NAVIGATION_ITEMS: AppNavigationItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analyze Water", href: "/analyze-water" },
  { label: "Water Sources", href: "/water-sources" },
  { label: "History", href: "/history" },
  { label: "Settings", href: "/settings" },
];

export const APP_SAFETY_LINK: AppNavigationItem = {
  label: "Safety & Methodology",
  href: "/safety-methodology",
};
