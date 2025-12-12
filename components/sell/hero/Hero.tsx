import Image from "next/image";
import { MoveRight, Play, ArrowUpRight } from "lucide-react";

export const Hero = () => {
	return (
		<div className="min-h-screen bg-[#FFF9F0] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-orange-200">
			{/* --- Top Navigation / Banner --- */}
			<nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between  md:gap-8">
				<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
					<div className="font-bold text-[#1D1D1D] text-[20px] leading-6">
						Sell with Passionfarms
					</div>
					{/* Hidden on mobile, visible on medium screens and up */}
					<div className="text-[#878787] hidden md:block text-sm md:text-base">
						Get{" "}
						<span className="font-bold text-[#1D1D1D]">
							10% back
						</span>{" "}
						on your first{" "}
						<span className="font-bold text-[#1D1D1D]">
							$10,000
						</span>{" "}
						cannabis product sales.{" "}
					</div>
					{/* Mobile only: Show text below title */}
					<div className="text-[#878787] md:hidden sm:text-sm text-[12px]">
						Get{" "}
						<span className="font-bold text-[#1D1D1D]">
							10% back
						</span>{" "}
						on your first{" "}
						<span className="font-bold text-[#1D1D1D]">
							$10,000
						</span>{" "}
						cannabis product sales.{" "}
					</div>
				</div>
				<a
					href="#"
					className="underline font-semibold text-[#1D1D1D] hover:text-orange-500 transition text-sm md:text-base mx-auto md:mx-0"
				>
					Learn more
				</a>
			</nav>

			{/* --- Main Content Grid --- */}
			<main className="max-w-7xl mx-auto px-6 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
				{/* === LEFT COLUMN: Typography & CTA === */}
				<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-[25px] z-10 order-1 lg:order-1 text-center lg:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] text-[#1D1D1D] leading-tight lg:leading-[1.1] font-bold tracking-tight">
						Your Products Deserve a
						<span className="block">Bigger Market.</span>
					</h1>

					<div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-[#15141A]">
						<span>Sell</span>
						<div className="h-6 w-[2px] bg-black"></div>
						<span>Scale</span>
						<div className="h-6 w-[2px] bg-black"></div>
						<span>Connect</span>
					</div>

					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3 sm:gap-4 mt-6 lg:mt-[71px]">
						<button className="bg-[#F0BA43] text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-[50px] w-full sm:w-auto">
							Start Selling
						</button>

					<div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
						<button className="flex items-center justify-center w-14 h-14 bg-[#F0BA43] hover:bg-[#dca335] rounded-full text-white shadow-lg transition-all duration-300">
							{/* <MoveRight size={24} /> */}
							<ArrowUpRight size={24} className="text-black" />
						</button>

						<a
							href="#"
							className="font-medium text-[#1D1D1D] hover:underline text-center sm:text-left"
						>
							Learn more
						</a>
					</div>
					</div>
				</div>

				{/* === RIGHT COLUMN: Bento Grid Visuals === */}
				<div className="lg:col-span-7 relative flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0">
					{/* === DESKTOP FLOATING PLAY BUTTON (Hidden on Mobile) === */}
					<div className="hidden lg:flex absolute left-[130px] top-[196px] -translate-x-1/2 -translate-y-1/2 z-30">
						<div className="relative group cursor-pointer">
							<div className="w-28 h-28 bg-[#1A1A1A] rounded-full flex items-center justify-center relative z-10 border-[12px] border-[#FFF9F0]">
								<div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center">
									<Play
										className="fill-[#EAB345] text-[#EAB345] ml-1"
										size={24}
									/>
								</div>
							</div>
							<div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] z-20 animate-spin-slow">
								<svg
									viewBox="0 0 100 100"
									className="w-full h-full overflow-visible"
								>
									<path
										id="textPathDesktop"
										d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
										fill="transparent"
									/>
									<text className="text-[9px] font-medium tracking-[5px] fill-white">
										<textPath
											xlinkHref="#textPathDesktop"
											startOffset="0%"
										>
											Passion Farms - Passion Farms -
										</textPath>
									</text>
								</svg>
							</div>
						</div>
					</div>

					{/* Main Flex Wrapper */}
					<div className="flex flex-col gap-5 w-full max-w-[542px]">
						{/* --- TOP ROW (Stats + Tall Image) --- */}
						<div className="flex flex-col md:flex-row gap-6 w-full h-auto md:h-[360px]">
							{/* A. Left Sub-Column (2 Cards) */}
							<div className="flex flex-col gap-2 w-full md:w-[232px] shrink-0 relative">
								{/* Card 1: 5K+ Stats */}
								<div className="bg-[#121214] w-full h-60 p-6 border-l border-amber-400 rounded-3xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
									<div className="flex -space-x-3 pl-8">
										{[1, 2, 3].map((i) => (
											<div
												key={i}
												className="w-[42px] h-[42px] rounded-full border-2 border-[#FFFFFF] relative overflow-hidden"
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
													className="object-cover size-[42px]"
												/>
											</div>
										))}
									</div>
									<div className="flex flex-col pl-8">
										<div className="text-4xl font-bold">
											5K+
										</div>
										<div className=" text-xs">
											More than 5,000 People
											<br />
											has joined us recently.
										</div>
									</div>
									<div className="absolute top-6 left-6 h-[150px] w-1 bg-[#F0BA43] rounded-full opacity-80"></div>
								</div>

								{/* === MOBILE/TABLET FLOATING PLAY BUTTON (Hidden on Desktop) === */}
								{/* Positioned to overlap the Left side of the Growth Card */}
								<div className="flex lg:hidden absolute -left-6 bottom-[100px] z-40 scale-75 md:scale-90">
									<div className="relative group cursor-pointer">
										<div className="w-28 h-28 bg-[#1A1A1A] rounded-full flex items-center justify-center relative z-10 border-[12px] border-[#FFF9F0]">
											<div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center">
												<Play
													className="fill-[#EAB345] text-[#EAB345] ml-1"
													size={24}
												/>
											</div>
										</div>
										{/* Spinning Text SVG for Mobile */}
										<div className="absolute w-[80%] h-[80%] top-[10%] left-[10%] z-20 animate-spin-slow">
											<svg
												viewBox="0 0 100 100"
												className="w-full h-full overflow-visible"
											>
												<path
													id="textPathMobile"
													d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
													fill="transparent"
												/>
												<text className="text-[9px] font-medium tracking-[5px] fill-white">
													<textPath
														xlinkHref="#textPathMobile"
														startOffset="0%"
													>
														Passion Farms - Passion
														Farms -
													</textPath>
												</text>
											</svg>
										</div>
									</div>
								</div>

								{/* Card 2: Growth Chart */}
								<div className="bg-[#121214] w-full h-40 p-6 rounded-3xl text-white shadow-xl flex flex-row items-end justify-between relative">
									<div className="mb-2 pl-4 md:pl-0">
										{" "}
										{/* Padding added for mobile play button space */}
										<p className="text-[12px] leading-5 ">
											Successful
										</p>
										<p className="text-[12px] leading-5 font-semibold text-lg">
											Growth
										</p>
									</div>
									<div className="flex items-end h-20 w-24 relative">
										<Image
											src="/images/sell/Rectangle1.png"
											alt="chart"
											width={23}
											height={53}
											className="h-[53px] w-[23px] object-contain bg-[#C9C8C7]"
										/>
										<Image
											src="/images/sell/Rectangle2.png"
											alt="chart"
											width={23}
											height={81}
											className="h-[81px] w-[23px] object-contain bg-[#DBD9D8]"
										/>
										<Image
											src="/images/sell/Rectangle3.png"
											alt="chart"
											width={41}
											height={108}
											className="h-[108px] w-[41px] object-contain bg-[#EFFDF0]"
										/>
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

							{/* B. Right Sub-Column (Tall Image) */}
							<div className="relative w-full md:w-[302px] h-[360px] rounded-3xl overflow-visible shadow-2xl shrink-0">
								<div className="h-full w-full rounded-3xl overflow-hidden relative">
									<Image
										src="/images/sell/Bussiness.jpg"
										alt="men"
										width={302}
										height={360}
										className="object-cover h-full w-full"
									/>
								</div>

								{/* Floating Badge 1: Satisfied Rate */}
								{/* Mobile: right-2 (Inside), Desktop: -right-20 (Outside) */}
								<div className="absolute right-0 md:-right-20 bottom-[85px] bg-[#121214] text-white pl-7 pb-1.5 pr-7 pt-4 rounded-[10px] shadow-xl w-40 z-20 border border-gray-800 scale-90 md:scale-100">
									<p className="text-[16px] font-medium leading-5">
										Satisfied rate
									</p>
									<p className="text-[44px] font-semibold text-[#F0BA43]">
										98%
									</p>
								</div>

								{/* Floating Badge 2: Successful Deliveries */}
								{/* Mobile: right-0 (Inside), Desktop: -right-20 (Outside) */}
								<div className="absolute right-0 md:-right-20 -bottom-[30px] md:-bottom-[65px] bg-[#121214] text-white pl-7 pb-1.5 pr-7 pt-4 rounded-[10px] shadow-xl w-40 z-30 border border-gray-800 scale-90 md:scale-100">
									<p className="text-[16px] font-medium leading-5">
										Successful Deliveries
									</p>
									<p className="text-[44px] font-semibold text-[#F0BA43]">
										12K
									</p>
								</div>
							</div>
						</div>

						{/* --- BOTTOM ROW (Full Width Image) --- */}
						<div className="relative w-full h-[265px] rounded-[30px] overflow-visible shadow-lg mt-8 md:mt-0">
							<div className="h-full w-full rounded-[30px] overflow-hidden relative">
								<Image
									src="/images/sell/meet.jpg"
									alt="men"
									width={542}
									height={265}
									className="object-cover h-full w-full"
								/>
							</div>

							{/* Floating Badge 3: Community Members */}
							<div className="absolute right-0 md:-right-24 top-[30px] md:top-[78px] bg-[#121214] text-white pl-7 pt-3 pr-12 pb-2 rounded-[10px] shadow-xl w-40 z-20 border border-gray-800 scale-90 md:scale-100">
								<p className="text-[16px] leading-5 font-medium">
									Community members
								</p>
								<p className="text-[44px] font-semibold text-[#F0BA43]">
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
