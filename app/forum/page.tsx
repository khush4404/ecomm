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

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState<string>("explore");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false);

  const contentComponents: Record<string, React.ReactNode> = {
    explore: <Explore />,
    feed: <Feed />,
    events: <Events />,
    favorites: <Favorites />,
    createGroup: <CreateGroup isOpen={true} onClose={() => setActiveTab("explore")} />,
  };

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className="flex-1 border border-gray-200 rounded-l-full px-4 py-2 outline-none cursor-pointer hover:bg-gray-50"
              onClick={() => setIsCreatePostOpen(true)}
              readOnly
            />

            <button
              onClick={() => setIsCreatePostOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-r-full"
            >
              Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar (Categories + followed groups) */}
          <aside className="lg:col-span-1">
            <Categories
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onCreateGroup={() => setActiveTab("createGroup")}
            />
            <div className="mt-4">
              <FollowedList />
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-3">
            {contentComponents[activeTab] ?? <Explore />}
          </section>
        </div>
      </div>

      {/* Create Post Modal */}
      <CreatePost
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </main>
  );
}
