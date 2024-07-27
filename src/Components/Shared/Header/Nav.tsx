import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import BrowseCategory from './BrowseCategory';

const Nav = () => {
	const navLinks = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Contact', link: '/contact' },
		{ title: 'Services', link: '/services' }
	];
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			py={1}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 100,
				backgroundColor: 'white',
				display: { xs: 'none', md: 'flex' }
			}}
		>
			<BrowseCategory />

			<Stack direction='row' gap={2}>
				{navLinks.map((link) => (
					<Link key={link?.link + '1'} href={link?.link}>
						<Typography
							sx={{
								fontWeight: '500',
								transition: 'color 0.2s',
								color: 'secondary.main',
								'&:hover': {
									color: 'primary.main'
								}
							}}
						>
							{link.title}
						</Typography>
					</Link>
				))}
			</Stack>

			<Stack direction='row' justifyContent='center' alignItems='center' gap={1.3}>
				<TfiHeadphoneAlt size={40} color='secondary.main' />
				<Box
					sx={{
						textAlign: 'center',
						color: 'secondary.main'
					}}
				>
					<Typography variant='h6' color='primary.dark'>
						01777777777
					</Typography>
					<span>24/7 Support Center</span>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Nav;
