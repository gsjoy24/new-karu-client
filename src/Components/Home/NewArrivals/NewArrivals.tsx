'use client';
import Loading from '@/app/loading';
import Product from '@/components/Shared/Product/Product';
import { useGetNewArrivalsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/product';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

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
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				gap={{
					xs: 1,
					sm: 3
				}}
				flexWrap='wrap'
			>
				{data?.data?.map((product: TProduct) => (
					<Product product={product} key={product?._id} />
				))}
			</Stack>
			<div className='flex justify-center'>
				<Button
					variant='outlined'
					size='large'
					sx={{ mt: 2, textAlign: 'center' }}
					LinkComponent={Link}
					href='/products'
				>
					See More
				</Button>
			</div>
		</Box>
	);
};

export default NewArrivals;
