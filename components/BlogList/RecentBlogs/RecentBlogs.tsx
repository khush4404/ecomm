import React from "react";
import { RecentBlogCard } from "@/components/common/RecentBlogCard/RecentBlogCard";

type BlogItem = {
    imgSrc: string;
    title: string;
    text: string;
    owner: string;
    date: string;
};

const data: BlogItem[] = [
    {
        imgSrc: "/images/blogs/blog1.png",
        title: "Netflix Documentary Shows How Psychedelics Help Military Veterans Heal Trauma",
        text: "Every year, the health and wellness landscape evolves dramatically. A new demand for non-psychoactive...",
        owner: "Ken",
        date: "October 27, 2025",
    },
    {
        imgSrc: "/images/blogs/blog2.png",
        title: "Sourcing Premium THCA Flower: Behind the Scenes with Top Growers",
        text: "Quality starts with genetics. Leading growers have access to specific strains bred for THCA levels between...",
        owner: "Ken",
        date: "October 26, 2025",
    },
    {
        imgSrc: "/images/blogs/blog3.png",
        title: "Automate Your Cannabis Business with Passion Farms, Texas",
        text: "Running a cannabis business by hand takes time, and you make mistakes and miss growth opportunities.",
        owner: "Ken",
        date: "October 25, 2025",
    },
];

export const RecentBlogs: React.FC = () => {
    return (
        <section className="py-6 lg:py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-lg md:text-2xl font-semibold mb-6">Recent Blog posts</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, idx) => (
                        <RecentBlogCard key={idx} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button className="px-6 py-2 rounded-md border border-gray-200 text-sm bg-white hover:bg-gray-50">
                        Load more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentBlogs;