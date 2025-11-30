import React from "react";
import Link from "next/link";

export default function GiftCardsPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Gift Cards & Coupons</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Gift Cards Section */}
				<div className="space-y-6">
					<div className="bg-white rounded-[10px] shadow p-6">
						<h2 className="text-xl font-semibold mb-4">
							Your Gift Cards
						</h2>
						<div className="space-y-4">
							{/* Sample Gift Card */}
							<div className="border rounded-[10px] p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
								<p className="text-sm opacity-90">
									Gift Card Balance
								</p>
								<p className="text-3xl font-bold mb-2">
									$50.00
								</p>
								<p className="text-xs opacity-75">
									Card: XXXX-XXXX-1234
								</p>
							</div>
						</div>

						<div className="mt-6">
							<h3 className="font-semibold mb-3">
								Add Gift Card
							</h3>
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Enter gift card code"
									className="flex-1 border rounded px-4 py-2 text-[#1D1D1D]"
								/>
								<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
									Apply
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Coupons Section */}
				<div className="space-y-6">
					<div className="bg-white rounded-[10px] shadow p-6">
						<h2 className="text-xl font-semibold mb-4">
							Your Coupons
						</h2>
						<div className="space-y-3">
							{/* Sample Coupon */}
							<div className="border-2 border-dashed border-green-500 rounded-[10px] p-4 bg-green-50">
								<div className="flex justify-between items-start">
									<div>
										<p className="font-bold text-green-700 text-lg">
											20% OFF
										</p>
										<p className="text-sm text-gray-700 mt-1">
											On orders over $100
										</p>
										<p className="text-xs text-gray-600 mt-2">
											Code: SAVE20
										</p>
									</div>
									<span className="text-xs text-gray-600">
										Expires: 12/31/24
									</span>
								</div>
							</div>

							<div className="border-2 border-dashed border-orange-500 rounded-[10px] p-4 bg-orange-50">
								<div className="flex justify-between items-start">
									<div>
										<p className="font-bold text-orange-700 text-lg">
											Free Shipping
										</p>
										<p className="text-sm text-gray-700 mt-1">
											On all orders
										</p>
										<p className="text-xs text-gray-600 mt-2">
											Code: FREESHIP
										</p>
									</div>
									<span className="text-xs text-gray-600">
										Expires: 11/30/24
									</span>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<h3 className="font-semibold mb-3">
								Add Coupon Code
							</h3>
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Enter coupon code"
									className="flex-1 border rounded px-4 py-2"
								/>
								<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
									Apply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
