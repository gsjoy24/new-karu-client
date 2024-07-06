import logo from '@/assets/Karukon-logo.png';
import { Chip, Divider, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import Nav from './Nav';
import SearchProduct from './SearchProduct';

const Header = () => {
	const wishlist = 5;
	const cart = 2;
	return (
		<>
			<Stack
				justifyContent='space-between'
				alignItems='center'
				direction='row'
				py={2}
				gap={1}
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

				{/* search bar */}
				<SearchProduct />

				{/* buttons */}
				<Stack direction='row' gap={2} alignItems='center'>
					{/* wishlist button */}
					<Stack direction='row' alignItems='center' component={Link} href='/wishlist' gap={1.5} aria-label='Wishlist'>
						<div className='relative'>
							<Chip label={wishlist} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
							<IoIosHeartEmpty size={30} />
						</div>
						<span className='text-gray-600'>Wishlist</span>
					</Stack>

					{/* cart button */}
					<Stack direction='row' alignItems='center' component={Link} href='/cart' gap={1.5} aria-label='Cart'>
						<div className='relative'>
							<Chip label={cart} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
							<IoCartOutline size={30} />
						</div>
						<span className='text-gray-600'>Cart</span>
					</Stack>

					{/* user button */}
					<Stack direction='row' alignItems='center' component={Link} href='/login' gap={1.3} aria-label='User profile'>
						<FaRegUser size={22} />
						<span className='text-gray-600'>Sign In</span>
					</Stack>
				</Stack>
			</Stack>
			<Divider />
			<Nav />
			<Divider />
		</>
	);
};

export default Header;
