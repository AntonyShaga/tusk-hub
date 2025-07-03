import React, { useState } from 'react'
import { TASKS } from '@/app/dashboard/last-tasks/last-tasks.data'
import { Tasks } from '@/components/ui/Tasks'
import type { TTasksSortBy, TTasksStatus } from '@/types/task.types'
import { LastTasksFilter } from '@/app/dashboard/last-tasks/LastTasksFilter'
import { LastTasksSort } from '@/app/dashboard/last-tasks/LastTasksSort'
import { useFilteredTasks } from '@/hooks/useFilteredTasks'

export function LastTasks() {
	const [status, setStatus] = useState<TTasksStatus | null>(null)
	const [sortByDueDate, setSortByDueDate] = useState<TTasksSortBy>('asc')
	const filteredTasks = useFilteredTasks({
		tasks: TASKS,
		status,
		sortByDueDate,
	})

	return (
		<div>
			<div className={'flex items-center justify-between mb-5'}>
				<h2 className={'text-xl font-medium '}>
					Last Tasks
					<span className={'opacity-40 text-lg font-normal'}>
						({filteredTasks.length})
					</span>
				</h2>
				<div className={'flex gap-4'}>
					<LastTasksFilter
						status={status}
						setStatus={setStatus}
					/>
					<LastTasksSort
						sortByDueDate={sortByDueDate}
						setSortByDueDate={setSortByDueDate}
					/>
				</div>
			</div>

			{filteredTasks.length ? (
				<div className={'grid grid-cols-3 gap-4'}>
					{filteredTasks.map(task => (
						<Tasks
							key={task.id}
							tasks={task}
						/>
					))}
				</div>
			) : (
				<div>
					<p className={'text-center opacity-50'}>No tasks available</p>
				</div>
			)}
		</div>
	)
}
