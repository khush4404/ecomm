"use client";

import React from "react";

interface TrendingPost {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	views: number;
}

interface FeedSidebarProps {
	trendingPosts?: TrendingPost[];
}

export const FeedSidebar: React.FC<FeedSidebarProps> = ({
	trendingPosts = [],
}) => {
	return (
		<div className="space-y-4">
			{/* Good Morning Card */}
			<div className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-5">
				<h3 className="font-semibold text-[##1D1D1D] mb-2.5 text-xl">
					Good Morning
				</h3>
				<p className="text-base text-text-gray  leading-relaxed">
					Welcome to Passion Farms Community. Connect, share, and
					engage with our community and build relationships.
				</p>
				<p className="text-base text-text-gray mb-5 leading-relaxed">
					Please log in if you are already a member or sign up for an
					account.
				</p>
				<button className="w-full bg-[#F0BA43] text-[#FFFFFF] font-medium py-2 rounded-[10px] transition-colors mb-3 text-xl">
					Join the community
				</button>
				<p className="text-xl text-text-gray border py-2 rounded-[10px]  text-center">
					Already a member?
				</p>
			</div>

			{/* Trending Posts */}
			<div className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-5">
				<div className="flex items-center gap-2 mb-2">
					<span className="text-lg">🔥</span>
					<h3 className="font-semibold text-[#1D1D1D] text-xl">
						Trending posts
					</h3>
				</div>
				<p className="text-sm border-b border-[#BBBBBB] pb-2 text-text-gray mb-4">
					Most popular this week
				</p>

				<div className="space-y-3">
					{trendingPosts.map((post) => (
						<div
							key={post.id}
							className="flex items-center justify-between pb-4 rounded transition-colors cursor-pointer"
						>
							<div className="flex items-center gap-2 flex-1 min-w-0">
								<span className="text-xl shrink-0">
									{post.author.avatar}
								</span>
								<p className="text-base font-medium text-[#1D1D1D] truncate">
									{post.author.name}
								</p>
							</div>
							<span className="text-base font-semibold text-text-gray ml-2 shrink-0">
								{post.views}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeedSidebar;
