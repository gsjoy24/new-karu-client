'use client';
import { updateItemQuantity } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IconButton, Stack, Typography } from '@mui/material';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

type CartQuantityHandlerProps = {
	id: string;
	quantity: number;
};

const CartQuantityHandler = ({ id, quantity }: CartQuantityHandlerProps) => {
	const dispatch = useAppDispatch();
	const handleQuantityChange = async (quantity: number) => {
		dispatch(updateItemQuantity({ id, quantity }));
	};
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 1,
				color: 'primary.main'
			}}
		>
			<IconButton onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
				<CiCircleMinus />
			</IconButton>
			<Typography>{quantity}</Typography>
			<IconButton onClick={() => handleQuantityChange(quantity + 1)}>
				<CiCirclePlus />
			</IconButton>
		</Stack>
	);
};

export default CartQuantityHandler;
