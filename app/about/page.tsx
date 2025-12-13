import { Hero } from "@/components/about/Hero";
import { IntegratedCannabis } from "@/components/about/IntegratedCannabis";
import { LetsGrow } from "@/components/about/LetsGrow";
import { RealStories } from "@/components/about/RealStories";
import { Supporting } from "@/components/about/Supporting";
import { TheMinds } from "@/components/about/TheMinds";
import { WeDesigned } from "@/components/about/WeDesigned";

export default function AboutPage() {
	return (
		<div className="container bg-[#FFFBF4]  mx-auto px-4 py-16">
			<Hero />
			<IntegratedCannabis />
			<Supporting />
			<WeDesigned />
			<RealStories />
			<TheMinds />
			<LetsGrow />
		</div>
	);
}
