import emptySvg from '@/assets/empty.svg';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
const EmptyCard = () => {
	return (
		<Stack justifyContent='center' alignItems='center' gap={2} py={2}>
			<Image src={emptySvg} height={250} width={250} alt='No Data found' />
			<Typography
				sx={{
					fontSize: {
						xs: '1.2rem',
						md: '2rem'
					}
				}}
			>
				No data Found!
			</Typography>
		</Stack>
	);
};

export default EmptyCard;
