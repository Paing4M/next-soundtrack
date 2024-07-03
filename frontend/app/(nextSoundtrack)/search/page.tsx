import HeaderTop from '@/components/header/HeaderTop'
import SearchInput from '@/components/search/SearchInput'
import SongList from '@/components/song/SongList'

const SearchPage = () => {
	return (
		<div className='w-full h-screen px-6 text-white flex flex-col'>
			<HeaderTop />
			<h2 className='text-2xl my-3'>Search</h2>
			<SearchInput className='mb-3' />
			<div className='pb-4 pt-8  flex-1 overflow-hidden overflow-y-auto'>
				<h2 className='text-lg mb-3'>Search Songs</h2>

				<SongList />
			</div>
		</div>
	)
}

export default SearchPage
