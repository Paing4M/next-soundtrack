import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'

const PlayPauseIcon = ({ isPlaying }: { isPlaying: boolean }) => {
	const icon = isPlaying ? (
		<PauseIcon className='w-7 text-black ' />
	) : (
		<PlayIcon className='w-7 text-black translate-x-[2px]' />
	)

	return (
		<div className='w-10 h-10 flex items-center justify-center  rounded-full cursor-pointer bg-white'>
			{icon}
		</div>
	)
}

export default PlayPauseIcon
