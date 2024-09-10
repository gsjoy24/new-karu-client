import Loader from '@/components/Shared/Loader/Loader';
import { Typography } from '@mui/material';

const Loading = () => {
	return (
		<div className='w-full min-h-[80vh] flex flex-col items-center justify-center gap-10'>
			<Loader />
			<Typography
				variant='h4'
				sx={{
					fontFamily: 'Karla, sans-serif',
					fontWeight: 700
				}}
			>
				KARUKON
			</Typography>
		</div>
	);
};

export default Loading;
