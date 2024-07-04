const RegisterForm = () => {
	return (
		<div className='flex min-h-full flex-col  justify-center px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-2'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium leading-6 '
						>
							Name
						</label>
						<div className='mt-1'>
							<input
								id='name'
								name='name'
								type='text'
								className='px-4 py-2 border-none outline-none bg-neutral-800 rounded-md w-full'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 '
						>
							Email address
						</label>
						<div className='mt-1'>
							<input
								id='email'
								name='email'
								type='text'
								className='px-4 py-2 border-none outline-none bg-neutral-800 rounded-md w-full'
							/>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 '
							>
								Password
							</label>
						</div>
						<div className='mt-1'>
							<input
								id='password'
								name='password'
								type='password'
								className='px-4 py-2 border-none outline-none bg-neutral-800 rounded-md w-full'
							/>
						</div>
					</div>
					<div>
						<button
							type='submit'
							className='flex w-full mt-6 justify-center rounded-md bg-neutral-100 hover:bg-white transition px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm '
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterForm
