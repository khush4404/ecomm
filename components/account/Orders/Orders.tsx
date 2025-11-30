"use client";

import { useState } from "react";
import { OrderDetails } from "../OrderDetails";

const ordersData = [
	{
		id: 1,
		orderNumber: "CRT50000014856",
		date: "10/11/2025",
		total: "$5,000.00",
		status: "Pending",
		items: [
			{ name: "Cherry Garcia", qty: 1, price: "$1,000.00" },
			{ name: "Italian Ice", qty: 2, price: "$500.00" },
		],
	},
	{
		id: 2,
		orderNumber: "CRT50000014823",
		date: "11/11/2025",
		total: "$15,000.00",
		status: "Delivered",
		items: [
			{
				name: "Sherbinski live resin joints",
				qty: 1,
				price: "$1,500.00",
			},
		],
	},
	{
		id: 3,
		orderNumber: "CRT50000082354",
		date: "12/11/2025",
		total: "$2,000.00",
		status: "Processing",
		items: [],
	},
	{
		id: 4,
		orderNumber: "CRT50000014856",
		date: "10/11/2025",
		total: "$5,000.00",
		status: "Pending",
		items: [
			{ name: "Cherry Garcia", qty: 1, price: "$1,000.00" },
			{ name: "Italian Ice", qty: 2, price: "$500.00" },
		],
	},
	{
		id: 5,
		orderNumber: "CRT50000014856",
		date: "10/11/2025",
		total: "$5,000.00",
		status: "Pending",
		items: [
			{ name: "Cherry Garcia", qty: 1, price: "$1,000.00" },
			{ name: "Italian Ice", qty: 2, price: "$500.00" },
		],
	},
	{
		id: 6,
		orderNumber: "CRT50000014856",
		date: "10/11/2025",
		total: "$5,000.00",
		status: "Pending",
		items: [
			{ name: "Cherry Garcia", qty: 1, price: "$1,000.00" },
			{ name: "Italian Ice", qty: 2, price: "$500.00" },
		],
	},
	{
		id: 7,
		orderNumber: "CRT50000014856",
		date: "10/11/2025",
		total: "$5,000.00",
		status: "Pending",
		items: [
			{ name: "Cherry Garcia", qty: 1, price: "$1,000.00" },
			{ name: "Italian Ice", qty: 2, price: "$500.00" },
		],
	},
];

export function Orders() {
	const [activeTab, setActiveTab] = useState<string>("Pending");
	const [query, setQuery] = useState("");
	const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

	const tabs = [
		{ key: "Pending", label: "Pending" },
		{ key: "Processing", label: "Processing" },
		{ key: "Delivered", label: "Delivered" },
		{ key: "Returned", label: "Returned" },
		{ key: "Canceled", label: "Canceled" },
	];

	const counts = tabs.reduce<Record<string, number>>((acc, t) => {
		acc[t.key] = ordersData.filter((o) => o.status === t.key).length;
		return acc;
	}, {} as Record<string, number>);

	const filtered = ordersData.filter((o) => {
		const matchesTab = o.status === activeTab;
		const matchesQuery =
			!query ||
			o.orderNumber.toLowerCase().includes(query.toLowerCase()) ||
			o.date.toLowerCase().includes(query.toLowerCase()) ||
			o.total.toLowerCase().includes(query.toLowerCase());
		return matchesTab && matchesQuery;
	});

	const selectedOrder = selectedOrderId
		? ordersData.find((o) => o.id === selectedOrderId)
		: null;

	// If an order is selected, show the details page
	if (selectedOrder) {
		return (
			<OrderDetails
				order={selectedOrder}
				onBack={() => setSelectedOrderId(null)}
			/>
		);
	}

	// Otherwise, show the orders list
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col md:justify-between gap-4">
				<div className="lg:flex-row flex-col flex justify-between">
					<h2 className="text-2xl font-bold">Order History</h2>

					<div className="flex items-center gap-2">
						<label className="text-sm text-gray-600">
							Show details:
						</label>
						<select className=" px-3 py-1 text-sm">
							<option>Last month</option>
							<option>Last 3 months</option>
							<option>Last year</option>
						</select>
					</div>
				</div>
				<div className="flex-1 md:flex-none flex items-center">
					<input
						type="search"
						placeholder="Search your orders here (eg, date, order, order number)"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="flex-1 md:w-[600px] border border-[#BBBBBB] rounded-l-[10px] px-4 py-2.5 text-sm"
					/>
					<button className="bg-amber-400 text-white px-4 py-2.5 rounded-r-[10px] inline-flex ">
						Search&nbsp;
						<span className="hidden lg:block">Orders</span>
					</button>
				</div>
			</div>

			{/* Tabs */}
			<nav className="flex justify-center lg:justify-start gap-y-4 gap-x-6 flex-wrap">
				{tabs.map((t) => (
					<button
						key={t.key}
						onClick={() => setActiveTab(t.key)}
						className={`-mb-px leading-9  text-text-dark ${
							activeTab === t.key
								? "border-b-4 border-amber-400 font-semibold"
								: "text-text-gray"
						}`}
					>
						{t.label}{" "}
						<span className="text-sm">({counts[t.key] || 0})</span>
					</button>
				))}
			</nav>

			<div className="flex flex-col">
				{filtered.length === 0 && (
					<div className="py-6 text-center text-gray-500">
						No orders found.
					</div>
				)}

				{filtered.map((order) => (
					<div
						key={order.id}
						className="py-4 border-b border-[#bbbbbb]"
					>
						<div className="grid lg:grid-cols-12 grid-cols-1 items-center lg:gap-4">
							<div className="col-span-3 flex lg:gap-1">
								<p className="text-xs lg:text-base leading-6 text-text-dark font-semibold">
									Date ordered:{" "}
								</p>
								<p className="text-xs lg:text-base leading-6 text-text-gray">
									{order.date}
								</p>
							</div>
							<div className="col-span-4 flex lg:gap-1">
								<p className="text-xs lg:text-base leading-6 text-text-dark font-semibold">
									Order Number:
								</p>
								<p className="text-xs lg:text-base leading-6 text-text-gray">
									{order.orderNumber}
								</p>
							</div>
							<div className="col-span-3 flex lg:gap-1">
								<p className="text-xs lg:text-base leading-6 text-text-dark font-semibold">
									Total Amount:
								</p>
								<p className="text-xs lg:text-base leading-6 text-text-gray">
									{order.total}
								</p>
							</div>
							<div className="col-span-2 text-right lg:mt-0 -mt-6">
								<button
									onClick={() => setSelectedOrderId(order.id)}
									className="text-amber-500 text-xs lg:text-base cursor-pointer hover:underline"
								>
									View Details
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
