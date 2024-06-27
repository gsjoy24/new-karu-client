import logo from '@/assets/Karukon-logo.png';
import { Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SearchProduct from './SearchProduct';
const Header = () => {
	return (
		<Stack justifyContent={'space-between'} alignItems={'center'} direction='row' py={1}>
			<Link href='/'>
				<Image src={logo} alt='logo' width={80} height={80} />
			</Link>
			<SearchProduct />
			<Button>Click Me!</Button>
		</Stack>
	);
};

export default Header;
