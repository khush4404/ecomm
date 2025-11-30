"use client";

import React from "react";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Support from "@/components/common/Support";
import { ArrowDown, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
	const countryOptions = [
		{ value: "us", label: "United States" },
		{ value: "ca", label: "Canada" },
		{ value: "uk", label: "United Kingdom" },
	];

	const companyOptions = [
		{ value: "none", label: "-- None --" },
		{ value: "acme", label: "ACME Co." },
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
				{/* Left: form (50%) */}
				<div className="space-y-6">
					{/* All form details in one box */}
					<div className="bg-white border border-[#BBBBBB] rounded-[10px] md:p-6 p-3">
						{/* Payment methods */}
						<div className="md:pb-6 pb-4 ">
							{/* Top banner / photo area */}
							<div className="w-full  rounded-[10px] overflow-hidden  flex items-center justify-center">
								<div className="w-full max-w-4xl">
									<div className="flex md:gap-4.5 gap-[5px] items-center">
										<div className="flex-1 flex items-center justify-center border border-[#BBBBBB] rounded-[10px] p-3 bg-white">
											<img
												src="/images/categories/googlepay.png"
												alt="G Pay"
												className="h-4 md:h-4 size-22 object-contain"
											/>
										</div>

										<div className="flex-1 flex items-center justify-center border border-[#BBBBBB] rounded-[10px] p-3 bg-white">
											<img
												src="/images/categories/paypal.png"
												alt="PayPal"
												className="h-4 md:h-4 size-22 object-contain"
											/>
										</div>

										<div className="flex-1 flex items-center justify-center border border-[#BBBBBB] rounded-[10px] p-3 bg-white">
											<img
												src="/images/categories/amazonpay.png"
												alt="Amazon Pay"
												className="h-4 md:h-4 size-22 object-contain"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className=" flex gap-4 mt-4 items-center">
								<span className="border border-[#bbbbbb] w-full h-0.5"></span>
								<div className="text-center text-sm text-gray-400">
									or
								</div>
								<span className="border border-[#bbbbbb] w-full h-0.5"></span>
							</div>
						</div>

						{/* Contact information */}
						<div className="flex flex-col md:flex-row items-center justify-between mb-4">
							<h3 className="text-[12px] md:text-base font-semibold">
								Contact information
							</h3>
							<a
								href="/account/login"
								className="md:text-base text-[12px] text-[#21465E] hover:underline"
							>
								Already have an account? Login
							</a>
						</div>

						<div className="space-y-4 mb-6">
							<Input
								placeholder="Email"
								type="email"
								className="!w-[560px]"
							/>
							<div className="flex items-center">
								<input
									type="checkbox"
									id="newsletter"
									className="mr-2"
								/>
								<label
									htmlFor="newsletter"
									className="text-sm text-gray-600"
								>
									Keep me up to date on news and exclusive
									offers
								</label>
							</div>
						</div>

						{/* Divider */}

						{/* Shipping address */}
						<h3 className="text-lg font-semibold mb-4">
							Shipping address
						</h3>
						<div className="flex flex-col  gap-4">
							<div className="flex gap-4 flex-col md:flex-row">
								<div className="flex-1">
									<Input
										placeholder="First name"
										className="!md:w-[305px]"
									/>
								</div>
								<div className="flex-1">
									<Input
										placeholder="Last name"
										className="!md:w-[305px]"
									/>
								</div>
							</div>

							<div className="flex flex-col  gap-4 mb-4">
								<div className="flex-1">
									<Input
										placeholder="Address 1"
										className="w-full"
									/>
								</div>
								<div className="flex-1">
									<Input
										placeholder="Address 2"
										className="w-full"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col space-y-4">
							<div className="flex h-[52px] flex-col md:flex-row gap-4">
								<div className="flex-1  border-[#BBBBBB] rounded-[10px]">
									<Select
										options={countryOptions}
										placeholder="Select a country"
										className="h-[52px] "
									/>
								</div>
							</div>
							<div className="flex-1 flex-col">
								<Input placeholder="City" />
							</div>

							<div className="flex gap-4">
								<div className="flex-1">
									<Input
										placeholder="Postal code"
										className="!w-full"
									/>
								</div>
							</div>
							<div className="flex flex-col md:flex-row gap-4 mb-4 ">
								<div className="flex-1">
									<Select
										className="w-full h-[52px]"
										options={companyOptions}
									/>
								</div>
								<div className="flex-1">
									<Input
										placeholder="Phone"
										className="w-full"
									/>
								</div>
							</div>

							<textarea
								placeholder="Additional information"
								rows={5}
								className="border rounded-[10px] border-[#BBBBBB] p-4"
							/>
						</div>
					</div>

					<div className="flex items-center gap-4 justify-between">
						<a
							href="/cart"
							className="inline-flex items-center border border-[#BBBBBB] rounded-md md:border-0 md:px-0 px-4 py-2 gap-2 text-base text-text-dark"
						>
							<ArrowLeft className="text-text-dark size-4" />
							Return to Cart
						</a>

						<button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
							Place an Order →
						</button>
					</div>
				</div>

				{/* Right: order summary (50%) */}
				<aside className="lg:col-span-1">
					<div className="bg-white border border-[#BBBBBB] md:p-6 p-3 sticky top-6 rounded-[10px]">
						<h2 className="md:text-base text-sm font-semibold mb-4">
							Your order
						</h2>

						<div className="space-y-3 mb-4">
							{[1, 2, 3].map((i) => (
								<div
									key={i}
									className="flex items-center gap-3 border border-[#BBBBBB] rounded-md p-3"
								>
									<div className="w-16 h-16 bg-gray-100 rounded-md" />
									<div className="flex-1">
										<div className="font-medium">
											Product name
										</div>
										<div className="text-sm text-gray-500">
											x1
										</div>
									</div>
									<div className="font-medium">$1,075.00</div>
								</div>
							))}
						</div>

						<div className="flex">
							<Input placeholder="Enter coupon code" className="rounded-r-none" />
							<button className="px-4 bg-amber-400 text-white rounded-md hover:bg-amber-500 rounded-l-none">
								Apply
							</button>
						</div>

						<div className="mt-4  pt-4">
							<div className="flex justify-between pb-2 text-sm text-text-gray">
								<div>Subtotal</div>
								<div className="text-text-dark text-base font-semibold">$3,225.00</div>
							</div>
							<div className="flex justify-between border-b border-[#F2F2F2] pb-2 text-sm  mt-2 text-text-gray">
								<div>Shipping</div>
								<div className="text-text-dark text-base font-semibold">-</div>
							</div>
							<div className="flex justify-between font-semibold text-lg mt-3">
								<div>Total</div>
								<div>$3,225.00</div>
							</div>
						</div>
					</div>
				</aside>
			</div>
			<Support />;
		</div>
	);
}
