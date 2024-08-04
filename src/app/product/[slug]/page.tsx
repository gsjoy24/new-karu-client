'use client';
import KImageGallery from '@/components/Shared/KImageGallery/KImageGallery';
import { useGetProductBySlugQuery } from '@/redux/api/productApi';
import { Box, Button, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import parse from 'html-react-parser';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { TbCurrencyTaka } from 'react-icons/tb';

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
	const { data } = useGetProductBySlugQuery(slug as string);
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
					<Box className='custom-font'>{parse(data?.data?.description ?? 'Loading...')}</Box>
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
					<Box mt={2}>
						<Box>
							<strong>Categories: </strong>
							<Typography component={Link} href={`/category/${data?.data?.category?.slug}`}>
								{data?.data?.category?.name},
							</Typography>{' '}
							<Typography
								component={Link}
								href={`/category/${data?.data?.category?.slug}/${data?.data?.sub_category?.slug}`}
							>
								{data?.data?.sub_category?.name}
							</Typography>
						</Box>
					</Box>
					<Stack direction='row' gap={1} mt={1}>
						{data?.data?.tags?.map((tag: string) => (
							<Chip
								key={tag}
								label={tag}
								component={Link}
								href={`/products?search=${tag}`}
								sx={{
									cursor: 'pointer',
									':hover': {
										backgroundColor: '#ffba00'
									}
								}}
							/>
						))}
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
