import React from "react";
import Link from "next/link";

export default function WishlistPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Sample Wishlist Item */}
				<div className="bg-white rounded-[10px] shadow overflow-hidden group relative">
					<button className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-red-50">
						<svg
							className="w-5 h-5 text-red-500"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<div className="aspect-square bg-gray-100">
						{/* Product image would go here */}
					</div>

					<div className="p-4">
						<h3 className="font-semibold mb-2 truncate">
							Product Name
						</h3>
						<p className="text-lg font-bold mb-3">$99.99</p>
						<div className="flex gap-2">
							<button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
								Add to Cart
							</button>
						</div>
					</div>
				</div>

				{/* More items would be mapped here */}
			</div>

			<div className="mt-8 text-center text-gray-500">
				<p>Items in your wishlist are not reserved and may sell out.</p>
			</div>
		</div>
	);
}
