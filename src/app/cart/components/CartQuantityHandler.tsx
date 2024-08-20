'use client';
import { IconButton, Stack, Typography } from '@mui/material';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

type CartQuantityHandlerProps = {
	id?: string;
	quantity: number;
};

const CartQuantityHandler = ({ id, quantity }: CartQuantityHandlerProps) => {
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
			<IconButton>
				<CiCircleMinus />
			</IconButton>
			<Typography>{quantity}</Typography>
			<IconButton>
				<CiCirclePlus />
			</IconButton>
		</Stack>
	);
};

export default CartQuantityHandler;
