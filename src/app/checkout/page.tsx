'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useGetMeQuery } from '@/redux/api/userApi';
import { Box, Button, Stack, Typography } from '@mui/material';
const CheckOutPage = () => {
	const { data, isLoading } = useGetMeQuery({});
	const handleSubmit = () => {};
	return (
		<Box>
			<Typography
				variant='h1'
				sx={{
					fontSize: '2.2rem',
					my: 2
				}}
			>
				CheckOut
			</Typography>

			<KForm onSubmit={handleSubmit}>
				<Stack direction='column' gap={2}>
					<KInput name='name' label='Name' />
					<KInput name='phone' label='Phone Number' />
					<KInput name='address' label='Address' multiline />
					<KInput name='courier_address' label='Courier Address' multiline />
					<KInput name='district' label='District' />
					<KInput name='city' label='City' />
					<KInput name='order_note' label='Order Note' multiline />
					<Button type='submit'>CheckOut</Button>
				</Stack>
			</KForm>
		</Box>
	);
};

export default CheckOutPage;
