'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
import { selectTotalItems } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { Chip, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import ProfileMenu from './ProfileMenu';

const CartButton = () => {
	const user = useAppSelector((state) => state.auth.user);
	const cartItems = useAppSelector(selectTotalItems);

	return (
		<Stack direction='row' gap={2} alignItems='center'>
			<IconButton className='relative' component={Link} href='/cart' aria-label='Cart'>
				<Chip label={cartItems ?? 0} color='primary' size='small' className='absolute top-0 left-[1.6rem]' />
				<IoCartOutline size={30} />
			</IconButton>
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
					<span>Sign In</span>
					<span className='h-[1px] w-0 duration-100 inline-block bg-slate-400'></span>
				</Typography>
			)}
		</Stack>
	);
};

export default CartButton;
