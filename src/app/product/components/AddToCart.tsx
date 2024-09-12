import { useAddToCartMutation, useGetMeQuery, useRemoveFromCartMutation } from '@/redux/api/userApi';
import { TProduct } from '@/types/product';
import { LoadingButton } from '@mui/lab';
import { Box, Button, IconButton, Skeleton, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { toast } from 'sonner';

const AddToCart = ({ product, stock, setOpen }: { product: string; stock: number; setOpen: () => void }) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();
	const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();

	const { data, isLoading } = useGetMeQuery({});
	const isAlreadyInCart = data?.data?.cart?.some(
		(item: { product: TProduct; quantity: number }) => item?.product?._id === product
	);
	const handleAddToCart = async () => {
		const data = { product, quantity };
		try {
			const res = await addToCart(data).unwrap();
			setOpen();
		} catch (error: any) {
			toast.error(error?.data?.message ?? 'Something went wrong');
		}
	};

	const handleRemoveFromCart = async () => {
		try {
			const res = await removeFromCart(product).unwrap();
			toast.success(res?.message);
		} catch (error: any) {
			toast.error(error?.data?.message ?? 'Something went wrong');
		}
	};

	if (isLoading) {
		return <Skeleton animation='wave' />;
	}

	return (
		<Stack direction='row' spacing={2} mt={2}>
			{!isAlreadyInCart ? (
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
						loading={isAdding}
						loadingPosition='start'
						variant='contained'
					>
						Add to Cart
					</LoadingButton>
				</>
			) : (
				<>
					<LoadingButton
						startIcon={<AiOutlineDelete />}
						onClick={handleRemoveFromCart}
						loading={isRemoving}
						loadingPosition='start'
						variant='outlined'
						size='small'
					>
						Remove from Cart
					</LoadingButton>
					<Button LinkComponent={Link} size='small' href='/cart'>
						See cart
					</Button>
				</>
			)}
		</Stack>
	);
};

export default AddToCart;
