'use client';

import React from 'react';

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

export const FeedItem: React.FC<FeedItemProps> = ({ post, onLike, onShowComments, showComments = false }) => {
    const [isLiked, setIsLiked] = React.useState(post.isLiked || false);
    const [showAllImages, setShowAllImages] = React.useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        onLike?.(post.id);
    };

    const handleFollowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onShowComments?.(post.id);
    };

    const handleLikeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleLike();
    };

    const handleInputClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleImageToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowAllImages(true);
    };

    const handleHideImages = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowAllImages(false);
    };

    const displayedImages = showAllImages ? post.images : post.images?.slice(0, 1);
    const hasMoreImages = (post.images?.length || 0) > 1;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4">
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
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}

                    {/* View All Images Button */}
                    {hasMoreImages && !showAllImages && (
                        <div className="relative">
                            <div className="w-full h-64 bg-gray-300 opacity-70 flex items-center justify-center cursor-pointer"
                                onClick={handleImageToggle}>
                                <span className="text-white font-semibold text-lg">
                                    +{post.images.length - 1} more
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Close All Images Button */}
                    {showAllImages && hasMoreImages && (
                        <button
                            onClick={handleHideImages}
                            className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium transition-colors"
                        >
                            Hide images
                        </button>
                    )}
                </div>
            )}

            {/* Post Stats */}
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between text-xs text-gray-600">
                <span>😊 {post.likes}</span>
                <span>💬 {post.comments?.length || 0} Comments</span>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3 flex items-center justify-between">
                <button
                    onClick={handleLikeClick}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${isLiked
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'hover:bg-gray-100 text-gray-700'
                        }`}
                >
                    <span className="text-lg">👍</span>
                    <span className="text-sm font-medium">Like</span>
                </button>
                <button
                    onClick={handleFollowClick}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors"
                >
                    <span className="text-lg">💬</span>
                    <span className="text-sm font-medium">Follow</span>
                </button>
                <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors">
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
                        onClick={handleInputClick}
                        className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                </div>
            </div>

            {/* Comments Section */}
            {showComments && post.comments && post.comments.length > 0 && (
                <div className="px-4 py-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Comments</p>
                    <div className="space-y-4">
                        {post.comments.slice(0, 2).map(comment => (
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
    );
};

export default FeedItem;
