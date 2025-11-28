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
		<div className="flex flex-col gap-6">
			<h2 className="text-2xl font-bold lg:pt-0 py-5 border-b border-[#bbbbbb]">
				Payment Details
			</h2>

			<h3 className="text-sm font-semibold">Saved Payment Methods</h3>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Left: forms and saved methods (span 2) */}
				<div className="lg:col-span-2 flex flex-col gap-6">
					{/* UPI section */}
					<div>
						<h4 className="font-semibold mb-2">UPI</h4>
						<div className="border border-gray-200 rounded-lg p-4">
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-3">
									<input
										type="radio"
										name="upi"
										className="shrink-0"
									/>
									<label className="text-sm text-gray-700">
										Phone pay
									</label>
								</div>

								<div className="flex items-center gap-3">
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

								<div className="flex gap-3 items-center">
									<Input placeholder="Enter UPI ID" />
									<button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
										Verify
									</button>
								</div>

								<div>
									<button className="w-full bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Card section */}
					<div>
						<h4 className="font-semibold mb-2">
							Credit / Debit / ATM Card
						</h4>
						<div className="border border-gray-200 rounded-lg p-4">
							<div className="flex flex-col gap-3">
								<Input placeholder="Card Number" />

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
									<Input placeholder="Valid Thru" />
									<Input placeholder="CVV" />
									<div />
								</div>

								<div>
									<button className="w-full border border-[#F0BA43] text-[#F0BA43] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Net Banking */}
					<div>
						<h4 className="font-semibold mb-2">Net Banking</h4>
						<div className="border border-gray-200 rounded-lg p-4">
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
									<button className="w-full bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
										Pay
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Gift card / promo */}
					<div>
						<h4 className="font-semibold mb-2">
							Add Gift Card or Promo Code
						</h4>
						<div className="border border-gray-200 rounded-lg p-4">
							<div className="flex gap-3">
								<Input placeholder="Card Number" />
								<button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
									Apply
								</button>
							</div>

							<div className="mt-3">
								<button className="w-full border border-[#F0BA43] text-[#F0BA43] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-colors">
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Right: order summary */}
				<aside className="lg:col-span-1 mt-8">
					<div className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-fit">
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
