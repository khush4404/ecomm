import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const Supporting = () => {
	const cardsData = [
		{
			id: 1,
			title: "Market Entry",
			description:
				"Our platform makes entering the cannabis industry simple, offering seamless access to verified suppliers, buyers, community support, and essential business tools.",
			bg: "bg-white",
			border: "border border-gray-200",
			buttonBg: "bg-[#F0BA43] hover:bg-[#dca335]",
			buttonText: "text-white",
			buttonLabel: "Explore Marketplace",
		},
		{
			id: 2,
			title: "Storefront Support",
			description:
				"At Passionfarms, we empower sellers to launch compliant storefronts effortlessly with guided onboarding, marketplace setup, visibility tools, and long term operational support.",
			bg: "bg-[#EAB345]",
			border: "",
			buttonBg: "bg-white hover:bg-gray-50",
			buttonText: "text-[#1D1D1D]",
			buttonLabel: "Join the Community",
		},
		{
			id: 3,
			title: "Connect You With the Right Leads",
			description:
				"Grow faster through our verified lead network that matches sellers with real, high intent buyers seeking premium, compliant cannabis products.",
			bg: "bg-white",
			border: "border border-gray-200",
			buttonBg: "bg-[#F0BA43] hover:bg-[#dca335]",
			buttonText: "text-white",
			buttonLabel: "Start Automating",
		},
	];

	return (
		<section className="bg-white py-12 lg:py-24 font-sans">
			{/* 👇 CHANGE: Used 'container' class here */}
			<div className="container mx-auto md:px-6">
				{/* --- Header Section --- */}
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mb-8 lg:mb-20">
					<div className="lg:w-1/2">
						<h2 className="text-[20px] hidden md:block lg:text-start text-center sm:text-[42px] sm:leading-15 leading-7 items-center justify-center  font-bold text-[#1D1D1D]">
							We are Supporting <br />
							Cannabis Sellers at
							<br />
							Every Stage of Growth
							<br />
						</h2>
						<h2 className="text-[20px] block md:hidden text-center items-center justify-center  font-bold text-[#1D1D1D]">
							We are Supporting Cannabis <br /> Sellers at Every
							Stage of Growth
						</h2>
					</div>
					<div className="lg:w-1/2">
						<p className="text-[#6B7280] text-center md:text-start text-[12px] md:text-lg sm:leading-8  leading-5">
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
					{cardsData.map((card) => (
						<div
							key={card.id}
							className={`${card.bg} ${card.border} rounded-[20px] md:p-8 p-7 relative overflow-hidden flex flex-col justify-between h-full`}
						>
							<div className="relative z-10">
								<h3 className="md:text-2xl text-xl font-bold text-[#1D1D1D] leading-10 md:mb-8 mb-4">
									{card.title}
								</h3>

								<p className="text-[#1D1D1D] leading-[26px] mb-6 md:text-base text-xs">
									{card.description}
								</p>
							</div>

							<div className="relative z-10">
								<button
									className={`${card.buttonBg} ${card.buttonText} md:text-base text-xs font-semibold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all`}
								>
									{card.buttonLabel}
									<ArrowRight size={18} />
								</button>
							</div>

							{/* Watermark Image */}
							<div className="absolute -bottom-11 -right-8 w-48 h-48 opacity-[0.15] pointer-events-none">
								<Image
									src="/images/about/Flowerimage.png"
									alt="Cannabis Leaf"
									width={177}
									height={160}
									className="object-contain"
								/>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};
