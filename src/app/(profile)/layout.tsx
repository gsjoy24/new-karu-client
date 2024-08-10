'use client';
import PrivateRoute from '@/components/Shared/PrivateRoute';
import { Stack } from '@mui/material';
import ProfileNav from './components/ProfileNav';

const layout = ({ children }: { readonly children: React.ReactNode }) => {
	return (
		<PrivateRoute>
			<Stack
				direction={{
					xs: 'column',
					md: 'row'
				}}
				spacing={2}
			>
				<ProfileNav />
				{children}
			</Stack>
		</PrivateRoute>
	);
};

export default layout;
