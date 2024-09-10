import { TCart } from '@/types/product';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import CartQuantityHandler from './CartQuantityHandler';
import DeleteCartItem from './DeleteCartItem';

const CartItem = ({ item }: { item: TCart }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					sm: 'row'
				},
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				borderBottom: '1px solid #e0e0e0',
				p: 1,
				gap: 2
			}}
		>
			{/* Product Image and Name */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: {
						xs: '100%',
						sm: '60%'
					},
					gap: 2,
					p: {
						xs: 1,
						sm: 'none'
					},
					borderBottom: {
						xs: '1px solid #e0e0e0',
						sm: 'none'
					}
				}}
			>
				{/* Product Image */}
				<Image
					src={item.product.images[0]}
					alt={item.product?.name}
					width={80}
					height={80}
					style={{ borderRadius: '8px', objectFit: 'cover' }}
				/>

				{/* Product Name */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
						gap: 1,
						borderRight: {
							xs: 'none',
							sm: '1px solid #e0e0e0'
						}
					}}
				>
					<Typography variant='body1' gutterBottom>
						{item.product?.name}
					</Typography>
					<Typography variant='body2'>৳ {item.product?.last_price}</Typography>
				</Box>
			</Box>

			{/* Quantity and Price Section */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					width: {
						xs: '100%',
						sm: '40%'
					},
					gap: 2
				}}
			>
				{/* Total Price */}
				<Typography variant='body2'>৳ {Math.ceil(item.product?.last_price * item.quantity)}</Typography>
				{/* Quantity Handler */}
				<CartQuantityHandler id={item?.product?._id as string} quantity={item.quantity} />
				<DeleteCartItem id={item?.product?._id as string} />
			</Box>
		</Box>
	);
};

export default CartItem;
