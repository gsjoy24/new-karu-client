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
			<Typography variant='h4' textAlign='center'>
				Profile
			</Typography>
			<Stack
				direction='row'
				sx={{
					fontSize: '1.5rem'
				}}
			>
				<Typography>Name: </Typography>
				<Typography>{data?.data?.full_name}</Typography>
			</Stack>
			<Stack direction='row'>
				<Typography>Email: </Typography>
				<Typography>{data?.data?.email}</Typography>
			</Stack>
		</Box>
	);
};

export default Profile;
