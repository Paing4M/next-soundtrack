import { getSong } from '@/actions/song'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

const useGetSongById = (id: string) => {
	const [loading, setLoading] = useState(false)
	const [song, setSong] = useState<MusicType | undefined>(undefined)
	const [songUrl, setSongUrl] = useState<string | undefined>(undefined)

	useEffect(() => {
		if (!id) return

		const getSongUrl = async () => {
			try {
				const res = await axios.get(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/music/stream/${id}`,
					{
						headers: {
							Accept: 'audio/mpeg',
						},
						responseType: 'blob',
					}
				)

				// console.log(res)

				if (res.data) {
					const blob = new Blob([res.data], { type: 'audio/mpeg' })
					const url = URL.createObjectURL(blob)
					setSongUrl(url)
				}
			} catch (error) {
				console.error('Error fetching audio:', error)
			}
		}

		const getActiveSong = async () => {
			setLoading(true)
			const res = await getSong(id)
			if (res) {
				setLoading(false)
				setSong(res.data)
			}
		}
		getActiveSong()
		getSongUrl()
	}, [id])

	return useMemo(
		() => ({
			song,
			loading,
			songUrl,
		}),
		[loading, song, songUrl]
	)
}

export default useGetSongById
