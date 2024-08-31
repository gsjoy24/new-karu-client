'use client';
import Loading from '@/app/loading';
import { useGetOrdersQuery } from '@/redux/api/userApi';
import { TProduct } from '@/types/product';
import {
	Box,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';

const OrdersPage = () => {
	const { data, isLoading } = useGetOrdersQuery({});
	return isLoading ? (
		<Loading />
	) : (
		<Box>
			<Typography variant='h4' gutterBottom>
				Your Orders
			</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 330 }} size='small' aria-label='Order table'>
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align='right'>Order ID</TableCell>
							<TableCell align='right'>Product</TableCell>
							<TableCell align='right'>Status</TableCell>
							<TableCell align='right'>Date</TableCell>
							{/* <TableCell align='right'>Actions</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.data?.map((order: any, index: number) => (
							<TableRow key={order._id}>
								<TableCell component='th' scope='row'>
									{index + 1}
								</TableCell>
								<TableCell align='right'>{order.order_id}</TableCell>
								<TableCell
									align='right'
									sx={{
										whiteSpace: 'nowrap',
										overflow: 'hidden',
										textOverflow: 'ellipsis'
									}}
								>
									{order.products.map((product: { product: TProduct; quantity: number; total_price: number }) => (
										<Stack key={product.product._id} direction='column' gap={2}>
											{product.product.name} x {product.quantity} = ৳ {product.total_price}
										</Stack>
									))}
								</TableCell>
								<TableCell align='right'>{order.status}</TableCell>
								<TableCell align='right'>{new Date(order.createdAt).toLocaleString()}</TableCell>
								{/* <TableCell align='right'>Actions</TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default OrdersPage;

// {
//             "_id": "66d315392f95b7aacfc0f063",
//             "order_id": "yqweZ0831",
//             "customer": {
//                 "_id": "66d314e25fd0be946695c77c",
//                 "name": {
//                     "firstName": "Gour",
//                     "lastName": "Saha"
//                 },
//                 "email": "goursaha307@gmail.com",
//                 "role": "user",
//                 "isEmailConfirmed": true,
//                 "status": "active",
//                 "cart": [],
//                 "createdAt": "2024-08-31T13:04:34.132Z",
//                 "updatedAt": "2024-08-31T13:06:01.323Z",
//                 "__v": 1,
//                 "total_cart_items": 0,
//                 "full_name": "Gour Saha",
//                 "id": "66d314e25fd0be946695c77c"
//             },
//             "name": "Selma Burris",
//             "phone": "01772528866",
//             "products": [
//                 {
//                     "product": {
//                         "_id": "66ad38355239fdb31202cbab",
//                         "name": "Sample Product 4",
//                         "description": "This is a sample product description.",
//                         "tags": [
//                             "Sample",
//                             "Product",
//                             "Electronics"
//                         ],
//                         "old_price": 50,
//                         "last_price": 29.99,
//                         "stock": 100,
//                         "images": [
//                             "image1.jpg",
//                             "image2.jpg",
//                             "image3.jpg"
//                         ],
//                         "category": "6687e5d6c1c7ddaecb94dc49",
//                         "sub_category": "6687e6de974c638ef0c006b6",
//                         "slug": "sample-product-4",
//                         "__v": 0,
//                         "discountPercentage": 41,
//                         "isOutOfStock": false,
//                         "id": "66ad38355239fdb31202cbab"
//                     },
//                     "quantity": 2,
//                     "total_price": 60,
//                     "_id": "66d315392f95b7aacfc0f064",
//                     "id": "66d315392f95b7aacfc0f064"
//                 }
//             ],
//             "address": "Deserunt in temporib",
//             "district": "Ea nisi expedita bla",
//             "city": "Quisquam aut archite",
//             "status": "pending",
//             "createdAt": "2024-08-31T13:06:01.307Z",
//             "updatedAt": "2024-08-31T13:06:01.307Z",
//             "id": "66d315392f95b7aacfc0f063"
//         }
