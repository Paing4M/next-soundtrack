import Image from 'next/image'
import NavigationBtns from '../nav/NavigationBtns'
import NavBtns from '../nav/NavBtns'
import Link from 'next/link'
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const HeaderTop = () => {
	return (
		<div className='h-[80px] flex items-center w-full'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex md:hidden items-center gap-3'>
					<Link href={'/'}>
						<div className='block relative md:hidden w-20 h-20'>
							<Image
								src='/assets/logo.png'
								fill
								className='object-cover'
								alt='logo'
							/>
						</div>
					</Link>

					<Link
						className='block md:hidden p-2 rounded-full bg-white'
						href={'/'}
					>
						<HomeIcon className='text-black w-5' />
					</Link>
					<Link
						className='block md:hidden p-2 rounded-full bg-white'
						href={'/search'}
					>
						<MagnifyingGlassIcon className='text-black w-5' />
					</Link>
				</div>
				<NavigationBtns />
				<NavBtns />
			</div>
		</div>
	)
}

export default HeaderTop
