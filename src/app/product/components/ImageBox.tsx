'use client';
import KImageGallery from '@/components/Shared/KImageGallery/KImageGallery';
const ImageBox = ({
	productImages
}: {
	productImages: {
		original: string;
		thumbnail: string;
	}[];
}) => {
	return <KImageGallery productImages={productImages} />;
};
export default ImageBox;
