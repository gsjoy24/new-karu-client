'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { TUserProfile } from '@/types/TAuthState';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Loading from '../loading';

const Profile = () => {
	const { data, isFetching } = useGetMeQuery({});
	const profile: TUserProfile = data?.data ?? {};
	console.log(profile);
	const PrivateRoute = dynamic(() => import('@/components/Shared/PrivateRoute'), {
		ssr: false
	});
	if (isFetching) return <Loading />;
	return (
		<PrivateRoute>
			<Box>
				<Typography
					variant='h1'
					sx={{
						fontSize: {
							xs: '1.5rem',
							md: '2rem'
						},
						color: '#333',
						my: 2,
						textAlign: 'center'
					}}
				>
					Hi, {profile?.full_name}
				</Typography>
			</Box>
		</PrivateRoute>
	);
};

export default Profile;
