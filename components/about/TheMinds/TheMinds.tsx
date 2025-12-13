import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";

export const TheMinds = () => {
	const avatars = [
		"/images/about/people1.png",
		"/images/about/women2.png",
		"/images/about/people2.png",
	];

	return (
		<section className="bg-[#FFF6E5] mb-12 py-8 md:py-10 md:px-6 font-sans text-[#1A1A1A] rounded-2xl">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
					{/* === LEFT COLUMN: Heading & CTA === */}
					<div className="lg:col-span-5 flex flex-col justify-between md:border-r-2 border-[#DEDDDCB2] ">
						<div>
							<h2 className="text-4xl hidden md:block md:text-[64px] leading-20 font-semibold text-[#1D1D1D] mb-21">
								The Minds <br />
								Behind <br />
								the Movement
							</h2>
							<h2 className="text-xl text-[#1D1D1D] text-center block md:hidden">
								The Minds
								<br /> Behind the Movement
							</h2>

							{/* Divider Line */}
							<div className="w-full h-[1px] hidden md:block bg-[#E5E5E5]"></div>
						</div>

						<div className="flex flex-col gap-12">
							<p className="text-[#878787] md:text-[24px] hidden md:block text-sm leading-8">
								Driven by Vision. Backed by <br></br>Experience.
							</p>
							<p className="text-[#878787] mt-4 block md:hidden text-center md:text-[24px] text-sm leading-8">
								Driven by Vision. Backed by Experience.
							</p>

							<div className="flex hidden md:block flex-col sm:flex-row items-start sm:items-center gap-3">
								{/* Book Call Button */}
								<button className="bg-[#F0BA43] text-[#1D1D1D] font-bold pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:shadow-lg transition-all duration-300">
									<span>Book a Call</span>
									<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
										<ArrowRight size={20} />
									</div>
								</button>

								{/* Avatar Stack */}
								<div className="flex items-center">
									<div className="flex -space-x-3">
										{avatars.map((src, idx) => (
											<div
												key={idx}
												className="w-10 h-10 rounded-full border-2 border-[#FFF9F0] relative overflow-hidden"
											>
												<Image
													src={src}
													alt={`Team ${idx + 1}`}
													fill
													className="object-cover"
												/>
											</div>
										))}
									</div>
									<div className=" ml-[-0.75rem] w-10 h-10 rounded-full bg-[#D4D4D4] flex items-center justify-center text-xs font-bold text-[#1D1D1D] border-2 border-[#FFF9F0]">
										+20
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* === RIGHT COLUMN: Bento Grid of People & Text === */}
					<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* --- Column 1 --- */}
						<div className="flex flex-col gap-6">
							{/* Card: Gautham (CEO) */}
							<div className="relative w-full h-[320px] md:h-[380px] rounded-[32px] overflow-hidden">
								<Image
									src="/images/about/Gautam.png"
									alt="Gautham CEO"
									fill
									className="object-cover"
								/>
								{/* Name Badge */}
								<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center justify-between min-w-[140px]">
									<div>
										<p className="font-bold text-[#1D1D1D] text-sm">
											Gautham
										</p>
										<p className="text-[10px] text-gray-600 uppercase">
											CEO
										</p>
									</div>
									<div className="bg-black text-white rounded-full p-0.5">
										<Check size={12} strokeWidth={4} />
									</div>
								</div>
							</div>

							{/* Card: Purple Text */}
							<div className="bg-[#D4CBE5] p-8 rounded-[32px] flex flex-col justify-center min-h-[240px]">
								<h3 className="md:text-2xl text-xl font-bold text-[#1D1D1D] mb-3">
									Rise Together Stronger
								</h3>
								<p className="md:text-base text-sm text-[#1D1D1D] leading-relaxed">
									This industry thrives when we lift each
									other up, not just when we close a deal. We
									built this community to be the rising tide
									that lifts all serious boats.
								</p>
							</div>
						</div>

						{/* --- Column 2 --- */}
						<div className="flex flex-col gap-6">
							{/* Card: Green Text */}
							<div className="bg-[#E3F5E0] p-8 rounded-[32px] flex flex-col justify-center min-h-[240px]">
								<h3 className="md:text-2xl text-xl font-bold text-[#1D1D1D] mb-3">
									Empowering Cannabis Communities
								</h3>
								<p className="md:text-base text-sm text-[#1D1D1D] leading-relaxed">
									Cannabis is more than a plant. It&apos;s a
									platform for community, wellness, and
									economic empowerment. We are here to ensure
									the professionals building this future have
									the tools to thrive.
								</p>
							</div>

							{/* Card: Mike (Director) */}
							<div className="relative w-full h-[320px] md:h-[380px] rounded-[32px] overflow-hidden">
								<Image
									src="/images/about/mike.png" // Placeholder for Mike
									alt="Mike Director"
									fill
									className="object-cover"
								/>
								{/* Name Badge */}
								<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center justify-between min-w-[140px]">
									<div>
										<p className="font-bold text-[#1D1D1D] text-sm">
											Mike
										</p>
										<p className="text-[10px] text-gray-600 uppercase">
											Director
										</p>
									</div>
									<div className="bg-black text-white rounded-full p-0.5">
										<Check size={12} strokeWidth={4} />
									</div>
								</div>
							</div>
							<div className="flex block md:hidden   flex-col sm:flex-row items-center sm:items-center gap-3">
								{/* Book Call Button */}
								<button className="bg-[#F0BA43] text-xs text-[#1D1D1D] font-bold pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:shadow-lg transition-all duration-300">
									<span>Book a Call</span>
									<div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
										<ArrowRight size={20} />
									</div>
								</button>

								{/* Avatar Stack */}
								<div className="flex items-center">
									<div className="flex -space-x-3">
										{avatars.map((src, idx) => (
											<div
												key={idx}
												className="w-10 h-10 rounded-full border-2 border-[#FFF9F0] relative overflow-hidden"
											>
												<Image
													src={src}
													alt={`Team ${idx + 1}`}
													fill
													className="object-cover"
												/>
											</div>
										))}
									</div>
									<div className=" ml-[-0.75rem] w-10 h-10 rounded-full bg-[#D4D4D4] flex items-center justify-center text-xs font-bold text-[#1D1D1D] border-2 border-[#FFF9F0]">
										+20
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
