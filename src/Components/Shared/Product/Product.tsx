import { TProduct } from '@/types/product';
import { Box, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { TbCurrencyTaka } from 'react-icons/tb';

const Product = ({ product }: { product: TProduct }) => {
	return (
		<Box
			sx={{
				width: {
					xs: '10rem',
					sm: '17rem'
				},
				position: 'relative'
			}}
			className='border hover:border-[#242D39] duration-200 rounded-lg overflow-hidden'
			component={Link}
			href={`/product/${product?.slug}`}
		>
			<Chip
				label={`${product?.discountPercentage ?? 0}% OFF`}
				size='small'
				sx={{
					bgcolor: 'white',
					color: 'primary.main',
					position: 'absolute',
					top: '0.5rem',
					right: '0.5rem',
					borderRadius: '0.5rem',
					border: '1px solid #242D39',
					display: product?.discountPercentage && product?.discountPercentage > 0 ? 'flex' : 'none',
					fontSize: {
						xs: '0.6rem',
						sm: '0.8rem'
					}
				}}
			/>
			<Box className='w-full h-[9rem] md:h-[16rem]'>
				<Image
					src={
						'https://cynor.b-cdn.net/wp-content/uploads/2024/05/KC181-Ash-Color-Design-6-cup-1-jug-1-plate-Surai-Set-1-300x300.jpg'
					}
					alt={product?.name}
					width={400}
					height={400}
					className='w-full h-full object-cover'
				/>
			</Box>
			<Box
				p={{
					xs: 1,
					sm: 2
				}}
			>
				<Typography
					mb={2}
					className='line-clamp-2 text-center'
					sx={{
						fontSize: {
							xs: '0.8rem',
							sm: '1rem'
						}
					}}
				>
					{/* {product?.name} */}
					Ash Color Design 6 cup 1 jug 1 plate Surai Set
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
						fontSize: {
							xs: '0.8rem',
							sm: '1rem'
						}
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
						<span className='w-full h-[1px] bg-[#242D39] absolute'></span>
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
	);
};

export default Product;
