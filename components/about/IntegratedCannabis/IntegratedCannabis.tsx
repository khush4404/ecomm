import Image from "next/image";

export const IntegratedCannabis = () => {
	const featureCards = [
		{
			id: 1,
			title: "Compliance Support",
			description:
				"We help vendors remain legally protected with licensing guidance, document support, compliance monitoring, and industry specific operational standards.",
			icon: "/images/about/customercare.png",
		},
		{
			id: 2,
			title: "Help You Scale",
			description:
				"Our ecosystem unlocks multi-state sourcing, intelligent data insights, and structured systems that help partners expand profitably and sustainably.",
			icon: "/images/about/scale.png",
		},
		{
			id: 3,
			title: "Safe & Reliable Logistics Systems",
			description:
				"Through verified logistics partners, we ensure every order is transported securely, discreetly, and in full compliance from pick up to delivery.",
			icon: "/images/about/right.png",
		},
	];

	return (
		<section className="container mx-auto py-12 lg:py-20 font-sans">
			{/* Main Dark Container */}
			<div className="bg-[#121214] rounded-[30px] md:rounded-[50px] p-6 md:p-12 lg:p-16 border border-gray-800 relative overflow-hidden shadow-2xl">
				{/* --- Top Section: Text & Map --- */}
				{/* 👇 CHANGE: Removed 'order' classes so text comes first naturally */}
				<div className="flex flex-col lg:flex-row gap-3 lg:gap-20 lg:mb-6 items-center">
					{/* Left Column: Typography */}
					<div className="flex flex-col justify-center">
						{/* Rating Badge */}
						<div className="flex items-center gap-3 mb-6">
							<div className="w-10 h-10 rounded-full border border-[#F0BA43] flex items-center justify-center bg-white/5">
								<Image
									src="/images/about/passionlogo.png"
									alt="Passion Farms Logo"
									width={24}
									height={24}
								/>
							</div>
							<div className="flex gap-1">
								<Image
									src="/images/about/star.png"
									alt="Star"
									width={82}
									height={15}
								/>
							</div>
							<span className="text-[#F0BA43] text-sm font-medium ml-1">
								4.5/5
							</span>
						</div>

						{/* Main Heading */}
						<h2 className="sm:text-[42px] sm:leading-[60px] text-[20px] leading-7  font-bold text-white mb-4 md:mb-12 tracking-tight">
							The #1 Integrated Cannabis Marketplace &
							Distribution Network in the U.S.
						</h2>

						{/* Subheading */}
						<p className="text-white text-lg md:text-[24px] md:leading-[60px] font-medium ">
							We are helping 1000s in the industry
						</p>
					</div>

					{/* Right Column: Map Image */}
					<div className="relative h-[250px] sm:h-[350px] lg:h-[400px] w-full flex items-center justify-center">
						<div className="relative w-full h-full">
							<Image
								src="/images/about/map.png"
								alt="US Distribution Map"
								fill
								className="object-contain"
								priority
							/>
						</div>
					</div>
				</div>

				{/* --- Bottom Section: 3 Feature Cards --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-0">
					{featureCards.map((card) => (
						<div
							key={card.id}
							className="bg-[#1A1A1A] sm:p-6 p-4 rounded-[15px] border border-[#4C4744] transition-colors duration-300"
						>
							<div className="flex items-center gap-4 mb-5">
								<div className="p-2.5 rounded-full border-2 border-[#F0BA43] flex items-center justify-center">
									<Image
										src={card.icon}
										alt={card.title}
										width={24}
										height={24}
									/>
								</div>

								<h3 className="text-white font-semibold text-sm sm:text-[16px] leading-5 sm:leading-6">
									{card.title}
								</h3>
							</div>

							<p className="text-white sm:text-sm text-[12px] sm:leading-relaxed leading-4">
								{card.description}
							</p>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};
