'use client';
import Loading from '@/app/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const user = useAppSelector((state) => state.auth.user);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			toast.error('You need to login to access this page');
			router.push('/login');
		}
	}, [user, router]);

	if (!user) {
		return <Loading />;
	}

	return <>{children}</>;
};

export default PrivateRoute;
