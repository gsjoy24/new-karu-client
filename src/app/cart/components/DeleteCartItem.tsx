import { removeItemFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

const DeleteCartItem = ({ id }: { id: string }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useAppDispatch();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleRemoveFromCart = async () => {
		dispatch(removeItemFromCart(id));
	};
	return (
		<>
			<Button onClick={handleClickOpen} variant='text' color='error' size='small'>
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
					<Button onClick={handleRemoveFromCart} variant='text' autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteCartItem;
