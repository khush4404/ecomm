"use client";

import {
	AtSign,
	Bold,
	Image as ImageIcon,
	Italic,
	Paperclip,
	Smile,
	Underline,
	X,
} from "lucide-react";
import NextImage from "next/image";
import React, { useState } from "react";

interface CreatePostModalProps {
	isOpen: boolean;
	onClose: () => void;
	userName?: string;
	userImage?: string;
}

export const CreatePost: React.FC<CreatePostModalProps> = ({
	isOpen,
	onClose,
	userName = "Jamie Hilton",
	userImage,
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
			{/* Desktop Modal Backdrop + Modal (hidden on mobile) */}
			<div className="hidden lg:block">
				<div
					className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
					onClick={onClose}
				/>

				<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto z-50 bg-white rounded-[10px] shadow-xl p-6">
					{/* Header with User Info */}
					<div className="flex items-center gap-3 mb-6 ">
						<span className="text-3xl">
							<NextImage
								src={userImage || "/images/placeholder-man.jpg"}
								alt={userName}
								width={40}
								height={40}
								className="rounded-full object-contain"
							/>
						</span>
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
									title="Italic"
									className="text-text-gray text-sm"
								>
									<Italic />
								</button>
								<button
									title="Underline"
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
									<ImageIcon />
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
									className="px-8 py-2 bg-[#F0BA43] text-white font-medium rounded-full  disabled:opacity-50 disabled:cursor-not-allowed"
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
							className="px-8 py-2 bg-[#F0BA43] text-white font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Post
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Full-Page Layout - visible below lg */}
			<div className="lg:hidden w-full">
				{/* Top bar with close */}
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold text-text-dark">Write your question or topic here...</h2>
					<div className="w-6" />
				</div>

				<div className="bg-white rounded-[10px]">
					<div className="flex items-center gap-3 mb-3">
						<NextImage
							src={userImage || "/images/placeholder-man.jpg"}
							alt={userName}
							width={40}
							height={40}
							className="rounded-full object-contain"
						/>
						<span className="text-sm font-medium text-gray-700">
							{userName}
						</span>
					</div>

					<div className="border border-[#bbb] rounded-[10px]">
						<div className="mb-3">
							<textarea
								placeholder="🔎 Search or ask questions"
								value={postContent}
								onChange={(e) => setPostContent(e.target.value)}
								rows={12}
								className="w-full px-4 py-3 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none text-gray-700"
							/>
						</div>
						<div className="flex items-center gap-4 py-8 p-4 border-t border-[#bbb] justify-between">
							<button title="Bold" className="text-text-gray hover:text-gray-800 transition">
								<Bold size={20} />
							</button>
							<button title="Italic" className="text-text-gray hover:text-gray-800 transition">
								<Italic size={20} />
							</button>
							<button title="Underline" className="text-text-gray hover:text-gray-800 transition">
								<Underline size={20} />
							</button>
							<span className="text-text-gray">|</span>
							<button title="Attachment" className="text-text-gray hover:text-gray-800 transition">
								<Paperclip size={20} />
							</button>
							<button title="Image" className="text-text-gray hover:text-gray-800 transition">
								<ImageIcon size={20} />
							</button>
							<button title="Emoji" className="text-text-gray hover:text-gray-800 transition">
								<Smile size={20} />
							</button>
							<button title="Mention" className="text-text-gray hover:text-gray-800 transition">
								<AtSign size={20} />
							</button>
						</div>
					</div>

				</div>

				<button
					onClick={handleSubmit}
					disabled={!postContent.trim()}
					className="mt-4 w-full px-6 py-3 bg-[#F0BA43] text-white font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Post
				</button>
			</div>
		</>
	);
};

export default CreatePost;

// Inline Create Post Box (non-modal) — same layout as modal content but for embedding in pages
export const CreatePostBox: React.FC<{
	userName?: string;
	userImage?: string;
	onPost?: (content: string) => void;
}> = ({ userName = "Jamie Hilton", userImage = "👤", onPost }) => {
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
				<span className="text-2xl">{userImage}</span>
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
					className="w-full border border-[#BBBBBB] rounded-[10px] px-4 py-3 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none text-gray-700"
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
					className="px-6 py-2 bg-[#F0BA43] text-white font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Post
				</button>
			</div>
		</div>
	);
};
