'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import RelatedTopics from './RelatedTopics';

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

interface FeedDetailProps {
    post: FeedPost;
    onBack?: () => void;
}

export const FeedDetail: React.FC<FeedDetailProps> = ({ post, onBack }) => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [showAllImages, setShowAllImages] = React.useState(false);

    // Related topics data
    const relatedTopics = [
        {
            id: '1',
            title: 'Are retailers looking long-term prices again, or still shopping around batch by batch?',
            description: 'With market prices continuing to fluctuate, many retailers are rethinking their purchasing strategies. Some dispensaries are returning to long-term supply contracts to stabilize costs and ensure consistency.',
            replies: 12,
            views: 20,
            activity: 'Sep 2025',
        },
        {
            id: '2',
            title: 'Are smaller shops still prioritizing terp profile variety or just chasing lowest per-lb cost?',
            description: 'In today\'s competitive market, smaller cannabis cultivators face tough choices — should they focus on maintaining unique terpene profiles and strain diversity, or cut costs to compete with large-scale producers?',
            replies: 12,
            views: 20,
            activity: 'Sep 2025',
        },
        {
            id: '3',
            title: 'How are dispensaries managing overstock this season? Are flash sales or bundles working?',
            description: 'Some are experimenting with flash sales, bundle offers, or BOGO deals to move inventory faster. Others are relying on wholesale partnerships, loyalty programs, or discount rotations to stay steady.',
            replies: 12,
            views: 20,
            activity: 'Sep 2025',
        },
    ];

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const displayedImages = showAllImages ? post.images : post.images?.slice(0, 1);
    const hasMoreImages = (post.images?.length || 0) > 1;

    return (
        <div className="space-y-6">
            {/* Back Header */}
            <div className="flex items-center gap-2 mb-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Your Feed</span>
                </button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Post Detail - Left/Center */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {/* Post Header */}
                        <div className="p-4 border-b border-gray-200">
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{post.author.avatar}</span>
                                    <div>
                                        <p className="font-medium text-gray-900">{post.author.name}</p>
                                        <p className="text-xs text-gray-500">{post.timestamp}</p>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">{post.content}</p>
                        </div>

                        {/* Post Images */}
                        {post.images && post.images.length > 0 && (
                            <div className="bg-gray-100">
                                {displayedImages?.map((image, index) => (
                                    <div key={index} className="relative overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Post image ${index + 1}`}
                                            className="w-full h-80 object-cover"
                                        />
                                    </div>
                                ))}

                                {/* View All Images Button */}
                                {hasMoreImages && !showAllImages && (
                                    <div className="relative">
                                        <div
                                            className="w-full h-80 bg-gray-300 opacity-70 flex items-center justify-center cursor-pointer"
                                            onClick={() => setShowAllImages(true)}
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
                                        onClick={() => setShowAllImages(false)}
                                        className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium transition-colors"
                                    >
                                        Hide images
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Post Stats */}
                        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
                            <span>❤️ {post.likes}</span>
                            <span>💬 {post.comments?.length || 0} Comments</span>
                        </div>

                        {/* Post Actions */}
                        <div className="px-4 py-3 flex items-center justify-between">
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${isLiked
                                    ? 'bg-yellow-100 text-yellow-600'
                                    : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                <span className="text-lg">👍</span>
                                <span className="text-sm font-medium">Like</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors">
                                <span className="text-lg">🔔</span>
                                <span className="text-sm font-medium">Follow</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors">
                                <span className="text-lg">🔗</span>
                                <span className="text-sm font-medium">Share</span>
                            </button>
                        </div>

                        {/* Comment Input */}
                        <div className="px-4 py-3 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">👤</span>
                                <input
                                    type="text"
                                    placeholder="What are your thoughts?"
                                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
                                />
                            </div>
                        </div>

                        {/* Comments Section */}
                        {post.comments && post.comments.length > 0 && (
                            <div className="px-4 py-4 border-t border-gray-200">
                                <p className="text-sm font-semibold text-gray-900 mb-3">Comments</p>
                                <div className="space-y-4">
                                    {post.comments.map(comment => (
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
                                    <button className="w-full mt-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                                        View more Comments
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar - Right */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sticky top-4">
                        <h3 className="font-semibold text-gray-900 mb-4">Related Topics</h3>
                        <div className="space-y-3">
                            {[
                                {
                                    title: 'Are retailers looking long-term prices again?',
                                    replies: 12,
                                    views: 20,
                                },
                                {
                                    title: 'Are smaller shops prioritizing variety?',
                                    replies: 12,
                                    views: 20,
                                },
                                {
                                    title: 'How are dispensaries managing overstock?',
                                    replies: 12,
                                    views: 20,
                                },
                            ].map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="pb-3 border-b border-gray-200 last:border-b-0 last:pb-0 cursor-pointer hover:text-yellow-600 transition-colors"
                                >
                                    <p className="text-xs font-medium text-gray-900 leading-relaxed hover:text-yellow-600">
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
