'use client'

import Image from 'next/image'
import {
	HomeIcon,
	MagnifyingGlassIcon,
	MusicalNoteIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Box from './Box'
import AddLibraryBtn from '@/components/song/AddLibraryBtn'

const Sidebar = () => {
	const pathname = usePathname()

	const links = [
		{
			name: 'Home',
			icon: HomeIcon,
			href: '/',
			active: !pathname.includes('search'),
		},
		{
			name: 'Search',
			icon: MagnifyingGlassIcon,
			href: '/search',
			active: pathname.includes('search'),
		},
	]

	return (
		<div className='hidden md:flex flex-col gap-y-2'>
			<Box>
				<Link href={'/'}>
					<div className='h-[80px] flex items-center gap-3'>
						<Image
							width={70}
							height={70}
							src='/assets/logo.png'
							alt='logo'
							priority
						/>
						<h1>Next Soundtrack</h1>
					</div>
				</Link>

				<div className='mt-6'>
					<ul>
						{links.map(({ name, icon: Icon, href, active }) => (
							<li key={name}>
								<Link
									className={`flex  rounded px-2 items-center py-2 mb-2 hover:text-white transition ${
										active ? 'text-white' : 'text-neutral-400'
									}`}
									href={href}
								>
									<Icon className='w-6' />
									<span className='inline-block ml-4'>{name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Box>

			<Box className='h-full py-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-x-4 text-neutral-400'>
						<MusicalNoteIcon className='w-6' />
						<span>Your Library</span>
					</div>

					<AddLibraryBtn />
				</div>
			</Box>
		</div>
	)
}

export default Sidebar
