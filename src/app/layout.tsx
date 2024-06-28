import Header from '@/components/Shared/Header/Header';
import MobileNav from '@/components/Shared/Header/MobileNav/MobileNav';
import Providers from '@/lib/Providers/Providers';
import { Container } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { roboto } from './fonts';
import './globals.css';

export const metadata: Metadata = {
	title: 'Karukon',
	description: 'Karukon is a ecommerce website selling products.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
