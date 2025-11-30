"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
	id: string;
	question: string;
	answer: string;
};

type FaqCategory = {
	category: string;
	items: FaqItem[];
};

const faqData: FaqCategory[] = [
	{
		category: "1. Getting Started",
		items: [
			{
				id: "gs-1",
				question: "Who can purchase bulk cannabis on this marketplace?",
				answer: "Only 38 percent of pre-applicants for a cannabis retail license reserved for those adversely affected by the war on drugs have qualified to submit a formal application, the Cannabis Control Commission announced Friday afternoon.",
			},
			{
				id: "gs-2",
				question:
					"What documents do I need to register as a bulk buyer?",
				answer: "You will need to provide valid business registration documents, tax identification numbers, and proof of compliance with state cannabis regulations. Our team will guide you through the complete documentation process.",
			},
			{
				id: "gs-3",
				question: "How long does verification take?",
				answer: "Verification typically takes 5-7 business days. We review all submitted documents and conduct background checks to ensure compliance with local and state laws.",
			},
		],
	},
	{
		category: "2. Purchasing & Ordering",
		items: [
			{
				id: "po-1",
				question: "What product types can I buy in bulk?",
				answer: "We offer a wide range of bulk cannabis products including flowers, concentrates, edibles, tinctures, and more. Browse our catalog to see all available options.",
			},
			{
				id: "po-2",
				question: "What is the minimum order quantity (MOQ)?",
				answer: "Minimum order quantities vary by product type. Typically, flower orders start at 1 lb, while concentrates and edibles have different thresholds. Contact our sales team for specific MOQ details.",
			},
			{
				id: "po-3",
				question: "Can I negotiate pricing for high-volume orders?",
				answer: "Yes! We offer competitive pricing for high-volume purchases. Our sales team will work with you to create a custom pricing structure based on your order volume and frequency.",
			},
			{
				id: "po-4",
				question: "Can I order from multiple sellers at the same time?",
				answer: "Absolutely. Our platform allows you to consolidate orders from multiple sellers into a single shipment, streamlining your procurement process.",
			},
		],
	},
	{
		category: "3. Product Quality & Lab Testing",
		items: [
			{
				id: "pq-1",
				question: "Are all bulk products lab-tested?",
				answer: "Yes, all products on our marketplace undergo rigorous third-party lab testing to ensure potency, purity, and safety compliance with all regulations.",
			},
			{
				id: "pq-2",
				question: "How do I verify COAs?",
				answer: "Certificates of Analysis (COAs) are available for every product. You can access them directly from the product page or request them from the seller.",
			},
			{
				id: "pq-3",
				question: "Can I request product samples?",
				answer: "Certificates of Analysis (COAs) are available for every product. You can access them directly from the product page or request them from the seller.",
			},
		],
	},
];

export const FaqQuestions: React.FC = () => {
	const [expandedItem, setExpandedItem] = useState<string | null>(null);

	const toggleExpand = (id: string) => {
		setExpandedItem(expandedItem === id ? null : id);
	};

	return (
		<div className="py-8 md:py-12 max-w-4xl mx-auto flex flex-col gap-2.5">
			<p className="md:text-2xl text-xl font-semibold">B2B</p>
			<div className="flex flex-col gap-8">
				{faqData.map((category) => (
					<div key={category.category}>
						{/* Category Heading */}
						<h2 className="text-base md:text-2xl font-semibold text-gray-900 md:mb-5 mb-2.5">
							{category.category}
						</h2>

						{/* FAQ Items */}
						<div className="space-y-3">
							{category.items.map((item) => (
								<div
									key={item.id}
									className="border border-[#BBBBBB] rounded-[10px] overflow-hidden hover:shadow-sm transition"
								>
									<button
										onClick={() => toggleExpand(item.id)}
										className="w-full px-4 md:px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
									>
										<span className="text-left text-base md:text-xl text-[#1D1D1D] font-medium">
											{item.question}
										</span>
										<div className="shrink-0 ml-4 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
											{expandedItem === item.id ? (
												<Minus
													size={16}
													className="text-gray-900"
												/>
											) : (
												<Plus
													size={16}
													className="text-gray-900"
												/>
											)}
										</div>
									</button>

									{/* Expandable Answer */}
									{expandedItem === item.id && (
										<div className="px-4 md:px-6 py-4 bg-white border-t border-gray-200">
											<p className="text-sm md:text-xl text-text-gray leading-relaxed">
												{item.answer}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
