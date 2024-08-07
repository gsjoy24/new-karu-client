'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { useAppSelector } from '@/redux/hooks';
import { Chip, Stack } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaDatabase, FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const CartButton = ({ count = 0 }: { count: number }) => {
	const user = useAppSelector((state) => state.auth.user);
	const [userData, setUserData] = useState<any>({});
	const { data } = useGetMeQuery({});
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
			{user?.email && (
				<Stack direction='row' alignItems='center' component={Link} href='/cart' gap={1.5} aria-label='Cart'>
					<div className='relative'>
						<Chip label={count} color='primary' size='small' className='absolute top-[-10px] left-[18px]' />
						<IoCartOutline size={30} />
					</div>
					<span className='text-gray-600'>Cart</span>
				</Stack>
			)}
			{/* user button */}
			{user?.email ? (
				<Stack direction='row' alignItems='center' component={Link} href='/login' gap={1.3} aria-label='User profile'>
					<FaRegUser size={22} />
					<span className='text-gray-600'>Log out</span>
				</Stack>
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
