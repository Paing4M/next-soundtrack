import NextAuth, { NextAuthConfig } from 'next-auth'
import credentials from 'next-auth/providers/credentials'

const credential = credentials({
	type: 'credentials',
	credentials: {
		email: { label: 'Emal' },
		password: { label: 'Password', type: 'password' },
	},
	async authorize(credentials) {
		// login action
	},
})

const config: NextAuthConfig = {
	providers: [credential],
	callbacks: {
		authorized({ request, auth }) {
			// some middleware
		},
	},
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
