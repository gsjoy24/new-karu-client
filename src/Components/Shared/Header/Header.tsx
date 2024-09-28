'use client';
import { Divider, Skeleton, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import BrowseCategory from './BrowseCategory';
import SearchProduct from './SearchProduct';
const HeaderButtons = dynamic(() => import('./HeaderButtons'), {
	ssr: false,
	loading: () => <Skeleton variant='rectangular' width={150} height={40} />
});

const Header = () => {
	return (
		<div className='sticky top-0 z-50 backdrop-blur-md bg-white/80'>
			<Stack
				justifyContent='space-between'
				alignItems='center'
				direction='row'
				py={1.5}
				gap={2}
				sx={{
					display: {
						xs: 'none',
						md: 'flex'
					}
				}}
			>
				<Link href='/'>
					<Image
						src={'https://res.cloudinary.com/dwgozodq0/image/upload/v1727512919/Karukon-logo_1_iwe2s6.png'}
						alt='logo'
						width={70}
						height={70}
					/>
				</Link>
				<Stack direction='row' gap={2} alignItems='center'>
					<BrowseCategory />
					<SearchProduct />
					<HeaderButtons />
				</Stack>
			</Stack>
			<Divider />
		</div>
	);
};

export default Header;
