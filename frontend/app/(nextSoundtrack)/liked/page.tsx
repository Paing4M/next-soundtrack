import { auth } from '@/auth'
import HeaderTop from '@/components/header/HeaderTop'

const LikedPage = async () => {
	const session = await auth()

	return (
		<div className='w-full h-[calc(100vh-80px)] px-6 text-white flex flex-col'>
			<HeaderTop user={session?.user!} />

			<h2 className='text-lg tracking-wide'>Your Liked song</h2>

			<div className='pb-4 pt-8  flex-1 overflow-hidden overflow-y-auto scrollbar-hide'>
				{/* <SearchContainer searchParam={searchParams.title!} /> */}
			</div>
		</div>
	)
}

export default LikedPage
