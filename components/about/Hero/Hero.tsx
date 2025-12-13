import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Placeholder image source (replace with your actual image file)
const heroImage = "/path/to/your/store_image.jpg";

export const Hero = () => {
	return (
		<div className="">
			<div className="bg-[#FFFBF4]">
				<div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
					{/* Main Grid: 2 columns on medium screens and up */}
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 items-center">
						{/* Left Column: Text and Button */}
						<div>
							<h1 className="md:text-4xl text-2xl text-center md:text-start md:text-[42px] items-start font-extrabold text-[#1D1D1D] md:mb-10 mb-4 leading-tight">
								The Network <br />
								That Powers Cannabis <br />
								Commerce
							</h1>

							<p className="md:text-xl text-[12px] text-center md:text-start text-[#000000] md:mb-15 mb-6 max-w-lg">
								We Passion Farms is the fastest growing
								all-in-one ecosystem. Where verified suppliers,
								elite operators, and ambitious entrepreneurs
								scale through trust, compliance, and real
								business connections.
							</p>
							<div className="text-center">
								<button className="md:px-10 md:py-4 px-8 py-3 md:text-2xl text-[12px]  rounded-[32px] font-semibold text-white bg-[#F0BA43]">
									Book a Call
								</button>
							</div>
						</div>

						{/* Right Column: Image and Stats */}
						<div className="flex flex-col space-y-6">
							{/* Image Container with Graph Overlay */}
							<div className="relative w-full h-auto">
								{/* Replace with Next/Image and your actual image source */}
								<div className="rounded-xl h-[357px] overflow-hidden">
									<Image
										src="/images/about/heroimg.png" // Change this to your actual image path
										alt="People working in a cannabis store"
										width={600}
										height={450}
										layout="responsive"
										objectFit="cover"
										className=" "
									/>
								</div>

								{/* Mock Graph Overlay (positioned absolutely) */}
								<div className="absolute right-17 bottom-12 translate-x-1/4 translate-y-1/4 p-4 bg-white rounded-lg shadow-xl border border-gray-100 w-[180px] md:w-[220px]">
									<div className="text-[12px] font-semibold text-[#878787]">
										Sales
									</div>
									<div className="flex justify-between items-center mb-2">
										<span className="text-sm text-[#000000s] font-bold">
											$20,560.00
										</span>
										<span className="text-xs text-[#878787]">
											Oct - Feb ▼
										</span>
									</div>
									{/* Mock Graph Line */}
									<div className="h-10">
										<Image
											src="/images/about/Vector 8.png" // Change this to your actual image path
											alt="People working in a cannabis store"
											width={600}
											height={450}
											layout="responsive"
											objectFit="cover"
											className="h-10 "
										/>
									</div>
									<div className="text-center text-xs text-text-grays mt-1">
										15:00
									</div>
								</div>
							</div>

							{/* Stats Boxes */}
							<div className="flex   justify-between w-full md:space-x-6 space-x-1">
								{/* Clients Stat Box */}
								<div className="flex  w-full flex-col border border-[#F0BA43] justify-center items-center  p-4 bg-[#F0BA4333] rounded-xl">
									<div className="md:text-5xl text-2xl font-bold text-[#F0BA43]">
										5,400+
									</div>
									<div className="text-[#000000] text-base md:text-[24px]   text-center">
										Clients
									</div>
								</div>

								{/* Contribution Stat Box */}
								<div className="relative w-full flex flex-col justify-center items-center  p-4 bg-[#F0BA43] rounded-xl">
									<ArrowUpRight className="absolute rounded-lg top-3 right-3 w-5 h-5 text-[#F0BA43] bg-[#FCEED1]" />
									<div className="md:text-5xl text-2xl  font-bold text-[#FFFFFF]">
										50K+
									</div>
									<div className="text-[#FFFFFF] md:text-2xl text-base mt-2 text-center text-sm">
										Contribution in the last year
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-[100px]">
				<p className="text-center text-[#878787] pb-10">
					Trusted by Thousands of Cannabis Operators Across the
					Country
				</p>
				<div className="md:w-22 w-11 flex justify-center  mx-auto md:gap-15 gap-5 ">
					<Image
						src="/images/about/logo.png" // Change this to your actual image path
						alt="People working in a cannabis store"
						width={60}
						height={40}
						layout="responsive"
						objectFit="cover"
						className=" "
					/>
					<Image
						src="/images/about/logo2.png" // Change this to your actual image path
						alt="People working in a cannabis store"
						width={60}
						height={40}
						layout="responsive"
						objectFit="cover"
						className=" "
					/>
					<Image
						src="/images/about/logo3.png" // Change this to your actual image path
						alt="People working in a cannabis store"
						width={60}
						height={40}
						layout="responsive"
						objectFit="cover"
						className=" "
					/>
					<Image
						src="/images/about/logo4.png" // Change this to your actual image path
						alt="People working in a cannabis store"
						width={60}
						height={40}
						layout="responsive"
						objectFit="cover"
						className=" "
					/>
					<Image
						src="/images/about/logo5.png" // Change this to your actual image path
						alt="People working in a cannabis store"
						width={60}
						height={40}
						layout="responsive"
						objectFit="cover"
						className=" "
					/>
				</div>
			</div>
		</div>
	);
};
