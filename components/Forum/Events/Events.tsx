import { ArrowUpRight, BellRing, Calendar1, Search } from "lucide-react";
import React, { useState } from "react";

type EventItem = {
	id: number;
	date: string; // ISO date or display string
	time?: string;
	description: string;
	image?: string;
	isPast?: boolean;
};

const MOCK_EVENTS: EventItem[] = [
	{
		id: 1,
		date: "2025-09-04T20:30:00",
		time: "8:30pm",
		description:
			"Closing the Year Strong: Top 5 Community Action Items for You",
		image: "/images/events/event1.jpg",
		isPast: false,
	},
	{
		id: 2,
		date: "2025-04-25T19:30:00",
		time: "7:30pm",
		description:
			"Workshop Series | Engage, Enhance, your dream business market with innovation.",
		image: "/images/events/event2.jpg",
		isPast: true,
	},
	{
		id: 3,
		date: "2025-11-01T22:00:00",
		time: "10:00pm",
		description:
			"Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
		image: "/images/events/event3.jpg",
		isPast: false,
	},
	{
		id: 4,
		date: "2025-09-04T20:30:00",
		time: "8:30pm",
		description:
			"Closing the Year Strong: Top 5 Community Action Items for You",
		image: "/images/events/event1.jpg",
		isPast: false,
	},
	{
		id: 5,
		date: "2025-04-25T19:30:00",
		time: "7:30pm",
		description:
			"Workshop Series | Engage, Enhance, your dream business market with innovation.",
		image: "/images/events/event2.jpg",
		isPast: true,
	},
	{
		id: 6,
		date: "2025-11-01T22:00:00",
		time: "10:00pm",
		description:
			"Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
		image: "/images/events/event3.jpg",
		isPast: false,
	},
];

const formatDateShort = (iso?: string) => {
	if (!iso) return "";
	try {
		const d = new Date(iso);
		const datePart = d.toLocaleDateString(undefined, {
			weekday: "short",
			month: "short",
			day: "numeric",
		});
		// format time like `8:30pm`
		const timePart = d
			.toLocaleTimeString(undefined, {
				hour: "numeric",
				minute: "2-digit",
			})
			.toLowerCase()
			.replace(" ", "");
		return `${datePart}, ${timePart}`;
	} catch {
		return iso;
	}
};

export const Events: React.FC = () => {
	const [view, setView] = useState<"upcoming" | "past">("upcoming");

	const items = MOCK_EVENTS.filter((e) =>
		view === "upcoming" ? !e.isPast : e.isPast
	);

	return (
		<div className="w-full">
			{/* Hero */}
			<div className="rounded-[10px] overflow-hidden mb-6">
				<div className="h-40 bg-linear-to-r from-purple-800 via-indigo-700 to-purple-600 flex md:gap-12 gap-9 flex-col p-6 text-white">
					<div>
						<h2 className="text-xl md:text-4xl font-semibold">
							Events
						</h2>
					</div>

					<div className=" flex gap-3">
						<button className="w-10 h-10 text-[#1D1D1D] rounded-full bg-white flex items-center justify-center">
							<BellRing />
						</button>
						<button className="w-10 h-10 rounded-full text-[#1D1D1D] bg-white flex items-center justify-center">
							<ArrowUpRight />
						</button>
						<button className="w-10 h-10 rounded-full text-[#1D1D1D] bg-white flex items-center justify-center">
							<Search />
						</button>
					</div>
				</div>
			</div>

			{/* Tabs */}
			<div className="flex flex-col md:flex-row  items-center gap-3 mb-4">
				<button
					onClick={() => setView("past")}
					className={`px-4 py-2   w-[343px] md:w-[301px] text-sm ${
						view === "past"
							? "bg-yellow-300 text-black"
							: "bg-white border md:border-0 text-text-gray rounded-full"
					}`}
				>
					Upcoming Events
				</button>
				<button
					onClick={() => setView("upcoming")}
					className={`px-4 py-2 rounded-full w-[343px] md:w-[301px] text-sm ${
						view === "upcoming"
							? "bg-yellow-300 text-black"
							: "bg-white border text-gray-700"
					}`}
				>
					Past Events (Recordings)
				</button>
			</div>

			{/* Grid of cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{items.map((ev) => (
					<article
						key={ev.id}
						className="bg-white rounded-[10px] shadow-sm overflow-hidden"
					>
						<div
							className="h-36 bg-gray-200 bg-cover bg-center"
							style={{
								backgroundImage: `url(${
									ev.image ?? "/images/events/placeholder.jpg"
								})`,
							}}
						/>

						<div className="md:p-4 p-1">
							<div className="flex items-center justify-between mb-3">
								<div className="flex items-center gap-3 text-sm text-gray-500">
									<span className="inline-flex items-center gap-2  px-2 py-1 rounded text-xs text-gray-600">
										<Calendar1 />
										<span className="text-base">
											{formatDateShort(ev.date)}
										</span>
									</span>
								</div>
							</div>

							<p className="text-base md:text-xl text-gray-600 mb-4">
								{ev.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Events;
