import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";

type ApplicationLayoutProps = {
  children: ReactNode;
};

export default function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
