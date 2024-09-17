'use client';
import Loading from '@/app/loading';
import Product from '@/components/Shared/Product/Product';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/product';
import { Box, Stack, Typography } from '@mui/material';

const RelatedProducts = ({
	subCategorySlug,
	currentProductId
}: {
	subCategorySlug: string;
	currentProductId: string;
}) => {
	const { data: relatedProducts, isFetching } = useGetProductsQuery([
		{
			name: 'sub_category',
			value: subCategorySlug
		}
	]);
	const otherProducts = relatedProducts?.data?.filter((product: TProduct) => product._id !== currentProductId);
	return isFetching ? (
		<Loading />
	) : (
		otherProducts?.length > 0 && (
			<Box mt={2}>
				<Typography variant='h4' my={4} align='center'>
					Related Products
				</Typography>
				<Stack direction='row' justifyContent='center' alignItems='center' gap={1} flexWrap='wrap'>
					{otherProducts?.map((product: TProduct) => (
						<Product key={product._id} product={product} />
					))}
				</Stack>
			</Box>
		)
	);
};

export default RelatedProducts;
