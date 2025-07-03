import React, { useMemo, useState } from 'react'
import { TASKS } from '@/app/dashboard/last-tasks/last-tasks.data'
import { Tasks } from '@/components/ui/Tasks'
import type { TTasksStatus } from '@/types/task.types'
import { LastTasksFilter } from '@/app/dashboard/last-tasks/LastTasksFilter'

export function LastTasks() {
	const [status, setStatus] = useState<TTasksStatus | null>(null)
	const filteredTasks = useMemo(() => {
		if (!status) return TASKS
		switch (status) {
			case 'not-started':
				return TASKS.filter(task =>
					task.subTasks.every(subTask => !subTask.isCompleted)
				)
			case 'in-progress':
				return TASKS.filter(task =>
					task.subTasks.some(subTask => !subTask.isCompleted)
				)
			case 'completed':
				return TASKS.filter(task =>
					task.subTasks.every(subTask => !subTask.isCompleted)
				)
			default:
				return TASKS
		}
	}, [status])
	return (
		<div>
			<div className={'flex items-center justify-between mb-5'}>
				<h2 className={'text-xl font-medium '}>
					Last Tasks
					<span className={'opacity-40 text-lg font-normal'}>
						({filteredTasks.length})
					</span>
				</h2>
				<LastTasksFilter
					status={status}
					setStatus={setStatus}
				/>
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
