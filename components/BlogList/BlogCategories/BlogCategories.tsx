"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

type Category = {
	id: string;
	name: string;
	active?: boolean;
};

type InfoCard = {
	id: string;
	title: string;
	subtitle: string;
};

const categoriesData: Category[] = [
	{ id: "c1", name: "Cannabis Basics" },
	{ id: "c2", name: "Product Guides" },
	{ id: "c3", name: "How-To & Usage Tips" },
	{ id: "c4", name: "Industry News & Updates" },
	{ id: "c5", name: "Cultivation & Production" },
	{ id: "c6", name: "Wellness & Lifestyle" },
	{ id: "c7", name: "Lab Testing & Quality" },
	{ id: "c8", name: "Buying Guides & FAQs", active: true },
	{ id: "c9", name: "Business & Wholesale" },
	{ id: "c10", name: "Extracts, Concentrates & Edibles" },
];

const cardsData: InfoCard[] = [
	{
		id: "i1",
		title: "Product Information",
		subtitle: "Learn about our offerings",
	},
	{
		id: "i2",
		title: "Give an Affirmation",
		subtitle: "Acknowledge great work",
	},
	{ id: "i3", title: "The Big Deal", subtitle: "Lowest Product offer ever" },
];

export const BlogCategories: React.FC = () => {
	const [categories] = useState<Category[]>(categoriesData);
	const [cards] = useState<InfoCard[]>(cardsData);

	return (
		<section className="py-6 lg:py-12">
			<div className="container mx-auto md:px-4 px-0">
				{/* Pills */}
				<div className="flex flex-wrap flex-col sm:flex-row w-auto  md:gap-11 gap-2.5  justify-center mb-8">
					{categories.map((c) => (
						<button
							key={c.id}
							className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all whitespace-nowrap ${
								c.active
									? "bg-[#F0BA43] text-white border-yellow-400"
									: "bg-white text-gray-800 border-[#BBBBBB] hover:bg-gray-50"
							}`}
						>
							{c.name}
						</button>
					))}
				</div>

				{/* Info cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cards.map((card) => (
						<div
							key={card.id}
							className="flex items-center gap-4 bg-gray-50 rounded-[10px] md:p-9 p-3 shadow-sm hover:shadow-md transition"
						>
							<div className="w-12 h-12 rounded-[10px] bg-white flex items-center justify-center text-gray-600">
								{/* simple icon placeholder */}
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="3"
										y="7"
										width="14"
										height="10"
										rx="2"
										stroke="#CBD5E1"
										strokeWidth="1.5"
									/>
									<path
										d="M21 7h-0"
										stroke="#CBD5E1"
										strokeWidth="1.5"
									/>
								</svg>
							</div>

							<div className="flex-1">
								<div className="text-sm md:text-base font-medium text-[#1D1D1D]">
									{card.title}
								</div>
								<div className="text-sm text-gray-500">
									{card.subtitle}
								</div>
							</div>

							<div>
								<ChevronRight
									size={20}
									className="text-gray-400"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogCategories;
