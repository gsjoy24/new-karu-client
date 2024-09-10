import { TCart } from '@/types/product';
import { Box, Typography } from '@mui/material';
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
					gap: 2
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
				<Typography variant='body1' sx={{ fontWeight: 'bold' }}>
					{item.product?.name}
				</Typography>
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
				<Typography variant='body2'>৳ {item.product?.last_price * item.quantity}</Typography>
				{/* Quantity Handler */}
				<CartQuantityHandler id={item?.product?._id as string} quantity={item.quantity} />
				<DeleteCartItem id={item?.product?._id as string} />
			</Box>
		</Box>
	);
};

export default CartItem;
