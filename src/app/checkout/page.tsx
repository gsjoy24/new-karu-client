'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useLoginMutation, useRegisterMutation } from '@/redux/api/authApi';
import { usePlaceOrderMutation } from '@/redux/api/userApi';
import { selectCurrentUser, setUser } from '@/redux/features/authSlice';
import { clearCart, selectCartItems, selectTotalAmount, selectTotalItems } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setTOLocalStorage } from '@/utils/local-storage';
import verifyToken from '@/utils/verifyToken';
import { OrderValidation } from '@/validationSchemas/order.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	Grid,
	IconButton,
	Radio,
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
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
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
	const dispatch = useAppDispatch();
	const [showPassword, setShowPassword] = useState<boolean>(false);
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
	const [register] = useRegisterMutation();
	const [login] = useLoginMutation();

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

		const { email, password, ...rest } = data;
		const registerData = { name: rest.name, email, password };
		const orderData = { ...rest, products, total_price: totalAmount } as any;

		if (currentUser) {
			orderData.email = currentUser?.email;
		}

		try {
			if (email && password) {
				// check if the password is valid
				if (password.length < 8) {
					toast.error('Password must be at least 8 characters long.');
					return;
				}
				const response = await register(registerData).unwrap();
				if (response?.success) {
					toast.success('Registered successfully! Placing order...');
					const loginRes = await login({
						email,
						password
					}).unwrap();
					if (loginRes?.success) {
						const userInfo = verifyToken(loginRes?.data?.accessToken);
						// save user info and token in redux store
						dispatch(setUser({ user: userInfo, token: loginRes?.data?.accessToken }));
						setTOLocalStorage('accessToken', loginRes?.data?.accessToken);
					}
				}
				orderData.email = email;
			}

			const res = await placeOrder(orderData).unwrap();
			if (res.success) {
				toast.success('Order placed successfully!');
				setStatusModalOpen(true);
				setOrderResponse(res?.data);
				dispatch(clearCart());
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
								{!currentUser && (
									<>
										<Divider />
										<Box>
											<Typography variant='h2' sx={{ fontSize: '1.5rem', my: '1rem' }}>
												Create an account (optional)
											</Typography>
											<Typography variant='body2' mt={'-10px'} mb={2}>
												by creating an account you will be able to view your order status by going to your profile. If
												you don&#39;t want to create an account, you can still place your order as a guest.
											</Typography>
											<KInput name='email' label='Email (optional)' />
											<div className='relative'>
												<KInput label='Password (optional)' name='password' type={showPassword ? 'text' : 'password'} />
												<IconButton
													onClick={() => setShowPassword(!showPassword)}
													sx={{
														position: 'absolute',
														top: '25px',
														right: '10px',
														cursor: 'pointer'
													}}
												>
													{showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
												</IconButton>
											</div>
										</Box>
									</>
								)}
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
										pb: {
											xs: '15rem',
											md: '14rem'
										}
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
													<Typography
														sx={{
															fontSize: '1rem',
															fontWeight: 'bold'
														}}
													>
														{item?.name}
													</Typography>
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
										<FormControlLabel value='cash on delivery' control={<Radio checked />} label='Cash On Delivery' />
										<Typography variant='body2' ml={4} mt={-2}>
											Pay with cash upon delivery. Outside Dhaka, customers have to pay delivery charge in advance.
										</Typography>
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
