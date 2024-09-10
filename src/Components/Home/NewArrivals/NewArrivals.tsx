'use client';
import Loading from '@/app/loading';
import Product from '@/components/Shared/Product/Product';
import { useGetNewArrivalsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/product';
import { Box, Stack, Typography } from '@mui/material';

const NewArrivals = () => {
	const { data, isFetching } = useGetNewArrivalsQuery({});

	return isFetching ? (
		<Loading />
	) : (
		<Box
			sx={{
				my: 2
			}}
		>
			<Typography
				variant='h4'
				sx={{
					textAlign: 'center',
					fontSize: {
						xs: '18px',
						sm: '24px',
						md: '32px'
					},
					my: 2
				}}
			>
				New Arrivals
			</Typography>
			<Stack direction='row' justifyContent='center' alignItems='center' gap={1.5} flexWrap='wrap'>
				{data?.data?.map((product: TProduct) => (
					<Product product={product} key={product?._id} />
				))}
			</Stack>
		</Box>
	);
};

export default NewArrivals;
