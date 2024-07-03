'use client'

import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid'
import MediaItem from './MediaItem'
import PlayPauseIcon from './PlayPauseIcon'
import usePlayer from '@/hooks/usePlayer'
import { useState } from 'react'
import VolumeControl from './VolumeControl'

const PlayerContent = () => {
	const player = usePlayer()
	const [isPlaying, setIsPlaying] = useState(false)
	const [volume, setVolume] = useState(1)

	const onPlayNext = () => {
		if (player.ids?.length == 0) {
			return
		}

		const currentIdx = player.ids?.findIndex((i) => i == player.activeId)
		const nextSong = player.ids?.[currentIdx! + 1]

		if (!nextSong) {
			return player.setId(player?.ids?.[0]!)
		}

		player.setId(nextSong)
	}

	const onPlayPrev = () => {
		if (player.ids?.length == 0) {
			return
		}

		const currentIdx = player.ids?.findIndex((i) => i == player.activeId)
		const prevSong = player.ids?.[currentIdx! - 1]

		if (!prevSong) {
			return player.setId(player?.ids?.[player.ids.length - 1]!)
		}

		player.setId(prevSong)
	}

	return (
		<div className='grid grid-cols-2 xs:grid-cols-3 h-full content-center '>
			<MediaItem />

			<div className='flex gap-x-6 items-center justify-center'>
				<button>
					<BackwardIcon
						onClick={onPlayPrev}
						className='text-neutral-400 hover:text-white w-5'
					/>
				</button>
				<PlayPauseIcon isPlaying={isPlaying} />
				<button>
					<ForwardIcon
						onClick={onPlayNext}
						className='text-neutral-400 hover:text-white w-5'
					/>
				</button>
			</div>

			<div className='xs:flex hidden justify-center'>
				<VolumeControl volume={volume} />
			</div>
		</div>
	)
}

export default PlayerContent
