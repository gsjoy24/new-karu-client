import {
	EmailOutlined,
	LocalPhoneOutlined,
	LocalShippingOutlined,
	PaymentOutlined,
	PersonAdd,
	ShoppingCartOutlined
} from '@mui/icons-material';
import { Card, CardContent, Container, Step, StepLabel, Stepper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const steps = [
	{ label: 'Sign Up', icon: <PersonAdd /> },
	{ label: 'Confirm Email', icon: <EmailOutlined /> },
	{ label: 'Browse Products', icon: <ShoppingCartOutlined /> },
	{ label: 'Add to Cart', icon: <ShoppingCartOutlined /> },
	{ label: 'Place Order', icon: <PaymentOutlined /> },
	{ label: 'Confirmation Call', icon: <LocalPhoneOutlined /> },
	{ label: 'Order Delivery', icon: <LocalShippingOutlined /> }
];

const HowToPlaceOrderPage = () => {
	return (
		<Container maxWidth='md' style={{ marginTop: '40px', marginBottom: '40px' }}>
			<Typography
				variant='h1'
				align='center'
				gutterBottom
				sx={{
					fontSize: {
						xs: '1.8rem',
						sm: '3rem'
					}
				}}
			>
				How to Place an Order
			</Typography>
			<Typography variant='body2' align='center' paragraph>
				Follow these simple steps to place an order without paying upfront. Once your order is placed, you will receive
				a confirmation call from us to verify your delivery address.
			</Typography>
			<Stepper activeStep={-1} orientation='vertical' style={{ marginTop: '30px' }}>
				{steps.map((step, index) => (
					<Step key={index}>
						<StepLabel icon={step.icon}>
							<Typography variant='h6'>{step.label}</Typography>
						</StepLabel>
						<Card variant='outlined' style={{ marginBottom: '20px' }}>
							<CardContent>
								<Typography variant='body2' color='textSecondary'>
									{getStepDescription(index)}
								</Typography>
							</CardContent>
						</Card>
					</Step>
				))}
			</Stepper>
		</Container>
	);
};

const getStepDescription = (index: number) => {
	switch (index) {
		case 0:
			return (
				<>
					<p>
						Simply{' '}
						<Link href='/register' className='text-blue-500'>
							sign up
						</Link>{' '}
						for an account to get started. You will receive an email with a link to confirm your email address.
					</p>
					<br />
					<p>
						সহজেই{' '}
						<Link href='/register' className='text-blue-500'>
							সাইন আপ
						</Link>{' '}
						করুন একটি অ্যাকাউন্টের জন্য। আপনি একটি ইমেইল পাবেন যেখানে আপনার ইমেইল ঠিকানা নিশ্চিত করার জন্য একটি লিঙ্ক
						থাকবে।
					</p>
				</>
			);
		case 1:
			return (
				<>
					<p>Confirm your email address to activate your account.</p>
					<br />
					<p>আপনার অ্যাকাউন্ট সক্রিয় করতে আপনার ইমেইল ঠিকানা নিশ্চিত করুন।</p>
				</>
			);
		case 2:
			return (
				<>
					<p>Browse our wide range of products and choose your favorites.</p>
					<br />
					<p>আমাদের বিস্তৃত পণ্যসমূহ ব্রাউজ করুন এবং আপনার পছন্দেরগুলো বেছে নিন।</p>
				</>
			);
		case 3:
			return (
				<>
					<p>Add the desired products to your shopping cart.</p>
					<br />
					<p>আপনার পছন্দের পণ্যগুলি শপিং কার্টে যোগ করুন।</p>
				</>
			);
		case 4:
			return (
				<>
					<p>Place your order without any upfront payment required. You can pay cash on delivery.</p>
					<br />
					<p>
						কোনও অগ্রিম অর্থপ্রদানের প্রয়োজন ছাড়াই আপনার অর্ডার করুন। আপনি ডেলিভারির সময় নগদে অর্থ প্রদান করতে পারেন।
					</p>
				</>
			);
		case 5:
			return (
				<>
					<p>Our representative will call you to confirm the order and your delivery address.</p>
					<br />
					<p>আমাদের প্রতিনিধি আপনাকে কল করবেন অর্ডার এবং আপনার ডেলিভারি ঠিকানা নিশ্চিত করার জন্য।</p>
				</>
			);
		case 6:
			return (
				<>
					<p>After confirmation, your order will be processed and delivered to you.</p>
					<br />
					<p>নিশ্চিতকরণের পর, আপনার অর্ডার প্রক্রিয়া করা হবে এবং আপনাকে ডেলিভারি করা হবে।</p>
				</>
			);
		default:
			return '';
	}
};
export default HowToPlaceOrderPage;
