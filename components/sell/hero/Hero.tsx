import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";

export const Hero = () => {
	return (
		<div className="min-h-screen bg-[#FFF9F0] text-[#1A1A1A] font-sans selection:bg-orange-200">
			{/* ... (Navigation stays the same) ... */}
			<nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
				<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
					<div className="font-bold text-[#1D1D1D] text-[20px] leading-6">
						Sell with Passionfarms
					</div>
					{/* ... (Nav text) ... */}
					<div className="text-text-gray hidden md:block text-sm md:text-base">
						Get{" "}
						<span className="font-bold text-[#1D1D1D]">
							10% back
						</span>{" "}
						on your first{" "}
						<span className="font-bold text-[#1D1D1D]">
							$10,000
						</span>{" "}
						cannabis product sales.
					</div>
					<div className="text-text-gray md:hidden sm:text-sm text-[12px]">
						Get{" "}
						<span className="font-bold text-[#1D1D1D]">
							10% back
						</span>{" "}
						on your first{" "}
						<span className="font-bold text-[#1D1D1D]">
							$10,000
						</span>{" "}
						cannabis product sales.
					</div>
				</div>
				<a
					href="#"
					className="underline font-semibold text-[#1D1D1D] hover:text-orange-500 transition text-sm md:text-base mx-auto md:mx-0 mt-2 md:mt-0"
				>
					Learn more
				</a>
			</nav>

			{/* --- Main Content Grid --- */}
			<main className="max-w-6xl mx-auto px-6 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative">
				{/* ... (Left Main Column Typography stays the same) ... */}
				<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-[25px] z-10 order-1 lg:order-1 text-center lg:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] text-[#1D1D1D] leading-tight lg:leading-[1.1] font-bold tracking-tight">
						Your Products Deserve a{" "}
						<span className="block">Bigger Market.</span>
					</h1>
					{/* ... (Rest of left text content) ... */}
					<div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-[#15141A]">
						<span>Sell</span>
						<div className="h-6 w-0.5 bg-black"></div>
						<span>Scale</span>
						<div className="h-6 w-0.5 bg-black"></div>
						<span>Connect</span>
					</div>
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-3 sm:gap-4 mt-6 lg:mt-[71px]">
						<button className="bg-[#F0BA43] text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-[50px] w-full sm:w-auto">
							Start Selling
						</button>
						<div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
							<button className="flex items-center justify-center md:size-14 size-8 bg-[#F0BA43] hover:bg-[#dca335] rounded-full text-white shadow-lg transition-all duration-300">
								<ArrowUpRight
									className="md:size-6 size-4"
								/>
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
					{/* ... (Desktop Play Button stays the same) ... */}
					<div className="hidden lg:flex absolute left-[95px] top-[196px] -translate-x-1/2 -translate-y-1/2 z-30">
						{/* ... Play button code ... */}
						<div className="relative group cursor-pointer">
							<div className="w-28 h-28 bg-[#1A1A1A] rounded-full flex items-center justify-center relative z-10 border-12 border-[#FFF9F0]">
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
					<div className="flex flex-col gap-1.5 sm:gap-5 w-full max-w-[542px] relative">
						{/* --- TOP ROW (Stats + Tall Image) --- */}
						<div className="flex flex-row gap-2 md:gap-6 w-full md:h-[360px] relative">
							{/* ... (Mobile Play Button stays the same) ... */}
							<div className="lg:hidden absolute left-[50%] top-[px] -translate-x-1/2 -translate-y-1/2 z-40 scale-50 sm:scale-75">
								{/* ... Play button code ... */}
								<div className="relative group cursor-pointer">
									<div className="w-28 h-28 bg-[#1A1A1A] rounded-full flex items-center justify-center relative z-10 border-12 border-[#FFF9F0]">
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

							{/* A. Left Sub-Column (2 Cards) */}
							<div className="flex flex-col gap-2 flex-1 md:w-[232px] md:flex-none shrink-0 relative self-stretch">
								{/* Card 1: 5K+ Stats (Previous changes maintained) */}
								<div className="bg-[#121214] w-full h-auto md:h-60 p-3 md:p-6 border-l border-amber-400 rounded-3xl text-white shadow-xl flex flex-col justify-start gap-1 md:gap-0 md:justify-between relative overflow-hidden group">
									<div className="flex -space-x-2 md:-space-x-3 pl-4 md:pl-8 pt-1 md:pt-0">
										{[
											"/images/sell/men.jpg",
											"/images/sell/women.jpg",
											"/images/sell/men2.jpg",
										].map((src, idx) => (
											<div
												key={idx}
												className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] rounded-full border-2 border-[#FFFFFF] relative overflow-hidden"
											>
												<Image
													src={src}
													alt={`User ${idx + 1}`}
													fill
													className="object-cover"
												/>
											</div>
										))}
									</div>
									<div className="flex flex-col pl-2 md:pl-8 z-10 pb-1 md:pb-0">
										<div className="text-xl md:text-4xl font-bold pl-3 sm:pl-0">
											5K+
										</div>
										<div className="text-[10px] md:text-xs leading-3 md:leading-4 pl-3 sm:pl-0">
											More than 5,000 People
											<br />
											has joined us recently.
										</div>
									</div>
									<div className="absolute top-4 left-3 h-20 md:top-6 md:left-7 md:h-[150px] w-1 bg-[#F0BA43] rounded-full opacity-80"></div>
								</div>

								{/* 👇 CHANGE: Card 2 (Growth) Updated for Mobile Layout */}
								{/* pl-3 pt-3 pr-3 pb-0 creates space on sides/top but flushes bottom */}
								<div className="bg-[#121214] w-full h-28 md:h-40 pl-3 pt-3  pb-0 md:p-6 rounded-3xl text-white shadow-xl flex flex-row justify-between relative overflow-hidden">
									{/* Text Section: Centered Vertically */}
									<div className="flex flex-col justify-center h-full  md:pb-0 z-10">
										<p className=" text-[10px] md:text-sm">
											Successful
										</p>
										<p className="font-semibold text-sm md:text-lg">
											Growth
										</p>
									</div>

									{/* Chart Section: Aligned to Bottom (self-end) */}
									<div className="flex items-end self-end h-16 md:h-20 w-20 md:w-24 relative">
										<Image
											src="/images/sell/Rectangle1.png"
											alt="chart"
											width={23}
											height={53}
											className="sm:h-[53px] sm:w-[23px] w-[17px] h-[38px] object-contain bg-[#C9C8C7]"
										/>
										<Image
											src="/images/sell/Rectangle2.png"
											alt="chart"
											width={23}
											height={81}
											className="sm:h-[81px] sm:w-[23px] w-4 h-[60px] object-contain bg-[#DBD9D8]"
										/>
										<Image
											src="/images/sell/Rectangle3.png"
											alt="chart"
											width={41}
											height={108}
											className="sm:h-[108px] sm:w-[41px] w-[30px] h-[78px] object-contain bg-[#EFFDF0]"
										/>
										<svg
											className="absolute bottom-0 left-0 pointer-events-none"

											viewBox="0 0 100 100"
											preserveAspectRatio="none"
										>
											<path
												d="M10 80 Q 50 80 80 20"
												stroke="#F0BA43"
												strokeWidth="5"
												fill="none"
											/>
											<path
												d="M70 20 L 80 20 L 82 35"
												stroke="#F0BA43"
												strokeWidth="5"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>
								{/* 👆 End of Change */}
							</div>

							{/* B. Right Sub-Column (Tall Image) */}
							<div className="relative w-[163px] self-stretch md:w-[302px] md:h-[360px] shrink-0 rounded-3xl overflow-visible shadow-2xl">
								<div className="h-full w-full rounded-3xl overflow-hidden relative">
									<Image
										src="/images/sell/Bussiness.jpg"
										alt="men"
										width={302}
										height={360}
										className="object-cover h-full w-full"
									/>
								</div>

								{/* Floating Badges (Desktop Only) */}
								<div className="hidden md:block absolute -right-2.5 md:-right-20 bottom-[85px] bg-[#121214] text-white pl-4 md:pl-7 pb-1.5 pr-4 md:pr-7 pt-2 md:pt-4 rounded-[10px] shadow-xl w-32 md:w-40 z-20 border border-gray-800 scale-75 md:scale-100 origin-right">
									<p className="text-[12px] md:text-[16px] font-medium leading-5">
										Satisfied rate
									</p>
									<p className="text-[30px] md:text-[44px] font-semibold text-[#F0BA43]">
										98%
									</p>
								</div>
								<div className="hidden md:block absolute -right-2.5 md:-right-20 -bottom-5 md:-bottom-[65px] bg-[#121214] text-white pl-4 md:pl-7 pb-1.5 pr-4 md:pr-7 pt-2 md:pt-4 rounded-[10px] shadow-xl w-32 md:w-40 z-30 border border-gray-800 scale-75 md:scale-100 origin-right">
									<p className="text-[12px] md:text-[16px] font-medium leading-5">
										Successful Deliveries
									</p>
									<p className="text-[30px] md:text-[44px] font-semibold text-[#F0BA43]">
										12K
									</p>
								</div>
							</div>
						</div>

						{/* --- BOTTOM ROW (Full Width Image) --- */}
						<div className="relative w-full h-[265px] rounded-[30px] overflow-visible shadow-lg md:mt-0">
							{/* ... (Bottom image and mobile stats stay the same) ... */}
							<div className="h-full w-full rounded-[30px] overflow-hidden relative">
								<Image
									src="/images/sell/meet.jpg"
									alt="men"
									width={542}
									height={265}
									className="object-cover h-full w-full"
								/>
							</div>

							<div className="hidden md:block absolute right-0 md:-right-24 top-[30px] md:top-[78px] bg-[#121214] text-white pl-4 md:pl-7 pt-2 md:pt-3 pr-8 md:pr-12 pb-2 rounded-[10px] shadow-xl w-32 md:w-40 z-20 border border-gray-800 scale-75 md:scale-100 origin-right">
								<p className="text-[12px] md:text-[16px] leading-5 font-medium">
									Community members
								</p>
								<p className="text-[30px] md:text-[44px] font-semibold text-[#F0BA43]">
									5.4K
								</p>
							</div>

							{/* --- Mobile Only Stats Row --- */}
							<div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4 md:hidden">
								<div className="grid grid-cols-3 gap-2 w-full">
									<div className="bg-[#121214] text-white pl-3 pt-2 pr-4 pb-2.5 rounded-xl shadow-lg flex flex-col justify-center border border-gray-800 h-20">
										<p className="text-[10px] text-gray-300 font-medium leading-3 ">
											Satisfied rate
										</p>
										<p className="text-xl font-bold text-[#F0BA43]">
											98%
										</p>
									</div>
									<div className="bg-[#121214] text-white p-3 rounded-xl shadow-lg flex flex-col justify-center border border-gray-800 h-20">
										<p className="text-[10px] text-gray-300 font-medium leading-3 ">
											Community members
										</p>
										<p className="text-xl font-bold text-[#F0BA43]">
											5.4K
										</p>
									</div>
									<div className="bg-[#121214] text-white p-3 rounded-xl shadow-lg flex flex-col justify-center border border-gray-800 h-20">
										<p className="text-[10px] text-gray-300 font-medium leading-3 ">
											Successful Deliveries
										</p>
										<p className="text-xl font-bold text-[#F0BA43]">
											12K
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
