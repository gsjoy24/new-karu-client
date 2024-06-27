import Header from '@/Components/Shared/Header/Header';
import Providers from '@/lib/Providers/Providers';
import { Container, Divider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

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
							{children}
						</Container>
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
