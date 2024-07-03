import { HeartIcon } from '@heroicons/react/24/solid'
import HeaderTop from './HeaderTop'

const Header = () => {
	return (
		<div className='text-white px-6 pb-4  h-fit bg-gradient-to-b from-[#372d68] to-bg-bg-color'>
			<HeaderTop />

			<div className='mt-3'>
				<h2 className='text-2xl'>Welcome back !</h2>

				<div className='w-full max-w-[250px] mt-3 h-[60px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-hidden flex items-center gap-4'>
					<div className='w-[60px] flex items-center justify-center h-full bg-gradient-to-br from-[#3FA2F6] to-bg-white'>
						<HeartIcon className='w-8' />
					</div>

					<p className='pr-4 text-sm'>Enjoy your songs</p>
				</div>
			</div>
		</div>
	)
}

export default Header