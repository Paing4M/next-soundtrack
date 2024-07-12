'use client'

import Image from 'next/image'

const LoadMore = () => {
	return (
		<Image
			src='/assets/loader.gif'
			width={80}
			height={80}
			alt='loader'
			className='w-[40px] h-[40px] object-cover py-2'
		/>
	)
}

export default LoadMore
