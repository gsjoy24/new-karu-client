'use client';
import { useGetProductBySlugQuery } from '@/redux/api/productApi';
import { Box } from '@mui/material';
import { useParams } from 'next/navigation';

const ProductDetails = () => {
	const { slug } = useParams();
	const { data } = useGetProductBySlugQuery(slug as string);
	console.log(data);
	console.log(slug);
	return <Box>{slug}</Box>;
};

export default ProductDetails;
