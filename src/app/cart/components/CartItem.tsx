import { TCart } from '@/types/product';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import CartQuantityHandler from './CartQuantityHandler';
import DeleteCartItem from './DeleteCartItem';

const CartItem = ({ item }: { item: TCart }) => {
	return (
		<TableRow key={item?.product?._id}>
			<TableCell>
				<Box
					sx={{
						display: 'flex',
						minWidth: '250px',
						maxWidth: '450px',
						width: '100%',
						gap: '1rem',
						alignItems: 'center'
					}}
				>
					<Box sx={{ position: 'relative' }}>
						<Image
							src={
								'https://cynor.b-cdn.net/wp-content/uploads/2024/05/KC181-Ash-Color-Design-6-cup-1-jug-1-plate-Surai-Set-1-300x300.jpg'
							}
							alt={item.product?.name}
							width={100}
							height={100}
							className='w-[4rem] sm:w-[8rem] rounded-md'
						/>
						<DeleteCartItem id={item?.product?._id as string} />
					</Box>

					<Box>
						<Typography gutterBottom>{item.product?.name}</Typography>
						<Typography
							sx={{
								fontSize: '0.8rem'
							}}
						>
							৳{item.product?.last_price}
						</Typography>
					</Box>
				</Box>
			</TableCell>
			<TableCell>
				<CartQuantityHandler id={item?.product?._id as string} quantity={item.quantity} />
			</TableCell>
			<TableCell>
				<Typography>৳{item.product?.last_price * item.quantity}</Typography>
			</TableCell>
		</TableRow>
	);
};

export default CartItem;
