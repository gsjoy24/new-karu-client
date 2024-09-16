'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { usePlaceOrderMutation } from '@/redux/api/userApi';
import { selectCurrentUser } from '@/redux/features/authSlice';
import { selectCartItems, selectTotalAmount, selectTotalItems } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { OrderValidation } from '@/validationSchemas/order.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Grid,
	Stack,
	Step,
	StepButton,
	Stepper,
	Typography
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import Loading from '../loading';
import OrderConfirmationModal from './components/OrderConfirmationModal';

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

const CheckOutPage = () => {
	const router = useRouter();
	const currentUser = useAppSelector(selectCurrentUser);
	console.log(currentUser);
	const [isAgree, setIsAgree] = useState<boolean>(false);
	const [statusModalOpen, setStatusModalOpen] = useState<boolean>(false);
	const [orderResponse, setOrderResponse] = useState(null);

	const handleCloseStatusModal = () => {
		setStatusModalOpen(false);
		router.push('/');
	};

	const cartItems = useAppSelector(selectCartItems);
	const totalAmount = useAppSelector(selectTotalAmount);
	const totalItems = useAppSelector(selectTotalItems);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const [placeOrder, { isLoading: isOrdering }] = usePlaceOrderMutation();

	const handleOrder = async (data: FieldValues) => {
		if (!isAgree) {
			toast.error('Please agree with terms & conditions.');
			return;
		}
		const products = cartItems?.map(
			(item: { id: string; name: string; price: number; quantity: number; image: string }) => ({
				product: item?.id,
				quantity: item?.quantity,
				total_price: Math.ceil(item?.price * item?.quantity)
			})
		);

		try {
			const res = await placeOrder({ ...data, products, total_price: totalAmount }).unwrap();
			if (res.success) {
				toast.success('Order placed successfully!');
				setStatusModalOpen(true);
				setOrderResponse(res?.data);
			} else {
				toast.error(res?.message ?? 'Something went wrong!');
			}
		} catch (error) {
			toast.error('Something went wrong!');
		}
	};
	if (!hasMounted) {
		return <Loading />;
	}

	return (
		<>
			{cartItems?.length ? (
				<Box my={3}>
					<Stepper
						alternativeLabel
						sx={{
							maxWidth: '50rem',
							mx: 'auto',
							my: 5
						}}
						activeStep={1}
					>
						{steps.map(({ label, link }, i) => (
							<Step key={label}>
								<Link href={link ?? '/checkout'}>
									<StepButton disabled={i === 2} color='inherit'>
										{label}
									</StepButton>
								</Link>
							</Step>
						))}
					</Stepper>

					<KForm onSubmit={handleOrder} resolver={zodResolver(OrderValidation)}>
						<Grid container>
							<Grid
								item
								xs={12}
								md={7}
								sx={{
									display: 'flex',
									flexDirection: 'column'
								}}
								gap={2}
							>
								{!currentUser && (
									<Box>
										<Typography variant='h2' sx={{ fontSize: '1.5rem', my: '1rem' }}>
											Create an account (optional)
										</Typography>
										<Typography variant='body2' mt={'-10px'} mb={2}>
											by creating an account you will be able to view your order status by going to your profile. If you
											don&#39;t want to create an account, you can still place your order as a guest.
										</Typography>
										<KInput name='email' label='Email' />
										<KInput name='password' label='Password' />
									</Box>
								)}
								<Divider />
								<KInput name='name' label='Name' />
								<KInput name='phone' label='Phone Number' />
								<KInput
									name='address'
									label='Address'
									placeholder='Your detail address with house number and road number or the closest courier point address.'
									multiline
								/>
								<KInput name='district' label='District' />
								<KInput name='city' label='City' />
								<KInput
									name='order_note'
									label='Order Note (optional)'
									placeholder='Write your order note here if you have any special instruction for us.'
									multiline
								/>
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
										minHeight: '30rem',
										position: 'relative',
										pb: '10rem'
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
										Your Order
									</Typography>
									<Divider />
									<Stack gap={1} p={2}>
										{/* products */}
										{cartItems.map(
											(item: { id: string; name: string; price: number; quantity: number; image: string }) => (
												<Stack
													key={item?.id}
													sx={{
														gap: '0.5rem'
													}}
												>
													<Typography>{item?.name}</Typography>
													<Stack
														sx={{
															flexDirection: 'row',
															justifyContent: 'space-between',
															alignItems: 'center',
															gap: '1rem'
														}}
													>
														<Typography>
															৳ {item?.price} x {item.quantity}
														</Typography>
														<Typography>৳ {Math.ceil(item?.price * item.quantity)}</Typography>
													</Stack>
													<Divider />
												</Stack>
											)
										)}
										<Stack
											sx={{
												flexDirection: 'row',
												justifyContent: 'space-between',
												alignItems: 'center',
												gap: '1rem'
											}}
										>
											<Typography>Total Products</Typography>
											<Typography>{totalItems}</Typography>
										</Stack>

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
											<Typography>৳ {totalAmount}</Typography>
										</Stack>
										<Divider />
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
										<FormControlLabel
											sx={{
												width: 'fit-content'
											}}
											control={<Checkbox />}
											label={
												<Typography variant='body2'>
													Agree with the{' '}
													<Link className='text-blue-500' href='/terms' passHref>
														terms & conditions
													</Link>
												</Typography>
											}
											onChange={(e) => setIsAgree((e.target as any).checked as boolean)}
										/>
										<Button type='submit'>{isOrdering ? 'Loading' : 'Place Order'}</Button>
										<Button variant='outlined' fullWidth LinkComponent={Link} href={'/products'}>
											Continue Shopping
										</Button>
									</Stack>
								</Box>
							</Grid>
						</Grid>
					</KForm>
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
			<OrderConfirmationModal open={statusModalOpen} onClose={handleCloseStatusModal} response={orderResponse} />
		</>
	);
};

export default CheckOutPage;
