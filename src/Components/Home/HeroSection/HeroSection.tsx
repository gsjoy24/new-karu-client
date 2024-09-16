'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
const data = [
	// 'https://res.cloudinary.com/dwgozodq0/image/upload/v1726508667/Khan-Gadget-Fb-cover_1_gajxfu.png',
	'https://res.cloudinary.com/dwgozodq0/image/upload/v1726508666/Untitled-1_xwsmkx.png'
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
					position: 'absolute',
					bottom: '20px',
					zIndex: '99'
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
			interval={3000}
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
					<Image src={link} alt='banner' width={1200} height={700} className='w-auto h-full  rounded-2xl' />
				</Box>
			))}
		</Carousel>
	);
};

export default HeroSection;
