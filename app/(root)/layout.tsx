import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<main className='w-full min-h-[90vh] relative top-[10vh] pl-72 bg-[#F6F9FC] dark:bg-[#1F1F1F] pr-4'>
				<div className='min-h-[85vh] rounded-xl bg-white dark:bg-black p-4'>
					{children}
				</div>
			</main>
		</div>
	)
}

export default RootLayout
