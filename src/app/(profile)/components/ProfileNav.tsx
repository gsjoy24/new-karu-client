'use client';
import profile_bg from '@/assets/profile-cover.jpg';
import user_img from '@/assets/user-img.png';
import { useGetMeQuery } from '@/redux/api/userApi';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromLocalStorage } from '@/utils/local-storage';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaBoxOpen } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa6';
import { IoIosLogOut } from 'react-icons/io';

const profileNavLinks = [
	{
		icon: <BiSolidDashboard />,
		text: 'Dashboard',
		href: '/profile'
	},
	{
		icon: <FaBoxOpen />,
		text: 'Orders',
		href: '/profile/orders'
	},

	{
		icon: <FaKey />,
		text: 'Change Password',
		href: '/profile/change-password'
	}
];

const ProfileNav = () => {
	const { data } = useGetMeQuery({});
	const profile = data?.data ?? {};

	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(setUser({ user: null, token: null }));
		removeFromLocalStorage('accessToken');
	};

	return (
		<Box
			py={2}
			className='relative'
			sx={{
				maxWidth: '22rem',
				width: '100%',
				position: { md: 'sticky' },
				top: '0.5rem',
				zIndex: 10,
				height: 'fit-content'
			}}
		>
			{/* cover */}
			<Image
				src={profile_bg}
				alt={'profile background'}
				width={500}
				height={200}
				className='rounded-sm mx-auto absolute top-[1rem] left-0 right-0 z-[-22]'
			/>
			{/* profile */}
			<Image
				src={user_img}
				alt={profile?.full_name ?? 'profile picture'}
				width={120}
				height={120}
				className='rounded-full mx-auto border-4 border-white z-10 mt-[8rem]'
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
				{profile?.name}
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
					gap: '0.5rem'
				}}
			>
				{profileNavLinks.map((link, index) => (
					<Link key={index} href={link.href}>
						<Stack
							component={Button}
							fullWidth
							variant='text'
							direction='row'
							alignItems='center'
							sx={{
								justifyContent: 'flex-start',
								'&:hover': {
									bgcolor: 'primary.main',
									color: 'white'
								}
							}}
							startIcon={link.icon}
						>
							{link.text}
						</Stack>
					</Link>
				))}
				<Stack
					component={Button}
					variant='text'
					direction='row'
					alignItems='center'
					sx={{
						justifyContent: 'flex-start',
						'&:hover': {
							bgcolor: 'primary.main',
							color: 'white'
						}
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
