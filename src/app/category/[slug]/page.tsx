'use client';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TQueryParams } from '@/types';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const ProductsByCategory = () => {
	const [filterParam, setFilterParam] = useState({} as TQueryParams);
	const [searchTerm, setSearchTerm] = useState({} as TQueryParams);
	const [page, setPage] = useState<number>(1);
	const { slug } = useParams();
	const { data, isFetching } = useGetProductsQuery([
		{
			name: 'page',
			value: page
		},
		{
			name: 'category',
			value: slug
		}
	]);

	const totalPage = data?.meta?.total / data?.meta?.limit;

	return (
		<div>
			<h1>This is ProductsByCategory {slug}</h1>
		</div>
	);
};

export default ProductsByCategory;
