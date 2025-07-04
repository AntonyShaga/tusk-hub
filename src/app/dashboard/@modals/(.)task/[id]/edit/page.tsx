import React from 'react'
import { TaskEditModalClient } from '@/app/dashboard/@modals/(.)task/[id]/edit/TaskEditModalClient'

interface Props {
	params: Promise<{ id: string }>
}
export default async function TaskEditModal({ params }: Props) {
	const { id } = await params
	return (
		<div>
			<TaskEditModalClient id={id} />
		</div>
	)
}
