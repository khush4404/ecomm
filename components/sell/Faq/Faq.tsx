"use client";
import { Search, Plus, Minus } from "lucide-react";
import { useState } from "react";

// --- Static FAQ Data ---
const faqItems = [
	{
		id: 1,
		question: "What are the requirements to become a vendor?",
		answer: "Click the sign up button and complete the registration process. Within hours you will get access to your dashboard after verification.",
	},
	{
		id: 2,
		question: "What are the fees for selling on Passion Farms?",
		// The image shows an intermediate item "From expandeir" that appears to be another question.
		// For a standard FAQ, I'll include the next visible question/item.
		answer: "We offer competitive rates for certified partners. For new sellers, we frequently offer a 0% marketplace fee on all your sales for a limited time.",
	},
	{
		id: 3,
		question: "How do shipping and logistics work?",
		answer: "We provide end-to-end logistics solutions, handling compliance checks and transportation. You simply list your products, and we manage the delivery.",
	},
	{
		id: 4,
		question: "How are payments secured and processed?",
		answer: "Payments are processed securely through our managed escrow system, ensuring you get paid promptly upon verified delivery of your products.",
	},
	{
		id: 5,
		question: "Can I sell in states where I'm not physically located?",
		answer: "Yes, our platform is designed to handle multi-state compliance and logistics, allowing you to scale your brand beyond your physical location.",
	},
];

export const Faq = () => {
	// State to manage which FAQ item is currently open (stores the ID)
	const [openId, setOpenId] = useState<number | null>(faqItems[0].id); // Item 1 is open by default, matching the image
	// State to manage the visible number of FAQ items before the "Load More" button
	const [visibleCount, setVisibleCount] = useState(5);

	const toggleFAQ = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	const handleLoadMore = () => {
		// Load the next 5 items, or up to the total number of items
		setVisibleCount((prevCount) =>
			Math.min(prevCount + 5, faqItems.length)
		);
	};

	const renderIcon = (id: number) => {
		return openId === id ? (
			<Minus
				size={20}
				className="text-gray-700 transition-transform duration-300"
			/>
		) : (
			<Plus
				size={20}
				className="text-gray-700 transition-transform duration-300"
			/>
		);
	};

	return (
		<section className="bg-white py-10 px-4 font-sans text-[#1A1A1A]">
			<div className="max-w-4xl mx-auto">
				{/* --- Header --- */}
				<div className="text-center mb-3">
					<h2 className="md:text-[28px] text-base font-semibold text-[#1D1D1D] mb-3">
						Frequently Asked Questions (FAQs)
					</h2>
					<p className="md:text-base text-[12px] text-[#1D1D1D] max-w-xl mx-auto">
						Find answers to common questions about our products,
						orders, and more. For further help, feel free to contact
						us
					</p>
				</div>

				{/* --- Search Bar --- */}
				<div className="md:mb-10 mb-5">
					<div className="relative">
						<input
							type="text"
							placeholder="Search"
							className="w-full py-4 pl-14 pr-6 rounded-[40px] bg-[#F5F5F5] text-base text-[#1D1D1D]  transition-all"
						/>
						<Search
							size={20}
							className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
						/>
					</div>
				</div>

				{/* --- FAQ Accordion Items --- */}
				<div className="border-t border-gray-200">
					{faqItems.slice(0, visibleCount).map((item) => (
						<div
							key={item.id}
							className="border-b border-[#BBBBBB]"
						>
							{/* Question/Toggle Button */}
							<button
								className="w-full text-left py-5 flex justify-between items-start focus:outline-none"
								onClick={() => toggleFAQ(item.id)}
							>
								<span className="md:text-base text-sm font-semibold text-[#1D1D1D] pr-4">
									{item.question}
								</span>
								{renderIcon(item.id)}
							</button>

							{/* Answer Content (Collapsible) */}
							{openId === item.id && (
								<div className="pb-6 text-sm md:text-base text-[#878787] leading-relaxed pr-8 transition-opacity duration-300">
									{item.answer}
								</div>
							)}
						</div>
					))}
				</div>

				{/* --- Load More Button --- */}
				{visibleCount < faqItems.length && (
					<div className="text-center mt-12">
						<button
							onClick={handleLoadMore}
							className="px-8 py-3 bg-gray-100 text-[#1D1D1D] font-medium rounded-full hover:bg-gray-200 transition-colors shadow-sm"
						>
							Load More
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
