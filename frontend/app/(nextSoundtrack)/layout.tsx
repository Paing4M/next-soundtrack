import Sidebar from '@/components/nav/Sidebar'
import MobilePlayer from '@/components/song/MobilePlayer'
import Player from '@/components/song/Player'
import ModalProvider from '@/providers/ModalProvider'
import { Toaster } from 'react-hot-toast'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex h-screen flex-col'>
			<div className='flex flex-1'>
				<Sidebar />
				{children}
			</div>
			<Player />
			<ModalProvider />
			<Toaster />
		</div>
	)
}

export default HomeLayout
