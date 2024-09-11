import { CheckCircleOutline, Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, Dialog, Divider, IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';

const OrderConfirmationModal = ({ open, onClose, response }: { open: boolean; onClose: () => void; response: any }) => {
	const { order_id, createdAt } = response || {};
	const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth='xs'
			fullWidth
			PaperProps={{
				sx: {
					borderRadius: 2,
					p: 3,
					boxShadow: 3,
					position: 'relative' // For positioning the close button
				}
			}}
		>
			{/* Title and Close Button */}
			<Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
				<Typography variant='h6' fontWeight='bold'>
					Order Status
				</Typography>
				<IconButton onClick={onClose} sx={{ p: 0 }}>
					<CloseIcon />
				</IconButton>
			</Stack>

			{/* Success Icon and Title */}
			<Stack direction='column' alignItems='center' spacing={2}>
				<CheckCircleOutline sx={{ color: 'green', fontSize: 100 }} />
				<Typography
					variant='h5'
					fontWeight='bold'
					sx={{
						textAlign: 'center',
						fontSize: { xs: '1.1rem', md: '1.75rem' }
					}}
				>
					Order Placed Successfully!
				</Typography>
			</Stack>

			<Typography variant='body2' sx={{ mt: 2, textAlign: 'center' }}>
				Thank you for shopping with us. Your order has been placed successfully.
			</Typography>

			{/* Divider */}
			<Divider sx={{ my: 2 }} />

			{/* Order Details */}
			<Stack spacing={1} sx={{ mb: 2 }}>
				<Typography variant='body1'>
					<strong>Order ID:</strong> {order_id}
				</Typography>
				<Typography variant='body1'>
					<strong>Date:</strong> {formattedDate}
				</Typography>
				<Typography variant='body1'>
					<strong>Status:</strong> Pending
				</Typography>
				<Typography variant='body2'>
					Our team will contact you shortly to confirm your order. Please keep your phone switched on.
				</Typography>
			</Stack>

			<Divider sx={{ my: 2 }} />

			{/* CTA Buttons */}
			<Stack
				direction={{
					xs: 'column',
					md: 'row'
				}}
				justifyContent='center'
				spacing={2}
				mt={2}
			>
				<Button variant='contained' color='primary' LinkComponent={Link} href='/profile/orders'>
					View Orders
				</Button>
				<Button variant='outlined' color='primary' LinkComponent={Link} href='/products'>
					Continue Shopping
				</Button>
			</Stack>
		</Dialog>
	);
};

export default OrderConfirmationModal;
