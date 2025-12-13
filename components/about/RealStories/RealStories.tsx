import Image from "next/image";

const stories = [
	{
		id: 1,
		username: "houston_passionfarms",
		handle: "passion farms",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", // Man portrait
		productName: "DISPOSABLES",
		productImage: "/images/about/real.png", // Blue box placeholder
		productAlt: "Blue disposable vape box",
	},
	{
		id: 2,
		username: "houston_passionfarms",
		handle: "passion farms",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", // Man selfie
		productName: "GUMMIES",
		productImage: "/images/about/real2.png", // Orange bag placeholder
		productAlt: "Orange gummy bag",
	},
	{
		id: 3,
		username: "houston_passionfarms",
		handle: "passion farms",
		image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", // Woman portrait
		productName: "FLOWERS",
		productImage: "/images/about/real3.png", // Green nug placeholder
		productAlt: "Cannabis flower",
	},
];

export const RealStories = () => {
	return (
		<section className="w-full py-16 md:px-4 bg-white flex justify-center items-center">
			{/* Main Container - Beige Background */}
			<div className="bg-[#FFF6E5] max-w-7xl w-full rounded-[2.5rem] overflow-hidden shadow-sm">
				{/* Header Section */}
				<div className="text-center md:py-14 py-8 px-6 max-w-4xl mx-auto">
					<h2 className="text-xl md:text-[42px] font-bold text-[#1D1D1D] tracking-tight mb-2">
						Real Stories. Real Operators. Real Results.
					</h2>
					{/* Gold Underline */}
					<div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full mb-6"></div>

					<p className="text-black text-sm md:text-base leading-relaxed">
						Dont just take our word for it. Hear how our members
						leverage the Passion Farms ecosystem to build trust,
						streamline operations, and achieve their goals. This is
						community powered commerce in action. We combine
						cutting-edge platform tools with the irreplaceable power
						of human connection. See how our integrated approach is
						marketing businesses smarter and building legacies.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 pb-1 md:px-0 md:pb-0 md:gap-px bg-gray-200/50">
					{stories.map((story) => (
						<div
							key={story.id}
							className="flex flex-col relative group"
						>
							{/* Image Container */}
							<div className="relative h-[450px] w-full overflow-hidden border border-[#DEDDDC] bg-gray-300">
								{/* Main Person Image */}
								<Image
									src={story.image}
									alt={`Story by ${story.username}`}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>

								{/* Overlay Gradient for Text Visibility */}
								<div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black/60 to-transparent pointer-events-none"></div>

								{/* Social Header (Top Left) */}
								<div className="absolute top-6 left-6 flex  items-center  gap-3">
									<div className="w-12 h-12 rounded-full border-2 bg-black flex items-center justify-center overflow-hidden relative">
										<Image
											src="/images/about/passionlogo.png"
											alt={`Logo for ${story.username}`}
											fill
											className="object-contain p-1"
										/>
									</div>
									<div className="text-white">
										<p className="font-bold text-sm md:text-base tracking-wide shadow-sm">
											{story.username}
										</p>
										<p className="md:text-base text-sm text-gray-200 opacity-90">
											{story.handle}
										</p>
									</div>
								</div>
							</div>

							{/* Bottom White Footer Section */}
							<div className="bg-white border border-[#DEDDDC] md:p-6 p-4 pb-8 relative mt-auto z-10">
								{/* Floating Product Image - Overlapping border */}
								<div className="absolute -top-12 left-6 w-22 h-28  transform  transition-transform hover:rotate-0">
									<Image
										src={story.productImage}
										alt={story.productAlt}
										width={80}
										height={100}
										className="object-contain w-full h-full"
									/>
								</div>

								{/* Product Text */}
								<div className="ml-24 text-left pt-1">
									<h3 className="font-extrabold md:text-2xl text-xl text-[#1D1D1D] tracking-tight uppercase">
										{story.productName}
									</h3>
									<p className="text-xs text-text-gray uppercase tracking-widest mt-1">
										Powered by Passion Farms
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
