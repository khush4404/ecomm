"use client";
import React from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

type Topic = {
	id: string;
	title: string;
	excerpt: string;
	avatar: string;
	count: string;
};

const sampleTopics: Topic[] = [
	{
		id: "t1",

		title: "Are retailers locking long-term prices again, or still shipping around batch by batch?",
		excerpt:
			"With market prices continuing to fluctuate, many retailers are rethinking their purchasing strategies. Some dispensaries are returning to long-term supply contracts to stabilize costs and ensure consistency.",
		avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop",
		count: "75",
	},
	{
		id: "t2",
		title: "Are smaller shops still prioritizing terp profile variety or just chasing lowest per-lb cost?",
		excerpt:
			"In today's competitive market, smaller cannabis cultivators face tough choices — should they focus on maintaining unique terpene profiles and strain diversity, or cut costs to compete with large-scale producers?",
		avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop",
		count: "5k",
	},
	{
		id: "t3",
		title: "How are dispensaries managing overstock this season? Are flash sales or bundles working?",
		excerpt:
			"Some are experimenting with flash sales, bundle offers, or BOGO deals to move inventory faster. Others are relying on wholesale partnerships, loyalty programs, or discount rotations to stay steady.",
		avatar: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop",
		count: "10k",
	},
];

export const Favorites: React.FC<{ topics?: Topic[] }> = ({
	topics = sampleTopics,
}) => {
	return (
		<div className="bg-white rounded-[10px]  p-4">
			<h3 className="text-sm font-semibold text-[#1D1D1D] border-b pb-4 border-[#BBBBBB] mb-4">
				Favorite Topics
			</h3>

			<ul className="space-y-4">
				{topics.map((t) => (
					<li
						key={t.id}
						className="flex flex-col md:flex-row border-b pb-4 border-[#BBBBBB] items-start gap-4"
					>
						<div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0 rounded-full overflow-hidden">
							<Image
								src={t.avatar}
								alt={t.title}
								fill
								className="object-cover"
							/>
						</div>

						<div className="flex-1">
							<h4 className="text-sm md:text-base font-medium text-gray-900 mb-1">
								{t.title}
							</h4>
							<p className="text-xs md:text-base text-gray-500 mb-2 line-clamp-2">
								{t.excerpt}
							</p>
						</div>

						<div className="ml-2 flex items-center">
							<div className="flex items-center gap-2 text-xs  px-3 py-2">
								<MessageSquare />
								<span>{t.count}</span>
							</div>
						</div>
					</li>
				))}
			</ul>

			<div className="mt-6 text-center">
				<button className="inline-flex items-center px-4 py-2 border rounded-full text-sm text-gray-700 hover:bg-gray-50">
					Show more
				</button>
			</div>
		</div>
	);
};

export default Favorites;
