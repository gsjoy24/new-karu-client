'use client';
import { selectCartItems, selectTotalAmount } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { Box, Button, Divider, Grid, Stack, Step, StepButton, Stepper, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from '../loading';
import CartItem from './components/CartItem';

const steps = [
	{
		label: 'Shopping Cart',
		link: '/cart'
	},
	{
		label: 'Check Out',
		link: '/checkout'
	},
	{
		label: 'Order Status'
	}
];

const CartPage = () => {
	const cartItems = useAppSelector(selectCartItems);
	const totalAmount = useAppSelector(selectTotalAmount);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return <Loading />;
	}

	return (
		<Box sx={{ px: { xs: 2, md: 4 }, my: 3 }}>
			{' '}
			{/* Added padding to avoid overflow on smaller devices */}
			{cartItems?.length ? (
				<>
					<Stepper
						alternativeLabel
						nonLinear
						sx={{
							maxWidth: '100%',
							mx: 'auto',
							my: 5
						}}
						activeStep={0}
					>
						{steps.map(({ label, link }, i) => (
							<Step key={label}>
								<StepButton component={Link} href={link ?? '/checkout'} disabled={i === 2} color='inherit'>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
					<Grid container spacing={2}>
						{' '}
						{/* Added spacing for better separation */}
						<Grid item xs={12} md={7}>
							{cartItems.map((item: { id: string; name: string; price: number; quantity: number; image: string }) => (
								<CartItem key={item?.id} item={item} />
							))}
						</Grid>
						<Grid item xs={12} md={5}>
							<Box
								sx={{
									border: '1px solid #e0e0e0',
									borderRadius: 2,
									p: 3,
									position: 'relative',
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between'
								}}
							>
								<Typography
									variant='h6'
									sx={{
										fontSize: '1.5rem',
										my: 1,
										textAlign: 'center'
									}}
								>
									Cart Summary
								</Typography>
								<Divider sx={{ my: 2 }} />
								<Stack spacing={2}>
									<Stack direction='row' justifyContent='space-between'>
										<Typography>Total Products</Typography>
										<Typography>{}</Typography>
									</Stack>

									<Divider />
									<Stack direction='row' justifyContent='space-between'>
										<Typography>Total Price</Typography>
										<Typography>৳ {totalAmount}</Typography>
									</Stack>
								</Stack>

								{/* buttons */}
								<Stack direction='column' spacing={2} mt={2}>
									<Button variant='contained' fullWidth component={Link} href={'/checkout'}>
										Proceed to Checkout
									</Button>
									<Button variant='outlined' fullWidth component={Link} href={'/products'}>
										Continue Shopping
									</Button>
								</Stack>
							</Box>
						</Grid>
					</Grid>
				</>
			) : (
				<Box
					textAlign='center'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: '50vh'
					}}
				>
					<Typography variant='h4' sx={{ mb: 2 }}>
						Your cart is empty
					</Typography>
					<Button variant='contained' component={Link} href='/products'>
						Continue Shopping
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default CartPage;
