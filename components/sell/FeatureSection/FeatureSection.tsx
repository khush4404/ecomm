import Image from "next/image";

export const features = [
	{
		title: "Multi State Distribution",
		description:
			"Expand your brand reach seamlessly into compliant, high demand markets across multiple states.",
		icon: "/images/sell/shop.png", // Placeholder for the map/truck icon
	},
	{
		title: "Secure Logistics & Payment Network",
		description:
			"Complete transactions with guaranteed secure shipping and fraud-protected payments. Escrow based payments for high ticket orders.",
		icon: "/images/sell/logistics.png", // Placeholder for logistics icon
	},
	{
		title: "Trust & Compliance Framework",
		description:
			"Build trust instantly with our comprehensive compliance and verification system.",
		icon: "/images/sell/frame.png", // Placeholder for compliance icon
	},
	{
		title: "End-to-end backend support",
		description:
			"Optimize operations with our complete backend service and software stack.",
		icon: "/images/sell/support.png", // Placeholder for support icon
	},
];

export const FeatureSection = () => {
	return (
		<div className="w-full max-w-7xl my-11 md:my-22 mx-auto">
			<div className="grid grid-cols-1 mx-6 md:grid-cols-2 gap-4 md:gap-5">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex items-start md:p-10 p-4  bg-[#FFFFFF] border border-black rounded-[10px]"
					>
						{/* Icon Container */}
						<div
							className={`shrink-0 p-1 md:p-3 items-center rounded-full mr-4`}
						>
							<Image
								src={feature.icon}
								alt={feature.title}
								width={80}
								height={80}
								className="md:h-full h-8 md:w-full w-8"
							/>
						</div>

						{/* Text Content */}
						<div>
							<h3 className="md:text-xl text-base font-bold text-[#1D1D1D] mb-2">
								{feature.title}
							</h3>
							<p className="text-text-gray text-sm md:text-xl leading-relaxed">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
