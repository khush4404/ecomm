"use client";
import React from "react";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

type Post = {
	id: string;
	author: {
		name: string;
		image?: string;
	};
	time: string;
	title: string;
	description: string;
	image?: string;
	likes: number;
	comments: number;
};

type VideoPost = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	views: number;
	channel?: string;
};

type PostSectionProps = {
	title: string;
	posts: Post[];
	onViewAll?: () => void;
};

type VideoSectionProps = {
	title: string;
	videos: VideoPost[];
	onViewAll?: () => void;
};

const whatNewData: Post[] = [
	{
		id: "wn1",
		author: {
			name: "John Wilson",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 234,
		comments: 12,
	},
	{
		id: "wn2",
		author: {
			name: "Sarah Mitchell",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 156,
		comments: 8,
	},
	{
		id: "wn3",
		author: {
			name: "Mike Johnson",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 289,
		comments: 15,
	},
];

const yourFeedData: Post[] = [
	{
		id: "yf1",
		author: {
			name: "Emma Davis",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 145,
		comments: 6,
	},
	{
		id: "yf2",
		author: {
			name: "Alex Chen",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 278,
		comments: 11,
	},
	{
		id: "yf3",
		author: {
			name: "Lisa Park",
		},
		time: "10 days ago",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification framework in order to incentivize and streamline user engagement. Simple mechanics like daily login bonuses, task-based achievements, and gamified user rewards help keep users engaged long-term and reduce churn.",
		likes: 312,
		comments: 18,
	},
];

const videosData: VideoPost[] = [
	{
		id: "v1",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle recently launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the.....",
		thumbnail:
			"/images/forum/card-banner-1.png",
		views: 5234,
	},
	{
		id: "v2",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle recently launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the.....",
		thumbnail:
			"/images/forum/card-banner-2.png",
		views: 3456,
	},
	{
		id: "v3",
		title: "Gamification: User levels based on activities and engagement",
		description:
			"We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle recently launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the.....",
		thumbnail:
			"/images/forum/card-banner-3.png",
		views: 4123,
	},
];

// Post Card Component
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<div className="bg-white rounded-[10px] border border-[#BBBBBB] p-4  transition">
			<div className="flex items-start gap-3 mb-2.5 md:mb-1">
				<Image
					src={post.author.image || "/images/placeholder-man.jpg"}
					alt={post.author.name}
					width={32}
					height={32}
					className="rounded-full object-cover"
					placeholder="empty"
				/>
				<div className="flex-1 min-w-0">
					<div className="flex items-center gap-2">
						<span className="font-semibold md:text-xs text-sm text-[#1D1D1D] truncate">
							{post.author.name}
						</span>
					</div>
					<span className="md:text-xs text-sm text-text-gray">
						{post.time}
					</span>
				</div>
			</div>

			<h3 className="font-semibold text-base md:text-xl text-[#1D1D1D] mb-2.5 line-clamp-2">
				{post.title}
			</h3>

			<p className="text-sm md:text-base text-text-gray mb-3 line-clamp-3">
				{post.description}
			</p>

			<div className="flex float-right items-center gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100">
				<button className="flex items-center gap-1 hover:text-red-500 transition">
					<Heart size={12} />
					<span>{post.likes}</span>
				</button>
				<button className="flex items-center gap-1 hover:text-blue-500 transition">
					<MessageCircle size={12} />
					<span>{post.comments}</span>
				</button>
			</div>
		</div>
	);
};

// Reusable Post Section Component
const PostSection: React.FC<PostSectionProps> = ({
	title,
	posts,
	onViewAll,
}) => {
	return (
		<section>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold text-[#1D1D1D]">{title}</h2>
				<button
					onClick={onViewAll}
					className="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
				>
					View All →
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</section>
	);
};

// Reusable VideoSection component
const VideoSection: React.FC<VideoSectionProps> = ({
	title,
	videos,
	onViewAll,
}) => {
	return (
		<section>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold text-[#1D1D1D]">{title}</h2>
				<button
					onClick={onViewAll}
					className="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
				>
					View All →
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{videos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
		</section>
	);
};

const VideoCard: React.FC<{ video: VideoPost }> = ({ video }) => {
	return (
		<div className="bg-white rounded-[10px] border border-[#BBBBBB] transition">
			<div className="relative w-full h-[191px] bg-gray-200 rounded-[10px]">
				<Image
					src={video.thumbnail}
					alt={video.title}
					fill
					className="object-cover h-full w-full roundede-[10px] overflow-hidden"
					placeholder="empty"
				/>
			</div>
			<div className="p-4">
				<h3 className="font-semibold text-base md:text-xl text-[#1D1D1D] mb-2.5 md:mb-3 line-clamp-2">
					{video.title}
				</h3>
				<p className="text-xs text-gray-600 mb-2">
					{video.description}
				</p>
			</div>
		</div>
	);
};

export const Explore: React.FC = () => {
	const handleViewAll = () => {
		// placeholder for view all actions
		console.log("View all clicked");
	};

	return (
		<div className="space-y-8">
			<div className="flex flex-col items-center md:items-start gap-3 mt-4 pb-3">
				{/* Row 1 (Desktop: all 3 in one row — Mobile: only active tab) */}
				<div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
					<button className="px-6 py-2 bg-[#F0BA43] text-white font-medium rounded-full flex items-center gap-2">
						Categories
					</button>

					{/* Hide these two on small screens */}
					<button className="hidden sm:flex px-6 py-2 border  border-[#BBBBBB]text-gray-700 rounded-full hover:bg-gray-100">
						Topics
					</button>

					<button className="hidden sm:flex px-6 py-2 border  border-[#BBBBBB]text-gray-700 rounded-full hover:bg-gray-100">
						Top
					</button>
				</div>

				{/* Row 2 – show on mobile only */}
				<div className="flex sm:hidden items-center gap-3">
					<button className="px-6 py-2 border  border-[#BBBBBB]text-gray-700 rounded-full hover:bg-gray-100">
						Topics
					</button>

					<button className="px-6 py-2 border  border-[#BBBBBB]text-gray-700 rounded-full hover:bg-gray-100">
						Top
					</button>
				</div>
			</div>
			<PostSection
				title={"What's New"}
				posts={whatNewData}
				onViewAll={handleViewAll}
			/>
			<PostSection
				title={"Your Feed"}
				posts={yourFeedData}
				onViewAll={handleViewAll}
			/>
			<VideoSection
				title={"Videos & Tutorials"}
				videos={videosData}
				onViewAll={handleViewAll}
			/>
		</div>
	);
};

export default Explore;
