import Image from 'next/image'

interface MediaIemProps {}

const MediaItem = ({}) => {
	return (
		<div className='flex gap-x-3'>
			<div className='relative overflow-hidden rounded-md w-12 h-12'>
				<Image
					className='object-cover'
					src={'/assets/logo.png'}
					fill
					alt='media-img'
				/>
			</div>

			<div>
				<p className='font-semibold text-[15px] tracking-wider'>
					Music title
				</p>
				<p className='text-neutral-400 text-[13px] '>by name</p>
			</div>
		</div>
	)
}

export default MediaItem
