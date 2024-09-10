'use client';
import Loading from '@/app/loading';
import { useGetOrdersQuery } from '@/redux/api/userApi';
import { TProduct } from '@/types/product';
import { Cancel, CheckCircle, HourglassEmpty, LocalShipping, ShoppingCart, Sync } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, Chip, Divider, Stack, Typography } from '@mui/material';

const OrdersPage = () => {
	const { data, isLoading } = useGetOrdersQuery({});

	if (isLoading) return <Loading />;

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
			case 'cancel':
				return <Chip icon={<Cancel />} label='Canceled' color='error' variant='outlined' size='small' />;
			default:
				return <Chip label={status} variant='outlined' />;
		}
	};

	return (
		<Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
			<Typography variant='h4' gutterBottom>
				Your Orders
			</Typography>

			{data?.data?.length > 0 ? (
				data.data.map((order: any, index: number) => (
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
							<Stack spacing={2}>
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
						</CardContent>
					</Card>
				))
			) : (
				<Typography variant='body1' sx={{ textAlign: 'center', mt: 4 }}>
					You have no orders yet.
				</Typography>
			)}
		</Box>
	);
};

export default OrdersPage;
