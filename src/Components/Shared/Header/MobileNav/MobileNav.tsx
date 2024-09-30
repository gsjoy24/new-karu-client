'use client';
import { Button, Divider, IconButton, Skeleton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { GiFlexibleLamp } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SocialSection from '../../SocialSection';
import SearchProduct from '../SearchProduct';
import CategoryAccordion from './CategoryAccordion';

const HeaderButtons = dynamic(() => import('../HeaderButtons'), {
	ssr: false,
	loading: () => <Skeleton variant='rectangular' width={150} height={40} />
});

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	const mobileNavLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/products' }
	];

	const currentYear = new Date().getFullYear();

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 350, zIndex: 9999 }} px={2}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					p: 2,
					borderBottom: '1px solid #455a6477',
					mb: 3,
					position: 'sticky',
					top: 0,
					bgcolor: 'background.paper',
					zIndex: 1
				}}
			>
				<Image
					src={
						'https://res.cloudinary.com/dwgozodq0/image/upload/v1727072659/WhatsApp_Image_2024-09-23_at_12.20.54_PM_1_fp1rbf.jpg'
					}
					alt='logo'
					width={80}
					height={80}
				/>
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

			{/* search bar */}
			<SearchProduct setOpen={setOpen} />

			{/* links */}
			<Stack direction='column' gap={2} p={1} mt={2}>
				{mobileNavLinks.map((link) => (
					<Button
						key={link?.href}
						LinkComponent={Link}
						href={link?.href}
						onClick={toggleDrawer(false)}
						variant='text'
						endIcon={<MdOutlineArrowOutward />}
						sx={{
							justifyContent: 'space-between',
							transition: 'all 0.3s',
							borderBottom: '1px solid #f0f0f0',
							color: 'secondary.main',
							'&:hover': {
								color: 'primary.main'
							}
						}}
					>
						<span>{link.name}</span>
					</Button>
				))}
			</Stack>
			<CategoryAccordion setOpen={setOpen} />

			{/* info */}
			<Stack
				gap={1}
				sx={{
					border: '1px solid #f0f0f0',
					borderRadius: 2,
					p: 2,
					my: 2,
					fontSize: 14
				}}
			>
				<Stack direction='row' gap={2} alignItems='center'>
					<CiLocationOn size={22} />
					<span>West Agargaon,Dhaka-1207</span>
				</Stack>
				<Stack direction='row' gap={2} alignItems='center'>
					<LuPhoneCall size={22} />
					<span>+8801766892662</span>
				</Stack>
				<Stack direction='row' gap={2} alignItems='center'>
					<GiFlexibleLamp size={22} />
					<span>Online - Always Open</span>
				</Stack>
			</Stack>
			<SocialSection />

			{/* footer */}
			<Box
				sx={{
					borderTop: '1px solid #f0f0f0',
					p: 2,
					mt: 2,
					fontSize: 14
				}}
			>
				<span>&copy; {currentYear} Karukon. All rights reserved.</span>
			</Box>
		</Box>
	);

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				gap={2}
				sx={{
					display: { xs: 'flex', md: 'none' },
					position: 'sticky',
					top: 0,
					bgcolor: 'background.paper',
					zIndex: 999
				}}
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
					<Image
						src={'https://res.cloudinary.com/dwgozodq0/image/upload/v1727512919/Karukon-logo_1_iwe2s6.png'}
						alt='logo'
						width={60}
						height={60}
					/>
				</Link>
				<HeaderButtons />
			</Stack>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
			<Divider />
		</>
	);
};

export default MobileNav;
