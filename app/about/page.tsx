import { Hero } from "@/components/about/Hero";
import { IntegratedCannabis } from "@/components/about/IntegratedCannabis";
import { LetsGrow } from "@/components/about/LetsGrow";
import { RealStories } from "@/components/about/RealStories";
import { StatsCard } from "@/components/about/StatsCard";
import { Supporting } from "@/components/about/Supporting";
import { TheMinds } from "@/components/about/TheMinds";
import { WeDesigned } from "@/components/about/WeDesigned";

export default function AboutPage() {
	return (
		<>
			<div className="bg-[#FFFBF4] py-20 px-6">
				<Hero />
			</div>
			<div className="container mx-auto px-4 py-16">
				<IntegratedCannabis />
				<Supporting />
				<WeDesigned />
				<StatsCard />
				<RealStories />
				<TheMinds />
				<LetsGrow />
			</div>
		</>
	);
}
