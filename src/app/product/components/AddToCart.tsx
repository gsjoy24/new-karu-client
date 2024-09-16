import { addItemToCart, removeItemFromCart, selectCartItems } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TProduct } from '@/types/product';
import { LoadingButton } from '@mui/lab';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'sonner';

const AddToCart = ({ product, stock, setOpen }: { product: TProduct; stock: number; setOpen: () => void }) => {
	const [quantity, setQuantity] = useState<number>(1);
	const dispatch = useAppDispatch();

	const cartItems = useAppSelector(selectCartItems);
	const existingItem = cartItems.find((item) => item.id === product._id);

	const handleAddToCart = async () => {
		if (quantity > stock) {
			toast.error('Quantity exceeds the available stock');
			return;
		}
		const data = {
			id: product._id,
			quantity,
			price: product.last_price,
			name: product.name,
			image: product.images[0]
		};

		dispatch(addItemToCart(data));
		setQuantity(1);

		setOpen();
	};

	const handleRemoveFromCart = async () => {
		dispatch(removeItemFromCart(product?._id));
	};

	return (
		<Stack direction='row' spacing={2} mt={2}>
			{!existingItem ? (
				<>
					<Box
						sx={{
							display: 'flex',
							gap: '0.3rem',
							alignItems: 'center'
						}}
					>
						<IconButton disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
							<CiSquareMinus />
						</IconButton>
						<span>{quantity}</span>
						<IconButton disabled={quantity === stock} onClick={() => setQuantity(quantity + 1)}>
							<CiSquarePlus />
						</IconButton>
					</Box>
					<LoadingButton
						startIcon={<LiaCartPlusSolid />}
						onClick={handleAddToCart}
						loadingPosition='start'
						variant='contained'
					>
						Add to Cart
					</LoadingButton>
				</>
			) : (
				<Button
					onClick={handleRemoveFromCart}
					sx={{
						display: 'flex',
						gap: '0.3rem',
						alignItems: 'center'
					}}
				>
					<RiDeleteBinLine />
					Remove from Cart
				</Button>
			)}
		</Stack>
	);
};

export default AddToCart;
