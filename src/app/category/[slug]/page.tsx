'use client';
import { useParams } from 'next/navigation';

const ProductsByCategory = () => {
	const { slug } = useParams();
	return (
		<div>
			<h1>This is ProductsByCategory {slug}</h1>
		</div>
	);
};

export default ProductsByCategory;
