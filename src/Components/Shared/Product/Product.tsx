import { TProduct } from '@/types/product';
import { Box, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }: { product: TProduct }) => {
	return (
		<Box
			sx={{
				width: {
					xs: '12rem',
					sm: '18rem'
				},
				position: 'relative',
				borderRadius: 2,
				boxShadow: 3,
				transition: 'all 0.3s ease',
				overflow: 'hidden',
				backgroundColor: 'background.paper',
				'&:hover': {
					boxShadow: 6,
					transform: 'translateY(-5px)'
				}
			}}
			component={Link}
			href={`/product/${product?.slug}`}
		>
			<Box
				sx={{
					width: '100%',
					height: {
						xs: '10rem',
						md: '14rem'
					},
					overflow: 'hidden',
					position: 'relative',
					'&:hover img': {
						transform: 'scale(1.1)'
					}
				}}
			>
				<Image
					src={
						product?.images?.length > 0
							? product?.images[0]
							: 'https://industrialphysics.com/wp-content/uploads/2022/02/product-image-coming-soon-1.png'
					}
					alt={product?.name}
					width={400}
					height={400}
					className='w-full h-full object-cover'
					style={{
						transition: 'transform 0.3s ease'
					}}
				/>
				{/* a cart if the stoke is out */}
				{product?.isOutOfStock && (
					<Chip
						label='Out of stock'
						sx={{
							position: 'absolute',
							top: '8rem',
							left: '5.5rem',
							backgroundColor: 'red',
							color: 'white',
							fontWeight: 'bold',
							borderRadius: 0
						}}
					/>
				)}
			</Box>
			<Box p={2} sx={{ textAlign: 'center' }}>
				<Typography
					variant='h6'
					component='h2'
					className='line-clamp-2'
					sx={{
						fontSize: {
							xs: '1rem',
							sm: '1.2rem'
						},
						fontWeight: 'bold',
						color: 'text.primary',
						mb: 1
					}}
				>
					{product?.name}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.5rem'
					}}
				>
					<Typography
						sx={{
							color: 'red',
							textDecoration: 'line-through',
							fontSize: {
								xs: '0.9rem',
								sm: '1rem'
							}
						}}
					>
						৳ {product?.old_price}
					</Typography>
					<Typography
						sx={{
							fontWeight: 'bold',
							color: 'primary.main',
							fontSize: {
								xs: '1rem',
								sm: '1.1rem'
							}
						}}
					>
						৳ {product?.last_price}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Product;
