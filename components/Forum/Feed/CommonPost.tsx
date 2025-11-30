"use client";

import React from "react";
import { Heart, MessageSquare, MessageSquareShare } from "lucide-react";

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

interface CommonPostProps {
	post: FeedPost;
	onLike?: (postId: string) => void;
	onShowComments?: (postId: string) => void;
	// height in tailwind units, e.g. 'h-64' or 'h-80'
	imageHeightClass?: string;
	children?: React.ReactNode;
}

export const CommonPost: React.FC<CommonPostProps> = ({
	post,
	onLike,
	onShowComments,
	imageHeightClass = "h-64",
	children,
}) => {
	const [isLiked, setIsLiked] = React.useState(post.isLiked || false);
	const [showAllImages, setShowAllImages] = React.useState(false);

	const handleLike = () => {
		setIsLiked(!isLiked);
		onLike?.(post.id);
	};

	const handleLikeClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		handleLike();
	};

	const handleShowCommentsClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onShowComments?.(post.id);
	};

	const displayedImages = showAllImages
		? post.images
		: post.images?.slice(0, 1);
	const hasMoreImages = (post.images?.length || 0) > 1;

	return (
		<div className="bg-white rounded-[10px]  border border-[#BBBBBB] overflow-hidden mb-4">
			{/* Post Header */}
			<div className="p-4 border-b border-[#BBBBBB]">
				<div className="flex items-start justify-between mb-2">
					<div className="flex items-center gap-3">
						<span className="text-2xl">{post.author.avatar}</span>
						<div>
							<p className="font-medium text-[#1D1D1D]">
								{post.author.name}
							</p>
							<p className="text-xs text-gray-500">
								{post.timestamp}
							</p>
						</div>
					</div>
					<button className="text-gray-500 hover:text-gray-700">
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
						</svg>
					</button>
				</div>
				<h3 className="font-semibold text-[#1D1D1D] md:text-xl text-base mb-2">
					{post.title}
				</h3>
				<p className="text-sm text-text-gray  md:text-base leading-relaxed">
					{post.content}
				</p>
			</div>

			{/* Post Images */}
			{post.images && post.images.length > 0 && (
				<div className="bg-gray-100">
					{displayedImages?.map((image, index) => (
						<div key={index} className="relative overflow-hidden">
							<img
								src={image}
								alt={`Post image ${index + 1}`}
								className={`w-full object-cover ${imageHeightClass}`}
							/>
						</div>
					))}

					{/* View All Images Button */}
					{hasMoreImages && !showAllImages && (
						<div className="relative">
							<div
								className={`w-full ${imageHeightClass} bg-gray-300 opacity-70 flex items-center justify-center cursor-pointer`}
								onClick={(e) => {
									e.stopPropagation();
									setShowAllImages(true);
								}}
							>
								<span className="text-white font-semibold text-lg">
									+{post.images.length - 1} more
								</span>
							</div>
						</div>
					)}

					{/* Close All Images Button */}
					{showAllImages && hasMoreImages && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								setShowAllImages(false);
							}}
							className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium transition-colors"
						>
							Hide images
						</button>
					)}
				</div>
			)}

			{/* Post Stats */}
			<div className="px-4  py-3 border-b border-[#BBBBBB] flex items-center gap-4 text-xs text-gray-600">
				<span className="flex gap-2 items-center">
					<Heart /> {post.likes}
				</span>
				<span className="flex gap-2 items-center">
					<MessageSquare /> {post.comments?.length || 0} Comments
				</span>
			</div>

			{/* Post Actions */}
			<div className="px-4 py-3 grid md:grid-cols-3 grid-cols-2  items-center  gap-2">
				<button
					onClick={handleLikeClick}
					className={`flex items-center justify-center border w-full gap-2 px-4 py-2 rounded-[42px] transition-colors ${
						isLiked
							? "bg-[#F0BA43] text-white"
							: "hover:bg-text-gray text-[#F0BA43]"
					}`}
				>
					<span className="text-lg">
						<Heart />
					</span>
					<span className="text-sm font-medium">Like</span>
				</button>
				<button
					onClick={handleShowCommentsClick}
					className="flex items-center w-full justify-center border gap-2 px-4 py-2 hover:bg-gray-100 rounded-[42px] text-gray-700 transition-colors"
				>
					<span className="text-lg">
						<MessageSquare />
					</span>
					<span className="text-sm font-medium">Follow</span>
				</button>

				<button
					onClick={(e) => e.stopPropagation()}
					className="flex items-center md:col-span-1 col-span-2  w-full justify-center border gap-2 px-4 py-2 hover:bg-gray-100 rounded-[42px] text-gray-700 transition-colors"
				>
					<span className="text-lg">
						<MessageSquareShare />
					</span>
					<span className="text-sm font-medium">Share</span>
				</button>
			</div>

			{/* Comment Input */}
			<div className="px-4 py-3 border-t border-[#BBBBBB]">
				<div className="flex items-center gap-2">
					<span className="text-xl">👤</span>
					<input
						type="text"
						placeholder="What are your thoughts?"
						className="flex-1 bg-[#F5F5F5] placeholder:text-text-gray rounded-[10px] px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			</div>

			{/* render any children (comments, detail sections) inside the same card */}
			{children}
		</div>
	);
};

export default CommonPost;
