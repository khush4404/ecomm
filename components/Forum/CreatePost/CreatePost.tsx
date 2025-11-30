"use client";

import {
	AtSign,
	Bold,
	Image,
	Italic,
	Paperclip,
	Smile,
	Underline,
} from "lucide-react";
import React, { useState } from "react";

interface CreatePostModalProps {
	isOpen: boolean;
	onClose: () => void;
	userName?: string;
	userAvatar?: string;
}

export const CreatePost: React.FC<CreatePostModalProps> = ({
	isOpen,
	onClose,
	userName = "Jamie Hilton",
	userAvatar = "👤",
}) => {
	const [postContent, setPostContent] = useState("");

	const handleSubmit = () => {
		if (postContent.trim()) {
			console.log("Post created:", postContent);
			setPostContent("");
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<>
			{/* Modal Backdrop */}
			<div
				className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto z-50 bg-white rounded-[10px] shadow-xl p-6">
				{/* Header with User Info */}
				<div className="flex items-center gap-3 mb-6 ">
					<span className="text-3xl">{userAvatar}</span>
					<span className="text-sm font-medium text-gray-700">
						{userName}
					</span>
				</div>

				{/* Search/Post Area */}
				<div className="mb-6 border border-[#BBBBBB]">
					{/* Post Content Textarea */}
					<textarea
						placeholder="What is this about?"
						value={postContent}
						onChange={(e) => setPostContent(e.target.value)}
						rows={6}
						className="w-full border-b border-[#BBBBBB]  px-4 py-3 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none text-gray-700"
					/>
					<div className="flex justify-between items-center p-2 -mt-1.5">
						<div className="flex items-center gap-4 p-3 ">
							<button
								title="Bold"
								className="text-text-gray text-sm"
							>
								<Bold />
							</button>
							<button
								title="Bold"
								className="text-text-gray text-sm"
							>
								<Italic />
							</button>
							<button
								title="Bold"
								className="text-text-gray text-sm"
							>
								<Underline />
							</button>
							<button
								title="link"
								className="text-text-gray text-sm"
							>
								<Paperclip />
							</button>
							<button
								title="image"
								className="text-text-gray text-sm"
							>
								<Image />
							</button>
							<button
								title="emoji"
								className="text-text-gray text-sm"
							>
								<Smile />
							</button>
							<button
								title="mention"
								className="text-text-gray text-sm"
							>
								<AtSign />
							</button>
						</div>
						<div className="hidden md:block">
							<button
								onClick={handleSubmit}
								disabled={!postContent.trim()}
								className="px-8 py-2 bg-[#F0BA43] text-[#1D1D1D] font-medium rounded-full  disabled:opacity-50 disabled:cursor-not-allowed"
							>
								Post
							</button>
						</div>
					</div>
				</div>
				<div className="block md:hidden">
					<button
						onClick={handleSubmit}
						disabled={!postContent.trim()}
						className="px-8 py-2 bg-[#F0BA43] text-black font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Post
					</button>
				</div>

				{/* Formatting Toolbar */}

				{/* Footer Buttons */}
			</div>
		</>
	);
};

export default CreatePost;

// Inline Create Post Box (non-modal) — same layout as modal content but for embedding in pages
export const CreatePostBox: React.FC<{
	userName?: string;
	userAvatar?: string;
	onPost?: (content: string) => void;
}> = ({ userName = "Jamie Hilton", userAvatar = "👤", onPost }) => {
	const [postContent, setPostContent] = React.useState("");

	const handleSubmit = () => {
		if (postContent.trim()) {
			onPost?.(postContent.trim());
			setPostContent("");
		}
	};

	return (
		<div className="bg-white rounded-[10px] shadow p-4">
			<div className="flex items-center gap-3 mb-4">
				<span className="text-2xl">{userAvatar}</span>
				<span className="text-sm font-medium text-gray-700">
					{userName}
				</span>
			</div>

			<div className="mb-3">
				<textarea
					placeholder="Search or ask questions"
					value={postContent}
					onChange={(e) => setPostContent(e.target.value)}
					rows={4}
					className="w-full border border-gray-200 rounded-[10px] px-4 py-3 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none text-gray-700"
				/>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3 text-gray-600">
					<button title="Bold" className="text-sm font-semibold">
						B
					</button>
					<button title="Italic" className="italic">
						I
					</button>
					<button title="Underline" className="underline">
						U
					</button>
					<button title="Image" className="text-gray-600">
						📷
					</button>
					<button title="Emoji" className="text-gray-600">
						😊
					</button>
					<button title="Mention" className="text-gray-600">
						@
					</button>
				</div>

				<button
					onClick={handleSubmit}
					disabled={!postContent.trim()}
					className="px-6 py-2 bg-[#F0BA43] text-black font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Post
				</button>
			</div>
		</div>
	);
};
