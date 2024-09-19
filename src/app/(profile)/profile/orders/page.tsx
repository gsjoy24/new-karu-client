'use client';
import Loading from '@/app/loading';
import { useGetOrdersQuery } from '@/redux/api/userApi';
import { TProduct } from '@/types/product';
import { Cancel, CheckCircle, HourglassEmpty, LocalShipping, ShoppingCart, Sync } from '@mui/icons-material';
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Divider,
	Pagination,
	Stack,
	TextField,
	Typography
} from '@mui/material';
import { useState } from 'react';

const OrdersPage = () => {
	// State for pagination and search
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');

	// Fetch orders with pagination parameters
	const { data, isLoading } = useGetOrdersQuery({ page, searchTerm });

	// Pagination handler
	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	// Search handler
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// set one second delay to avoid multiple API calls
		setTimeout(() => {
			setSearchTerm(event.target.value);
			setPage(1);
		}, 1000);
	};

	// Function to get the icon and color based on order status
	const getStatusChip = (status: string) => {
		switch (status) {
			case 'pending':
				return <Chip icon={<HourglassEmpty />} label='Pending' color='warning' variant='outlined' size='small' />;
			case 'processing':
				return <Chip icon={<Sync />} label='Processing' color='primary' variant='outlined' size='small' />;
			case 'shipped':
				return <Chip icon={<LocalShipping />} label='Shipped' color='info' variant='outlined' size='small' />;
			case 'delivered':
				return <Chip icon={<CheckCircle />} label='Delivered' color='success' variant='outlined' size='small' />;
			case 'cancelled':
				return <Chip icon={<Cancel />} label='Canceled' color='error' variant='outlined' size='small' />;
			default:
				return <Chip label={status} variant='outlined' />;
		}
	};

	if (isLoading) return <Loading />;

	return (
		<Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
			<Typography variant='h4' gutterBottom>
				Your Orders
			</Typography>

			{/* Search Field */}
			<TextField
				label='Search Orders'
				variant='outlined'
				fullWidth
				sx={{ mb: 3 }}
				onChange={handleSearchChange}
				placeholder='Search by Order ID...'
			/>

			{data?.data?.length > 0 ? (
				<>
					{data?.data.map((order: any, index: number) => (
						<Card key={order._id} variant='outlined' sx={{ mb: 3 }}>
							{/* Order Header */}
							<CardHeader
								avatar={<ShoppingCart color='primary' />}
								title={`Order #${order.order_id}`}
								subheader={new Date(order.createdAt).toLocaleString()}
								action={getStatusChip(order.status)}
							/>

							{/* Divider */}
							<Divider />

							{/* Order Content */}
							<CardContent>
								<Stack>
									{/* Product Details */}
									{order.products.map((product: { product: TProduct; quantity: number; total_price: number }) => (
										<Stack key={product.product._id} direction='row' justifyContent='space-between' alignItems='center'>
											<Typography variant='body1'>
												{product.product.name} x {product.quantity}
											</Typography>
											<Typography
												variant='body1'
												fontWeight='bold'
												sx={{
													whiteSpace: 'nowrap',
													p: 0.5
												}}
											>
												৳ {product.total_price}
											</Typography>
										</Stack>
									))}
								</Stack>
								{order.products.length > 1 && (
									<>
										<Divider />
										<Stack direction='row' justifyContent='space-between' alignItems='center'>
											<Typography variant='body1'>Total Price:</Typography>
											<Typography
												variant='body1'
												fontWeight='bold'
												sx={{
													whiteSpace: 'nowrap',
													p: 0.5
												}}
											>
												৳ {order?.total_price}
											</Typography>
										</Stack>
									</>
								)}
							</CardContent>
						</Card>
					))}

					{/* Pagination Component */}
					<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
						<Pagination
							count={Math.ceil(data.meta.totalPages)}
							page={page}
							onChange={handlePageChange}
							color='primary'
						/>
					</Box>
				</>
			) : (
				<Typography variant='body1' sx={{ textAlign: 'center', mt: 4 }}>
					No orders found.
				</Typography>
			)}
		</Box>
	);
};

export default OrdersPage;
