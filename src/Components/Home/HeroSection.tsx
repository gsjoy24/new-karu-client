'use client';
import { quicksand } from '@/app/fonts';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
const data = [
	{
		title: 'Summer Collection Extravaganza 2024',
		subtitle: 'Dive into the latest trends and styles in summer fashion, perfect for your sunny adventures',
		banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
	},
	{
		title: 'Flash Sale 2024 50% Off',
		subtitle: 'Exclusive deals on top brands',
		banner: 'https://i.ibb.co/1227QnW/slider-2.png'
	},
	{
		title: 'New Styles Every Week 2024',
		subtitle: 'Fresh styles added every week',
		banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
	},
	{
		title: 'Our Best Sellers 2024 50% Off',
		subtitle: 'Shop our most popular items',
		banner: 'https://i.ibb.co/1227QnW/slider-2.png'
	},
	{
		title: 'Very Last Chance 2024 70% Off',
		subtitle: "Get your favorites before they're gone",
		banner: 'https://i.ibb.co/s22BRjx/slider-1.png'
	}
];
const HeroSection = () => {
	return (
		<Carousel
			indicatorIconButtonProps={{
				style: {
					color: 'transparent',
					border: '1px solid #253D4E',
					margin: '0 2px',
					width: '10px',
					height: '10px'
				}
			}}
			activeIndicatorIconButtonProps={{
				style: {
					backgroundColor: '#29A56C',
					border: 'none'
				}
			}}
			indicatorContainerProps={{
				style: {
					position: 'absolute',
					bottom: '20px',
					zIndex: '99'
				}
			}}
			navButtonsProps={{
				style: {
					backgroundColor: 'white',
					borderRadius: '100%',
					color: '#253D4E'
				}
			}}
			duration={700}
			interval={5000}
			sx={{
				mt: 3
			}}
		>
			{data.map((item) => (
				<Box
					key={item?.title}
					sx={{
						position: 'relative',
						height: {
							xs: '250px',
							md: '400px'
						}
					}}
				>
					<Image
						src={item?.banner}
						alt={item?.title}
						width={1200}
						height={700}
						className='w-full h-full object-cover  rounded-2xl '
					/>
					<Box
						sx={{
							position: 'absolute',
							top: '0',
							left: {
								xs: '0',
								sm: '30px'
							},
							height: '100%',
							maxWidth: '650px',
							width: '100%',
							padding: 1.5,
							display: 'flex',
							justifyContent: 'start',
							alignItems: 'center'
						}}
					>
						<div className='w-full md:max-w-[500px] lg:max-w-[600px]'>
							<h1 className={`${quicksand.className} text-gray-700 text-[30px] md:text-[52px] font-[700]`}>
								{item.title}
							</h1>
							<Typography
								variant='h2'
								sx={{
									color: 'secondary.main',
									fontSize: {
										xs: '16px',
										md: '22px'
									}
								}}
							>
								{item.subtitle}
							</Typography>
						</div>
					</Box>
				</Box>
			))}
		</Carousel>
	);
};

export default HeroSection;
