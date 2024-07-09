'use client'

import usePlayer from '@/hooks/usePlayer'
import { useEffect, useRef, useState } from 'react'
import MobilePlayer from './MobilePlayer'
import DesktopPlayer from './DesktopPlayer'

const PlayerContent = ({
	song,
	songUrl,
}: {
	song: MusicType
	songUrl: string
}) => {
	const audioRef = useRef<HTMLAudioElement | null>(null)

	const player = usePlayer()
	const [isPlaying, setIsPlaying] = useState(true)
	const [duration, setDuration] = useState(0)
	const [volume, setVolume] = useState(1)
	const [currentTime, setCurrentTime] = useState(0)

	const onPlayNext = () => {
		if (player.ids?.length == 0) {
			return
		}

		setIsPlaying(true)

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

		setIsPlaying(true)

		const currentIdx = player.ids?.findIndex((i) => i == player.activeId)
		const prevSong = player.ids?.[currentIdx! - 1]

		if (!prevSong) {
			return player.setId(player?.ids?.[player.ids.length - 1]!)
		}

		player.setId(prevSong)
	}

	useEffect(() => {
		if (isPlaying) {
			audioRef?.current?.play()
			const audioDuration = audioRef?.current?.duration
			setDuration(audioDuration!)
		}
	}, [isPlaying])

	const handleClick = () => {
		if (!isPlaying) {
			audioRef?.current?.play()
		} else {
			audioRef?.current?.pause()
		}

		setIsPlaying((prev) => !prev)
	}

	const handleVolumeChange = (value: number) => {
		if (audioRef.current) {
			audioRef.current.volume = value
		}
		setVolume(value)
	}

	const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
		setDuration(e.currentTarget.duration)
		setCurrentTime(e.currentTarget.currentTime)
	}

	const handleTimeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
		setCurrentTime(e.currentTarget.currentTime)
		setDuration(audioRef?.current?.duration!)
	}

	const handleValueChange = (value: number[]) => {
		if (audioRef.current) {
			const newTime = value[0]
			audioRef.current.currentTime = newTime
			setCurrentTime(newTime)
		}
	}

	const handleEnded = () => {
		setIsPlaying(false)
		onPlayNext()
	}

	return (
		<>
			<DesktopPlayer
				song={song}
				onPlayNext={onPlayNext}
				onPlayPrev={onPlayPrev}
				duration={duration}
				currentTime={currentTime}
				isPlaying={isPlaying}
				handleClick={handleClick}
				volume={volume}
				handleVolumeChange={handleVolumeChange}
				handleValueChange={handleValueChange}
			/>

			<MobilePlayer
				song={song}
				onPlayNext={onPlayNext}
				onPlayPrev={onPlayPrev}
				duration={duration}
				currentTime={currentTime}
				isPlaying={isPlaying}
				handleClick={handleClick}
				volume={volume}
				handleVolumeChange={handleVolumeChange}
				handleValueChange={handleValueChange}
			/>

			<audio
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleLoadedMetadata}
				onEnded={handleEnded}
				ref={audioRef}
				src={songUrl}
				className='hidden'
				aria-label='audio'
			></audio>
		</>
	)
}

export default PlayerContent
