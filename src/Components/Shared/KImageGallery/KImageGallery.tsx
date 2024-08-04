import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const KImageGallery = ({ productImages }: { productImages: { original: string; thumbnail: string }[] }) => {
	return <ImageGallery items={productImages} lazyLoad={true} thumbnailPosition={'bottom'} />;
};

export default KImageGallery;
