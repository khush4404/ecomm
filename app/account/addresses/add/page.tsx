import React from "react";
import Link from "next/link";

export default function AddAddressPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-2xl mx-auto">
				<Link
					href="/account/addresses"
					className="text-blue-600 hover:underline mb-4 inline-block"
				>
					← Back to Addresses
				</Link>
				<h1 className="text-3xl font-bold mb-8">Add New Address</h1>

				<div className="bg-white rounded-[10px] shadow p-6">
					<form className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium mb-2">
									First Name *
								</label>
								<input
									type="text"
									className="w-full border rounded px-4 py-2"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									Last Name *
								</label>
								<input
									type="text"
									className="w-full border rounded px-4 py-2"
									required
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Street Address *
							</label>
							<input
								type="text"
								className="w-full border rounded px-4 py-2"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Apartment, suite, etc.
							</label>
							<input
								type="text"
								className="w-full border rounded px-4 py-2"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-sm font-medium mb-2">
									City *
								</label>
								<input
									type="text"
									className="w-full border rounded px-4 py-2"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									State *
								</label>
								<select
									className="w-full border rounded px-4 py-2"
									required
								>
									<option value="">Select State</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium mb-2">
									ZIP Code *
								</label>
								<input
									type="text"
									className="w-full border rounded px-4 py-2"
									required
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-2">
								Phone Number *
							</label>
							<input
								type="tel"
								className="w-full border rounded px-4 py-2"
								required
							/>
						</div>

						<div className="flex items-center">
							<input type="checkbox" className="w-4 h-4 mr-2" />
							<label className="text-sm">
								Set as default address
							</label>
						</div>

						<div className="flex gap-4 pt-4">
							<button
								type="submit"
								className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
							>
								Save Address
							</button>
							<Link
								href="/account/addresses"
								className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
							>
								Cancel
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
