'use client'

import usePlayer from '@/hooks/usePlayer'
import PlayerContent from './PlayerContent'
import useGetSongById from '@/hooks/useGetSongById'
import { useEffect } from 'react'

const Player = () => {
	const { activeId } = usePlayer()
	const { song, songUrl } = useGetSongById(activeId!)

	if (!activeId || !song || !songUrl) return null

	return (
		<div className=' fixed bottom-0 h-[80px] text-white bg-secondary-color px-6  w-full backdrop-blur-lg'>
			<PlayerContent key={song?.song} song={song!} songUrl={songUrl!} />
		</div>
	)
}

export default Player
