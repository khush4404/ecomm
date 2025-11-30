"use client";

import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItem {
	id: string | number;
	image?: string;
	name: string;
	price: number;
	starImage?: string;
	quantity: number;
	rating?: number;
}

interface ProductCartProps {
	items?: CartItem[];
	onQuantityChange?: (id: string | number, quantity: number) => void;
	onRemoveItem?: (id: string | number) => void;
	subtotal?: number;
	shipping?: number;
	estimateLocation?: string;
	onCheckout?: () => void;
	onContinueShopping?: () => void;
	onUpdateCart?: () => void;
	onApplyCoupon?: (couponCode: string) => void;
}

const defaultItems: CartItem[] = [
	{
		id: 1,
		name: "Cherry Garcia",
		price: 1075.0,
		quantity: 1,
		image: "/images/categories/Graphes.png",
		starImage: "/images/categories/stars.svg",
		rating: 4.5,
	},
	{
		id: 2,
		name: "Cherry Garcia",
		price: 1075.0,
		quantity: 1,
		image: "/images/categories/Graphes.png",
		starImage: "/images/categories/stars.svg",
		rating: 4.5,
	},
	{
		id: 3,
		name: "Cherry Garcia",
		price: 1075.0,
		quantity: 1,
		image: "/images/categories/Graphes.png",
		starImage: "/images/categories/stars.svg",
		rating: 4.5,
	},
];

