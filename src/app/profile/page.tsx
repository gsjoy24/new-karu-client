'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { TUserProfile } from '@/types/TAuthState';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaPen } from 'react-icons/fa';
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
			<Box py={2} className='relative'>
				{/* cover */}
				<Image
					src='https://i.ibb.co/vjqPcbM/profile-bg.jpg'
					alt={'profile background'}
					width={700}
					height={200}
					className='rounded-sm mx-auto absolute top-[1rem] left-0 right-0 z-[-22]'
				/>
				{/* profile */}
				<Image
					src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
					alt={profile?.full_name ?? 'profile picture'}
					width={200}
					height={200}
					className='rounded-full mx-auto border-4 border-white z-10 mt-[5rem] md:mt-[10rem] '
				/>
				<Typography
					variant='h1'
					sx={{
						fontSize: {
							xs: '1.5rem',
							md: '2.3rem'
						},
						color: '#333',
						my: 2,
						textAlign: 'center'
					}}
				>
					{profile?.full_name}
				</Typography>
				<Typography variant='body2' sx={{ color: '#555', textAlign: 'center' }} gutterBottom>
					{profile?.email}
				</Typography>
				<Divider />

				{/* address */}
				<Box>
					<Stack gap={2} alignItems='center'>
						<Typography
							variant='h2'
							sx={{
								fontSize: {
									xs: '1.2rem',
									md: '1.5rem'
								},
								color: '#333',
								my: 2
							}}
						>
							Address
						</Typography>
						<IconButton aria-label='edit address' size='small'>
							<FaPen />
						</IconButton>
					</Stack>
					<Typography variant='body2' sx={{ color: '#555' }}>
						City : {profile?.city ?? 'N/A'}
					</Typography>
					<Typography variant='body2' sx={{ color: '#555' }}>
						District : {profile?.district ?? 'N/A'}
					</Typography>
					<Typography variant='body2' sx={{ color: '#555' }}>
						Postal code : {profile?.postal_code ?? 'N/A'}
					</Typography>
					<Typography variant='body2' sx={{ color: '#555' }}>
						Courier address : {profile?.courier_address ?? 'N/A'}
					</Typography>
					<Typography variant='body2' sx={{ color: '#555' }}>
						Mobile number : {profile?.mobile_number ?? 'N/A'}
					</Typography>
				</Box>
			</Box>
		</PrivateRoute>
	);
};

export default Profile;
