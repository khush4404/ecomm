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
        description: "Closing the Year Strong: Top 5 Community Action Items for You",
        image: "/images/events/event1.jpg",
        isPast: false,
    },
    {
        id: 2,
        date: "2025-04-25T19:30:00",
        time: "7:30pm",
        description: "Workshop Series | Engage, Enhance, your dream business market with innovation.",
        image: "/images/events/event2.jpg",
        isPast: true,
    },
    {
        id: 3,
        date: "2025-11-01T22:00:00",
        time: "10:00pm",
        description: "Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
        image: "/images/events/event3.jpg",
        isPast: false,
    },
    {
        id: 4,
        date: "2025-09-04T20:30:00",
        time: "8:30pm",
        description: "Closing the Year Strong: Top 5 Community Action Items for You",
        image: "/images/events/event1.jpg",
        isPast: false,
    },
    {
        id: 5,
        date: "2025-04-25T19:30:00",
        time: "7:30pm",
        description: "Workshop Series | Engage, Enhance, your dream business market with innovation.",
        image: "/images/events/event2.jpg",
        isPast: true,
    },
    {
        id: 6,
        date: "2025-11-01T22:00:00",
        time: "10:00pm",
        description: "Crafting Exceptional Community Experience: Structuring, Branding, and Launching",
        image: "/images/events/event3.jpg",
        isPast: false,
    },
];

const formatDateShort = (iso?: string) => {
    if (!iso) return "";
    try {
        const d = new Date(iso);
        const datePart = d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
        // format time like `8:30pm`
        const timePart = d
            .toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
            .toLowerCase()
            .replace(" ", "");
        return `${datePart}, ${timePart}`;
    } catch {
        return iso;
    }
};

export const Events: React.FC = () => {
    const [view, setView] = useState<"upcoming" | "past">("upcoming");

    const items = MOCK_EVENTS.filter((e) => (view === "upcoming" ? !e.isPast : e.isPast));

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="rounded-lg overflow-hidden mb-6 shadow-sm">
                <div className="h-40 bg-linear-to-r from-purple-800 via-indigo-700 to-purple-600 flex items-center px-6 text-white">
                    <div>
                        <h2 className="text-2xl font-semibold">Events</h2>
                        <p className="text-sm text-purple-100/80">Find upcoming workshops, panels and recordings</p>
                    </div>

                    <div className="ml-auto flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">🔔</button>
                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">✏️</button>
                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">🔍</button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-3 mb-4">
                <button
                    onClick={() => setView("upcoming")}
                    className={`px-4 py-2 rounded-full text-sm ${view === "upcoming" ? "bg-yellow-300 text-black" : "bg-white border text-gray-700"
                        }`}
                >
                    Upcoming Events
                </button>
                <button
                    onClick={() => setView("past")}
                    className={`px-4 py-2 rounded-full text-sm ${view === "past" ? "bg-yellow-300 text-black" : "bg-white border text-gray-700"
                        }`}
                >
                    Past Events (Recordings)
                </button>
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((ev) => (
                    <article key={ev.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div
                            className="h-36 bg-gray-200 bg-cover bg-center"
                            style={{ backgroundImage: `url(${ev.image ?? "/images/events/placeholder.jpg"})` }}
                        />

                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                        </svg>
                                        <span>{formatDateShort(ev.date)}</span>
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mb-4">{ev.description}</p>


                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Events;
