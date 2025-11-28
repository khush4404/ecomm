"use client";

import React from "react";

interface OrderItem {
	name: string;
	qty: number;
	price: string;
}

interface Order {
	id: number;
	orderNumber: string;
	date: string;
	total: string;
	status: string;
	items: OrderItem[];
}

interface OrderDetailsProps {
	order: Order;
	onBack: () => void;
}

export function OrderDetails({ order }: OrderDetailsProps) {
	return (
		<div className="flex flex-col gap-6">
			{/* Header */}
			<div className="flex flex-col items-center md:flex-row justify-between">
				<h2 className="text-base md:text-2xl font-bold">
					Order Details
				</h2>

				<div className="flex items-center gap-2">
					<label className="md:text-[12px] md:text-sm text-gray-600">
						Show details:
					</label>
					<select className=" px-3 py-1 text-[12px] md:text-sm">
						<option>Last month</option>
						<option>Last 3 months</option>
						<option>Last year</option>
					</select>
				</div>
			</div>

			{/* Order Info Summary */}
			<div className="flex">
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-1 flex-3">
					<div className="flex flex-col md:gap-2.5 gap-0">
						<p className="md:text-base text-[12px] text-text-dark font-semibold">
							Date ordered
						</p>
						<p className="md:text-base text-[12px] text-text-gray">
							{order.date}
						</p>
					</div>
					<div className="flex flex-col md:gap-2.5 gap-0">
						<p className="md:text-base text-[12px] text-text-dark font-semibold">
							Order Number
						</p>
						<p className="md:text-base text-[12px] text-text-gray">
							{order.orderNumber}
						</p>
					</div>
					<div className="flex flex-col md:gap-2.5 gap-0">
						<p className="md:text-base text-[12px] text-text-dark font-semibold">
							Total Amount
						</p>
						<p className="md:text-base text-[12px] text-text-gray">
							{order.total}
						</p>
					</div>
				</div>

				<div className="md:block hidden flex items-center gap-4 flex-2 justify-end">
					<button className="border border-gray-300 px-8 py-3.5 rounded-md text-base hover:bg-gray-50">
						View Order
					</button>
					<button className="bg-amber-400 text-white px-8 py-3.5 rounded-md text-base hover:bg-amber-500">
						View Invoice
					</button>
				</div>
			</div>

			{/* Items */}
			{order.items.length === 0 ? (
				<div className="text-center py-8 text-gray-500">
					No items in this order.
				</div>
			) : (
				<div className="flex flex-col gap-4">
					{order.items.map((item, idx) => (
						<div
							key={idx}
							className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg w-full"
						>
							{/* TOP SECTION */}
							<div className="flex sm:flex-row  sm:items-start items-start gap-4 w-full">
								{/* Image */}
								<div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0" />

								{/* PRODUCT DETAILS */}
								<div className="flex-1 flex flex-col">
									<h4 className=" text-base md:text-[20px] font-semibold text-text-dark">
										{item.name}
									</h4>

									<p className="text-[12px] md:text-sm text-text-gray mt-1">
										Cherry Garcia is a crowd-favorite strain
										known for its smooth, dessert-like
										flavor and balanced effects. Expect a
										burst of sweet cherry and creamy berry
										notes on the inhale, rounded by earthy
										undertones that linger pleasantly.
									</p>
								</div>

								{/* DESKTOP Qty + Price */}
								<div className="hidden sm:flex text-right shrink-0 flex-row-reverse gap-10.5">
									<p className="text-lg font-bold">
										{item.price}
									</p>
									<p className="text-sm text-gray-600 mt-1">
										x{item.qty}
									</p>
								</div>
							</div>

							{/* BOTTOM SECTION */}
							<div className="flex sm:flex-row flex-col justify-between w-full gap-3">
								{/* Delivered */}
								<div className="flex  items-center justify-between gap-2">
									<div className="flex  items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-green-500" />
										<p className="text-[12px] md:text-sm text-text-gray font-semibold">
											Delivered on 12/11/2025
										</p>
									</div>
									<div className="flex gap-2 sm:hidden justify-between items-center">
										<p className="text-sm text-gray-600">
											x{item.qty}
										</p>
										<p className="text-[12px] font-bold">
											{item.price}
										</p>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex justify-between gap-8">
									<button className="text-[#f0ba43] hover:underline font-semibold text-sm">
										View Product
									</button>
									<button className="text-[#f0ba43] hover:underline font-semibold text-sm">
										Buy again
									</button>
								</div>
							</div>
						</div>
					))}

					{/* Buttons Below Orders */}
					<div className="inline-flex md:hidden items-center gap-4 justify-between w-full">
						<button className="border border-gray-300 px-8 py-3.5 rounded-md text-base hover:bg-gray-50">
							View Order
						</button>
						<button className="bg-amber-400 text-white px-8 py-3.5 rounded-md text-base hover:bg-amber-500">
							View Invoice
						</button>
					</div>

					<button className="border border-[#bbbbbb] text-base leading-6 py-3.5 px-10 rounded-[10px] text-text-dark w-fit self-center mt-4">
						No more results to display
					</button>
				</div>
			)}

			{/* Empty State if no items */}
			{order.items.length === 0 && (
				<div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
					<p className="text-gray-500 font-semibold">
						No more results to display
					</p>
				</div>
			)}
		</div>
	);
}
