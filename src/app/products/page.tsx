'use client';
import EmptyCard from '@/components/Shared/Header/EmptyCard';
import SearchProduct from '@/components/Shared/Header/SearchProduct';
import Product from '@/components/Shared/Product/Product';
import { useGetProductsQuery } from '@/redux/api/productApi';
import { TProduct } from '@/types/product';
import { Breadcrumbs, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Loading from '../loading';

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

const ProductPage = () => {
	const params = useSearchParams();
	const search = params.get('search');
	const [sortParam, setSortParam] = useState<string>('createdAt');
	const [sortOrder, setSortOrder] = useState<string>('desc');
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(16);
	const { data, isLoading } = useGetProductsQuery([
		{
			name: 'page',
			value: page
		},
		{
			name: 'searchTerm',
			value: search || ''
		},
		{
			name: 'sort',
			value: sortParam
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
	const totalPage = Math.ceil(data?.meta?.total / data?.meta?.limit);

	const breadcrumbs = [
		<Link href='/' key='1'>
			Home
		</Link>,
		<Link key='2' href={`/products`}>
			Products
		</Link>,
		<Typography key='3' color='text.primary'>
			{search ? `Search result of : ${search}` : 'All Products'}
		</Typography>
	];

	return (
		<div className='my-6'>
			<Breadcrumbs separator='›' aria-label='breadcrumb'>
				{breadcrumbs}
			</Breadcrumbs>
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
					value={limit.toString()}
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

				<div className='block md:hidden'>
					<SearchProduct />
				</div>
			</Stack>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{data?.data?.length === 0 ? (
						<EmptyCard />
					) : (
						<>
							<Stack
								direction='row'
								justifyContent='space-between'
								alignItems='center'
								gap={{
									xs: 1,
									sm: 3
								}}
								flexWrap='wrap'
								mt={3}
							>
								{data?.data?.map((product: TProduct) => (
									<Product product={product} key={product?._id} />
								))}
							</Stack>
							{totalPage > 1 && (
								<Stack my={5} alignItems='center'>
									<Pagination
										count={totalPage}
										shape='rounded'
										onChange={(e, value) => {
											setPage(value);
											window.scrollTo({ top: 90, behavior: 'smooth' });
										}}
									/>
								</Stack>
							)}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default ProductPage;
