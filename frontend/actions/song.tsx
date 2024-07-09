import Axios from '@/config/axios'

export const getSongs = async () => {
	const res = await Axios.get('/music')
	return res.data
}

export const getSong = async (id: string) => {
	const res = await Axios.get('/music/' + id)
	return res.data
}

export const getSongUrl = async (id: string) => {
	const res = await Axios.get('/music/stream/' + id)
	return res.data
}
