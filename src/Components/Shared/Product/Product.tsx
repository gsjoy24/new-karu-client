import { TProduct } from '@/types/product';
import { Box, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ product }: { product: TProduct }) => {
	return (
		<Box
			sx={{
				width: {
					xs: '10rem',
					sm: '14rem',
					md: '17rem'
				},
				position: 'relative',
				borderRadius: 2,
				boxShadow: 2,
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
						sm: '14rem',
						md: '17rem'
					},
					overflow: 'hidden',
					position: 'relative',
					'&:hover img': {
						transform: 'scale(1.05)'
					}
				}}
			>
				<Image
					src={
						product?.images?.length > 0
							? product?.images[0]
							: 'https://res.cloudinary.com/dnz9nobvd/image/upload/v1725990632/458401867_1178594239887038_977139183458686265_n_uflarr.png'
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
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							backgroundColor: 'red',
							color: 'white',
							fontWeight: 'bold',
							borderRadius: 0,
							zIndex: 10
						}}
					/>
				)}
			</Box>
			<Box p={2} sx={{ textAlign: 'center' }}>
				<Typography
					variant='h6'
					component='h2'
					className='line-clamp-3 lg:line-clamp-2'
					sx={{
						fontSize: {
							xs: '0.8rem',
							sm: '1rem'
						},
						color: 'text.primary',
						mb: 1
					}}
				>
					{product?.name}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '0.3rem'
					}}
				>
					<Typography
						sx={{
							color: 'red',
							textDecoration: 'line-through',
							opacity: 0.7,
							fontSize: {
								xs: '0.8rem',
								sm: '1rem'
							}
						}}
					>
						৳ {product?.old_price}
					</Typography>
					<Typography
						sx={{
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
