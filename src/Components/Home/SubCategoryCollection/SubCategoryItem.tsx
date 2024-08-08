import { TSubCategoryCollectionData } from '@/types/category.type';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const SubCategoryItem = ({ item }: { item: TSubCategoryCollectionData }) => {
	// const productImages= item.products.map((product) => product[0]);
	const productImages = [
		'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg',
		'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg',
		'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg',
		'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg'
	];

	return (
		<Box
			sx={{
				width: {
					xs: '9rem',
					sm: '16rem'
				},
				':hover': {
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
				},
				transition: 'all 0.3s ease-in-out'
			}}
			component={Link}
			href={`/category/${item?.category_slug}/${item?.slug}`}
		>
			<Grid container>
				{productImages.map((productImage) => {
					return (
						<Grid item xs={6} key={productImage} p='2px'>
							<Image src={productImage} alt='product' width={120} height={120} className='w-full h-full object-cover' />
						</Grid>
					);
				})}
			</Grid>
			<Stack alignItems='center' justifyContent='center' p='1rem'>
				<Typography
					fontSize={{
						xs: '1rem',
						sm: '1.2rem'
					}}
				>
					{item.name}
				</Typography>
				<Typography
					variant='body2'
					fontSize={{
						xs: '0.8rem',
						sm: '1rem'
					}}
					sx={{
						color: 'gray'
					}}
				>
					{item.productCount} Products
				</Typography>
			</Stack>
		</Box>
	);
};

export default SubCategoryItem;
