import CartQuantityHandler from '@/app/cart/components/CartQuantityHandler';
import DeleteCartItem from '@/app/cart/components/DeleteCartItem';
import Loading from '@/app/loading';
import { selectCartItems } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
	const cartItems = useAppSelector(selectCartItems);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return <Loading />;
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth='xs'
			fullWidth
			PaperProps={{
				sx: {
					borderRadius: 2,
					p: 4,
					boxShadow: 3,
					position: 'relative',
					maxWidth: '500px'
				}
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					position: 'absolute',
					width: '90%',
					top: 10,
					right: 10
				}}
			>
				<Typography variant='h6' fontWeight='bold'>
					Cart
				</Typography>
				<IconButton onClick={onClose} sx={{ p: 0 }}>
					<Close />
				</IconButton>
			</Box>

			<Stack
				direction='column'
				alignItems='center'
				spacing={2}
				sx={{
					my: 2
				}}
			>
				{cartItems.map((item: { id: string; name: string; price: number; quantity: number; image: string }) => (
					<Box
						key={item?.id}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
							borderBottom: '1px solid #e0e0e0',
							gap: 2
						}}
					>
						{/* Product Image and Name */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								gap: 2
							}}
						>
							{/* Product Name */}
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'flex-start',
									justifyContent: 'center',
									gap: 1
								}}
							>
								<Image
									src={item?.image}
									alt={item?.name}
									width={80}
									height={80}
									className='mt-[10px] w-8 h-8 sm:w-12 sm:h-12 rounded-md'
								/>
								<div>
									<Typography variant='body1' gutterBottom>
										{item?.name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos tenetur distinctio?
									</Typography>
									<Typography variant='body2'>৳ {item?.price}</Typography>
								</div>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									gap: 1,
									width: '100%'
								}}
							>
								{/* Total Price */}
								<Typography variant='body2'>৳ {Math.ceil(item?.price * item.quantity)}</Typography>
								{/* Quantity Handler */}
								<CartQuantityHandler id={item?.id} quantity={item.quantity} />
								<DeleteCartItem id={item?.id} />
							</Box>
						</Box>
					</Box>
				))}
			</Stack>

			{/* CTA Buttons */}
			<Stack
				direction={{
					xs: 'column',
					md: 'row'
				}}
				justifyContent='center'
				spacing={2}
				mt={2}
			>
				<Button variant='contained' color='primary' LinkComponent={Link} href='/checkout'>
					Check Out
				</Button>
				<Button variant='outlined' color='primary' LinkComponent={Link} href='/cart'>
					View Cart
				</Button>
				<Button variant='outlined' color='primary' LinkComponent={Link} href='/products'>
					Continue Shopping
				</Button>
			</Stack>
		</Dialog>
	);
};

export default CartModal;
