'use client';
import Loading from '@/app/loading';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import KSelect from '@/components/Form/KSelect';
import EmptyCard from '@/components/Shared/Header/EmptyCard';
import Product from '@/components/Shared/Product/Product';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TQueryParams } from '@/types';
import { TProduct } from '@/types/product';
import { Box, IconButton, MenuItem, Pagination, Select, Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const sortOptions = [
	{
		value: 'createdAt',
		label: 'Newest'
	},
	{
		value: 'last_price',
		label: 'Price'
	}
];

const ProductsByCategory = () => {
	const [sortParam, setSortParam] = useState('createdAt');
	const [searchTerm, setSearchTerm] = useState('');
	const [page, setPage] = useState<number>(1);
	const { slug } = useParams();

	const { data, isFetching } = useGetProductsQuery([
		{
			name: 'page',
			value: page
		},
		{
			name: 'category',
			value: slug[0]
		},
		{
			name: 'sub_category',
			value: slug[1]
		},
		{
			name: 'searchTerm',
			value: searchTerm
		},
		{
			name: 'sort',
			value: sortParam
		},
		{
			name: 'page',
			value: page
		}
	]);

	const totalPage = data?.meta?.total / data?.meta?.limit;

	return isFetching ? (
		<Loading />
	) : (
		<div>
			<Stack
				direction='row'
				sx={{
					py: 2,
					gap: 3,
					flexWrap: 'wrap'
				}}
			>
				<Select
					sx={{
						maxWidth: '200px',
						width: '100%'
					}}
					value={sortParam}
					onChange={(e) => setSortParam(e.target.value)}
					placeholder='Sort by'
					variant='outlined'
					size='small'
				>
					{sortOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>

				{/* search form */}
				<KForm
					onSubmit={(data) => setSearchTerm(data.searchTerm)}
					styleClasses='w-[300px] md:w-[400px] flex border rounded-md py-[5px]'
				>
					<KInput
						name='searchTerm'
						placeholder='Search on this category...'
						sx={{
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									border: 'none'
								}
							},
							width: '100%'
						}}
					/>
					<IconButton aria-label='search' type='submit'>
						<HiMagnifyingGlass />
					</IconButton>
				</KForm>
			</Stack>

			{data?.data?.length > 0 ? (
				<Stack direction='row' justifyContent='center' alignItems='center' gap={3} flexWrap='wrap'>
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
					{data?.data?.map((product: TProduct) => (
						<Product product={product} key={product?._id} />
					))}
				</Stack>
			) : (
				<EmptyCard />
			)}

			{20 > 1 && (
				<Stack my={5} alignItems='center'>
					<Pagination count={20} shape='rounded' />
				</Stack>
			)}
		</div>
	);
};

export default ProductsByCategory;
