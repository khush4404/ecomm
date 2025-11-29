"use client";

import React from "react";
import CommonPost from "./CommonPost";

interface FeedPost {
	id: string;
	author: {
		id: string;
		name: string;
		avatar: string;
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
		avatar: string;
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
		<CommonPost post={post} onLike={onLike} onShowComments={onShowComments} imageHeightClass="h-64">
			{showComments && post.comments && post.comments.length > 0 && (
				<div className="px-4 py-4 border-t border-gray-200">
					<p className="text-sm font-semibold text-gray-900 mb-3">Comments</p>
					<div className="space-y-4">
						{post.comments.slice(0, 2).map((comment) => (
							<div key={comment.id} className="flex gap-3">
								<span className="text-lg">{comment.author.avatar}</span>
								<div className="flex-1">
									<div className="bg-gray-100 rounded-lg p-3">
										<p className="font-medium text-sm text-gray-900">{comment.author.name}</p>
										<p className="text-sm text-gray-700 mt-1">{comment.content}</p>
									</div>
									<div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
										<span>👍 {comment.likes}</span>
										<button className="hover:underline">Reply</button>
										<span>{comment.timestamp}</span>
									</div>
								</div>
								<button className="text-gray-500 hover:text-gray-700">
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
									</svg>
								</button>
							</div>
						))}
					</div>

					{post.comments.length > 2 && (
						<button className="w-full mt-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">View more Comments</button>
					)}
				</div>
			)}
		</CommonPost>
	);
};

export default FeedItem;
