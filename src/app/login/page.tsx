'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useLoginMutation } from '@/redux/api/authApi';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import verifyToken from '@/utils/verifyToken';
import { LoginSchema } from '@/validationSchemas/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useRouter();

	const handleSubmit = async (data: FieldValues) => {
		try {
			const response = await login(data).unwrap();

			if (response?.success) {
				toast.success('Logged in successfully!');
				const userInfo = verifyToken(response?.data?.accessToken);
				// save user info and token in redux store
				dispatch(setUser({ user: userInfo, token: response?.data?.accessToken }));
				navigate.push('/');
			}
		} catch (error: any) {
			toast.error(error?.data?.message || 'Something went wrong! Please try again.');
		}
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

			<KForm
				onSubmit={handleSubmit}
				resolver={zodResolver(LoginSchema)}
				styleClasses='p-4 md:p-12 border max-w-[600px] w-full flex flex-col gap-4'
			>
				<KInput label='Email Address' placeholder='*example@gmail.com' name='email' type='email' />
				<div className='relative'>
					<KInput label='Password' name='password' type={showPassword ? 'text' : 'password'} />
					<IconButton
						onClick={() => setShowPassword(!showPassword)}
						sx={{
							position: 'absolute',
							top: '25px',
							right: '10px',
							cursor: 'pointer'
						}}
					>
						{showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
					</IconButton>
				</div>
				<LoadingButton type='submit' loading={isLoading} loadingIndicator='Logging in' variant='contained'>
					Login
				</LoadingButton>
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
					<Link href='/register'>Register Now</Link>
				</Typography>
			</Stack>
		</Stack>
	);
};

export default LoginPage;
