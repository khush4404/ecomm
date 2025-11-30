import { ArrowUpRight, BellRing, Calendar, Calendar1, Search } from "lucide-react";
import Image from "next/image";
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
		image: "/images/forum/event-banner-1.jpg",
		isPast: false,
	},
	{
		id: 2,
		date: "2025-04-25T19:30:00",
		time: "7:30pm",
		description:
			"Workshop Series | Engage, Enhance, your dream business market with innovation.",
		image: "/images/forum/event-banner-2.jpg",
		isPast: true,
	},
	{
		id: 3,
		date: "2025-11-01T22:00:00",
		time: "10:00pm",
		description:
			"Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
		image: "/images/forum/event-banner-3.jpg",
		isPast: false,
	},
	{
		id: 4,
		date: "2025-09-04T20:30:00",
		time: "8:30pm",
		description:
			"Closing the Year Strong: Top 5 Community Action Items for You",
		image: "/images/forum/event-banner-4.jpg",
		isPast: false,
	},
	{
		id: 5,
		date: "2025-04-25T19:30:00",
		time: "7:30pm",
		description:
			"Workshop Series | Engage, Enhance, your dream business market with innovation.",
		image: "/images/forum/event-banner-5.jpg",
		isPast: true,
	},
	{
		id: 6,
		date: "2025-11-01T22:00:00",
		time: "10:00pm",
		description:
			"Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
		image: "/images/forum/event-banner-6.jpg",
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
			<div className="rounded-[10px] overflow-hidden mb-6 relative h-40 sm:h-[274px]">
				{/* Background Image */}
				<Image
					src={"/images/forum/event-banner.jpg"}
					alt="Events hero"
					fill
					className="object-cover"
					priority
				/>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/40" />
				{/* Content */}
				<div className="absolute inset-0 flex md:gap-32 gap-9 flex-col p-6 text-white">
					<div>
						<h2 className="text-xl md:text-4xl inline-flex items-center gap-3">
							<Calendar />
							Events
						</h2>
					</div>

					<div className="flex gap-3">
						<button className="w-10 h-10 text-[#1D1D1D] rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
							<BellRing />
						</button>
						<button className="w-10 h-10 rounded-full text-[#1D1D1D] bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
							<ArrowUpRight />
						</button>
						<button className="w-10 h-10 rounded-full text-[#1D1D1D] bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
							<Search />
						</button>
					</div>
				</div>
			</div>

			{/* Tabs */}
			<div className="flex flex-col md:flex-row  items-center gap-3 mb-4">
				<button
					onClick={() => setView("past")}
					className={`px-4 py-2   w-[343px] md:w-[301px] text-sm rounded-full ${view === "past"
						? "bg-yellow-btn text-white"
						: "bg-white border md:border-0 text-text-gray rounded-full"
						}`}
				>
					Upcoming Events
				</button>
				<button
					onClick={() => setView("upcoming")}
					className={`px-4 py-2 rounded-full w-[343px] md:w-[301px] text-sm ${view === "upcoming"
						? "bg-yellow-btn text-white"
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
						className="bg-white rounded-[10px] border border-[#bbb] overflow-hidden"
					>
						<div
							className="h-36 bg-gray-200 bg-cover bg-center"
							style={{
								backgroundImage: `url(${ev.image ?? "/images/events/placeholder.jpg"
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

							<p className="text-base md:text-xl text-text-gray mb-4">
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
