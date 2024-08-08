'use client';
import logo from '@/assets/Karukon-logo.png';
import { Divider, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import BrowseCategory from './BrowseCategory';
import SearchProduct from './SearchProduct';

const Header = () => {
	const HeaderButtons = dynamic(() => import('./HeaderButtons'), {
		ssr: false
	});
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
				<BrowseCategory />
				<Stack direction='row' gap={2} alignItems='center'>
					<SearchProduct />
					<HeaderButtons />
				</Stack>
			</Stack>
			<Divider />
		</>
	);
};

export default Header;
