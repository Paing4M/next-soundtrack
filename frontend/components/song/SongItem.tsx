'use client'

import Image from 'next/image'
import PlayButton from './PlayButton'
import usePlayer from '@/hooks/usePlayer'

interface SongItemProps {
	song: MusicType
	handleClick: (id: string) => void
}

const SongItem: React.FC<SongItemProps> = ({ song, handleClick }) => {
	const { activeId } = usePlayer()

	return (
		<div
			onClick={() => handleClick(song?.id!)}
			className={`relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4  cursor-pointer  hover:bg-neutral-400/10 transition p-3  sm:w-auto ${
				activeId == song?.id ? 'bg-neutral-400/10' : 'bg-neutral-400/5'
			}`}
		>
			<>
				<div className=' aspect-square w-full h-full rounded-md overflow-hidden'>
					<Image
						src={song.image ? song.image : '/assets/logo.png'}
						width={200}
						height={200}
						className='object-cover w-full h-full'
						alt='music-img'
						priority
					/>
				</div>
			</>

			<div className='pt-4 flex items-start flex-col w-full gap-y-1'>
				<p className='truncate capitalize font-semibold tracking-wider w-full'>
					{song?.title}
				</p>
				<p className='truncate capitalize text-sm text-neutral-400 w-full'>
					By {song?.author}
				</p>
			</div>

			<div className='absolute bottom-[90px] right-4'>
				<PlayButton onClick={() => handleClick(song?.id!)} />
			</div>
		</div>
	)
}

export default SongItem
