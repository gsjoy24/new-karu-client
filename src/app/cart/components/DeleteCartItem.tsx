import { useRemoveFromCartMutation } from '@/redux/api/userApi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { toast } from 'sonner';

const DeleteCartItem = ({ id }: { id: string }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();
	const handleRemoveFromCart = async () => {
		try {
			const res = await removeFromCart(id).unwrap();
			toast.success(res?.message);
		} catch (error: any) {
			toast.error(error?.data?.message ?? 'Something went wrong');
		}
	};
	return (
		<>
			<Button onClick={handleClickOpen} variant='text' color='error' size='small' disabled={isRemoving}>
				Remove
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Delete Item from Cart</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to delete this item from your cart?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant='text'>
						Cancel
					</Button>
					<Button onClick={handleRemoveFromCart} variant='text' autoFocus disabled={isRemoving}>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteCartItem;
