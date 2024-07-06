import NotFound from '@/assets/not-found.svg';
import Image from 'next/image';
const NotFoundPage = () => {
	return (
		<div className='flex justify-center items-center py-[50px]'>
			<div>
				<Image src={NotFound} alt='page not found' width={300} height={300} />
				<h1 className='text-2xl font-bold text-center mt-10'>The page you are looking for is not found!</h1>
			</div>
		</div>
	);
};

export default NotFoundPage;
