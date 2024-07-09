import { PlayIcon } from '@heroicons/react/24/solid'
import MediaItem from './MediaItem'
import usePlayer from '@/hooks/usePlayer'

interface MobileSongItemProps {
	song: MusicType
	handleClick: (id: string) => void
}

const MobileSongItem: React.FC<MobileSongItemProps> = ({
	song,
	handleClick,
}) => {
	const { activeId } = usePlayer()

	return (
		<div
			onClick={() => handleClick(song.id!)}
			className={`w-full h-full flex items-center justify-between group hover:bg-neutral-400/10 cursor-pointer p-2 rounded-md  transition ${
				activeId == song?.id ? 'bg-neutral-400/10' : ''
			}`}
		>
			<MediaItem song={song} />
			<div>
				{/* <button
					className='p-2  rounded-full bg-green-500 transition hover:scale-110'
					onClick={(e) => {
						e.stopPropagation()
						handleClick(song.id!)
					}}
				>
					<PlayIcon className='w-6 text-black translate-x-[2px]' />
				</button> */}
			</div>
		</div>
	)
}

export default MobileSongItem
