import React, { useState } from "react";
import type { ITimeRange } from "@/app/dashboard/project-stats/prroject-chart/project-chart.type";
import { ProjectChartHeader } from "@/app/dashboard/project-stats/prroject-chart/ProjectChartHeader";

import { ProjectChart } from "@/app/dashboard/project-stats/prroject-chart/ProjectChart";
import {
  monthlyData,
  yearlyData,
} from "@/app/dashboard/project-stats/prroject-chart/project-chart.data";

export function ProjectsStatisticChart() {
  const [selectedRange, setSelectedRange] = useState<ITimeRange>({
    label: "Yearly",
    value: "yearly",
  });
  const chartData = selectedRange.value === "yearly" ? yearlyData : monthlyData;
  console.log(chartData);
  return (
    <div className={"h-full bg-white p-5 rounded-2xl"}>
      <ProjectChartHeader
        onRangeChange={setSelectedRange}
        selectedRange={selectedRange}
      />
      <ProjectChart data={chartData} />
    </div>
  );
}
