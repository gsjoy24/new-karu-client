'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			gap={3}
			py={5}
			sx={{
				minHeight: '80vh'
			}}
		>
			<Typography
				variant='h1'
				sx={{
					textAlign: 'center',
					fontSize: '2.5rem',
					fontWeight: 'bold'
				}}
			>
				Login
			</Typography>

			<KForm onSubmit={handleSubmit} styleClasses='p-4 md:p-12 border max-w-[600px] w-full flex flex-col gap-4'>
				<KInput label='Email Address' placeholder='*example@gmail.com' name='email' type='email' />
				<div className='relative'>
					<KInput label='Password' name='password' type={!showPassword ? 'text' : 'password'} />
					<Box
						onClick={() => setShowPassword(!showPassword)}
						sx={{
							position: 'absolute',
							bottom: '10px',
							right: '10px',
							cursor: 'pointer'
						}}
					>
						{showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
					</Box>
				</div>
				<Button type='submit' variant='contained' color='primary'>
					Login
				</Button>
			</KForm>
			<Stack direction='row' gap={1}>
				<Typography variant='body2'>Don&#39;t have an account?</Typography>
				<Typography
					variant='body2'
					sx={{
						transition: 'color 0.2s',
						'&:hover': {
							color: 'blue'
						}
					}}
				>
					<Link href='/register'>Register here</Link>
				</Typography>
			</Stack>
		</Stack>
	);
};

export default LoginPage;
