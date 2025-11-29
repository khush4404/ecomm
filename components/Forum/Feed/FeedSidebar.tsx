'use client';

import React from 'react';

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

export const FeedSidebar: React.FC<FeedSidebarProps> = ({ trendingPosts = [] }) => {
    return (
        <div className="space-y-4">
            {/* Good Morning Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Good Morning</h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    Welcome to Passion Farms Community. Connect, share, and engage with our community and build relationships.
                </p>
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                    Please log in if you are already a member or sign up for an account.
                </p>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-full transition-colors mb-3 text-sm">
                    Join the community
                </button>
                <p className="text-xs text-gray-600 text-center">
                    Already a member?
                </p>
            </div>

            {/* Trending Posts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🔥</span>
                    <h3 className="font-semibold text-gray-900 text-sm">Trending posts</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4">Most popular this week</p>

                <div className="space-y-3">
                    {trendingPosts.map((post) => (
                        <div
                            key={post.id}
                            className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50 p-2 -mx-2 px-2 rounded transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="text-xl shrink-0">{post.author.avatar}</span>
                                <p className="text-xs font-medium text-gray-900 truncate">
                                    {post.author.name}
                                </p>
                            </div>
                            <span className="text-xs font-semibold text-gray-600 ml-2 shrink-0">
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
