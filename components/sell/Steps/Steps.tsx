import React from "react";
import Image from "next/image";
import {
	Play,
	FileText,
} from "lucide-react";

export const Steps = () => {
	// Data for the top colorful steps
	const steps = [
		{
			title: "Register",
			description:
				"Submit your license and business information to activate your secure seller profile and gain access to our marketplace and business ecosystem.",
			actionText: "Watch Video",
			actionIcon: <Play size={14} className="fill-black" />,
			bgColor: "bg-[#FFEBF0]", // Light Pink
			icon: "/images/sell/register.png",
			bgborder: "border-[#FFC7D5]",
		},
		{
			title: "Sell",
			description:
				"List your products and exclusives on our marketplace. Set your store, terms, utilize our logistics partners, and connect directly with buyers from the community.",
			actionText: "Read More",
			actionIcon: <FileText size={14} />,
			bgColor: "bg-[#FFF6E5]", // Light Yellow
			icon: "/images/sell/sellimg.png",
			bgborder: "border-[#FFEAC3]",
		},
		{
			title: "Earn",
			description:
				"Get paid securely and on time. Our managed escrow and payment processing ensures smooth, reliable transactions upon verified delivery.",
			actionText: "Watch Video",
			actionIcon: <Play size={14} className="fill-black" />,
			bgColor: "bg-[#E5F5F2]", // Light Mint
			icon: "/images/sell/earn.png",
			bgborder: "border-[#B1F2E6]",
		},
		{
			title: "Grow",
			description:
				"Unlock higher membership tiers. Access multi-state leads, featured vendor spots, dedicated account support, and back-end system to scale your operation.",
			actionText: "Read more",
			actionIcon: <FileText size={14} />,
			bgColor: "bg-[#FFEEE7]", // Light Peach
			icon: "/images/sell/grow.png",
			bgborder: "border-[#FDD7C8]",
		},
	];

	// Data for the bottom left (Beige) section
	const leftFeatures = [
		{
			title: "100,000 Monthly reach",
			desc: "Show your products to 100,000+ monthly active buyers and industry decision makers.",
			icon: (
				<Image
					src="/images/sell/supermarket.png"
					alt="store"
					width={48}
					height={48}
					className="object-contain"
				/>
			),
		},
		{
			title: "3000+ B2B members",
			desc: "Build partnerships within our verified network of 3,000+ B2B cannabis operators.",
			icon: (
				<Image
					src="/images/sell/group.png"
					width={48}
					height={48}
					className="object-contain"
					alt="group"
				/>
			),
		},
		{
			title: "$10M+ in sales",
			desc: "Scale your revenue in our 10 million in annual sales wholesale marketplace.",
			icon: (
				<Image
					src="/images/sell/bar-graph.png"
					width={48}
					height={48}
					className="object-contain"
					alt="chart"
				/>
			),
		},
		{
			title: "12k+ deliveries",
			desc: "Successfully delivered over 12000+ deliveries across US and now entering Thailand market.",
			icon: (
				<Image
					src="/images/sell/deliver-man.png"
					width={48}
					height={48}
					className="object-contain"
					alt="truck"
				/>
			),
		},
	];

	// Data for the bottom right (White) section
	const rightFeatures = [
		{
			title: "0% Marketplace Fee",
			desc: "Sell freely with full revenue retention. For new sellers we charge zero commission fees on all your sales in our marketplace.",
			icon: "/images/sell/commission.png",
		},
		{
			title: "Free shoutouts to our community",
			desc: "Receive complimentary promotion for your brand to our entire network of verified cannabis business professionals.",
			icon: "/images/sell/corporation.png",
		},
		{
			title: "Up to 70% Discount on Logistics for New sellers",
			desc: "Launch with major savings. New sellers receives a discount of up to 70%.",
			icon: "/images/sell/team.png",
		},
		{
			title: "Dedicated Account Manager After 10 Orders",
			desc: "Unlock personalized guidance. A dedicated expert manages your account and audit your store after ten successful orders.",
			icon: "/images/sell/document.png",
		},
		{
			title: "Access to our business Tools",
			desc: "Complimentary access to our full platform of professional cannabis business management resources for new users.",
			icon: "/images/sell/premium.png",
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans  p-6 md:p-12 lg:p-20 lg:pt-0">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col gap-30">
					{/* === SECTION 1: REGISTRATION STEPS === */}
					<div className="text-center">
						<h2 className="md:text-[28px] text-xl text=[#1D1D1D] font-bold inline-block relative sm:mb-14 mb-0">
							Registration Steps
							{/* Yellow underline effect */}
							<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-50 h-0.5 bg-[#F0BA43] rounded-full"></span>
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 w-full gap-29 md:gap-0 mb-24">
						{steps.map((step, index) => (
							<div
								key={index}
								className={`${step.bgColor} p-8 md:pt-24 pt-12  relative flex flex-col items-center text-center  first:rounded-l-[10px] last:rounded-r-[10px] md:first:rounded-tr-none md:last:rounded-bl-none md:rounded-none rounded-[10px]`}
							>
								{/* Illustration Placeholder (floating top) */}
								<div className="absolute md:-top-28 -top-22 md:w-[207px] w-[163px] md:h-[207px]  flex items-center justify-center">
									{/* In a real app, use <Image /> here */}
									<Image
										src={step.icon}
										width={207}
										height={207}
										alt="register"
									/>
								</div>

								<h3 className="md:text-[28px] text-xl  text-[#1D1D1D] font-bold mb-4 mt-2">
									{step.title}
								</h3>
								<p className="md:text-base text-sm text-[#1D1D1D] leading-relaxed mb-8 grow">
									{step.description}
								</p>

								<button
									className={`${step.bgborder} bg-white text-black text-base font-semibold py-2.5 px-6 rounded-[30px]  border  flex items-center gap-2 transition-colors`}
								>
									{step.actionIcon}
									{step.actionText}
								</button>
							</div>
						))}
					</div>
				</div>

				{/* === SECTION 2: WHY CREATE ACCOUNT === */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
					{/* Left Column (Beige Background) */}
					<div className="bg-[#FFF6E5] p-2 md:p-[30] rounded-3xl border border-[#BBBBBB]">
						<h2 className=" text-xl md:text-4xl font-bold md:mb-4 mb-2.5 text-[#1D1D1D]">
							Why Create a Passion Farms Account?
						</h2>
						<p className="text-[#1D1D1D] text-base md:mb-10 mb-5 font-medium">
							There are endless reasons to sell with passion
							farms. Here are just a few.
						</p>

						<div className="md:space-y-10 space-y-4">
							{leftFeatures.map((item, idx) => (
								<div
									key={idx}
									className="flex gap-4 items-start"
								>
									<div className="mt-1 p-2 bg-orange-100 rounded-lg shrink-0">
										{React.cloneElement(
											item.icon as React.ReactElement
										)}
									</div>
									<div>
										<h4 className="font-bold text-[#1D1D1D] mb-1">
											{item.title}
										</h4>
										<p className="text-sm md:text-base text-text-gray leading-relaxed">
											{item.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column (White Background with Border) */}
					<div className="bg-white p-2 md:p-12 rounded-3xl border border-[#BBBBBB]">
						<div className="md:space-y-5 space-y-4 h-full flex flex-col justify-center">
							{rightFeatures.map((item, idx) => (
								<div
									key={idx}
									className="flex gap-4  items-start"
								>
									<div className="mt-1 shrink-0">
										<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
											{/* {React.cloneElement(
												item.icon as React.ReactElement
											)} */}
											<Image
												src={item.icon}
												width={207}
												height={207}
												alt="register"
											/>
										</div>
									</div>
									<div className="border-b border-[#E8E8E8] md:pb-5 pb-4 w-full">
										<h4 className="font-bold text-[#1D1D1D] text-base mb-1">
											{item.title}
										</h4>
										<p className="md:text-base text-sm text-text-gray leading-relaxed">
											{item.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
