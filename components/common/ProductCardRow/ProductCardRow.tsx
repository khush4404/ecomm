"use client";

import React from "react";
import { Heart } from "lucide-react";

export type ProductRowProps = {
	id: number;
	title: string;
	category: string;
	price: string;
	original?: string;
	img: string;
	starImage?: string;
	onToggleFavorite?: (id: number) => void;
	isFavorite?: boolean;
};

export const ProductCardRow: React.FC<{
	p: ProductRowProps;
	className?: string;
}> = ({ p, className }) => {
	return (
		<article
			className={`relative bg-[#F2F2F2] rounded-[10px] p-4 flex items-center gap-2 ${className}`}
		>
			<img
				src={p.img}
				alt={p.title}
				className="w-1/3 h-full rounded-[10px] object-contain"
			/>

			<div className="flex-1">
				<div className="text-4 leading-9 tracking-normal text-gray-400">
					{p.category}
				</div>
				<div className="font-semibold text-[#1D1D1D] text-4 leading-6 tracking-normal">
					{p.title}
				</div>
				<div className="flex items-center gap-1">
					<span className="text-[#1D1D1D] text-xs font-medium">
						4.4
					</span>
					{p.starImage && (
						<img
							src={p.starImage}
							alt="rating stars"
							className="h-3 w-auto"
						/>
					)}
				</div>
				<div className="flex items-baseline gap-[21px]">
					<div className="text-[20px] font-medium leading-9 tracking-normal text-[#1D1D1D]">
						{p.price}
					</div>
					{p.original && (
						<div className="text-4 text-text-gray leading-9 tracking-normal line-through">
							{p.original}
						</div>
					)}
				</div>
			</div>

			<button
				className="absolute top-3 right-3 text-text-dark"
				aria-label="wishlist"
				onClick={() => p.onToggleFavorite && p.onToggleFavorite(p.id)}
			>
				<Heart
					size={24}
					className={p.isFavorite ? "text-red-500" : ""}
				/>
			</button>
		</article>
	);
};

export default ProductCardRow;
