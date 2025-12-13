import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const Supporting = () => {
	return (
		<section className="bg-white py-12 lg:py-24 font-sans">
			{/* 👇 CHANGE: Used 'container' class here */}
			<div className="container mx-auto px-6">
				{/* --- Header Section --- */}
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-12 lg:mb-20">
					<div className="lg:w-1/2">
						<h2 className="text[20px] sm:text-[42px] sm:leading-15 leading-7 items-center justify-center  font-bold text-[#1D1D1D]">
							<span className="block">We are Supporting </span>
							<span className="block">Cannabis Sellers at</span>
							<span className="block">Every Stage of Growth</span>
						</h2>
					</div>
					<div className="lg:w-1/2">
						<p className="text-[#6B7280] text-[12px] md:text-lg sm:leading-8  leading-5">
							Every feature in our ecosystem is designed to solve
							a seller’s problem, ensure compliance, and unlock
							new levels of profitability. We simplify your
							workflow, boost your credibility, and help you to
							grow from small operations into profitable brands,
							and we also deliver retail users premium cannabis
							products safely, securely, and on time.
						</p>
					</div>
				</div>

				{/* --- Cards Grid --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
					{/* Card 1: Market Entry */}
					<div className="bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-[#1D1D1D] leading-10 mb-8">
								Market Entry
							</h3>
							<p className="text-[#1D1D1D] leading-[26px] mb-6 text-[16px]">
								Our platform makes entering the cannabis
								industry simple, offering seamless access to
								verified suppliers, buyers, community support,
								and essential business tools.
							</p>
						</div>
						<div className="relative z-10">
							<button className="bg-[#F0BA43] hover:bg-[#dca335] text-[#1D1D1D] font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all">
								Explore Marketplace <ArrowRight size={18} />
							</button>
						</div>

						{/* Flower Watermark Image */}
						<div className="absolute -bottom-11 -right-8 w-48 h-48 opacity-[0.15] pointer-events-none">
							<Image
								src="/images/about/Flowerimage.png" // Replace with your flower image path
								alt="Cannabis Leaf"
								width={177}
								height={160}
								className="object-contain"
							/>
						</div>
					</div>

					{/* Card 2: Storefront Support (Yellow) */}
					<div className="bg-[#EAB345] rounded-[20px] p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-[#1D1D1D] leading-10 mb-8">
								Storefront Support
							</h3>
							<p className="text-[#1D1D1D] leading-[26px] mb-6 text-[16px]">
								At Passionfarms, we empower sellers to launch
								compliant storefronts effortlessly with guided
								onboarding, marketplace setup, visibility tools,
								and long term operational support.
							</p>
						</div>
						<div className="relative z-10">
							<button className="bg-white hover:bg-gray-50 text-[#1D1D1D] font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all">
								Join the Community <ArrowRight size={18} />
							</button>
						</div>

						{/* Flower Watermark Image (Darker blend for yellow bg) */}
						<div className="absolute -bottom-11 -right-8 w-48 h-48 opacity-[0.15] pointer-events-none">
							<Image
								src="/images/about/Flowerimage.png" // Replace with your flower image path
								alt="Cannabis Leaf"
								width={177}
								height={160}
								className="object-contain"
							/>
						</div>
					</div>

					{/* Card 3: Right Leads */}
					<div className="bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden flex flex-col justify-between h-full">
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-[#1D1D1D] leading-10 mb-8">
								Connect You With the Right Leads
							</h3>
							<p className="text-[#1D1D1D] leading-[26px] mb-6 text-[16px]">
								Grow faster through our verified lead network
								that matches sellers with real, high intent
								buyers seeking premium, compliant cannabis
								products.
							</p>
						</div>
						<div className="relative z-10">
							<button className="bg-[#F0BA43] hover:bg-[#dca335] text-[#1D1D1D] font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all">
								Start Automating <ArrowRight size={18} />
							</button>
						</div>

						{/* Flower Watermark Image */}
						<div className="absolute -bottom-11 -right-8 w-48 h-48 opacity-[0.15] pointer-events-none">
							<Image
								src="/images/about/Flowerimage.png" // Replace with your flower image path
								alt="Cannabis Leaf"
								width={177}
								height={160}
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
