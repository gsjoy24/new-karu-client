'use client';
import Loading from '@/app/loading';
import KForm from '@/components/Form/KForm';
import KInput from '@/components/Form/KInput';
import EmptyCard from '@/components/Shared/Header/EmptyCard';
import Product from '@/components/Shared/Product/Product';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/product';
import { Box, IconButton, MenuItem, Pagination, Select, Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const sortOptions = [
	{
		value: 'createdAt',
		label: 'Newest'
	},
	{
		value: 'name',
		label: 'Name'
	},
	{
		value: 'last_price',
		label: 'Price'
	}
];

const ProductsByCategory = () => {
	const { slug } = useParams();
	const [sortParam, setSortParam] = useState<string>('createdAt');
	const [sortOrder, setSortOrder] = useState<string>('asc');
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(16);
	const [searchTerm, setSearchTerm] = useState<string>('');

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
			value: searchTerm || ''
		},
		{
			name: 'sort',
			value: sortParam
		},
		{
			name: 'page',
			value: page
		},
		{
			name: 'sortOrder',
			value: sortOrder
		},
		{
			name: 'limit',
			value: limit
		}
	]);
	const totalPage = data?.meta?.total / data?.meta?.limit;

	return (
		<Box
			sx={{
				pt: 2,
				pb: 5
			}}
		>
			<Stack
				direction='row'
				sx={{
					py: 2,
					gap: {
						xs: 1,
						sm: 2
					},
					flexWrap: 'wrap'
				}}
				justifyContent={{
					xs: 'center',
					md: 'start'
				}}
			>
				{/* for order */}
				<Select
					sx={{
						maxWidth: '120px',
						width: '100%'
					}}
					value={sortParam}
					onChange={(e) => setSortParam(e.target.value)}
					placeholder='Sort by'
					variant='outlined'
					size='small'
				>
					<MenuItem disabled>
						<em>Sort By</em>
					</MenuItem>
					{sortOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>

				{/* for order */}
				<Select
					sx={{
						maxWidth: '80px',
						width: '100%'
					}}
					value={sortOrder}
					onChange={(e) => setSortOrder(e.target.value)}
					placeholder='Sort by'
					variant='outlined'
					size='small'
				>
					<MenuItem disabled>
						<em>Sort Order</em>
					</MenuItem>
					<MenuItem value='asc'>A-Z</MenuItem>
					<MenuItem value='desc'>Z-A</MenuItem>
				</Select>

				{/* for limit */}
				<Select
					sx={{
						maxWidth: '80px',
						width: '100%'
					}}
					value={limit}
					onChange={(e) => setLimit(Number(e.target.value))}
					placeholder='Items per page'
					variant='outlined'
					size='small'
				>
					<MenuItem disabled>
						<em>Items per page</em>
					</MenuItem>
					{[8, 16, 24].map((option) => (
						<MenuItem key={option} value={option}>
							{option}
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
			{!isFetching ? (
				<>
					{data?.data?.length > 0 ? (
						<Stack direction='row' justifyContent='center' alignItems='center' gap={1} flexWrap='wrap'>
							{data?.data?.map((product: TProduct) => (
								<Product product={product} key={product?._id} />
							))}
						</Stack>
					) : (
						<EmptyCard />
					)}
				</>
			) : (
				<Loading />
			)}
			{totalPage > 1 && (
				<Stack my={5} alignItems='center'>
					<Pagination count={totalPage} shape='rounded' onChange={(e, value) => setPage(value)} />
				</Stack>
			)}
		</Box>
	);
};

export default ProductsByCategory;
