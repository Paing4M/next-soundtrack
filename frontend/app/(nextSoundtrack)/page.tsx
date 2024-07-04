import { auth } from '@/auth'
import Header from '@/components/header/Header'
import SongList from '@/components/song/SongList'

const HomePage = async () => {
	const session = await auth()
	console.log('auth', session)

	return (
		<div className='h-screen text-white bg-bg-color flex-1 flex flex-col'>
			<Header user={session?.user!} />
			<div className='pb-4 pt-8 px-6 flex-1  overflow-hidden overflow-y-auto'>
				<h2 className='text-lg mb-3'>Latest Songs</h2>

				<SongList />
			</div>
		</div>
	)
}

export default HomePage
