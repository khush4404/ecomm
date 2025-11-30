"use client";

import React, { useState } from "react";

export const Discount = () => {
	const [email, setEmail] = useState("");

	return (
		<section className="overflow-hidden rounded-[10px] h-[250px] sm:h-auto">
			<div className="bg-[#21465E] text-white rounded-[10px] h-full">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
					<div className="relative overflow-hidden flex  sm:items-center gap-6 h-full">
						<div className="relative z-3 flex sm:flex-row flex-col md:nowrap item-center sm:justify-between justify-start  md:p-13.5  md:gap-45 min-w-0 sm:mt-0 mt-5 ">
							<div className="sm:mx-0 mx-5">
								<h3 className="text-sm md:text-[30px] leading-9  font-semibold">
									Subscribe & Get{" "}
									<span className="text-yellow-btn">10%</span>{" "}
									Discount
								</h3>
								<p className="mt-2 text-[12px] md:text-lg sm:leading-9 text-[#D9E7EA] max-w-xl">
									Get E-mail updates about our latest shop and
									special offers.
								</p>
							</div>
							<form className="mt-4 sm:mt-0 flex items-center">
								<input
									id="subscribe-email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Your Email address"
									className="min-w-0 w-full h-[52px] sm:w-[320px] px-3 py-2 text-sm text-[#0F2A2E] bg-white/95 placeholder:text-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#F0BA43] rounded-l-[10px]"
								/>
								<button
									type="submit"
									className="inline-flex h-[52px] items-center justify-center whitespace-nowrap bg-[#F0BA43] hover:bg-[#e0a73a] px-4 py-2  font-medium text-sm shadow rounded-r-[10px]"
								>
									Sign up
								</button>
							</form>
						</div>

						{/* Right-side image (decorative) */}

						<img
							src="/images/categories/Graphes.png"
							alt="decorative"
							className=" absolute -right-8 sm:right-10 top-15 sm:-top-10 h-80 "
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discount;
