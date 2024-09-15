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
		<Stack direction='row' gap={2} alignItems='center'>
			{user ? (
				<ProfileMenu />
			) : (
				<>
					<IconButton className='relative' component={Link} href='/cart' aria-label='Cart'>
						<Chip
							label={data?.data?.cart.length ?? 0}
							color='primary'
							size='small'
							className='absolute top-0 left-[1.6rem]'
						/>
						<IoCartOutline size={30} />
					</IconButton>
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
				</>
			)}
		</Stack>
	);
};

export default CartButton;
