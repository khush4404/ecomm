"use client";

import React from "react";
import Link from "next/link";
import RelatedTopics from "./RelatedTopics";
import CommonPost from "./CommonPost";

interface FeedPost {
	id: string;
	author: {
		id: string;
		name: string;
		image?: string;
	};
	title: string;
	content: string;
	images?: string[];
	likes: number;
	shares: number;
	timestamp: string;
	isLiked?: boolean;
	comments?: FeedComment[];
}

interface FeedComment {
	id: string;
	author: {
		name: string;
		image?: string;
	};
	content: string;
	likes: number;
	timestamp: string;
}

interface FeedDetailProps {
	post: FeedPost;
	onBack?: () => void;
}

export const FeedDetail: React.FC<FeedDetailProps> = ({ post, onBack }) => {
	return (
		<div className="space-y-6">
			{/* Back Header */}
			<div className="flex items-center gap-2 mb-4">
				<button
					onClick={onBack}
					className="flex items-center gap-1 text-gray-600 hover:text-[#1D1D1D] transition-colors"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					<span className="text-sm font-medium">Your Feed</span>
				</button>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Post Detail - Left/Center */}
				<div className="lg:col-span-2">
					<CommonPost post={post} imageHeightClass="h-80">
						{/* Comments Section (full) */}
						{post.comments && post.comments.length > 0 && (
							<div className="px-4 py-4 ">
								<p className="text-sm font-semibold text-[#1D1D1D] mb-3">
									Comments
								</p>
								<div className="space-y-4">
									{post.comments.map((comment) => (
										<div
											key={comment.id}
											className="flex gap-3"
										>
											<span className="text-lg">
												<img
													src={comment.author.image || "/images/placeholder-man.jpg"}
													alt={comment.author.name}
													className="rounded-full object-contain h-10 w-10"
												/>
											</span>
											<div className="flex-1">
												<div className="rounded-[10px] md:px-3 px-0">
													<p className="font-medium text-sm text-[#1D1D1D]">
														{comment.author.name}
													</p>
													<p className="text-sm  md:text-base text-text-gray mt-1">
														{comment.content}
													</p>
												</div>
												<div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
													<span>
														👍 {comment.likes}
													</span>
													<button className="hover:underline">
														Reply
													</button>
													<span>
														{comment.timestamp}
													</span>
												</div>
											</div>
											<button className="text-gray-500 hover:text-gray-700">
												<svg
													className="w-4 h-4"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
												</svg>
											</button>
										</div>
									))}
								</div>

								{post.comments.length > 2 && (
									<button className="w-full mt-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
										View more Comments
									</button>
								)}
							</div>
						)}
					</CommonPost>
				</div>

				{/* Sidebar - Right */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-[10px]  border border-[#BBBBBB] p-5 sticky top-4">
						<h3 className="font-semibold text-[#1D1D1D] mb-4">
							Related Topics
						</h3>
						<div className="space-y-3">
							{[
								{
									title: "Are retailers looking long-term prices again?",
									replies: 12,
									views: 20,
								},
								{
									title: "Are smaller shops prioritizing variety?",
									replies: 12,
									views: 20,
								},
								{
									title: "How are dispensaries managing overstock?",
									replies: 12,
									views: 20,
								},
							].map((topic, idx) => (
								<div
									key={idx}
									className="pb-3 border-b border-[#BBBBBB] last:border-b-0 last:pb-0 cursor-pointer hover:text-yellow-600 transition-colors"
								>
									<p className="text-xs font-medium text-[#1D1D1D] leading-relaxed hover:text-yellow-600">
										{topic.title}
									</p>
									<div className="flex gap-2 mt-2 text-xs text-gray-500">
										<span>{topic.replies} Replies</span>
										<span>{topic.views} Views</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<RelatedTopics />
		</div>
	);
};

export default FeedDetail;
