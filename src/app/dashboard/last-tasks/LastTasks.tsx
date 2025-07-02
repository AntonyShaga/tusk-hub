import React from 'react'
import { TASKS } from '@/app/dashboard/last-tasks/last-tasks.data'
import { Tasks } from '@/components/ui/Tasks'

export function LastTasks() {
	return (
		<div>
			<h2 className={'text-xl font-medium mb-5'}>
				Last Tasks
				<span className={'opacity-40 text-lg font-normal'}>
					({TASKS.length})
				</span>
			</h2>
			{TASKS.length ? (
				<div className={'grid grid-cols-3 gap-4'}>
					{TASKS.map(task => (
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
