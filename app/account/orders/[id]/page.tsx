import React from "react";
import Link from "next/link";

export default function OrderDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<Link
					href="/account/orders"
					className="text-blue-600 hover:underline mb-4 inline-block"
				>
					← Back to Orders
				</Link>
				<h1 className="text-3xl font-bold">Order Details</h1>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Order Information */}
				<div className="lg:col-span-2 space-y-6">
					<div className="bg-white rounded-[10px] shadow p-6">
						<h2 className="text-xl font-semibold mb-4">
							Order #12345
						</h2>
						<div className="space-y-2 text-sm">
							<p>
								<span className="font-semibold">
									Order Date:
								</span>{" "}
								January 1, 2024
							</p>
							<p>
								<span className="font-semibold">Status:</span>{" "}
								<span className="text-green-600">
									Delivered
								</span>
							</p>
						</div>
					</div>

					<div className="bg-white rounded-[10px] shadow p-6">
						<h2 className="text-xl font-semibold mb-4">Items</h2>
						<div className="space-y-4">
							{/* Order items will be mapped here */}
						</div>
					</div>
				</div>

				{/* Order Summary */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-[10px] shadow p-6">
						<h2 className="text-xl font-semibold mb-4">Summary</h2>
						<div className="space-y-2 text-sm mb-4">
							<div className="flex justify-between">
								<span>Subtotal</span>
								<span>$299.99</span>
							</div>
							<div className="flex justify-between">
								<span>Shipping</span>
								<span>$0.00</span>
							</div>
							<div className="flex justify-between font-bold text-base pt-2 border-t">
								<span>Total</span>
								<span>$299.99</span>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-[10px] shadow p-6 mt-6">
						<h2 className="text-xl font-semibold mb-4">
							Shipping Address
						</h2>
						<p className="text-sm text-gray-600">
							{/* Address details will go here */}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
