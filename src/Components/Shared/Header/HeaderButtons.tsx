'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeFromLocalStorage } from '@/utils/local-storage';
import { Button, Chip, Stack } from '@mui/material';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const CartButton = () => {
	const dispatch = useAppDispatch();
	const { data } = useGetMeQuery({});
	const user = useAppSelector((state) => state.auth.user);

	const handleLogout = () => {
		dispatch(setUser({ user: null, token: null }));
		removeFromLocalStorage('accessToken');
	};

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
					<span className='text-gray-600'>Cart</span>
				</Stack>
			)}
			{/* user button */}
			{user ? (
				<Button onClick={handleLogout}>
					<FaRegUser size={22} />
					<span className='text-gray-600'>Log out</span>
				</Button>
			) : (
				<Stack direction='row' alignItems='center' component={Link} href='/login' gap={1.3} aria-label='User profile'>
					<FaRegUser size={22} />
					<span className='text-gray-600'>Sign In</span>
				</Stack>
			)}
		</>
	);
};

export default CartButton;
