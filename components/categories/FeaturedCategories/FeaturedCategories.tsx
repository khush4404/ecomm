import React from "react";

const categories = [
	{
		title: "Bulk Flowers",
		items: [
			"Master Cherries",
			"Cherry Swirl",
			"Runtz Button",
			"Forum cookies",
			"Rainbow Zlushie",
			"Cherry Garcia",
		],
	},
	{
		title: "Prerolls",
		items: [
			"Boutiq snack pack",
			"Sherbinskis live resin joints",
			"Sherbinskis Live Rosin",
			"Mates",
			"Hi-Slts",
		],
	},
	{
		title: "Disposable",
		items: [
			"2G Drips (Authentic)",
			"2G Hitz Infinity",
			"2G Crybaby Disposables",
			"NEW UGI FLAVORS",
			"Gold Coast Clear Wax",
		],
	},
	{
		title: "Moonrocks",
		items: [
			"Kaws Moonrocks 1",
			"Kaws Moonrocks 2",
			"Kaws Moonrocks 3",
			"Kaws Moonrocks 4",
			"Kaws Moonrocks 5",
		],
	},
	{
		title: "Cartridge",
		items: [
			"Cartridges product 1",
			"Cartridges product 2",
			"Cartridges product 3",
			"Cartridges product 4",
			"Cartridges product 5",
		],
	},
	{
		title: "Edibles",
		items: [
			"Edibles Pack 1",
			"Edibles Pack 2",
			"Edibles Pack 3",
			"Edibles Pack 4",
			"Edibles Pack 5",
		],
	},
];

const categoryImages = [
	"/images/categories/bulk-flowers.svg",
	"/images/categories/payrollstick.png",
	"/images/categories/catridge.png",
	"/images/categories/monorock.png",
	"/images/categories/vape.png",
	"/images/categories/edigble.png",
];
const rightArrowImages = [
	"/images/categories/rightarrow.png",
	"/images/categories/rightarrow.png",
	"/images/categories/rightarrow.png",
	"/images/categories/rightarrow.png",
	"/images/categories/rightarrow.png",
	"/images/categories/rightarrow.png",
];

export default function FeaturedCategories() {
	return (
		<section className="py-4.5 sm:py-8">
			<div className="max-w-6xl mx-auto md:px-4 px-0">
				<div className="md:mb-8 mb-4">
					<h2 className="font-semibold  text-base md:text-[32px] leading-4 md:leading-9 pb-2.5 md:pb-4 text-[#1D1D1D]">
						Featured Categories
					</h2>
					<p className="text-text-gray text-[12px] md:text-base leading-5 md:leading-9">
						Choose your necessary products from this feature
						categories.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{categories.map((cat, idx) => (
						<div
							key={cat.title}
							className="bg-white border border-[#BBBBBB] rounded-[10px] pt-5 pl-[30px] overflow-hidden flex flex-col"
						>
							<h3 className="font-medium md:text-[26px] text-base md:leading-9 leading-4 text-[#1D1D1D] md:mb:[26px] mb-2.5">
								{cat.title}
							</h3>
							<div className="flex gap-4 items-center">
								<img
									src={categoryImages[idx]}
									alt={cat.title}
									className="w-24 h-28 object-cover rounded"
								/>
								<div className="flex-1">
									<ul className="text-sm flex flex-col gap-1 text-text-gray">
										{cat.items
											.slice(0, 5)
											.map((it, itemIdx) => (
												<li
													key={it}
													className="flex items-center gap-2"
												>
													<img
														src={
															rightArrowImages[
																idx
															]
														}
														alt="arrow"
														className="w-3 h-3"
													/>
													<span>{it}</span>
												</li>
											))}
									</ul>
								</div>
							</div>
							<div className="self-end mt-[22px] ">
								<button className="bg-[#fbbf24] text-[12px] md:text-[20px] leading-9 font-normal text-white w-[163px] h-9 md:w-[129px] md:h-10 text-sm rounded-tl-[10px]">
									View all
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
