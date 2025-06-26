import type { PropsWithChildren } from "react";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={"grid grid-cols-[250px_1fr] box-border"}>
      <Sidebar />
      <main className={"p-5 box-border"}>{children}</main>
    </div>
  );
}
