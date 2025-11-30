import React from "react";
import Link from "next/link";

export default function PaymentMethodsPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Payment Methods</h1>
				<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
					Add Payment Method
				</button>
			</div>

			<div className="space-y-4">
				{/* Sample Payment Card */}
				<div className="bg-white rounded-[10px] shadow p-6 border-2 border-blue-500">
					<div className="flex justify-between items-start">
						<div className="flex items-center gap-4">
							<div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
								<span className="text-xs font-bold">VISA</span>
							</div>
							<div>
								<p className="font-semibold">
									Visa ending in 1234
								</p>
								<p className="text-sm text-gray-600">
									Expires 12/25
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
								Default
							</span>
							<div className="flex gap-2">
								<button className="text-blue-600 hover:underline text-sm">
									Edit
								</button>
								<button className="text-red-600 hover:underline text-sm">
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Additional payment methods would be mapped here */}
			</div>

			<div className="mt-8 bg-blue-50 border border-blue-200 rounded-[10px] p-6">
				<h3 className="font-semibold mb-2">
					Secure Payment Processing
				</h3>
				<p className="text-sm text-gray-700">
					Your payment information is encrypted and securely stored.
					We never share your data with third parties.
				</p>
			</div>
		</div>
	);
}
