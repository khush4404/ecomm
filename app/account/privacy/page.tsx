import React from "react";
import Link from "next/link";

export default function PrivacySecurityPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<Link
					href="/account/dashboard"
					className="text-blue-600 hover:underline mb-4 inline-block"
				>
					← Back to Account
				</Link>
				<h1 className="text-3xl font-bold">Privacy & Security</h1>
			</div>

			<div className="space-y-6">
				{/* Change Password */}
				<div className="bg-white rounded-[10px] shadow p-6">
					<h2 className="text-xl font-semibold mb-4">
						Change Password
					</h2>
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-2">
								Current Password
							</label>
							<input
								type="password"
								className="w-full border rounded px-4 py-2"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium mb-2">
								New Password
							</label>
							<input
								type="password"
								className="w-full border rounded px-4 py-2"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium mb-2">
								Confirm Password
							</label>
							<input
								type="password"
								className="w-full border rounded px-4 py-2"
							/>
						</div>
						<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
							Update Password
						</button>
					</div>
				</div>

				{/* Two-Factor Authentication */}
				<div className="bg-white rounded-[10px] shadow p-6">
					<h2 className="text-xl font-semibold mb-4">
						Two-Factor Authentication
					</h2>
					<p className="text-gray-600 mb-4">
						Add an extra layer of security to your account
					</p>
					<button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
						Enable 2FA
					</button>
				</div>

				{/* Privacy Settings */}
				<div className="bg-white rounded-[10px] shadow p-6">
					<h2 className="text-xl font-semibold mb-4">
						Privacy Settings
					</h2>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">
									Email Notifications
								</p>
								<p className="text-sm text-gray-600">
									Receive updates about your orders
								</p>
							</div>
							<input type="checkbox" className="w-5 h-5" />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">
									Marketing Communications
								</p>
								<p className="text-sm text-gray-600">
									Receive promotional offers
								</p>
							</div>
							<input type="checkbox" className="w-5 h-5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
