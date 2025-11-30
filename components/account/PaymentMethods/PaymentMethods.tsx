"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input/Input";

const paymentMethods = [
	{
		id: 1,
		type: "Visa",
		lastFour: "4242",
		expiryMonth: 12,
		expiryYear: 2026,
		holderName: "John Doe",
		default: true,
	},
	{
		id: 2,
		type: "Mastercard",
		lastFour: "5555",
		expiryMonth: 8,
		expiryYear: 2025,
		holderName: "John Doe",
		default: false,
	},
];

export function PaymentMethods() {
	const [methods] = useState(paymentMethods);

	return (
		<div className="flex  flex-col md:gap-5 gap-3">
			<h2 className="md:text-2xl text-center md:text-left text-base font-bold lg:pt-0 py-5 border-b border-[#bbbbbb]">
				Payment Details
			</h2>

			<h3 className="text-sm md:text-base font-semibold">
				Saved Payment Methods
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Left: forms and saved methods (span 2) */}
				<div className="lg:col-span-2 flex flex-col gap-6">
					{/* UPI section */}
					<div>
						<h4 className="font-semibold mb-2 md:text-base text-[12px]">
							UPI
						</h4>
						<div className="border border-[#BBBBBB] rounded-[10px] p-4 ">
							<div className="flex flex-col gap-3 ">
								<div className="flex border-b border-[#BBBBBB] md:pb-4 pb-3 w-full items-center gap-3 ">
									<input
										type="radio"
										name="upi"
										className="shrink-0"
									/>
									<label className="text-sm  text-gray-700">
										Phone pay
									</label>
								</div>

								<div className="flex items-center gap-3 border-b border-[#BBBBBB] md:pb-4 pb-3">
									<input
										type="radio"
										name="upi"
										className="shrink-0"
									/>
									<label className="text-sm text-gray-700">
										Google pay
									</label>
								</div>

								<div className="flex items-center gap-3">
									<input
										type="radio"
										name="upi"
										className="shrink-0"
									/>
									<label className="text-sm text-gray-700">
										UPI ID
									</label>
								</div>

								<div className="flex  items-center">
									<Input placeholder="Enter UPI ID" />
									<button className="bg-[#F0BA43] text-[#FFFFFF] md:h-[52px] h-[42px] font-semibold px-4 py-2 hover:bg-yellow-500 transition-colors">
										Verify
									</button>
								</div>

								<div>
									<button className="w-full bg-[#F0BA43] text-[#FFFFFF] font-semibold px-4 py-2 rounded-[10px] hover:bg-yellow-500 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Card section */}
					<div>
						<h4 className="font-semibold mb-2 md:text-base text-[12px]">
							Credit / Debit / ATM Card
						</h4>
						<div className="border border-[#BBBBBB] rounded-[10px] p-4">
							<div className="flex flex-col gap-3">
								<Input
									placeholder="Card Number"
									label="Card Number"
									className=""
								/>

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
									<Input
										placeholder="Valid Thru"
										label="Valid Thru"
									/>
									<Input placeholder="CVV" label="CVV" />
									<div />
								</div>

								<div>
									<button className="w-full border border-[#F0BA43] text-[#F0BA43] font-semibold px-4 py-2 rounded-[10px] hover:bg-yellow-50 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Net Banking */}
					<div className="md:block hidden">
						<h4 className="font-semibold mb-2">Net Banking</h4>
						<div className="border border-[#BBBBBB] rounded-[10px] p-4">
							<div className="flex flex-col gap-3">
								<label className="flex items-center gap-3">
									<input type="radio" name="bank" />
									<span>State Bank of India</span>
								</label>
								<label className="flex items-center gap-3">
									<input type="radio" name="bank" />
									<span>HDFC Bank</span>
								</label>
								<label className="flex items-center gap-3">
									<input type="radio" name="bank" />
									<span>ICICI Bank</span>
								</label>

								<div>
									<button className="w-full bg-[#F0BA43] text-[#FFFFFF] font-semibold px-4 py-2 rounded-[10px] hover:bg-yellow-500 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Gift card / promo */}
					<div>
						<h4 className="font-semibold mb-2 md:text-base text-[12px]">
							Add Gift Card or Promo Code
						</h4>
						<div className="border border-[#BBBBBB] rounded-[10px] p-4">
							<div className="flex gap-3 text-base">
								<Input
									placeholder="Card Number"
									label="Card Number"
									className=""
								/>
								<button className="bg-[#F0BA43] text-[#FFFFFF] md:h-[52px] h-[42px] font-semibold px-4 py-2 rounded-[10px] hover:bg-yellow-500 transition-colors">
									Apply
								</button>
							</div>

							<div className="mt-3">
								<button className="w-full border border-[#F0BA43] text-[#F0BA43] font-semibold px-4 py-2 rounded-[10px] hover:bg-yellow-50 transition-colors">
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Right: order summary */}
				<aside className="lg:col-span-1 mt-8">
					<div className="border border-[#BBBBBB] rounded-[10px] p-4 flex flex-col justify-between h-fit">
						<p className="text-sm text-gray-600">Price (3 items)</p>
						<div className="flex items-center justify-between mt-2">
							<span className="text-sm">Product Promise Fee</span>
							<span className="font-semibold">$10</span>
						</div>
						<div className="flex items-center justify-between mt-2">
							<span className="text-base font-semibold">
								Total Amount
							</span>
							<span className="text-base font-bold">
								$5,001.00
							</span>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
}
