import type {
	IChartDataPoint,
	ITimeRange,
} from '@/app/dashboard/prroject-chart/project-chart.type'

export const yearlyData: IChartDataPoint[] = [
	{ period: 'January', value: 19 },
	{ period: 'February', value: 20 },
	{ period: 'March', value: 30 },
	{ period: 'April', value: 19 },
	{ period: 'May', value: 20 },
	{ period: 'June', value: 30 },
	{ period: 'July', value: 19 },
]

export const monthlyData: IChartDataPoint[] = [
	{ period: 'Week 1', value: 19 },
	{ period: 'Week 2', value: 20 },
	{ period: 'Week 3', value: 30 },
]

export const timeRanges: ITimeRange[] = [
	{ label: 'Yearly', value: 'yearly' },
	{ label: 'Monthly', value: 'monthly' },
]
