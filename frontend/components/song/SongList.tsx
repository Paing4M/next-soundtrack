'use client'

import SongItem from './SongItem'
import useOnPlay from '@/hooks/useOnPlay'
import MobileSongItem from './MobileSongItem'
import LoadMore from '../LoadMore'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { getSongs } from '@/actions/song'
import { sleep } from '@/lib/utlis'

interface SongListProps {
	songs: ApiResponseType<MusicType[]>
}

const SongList: React.FC<SongListProps> = ({ songs: initial }) => {
	const [songs, setSongs] = useState<ApiResponseType<MusicType[]>>(initial)

	const onPlay = useOnPlay(songs.data!)
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			if (songs.meta.next_cursor) {
				loadMore()
			}
		}
	}, [inView])

	const loadMore = async () => {
		await sleep(2000)

		const res = (await getSongs(songs.meta.next_cursor!)) as ApiResponseType<
			MusicType[]
		>
		// console.log(res)
		if (res.data) {
			let exists = songs?.data.some((song) => song.id !== res.data?.[0].id)

			if (exists) {
				setSongs((prev) => ({
					data: [...prev.data, ...res.data],
					links: {
						...res.links,
						next: res.links.next,
						prev: res.links.prev,
					},
					meta: {
						...res.meta,
						next_cursor: res.meta.next_cursor,
						prev_cursor: res.meta.prev_cursor,
					},
				}))
			}
		}
	}

	return (
		<>
			{songs && songs.data.length == 0 && (
				<p className='text-neutral-400 text-center'>
					Music are not avaliable.
				</p>
			)}

			<div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4'>
				{songs &&
					songs.data.length > 0 &&
					songs.data.map((song) => (
						<SongItem
							key={song.id}
							handleClick={(id) => onPlay(id)}
							song={song}
						/>
					))}
			</div>

			<div className='md:hidden flex flex-col gap-y-2'>
				{songs &&
					songs.data.length > 0 &&
					songs.data.map((song, idx) => (
						<MobileSongItem
							key={song.id! + idx}
							handleClick={(id) => onPlay(id)}
							song={song}
						/>
					))}
			</div>

			{songs?.meta.next_cursor && (
				<div
					ref={ref}
					className='w-full flex items-center justify-center mt-4'
				>
					<LoadMore />
				</div>
			)}
		</>
	)
}

export default SongList
