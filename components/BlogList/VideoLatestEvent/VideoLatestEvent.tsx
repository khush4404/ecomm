import React from "react";
import Image from "next/image";

type VideoPost = {
    id: string;
    imgSrc: string;
    title: string;
    excerpt: string;
    owner: string;
    date: string;
};

type NewsItem = {
    id: string;
    imgSrc: string;
    title: string;
    owner: string;
    date: string;
};

type EventItem = {
    id: string;
    day: string;
    month: string;
    title: string;
    location?: string;
};

const videoPosts: VideoPost[] = [
    {
        id: "v1",
        imgSrc: "/images/blogs/videoimg.png",
        title: "Legal cannabis support from GOP voters is declining, poll shows",
        excerpt:
            "Every year, the health and wellness landscape evolves dramatically. A new demand for non-psychoactive alternatives has emerged.",
        owner: "Emma willson",
        date: "2 Days Ago",
    },
];

const latestNews: NewsItem[] = [
    {
        id: "n1",
        imgSrc: "/images/blogs/news1.png",
        title: "Florida Officials Advance Marijuana Legalization Initiative",
        owner: "Emma willson",
        date: "2 Days Ago",
    },
    {
        id: "n2",
        imgSrc: "/images/blogs/news2.png",
        title: "The New Federal Hemp Ban Is An Opportunity To Legalize Cannabis",
        owner: "Emma willson",
        date: "2 Days Ago",
    },
    {
        id: "n3",
        imgSrc: "/images/blogs/news3.png",
        title: "Trump DOJ Declines To File Supreme Court Brief In Marijuana Companies' Case",
        owner: "Emma willson",
        date: "2 Days Ago",
    },
];

const events: EventItem[] = [
    { id: "e1", day: "15", month: "Nov", title: "Last day of the big deal", location: "Canada" },
    { id: "e2", day: "28", month: "Nov", title: "Meetup in conventional center", location: "Melbourne, Australia" },
    { id: "e3", day: "05", month: "Dec", title: "New Product Arrival Launching event", location: "North Carolina" },
    { id: "e4", day: "12", month: "Dec", title: "Community Leaders meetup", location: "800 Granville Avenue, Unit 750" },
    { id: "e5", day: "22", month: "Dec", title: "Cannbis Sellers rally", location: "Canada" },
];

export const VideoLatestEvent: React.FC = () => {
    return (
        <section className="py-6 lg:py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Video posts - left (large) */}
                    <div className="lg:col-span-1">
                        {videoPosts.map((v) => (
                            <div key={v.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div className="relative w-full h-56 md:h-64 lg:h-56">
                                    <Image src={v.imgSrc} alt={v.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" />
                                    <div className="absolute top-3 left-3 bg-black bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 3v18l15-9L5 3z" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                                        <div className="text-xs">
                                            <div className="font-medium text-gray-700">{v.owner}</div>
                                            <div className="text-gray-400 text-[13px]">{v.date}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                                    <p className="text-sm text-gray-600">{v.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Latest News - middle */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-base">Latest News</h4>
                            <a className="text-sm text-yellow-500">View More</a>
                        </div>

                        <div className="space-y-4">
                            {latestNews.map((n) => (
                                <div key={n.id} className="flex gap-4 items-start">
                                    <div className="w-20 h-16 relative rounded overflow-hidden">
                                        <Image src={n.imgSrc} alt={n.title} fill className="object-cover" sizes="(min-width:1024px) 20vw, 30vw" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-500 mb-1">{n.owner} . {n.date}</div>
                                        <h5 className="text-sm font-medium text-gray-900">{n.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events - right */}
                    <aside className="lg:col-span-1">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-base">Upcoming Events</h4>
                            <a className="text-sm text-yellow-500">View All</a>
                        </div>

                        <div className="space-y-3">
                            {events.map((ev) => (
                                <div key={ev.id} className="flex items-center gap-4 bg-gray-50 rounded-lg p-3">
                                    <div className="w-14 shrink-0">
                                        <div className="text-center bg-white rounded-lg shadow-sm py-2">
                                            <div className="text-lg font-semibold">{ev.day}</div>
                                            <div className="text-xs text-gray-500">{ev.month}</div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-900">{ev.title}</div>
                                        {ev.location && <div className="text-xs text-gray-500">{ev.location}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default VideoLatestEvent;
