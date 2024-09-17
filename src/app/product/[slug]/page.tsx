import config from '@/lib/config';
import { Box, Breadcrumbs, Chip, Grid, Skeleton, Stack, Typography } from '@mui/material';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ImageBox from '../components/ImageBox';
import RelatedProducts from '../components/RelatedProducts';

const AddToCart = dynamic(() => import('../components/AddToCart'), {
	ssr: false,
	loading: () => <Skeleton variant='rectangular' width={210} height={40} />
});

export async function generateMetadata({
	params: { slug }
}: {
	params: {
		slug: string;
	};
}) {
	const data = await fetch(`${config.server_url}/products/slug/${slug}`).then((res) => res.json());
	const title = data?.data?.name;
	const description = data?.data?.short_description;
	const image = data?.data?.images[0];

	return {
		title,
		description,
		openGraph: { images: [{ url: image }] }
	};
}

const ProductDetails = async ({
	params: { slug }
}: {
	params: {
		slug: string;
	};
}) => {
	const data = await fetch(`${config.server_url}/products/slug/${slug}`).then((res) => res.json());

	const productImages = data?.data?.images.map((image: string) => ({
		original: image,
		thumbnail: image
	}));

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

	return (
		<Box
			sx={{
				my: 2
			}}
		>
			<Grid
				container
				py={2}
				gap={{
					xs: '1.5rem',
					sm: '0'
				}}
			>
				<Grid item xs={12} md={5}>
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
						<ImageBox productImages={productImages} />
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={7}
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column',
							sm: 'row'
						},
						justifyContent: 'space-between',
						gap: 3,
						p: '0.5rem'
					}}
				>
					<Box
						mt={2.5}
						sx={{
							minWidth: '300px',
							maxWidth: '600px',
							width: '100%'
						}}
					>
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
									textDecoration: 'line-through',
									display: 'flex',
									width: 'fit-content',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'relative',
									color: 'red',
									fontSize: {
										xs: '1rem',
										sm: '1.2rem'
									}
								}}
							>
								৳ {data?.data?.old_price}
							</Typography>
							<Typography
								sx={{
									display: 'flex',
									width: 'fit-content',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'primary.dark',
									fontSize: {
										xs: '1.2rem',
										sm: '1.5rem'
									}
								}}
							>
								৳ {data?.data?.last_price}
							</Typography>
						</Box>
						<Box className='custom-font'>{parse(data?.data?.description ?? 'Loading...')}</Box>

						{data?.data?.isOutOfStock ? (
							<Chip
								label='Out of stock'
								sx={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', borderRadius: 0 }}
							/>
						) : (
							<AddToCart product={data?.data} stock={data?.data?.stock} />
						)}

						<Box mt={2}>
							{!data?.data?.isOutOfStock && (
								<Typography>
									<strong>Stock:</strong> {data?.data?.stock}
								</Typography>
							)}
							<Typography>
								<strong>SKU: </strong> {data?.data?.sku ?? 'N/A'}
							</Typography>
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
						<Stack direction='row' gap={1} mt={1} flexWrap='wrap'>
							{data?.data?.tags?.map((tag: string) => (
								<Chip
									key={tag}
									label={tag}
									component={Link}
									href={`/products?search=${tag}`}
									sx={{
										cursor: 'pointer',
										fontSize: '0.8rem',
										':hover': {
											backgroundColor: '#242D39',
											color: 'white'
										}
									}}
								/>
							))}
						</Stack>
					</Box>

					<Box
						mt={2}
						sx={{
							maxWidth: '400px'
						}}
					>
						<ul>
							<li>
								ঢাকা সিটিতে সম্পূর্ণ ক্যাশ অন ডেলিভারি। আমাদের নিজস্ব ডেলিভারি ম্যানের মাধ্যমে নিরাপদ ডেলিভারি।
								ডেলিভারির সময় ১-৩ দিন সর্বোচ্চ ৭ দিন।
							</li>

							<li>
								ঢাকা সিটির বাহিরে SteadFast Courier Home Delivery অথবা সুন্দরবন কুরিয়ারের মাধ্যমে নিরাপদ ডেলিভারি।
								এক্ষেত্রে অগ্রিম ৩০০ টাকা পেমেন্ট করতে হবে। পণ্যের মূল্য ৫,০০০ টাকার বেশি হলে অগ্রিম ৫০০ টাকা, ১০,০০০
								টাকার বেশি হলে ১০০০ টাকা টাকা পেমেন্ট করতে হবে। ডেলিভারির সময় ৩-৫ দিন সর্বোচ্চ ১০ দিন।
							</li>

							<li>
								ডেলিভারির সময় পণ্য দেখে বুঝে নিয়ে তারপর পেমেন্ট করতে পারবেন। পণ্যে কোন সমস্যা থাকলে ফেরত দিতে পারবেন। ৭
								দিনের মধ্যে কোন সমস্যা হলে পণ্য পরিবর্তন করে নিতে পারবেন।
							</li>

							<li>
								Connect on{' '}
								<Link className='text-green-600' href='https://wa.me/+8801766892662'>
									WhatsApp
								</Link>
							</li>

							<li>Call Us: +8801766892662</li>
						</ul>
					</Box>
				</Grid>
			</Grid>
			<RelatedProducts subCategorySlug={data?.data?.sub_category?.slug} currentProductId={data?.data?._id} />
		</Box>
	);
};

export default ProductDetails;
