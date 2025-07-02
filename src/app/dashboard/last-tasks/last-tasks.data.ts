import type { ITask } from '@/types/task.types'
import { USERS } from '@/app/dashboard/users.data'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App User Flow',
		icon: 'P',
		dueDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
		comments: ['This is a comment', 'Another comment', 'Yet another comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https:// example.com', 'https:// example.org'],
		users: [USERS[0], USERS[2], USERS[3]],
		subTasks: [
			{
				id: '1',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '2',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '3',
				title: 'Creat something',
				isCompleted: false,
			},
			{
				id: '4',
				title: 'Creat something',
				isCompleted: false,
			},
		],
	},
	{
		id: '2',
		title: 'Travel App User Flow',
		icon: 'B',
		dueDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
		comments: ['This is a comment', 'Another comment', 'Yet another comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https:// example.com', 'https:// example.org'],
		users: [USERS[0], USERS[4], USERS[3]],
		subTasks: [
			{
				id: '1',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '2',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '3',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '4',
				title: 'Creat something',
				isCompleted: true,
			},
		],
	},
	{
		id: '3',
		title: 'Mobile App User Flow',
		icon: 'B',
		dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
		comments: ['This is a comment', 'Another comment', 'Yet another comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https:// example.com', 'https:// example.org'],
		users: [USERS[0], USERS[4], USERS[1]],
		subTasks: [
			{
				id: '1',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '2',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '3',
				title: 'Creat something',
				isCompleted: true,
			},
			{
				id: '4',
				title: 'Creat something',
				isCompleted: false,
			},
		],
	},
]
