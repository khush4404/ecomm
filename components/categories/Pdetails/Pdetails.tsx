"use client";

import React, { useState } from "react";
import { Heart, Minus, Plus, MapPin } from "lucide-react";
import { SocialIcons } from "@/components/common/SocialIcons";

const images = [
	"/images/categories/bigflower.png",
	"/images/categories/canphoto.jpg",
	"/images/categories/shakker.png",
	"/images/categories/twoshakker.png",
	"/images/categories/manyflower.png",
];

const productDetails = {
	title: "Cherry Garcia",
	priceRange: "$1,075.00 - $18,500.00",
	rating: 4.4,
	reviews: 65,
	wholesalePricing: [
		{ quantity: "💰: 20+ ➡️   $875" },
		{ quantity: "Under 20 ➡️  $925" },
		{ quantity: "Under 15 ➡️  $975" },
		{ quantity: "Under 15 ➡️  $925" },
		{ quantity: "Under 10 ➡️  $1025" },
		{ quantity: "Under 5 ➡️   $1075" },
	],
	availability: " 2 in stock",
	sku: "N/A",
	category: "Bulk flowers",
	offers: "No Featured offers available",
	description:
		"Cherry Garcia is a crowd-favorite strain known for its smooth, dessert-like flavor and balanced effects. Expect a burst of sweet cherry and creamy berry notes on the inhale, rounded by earthy undertones that linger pleasantly. This premium bulk flower offers dense, trichome-rich buds with deep green hues and a hint of purple – a visual treat that matches its flavor.",
	effects: "Relaxing • Uplifting • Creative Calm",
	idealFor: "Evening sessions, stress relief, and winding down without couch-lock.",
	thca: "77.20%",
	paymentLogos: [
		"/images/categories/visa.png",
		"/images/categories/mastercard.png",
		"/images/categories/amex.png",
		"/images/categories/discover.png",
	],
	badgeText: "Best Seller",
	safeCheckoutText: "Guaranteed Safe Checkout",
};

