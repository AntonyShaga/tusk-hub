"use client";
import { Heading } from "@/components/ui/Heading";
import { SearchField } from "@/components/ui/search-field/SearchField";

export function Dashboard() {
  return (
    <div className={"flex items-center justify-between mb-6"}>
      <Heading>Dashboard</Heading>
      <SearchField onChange={() => {}} value={""} />
    </div>
  );
}
