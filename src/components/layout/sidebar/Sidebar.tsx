import React from "react";
import { SidebarHeading } from "@/components/layout/sidebar/SidebarHeading";

export function Sidebar() {
  return (
    <aside>
      <SidebarHeading title="Account" />
      <SidebarHeading title="Main Menu" />
      <SidebarHeading title="Projects" />
    </aside>
  );
}
