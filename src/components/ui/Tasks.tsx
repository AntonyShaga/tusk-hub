import React from 'react'
import type { ITask } from '@/types/task.types'
import Image from 'next/image'
import { ProgressBar } from '@/components/ui/ProgressBar'
import Link from 'next/link'
import { Pages } from '@/config/pagest'
interface Props {
	tasks: ITask
}
export function Tasks({ tasks }: Props) {
	const completedCount = tasks.subTasks.filter(task => task.isCompleted).length
	const totalCount = tasks.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)

	return (
		<div className={'bg-card rounded-xl p-3.5'}>
			<div className={'flex items-start justify-between mb-3'}>
				<div className={'flex items-start gap-3'}>
					<div
						className={
							'p-1.5 rounded-full bg-primary/10 flex items-center text-primary'
						}
					>
						IK
					</div>
					<div className={'w-full'}>
						<span
							className={'wrap-normal font-medium  leading-tight opacity-90'}
						>
							{tasks.title}
						</span>
						<div>
							<span className={'text-sm opacity-50'}>
								Due:{' '}
								{Math.ceil(
									(+tasks.dueDate - Date.now()) / (1000 * 60 * 60 * 24)
								)}
								{'days'}
							</span>
						</div>
					</div>
				</div>

				<div className={'flex items-center -space-x-3'}>
					{tasks.users.map(user => (
						<div key={user?.id}>
							<Image
								src={user?.avatarPath || ''}
								alt={user?.name}
								width={36}
								height={36}
								className="rounded-full border border-white dark:border-neutral-800"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="mb-4">
				<ProgressBar progress={progress} />
			</div>

			<div className={'flex items-center justify-between'}>
				<div className={'flex items-center gap-4'}>
					<span className={'flex items-center gap-1 text-sm '}>
						{/*<p className={'opacity-40 w-16 h-16'}></p>*/}
						{tasks.comments.length}
					</span>
					<span className={'flex items-center gap-1 text-sm'}>
						{tasks.resources.length}
					</span>
					<span className={'flex items-center gap-1 text-sm'}>
						{tasks.links.length}
					</span>
				</div>

				<div className={'flex items-center gap-2'}>
					{/* TODO : Animate icon*/}
					<button
						className={
							'bg-primary hover:bg-primary/90 rounded-full p-2 text-white transition-colors'
						}
					>
						{/*<p className={'w-18 h-18'}></p>*/}+
					</button>
					<Link
						href={Pages.TASK_EDIT(tasks.id)}
						className={
							'border-primary text-primary hover:bg-primary/10 rounded-full border bg-white p-2 transition-colors'
						}
					>
						++
					</Link>
				</div>
			</div>
		</div>
	)
}
