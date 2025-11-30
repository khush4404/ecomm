import React from "react";
import Link from "next/link";

interface ProductCardProps {
	id: string;
	name: string;
	price: number;
	image?: string;
	rating?: number;
	onAddToCart?: () => void;
	onAddToWishlist?: () => void;
}

export default function ProductCard({
	id,
	name,
	price,
	image,
	rating,
	onAddToCart,
	onAddToWishlist,
}: ProductCardProps) {
	return (
		<div className="bg-white rounded-[10px] shadow overflow-hidden group">
			<Link href={`/products/${id}`}>
				<div className="aspect-square bg-gray-100 relative">
					{image ? (
						<img
							src={image}
							alt={name}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center text-gray-400">
							No Image
						</div>
					)}
				</div>
			</Link>

			<div className="p-4">
				<Link href={`/products/${id}`}>
					<h3 className="font-semibold mb-2 truncate hover:text-blue-600">
						{name}
					</h3>
				</Link>

				{rating && (
					<div className="flex items-center gap-1 mb-2">
						<span className="text-yellow-500">★</span>
						<span className="text-sm text-gray-600">{rating}</span>
					</div>
				)}

				<p className="text-lg font-bold mb-3">${price.toFixed(2)}</p>

				<div className="flex gap-2">
					{onAddToCart && (
						<button
							onClick={onAddToCart}
							className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
						>
							Add to Cart
						</button>
					)}
					{onAddToWishlist && (
						<button
							onClick={onAddToWishlist}
							className="p-2 border rounded hover:bg-gray-50"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
