import { TProduct } from '@/types/product';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { TbCurrencyTaka } from 'react-icons/tb';

const Product = ({ product }: { product: TProduct }) => {
	return (
		<Box
			sx={{
				width: {
					xs: '9rem',
					sm: '17rem'
				}
			}}
			className='border hover:border-[#08653A] duration-200 rounded-lg overflow-hidden'
			component={Link}
			href={`/product/${product?.slug}`}
		>
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
			<Box p={2}>
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
						<span className='w-full h-[1px] bg-[#08653A] absolute'></span>
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
