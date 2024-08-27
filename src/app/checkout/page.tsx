'use client';
import { useGetMeQuery } from '@/redux/api/userApi';
const CheckOutPage = () => {
	const { data, isLoading } = useGetMeQuery({});
	console.log(data);
	return (
		<div>
			<h1>This is CheckOutPage component</h1>
		</div>
	);
};

export default CheckOutPage;
