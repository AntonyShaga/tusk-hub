import React, { useState } from "react";
import type { ITimeRange } from "@/app/dashboard/project-stats/prroject-chart/project-chart.type";
import { timeRanges } from "@/app/dashboard/project-stats/prroject-chart/project-chart.data";

interface Props {
  selectedRange: ITimeRange;
  onRangeChange: (selectedRange: ITimeRange) => void;
}
export function ProjectChartHeader({ onRangeChange, selectedRange }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleRangeChange = (selectedRange: ITimeRange) => {
    onRangeChange(selectedRange);
    setIsDropdownOpen(false);
  };
  return (
    <div className={"flex items-center justify-between mb-6 "}>
      <h2 className={"text-xl font-medium"}>Projects Statistic</h2>
      <div className={"relative"}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={
            "flex items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200"
          }
        >
          {selectedRange.label}
        </button>
        {isDropdownOpen && (
          <div
            className={
              "absolute right-0 mt-2 w-32 rounded-2xl border border-neutral-200 bg-white py-1 z-10"
            }
          >
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => {
                  handleRangeChange(range);
                }}
                className={
                  "w-full px-3 py-2 text-sm text-left transition-colors hover:text-primary"
                }
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
