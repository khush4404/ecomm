"use client";

import { useState } from "react";
import { Categories } from "@/components/Forum/Categories/Categories";
import { Explore } from "@/components/Forum/Explore/Explore";
import { Feed } from "@/components/Forum/Feed/Feed";
import { Events } from "@/components/Forum/Events/Events";
import { Favorites } from "@/components/Forum/Favorites/Favorites";
import { CreateGroup } from "@/components/Forum/CreateGroup/CreateGroup";
import { CreatePost } from "@/components/Forum/CreatePost/CreatePost";
import { FollowedList } from "@/components/Forum/FollowedList/FollowedList";
import { Menu, X } from "lucide-react";

export default function ForumPage() {
	const [activeTab, setActiveTab] = useState<string>("explore");
	const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const contentComponents: Record<string, React.ReactNode> = {
		explore: <Explore />,
		feed: <Feed />,
		events: <Events />,
		favorites: <Favorites />,
		followed: <FollowedList />,
		createGroup: (
			<CreateGroup
				isOpen={true}
				onClose={() => setActiveTab("explore")}
			/>
		),
	};

	return (
		<main className="min-h-screen py-12 relative">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
				{/* Menu button for mobile - Top Right */}
				<button
					onClick={() => setIsSidebarOpen(true)}
					className="lg:hidden absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-[#BBBBBB] rounded-md hover:bg-gray-50 w-fit"
				>
					<Menu size={20} />
				</button>

				{["explore", "feed", "events", "favorites"].includes(activeTab) && (
					<div className="w-full flex flex-col items-center my-10 px-4">
						<h1 className="text-2xl font-semibold text-center">
							Welcome to Passion farms community
						</h1>
						<p className="text-sm text-gray-500 mt-1 text-center">
							Let us know how we can help.
						</p>

						{/* Input + Button */}
						<div className="mt-6 w-full max-w-2xl flex items-center">
							<input
								type="text"
								placeholder="Write a post"
								className="flex-1 border border-[#BBBBBB] rounded-l-full px-4 py-2 outline-none cursor-pointer hover:bg-gray-50"
								onClick={() => setIsCreatePostOpen(true)}
								readOnly
							/>

							<button
								onClick={() => setIsCreatePostOpen(true)}
								className="bg-[#F0BA43] hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-r-full"
							>
								Post
							</button>
						</div>
					</div>
				)}

				{/* Mobile: show categories + followed list in main flow below header (visible below lg) */}
				{/* <div className="lg:hidden mb-6 space-y-4">
					<Categories
						activeTab={activeTab}
						onTabChange={setActiveTab}
						onCreateGroup={() => setActiveTab("createGroup")}
					/>
					<button
						onClick={() => setActiveTab("followed")}
						className="w-full flex items-center justify-between gap-3 px-5 py-3 rounded-md bg-white border border-[#BBBBBB] hover:bg-gray-50"
					>
						<span className="font-semibold">Followed Groups List</span>
						<span className="text-sm text-gray-500">View</span>
					</button>
				</div> */}

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

					{/* Left sidebar (Categories + followed groups) - Hidden on mobile */}
					<aside className="hidden lg:flex lg:col-span-1 flex-col gap-7.5">
						<Categories
							activeTab={activeTab}
							onTabChange={setActiveTab}
							onCreateGroup={() => setActiveTab("createGroup")}
						/>
						<FollowedList />
					</aside>

					{/* Main content */}
					<section className="lg:col-span-3">
						{contentComponents[activeTab] ?? <Explore />}
					</section>
				</div>

				{/* Mobile Sidebar Modal */}
				{isSidebarOpen && (
					<div className="absolute z-50 inset-0 lg:hidden h-auto">
						{/* Backdrop */}
						<div
							className="absolute inset-0 bg-black/50"
							onClick={() => setIsSidebarOpen(false)}
						/>

						{/* Sidebar - Opening from right */}
						<div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-lg overflow-y-auto">
							<div className="p-4 flex items-center justify-between border-b border-[#BBBBBB]">
								<h2 className="text-lg font-semibold">Categories</h2>
								<button
									onClick={() => setIsSidebarOpen(false)}
									className="p-1 z-50 hover:bg-gray-100 rounded"
								>
									<X size={24} />
								</button>
							</div>

							<div className="flex flex-col lg:gap-7.5">
								<Categories
									activeTab={activeTab}
									onTabChange={(tab) => {
										setActiveTab(tab);
										setIsSidebarOpen(false);
									}}
									onCreateGroup={() => {
										setActiveTab("createGroup");
										setIsSidebarOpen(false);
									}}
								/>
								{/* Mobile drawer: show only header for Followed Groups - navigate to main content on click */}
								<button
									onClick={() => {
										setActiveTab("followed");
										setIsSidebarOpen(false);
									}}
									className="w-full text-left flex items-center justify-between gap-3 px-5 py-3 rounded-md bg-white border border-[#BBBBBB] hover:bg-gray-50"
								>
									<span className="font-semibold">Followed Groups List</span>
									<span className="text-sm text-gray-500">View</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Create Post Modal */}
			<CreatePost
				isOpen={isCreatePostOpen}
				onClose={() => setIsCreatePostOpen(false)}
			/>
		</main >
	);
}
