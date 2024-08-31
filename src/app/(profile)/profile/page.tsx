'use client';
import Loading from '@/app/loading';
import { useGetMeQuery } from '@/redux/api/userApi';
import { Box, Stack, Typography } from '@mui/material';
const Profile = () => {
	const { data, isLoading } = useGetMeQuery({});

	return isLoading ? (
		<Loading />
	) : (
		<Box>
			<Typography
				variant='h4'
				sx={{
					mb: 2
				}}
			>
				Welcome, {data?.data?.name?.first_name ?? data?.data?.full_name}!
			</Typography>
			<Stack spacing={2}>
				<Typography>
					<strong>Email:</strong> {data?.data?.email}
				</Typography>
				<Typography>
					<strong>Phone:</strong> {data?.data?.mobile_number || 'N/A'}
				</Typography>
				<Typography>
					<strong>Address:</strong> {data?.data?.address || 'N/A'}
				</Typography>
				<Typography>
					<strong>District:</strong> {data?.data?.district || 'N/A'}
				</Typography>
				<Typography>
					<strong>City:</strong> {data?.data?.city || 'N/A'}
				</Typography>
			</Stack>
		</Box>
	);
};

export default Profile;
