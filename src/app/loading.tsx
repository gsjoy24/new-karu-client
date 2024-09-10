import Loader from '@/components/Shared/Loader/Loader';
import { Typography } from '@mui/material';

const Loading = () => {
	return (
		<div className='w-full min-h-[80vh] flex flex-col items-center justify-center gap-10'>
			<Loader />
			<Typography
				sx={{
					fontSize: {
						xs: '1.5rem',
						sm: '2rem',
						md: '2.5rem',
						lg: '3rem'
					}
				}}
			>
				KARUKON
			</Typography>
		</div>
	);
};

export default Loading;
