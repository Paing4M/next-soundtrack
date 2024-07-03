import { PlayIcon } from '@heroicons/react/24/solid'

const PlayButton = () => {
	return (
		<button className='p-3 opacity-0 rounded-full bg-green-500 transition hover:scale-110 group-hover:opacity-100 translate-y-1/4'>
			<PlayIcon className='w-6 text-black' />
		</button>
	)
}

export default PlayButton
