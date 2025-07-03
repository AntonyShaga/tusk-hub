import type { IProfile } from '@/types/profile.types'

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	icon: string
	dueDate: Date
	users: IProfile[]
	subTasks: ISubTask[]
	comments: string[]
	resources: string[]
	links: string[]
}
export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export type TTasksStatus = 'completed' | 'not-started' | 'in-progress'
export type TTasksSortBy = 'asc' | 'desc'
