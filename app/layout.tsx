import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'

import { ReduxProvider } from '@/lib/redux/provider'
import { theme } from '@/lib/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import './globals.css'
const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Нури Коинот - Облачные серверы',
	description: 'Хостинг облачных серверов нового поколения',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<ReduxProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</ReduxProvider>
			</body>
		</html>
	)
}
