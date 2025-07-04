export interface ITimeRange {
  label: "Yearly" | "Monthly";
  value: "yearly" | "monthly";
}
export interface IChartDataPoint {
  period: string;
  value: number;
}
