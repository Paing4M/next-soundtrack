import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next Soundtrack | Home',
	description:
		'xplore curated playlists, artist spotlights, and exclusive tracks that resonate with your soul. Elevate your auditory experience with NextSoundtrack today!',
	icons: {
		icon: '/assets/logo.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning>
				{children}
			</body>
		</html>
	)
}
