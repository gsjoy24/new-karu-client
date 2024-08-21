'use client';
import { useConfirmEmailMutation } from '@/redux/api/authApi';
import { Box, Typography } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Loading from '../loading';

const ConfirmEmail = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const params = useSearchParams();
	const router = useRouter();
	const token = params.get('token');
	const [confirmEmail, { data }] = useConfirmEmailMutation();

	useEffect(() => {
		if (!token) {
			toast.error('Invalid token');
			router.push('/');
			return;
		}

		async function confirmEmailHandler() {
			try {
				const res = await confirmEmail(token).unwrap();
				if (res.success) {
					toast.success('Email confirmed successfully');
					router.push('/login');
				} else {
					toast.error(res.message ?? 'Something went wrong');
				}
			} catch (error: any) {
				toast.error(error.message ?? 'Something went wrong');
			} finally {
				setIsLoading(false);
			}
		}
		confirmEmailHandler();
	}, [token, router, confirmEmail]);

	return isLoading ? (
		<Loading />
	) : (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			height='100vh'
			maxWidth='600px'
			mx='auto'
			textAlign='center'
		>
			{/* after confirmed */}
			{data && data?.success ? (
				<Typography color='success'>Email confirmed successfully!</Typography>
			) : (
				<Typography color='error'>
					Something went wrong! Maybe the token is invalid. Please sign up again to get a new token. You must confirm
					your email within 30 minutes.
				</Typography>
			)}
		</Box>
	);
};

export default ConfirmEmail;
