import React from "react";
import Link from "next/link";

export default function AddressesPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Address Book</h1>
				<Link
					href="/account/addresses/add"
					className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
				>
					Add New Address
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Sample Address Card */}
				<div className="bg-white rounded-[10px] shadow p-6 border-2 border-blue-500">
					<div className="flex justify-between items-start mb-4">
						<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
							Default
						</span>
						<div className="flex gap-2">
							<button className="text-blue-600 hover:underline text-sm">
								Edit
							</button>
							<button className="text-red-600 hover:underline text-sm">
								Delete
							</button>
						</div>
					</div>
					<div className="text-gray-700">
						<p className="font-semibold">John Doe</p>
						<p className="text-sm">123 Main Street</p>
						<p className="text-sm">Apartment 4B</p>
						<p className="text-sm">New York, NY 10001</p>
						<p className="text-sm mt-2">Phone: (555) 123-4567</p>
					</div>
				</div>

				{/* Additional addresses would be mapped here */}
			</div>
		</div>
	);
}
