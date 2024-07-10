'use client'

import SongItem from './SongItem'
import useOnPlay from '@/hooks/useOnPlay'
import MobileSongItem from './MobileSongItem'

interface SongListProps {
	songs: MusicType[]
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
	const onPlay = useOnPlay(songs!)

	return (
		<>
			{songs && songs.length == 0 && (
				<p className='text-neutral-400 text-center'>
					Music are not avaliable.
				</p>
			)}

			<div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4'>
				{songs &&
					songs.length > 0 &&
					songs.map((song) => (
						<SongItem
							key={song.id}
							handleClick={(id) => onPlay(id)}
							song={song}
						/>
					))}
			</div>

			<div className='md:hidden flex flex-col gap-y-2'>
				{songs &&
					songs.length > 0 &&
					songs.map((song, idx) => (
						<MobileSongItem
							key={song.id! + idx}
							handleClick={(id) => onPlay(id)}
							song={song}
						/>
					))}
			</div>
		</>
	)
}

export default SongList
