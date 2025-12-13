import React from "react";
import Image from "next/image";
import { Quote, ArrowUpRight } from "lucide-react";

// --- Static Data Arrays for Dynamic Rendering ---

const awardData = [
	{
		id: 1,
		logoPath: "/images/sell/clandestion.png",
		title: "Top Rated",
		description: "The highest quality results and client satisfaction.",
		reviews: "4.9 Reviews", // Added for structure, though currently commented out in JSX
		showStars: true, // Flag to show stars if needed later
	},
	{
		id: 2,
		logoPath: "/images/sell/Kushable.png", // NOTE: This path looks like it should be an image of the logo, not text.
		title: "Excellent Strains",
		description: "Best Formulations companies in Canada 2023.",
		logoAlt: "Kushable Logo",
	},
	{
		id: 3,
		logoPath: "/images/sell/weed.png",
		title: "Top Rated",
		description: "The highest quality results and client satisfaction.",
		logoAlt: "Weed Logo",
	},
];

const testimonialData = [
	{
		id: 1,
		logoText: "MOON ROCK",
		logoClass: "font-black tracking-tighter uppercase",
		quote: "Since I started supplying through Passion Farms, Started getting sales. The payments are made on time, and the community level on demand is invaluable.",
		authorName: "Marcus",
		authorTitle: "CEO",
		authorDetail: "Marcus T., Business Owner",
		authorImage:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
		bgImg: "/images/sell/moonrock-logo.png"
	},
	{
		id: 2,
		logoText: "Proper Cannabis",
		logoClass: "font-serif",
		quote: "I supply pre-rolls across three states now. Passion Farms handled the connector logistics and compliance checks I couldn't navigate alone. This isn't just a marketplace; it's a growth engine.",
		authorName: "Javier",
		authorTitle: "",
		authorDetail: "Javier R., Manufacturing Partner",
		authorImage:
			"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&h=100&fit=crop",
		bgImg: "/images/sell/proper.png"
	},
	{
		id: 3,
		logoText: 'SKY<span className="font-bold">MINT</span>™',
		logoClass: "font-light tracking-widest",
		quote: "The quality of connections here is different. I'm not just moving product; I'm building lasting B2B relationships. My average order value has increased a lot.",
		authorName: "Solomon",
		authorTitle: "",
		authorDetail: "Solomon K., Master Grower",
		authorImage:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
		bgImg: "/images/sell/skymint.png"
	},
];

export const Testimonials = () => {
	return (
		<section className="bg-white py-5 md:px-12 px-5 font-sans text-[#1A1A1A]">
			<div className="max-w-7xl mx-auto">
				{/* --- Header --- */}
				<div className="text-center mb-8">
					<h2 className="md:text-4xl text-xl text-[#1D1D1D] font-bold">
						Testimonials
					</h2>
				</div>

				{/* --- Top Row: Awards/Recognition --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 md:mb-9 mb-3">
					{awardData.map((award) => (
						<div
							key={award.id}
							className="md:border-t md:border-r border-[#E8E8E8] md:p-6 md:py-6 py-2 flex flex-row items-center md:items-start gap-4 last:border-r-0 first:border-t"
						>
							<div className="flex gap-1.5 h-16 relative shrink-0 border border-[#bbbbbb] md:w-[50%] rounded-[10px] w-[33%]">

								<Image
									src={award.logoPath}
									alt={award.logoAlt || award.title}
									fill
									className={
										"object-contain p-3 h-full"
									}
								/>

							</div>
							<div className="flex flex-col gap-2">
								<h3 className="font-bold text-[#1D1D1D] md:text-base text-sm mb-1">
									{award.title}
								</h3>
								<p className="text-sm text-text-gray leading-loose">
									{award.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* --- Section Divider Text --- */}
				<div className="md:mb-7 mb-4">
					<p className="md:text-base text-sm uppercase tracking-wide text-[#1D1D1D] font-semibold mb-2">
						What Our Partners Say
					</p>
					{/* Trust Built on Performance. */}
					<p className="md:text-base text-sm text-text-gray font-light">
						Trust Built on Performance.
					</p>
				</div>

				{/* --- Bottom Row: Partner Testimonials --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
					{testimonialData.map((testimonial) => (
						<div
							key={testimonial.id}
							className="flex flex-col group"
						>
							<div className="relative h-[191px] md:h-[253px] bg-black rounded-2xl flex items-center justify-center p-8 md:mb-8 mb-6 overflow-visible">
								<Image
									src={testimonial.bgImg}
									alt="tesimonial image"
									fill
									className="md:p-20 p-10"
								/>
								{/* Floating Profile Badge */}
								<div className="absolute bottom-0 left-0 bg-white py-2 px-3 rounded-lg shadow-md border border-gray-100 flex items-center gap-3 z-10">
									<div className="w-10 h-10 rounded bg-gray-200 overflow-hidden relative">
										<Image
											src={testimonial.authorImage}
											alt={testimonial.authorName}
											fill
											className="object-cover"
										/>
									</div>
									<div className="leading-tight">
										<p className="font-bold text-sm text-[#1D1D1D]">
											{testimonial.authorName}
										</p>
										<p className="text-xs text-gray-500">
											{testimonial.authorTitle}
										</p>
									</div>
								</div>
							</div>
							<div className="px-2">
								<div className="flex gap-2">
									<Quote
										className="fill-black w-12 text-black mb-4 rotate-180"
										size={42}
									/>
									<p className="text-text-gray mb-4 leading-relaxed md:text-base text-sm">
										{testimonial.quote}
									</p>
								</div>
								<p className="font-semibold md:text-base text-sm text-[#1D1D1D] mb-2">
									{testimonial.authorDetail}
								</p>

								<a
									href="#"
									className="inline-flex items-center text-sm font-semibold hover:text-orange-500 transition-colors gap-1 text-[#1D1D1D]"
								>
									Read more{" "}
									<div className="border border-[#F0BA43] p-1 rounded-full h-6 w-6 inline-flex justify-center align-middle">
										<ArrowUpRight
											size={16}
										/>
									</div>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
