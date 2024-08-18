'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useForgotPasswordMutation } from '@/redux/api/authApi';
import { ForgotPasswordSchema } from '@/validationSchemas/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const ForgotPasswordModal = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

	const handleSubmit = async (data: FieldValues) => {
		try {
			const res = await forgotPassword(data).unwrap();
			if (res.success) {
				handleClose();
				toast.success(res.message);
			} else {
				toast.error(res.message ?? 'Something went wrong!');
			}
		} catch (error: any) {
			toast.error(error.message ?? 'Something went wrong!');
		}
	};

	return (
		<>
			<Button
				onClick={handleClickOpen}
				variant='text'
				size='small'
				sx={{
					color: 'grey',
					fontSize: '0.8rem'
				}}
			>
				Forgot Password?
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				sx={{
					width: '100%',
					'.MuiDialog-paper': {
						width: '100%',
						maxWidth: '400px'
					}
				}}
			>
				<DialogTitle id='alert-dialog-title'>Enter your email</DialogTitle>
				<DialogContent>
					<KForm onSubmit={handleSubmit} resolver={zodResolver(ForgotPasswordSchema)}>
						<KInput name='email' placeholder='example@gmail.com' />
						<DialogActions>
							<Button onClick={handleClose} type='button' size='small' variant='outlined'>
								Cancel
							</Button>
							<LoadingButton type='submit' variant='contained' loading={isLoading} size='small' autoFocus>
								Send Email
							</LoadingButton>
						</DialogActions>
					</KForm>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ForgotPasswordModal;
