'use client';
import logo from '@/assets/Karukon-logo.png';
import { Chip, Divider, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoClose } from 'react-icons/io5';
import SearchProduct from '../SearchProduct';

const MobileNav = () => {
	const [open, setOpen] = React.useState(false);
	const wishlist = 5;
	const cart = 2;
	const mobileNavLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/products' },
		{ name: 'Wishlist', href: '/wishlist' },
		{ name: 'Cart', href: '/cart' },
		{
			name: 'About Us',
			href: '/about-us'
		},
		{
			name: 'Term of Service',
			href: '/term-of-service'
		},
		{
			name: 'Privacy Policy',
			href: '/privacy-policy'
		},
		{
			name: 'Contact Us',
			href: '/contact-us'
		}
	];

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 350 }} role='presentation'>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
				<Image src={logo} alt='logo' width={80} height={80} />
				<IconButton
					size='small'
					onClick={toggleDrawer(false)}
					aria-label='close drawer'
					sx={{
						bgcolor: '#99ffab',
						color: 'secondary.main'
					}}
				>
					<IoClose size={22} />
				</IconButton>
			</Box>
			<Divider
				sx={{
					mb: 2
				}}
			/>

			{/* search bar */}
			<SearchProduct />
			<Stack direction='column' gap={2} p={2}>
				{mobileNavLinks.map((link, index) => (
					<Link key={index} href={link.href}>
						{link.name}
					</Link>
				))}
			</Stack>
		</Box>
	);

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				gap={2}
				sx={{ display: { xs: 'flex', md: 'none' } }}
				py={1}
			>
				<IconButton
					onClick={toggleDrawer(true)}
					aria-label='open drawer'
					sx={{
						color: 'primary.main'
					}}
				>
					<CgMenuRightAlt size={32} />
				</IconButton>
				<Link href='/'>
					<Image src={logo} alt='logo' width={60} height={60} />
				</Link>

				{/* buttons */}
				<Stack direction='row' gap={2} alignItems='center'>
					{/* wishlist button */}
					<Box component={Link} href='/wishlist' aria-label='User profile' sx={{ position: 'relative' }}>
						<Chip label={wishlist} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
						<IoIosHeartEmpty size={30} />
					</Box>
					{/* cart button */}
					<Box component={Link} href='/cart' aria-label='User profile' sx={{ position: 'relative' }}>
						<Chip label={cart} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
						<IoCartOutline size={30} />
					</Box>
					{/* user button */}
					<Box component={Link} href='/profile' aria-label='User profile'>
						<FaRegUser size={22} />
					</Box>
				</Stack>
			</Stack>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</>
	);
};

export default MobileNav;
