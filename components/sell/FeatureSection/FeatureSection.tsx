import React from "react";
import { MapPin, Truck, ShieldCheck, Headset } from "lucide-react"; // Ensure you have lucide-react installed
import Image from "next/image";

export const features = [
	{
		title: "Multi State Distribution",
		description:
			"Expand your brand reach seamlessly into compliant, high demand markets across multiple states.",
		icon: "/images/sell/shop.png", // Placeholder for the map/truck icon
		bgColor: "bg-orange-50",
	},
	{
		title: "Secure Logistics & Payment Network",
		description:
			"Complete transactions with guaranteed secure shipping and fraud-protected payments. Escrow based payments for high ticket orders.",
		icon: "/images/sell/logistics.png", // Placeholder for logistics icon
		bgColor: "bg-blue-50",
	},
	{
		title: "Trust & Compliance Framework",
		description:
			"Build trust instantly with our comprehensive compliance and verification system.",
		icon: "/images/sell/frame.png", // Placeholder for compliance icon
		bgColor: "bg-teal-50",
	},
	{
		title: "End-to-end backend support",
		description:
			"Optimize operations with our complete backend service and software stack.",
		icon: "/images/sell/support.png", // Placeholder for support icon
		bgColor: "bg-indigo-50",
	},
];

export const FeatureSection = () => {
	return (
		<div className="w-full max-w-7xl my-22 mx-auto  ">
			<div className="grid grid-cols-1 mx-6 md:grid-cols-2 gap-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex items-start md:p-10 p-4  bg-[#FFFFFF] border border-[#000000] rounded-[10px]"
					>
						{/* Icon Container */}
						<div
							className={`flex-shrink-0 p-3 items-center rounded-full mr-4 ${feature.bgColor}`}
						>
							<Image
								src={feature.icon}
								alt={feature.title}
								width={40}
								height={40}
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
