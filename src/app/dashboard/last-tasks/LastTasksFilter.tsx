import React from 'react'
import type { TTasksStatus } from '@/types/task.types'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/utils/lib/utils'
import { Button } from '@/components/ui/button'

interface Props {
	status: TTasksStatus | null
	setStatus: (status: TTasksStatus | null) => void
}
const statuses: Array<TTasksStatus | 'all'> = [
	'completed',
	'in-progress',
	'not-started',
	'all',
]
export function LastTasksFilter({ status, setStatus }: Props) {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						{status?.replace('-', ' ') || 'all'}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className={'capitalize'}
					align="end"
				>
					{statuses.map(s => (
						<DropdownMenuItem
							key={s}
							onClick={() => setStatus(s === 'all' ? null : s)}
							className={cn(
								status === s ? 'font-bold' : '',
								'cursor-pointer capitalize'
							)}
						>
							{s.replace('-', ' ')}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
