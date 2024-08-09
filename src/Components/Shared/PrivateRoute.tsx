'use client';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const PrivateRoute = ({ children }: { readonly children: React.ReactNode }) => {
	const user = useAppSelector((state) => state.auth.user);
	const router = useRouter();
	if (!user) {
		toast.error('You need to login to access this page');
		router.push('/login');
		return;
	}
	return <>{children}</>;
};

export default PrivateRoute;
