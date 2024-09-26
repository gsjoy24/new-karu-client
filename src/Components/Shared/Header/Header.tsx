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
					<Image
						src={
							'https://res.cloudinary.com/dwgozodq0/image/upload/v1727072659/WhatsApp_Image_2024-09-23_at_12.20.54_PM_1_fp1rbf.jpg'
						}
						alt='logo'
						width={80}
						height={80}
					/>
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
