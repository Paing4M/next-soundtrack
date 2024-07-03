'use client'

import useAuthModal from '@/hooks/useAuthModal'
import Modal from './Modal'

const AuthModal = () => {
	const { isOpen, onClose } = useAuthModal()

	return (
		<Modal title='Test' description='test' isOpen={isOpen} onClose={onClose}>
			<div>AuthModal</div>
		</Modal>
	)
}

export default AuthModal
