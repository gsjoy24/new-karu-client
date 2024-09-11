'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useGetMeQuery, usePlaceOrderMutation } from '@/redux/api/userApi';
import { TCart } from '@/types/product';
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
import { useState } from 'react';
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
	const [isAgree, setIsAgree] = useState<boolean>(false);
	const [statusModalOpen, setStatusModalOpen] = useState<boolean>(false);
	const [orderResponse, setOrderResponse] = useState(null);

	const handleCloseStatusModal = () => {
		setStatusModalOpen(false);
		router.push('/');
	};

	const { data, isLoading } = useGetMeQuery({});
	const cartItems = data?.data?.cart ?? [];

	const totalPrice = Math.ceil(
		cartItems.reduce((acc: number, item: TCart) => acc + item.product?.last_price * item.quantity, 0)
	);
	const totalProducts = cartItems.reduce((acc: number, item: TCart) => acc + item.quantity, 0);

	const [placeOrder, { isLoading: isOrdering }] = usePlaceOrderMutation();

	const handleOrder = async (data: FieldValues) => {
		if (!isAgree) {
			toast.error('Please agree with terms & conditions.');
			return;
		}
		const products = cartItems?.map((item: TCart) => ({
			product: item?.product?._id,
			quantity: item?.quantity,
			total_price: Math.ceil(item?.product?.last_price * item?.quantity)
		}));

		try {
			const res = await placeOrder({ ...data, products, total_price: totalPrice }).unwrap();
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

	return isLoading ? (
		<Loading />
	) : (
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
								<KInput name='name' label='Receiver Name' />
								<KInput name='phone' label='Receiver Phone Number' />
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
										pb: '6rem'
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
										{cartItems.map((item: TCart) => (
											<Stack
												key={item.product?._id}
												sx={{
													gap: '0.5rem'
												}}
											>
												<Typography>{item?.product?.name}</Typography>
												<Stack
													sx={{
														flexDirection: 'row',
														justifyContent: 'space-between',
														alignItems: 'center',
														gap: '1rem'
													}}
												>
													<Typography>
														৳ {item.product?.last_price} x {item.quantity}
													</Typography>
													<Typography>৳ {Math.ceil(item.product?.last_price * item.quantity)}</Typography>
												</Stack>
												<Divider />
											</Stack>
										))}
										<Stack
											sx={{
												flexDirection: 'row',
												justifyContent: 'space-between',
												alignItems: 'center',
												gap: '1rem'
											}}
										>
											<Typography>Total Products</Typography>
											<Typography>{totalProducts}</Typography>
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
											<Typography>৳ {totalPrice}</Typography>
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
												<Link href='/terms' passHref>
													<Typography
														variant='body2'
														sx={{
															cursor: 'pointer',
															textDecoration: 'underline',
															textUnderlineOffset: '0.4rem'
														}}
														color='primary'
													>
														I agree with the terms & conditions
													</Typography>
												</Link>
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
