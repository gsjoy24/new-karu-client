'use client';
import Loading from '@/app/loading';
import KImageGallery from '@/components/Shared/KImageGallery/KImageGallery';
import { useGetProductBySlugQuery } from '@/redux/api/productApi';
import { useAppSelector } from '@/redux/hooks';
import { Box, Breadcrumbs, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CiLogin } from 'react-icons/ci';
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
	const AddToCart = dynamic(() => import('../components/AddToCart'), {
		ssr: false
	});
	const user = useAppSelector((state) => state.auth.user);
	const { slug } = useParams();
	const { data, isFetching } = useGetProductBySlugQuery(slug as string);
	console.log(data);
	const breadcrumbs = [
		<Link href='/' key='1'>
			Home
		</Link>,
		<Link key='2' href={`/category/${data?.data?.category?.slug}`}>
			{data?.data?.category?.name}
		</Link>,
		<Link key='3' href={`/category/${data?.data?.category?.slug}/${data?.data?.sub_category?.slug}`}>
			{data?.data?.sub_category?.name}
		</Link>
	];

	return isFetching ? (
		<Loading />
	) : (
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
					<Breadcrumbs separator='›' aria-label='breadcrumb'>
						{breadcrumbs}
					</Breadcrumbs>
					<KImageGallery productImages={productImages} />
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box mt={2.5}>
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
					{/* here */}
					{user ? (
						<AddToCart product={data?.data?._id} stock={data?.data?.stock} />
					) : (
						<Button
							component={Link}
							href='/login'
							endIcon={<CiLogin />}
							sx={{
								mt: 2
							}}
						>
							Sign in to add to cart
						</Button>
					)}
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
