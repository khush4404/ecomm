"use client";

import { useState } from "react";

export default function Support() {
	// track which images failed to load so we can show a lucide fallback
	const [imgError, setImgError] = useState<Record<number, boolean>>({});

	const supportData = [
		{
			src: "/images/supports/free-delivery.svg",
			title: "Free Delivery",
			text: "From all order over $500",
		},
		{
			src: "/images/supports/support247.svg",
			title: "Support 24/7",
			text: "Shop with an expert",
		},
		{
			src: "/images/supports/gift.svg",
			title: "Gift Voucher",
			text: "Refer a friend",
		},
		{
			src: "/images/supports/securepayment.svg",
			title: "Secure payment",
			text: "100% Protected",
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center pt-8 mx-auto max-w-full sm:max-w-6xl">
			{supportData.map((item, index) => {
				return (
					<div
						key={index}
						className="flex items-center text-center py-2 px-8 border border-[#BBBBBB] rounded-[10px] gap-2 flex-1 sm:justify-center"
					>
						{/* try to load image from public/images/supports; fall back to lucide icon on error */}
						<img
							src={item.src}
							alt={item.title}
							className="size-8 object-contain"
						/>
						<div className="flex flex-col items-baseline">
							<h5 className="font-semibold text-[#1D1D1D] text-base">
								{item.title}
							</h5>
							<p className="text-xs text-text-gray">
								{item.text}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
