import Loader from '@/components/Shared/Loader/Loader';

const Loading = () => {
	return (
		<div className='w-full min-h-[80vh] flex flex-col items-center justify-center gap-10'>
			<Loader />
		</div>
	);
};

export default Loading;
