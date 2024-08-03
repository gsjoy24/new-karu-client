'use client';
// import { useGetNewArrivalsQuery } from '@/redux/api/productApi';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { TbCurrencyTaka } from 'react-icons/tb';
const product = {
	_id: '66ad38355239fdb31202cbab',
	name: 'Ash Color Design 6 cup 1 jug 1 plate Surai Set',
	description: 'This is a sample product description.',
	tags: ['Sample', 'Product', 'Electronics'],
	old_price: 5000,
	last_price: 3999.99,
	stock: 100,
	images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
	category: '6687e5c1c1c7ddaecb94dc45',
	sub_category: '6687e6de974c638ef0c006b6',
	slug: 'sample-product-4',
	__v: 0,
	'discountPercentage ': 21,
	isOutOfStock: false,
	id: '66ad38355239fdb31202cbab'
};

const NewArrivals = () => {
	// const { data, isFetching } = useGetNewArrivalsQuery({});

	return (
		<Box
			sx={{
				mb: 2
			}}
		>
			<Typography variant='h4'>New Arrivals</Typography>
			<Box
				sx={{
					width: {
						xs: '9rem',
						sm: '17rem'
					}
				}}
			>
				<Box>
					<Image
						src={'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg'}
						alt={product?.name}
						width={400}
						height={400}
						className='w-full h-full object-cover'
					/>
				</Box>
				<Box p={1}>
					<Typography gutterBottom>{product?.name}</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem'
						}}
					>
						<Typography
							sx={{
								color: 'primary.main',
								display: 'flex',
								width: 'fit-content',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative'
							}}
						>
							<TbCurrencyTaka />
							{product?.old_price}
							<span className='w-full h-[1px] bg-[#ffba00] absolute'></span>
						</Typography>
						<Typography
							sx={{
								display: 'flex',
								width: 'fit-content',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<TbCurrencyTaka />
							{product?.last_price}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default NewArrivals;
