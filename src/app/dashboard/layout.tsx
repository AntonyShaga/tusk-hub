import type { ReactNode } from 'react'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

interface Props {
	children: ReactNode
	modals: ReactNode
}
export default function DashboardLayout({ children, modals }: Props) {
	return (
		<div className={'grid grid-cols-[250px_1fr] box-border'}>
			<Sidebar />
			<main className={'p-5 box-border'}>{children}</main>
			{modals}
		</div>
	)
}
