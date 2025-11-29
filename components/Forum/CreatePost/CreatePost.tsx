'use client';

import React, { useState } from 'react';

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
    userName?: string;
    userAvatar?: string;
}

export const CreatePost: React.FC<CreatePostModalProps> = ({
    isOpen,
    onClose,
    userName = 'Jamie Hilton',
    userAvatar = '👤'
}) => {
    const [postContent, setPostContent] = useState('');

    const handleSubmit = () => {
        if (postContent.trim()) {
            console.log('Post created:', postContent);
            setPostContent('');
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
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto z-50 bg-white rounded-lg shadow-xl p-6">
                {/* Header with User Info */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <span className="text-3xl">{userAvatar}</span>
                    <span className="text-sm font-medium text-gray-700">{userName}</span>
                </div>

                {/* Search/Post Area */}
                <div className="mb-6">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search or ask questions"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                        />
                        <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    {/* Post Content Textarea */}
                    <textarea
                        placeholder="What is this about?"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        rows={6}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none text-gray-700"
                    />
                </div>

                {/* Formatting Toolbar */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                    <button
                        title="Bold"
                        className="text-gray-600 hover:text-gray-900 font-semibold text-lg"
                    >
                        B
                    </button>
                    <button
                        title="Italic"
                        className="text-gray-600 hover:text-gray-900 font-semibold italic text-lg"
                    >
                        I
                    </button>
                    <button
                        title="Underline"
                        className="text-gray-600 hover:text-gray-900 font-semibold underline text-lg"
                    >
                        U
                    </button>
                    <button
                        title="Link"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                        </svg>
                    </button>
                    <button
                        title="Image"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </button>
                    <button
                        title="Emoji"
                        className="text-gray-600 hover:text-gray-900 text-lg"
                    >
                        😊
                    </button>
                    <button
                        title="Mention"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        @
                    </button>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={!postContent.trim()}
                        className="px-8 py-2 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Post
                    </button>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
