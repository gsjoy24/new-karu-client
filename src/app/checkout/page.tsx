'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useGetMeQuery } from '@/redux/api/userApi';
import { TCart } from '@/types/product';
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Stack,
	Typography
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';

const CheckOutPage = () => {
	const [value, setValue] = useState('inside');

	const { data, isLoading } = useGetMeQuery({});
	const cartItems = data?.data?.cart ?? [];

	const totalPrice = Math.ceil(
		cartItems.reduce((acc: number, item: TCart) => acc + item.product?.last_price * item.quantity, 0)
	);
	const deliveryCharge = value === 'inside' ? 60 : 120;

	const subTotal = totalPrice + deliveryCharge;

	const totalProducts = cartItems.reduce((acc: number, item: TCart) => acc + item.quantity, 0);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};
	const handleSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<Box my={3}>
			<Typography
				variant='h1'
				sx={{
					fontSize: '2.2rem',
					my: 2
				}}
			>
				Check Out
			</Typography>

			<KForm onSubmit={handleSubmit}>
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
							label='Order Note'
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
										<Typography>
											Very High Quality Metal Body Antique Design Golden & Maroon Color Design Table Desk Clock
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
												৳ {item.product?.last_price} x {item.quantity}
											</Typography>
											<Typography>{item.product?.last_price * item.quantity}</Typography>
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
								<FormControl>
									<FormLabel id='demo-controlled-radio-buttons-group'>
										Select deliver location to calculate delivery charge
									</FormLabel>
									<RadioGroup
										aria-labelledby='demo-controlled-radio-buttons-group'
										name='controlled-radio-buttons-group'
										value={value}
										onChange={handleChange}
									>
										<FormControlLabel value='inside' control={<Radio />} label='Inside Dhaka' />
										<FormControlLabel value='outside' control={<Radio />} label='Outside of Dhaka' />
									</RadioGroup>
								</FormControl>
								<Divider />

								<Stack
									sx={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										gap: '1rem'
									}}
								>
									<Typography>Total Product Price</Typography>
									<Typography>৳ {totalPrice}</Typography>
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
									<Typography>Delivery Charge</Typography>
									<Typography>৳ {deliveryCharge}</Typography>
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
									<Typography>৳ {subTotal}</Typography>
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
								<Button variant='outlined' fullWidth LinkComponent={Link} href={'/products'}>
									Continue Shopping
								</Button>
								<Button type='submit'>Place Order</Button>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</KForm>
		</Box>
	);
};

export default CheckOutPage;
