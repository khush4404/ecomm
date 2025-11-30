import React from "react";
import AccountSidebar from "@/components/common/AccountSidebar";

export default function AccountDashboardPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">My Account</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
				{/* Sidebar Navigation */}
				<aside className="lg:col-span-1">
					<AccountSidebar />
				</aside>

				{/* Main Content */}
				<main className="lg:col-span-3">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white rounded-[10px] shadow p-6">
							<h2 className="text-xl font-semibold mb-4">
								Account Information
							</h2>
							<p className="text-gray-600">
								Manage your personal information
							</p>
						</div>
						<div className="bg-white rounded-[10px] shadow p-6">
							<h2 className="text-xl font-semibold mb-4">
								Recent Orders
							</h2>
							<p className="text-gray-600">
								View your order history
							</p>
						</div>
						<div className="bg-white rounded-[10px] shadow p-6">
							<h2 className="text-xl font-semibold mb-4">
								Saved Addresses
							</h2>
							<p className="text-gray-600">
								Manage shipping addresses
							</p>
						</div>
						<div className="bg-white rounded-[10px] shadow p-6">
							<h2 className="text-xl font-semibold mb-4">
								Payment Methods
							</h2>
							<p className="text-gray-600">
								Manage payment options
							</p>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
