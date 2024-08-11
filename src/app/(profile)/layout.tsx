import { Stack } from '@mui/material';
import ProfileNav from './components/ProfileNav';

const layout = ({ children }: { readonly children: React.ReactNode }) => {
	return (
		<Stack
			direction={{
				xs: 'column',
				md: 'row'
			}}
			spacing={2}
		>
			<ProfileNav />
			<div className='py-[1rem] w-full'> {children}</div>
		</Stack>
	);
};

export default layout;
