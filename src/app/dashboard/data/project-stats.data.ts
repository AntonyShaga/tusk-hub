import type { IProjectStats } from "@/app/dashboard/project-stats/project-stats.types";

export const PROJECT_STATS_DATA: IProjectStats[] = [
  {
    id: "1",
    number: 92,
    label: "Active Project",
    bgColor: "bg-violet-300",
    icon: "/images/icons/project-stats/active-project.svg",
  },
  {
    id: "2",
    number: 35,
    label: "Active Project",
    bgColor: "bg-yellow-300",
    icon: "/images/icons/project-stats/ongoing-project.svg",
  },
  {
    id: "3",
    number: 1149,
    label: "Active Project",
    bgColor: "bg-pink-300",
    icon: "/images/icons/project-stats/working-hour.svg",
  },
];
