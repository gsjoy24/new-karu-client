import { useRemoveFromCartMutation } from '@/redux/api/userApi';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton
} from '@mui/material';
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
			<IconButton
				onClick={handleClickOpen}
				color='error'
				size='small'
				disabled={!'isLoading'}
				sx={{
					bgcolor: '#fff',
					p: 1,
					position: 'absolute',
					boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
					top: '-1rem',
					left: '6.6rem',
					': hover': {
						bgcolor: 'white'
					}
				}}
			>
				{!isRemoving ? <DeleteOutlineIcon fontSize='small' /> : <CircularProgress size={20} />}
			</IconButton>
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
