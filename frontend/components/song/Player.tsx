'use client'

import usePlayer from '@/hooks/usePlayer'
import PlayerContent from './PlayerContent'

const Player = () => {
	const { activeId } = usePlayer()

	// if (!activeId) return null

	return (
		<div className='fixed bottom-0 h-[80px] text-white bg-secondary-color px-6  w-full'>
			<PlayerContent />
		</div>
	)
}

export default Player
