import { TCart } from '@/types/product';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CartQuantityHandler from './CartQuantityHandler';
import DeleteCartItem from './DeleteCartItem';

const CartItem = ({ item }: { item: { id: string; name: string; price: number; quantity: number; image: string } }) => {
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
					src={item.image}
					alt={item.name}
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
						pr: 1,
						borderRight: {
							xs: 'none',
							sm: '1px solid #e0e0e0'
						}
					}}
				>
					<Typography
						variant='body1'
						gutterBottom
						sx={{
							' &:hover': {
								textDecoration: 'underline',
								textUnderlineOffset: '5px'
							}
						}}
					>
						{item?.name}
					</Typography>
					<Typography variant='body2'>৳ {item?.price}</Typography>
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
				<Typography variant='body2'>৳ {Math.ceil(item?.price * item?.quantity)}</Typography>
				{/* Quantity Handler */}
				<CartQuantityHandler id={item?.id} quantity={item.quantity} />
				{/* <DeleteCartItem id={item?.product?._id as string} /> */}
			</Box>
		</Box>
	);
};

export default CartItem;
