'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { TCart } from '@/types/product';
import {
	Box,
	Button,
	Divider,
	Grid,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';
import Link from 'next/link';
import Loading from '../loading';
import CartItem from './components/CartItem';

const CartPage = () => {
	const { data, isLoading } = useGetMeQuery({});

	const cartItems = data?.data?.cart ?? [];
	const totalPrice = Math.ceil(
		cartItems.reduce((acc: number, item: TCart) => acc + item.product?.last_price * item.quantity, 0)
	);
	const shippingCost = 80;
	const subTotal = totalPrice + shippingCost;

	return isLoading ? (
		<Loading />
	) : (
		<>
			{cartItems?.length ? (
				<Box my={3}>
					<Typography
						variant='h1'
						sx={{
							fontSize: '2rem',
							mb: '1rem'
						}}
					>
						YOUR CART
					</Typography>
					<Grid container>
						<Grid item xs={12} md={7}>
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Product</TableCell>
											<TableCell>Quantity</TableCell>
											<TableCell>Total</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{cartItems.map((item: TCart) => (
											<CartItem key={item.product._id} item={item} />
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>

						<Grid item xs={12} md={5}>
							<Box
								sx={{
									border: '1px solid #e0e0e0',
									borderRadius: '5px',
									margin: {
										xs: '1rem 0',
										md: '0 1rem'
									},
									minHeight: '20rem',
									maxHeight: '25rem',
									height: '100%',
									position: 'relative',
									pb: '4rem'
								}}
							>
								<Typography
									variant='h2'
									sx={{
										fontSize: '1.5rem',
										my: '1rem',
										textAlign: 'center'
									}}
								>
									Cart Summary
								</Typography>
								<Divider />
								<Stack gap={1} p={2}>
									<Stack
										sx={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
											gap: '1rem'
										}}
									>
										<Typography>Total</Typography>
										<Typography>৳ {totalPrice}</Typography>
									</Stack>
									<Stack
										sx={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
											gap: '1rem'
										}}
									>
										<Typography>Shipping</Typography>
										<Typography>৳ {shippingCost} </Typography>
									</Stack>
									<Typography
										sx={{
											fontSize: '0.8rem',
											color: 'gray',
											textAlign: 'end'
										}}
									>
										*Shipping cost is fixed
									</Typography>
									<Divider />
									<Stack
										sx={{
											flexDirection: 'row',
											justifyContent: 'space-between',
											alignItems: 'center',
											gap: '1rem'
										}}
									>
										<Typography>Sub Total</Typography>
										<Typography>৳ {subTotal}</Typography>
									</Stack>
								</Stack>

								{/* buttons */}
								<Stack
									direction='column'
									gap={1}
									sx={{
										position: 'absolute',
										bottom: '1rem',
										width: '100%',
										padding: '0 1rem'
									}}
								>
									<Button LinkComponent={Link} href={'/checkout'}>
										Proceed to checkout
									</Button>
									<Button fullWidth LinkComponent={Link} href={'/products'}>
										Continue Shopping
									</Button>
								</Stack>
							</Box>
						</Grid>
					</Grid>
				</Box>
			) : (
				<Box
					textAlign='center'
					my={3}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: '50vh'
					}}
				>
					<Typography variant='h1' sx={{ fontSize: '2rem', mb: '1rem' }}>
						Your cart is empty
					</Typography>
					<Button variant='contained' LinkComponent={Link} href='/products'>
						Continue Shopping
					</Button>
				</Box>
			)}
		</>
	);
};

export default CartPage;
