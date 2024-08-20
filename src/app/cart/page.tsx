'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { TCart } from '@/types/product';
import {
	Box,
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
	return (
		<Box>
			<Typography
				variant='h1'
				sx={{
					fontSize: '2rem',
					my: '1rem'
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
														${item.product?.last_price}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<CartQuantityHandler id={item?.product?._id} quantity={item.quantity} />
										</TableCell>
										<TableCell>
											<Typography>{item.product?.last_price * item.quantity}</Typography>
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
							height: '100%'
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
						<Box p={2}>
							<Stack
								sx={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									gap: '1rem',
									my: '1rem'
								}}
							>
								<Typography>Subtotal</Typography>
								<Typography>$100</Typography>
							</Stack>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CartPage;
