import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header/Header';
import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import config from '@/lib/config';
import Providers from '@/lib/Providers/Providers';
import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { karla } from './fonts';
import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(config.app_url),
	title: {
		default: 'KarukonBD - The largest platform for luxury home decor and gift items',
		template: '%s | KarukonBD'
	},
	description:
		'KarukonBD Online shopping is a online retailing store that thrives to provide it’s customer with the best available product at the lowest possible price.',
	keywords: ['KarukonBD', 'Karukon Online Store', 'Karukon Home Decor', 'Karukon Gift Items'],
	authors: [{ name: 'Gour Saha Joy', url: 'https://github.com/gsjoy24' }],
	twitter: {
		card: 'summary_large_image',
		site: '@karukonbd',
		creator: '@karukonbd',
		images: 'https://res.cloudinary.com/dwgozodq0/image/upload/v1727514747/Untitled-1_2_wub75n.png'
	},
	openGraph: {
		type: 'website',
		title: 'KarukonBD - The largest platform for luxury home decor and gift items',
		description:
			'Karukon BD Online Shopping is a online retailing store that thrives to provide it’s customer with the best available product at the lowest possible price.',
		images: 'https://res.cloudinary.com/dwgozodq0/image/upload/v1727514747/Untitled-1_2_wub75n.png',
		locale: 'en_US',
		url: config.app_url,
		siteName: 'KarukonBD'
	}
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={karla.className}>
					<AppRouterCacheProvider>
						<Container>
							<Header />
							<MobileNav />
							{children}
						</Container>
						<Footer />
						<Toaster
							position='top-center'
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
