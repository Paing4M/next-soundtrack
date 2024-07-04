import { Axios } from '@/config/axios'
import { signIn } from 'next-auth/react'

export const login = async (prevState: any, formData: FormData) => {
	try {
		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
		}

		const res = await Axios.post('/auth/login', data)
		console.log(res)
		if (res?.data?.status == 200) {
			signIn('credentials', {
				email: data.email,
				password: data.password,
				// callbackUrl: '/',
			})
		}
	} catch (error: any) {
		console.log('login err', error)
		if (error?.response?.status == 422 || error?.response?.status == 401) {
			return {
				errors: error.response.data.errors,
			}
		}
	}
}
