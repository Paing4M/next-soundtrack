import Sidebar from '@/components/nav/Sidebar'
import Player from '@/components/song/Player'
import ModalProvider from '@/providers/ModalProvider'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col'>
			<div className='flex'>
				<Sidebar />
				{children}
			</div>
			<Player />
			<ModalProvider />
		</div>
	)
}

export default HomeLayout
