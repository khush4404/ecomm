import React from "react";
import Image from "next/image";
import { Star, Quote, ArrowRight, MoveRight } from "lucide-react";

export const Testimonials = () => {
	return (
		<section className="bg-white py-5 px-6 md:px-12 px-5 font-sans text-[#1A1A1A]">
			<div className="max-w-7xl mx-auto">
				{/* --- Header --- */}
				<div className="text-center mb-8">
					<h2 className="md:text-4xl text-xl text-[#1D1D1D] md:text-4xl font-bold">
						Testimonials
					</h2>
				</div>

				{/* --- Top Row: Awards/Recognition --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-9 mb-3">
					{/* Award Card 1 */}
					<div className="border rounded-xl p-6 flex flex flex-row items-center md:items-start gap-4 ">
						<div className="flex gap-1.5 w-16 h-16 relative flex-shrink-0">
							{/* Placeholder for Logo */}
							<div className="w-full h-full  rounded-full flex items-center justify-center text-xs font-bold">
								<img
									src="/images/sell/clandestion.png"
									alt=""
								/>
							</div>
							{/* <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star
										key={i}
										size={14}
										className="fill-yellow-400 text-yellow-400"
									/>
								))}
								<span className="text-xs text-gray-400 ml-1">
									4.9 Reviews
								</span>
							</div> */}
						</div>
						<div className="text-center md:text-left">
							{/* <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star
										key={i}
										size={14}
										className="fill-yellow-400 text-yellow-400"
									/>
								))}
								<span className="text-xs text-gray-400 ml-1">
									4.9 Reviews
								</span>
							</div> */}
							<h3 className="font-bold text-[#1D1D1D] md:text-base text-sm mb-1">
								Top Rated
							</h3>
							<p className="text-sm text-text-gray leading-tight">
								The highest quality results and client
								satisfaction.
							</p>
						</div>
					</div>

					{/* Award Card 2 */}
					<div className="border border-gray-200 rounded-xl p-6 flex flex-row items-center md:items-start gap-4 hover:shadow-lg transition-shadow">
						<div className="w-24 h-12 relative flex-shrink-0 flex items-center">
							<div className="text-xl font-bold text-green-600 tracking-tight flex items-center gap-1">
								<img
									src="/public/images/sell/kushable.png"
									alt=""
									className=""
								/>
							</div>
						</div>
						<div className="text-center md:text-left">
							<h3 className="font-bold text-sm md:text-base text-[#1D1D1D] mb-1">
								Excellent Strains
							</h3>
							<p className="text-sm text-text-gray leading-tight">
								Best Formulations companies in Canada 2023.
							</p>
						</div>
					</div>

					{/* Award Card 3 */}
					<div className="border border-gray-200 rounded-xl p-6 flex flex-row md:flex-row items-center md:items-start gap-4">
						<div className="w-20 h-10 relative flex-shrink-0 flex items-center justify-center  text-green-400 font-black italic tracking-tighter text-lg px-2 rounded">
							<img
								src="/images/sell/weed.png"
								alt="Award Logo"
								className="object-contain h-full"
							/>
						</div>
						<div className="text-center md:text-left">
							<h3 className="font-bold text-sm md:text-base text-[#1D1D1D] mb-1">
								Top Rated
							</h3>
							<p className="text-sm text-text-gray leading-tight">
								The highest quality results and client
								satisfaction.
							</p>
						</div>
					</div>
				</div>

				{/* --- Section Divider Text --- */}
				<div className="md:mb-7 mb-4">
					<p className="md:text-base text-sm uppercase tracking-wide text-[#1D1D1D] font-semibold mb-2">
						What Our Partners Say
					</p>
					<p className="md:text-base text-sm  text-text-gray font-light">
						Trust Built on Performance.
					</p>
				</div>

				{/* --- Bottom Row: Partner Testimonials --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
					{/* Testimonial 1 */}
					<div className="flex flex-col group">
						<div className="relative h-[253px] bg-[#000000] rounded-2xl flex items-center justify-center p-8 md:mb-8 mb-6 overflow-visible">
							<h3 className="text-white text-3xl font-black text-center leading-none uppercase tracking-tighter">
								MOON
								<br />
								ROCK
							</h3>
							{/* Floating Profile Badge */}
							<div className="absolute bottom-0 left-0 bg-white py-2 px-3 rounded-lg shadow-md border border-gray-100 flex items-center gap-3 z-10">
								<div className="w-10 h-10 rounded bg-gray-200 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
										alt="Marcus"
										fill
										className="object-cover"
									/>
								</div>
								<div className="leading-tight">
									<p className="font-bold text-sm">Marcus</p>
									<p className="text-xs text-gray-500">CEO</p>
								</div>
							</div>
						</div>
						<div className="px-2">
							<Quote
								className="fill-black text-black mb-4 rotate-180"
								size={24}
							/>
							<p className="text-text-gray mb-4 text-base leading-relaxed md:text-base text-sm">
								Since I started supplying through Passion Farms,
								Started getting sales. The payments are made on
								time, and the community level on demand is
								invaluable.
							</p>
							<p className="font-semibold md:text-base text-sm text-[#1D1D1D] mb-2">
								Marcus T., Business Owner
							</p>
							<a
								href="#"
								className="inline-flex items-center text-sm font-semibold hover:text-orange-500 transition-colors gap-1 text-[#1D1D1D]"
							>
								Read more{" "}
								<div className="bg-[#FFF9F0] p-1 rounded-full">
									<MoveRight
										size={12}
										className="text-orange-500"
									/>
								</div>
							</a>
						</div>
					</div>

					{/* Testimonial 2 */}
					<div className="flex flex-col group">
						<div className="relative h-[253px] bg-[#1D1D1D] rounded-2xl flex items-center justify-center p-8 md:mb-8 mb-6  overflow-visible">
							<h3 className="text-white text-3xl font-serif text-center">
								Proper
								<br />
								Cannabis
							</h3>
							{/* Floating Profile Badge */}
							<div className="absolute bottom-0 left-0 bg-white py-2 px-3 rounded-lg shadow-md border border-gray-100 flex items-center gap-3 z-10">
								<div className="w-10 h-10 rounded bg-gray-200 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop"
										alt="Javier"
										fill
										className="object-cover"
									/>
								</div>
								<div className="leading-tight">
									<p className="font-bold text-sm">Javier</p>
									<p className="text-xs text-gray-500"></p>
								</div>
							</div>
						</div>
						<div className="px-2">
							<Quote
								className="fill-black text-black mb-4 rotate-180"
								size={24}
							/>
							<p className="text-text-gray mb-4 text-base leading-relaxed md:text-base text-sm">
								I supply pre-rolls across three states
								now.Passion Farms handled the connector
								logistics and compliance checks I couldnt
								navigate alone its a growth engine.
							</p>
							<p className="font-semibold md:text-base text-sm text-[#1D1D1D] mb-2">
								Javier R., Manufacturing Partner
							</p>
							<a
								href="#"
								className="inline-flex items-center text-sm font-semibold hover:text-orange-500 transition-colors gap-1 text-[#1D1D1D]"
							>
								Read more{" "}
								<div className="bg-[#FFF9F0] p-1 rounded-full">
									<MoveRight
										size={12}
										className="text-orange-500"
									/>
								</div>
							</a>
						</div>
					</div>

					{/* Testimonial 3 */}
					<div className="flex flex-col group">
						<div className="relative h-[253px] bg-[#000000] rounded-2xl flex items-center justify-center p-8 md:mb-8 mb-6 overflow-visible">
							<h3 className="text-white text-3xl font-light tracking-widest text-center">
								SKY<span className="font-bold">MINT</span>™
							</h3>
							{/* Floating Profile Badge */}
							<div className="absolute bottom-0 left-0 bg-white py-2 px-3 rounded-lg shadow-md border border-gray-100 flex items-center gap-3 z-10">
								<div className="w-10 h-10 rounded bg-gray-200 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
										alt="Solomon"
										fill
										className="object-cover"
									/>
								</div>
								<div className="leading-tight">
									<p className="font-bold text-sm text-[#1D1D1D]">
										Solomon
									</p>
									<p className="text-xs text-gray-500"></p>
								</div>
							</div>
						</div>
						<div className="px-2">
							<Quote
								className="fill-black text-black mb-4 rotate-180"
								size={24}
							/>
							<p className="text-text-gray mb-4 text-base leading-relaxed md:text-base text-sm">
								The quality of connections here is different. Im
								not just moving product; Im building lasting B2B
								relationships. My average order value has
								increased a lot.
							</p>
							<p className="font-semibold md:text-base text-sm text-[#1D1D1D] mb-2">
								Solomon K., Master Grower
							</p>
							<a
								href="#"
								className="inline-flex items-center text-sm font-semibold hover:text-orange-500 transition-colors gap-1 text-[#1D1D1D]"
							>
								Read more{" "}
								<div className="bg-[#FFF9F0] p-1 rounded-full">
									<MoveRight
										size={12}
										className="text-orange-500"
									/>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
