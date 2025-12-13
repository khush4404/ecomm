import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";

export const TheMinds = () => {
	const avatars = [
		"/images/about/people1.png",
		"/images/about/women2.png",
		"/images/about/people2.png",
	];

	return (
		<section className="bg-[#FFF6E5] py-16 md:py-24 px-6 font-sans text-[#1A1A1A]">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
					{/* === LEFT COLUMN: Heading & CTA === */}
					<div className="lg:col-span-5 flex flex-col justify-between">
						<div>
							<h2 className="text-4xl md:text-[64px] leading-20 font-semibold text-[#1D1D1D] mb-21">
								The Minds <br />
								Behind <br />
								the Movement
							</h2>

							{/* Divider Line */}
							<div className="w-full h-[1px] bg-[#E5E5E5]"></div>
						</div>

						<div className="flex flex-col gap-12">
							<p className="text-[#878787] text-[24px] leading-8">
								Driven by Vision. Backed by <br></br>Experience.
							</p>

							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
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
									src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" // Placeholder for Gautham
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
								<h3 className="text-xl font-bold text-[#1D1D1D] mb-3">
									Rise Together Stronger
								</h3>
								<p className="text-sm text-[#1D1D1D] leading-relaxed">
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
								<h3 className="text-xl font-bold text-[#1D1D1D] mb-3">
									Empowering Cannabis Communities
								</h3>
								<p className="text-sm text-[#1D1D1D] leading-relaxed">
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
									src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" // Placeholder for Mike
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
