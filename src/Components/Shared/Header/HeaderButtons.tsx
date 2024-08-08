'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { Chip, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import ProfileMenu from './ProfileMenu';

const CartButton = () => {
	const { data } = useGetMeQuery({});
	const user = useAppSelector((state) => state.auth.user);

	return (
		<Stack direction='row'>
			{/* wishlist button */}
			{/* <Stack direction='row' alignItems='center' component={Link} href='/wishlist' gap={1.5} aria-label='Wishlist'>
						<div className='relative'>
							<Chip label={wishlist} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
							<IoIosHeartEmpty size={30} />
						</div>
						<span className='text-gray-600'>Wishlist</span>
					</Stack> */}
			{user && (
				<IconButton className='relative' component={Link} href='/cart' aria-label='Cart'>
					<Chip
						label={data?.data?.cart.length ?? 0}
						color='primary'
						size='small'
						className='absolute top-0 left-[1.6rem]'
					/>
					<IoCartOutline size={30} />
				</IconButton>
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
		</Stack>
	);
};

export default CartButton;
