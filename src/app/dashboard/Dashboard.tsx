"use client";
import { Heading } from "@/components/ui/Heading";
import { SearchField } from "@/components/ui/search-field/SearchField";
import { ProjectStats } from "@/app/dashboard/project-stats/ProjectStats";
import { ProjectsStatisticChart } from "@/app/dashboard/project-stats/prroject-chart/ProjectsStatisticChart";

export function Dashboard() {
  return (
    <div className="grid grid-cols-[2.7fr_1fr]">
      <div>
        <div className={"flex items-center justify-between mb-6"}>
          <Heading>Dashboard</Heading>
          <SearchField onChange={() => {}} value={""} />
        </div>
        <div className={"grid grid-cols-[25%_75%] gap-6"}>
          <ProjectStats />
          <div>
            <ProjectsStatisticChart />
          </div>
        </div>
      </div>
      <div className={"p-5  flex items-center justify-center"}>CHAT</div>
    </div>
  );
}
