'use client';
import KImageGallery from '@/components/Shared/KImageGallery/KImageGallery';
// import { useGetProductBySlugQuery } from '@/redux/api/productApi';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import parse from 'html-react-parser';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { TbCurrencyTaka, TbShoppingCartDiscount } from 'react-icons/tb';

const productImages = [
	{
		original: 'https://xelltechnology.com/wp-content/uploads/2022/04/dummy3.jpg',
		thumbnail: 'https://xelltechnology.com/wp-content/uploads/2022/04/dummy3.jpg'
	},
	{
		original: 'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg',
		thumbnail: 'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg'
	}
];
const ProductDetails = () => {
	const [quantity, setQuantity] = useState<number>(1);
	const { slug } = useParams();
	// const { data } = useGetProductBySlugQuery(slug as string);
	const data = {
		data: {
			name: 'Ash Color Design 6 cup 1 jug 1 plate Surai Set',
			description: `<h2>Amazing Features</h2>
                <ul>
                  <li>Feature 1: Super fast performance</li>
                  <li>Feature 2: Sleek and modern design</li>
                  <li>Feature 3: Long-lasting battery life</li>
                </ul>
                <p>This <strong>Awesome Gadget</strong> is designed to enhance your productivity and make your life easier. With its cutting-edge technology and user-friendly interface, you'll wonder how you ever lived without it.</p>`,
			last_price: 39.99,
			old_price: 49.99,
			stock: 100
		}
	};
	return (
		<Grid
			container
			py={2}
			gap={{
				xs: '1.5rem',
				sm: '0'
			}}
		>
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						maxWidth: '500px',
						width: '100%',
						margin: '0 auto'
					}}
				>
					<KImageGallery productImages={productImages} />
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box>
					<Typography
						sx={{
							fontSize: { xs: '1.5rem', sm: '2rem' }
						}}
						variant='h1'
					>
						{data?.data?.name}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '1rem',
							fontSize: {
								xs: '0.8rem',
								sm: '1.2rem'
							},
							my: '0.5rem'
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
							{data?.data?.old_price}
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
							{data?.data?.last_price}
						</Typography>
					</Box>
					<Box className='custom-font'>{parse(data?.data?.description)}</Box>
					<Typography>
						Stock: <strong>{data?.data?.stock}</strong>
					</Typography>
					<Stack direction='row' spacing={2} mt={2}>
						<Box
							sx={{
								display: 'flex',
								gap: '0.3rem',
								alignItems: 'center'
							}}
						>
							<IconButton disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
								<CiSquareMinus />
							</IconButton>
							<span>{quantity}</span>
							<IconButton disabled={quantity === data?.data?.stock} onClick={() => setQuantity(quantity + 1)}>
								<CiSquarePlus />
							</IconButton>
						</Box>
						<Button startIcon={<LiaCartPlusSolid />}>Add to Cart</Button>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
