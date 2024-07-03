import Image from 'next/image'
import PlayButton from './PlayButton'

interface ImageProps {}

const SongItem = () => {
	return (
		<div className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3'>
			<>
				<div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
					<Image
						src={'/assets/logo.png'}
						fill
						className='object-cover'
						alt='music-img'
					/>
				</div>
			</>

			<div className='pt-4 flex items-start flex-col w-full gap-y-1'>
				<p className='truncate font-semibold tracking-wider w-full'>
					Lorem, ipsum.
				</p>
				<p className='truncate text-sm text-neutral-400 w-full'>By name</p>
			</div>

			<div className='absolute bottom-24 right-3'>
				<PlayButton />
			</div>
		</div>
	)
}

export default SongItem
