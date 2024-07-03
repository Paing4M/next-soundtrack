'use client'

import AuthModal from '@/components/modal/AuthModal'
import Modal from '@/components/modal/Modal'
import { useEffect, useState } from 'react'

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [isMounted])

	if (!isMounted) return null

	return (
		<>
			<AuthModal />
		</>
	)
}

export default ModalProvider
