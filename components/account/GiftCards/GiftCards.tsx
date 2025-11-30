"use client";

import React, { useState } from "react";

interface Coupon {
	id: number;
	title: string;
	description: string;
	discount: number;
	validUntil: string;
	minOrder: string;
	cashback: string;
	code: string;
}

const coupons: Coupon[] = [
	{
		id: 1,
		title: "70% Discount Coupon",
		description: "Get 70% off on your entire order on all prepaid items",
		discount: 70,
		validUntil: "15.12.2026",
		minOrder: "$200",
		cashback: "+5%",
		code: "SAVE70",
	},
	{
		id: 2,
		title: "20% Discount Coupon",
		description: "Get 20% off on your entire order on all bulk flowers",
		discount: 20,
		validUntil: "15.12.2026",
		minOrder: "$200",
		cashback: "+5%",
		code: "SAVE20",
	},
	{
		id: 3,
		title: "Festive Sale",
		description: "Get 50% off on your entire order on all flowers",
		discount: 50,
		validUntil: "15.12.2026",
		minOrder: "$200",
		cashback: "+5%",
		code: "FESTIVE50",
	},
];

export function GiftCards() {
	const [giftCardBalance] = useState(200.0);
	const [copiedCode, setCopiedCode] = useState<string | null>(null);

	const handleShowCode = (code: string) => {
		setCopiedCode(code);
		setTimeout(() => setCopiedCode(null), 2000);
	};

	return (
		<div className="grid lg:grid-cols-10 grid-cols-1 lg:gap-6">
			{/* Header */}
			<div className="flex items-center justify-between mt-4 md:mt-4 col-span-10">
				<h2 className="text-base border-b border-[#BBBBBB] md:border-0 w-full pb-5 md:pb-0 text-center md:text-left md:text-2xl font-bold">
					Gift Cards & Coupons
				</h2>
			</div>

			{/* Gift Card Balance Section */}
			<div className="flex flex-col gap-4 col-span-6 ">
				<div className="flex items-center mt-4 md:mt-4 justify-between">
					<p className="text-sm md:text-[20px]  text-gray-700">
						Your Gift Card Balance:
					</p>
					<p className="text-[20px] text-text-gray font-bold">
						${giftCardBalance.toFixed(2)}
					</p>
				</div>
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
					<button className="bg-[#F0BA43] text-[#FFFFFF] font-semibold md:h-[52px] h-[42px] px-4 py-2 rounded-[10px] hover:bg-yellow-500 transition-colors  mx-auto sm:w-full w-2/3">
						Update your balance
					</button>
					<button className="border border-[#BBBBBB] text-text-gray font-semibold md:h-[52px] h-[42px] px-4 py-2 rounded-[10px] hover:bg-gray-50 transition-colors mx-auto sm:w-full w-2/3">
						Redeem your gift card
					</button>
				</div>
			</div>

			{/* Coupon Card Details Section */}
			<div className="flex flex-col gap-4 col-span-9">
				<h3 className="text-lg mt-4 md:mt-0 font-semibold">
					Gift Coupon Card Details
				</h3>

				<div className="flex flex-col gap-4">
					{coupons.map((coupon) => (
						<div
							key={coupon.id}
							className="rounded-[10px] p-3 md:p-6 flex flex-col sm:flex-row items-start justify-between gap-6 border border-[#BBBBBB]"
						>
							{/* Left content */}
							<div className="flex-1 flex flex-col gap-3 min-w-0">
								<h4 className="font-semibold text-base text-text-dark">
									{coupon.title}
								</h4>
								<p className="md:text-base text-xs  text-text-gray">
									{coupon.description}
								</p>
								<p className="text-xs md:text-base text-text-gray">
									Valid until: {coupon.validUntil} • Min.
									order {coupon.minOrder} • {coupon.cashback}{" "}
									Cashback
								</p>
								<button className=" md:flex hidden text-sm font-semibold text-text-dark hover:text-gray-600 transition-colors w-fit mt-2">
									More details
								</button>
							</div>

							{/* Right content: discount % and button */}
							<div className="flex  flex-row sm:flex-col items-center sm:items-end gap-17 shrink-0">
								<button className="flex md:hidden block text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors w-fit">
									More details
								</button>
								<div>
									<div className="text-center justify-center gap-2 flex flex-row md:flex-col">
										<p className="text-[22px]  lg:text-[32px] font-bold leading-none">
											{coupon.discount}%
										</p>
										<p className="text-sm  font-semibold">
											OFF
										</p>
									</div>
									<button
										onClick={() =>
											handleShowCode(coupon.code)
										}
										className="bg-[#F0BA43] text-[#FFFFFF] mt-2.5  font-semibold px-9 py-3 md:px-17 md:py-4 rounded-[10px] hover:bg-yellow-500 transition-colors text-sm"
									>
										{copiedCode === coupon.code
											? "Copied!"
											: "Show Code"}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
