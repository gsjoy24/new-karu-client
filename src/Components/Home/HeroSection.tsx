'use client';
import { Box, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

const HeroSection = () => {
	const data = [
		{
			title: 'Summer Collection 2024',
			subtitle: 'Explore the latest trends in summer fashion',
			banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
		},
		{
			title: 'Up to 50% Off',
			subtitle: 'Exclusive deals on top brands',
			banner: 'https://i.ibb.co/1227QnW/slider-2.png'
		},
		{
			title: 'New Arrivals',
			subtitle: 'Fresh styles added every week',
			banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
		},
		{
			title: 'Best Sellers',
			subtitle: 'Shop our most popular items',
			banner: 'https://i.ibb.co/1227QnW/slider-2.png'
		},
		{
			title: 'Limited Time Offer',
			subtitle: "Get your favorites before they're gone",
			banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
		}
	];

	return (
		<Carousel>
			{data.map((item, index) => (
				<Box
					key={index}
					sx={{
						position: 'relative'
					}}
				>
					<Image src={item.banner} alt={item.title} width={1920} height={1080} />
					<Box
						sx={{
							position: 'absolute',
							top: '0',
							left: '0',
							height: '100%'
						}}
					>
						<Typography
							variant='h3'
							gutterBottom
							sx={{
								color: '#253D4E',
								fontSize: {
									xs: '1.5rem',
									sm: '2rem',
									md: '2.5rem',
									lg: '3rem',
									xl: '3.5rem'
								}
							}}
						>
							{item.title}
						</Typography>
						<Typography variant='h5'>{item.subtitle}</Typography>
						<Box sx={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '50px' }}>
							<TextField
								aria-label='Subscribe to our newsletter'
								placeholder='Your email address'
								variant='outlined'
								size='small'
								sx={{
									'& .MuiOutlinedInput-root': {
										'& fieldset': {
											border: 'none'
										}
									},
									width: '100%'
								}}
							/>
						</Box>
					</Box>
				</Box>
			))}
		</Carousel>
	);
};

export default HeroSection;
