'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useResetPasswordMutation } from '@/redux/api/authApi';
import verifyToken from '@/utils/verifyToken';
import { ResetPassSchema } from '@/validationSchemas/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { IconButton, Typography } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const ResetPassPage = () => {
	const params = useSearchParams();
	const router = useRouter();
	const token = params.get('token');

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
	const [resetPass, { isLoading }] = useResetPasswordMutation();

	if (!token) {
		toast.error('Invalid token');
		router.push('/');
		return;
	}

	const decode = verifyToken(token);
	if (!decode) {
		toast.error('Invalid token');
		router.push('/');
		return;
	}

	const handleSubmit = async ({ password }: FieldValues) => {
		try {
			const res = await resetPass({ token, newPassword: password }).unwrap();

			if (res.success) {
				toast.success('Password reset successfully');
				router.push('/login');
			} else {
				toast.error(res.message);
			}
		} catch (error) {
			toast.error('Something went wrong!');
		}
	};

	return (
		<div className='flex flex-col justify-center items-center gap-8 h-[85vh]'>
			<Typography variant='h4' className='text-center'>
				Reset Password
			</Typography>
			<KForm
				onSubmit={handleSubmit}
				resolver={zodResolver(ResetPassSchema)}
				styleClasses='p-4 md:p-12 border max-w-[600px] w-full flex flex-col gap-4'
			>
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

				<div className='relative'>
					<KInput label='Confirm Password' name='confirmPassword' type={showConfirmPassword ? 'text' : 'password'} />
					<IconButton
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
		</div>
	);
};

export default ResetPassPage;
