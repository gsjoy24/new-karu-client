import { useAddToCartMutation } from '@/redux/api/userApi';
import { LoadingButton } from '@mui/lab';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { toast } from 'sonner';

const AddToCart = ({ product, stock }: { product: string; stock: number }) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [addToCart, { isLoading }] = useAddToCartMutation();

	const handleAddToCart = async () => {
		const data = { product, quantity };
		try {
			const res = await addToCart(data).unwrap();
			toast.success(res?.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Stack direction='row' spacing={2} mt={2}>
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
				loading={isLoading}
				loadingPosition='start'
				variant='contained'
			>
				Add to Cart
			</LoadingButton>
		</Stack>
	);
};

export default AddToCart;