export const Pdetails: React.FC = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [unit, setUnit] = useState("1 lbs");

	const handleQuantityChange = (type: "inc" | "dec") => {
		if (type === "inc") setQuantity((q) => q + 1);
		else setQuantity((q) => Math.max(1, q - 1));
	};

	return (
		<>
			<section className="w-full bg-white py-8 lg:py-16">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[19px]">
						{/* Left: Image Gallery */}
						<div className="lg:col-span-5">
							<div className="flex flex-col-reverse lg:flex-row gap-[22px]">
								{/* Thumbnails - vertical on desktop, horizontal scroll on mobile */}
								<div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-hidden lg:w-[100px] scrollbar-hide">
									{images.map((img, idx) => (
										<button
											key={idx}
											onClick={() =>
												setSelectedImageIndex(idx)
											}
											className={`shrink-0 w-[70px] h-[70px] lg:w-[94px] lg:h-[94px] rounded-[10px] overflow-hidden transition-all border ${idx === selectedImageIndex
												? "bg-gray-50 border-text-gray"
												: "bg-white border-[#bbbbbb] hover:border-gray-400"
												}`}
										>
											<img
												src={img}
												alt={`thumb-${idx}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>

								{/* Main Preview Image */}
								<div className="flex-1 relative">
									<div className=" rounded-[10px] p-6 lg:p-8 flex items-center justify-center border  border-[#bbbbbb] aspect-square lg:aspect-auto sm:h-auto sm::w-[444px] ">
										<img
											src={images[selectedImageIndex]}
											alt="Main product"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Best Seller Badge */}
									<div className="absolute top-0 right-0 bg-[#EB4336] text-white px-3 py-2 rounded-[10px] text-[14px] leading-6 font-normal border tracking-normal">
										Best Seller
									</div>

									{/* Wishlist Button */}
								</div>
							</div>
						</div>

						{/* Right: Product Details */}
						<div className="lg:col-span-7  flex lg:flex-row flex-col">
							{/* Left Section - Above Photo */}
							<div className="flex-2">
								{/* Title & Price */}
								<div className="flex  justify-between gap-4 lg:mb-6">
									<div className="">
										<h1 className="text-xl lg:text-4xl font-semibold text-[#1D1D1D] mb-2">
											{productDetails.title}
										</h1>
										<p className="text-xl lg:text-3xl leading-9 w-full font-bold text-[#1D1D1D]">
											{productDetails.priceRange}
										</p>
									</div>
								</div>

								{/* Rating & Reviews */}
								<div className="flex items-center gap-4 mt-3 lg:mt-[18px]">
									<div className="flex items-center gap-1">
										<span className="font-semibold text-[#1D1D1D] text-xs sm:text-base">
											{productDetails.rating}
										</span>
										<img
											src="/images/categories/Frame1.svg"
											alt="rating"
											className="w-[74px] h-3.5"
										/>
									</div>
									<span className="text-sm text-gray-600">
										({productDetails.reviews} reviews)
									</span>
								</div>
								<h3 className="text-[20px] leading-9 font-semibold text-[#1D1D1D] mt-3">
									Wholesale Pricing:
								</h3>
								<div className="flex flex-col gap-2 sm:gap-4 mt-4">
									{productDetails.wholesalePricing.map(
										(item, idx) => (
											<div
												key={idx}
												className="flex justify-between text-sm text-text-gray"
											>
												<span className="font-regular">
													{item.quantity}
												</span>
											</div>
										)
									)}
								</div>
								<div>
									<label className="block text-base font-semibold text-[#1D1D1D] mt-2.5">
										Units
									</label>
									<select
										value={unit}
										onChange={(e) =>
											setUnit(e.target.value)
										}
										className="border rounded-[10px] border-gray-300 test-4 leading-9 p-2 text-gray-700 mt-2.5 w-full sm:w-[212px] h-[50px]"
									>
										<option>1 lbs</option>
										<option>500 g</option>
										<option>250 g</option>
									</select>
									<div className="flex flex-col text-sm text-gray-700 mt-4 leading-9">
										<div className="text-text-gray text-base leading-9">
											<span className="font-medium text-text-dark">
												Availability:{" "}
											</span>{" "}
											{productDetails.availability}
										</div>
										<div className="flex flex-col sm:flex-row sm:gap-12">
											<div className="text-text-gray text-base leading-9">
												<span className="font-medium text-text-dark">
													SKU:
												</span>{" "}
												{productDetails.sku}
											</div>
											<div className="text-text-gray text-base leading-9">
												<span className="font-medium text-text-dark">
													Category:
												</span>{" "}
												{productDetails.category}
											</div>
										</div>
									</div>

									{/* Quantity & Action Buttons */}
									<div className="flex items-end gap-6 mt-3 w-full">
										<div className="flex flex-col gap-3 grow">
											<div className="flex flex-row justify-between">
												<span className="text-base leading-9 font-semibold">
													Quantity
												</span>
												<div className="items-center gap-2 flex lg:hidden">
													<button
														onClick={() =>
															handleQuantityChange(
																"dec"
															)
														}
														className="hover:bg-gray-50"
													>
														<Minus className="w-4 h-4" />
													</button>
													<span className="text-center w-8 font-semibold">
														{quantity}
													</span>
													<button
														onClick={() =>
															handleQuantityChange(
																"inc"
															)
														}
														className="hover:bg-gray-50"
													>
														<Plus className="w-4 h-4" />
													</button>
												</div>
											</div>
											<div className="flex flex-row gap-3">
												<div className="items-center gap-2 hidden lg:flex">
													<button
														onClick={() =>
															handleQuantityChange(
																"dec"
															)
														}
														className="hover:bg-gray-50"
													>
														<Minus className="w-4 h-4" />
													</button>
													<span className="text-center w-8 font-semibold">
														{quantity}
													</span>
													<button
														onClick={() =>
															handleQuantityChange(
																"inc"
															)
														}
														className="hover:bg-gray-50"
													>
														<Plus className="w-4 h-4" />
													</button>
												</div>
												<div className="grid grid-cols-2 gap-3 flex-1 items-end">
													<button className="border border-gray-300 text-gray-700 font-semibold rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors">
														Add to cart
													</button>
													<button className="bg-[#F0BA43] text-white font-semibold rounded-lg py-3 px-4 hover:bg-yellow-500 transition-colors">
														Buy Now
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="mt-5 flex flex-col gap-3">
										<div className="flex flex-col gap-1.5">
											<h3 className="text-text-dark text-base leading-9">
												Product Description:
											</h3>
											<p className="text-xs sm:text-base leading-6 text-text-gray">
												{productDetails.description}
											</p>
										</div>
										<div className="gap-3 grid-cols-3 grid text-text-gray text-xs sm:text-base leading-6">
											<span className="text-text-dark">
												Effects:
											</span>
											<span className="col-span-2">
												{productDetails.effects}
											</span>
											<span className="text-text-dark">
												Ideal For:
											</span>
											<span className="col-span-2">
												{productDetails.idealFor}
											</span>
											<span className="text-text-dark">
												THCa:
											</span>
											<span className="col-span-2">
												{productDetails.thca}
											</span>
										</div>
										<div className="flex flex-col gap-3 mt-5">
											<p>
												{
													productDetails.safeCheckoutText
												}
											</p>
											<div className="flex gap-10">
												{productDetails.paymentLogos.map(
													(src, i) => (
														<img
															key={i}
															src={src}
															alt={`payment-${i}`}
														/>
													)
												)}
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right Section - Below Photo */}
							<div className="flex flex-col justify-between flex-1">
								<div className="space-y-6  lg:block hidden">
									<div className="flex gap-3.5 items-center pl-6">
										<div className="">
											<Heart className="w-6 h-6 text-black" />
										</div>
										<div className="">Add To wishlist</div>
									</div>
									{/* Offers Box */}
									<div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
										<p className="text-sm text-gray-600 mb-2">
											{productDetails.offers}
										</p>
										<button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
											Learn more ▼
										</button>
									</div>

									{/* Delivery & Buttons */}
									<div className="space-y-3">
										<button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50">
											<MapPin className="w-5 h-5" />
											<span className="text-sm">
												Deliver to Canada
											</span>
										</button>
										<button className="w-full bg-[#F0BA43] text-[#1D1D1D] font-semibold rounded-lg py-2 px-4 hover:bg-yellow-500 transition-colors">
											See Similar Items
										</button>
										<button className="w-full border border-gray-300 text-gray-700 font-semibold rounded-lg py-2 px-4 hover:bg-gray-50">
											See all Buying Options
										</button>
										<button className="w-full border border-gray-300 text-gray-700 font-semibold rounded-lg py-2 px-4 hover:bg-gray-50">
											Add to List
										</button>
									</div>
								</div>
								<SocialIcons />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pdetails;
