'use client';
import logo from '@/assets/logo.png';
import { Divider, Skeleton, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import BrowseCategory from './BrowseCategory';
import SearchProduct from './SearchProduct';
const HeaderButtons = dynamic(() => import('./HeaderButtons'), {
	ssr: false,
	loading: () => <Skeleton variant='rectangular' width={150} height={40} />
});

const Header = () => {
	return (
		<>
			<Stack
				justifyContent='space-between'
				alignItems='center'
				direction='row'
				py={2}
				gap={2}
				sx={{
					display: {
						xs: 'none',
						md: 'flex'
					}
				}}
			>
				<Link href='/'>
					<Image src={logo} alt='logo' width={80} height={80} />
				</Link>
				<Stack direction='row' gap={2} alignItems='center'>
					<BrowseCategory />
					<SearchProduct />
					<HeaderButtons />
				</Stack>
			</Stack>
			<Divider />
		</>
	);
};

export default Header;
