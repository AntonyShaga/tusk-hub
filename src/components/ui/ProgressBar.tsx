import React, { useMemo } from 'react'
import cn from 'clsx'
interface Props {
	progress: number
}
export function ProgressBar({ progress }: Props) {
	const progressText = useMemo(() => {
		if (progress >= 100) {
			return (
				<>
					<div className={'mr-1.5'}>I</div>Done
				</>
			)
		}
		return `${progress}%`
	}, [progress])

	const colorProgressBar = useMemo(() => {
		if (progress >= 100) return 'bg-emerald-500'
		if (progress >= 75) return 'bg-amber-400'
		if (progress >= 50) return 'bg-primary'
		if (progress >= 25) return 'bg-rose-400'
		return 'bg-neutral-300'
	}, [progress])
	console.log(colorProgressBar)
	return (
		<div className="relative w-full h-12 rounded-full bg-primary/12 overflow-hidden ">
			<div
				className={cn(
					'animate-stripes flex h-full cursor-default items-center justify-center rounded-full  bg-[length:56px_56px] font-medium text-white',
					colorProgressBar
				)}
				style={{
					width: `${progress}%`,
					backgroundImage:
						'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 20px, transparent 20px, transparent 40px)',
				}}
			>
				{progressText}
			</div>
		</div>
	)
}
