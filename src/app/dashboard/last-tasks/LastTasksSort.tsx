import React from 'react'
import type { TTasksSortBy } from '@/types/task.types'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	sortByDueDate: TTasksSortBy
	setSortByDueDate: (status: TTasksSortBy) => void
}
const sortTypes: Array<TTasksSortBy> = ['asc', 'desc']
export function LastTasksSort({ sortByDueDate, setSortByDueDate }: Props) {
	return (
		<div>
			<Select
				defaultValue={sortByDueDate}
				onValueChange={setSortByDueDate}
			>
				<SelectTrigger className="w-[180px] bg-popover">
					<SelectValue placeholder="Sort by due date" />
				</SelectTrigger>
				<SelectContent>
					{sortTypes.map(type => (
						<SelectItem
							key={type}
							value={type}
						>
							{type === 'asc' ? 'Ascending' : 'Descending'}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
