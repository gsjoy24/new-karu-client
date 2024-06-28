'use client';
import logo from '@/assets/Karukon-logo.png';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Chip, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

const MobileNav = () => {
	const [open, setOpen] = React.useState(false);
	const wishlist = 5;
	const cart = 2;

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
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
