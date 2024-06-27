import logo from '@/assets/Karukon-logo.png';
import { Box, Button, Chip, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHeartEmpty } from 'react-icons/io';
import SearchProduct from './SearchProduct';
const Header = () => {
	const wishlist = 5;
	return (
		<Stack justifyContent={'space-between'} alignItems={'center'} direction='row' py={1}>
			<Link href='/'>
				<Image src={logo} alt='logo' width={80} height={80} />
			</Link>
			<SearchProduct />
			<Stack>
				{/* wish list button */}
				<Stack direction='row' alignItems='center' component={Link} href='/wishlist' gap={1.3}>
					<div className='relative'>
						<Chip label={wishlist} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
						<IoIosHeartEmpty size={30} />
					</div>
					<span className='text-gray-600'>Wishlist</span>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Header;
