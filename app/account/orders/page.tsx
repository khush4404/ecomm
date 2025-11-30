import React from "react";
import Link from "next/link";

export default function OrdersPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Your Orders</h1>
				<Link
					href="/account/dashboard"
					className="text-blue-600 hover:underline"
				>
					Back to Account
				</Link>
			</div>

			<div className="space-y-4">
				{/* Orders will be mapped here */}
				<div className="bg-white rounded-[10px] shadow p-6">
					<div className="flex justify-between items-start mb-4">
						<div>
							<p className="font-semibold">Order #12345</p>
							<p className="text-sm text-gray-600">
								Placed on January 1, 2024
							</p>
						</div>
						<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
							Delivered
						</span>
					</div>
					<div className="border-t pt-4">
						<p className="text-sm text-gray-600 mb-2">Items: 3</p>
						<p className="font-semibold">Total: $299.99</p>
					</div>
					<div className="mt-4 flex gap-4">
						<Link
							href="/account/orders/12345"
							className="text-blue-600 hover:underline text-sm"
						>
							View Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
