'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromLocalStorage } from '@/utils/local-storage';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaBoxOpen } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa6';
import { IoIosLogOut, IoMdHeart } from 'react-icons/io';
const ProfileNav = () => {
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(setUser({ user: null, token: null }));
		removeFromLocalStorage('accessToken');
	};
	const { data } = useGetMeQuery({});
	const profile = data?.data ?? {};
	return (
		<Box
			py={2}
			className='relative'
			sx={{
				maxWidth: '22rem',
				width: '100%'
			}}
		>
			{/* cover */}
			<Image
				src='https://res.cloudinary.com/dwgozodq0/image/upload/v1723319263/profile-bg_lfgbtx.jpg'
				alt={'profile background'}
				width={500}
				height={200}
				className='rounded-sm mx-auto absolute top-[1rem] left-0 right-0 z-[-22]'
			/>
			{/* profile */}
			<Image
				src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
				alt={profile?.full_name ?? 'profile picture'}
				width={150}
				height={150}
				className='rounded-full mx-auto border-4 border-white z-10 mt-[5rem] '
			/>
			<Typography
				variant='h1'
				sx={{
					fontSize: {
						xs: '1.5rem',
						md: '2.3rem'
					},
					color: '#333',
					textAlign: 'center'
				}}
			>
				{profile?.full_name}
			</Typography>
			<Typography variant='body2' sx={{ color: '#555', textAlign: 'center' }} gutterBottom>
				{profile?.email}
			</Typography>
			<Divider />
			<Stack
				p={2}
				sx={{
					fontSize: '1.1rem',
					color: '#333',
					gap: '1rem'
				}}
			>
				<Stack component={Link} href='/profile/dashboard' direction='row' alignItems='center' spacing={1}>
					<BiSolidDashboard /> <span>Dashboard</span>
				</Stack>
				<Stack component={Link} href='/profile/orders' direction='row' alignItems='center' spacing={1}>
					<FaBoxOpen /> <span>Orders</span>
				</Stack>
				<Stack component={Link} href='/profile/address' direction='row' alignItems='center' spacing={1}>
					<FaGlobe /> <span>Address</span>
				</Stack>
				<Stack component={Link} href='/profile/wishlist' direction='row' alignItems='center' spacing={1}>
					<IoMdHeart /> <span>Wishlist</span>
				</Stack>
				<Stack
					component={Button}
					variant='text'
					direction='row'
					alignItems='center'
					sx={{
						color: 'inherit',
						justifyContent: 'flex-start'
					}}
					startIcon={<IoIosLogOut />}
					onClick={handleLogout}
				>
					Logout
				</Stack>
			</Stack>
		</Box>
	);
};

export default ProfileNav;
