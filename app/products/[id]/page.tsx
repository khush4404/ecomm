import React from "react";

export default function ProductDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Product Images */}
				<div>
					<div className="aspect-square bg-gray-100 rounded-[10px] mb-4">
						{/* Main product image */}
					</div>
					<div className="grid grid-cols-4 gap-2">
						{/* Thumbnail images */}
					</div>
				</div>

				{/* Product Info */}
				<div>
					<h1 className="text-3xl font-bold mb-4">Product Name</h1>
					<div className="mb-4">
						<span className="text-2xl font-bold">$99.99</span>
					</div>
					<div className="mb-6">
						<p className="text-gray-600">
							Product description goes here
						</p>
					</div>
					<button className="w-full bg-blue-600 text-white py-3 rounded-[10px] font-semibold hover:bg-blue-700">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