export const CartView: React.FC<ProductCartProps> = ({
	items = defaultItems,
	onQuantityChange,
	onRemoveItem,
	subtotal = 3225.0,
	shipping = 0,
	estimateLocation = "Canada",
	onCheckout,
	onContinueShopping,
	onUpdateCart,
	onApplyCoupon,
}) => {
	const [quantities, setQuantities] = useState<
		Record<string | number, number>
	>(items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}));
	const [couponCode, setCouponCode] = useState("");

	const handleQuantityChange = (id: string | number, delta: number) => {
		const newQuantity = Math.max(1, (quantities[id] || 1) + delta);
		setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
		onQuantityChange?.(id, newQuantity);
	};

	const handleRemoveItem = (id: string | number) => {
		onRemoveItem?.(id);
	};

	const handleApplyCoupon = () => {
		if (couponCode.trim()) {
			onApplyCoupon?.(couponCode);
			setCouponCode("");
		}
	};

	const total = subtotal + (shipping || 0);

	return (
		<div className="bg-white min-h-screen border-b border-[#BBBBBB] py-8">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
					<div className="lg:col-span-2">
						{/* ---------- TABLE HEADER ---------- */}
						<div className="grid grid-cols-12 bg-[#F2F2F2] px-4 sm:px-6 py-3 border border-[#E8E8E8] rounded-[10px] text-sm font-semibold text-[#666666] mb-4">
							<div className="col-span-1 flex items-center">
								<input
									type="checkbox"
									className="w-4 h-4 border-[#CFCFCF] rounded"
								/>
							</div>

							<div className="col-span-3 flex items-center">
								Product
							</div>

							<div className="col-span-2 hidden sm:flex items-center justify-center">
								Unit Price
							</div>

							<div className="col-span-2 hidden sm:flex items-center justify-center">
								Quantity
							</div>

							<div className="col-span-2 hidden sm:flex items-center justify-center">
								Subtotal
							</div>

							<div className="col-span-2 hidden sm:flex items-center justify-center">
								Remove
							</div>
						</div>
						{/* ---------- END HEADER ---------- */}

						{/* Cart Items Table */}
						<div className="md:space-y-3 space-y-[10px]">
							{items.map((item) => {
								const qty =
									quantities[item.id] || item.quantity;
								const itemSubtotal = item.price * qty;

								return (
									<div
										key={item.id}
										className="grid grid-cols-2 md:grid-cols-12 items-center border border-[#BBBBBB]  h-[183px] md:h-[96px] rounded-xl  md:px-4 py-4 shadow-sm"
									>
										{/* Checkbox + Image + Name */}
										<div className="col-span-4 pl-4 md:pl-0  flex items-center gap-3">
											<input
												type="checkbox"
												className=" w-5 h-5 border-[#BBBBBB]"
											/>

											{item.image && (
												<img
													src={item.image}
													alt={item.name}
													className="w-12 h-12 rounded object-cover"
												/>
											)}

											<div>
												<p className="text-sm font-medium text-[#1D1D1D]">
													{item.name}
												</p>

												{item.rating && (
													<div className="flex items-center gap-1 text-xs">
														<span className="text-[#F0BA43]">
															{item.starImage ? (
																<img
																	src={
																		item.starImage
																	}
																	alt="Rating"
																	className="h-4"
																/>
															) : (
																"★"
															)}
														</span>
														<span className="text-[#666666]">
															{item.rating}
														</span>
													</div>
												)}
											</div>
										</div>

										{/* PRICE */}

										<p className="col-span-2 text-center text-[#666666] font-medium text-sm">
											${item.price.toFixed(2)}
										</p>

										{/* QUANTITY */}
										<div className="col-span-2 flex items-center justify-center gap-2">
											<button
												onClick={() =>
													handleQuantityChange(
														item.id,
														-1
													)
												}
												className="p-1 hover:bg-[#F0F0F0] rounded"
											>
												<Minus
													size={16}
													className="text-[#666666]"
												/>
											</button>

											<input
												type="text"
												readOnly
												value={qty}
												className="w-10 text-center border border-[#D0D0D0] rounded px-2 py-1 text-sm"
											/>

											<button
												onClick={() =>
													handleQuantityChange(
														item.id,
														1
													)
												}
												className="p-1 hover:bg-[#F0F0F0] rounded"
											>
												<Plus
													size={16}
													className="text-[#666666]"
												/>
											</button>
										</div>

										{/* SUBTOTAL */}
										<p className="col-span-2 text-center font-semibold text-[#1D1D1D] text-sm">
											${itemSubtotal.toFixed(2)}
										</p>

										{/* DELETE */}
										<div className="col-span-2 flex justify-center">
											<button
												onClick={() =>
													handleRemoveItem(item.id)
												}
												className="p-2 hover:bg-[#FFE8E8] rounded text-[#E74C3C]"
											>
												<Trash2 size={18} />
											</button>
										</div>
									</div>
								);
							})}
						</div>

						{/* Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 mt-6 justify-between">
							<button
								onClick={() => onContinueShopping?.()}
								className="md:px-4 px-2 py-2 md:w-auto w-[196px] bg-[#F0BA43] text-white font-medium rounded-[10px] hover:bg-[#E8B140] flex gap-3"
							>
								<img
									src="/images/categories/arrow-back.svg"
									className="size-6"
								/>
								Continue Shopping
							</button>
							<button
								onClick={() => onUpdateCart?.()}
								className="px-6 py-2 md:2-auto w-[159px] bg-[#F0BA43] text-white font-medium rounded-[10px] hover:bg-[#E8B140]"
							>
								⟳ Update Cart
							</button>
						</div>

						{/* Coupon & Shipping */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
							{/* Shipping */}
							<div className="p-4 bg-[#F2F2F2] rounded-[10px] border border-[#E8E8E8]">
								<h3 className="text-sm md:text-base font-semibold leading-9">
									Calculate Shipping
								</h3>
								<div className="space-y-3 mt-3">
									<p className="text-sm md:text-base">
										Flat rate: 5%
									</p>
									<select className="w-full h-[52px] px-3 py-2 border border-[#BBBBBB] rounded text-sm">
										<option>Canada</option>
										<option>USA</option>
										<option>Mexico</option>
									</select>

									<div className="grid grid-cols-2 gap-2 h-[52px]">
										<input
											type="text"
											placeholder="Stage / Country"
											className="px-3 py-2 border border-[#BBBBBB] rounded text-sm"
										/>
										<input
											type="text"
											placeholder="PostCode / Zip"
											className="px-3 py-2 border border-[#BBBBBB] rounded text-sm"
										/>
									</div>
								</div>
							</div>

							{/* Coupon */}
							<div className="p-4">
								<h3 className="text-base leading-9 font-semibold">
									Apply Coupon
								</h3>
								<p className="text-base font-regular leading-9 text-text-gray mt-0 md:mt-2.5">
									Using a Promo Code?
								</p>

								<div className="flex md:gap-6 gap-3 mt-3 h-[52px]">
									<input
										type="text"
										placeholder="Enter your Coupon"
										value={couponCode}
										onChange={(e) =>
											setCouponCode(e.target.value)
										}
										className="flex-1 px-3 py-2 border border-[#BBBBBB] rounded text-sm "
									/>
									<button
										onClick={handleApplyCoupon}
										className="px-4 py-2 bg-[#F0BA43] rounded text-base md:text-lg font-medium text-white"
									>
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="sticky top-8 md:p-6 p-2 bg-[#F9F9F9] rounded-[10px] border border-[#E8E8E8]">
							<div className="space-y-4 mb-6">
								<div className="flex justify-between text-sm md:text-base font-semibold">
									<span className="text-text-gray">
										Subtotal
									</span>
									<span className="font-medium">
										${subtotal.toFixed(2)}
									</span>
								</div>

								<div className="flex justify-between text-sm md:text-base font-semibold ">
									<span className="text-text-gray">
										Shipping
									</span>
									<span className="font-medium">
										{shipping === 0
											? "FREE"
											: `$${shipping.toFixed(2)}`}
									</span>
								</div>

								<div className="flex justify-between text-sm md:text-base ">
									<span className="text-text-gray">
										Estimate for
									</span>
									<span className="font-medium text-[#1D1D1D]">
										{estimateLocation}
									</span>
								</div>
								<div className="flex justify-between text-sm md:text-base ">
									<span className="text-text-gray">
										Total
									</span>
									<span className="font-medium text-[#1D1D1D]">
										${total.toFixed(2)}
									</span>
								</div>
							</div>

							<button
								onClick={onCheckout}
								className="w-full px-4 py-3 bg-[#F0BA43] rounded-[10px] font-semibold text-white"
							>
								Proceed to CheckOut
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
