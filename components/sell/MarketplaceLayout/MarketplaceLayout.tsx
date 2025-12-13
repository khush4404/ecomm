import Image from "next/image";

export const MarketplaceLayout = () => {
	return (
		<div className="min-h-screen bg-white p-6 md:p-20 font-sans text-gray-800">
			<div className="max-w-7xl mx-auto">
				{/* --- Top Section (Two Cards) --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
					{/* Card 1 */}
					<div className="bg-[#D2D2D2] rounded-lg md:h-[270px] h-[488px] flex flex-col-reverse md:flex-row items-center justify-between md:gap-6 gap-3">
						<div className="flex-1 p-7 md:pt-7 pt-2 text-center md:text-start">
							<h3 className="md:text-xl text-base font-bold text-[#1D1D1D] mb-2 text-start">
								Become An Seller
							</h3>
							<p className="text-base text-[#1D1D1D] mb-6 leading-relaxed text-start">
								Top Instructors from around the world teach
								millions of customers on Edumall.
							</p>
							<button className="bg-[#F0BA43] w-[236px]  text-white font-semibold py-3 px-8 rounded-full transition duration-300">
								Start Now
							</button>
						</div>
						<Image
							src="/images/sell/seller.jpg"
							alt="Shop seller"
							className="w-full h-full object-cover p-2 overflow-hidden rounded-xl"
							height={252}
							width={280}
						/>
					</div>

					{/* Card 2 */}
					<div className="bg-[#D5E0E7] rounded-lg md:h-[270px] h-[488px] flex flex-col-reverse md:flex-row items-center justify-between md:gap-6 gap-3">
						<div className="flex-1 p-7 md:pt-7 pt-2 text-center md:text-start">
							<h3 className="md:text-xl text-base font-bold text-[#1D1D1D] mb-2 text-start">
								Become a vendor
							</h3>
							<p className="text-base text-[#1D1D1D] mb-6 leading-relaxed text-start">
								Create an account to receive our newsletter,
								Course recommendation and promotions.
							</p>
							<button className="bg-[#F0BA43] w-[236px]  text-white font-semibold py-3 px-8 rounded-full transition duration-300">
								Register for Free
							</button>
						</div>
						<Image
							src="/images/sell/sell2.png"
							alt="Shop seller"
							className="w-full h-full object-cover p-2 overflow-hidden rounded-xl"
							height={252}
							width={280}
						/>
					</div>
				</div>

				{/* --- Bottom Hero Section --- */}
				<div className="bg-[#FFF6E5] rounded-[10px] overflow-hidden flex flex-col-reverse md:flex-row min-h-[450px]">
					{/* Text Content */}
					<div className="flex-1 p-5 md:p-12 flex flex-col justify-center text-center md:text-start">
						<h1 className="text-xl md:text-5xl font-bold text-[#1D1D1D] md:mb-6 mb-3">
							Start selling with passionfarms
						</h1>
						<p className="text-text-gray text-base md:mb-6 mb-3 leading-relaxed max-w-lg">
							Join the ecosystem where your products meet ready
							demand. Well handle the connections, the logistics,
							and the market intelligence to ensure it sells.
						</p>
						<p className="text-sm text-text-gray md:mb-6 mb-3 max-w-lg">
							Earn{" "}
							<strong className="text-[#1D1D1D]">10% back</strong>{" "}
							back when you reach your first{" "}
							<strong className="text-[#1D1D1D]">$50,000</strong>
							{" "}in cannabis sales on PassionFarms.org.
						</p>
						<div className="flex items-center mx-auto md:mx-0">
							<button className="bg-[#F0BA43] text-white font-semibold py-3 px-10 rounded-full transition duration-300">
								Sign Up
							</button>
						</div>
					</div>

					{/* Hero Image */}
					<div className="flex-1 relative min-h-[300px] md:min-h-full rounded-[10px] overflow-hidden">
						<Image
							src="/images/sell/sell3.png"
							alt="Hemp farming"
							className="absolute inset-0 w-full h-full object-cover"
							fill
						/>
					</div>
				</div>
			</div>
		</div >
	);
};
