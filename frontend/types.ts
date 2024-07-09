type MusicResponseType = {
	data: MusicType[]
	links: LinkType
	meta: MetaType
}

type MusicType = {
	id?: string
	title?: string
	author?: string
	song?: string
	path?: string | null
	image?: string | null
}

type LinkType = {
	first?: string | null
	last?: string | null
	prev?: string | null
	next?: string | null
}

type MetaType = {
	current_page: number
	from: number
	last_page: number
	links: MetaLink[]
	path: string
	per_page: number
	to: number
	total: number
}

type MetaLink = {
	url: string
	label: string
	active: boolean
}
