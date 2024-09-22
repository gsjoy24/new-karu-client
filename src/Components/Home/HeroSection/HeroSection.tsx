'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
const data = [
	'https://res.cloudinary.com/dwgozodq0/image/upload/v1726944682/Untitled-1_1_xoqana.png',
	'https://res.cloudinary.com/dwgozodq0/image/upload/v1726944680/Untitled-1k_rpo1ih.png',
	'https://res.cloudinary.com/dwgozodq0/image/upload/v1726944678/6ceb57cd-164c-4cfc-8b57-362015bcf276_nb433s.jpg'
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
					display: 'none'
				}
			}}
			indicatorContainerProps={{
				style: {
					display: 'none'
				}
			}}
			navButtonsProps={{
				style: {
					backgroundColor: 'white',
					borderRadius: '100%',
					color: '#253D4E',
					zIndex: '990'
				}
			}}
			duration={700}
			interval={4000}
			sx={{
				mt: 3
			}}
			swipe={true}
		>
			{data.map((link) => (
				<Box
					key={link}
					sx={{
						position: 'relative',
						width: '100%',
						height: 'auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image src={link} alt='banner' width={1200} height={700} className='w-full h-full  rounded-2xl' />
				</Box>
			))}
		</Carousel>
	);
};

export default HeroSection;
