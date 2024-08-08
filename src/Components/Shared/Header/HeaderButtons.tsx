'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { Chip, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import ProfileMenu from './ProfileMenu';

const CartButton = () => {
	const { data } = useGetMeQuery({});
	const user = useAppSelector((state) => state.auth.user);

	return (
		<>
			{/* wishlist button */}
			{/* <Stack direction='row' alignItems='center' component={Link} href='/wishlist' gap={1.5} aria-label='Wishlist'>
						<div className='relative'>
							<Chip label={wishlist} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
							<IoIosHeartEmpty size={30} />
						</div>
						<span className='text-gray-600'>Wishlist</span>
					</Stack> */}
			{user && (
				<Stack direction='row' alignItems='center' component={Link} href='/cart' gap={1.5} aria-label='Cart'>
					<div className='relative'>
						<Chip
							label={data?.data?.cart.length ?? 0}
							color='primary'
							size='small'
							className='absolute top-[-10px] left-[18px]'
						/>
						<IoCartOutline size={30} />
					</div>
				</Stack>
			)}
			{/* user button */}
			{user ? (
				<ProfileMenu />
			) : (
				<Typography
					component={Link}
					href='/login'
					sx={{
						cursor: 'pointer',
						textTransform: 'capitalize',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '0.1rem',
						':hover span': {
							width: '100%'
						}
					}}
				>
					Sign In
					<span className='h-[1px] w-0 duration-100 inline-block bg-slate-400  '></span>
				</Typography>
			)}
		</>
	);
};

export default CartButton;
