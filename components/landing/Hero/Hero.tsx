"use client";

import { useState, useEffect } from "react";

export function Hero() {
	const [activeSlide, setActiveSlide] = useState(0);
	const totalSlides = 5;

	const slides = [
		{
			main: "/images/hero/prod-8.jpg",
			top: "/images/hero/prod-7.jpg",
			bottom: "/images/hero/prod-9.jpg",
		},
		{
			main: "/images/hero/prod-8.jpg",
			top: "/images/hero/prod-7.jpg",
			bottom: "/images/hero/prod-9.jpg",
		},
		{
			main: "/images/hero/prod-8.jpg",
			top: "/images/hero/prod-7.jpg",
			bottom: "/images/hero/prod-9.jpg",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % totalSlides);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-12">
			<div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-[35px]">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-[22px]">
					{/* Main Large Image - Left */}
					<div className="lg:col-span-8 relative order-1">
						<div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[905/537] bg-gray-200 rounded-[10px] sm:rounded-[10px] overflow-hidden">
							{/* Placeholder for main hero image */}
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
								<div className="text-white text-center p-4 sm:p-6 md:p-8">
									<div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4">
										📦
									</div>
									<p className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
										Main Product Image
									</p>
									<p className="text-xs sm:text-sm opacity-90">
										prod (8).jpg - 905×537px
									</p>
								</div>
							</div>

							{/* Slider Dots - Inside Main Image */}
							<div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-[10px] z-10">
								{[...Array(totalSlides)].map((_, index) => (
									<button
										key={index}
										onClick={() => setActiveSlide(index)}
										className={`w-2 h-2 sm:w-[10px] sm:h-[10px] rounded-full transition-colors duration-300 ${
											activeSlide === index
												? "bg-[#F0BA43]"
												: "bg-white border border-gray-300"
										}`}
										aria-label={`Go to slide ${index + 1}`}
									/>
								))}
							</div>
						</div>

						{/* Available Now Badge */}
						<div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-8 lg:bottom-8 lg:left-12">
							<div className="bg-[#FAFAFA] rounded-full px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 flex items-center justify-center">
								<p
									className="text-[#1D1D1D] text-xs sm:text-sm md:text-base font-normal whitespace-nowrap"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Available Now
								</p>
							</div>
						</div>
					</div>

					{/* Two Smaller Images - Right */}
					<div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-[21px] order-2">
						{/* Top Image */}
						<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[444/258] bg-gray-200 rounded-[10px] sm:rounded-[10px] overflow-hidden">
							{/* Placeholder for top right image */}
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-red-500">
								<div className="text-white text-center p-2 sm:p-3 md:p-4">
									<div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
										🔥
									</div>
									<p className="text-sm sm:text-base md:text-lg font-semibold mb-0.5 sm:mb-1">
										Product Image
									</p>
									<p className="text-[10px] sm:text-xs opacity-90">
										prod (7).jpg - 444×258px
									</p>
								</div>
							</div>
						</div>

						{/* Bottom Image */}
						<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[444/258] bg-gray-200 rounded-[10px] sm:rounded-[10px] overflow-hidden">
							{/* Placeholder for bottom right image */}
							<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-teal-600">
								<div className="text-white text-center p-2 sm:p-3 md:p-4">
									<div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
										✨
									</div>
									<p className="text-sm sm:text-base md:text-lg font-semibold mb-0.5 sm:mb-1">
										Product Image
									</p>
									<p className="text-[10px] sm:text-xs opacity-90">
										prod (9).jpg - 444×258px
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
