import { useRemoveFromCartMutation } from '@/redux/api/userApi';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CircularProgress, IconButton } from '@mui/material';
import { toast } from 'sonner';

const DeleteCartItem = ({ id }: { id: string }) => {
	const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();
	const handleRemoveFromCart = async () => {
		try {
			const res = await removeFromCart(id).unwrap();
			toast.success(res?.message);
		} catch (error: any) {
			// console.log(error);
			toast.error(error?.data?.message ?? 'Something went wrong');
		}
	};
	return (
		<>
			<IconButton
				onClick={handleRemoveFromCart}
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
		</>
	);
};

export default DeleteCartItem;
