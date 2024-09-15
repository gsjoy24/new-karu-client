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

	const isAlreadyInCart = false;

	const handleAddToCart = async () => {};

	const handleRemoveFromCart = async () => {};

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
