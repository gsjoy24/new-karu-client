'use client';
import dynamic from 'next/dynamic';
const Profile = () => {
	const PrivateRoute = dynamic(() => import('@/components/Shared/PrivateRoute'), {
		ssr: false
	});
	return (
		<PrivateRoute>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, veritatis. Aut, deleniti!
		</PrivateRoute>
	);
};

export default Profile;
