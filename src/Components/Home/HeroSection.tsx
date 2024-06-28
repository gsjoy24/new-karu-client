'use client';
import { quicksand } from '@/app/fonts';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { FieldValues } from 'react-hook-form';
import { FaRegPaperPlane } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel';
import KForm from '../Form/KForm';
import KInput from '../Form/KInput';
const data = [
	{
		title: 'Summer Collection 2024',
		subtitle: 'Explore the latest trends in summer fashion',
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
	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
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
			{data.map((item, index) => (
				<Box
					key={index}
					sx={{
						position: 'relative',
						height: '400px'
					}}
				>
					<Image
						src={item.banner}
						alt={item.title}
						width={1200}
						height={800}
						className='w-full h-full object-cover rounded-2xl '
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
						<div className='w-full'>
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

							{/* subscribe field */}
							<KForm onSubmit={onSubmit}>
								<Stack
									direction='row'
									justifyContent='center'
									alignItems='center'
									mt={4}
									sx={{
										backgroundColor: 'white',
										padding: {
											xs: '2px 10px',
											md: '5px 20px'
										},
										borderRadius: '50px',
										color: '#253D4E',
										position: 'relative',
										maxWidth: {
											xs: '260px',
											md: '400px'
										},
										width: '100%'
									}}
								>
									<FaRegPaperPlane color='secondary.main' />
									<KInput
										name='email'
										placeholder='Your email address'
										sx={{
											'& .MuiOutlinedInput-root': {
												'& fieldset': {
													border: 'none'
												}
											},
											width: '100%'
										}}
									/>
									<Button
										type='submit'
										sx={{
											position: 'absolute',
											right: '-50px',
											borderRadius: '50px',
											padding: {
												xs: '12px 10px',
												md: '13px 20px'
											},
											fontSize: {
												xs: '11px',
												md: '14px'
											},
											textTransform: 'capitalize'
										}}
									>
										Subscribe
									</Button>
								</Stack>
							</KForm>
						</div>
					</Box>
				</Box>
			))}
		</Carousel>
	);
};

export default HeroSection;
