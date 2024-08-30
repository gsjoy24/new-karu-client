import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header/Header';
import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import Providers from '@/lib/Providers/Providers';
import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { roboto } from './fonts';
import './globals.css';

export const metadata: Metadata = {
	title: 'Karukon BD - a e-commerce website',
	description:
		'Karukon BD (কারুকোণ বিডি) Online Shopping is a online retailing store that thrives to provide it’s customer with the best available product at the lowest possible price.',
	keywords: 'Karukon BD, কারুকোণ বিডি, home decor, online shop, cynor',
	authors: [{ name: 'Karukon' }],
	twitter: {
		card: 'summary_large_image',
		site: '@karukonbd',
		creator: '@karukonbd',
		images: 'https://i.ibb.co/Ny8hxKS/Karukon-logo.png'
	},
	openGraph: {
		type: 'website',
		title: 'Karukon BD - a e-commerce website',
		description:
			'Karukon BD (কারুকোণ বিডি) Online Shopping is a online retailing store that thrives to provide it’s customer with the best available product at the lowest possible price.',
		images: 'https://i.ibb.co/Ny8hxKS/Karukon-logo.png'
	}
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={roboto.className}>
					<AppRouterCacheProvider>
						<Container>
							<Header />
							<MobileNav />
							{children}
						</Container>
						<Footer />
						<Toaster
							toastOptions={{
								style: { background: '#242D39', color: '#fff' }
							}}
						/>
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
