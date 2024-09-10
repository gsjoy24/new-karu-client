import logo from '@/assets/logo.png';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SocialSection from './SocialSection';

const quickLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'Products', href: '/products' },
	{ title: 'About', href: '/about' },
	{ title: 'Contact', href: '/contact' },
	{ title: 'FAQ', href: '/faq' },
	{ title: 'Terms & Conditions', href: '/terms' },
	{ title: 'Privacy Policy', href: '/privacy' },
	{ title: 'Return Policy', href: '/return' },
	{ title: 'Order Process', href: '/order-process' }
];

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='w-full bg-gray-800 text-white p-5'>
			<Container>
				<Stack direction='row' gap={3} justifyContent='space-between' flexWrap={'wrap'}>
					<Box sx={{ maxWidth: '20rem' }}>
						<Image src={logo} alt='Karukon BD' width={100} height={100} />
						<br />
						<Typography variant='h6' gutterBottom>
							About us
						</Typography>
						<Divider sx={{ bgcolor: 'white', my: 1 }} />
						<Typography variant='subtitle1'>
							Karukon BD (কারুকোণ বিডি) Online Shopping is a online retailing store that thrives to provide it’s
							customer with the best available product at the lowest possible price.
						</Typography>
					</Box>
					<Box>
						<Typography variant='h6' gutterBottom>
							Quick Links
						</Typography>
						<Divider sx={{ bgcolor: 'white', my: 1 }} />
						<Stack direction='column'>
							{quickLinks.map((link) => (
								<Typography key={link.title} component={Link} href={link?.href} variant='subtitle1'>
									{link.title}
								</Typography>
							))}
						</Stack>
					</Box>
					<Box>
						<SocialSection /> <br />
						<Typography variant='subtitle1'>Contact: +8801877089771</Typography>
						<Typography variant='subtitle1'>Email: karukonbd@gmail.com</Typography>
					</Box>
				</Stack>
				<Stack direction='row' justifyContent='center' mt={5}>
					<Typography variant='subtitle1'>&copy; {currentYear} Karukon BD. All Rights Reserved.</Typography>
				</Stack>
			</Container>
		</footer>
	);
};

export default Footer;
