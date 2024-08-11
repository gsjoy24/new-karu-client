'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import PrivateRoute from '@/components/Shared/PrivateRoute';
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { ChangePasswordSchema } from '@/validationSchemas/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const ChangePassword = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const handleSubmit = async (data: any) => {
		try {
			const res = await changePassword(data).unwrap();
			toast.success(res?.message);
		} catch (error: any) {
			toast.error(error.data?.message ?? error.error.message ?? 'An error occurred! Please try again later.');
		}
	};
	return (
		<PrivateRoute>
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='center'
				gap={3}
				py={5}
				sx={{
					maxWidth: '500px',
					width: '100%',
					mx: 'auto',
					my: '2rem'
				}}
			>
				<Typography
					variant='h1'
					sx={{
						textAlign: 'center',
						fontSize: {
							xs: '1.5rem',
							md: '2.5rem'
						},
						fontWeight: 'bold'
					}}
				>
					Change Current Password
				</Typography>

				<KForm
					onSubmit={handleSubmit}
					resolver={zodResolver(ChangePasswordSchema)}
					styleClasses='p-4 md:p-12 border max-w-[600px] w-full flex flex-col gap-4'
				>
					<div className='relative'>
						<KInput label='Current Password' name='oldPassword' type={showPassword ? 'text' : 'password'} />
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
						<KInput label='New Password' name='newPassword' type={showNewPassword ? 'text' : 'password'} />
						<IconButton
							onClick={() => setShowNewPassword(!showNewPassword)}
							sx={{
								position: 'absolute',
								top: '25px',
								right: '10px',
								cursor: 'pointer'
							}}
						>
							{showNewPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
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
							{showConfirmPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
						</IconButton>
					</div>
					<LoadingButton type='submit' loading={isLoading} loadingIndicator='Changing' variant='contained'>
						Change Password
					</LoadingButton>
				</KForm>
			</Stack>
		</PrivateRoute>
	);
};

export default ChangePassword;
