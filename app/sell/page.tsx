import { Faq } from "@/components/Sell/Faq";
import { FeatureSection } from "@/components/Sell/FeatureSection";
import { Hero } from "@/components/Sell/Hero";
import { MarketplaceLayout } from "@/components/Sell/MarketplaceLayout";
import { Steps } from "@/components/Sell/Steps";
import { Testimonials } from "@/components/Sell/Testimonials";

const SellPage = () => {
	return (
		<>
			<Hero />
			<FeatureSection />
			<Steps />
			<Testimonials />
			<MarketplaceLayout />
			<Faq />
		</>
	);
};

export default SellPage;
