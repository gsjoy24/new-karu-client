import HeroSection from '@/components/Home/HeroSection/HeroSection';
import NewArrivals from '@/components/Home/NewArrivals/NewArrivals';
import SubCategoryCollection from '@/components/Home/SubCategoryCollection/SubCategoryCollection';
import Messenger from '@/components/Shared/Messenger';

export default function Home() {
	return (
		<>
			<HeroSection />
			<SubCategoryCollection />
			<NewArrivals />
			<Messenger />
		</>
	);
}
