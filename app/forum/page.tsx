"use client";

import { useState } from "react";
import { Categories } from "@/components/Forum/Categories/Categories";
import { Explore } from "@/components/Forum/Explore/Explore";
import { Feed } from "@/components/Forum/Feed/Feed";
import { Events } from "@/components/Forum/Events/Events";
import { Favorites } from "@/components/Forum/Favorites/Favorites";
import { CreateGroup } from "@/components/Forum/CreateGroup/CreateGroup";
import { FollowedList } from "@/components/Forum/FollowedList/FollowedList";

export default function ForumPage() {
  const [activeTab, setActiveTab] = useState<string>("explore");

  const contentComponents: Record<string, React.ReactNode> = {
    explore: <Explore />,
    feed: <Feed />,
    events: <Events />,
    favorites: <Favorites />,
    createGroup: <CreateGroup />,
  };

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1D1D1D] mb-6">Forum</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar (Categories + followed groups) */}
          <aside className="lg:col-span-1">
            <Categories activeTab={activeTab} onTabChange={setActiveTab} />
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
    </main>
  );
}
