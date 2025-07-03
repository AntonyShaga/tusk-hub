import { useMemo } from 'react'
import type { ITask, TTasksSortBy, TTasksStatus } from '@/types/task.types'

export function useFilteredTasks({
	tasks,
	status,
	sortByDueDate,
}: {
	tasks: ITask[]
	status: TTasksStatus | null
	sortByDueDate: TTasksSortBy
}) {
	return useMemo(() => {
		const filtered = !status
			? tasks
			: tasks.filter(task => {
					switch (status) {
						case 'not-started':
							return task.subTasks.every(sub => !sub.isCompleted)
						case 'in-progress':
							return (
								task.subTasks.some(sub => !sub.isCompleted) &&
								task.subTasks.some(sub => sub.isCompleted)
							)
						case 'completed':
							return task.subTasks.every(sub => sub.isCompleted)
						default:
							return true
					}
				})

		const sorted = filtered.sort((a, b) => {
			const dateA = new Date(a.dueDate).getTime()
			const dateB = new Date(b.dueDate).getTime()
			return sortByDueDate === 'asc' ? dateA - dateB : dateB - dateA
		})

		return sorted
	}, [tasks, status, sortByDueDate])
}
