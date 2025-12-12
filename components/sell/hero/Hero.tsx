import Image from "next/image";
import { MoveRight, Play } from "lucide-react";

export const Hero = () => {
	return (
		<div className="min-h-screen bg-[#FFF9F0] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-orange-200">
			{/* --- Top Navigation / Banner --- */}
			<nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
				<div className="font-bold text-lg mb-4 md:mb-0">
					Sell with Passionfarms
				</div>
				<div className="text-gray-600">
					Get <span className="font-bold text-black">10% back</span>{" "}
					on your first{" "}
					<span className="font-bold text-black">$10,000</span>{" "}
					cannabis product sales.{" "}
					<a
						href="#"
						className="underline font-semibold text-black hover:text-orange-500 transition"
					>
						Learn more
					</a>
				</div>
			</nav>

			{/* --- Main Content Grid --- */}
			<main className="max-w-7xl mx-auto px-6 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
				{/* === LEFT COLUMN: Typography & CTA === */}
				<div className="lg:col-span-5 flex flex-col gap-8 z-10">
					<h1 className="text-[65px] text-[#1D1D1D] leading-[1.1] font-bold tracking-tight">
						Your Products Deserve a
						<span className="block">Bigger Market.</span>
					</h1>

					<div className="flex items-center gap-4 text-xl md:text-2xl font-medium text-[#15141A]">
						<span>Sell</span>
						<div className="h-6 w-[2px] bg-black"></div>
						<span>Scale</span>
						<div className="h-6 w-[2px] bg-black"></div>
						<span>Connect</span>
					</div>

					<div className="flex flex-wrap items-center gap-4 mt-4">
						<button className="bg-[#EAB345] hover:bg-[#dca335] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
							Start Selling
						</button>

						<button className="flex items-center justify-center w-14 h-14 bg-[#EAB345] hover:bg-[#dca335] rounded-full text-white shadow-lg transition-all duration-300">
							<MoveRight size={24} />
						</button>

						<a
							href="#"
							className="font-medium text-gray-700 ml-2 hover:underline"
						>
							Learn more
						</a>
					</div>
				</div>

				{/* === CENTER: Floating Play Button === */}
				{/* Positioned absolutely on desktop to bridge the two columns */}
				<div className="hidden lg:flex absolute left-[40%] top-[36%] -translate-y-1/2 z-20">
					<div className="relative group cursor-pointer">
						<div className="w-24 h-24  bg-[#1A1A1A] rounded-full flex items-center justify-center relative z-10">
							<div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center">
								<Play
									className="fill-[#EAB345] text-[#EAB345] ml-1"
									size={24}
								/>
							</div>
						</div>
						{/* Curved text effect simulated with SVG or just omitted for clean code. 
                    Here is a simple rotation wrapper for context */}
						<div className="absolute inset-0 -m-2 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow opacity-30"></div>
					</div>
				</div>

				{/* === RIGHT COLUMN: Bento Grid Visuals === */}
				<div className="lg:col-span-7 relative">
					{/* Grid Container */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* -- Left Sub-Column of Grid -- */}
						<div className="flex flex-col gap-4">
							{/* Card 1: 5K+ Stats */}
							<div className="bg-[#121214] p-6 border-l border-amber-400 rounded-3xl text-white shadow-xl h-48 flex flex-col justify-between relative overflow-hidden group">
								{/* Avatar Group Placeholder */}
								<div className="flex -space-x-3">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="w-10 h-10 rounded-full border-2 border-[#121214] bg-gray-600 relative overflow-hidden"
										>
											<Image
												src={`https://images.unsplash.com/photo-${
													i === 1
														? "1534528741775-53994a69daeb"
														: i === 2
														? "1506794778202-cad84cf45f1d"
														: "1507003211169-0a1dd7228f2d"
												}?w=100&h=100&fit=crop`}
												alt="User"
												fill
												className="object-cover"
											/>
										</div>
									))}
								</div>
								<div>
									<div className="text-4xl font-bold mb-1">
										5K+
									</div>
									<div className="text-gray-400 text-xs">
										More than 5,000 People
										<br />
										has joined us recently.
									</div>
								</div>
								<div className="absolute top-6 left-3 h-35 w-1 bg-[#F0BA43] rounded-full opacity-80"></div>
							</div>

							{/* Card 2: Growth Chart (The one highlighted in your image) */}
							<div className="bg-[#121214] p-6 rounded-3xl text-white shadow-xl h-40 flex flex-row items-end justify-between relative">
								<div className="mb-2">
									<p className="text-gray-400 text-sm">
										Successful
									</p>
									<p className="font-semibold text-lg">
										Growth
									</p>
								</div>

								{/* Chart Visualization */}
								<div className="flex items-end gap-2 h-20 w-24 relative">
									<div className="w-6 bg-gray-600 h-[40%] rounded-t-sm opacity-50"></div>
									<div className="w-6 bg-gray-400 h-[65%] rounded-t-sm opacity-70"></div>
									<div className="w-6 bg-white h-[90%] rounded-t-sm"></div>

									{/* The Yellow Arrow Overlay */}
									<svg
										className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
										viewBox="0 0 100 100"
										preserveAspectRatio="none"
									>
										<path
											d="M10 80 Q 50 80 80 20"
											stroke="#EAB345"
											strokeWidth="4"
											fill="none"
										/>
										<path
											d="M70 20 L 80 20 L 82 35"
											stroke="#EAB345"
											strokeWidth="4"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* -- Right Sub-Column of Grid -- */}
						<div className="relative">
							{/* Card 3: Tall Man Image */}
							<div className="h-[23rem] w-full rounded-3xl overflow-hidden relative shadow-2xl">
								<Image
									src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
									alt="Business Man"
									fill
									className="object-cover object-top"
								/>
							</div>

							{/* Floating Badge 1: Satisfied Rate */}
							<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#121214] text-white p-4 rounded-2xl shadow-xl w-40 z-10 border border-gray-800">
								<p className="text-xs text-gray-400 mb-1">
									Satisfied rate
								</p>
								<p className="text-3xl font-bold text-[#EAB345]">
									98%
								</p>
							</div>

							{/* Floating Badge 2: Successful Deliveries */}
							<div className="absolute -right-4 -bottom-6 bg-[#121214] text-white p-4 rounded-2xl shadow-xl w-44 z-20 border border-gray-800">
								<p className="text-xs text-gray-400 mb-1">
									Successful Deliveries
								</p>
								<p className="text-3xl font-bold text-[#EAB345]">
									12K
								</p>
							</div>
						</div>

						{/* -- Bottom Full Width Card -- */}
						<div className="md:col-span-2 relative mt-4">
							<div className="h-48 w-full rounded-3xl overflow-hidden relative shadow-lg">
								<Image
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
									alt="Team Meeting"
									fill
									className="object-cover"
								/>
							</div>

							{/* Floating Badge 3: Community Members */}
							<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#121214] text-white p-4 rounded-2xl shadow-xl w-44 z-10 border border-gray-800">
								<p className="text-xs text-gray-400 mb-1">
									Community members
								</p>
								<p className="text-3xl font-bold text-[#EAB345]">
									5.4K
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
