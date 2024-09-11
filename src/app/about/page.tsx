import { Box, Container, Divider, List, ListItem, Typography } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Us | Karukon',
	description:
		'Karukon is a trusted online retail platform dedicated to offering the finest products at unbeatable prices.'
};

const AboutPage = () => {
	return (
		<Container maxWidth='md' sx={{ py: 4 }}>
			<Box mb={4}>
				<Typography variant='h4' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					About Us
				</Typography>
				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Karukon is a trusted online retail platform dedicated to offering the finest products at unbeatable prices.
					Our priority is delivering exceptional customer service and ensuring complete satisfaction, making
					high-quality shopping accessible for everyone.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h6' component='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
					Our journey started from a simple and clear thought
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Our journey started from a simple and clear thought Shopping in Bangladesh is a complex and time-consuming
					task that often becomes inconvenient for customers. Five major reasons contribute to these challenges:
				</Typography>

				<List>
					<ListItem>
						Severe traffic congestion in cities wastes a lot of time, making it more difficult for busy individuals.
					</ListItem>
					<ListItem>
						The absence of fixed prices for products confuses customers and increases the risk of potential fraud.
					</ListItem>
					<ListItem>
						It becomes difficult to verify the quality of products due to the dishonesty of many sellers. Customer
						satisfaction is not prioritized, as commitments and warranties are rarely honored, reflecting a lack of care
						for customers.
					</ListItem>
					<ListItem>
						Limited product variety restricts choices, and customers living outside urban areas often struggle to find
						the products they need, as they are not easily available in local stores.
					</ListItem>
				</List>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					To address these issues and provide customers with a hassle-free and enjoyable shopping experience, Our
					mission is focused on solving these problems and improving the shopping experience for all.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h6' component='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
					Our Core Mission
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					At Karukon, our core mission is to address customer problems and prioritize their needs with unwavering
					dedication. We recognize the challenges faced by our customers and treat their issues as our own, working
					diligently to resolve them.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Since our inception, we have placed a strong emphasis on building and maintaining customer trust. Our
					zero-tolerance policy for trust-related concerns ensures that we consistently deliver on our commitments,
					allowing our customers to rely on us with confidence.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					We understand the importance of a convenient and swift shopping experience. That’s why we offer urgent and
					expedited delivery services, both within Dhaka and beyond. In Dhaka, we strive to provide deliveries within a
					few hours and offer urgent gift delivery options. For areas outside Dhaka, we have various shipping solutions
					to ensure prompt delivery.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Ensuring the safety of your products during transit is crucial to us. We take precautions by using bubble or
					foam wrapping to protect items and double-wrap products for deliveries outside Dhaka, ensuring they arrive in
					pristine condition.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Our commitment to transparent and fair pricing means we maintain a fixed pricing structure to prevent
					discrepancies and unfair practices. We also offer regular discount promotions, communicated monthly to provide
					opportunities for savings. We are dedicated to delivering high-quality products and offer detailed information
					about the origin of each item. Whether a product is imported from China or Türkiye, we provide clear
					information to ensure transparency.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					In addition, we offer hassle-free warranty support. Should any issues arise, we promptly process warranty
					claims to ensure a swift resolution. Our flexible 7-day return/refund/exchange policy further reflects our
					commitment to customer satisfaction, allowing you to resolve any concerns with ease.
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					By focusing on these principles, we aim to provide a seamless and enjoyable shopping experience, making every
					interaction with us as pleasant and efficient as possible.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h6' component='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
					Our Vision
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Our vision is to be the leading provider of exceptional home decor solutions that inspire and transform spaces
					into personal havens of comfort and style. We aspire to redefine the home decor industry by setting new
					standards for quality, innovation, and customer satisfaction. Our goal is to empower individuals to create
					their ideal living environments through an unparalleled selection of products, cutting-edge design, and a
					seamless shopping experience. We are committed to continuously evolving and adapting to meet the needs of our
					customers, ensuring that every interaction with us brings joy and enhances the beauty of their homes.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h6' component='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
					Contact Us
				</Typography>

				<Typography variant='body1' sx={{ color: 'text.secondary' }}>
					Phone: +8801766892662
					<br />
					Email: <Link href='mailto:karukon7@gmail.com'> karukon7@gmail.com</Link>
				</Typography>
			</Box>
		</Container>
	);
};

export default AboutPage;
