"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
	id: string;
	name: string;
	text: string;
	image: string;
	highlightedText?: string;
}

export interface TestimonialsProps {
	title?: string;
	subtitle?: string;
	description?: string;
	testimonials?: Testimonial[];
	sectionClassName?: string;
	containerClassName?: string;
	titleClassName?: string;
	subtitleClassName?: string;
	descriptionClassName?: string;
	cardsContainerClassName?: string;
	cardClassName?: string;
	navigationClassName?: string;
	showNavigation?: boolean;
}

export const Testimonials = ({
	title = "Testimonials",
	subtitle = "Results that speaks volume, Read success stories",
	description = "Find out how our happy client are raving about us.",
	testimonials = [
		{
			id: "1",
			name: "Jordan M",
			text: "Every batch feels crafted with care. The freshness and flavor profiles are unlike anything I've tried before — truly premium quality.",
			image: "/images/testimonials/jordan.jpg",
			highlightedText: "premium quality",
		},
		{
			id: "2",
			name: "Samantha T",
			text: "I can always count on consistent quality and smooth experience. The aroma hits first, then that perfect balance follows.",
			image: "/images/testimonials/samantha.jpg",
			highlightedText: "quality and smooth experience",
		},
		{
			id: "3",
			name: "Taylor S",
			text: "From the packaging to the product itself, everything feels top-tier. You can tell this brand actually cares about the details.",
			image: "/images/testimonials/taylor.jpg",
			highlightedText: "top-tier",
		},
		{
			id: "4",
			name: "Olivia R",
			text: "The attention to detail is impeccable. Every aspect of the product is thoughtfully crafted, from the packaging to the flavor itself.",
			image: "/images/testimonials/olivia.jpg",
			highlightedText: "impeccable",
		},
		{
			id: "5",
			name: "Aiden L",
			text: "I'm impressed by the consistency and quality of the product. It exceeds my expectations every time.",
			image: "/images/testimonials/aiden.jpg",
			highlightedText: "consistent and quality",
		},
		{
			id: "6",
			name: "Mason J",
			text: "The product is not only delicious but also made with high-quality ingredients. It's a pleasure to consume.",
			image: "/images/testimonials/mason.jpg",
			highlightedText: "high-quality",
		},
	],
	sectionClassName = "w-full bg-white py-6 lg:py-8 relative",
	containerClassName = "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]",
	titleClassName = "text-[#1D1D1D] text-sm lg:text-[28px] font-semibold leading-6 lg:leading-9 tracking-[-0.02em] text-center",
	subtitleClassName = "text-[#1D1D1D] text-lg sm:text-xl lg:text-[30px] font-semibold leading-7 lg:leading-9 tracking-[-0.02em] text-center mt-2",
	descriptionClassName = "text-text-gray text-sm sm:text-base lg:text-lg font-semibold leading-6 lg:leading-9 tracking-[-0.02em] text-center mt-3 sm:mt-4 mb-8 lg:mb-12",
	cardsContainerClassName = "w-full mb-8 lg:mb-12",
	cardClassName = "bg-white rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] p-4 sm:p-6 lg:p-8 flex flex-col h-full",
	navigationClassName = "flex items-center justify-center gap-2 sm:gap-4 flex-wrap",
	showNavigation = true,
}: TestimonialsProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [screenSize, setScreenSize] = useState("lg");

	// Determine visible cards based on screen size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setScreenSize("mobile");
			} else if (window.innerWidth < 1024) {
				setScreenSize("tablet");
			} else {
				setScreenSize("lg");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const visibleCards = useMemo(() => {
		if (screenSize === "mobile") return 1;
		if (screenSize === "tablet") return 2;
		return 3;
	}, [screenSize]);

	// Calculate total pages
	const totalPages = Math.max(1, testimonials.length - visibleCards + 1);

	const handlePrev = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
	}, [totalPages]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
	}, [totalPages]);

	// Get visible testimonials
	const visibleTestimonials = useMemo(() => {
		const start = currentIndex;
		const end = start + visibleCards;

		if (end <= testimonials.length) {
			return testimonials.slice(start, end);
		}

		return [
			...testimonials.slice(start),
			...testimonials.slice(0, end - testimonials.length),
		];
	}, [currentIndex, visibleCards, testimonials]);

	// Highlight specific text in testimonial
	const renderHighlightedText = (text: string, highlight?: string) => {
		if (!highlight) return text;

		const parts = text.split(new RegExp(`(${highlight})`, "gi"));
		return (
			<>
				{parts.map((part, index) =>
					part.toLowerCase() === highlight.toLowerCase() ? (
						<span
							key={index}
							className="text-[#F0BA43] font-semibold"
						>
							{part}
						</span>
					) : (
						part
					)
				)}
			</>
		);
	};

	return (
		<section className={sectionClassName}>
			<div className={containerClassName}>
				{/* Header */}
				<div className="text-center mb-8 lg:mb-12">
					<p
						className={titleClassName}
						style={{ fontFamily: "Inter, sans-serif" }}
					>
						{title}
					</p>
					<h2
						className={subtitleClassName}
						style={{ fontFamily: "Inter, sans-serif" }}
					>
						{subtitle}
					</h2>
					<p
						className={descriptionClassName}
						style={{ fontFamily: "Inter, sans-serif" }}
					>
						{description}
					</p>
				</div>

				{/* Testimonial Cards */}
				<div className={cardsContainerClassName}>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{visibleTestimonials.map((testimonial) => (
							<div key={testimonial.id} className={cardClassName}>
								{/* User Info */}
								<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
									<div className="relative w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-full overflow-hidden border border-[#E8E8E8] flex-shrink-0">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											width={58}
											height={58}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="min-w-0">
										<h3
											className="text-[#1D1D1D] font-semibold text-sm sm:text-base leading-6 sm:leading-7 tracking-[-0.02em] truncate"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											{testimonial.name}
										</h3>
									</div>
								</div>

								{/* Testimonial Text */}
								<p
									className="text-[#1D1D1D] text-sm sm:text-base leading-6 sm:leading-7 tracking-[-0.02em] mb-4 sm:mb-6 line-clamp-4 flex-grow"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									&quot;
									{renderHighlightedText(
										testimonial.text,
										testimonial.highlightedText
									)}
									&quot;
								</p>

								{/* Quote Icon */}
								<div className="flex justify-center mt-auto">
									<div className="w-12 h-12 sm:w-[58px] sm:h-[58px] bg-white border border-[#E8E8E8] rounded-full flex items-center justify-center flex-shrink-0">
										<Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8E8E8]" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Navigation Controls */}
				{showNavigation && totalPages > 1 && (
					<div className={navigationClassName}>
						{/* Previous Button */}
						<button
							onClick={handlePrev}
							className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white border-2 border-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43] transition-colors group flex-shrink-0"
							aria-label="Previous testimonials"
						>
							<ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-[#343233] stroke-[2.5] group-hover:text-white" />
						</button>

						{/* Dots Indicators */}
						<div className="flex gap-2 sm:gap-3">
							{Array.from({ length: totalPages }).map(
								(_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
											index === currentIndex
												? "bg-[#F0BA43]"
												: "bg-[#D1D1D1]"
										}`}
										aria-label={`Go to testimonial ${
											index + 1
										}`}
									/>
								)
							)}
						</div>

						{/* Next Button */}
						<button
							onClick={handleNext}
							className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-white border-2 border-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43] transition-colors group flex-shrink-0"
							aria-label="Next testimonials"
						>
							<ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-[#343233] stroke-[2.5] group-hover:text-white" />
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Testimonials;
