"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCardRow from "@/components/common/ProductCardRow/ProductCardRow";

type Product = {
	id: number;
	title: string;
	category: string;
	price: string;
	original?: string;
	img: string;
	starImage?: string;
};

const products: Product[] = [
	{
		id: 1,
		title: "Frosted Donuts",
		category: "Bulk Flowers",
		price: "$850.00",
		original: "$1,000.00",
		img: "/images/categories/bulk-flowers.svg",
		starImage: "/images/categories/stars.svg",
	},
	{
		id: 2,
		title: "Lemon Cherry Pie",
		category: "Bulk Flowers",
		price: "$550.00",
		original: "$700.00",
		img: "/images/categories/Graphes.png",
		starImage: "/images/categories/stars.svg",
	},
	{
		id: 3,
		title: "SHERBINSKI LIVE RESIN JOINTS",
		category: "Prerolls",
		price: "$200.00",
		original: "$800.00",
		img: "/images/categories/payroll.png",
		starImage: "/images/categories/stars.svg",
	},
	{
		id: 4,
		title: "UGI Cannabis Infused Gummies",
		category: "Edibles",
		price: "$550.00",
		original: "$700.00",
		img: "/images/categories/watermallon.png",
		starImage: "/images/categories/stars.svg",
	},
	{
		id: 5,
		title: "Master Cherries",
		category: "Bulk Flowers",
		price: "$1,050.00",
		original: "$1,250.00",
		img: "/images/categories/flower.png",
		starImage: "/images/categories/stars.svg",
	},
	{
		id: 6,
		title: "Kaws Moonrocks",
		category: "Moonrocks",
		price: "$1,000.00",
		original: "$1,450.00",
		img: "/images/categories/moonrockdish.png",
		starImage: "/images/categories/stars.svg",
	},
];

export const TopSelling: React.FC = () => {
	return (
		<section className=" relative w-full flex lg:flex-row flex-col py-4.5 md:py-8 gap-5">
			<div className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-[35px]">
				<div className="flex items-start justify-between mb-6">
					<div className="flex flex-col gap-2.5 leading-6">
						<h2 className="sm:text-[32px] sm:leading-9  text-4 leading-4 sm:tracking-[-1px] font-semibold ">
							Latest Products
						</h2>
						<p className="sm:text-sm text-3 sm:leading-6 leading-5 tracking-normal font-normal text-text-gray">
							Special products in this month.
						</p>
					</div>

					<div className=" self-end  items-center gap-[30px] sm:flex hidden">
						<button
							aria-label="prev"
							className=" bg-white  rounded-md shadow-sm hover:bg-gray-100"
						>
							<ChevronLeft size={24} />
						</button>
						<button
							aria-label="next"
							className=" bg-white rounded-md  shadow-sm hover:bg-gray-100"
						>
							<ChevronRight size={24} />
						</button>
					</div>
				</div>

				{/* Divider under header */}
				<div className="border-t border-[#BBBBBB]  mt-6" />

				<div className="flex flex-col lg:flex-row mt-5 sm:mt-10 gap-6">
					{/* Left: grid of products */}
					<div className="flex-1">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-[21px] ">
							{products.map((p) => (
								<ProductCardRow key={p.id} p={p} />
							))}
						</div>
					</div>
				</div>
			</div>
			{/* Right: tall ad */}
			<aside className="  w-full lg:w-[320px]">
				<div className="h-[400px] sm:h-full bg-white rounded-[10px] overflow-hidden shadow-sm">
					<img
						src="/images/categories/GhostSalt.jpg"
						alt="Ad"
						className="w-full h-full object-cover"
					/>
				</div>
			</aside>
		</section>
	);
};
