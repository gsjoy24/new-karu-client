'use client';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import { useGetMeQuery } from '@/redux/api/userApi';
import { Box, Typography } from '@mui/material';
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
				<KInput name='' />
			</KForm>
		</Box>
	);
};

export default CheckOutPage;
