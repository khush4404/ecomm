"use client";

import React, { useMemo, useState } from "react";
import Input from "@/components/common/Input/Input";

type WishlistItem = {
	id: number;
	name: string;
	price: string;
	image: string;
	inStock: boolean;
	category?: string;
};

const wishlistItems: WishlistItem[] = [
	{
		id: 1,
		name: "Cherry Garcia",
		price: "$1,000.00",
		image: "/images/categories/Graphes.png",
		inStock: true,
		category: "Bulk Flowers",
	},
	{
		id: 2,
		name: "Italian Ice",
		price: "$500.00",
		image: "/images/categories/twoshakker.png",
		inStock: true,
		category: "Bulk Flowers",
	},
	{
		id: 3,
		name: "Sherbinski live resin joints",
		price: "$1,500.00",
		image: "/images/categories/shakker.png",
		inStock: false,
		category: "Bulk Flowers",
	},
	// duplicated a few to better fill the grid in preview
	{
		id: 4,
		name: "Froyo",
		price: "$1,350.00 - $1,450.00",
		image: "/images/categories/shakker.png",
		inStock: true,
		category: "Bulk Flowers",
	},
	{
		id: 5,
		name: "Frosted Donuts",
		price: "$850.00 - $14,000.00",
		image: "/images/categories/Graphes.png",
		inStock: true,
		category: "Bulk Flowers",
	},
	{
		id: 6,
		name: "Warheads",
		price: "$1,400.00 - $1,500.00",
		image: "/images/categories/twoshakker.png",
		inStock: true,
		category: "Bulk Flowers",
	},
];

export function Wishlist() {
	const [query, setQuery] = useState("");
	const [view, setView] = useState("All");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return wishlistItems.filter((item) => {
			if (view === "InStock" && !item.inStock) return false;
			if (view === "OutOfStock" && item.inStock) return false;
			if (!q) return true;
			return (
				item.name.toLowerCase().includes(q) ||
				(item.category || "").toLowerCase().includes(q)
			);
		});
	}, [query, view]);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col md:flex-row items-center justify-between">
				<h2 className="text-base md:text-2xl font-bold">My Wishlist</h2>
				<div className="flex items-center gap-4">
					<label className="text-[12px] md:text-sm text-gray-600">
						View:
					</label>
					<select
						value={view}
						onChange={(e) => setView(e.target.value)}
						className="rounded border border-gray-300 md:px-3 md:py-2 p-1 pt-2 md:pt-0 text-[12px] md:text-sm"
					>
						<option value="All">All</option>
						<option value="InStock">In Stock</option>
						<option value="OutOfStock">Out of Stock</option>
					</select>
				</div>
			</div>

			<div className="flex  items-center md:py-6 md:px-4 py-4 px-3">
				<Input
					placeholder="Search for your save items"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className=""
				/>
				<button className="bg-[#F0BA43] text-[#FFFFFF] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
					Search
				</button>
			</div>

			{filtered.length === 0 ? (
				<div className="text-center py-12">
					<p className="text-gray-600 mb-4">No items found</p>
					<a
						href="#"
						className="text-yellow-600 font-semibold hover:underline"
					>
						Continue Shopping
					</a>
				</div>
			) : (
				<div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{filtered.map((item) => (
						<div
							key={item.id}
							className="rounded-lg border border-gray-200 overflow-hidden bg-[#F2F2F2]"
						>
							<div className="p-4 flex items-center justify-center h-40">
								<img
									src={item.image}
									alt={item.name}
									className="max-h-full object-contain"
								/>
							</div>
							<div className="md:p-4 p-1 flex flex-col md:gap-3 gap-1 ">
								<p className="text-[10px] md:text-base text-gray-500">
									{item.category}
								</p>
								<h3 className="font-semibold sm:text-base text-[10px]">
									{item.name}
								</h3>
								<div className="flex items-center justify-between">
									<div>
										<div className="flex items-center gap-2 text-[10px] md:text-sm text-yellow-500">
											<span>4.4</span>
											<span>★ ★ ★ ★ ☆</span>
										</div>
										<p className="md:text-[20px] text-[10px] text-gray-700 md:mt-1">
											{item.price}
										</p>
									</div>
								</div>

								<div>
									<button
										disabled={!item.inStock}
										className="w-full h-10 md:h-[52px] bg-[#F0BA43] text-[#FFFFFF] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
									>
										BUY
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
