import { auth } from '@/auth'
import HeaderTop from '@/components/header/HeaderTop'
import SearchInput from '@/components/search/SearchInput'
import SongList from '@/components/song/SongList'

const SearchPage = async () => {
	const session = await auth()

	return (
		<div className='w-full h-[calc(100vh-80px)] px-6 text-white flex flex-col'>
			<HeaderTop user={session?.user!} />
			<h2 className='text-2xl my-3'>Search</h2>
			<SearchInput className='mb-3' />
			<div className='pb-4 pt-8  flex-1 overflow-hidden overflow-y-auto'>
				<SongList />
			</div>
		</div>
	)
}

export default SearchPage
