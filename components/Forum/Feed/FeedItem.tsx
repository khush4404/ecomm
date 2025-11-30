"use client";

import React from "react";
import CommonPost from "./CommonPost";
import Image from "next/image";

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

interface FeedItemProps {
	post: FeedPost;
	onLike?: (postId: string) => void;
	onShowComments?: (postId: string) => void;
	showComments?: boolean;
}

export const FeedItem: React.FC<FeedItemProps> = ({
	post,
	onLike,
	onShowComments,
	showComments = false,
}) => {
	return (
		<CommonPost
			post={post}
			onLike={onLike}
			onShowComments={onShowComments}
			imageHeightClass="h-64"
		>
			{showComments && post.comments && post.comments.length > 0 && (
				<div className="px-4 py-4 border-t border-[#BBBBBB]">
					<p className="text-sm font-semibold text-[#1D1D1D] mb-3">
						Comments
					</p>
					<div className="space-y-4">
						{post.comments.slice(0, 2).map((comment) => (
							<div key={comment.id} className="flex gap-3">
								<span className="text-lg">
									<Image
										src={comment.author.image || "/images/placeholder-man.jpg"}
										alt={comment.author.name}
										fill
										className="rounded-[10px] object-contain"
									/>
								</span>
								<div className="flex-1">
									<div className="bg-gray-100 rounded-[10px] p-3">
										<p className="font-medium text-sm text-[#1D1D1D]">
											{comment.author.name}
										</p>
										<p className="text-sm text-gray-700 mt-1">
											{comment.content}
										</p>
									</div>
									<div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
										<span>👍 {comment.likes}</span>
										<button className="hover:underline">
											Reply
										</button>
										<span>{comment.timestamp}</span>
									</div>
								</div>
								<button className="text-text-dark">
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
	);
};

export default FeedItem;
