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
import Image from 'next/image';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { IoAddCircleOutline } from 'react-icons/io5';
import CartQuantityHandler from './components/CartQuantityHandler';

const CartPage = () => {
	const { data, isLoading } = useGetMeQuery({});

	const cartItems = data?.data?.cart ?? [];
	const totalPrice = Math.ceil(
		cartItems.reduce((acc: number, item: TCart) => acc + item.product?.last_price * item.quantity, 0)
	);
	const shippingCost = 80;
	const subTotal = totalPrice + shippingCost;

	return (
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
									<TableRow key={item.product._id}>
										<TableCell>
											<Box
												sx={{
													display: 'flex',
													minWidth: '250px',
													maxWidth: '340px',
													gap: '1rem',
													alignItems: 'center'
												}}
											>
												<Image
													src={
														'https://cynor.b-cdn.net/wp-content/uploads/2024/05/KC181-Ash-Color-Design-6-cup-1-jug-1-plate-Surai-Set-1-300x300.jpg'
													}
													alt={item.product?.name}
													width={100}
													height={100}
													className='w-[4rem] sm:w-[8rem] rounded-md'
												/>
												<Box>
													<Typography gutterBottom>
														{/* {item.product?.name} */}
														Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor distinctio placeat
														reprehenderit!
													</Typography>
													<Typography
														sx={{
															fontSize: '0.8rem'
														}}
													>
														৳{item.product?.last_price}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<CartQuantityHandler id={item?.product?._id} quantity={item.quantity} />
										</TableCell>
										<TableCell>
											<Typography>৳{item.product?.last_price * item.quantity}</Typography>
										</TableCell>
									</TableRow>
								))}
								{cartItems.map((item: TCart) => (
									<TableRow key={item.product._id}>
										<TableCell>
											<Box
												sx={{
													display: 'flex',
													minWidth: '250px',
													maxWidth: '340px',
													gap: '1rem',
													alignItems: 'center'
												}}
											>
												<Image
													src={
														'https://cynor.b-cdn.net/wp-content/uploads/2024/05/KC181-Ash-Color-Design-6-cup-1-jug-1-plate-Surai-Set-1-300x300.jpg'
													}
													alt={item.product?.name}
													width={100}
													height={100}
													className='w-[4rem] sm:w-[8rem] rounded-md'
												/>
												<Box>
													<Typography gutterBottom>
														{/* {item.product?.name} */}
														Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor distinctio placeat
														reprehenderit!
													</Typography>
													<Typography
														sx={{
															fontSize: '0.8rem'
														}}
													>
														৳{item.product?.last_price}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<CartQuantityHandler id={item?.product?._id} quantity={item.quantity} />
										</TableCell>
										<TableCell>
											<Typography>৳{item.product?.last_price * item.quantity}</Typography>
										</TableCell>
									</TableRow>
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
							<Button variant='contained'>Checkout</Button>
							<Button variant='outlined' fullWidth>
								Continue Shopping
							</Button>
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CartPage;
