import ModalProvider from '@/components/providers/modal-provider'
import SubscriptionProvider from '@/components/providers/subscription-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Google-drive',
	description: 'Google-drive clone NextJS',
	icons: {
		icon: '/logo.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						storageKey='google-drive'
					>
						<Toaster />
						<ModalProvider />
						<SubscriptionProvider>
							<NextTopLoader
								color='#2299DD'
								height={2}
								showSpinner={false}
								zIndex={1600}
							/>
							{children}
						</SubscriptionProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
