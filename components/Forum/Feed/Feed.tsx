
'use client';

import React, { useState } from 'react';
import { FeedItem } from './FeedItem';
import { FeedSidebar } from './FeedSidebar';
import { FeedDetail } from './FeedDetail';
import { TabsHeader } from './TabsHeader';

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

export const Feed = () => {
    const [activeTab, setActiveTab] = useState('latest');
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

    // Mock feed posts data
    const feedPosts: FeedPost[] = [
        {
            id: '1',
            author: {
                id: '1',
                name: 'Jamie Hilton',
                avatar: '👤',
            },
            title: 'Gamification: User levels based on activities and engagement',
            content: 'We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle monthly launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the...',
            likes: 200,
            shares: 10,
            timestamp: '2 hours ago',
            isLiked: false,
            comments: [
                {
                    id: '1',
                    author: {
                        name: 'David Mayor',
                        avatar: '👨',
                    },
                    content: 'Many cultivators are noticing changes in what buyers value most — aroma, visual appearance, or overall scent. Some dispensaries are returning to long-term certificate stability trends.',
                    likes: 5,
                    timestamp: '1 hour ago',
                },
                {
                    id: '2',
                    author: {
                        name: 'Sarah',
                        avatar: '👩',
                    },
                    content: 'Many cultivators are noticing changes in what buyers value most — aroma, visual appearance, or overall scent. Some dispensaries are returning to long-term certificate stability trends.',
                    likes: 2,
                    timestamp: '45 min ago',
                },
            ],
        },
        {
            id: '2',
            author: {
                id: '2',
                name: 'Jamie Hilton',
                avatar: '👤',
            },
            title: 'Gamification: User levels based on activities and engagement',
            content: 'We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle monthly launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the...',
            images: [
                'https://images.unsplash.com/photo-1490099019820-a748c6a3e739?w=600&h=400&fit=crop',
            ],
            likes: 300,
            shares: 10,
            timestamp: '1 hour ago',
            isLiked: false,
            comments: [
                {
                    id: '3',
                    author: {
                        name: 'Morgan Robinson',
                        avatar: '👩',
                    },
                    content: 'This is a great point about engagement. The key is to balance rewards with meaningful interactions. I\'ve seen similar approaches work well in other communities.',
                    likes: 8,
                    timestamp: '50 min ago',
                },
                {
                    id: '4',
                    author: {
                        name: 'Zachary Hughes',
                        avatar: '👨',
                    },
                    content: 'How would you implement this without making it too complicated? Users might get overwhelmed with too many levels.',
                    likes: 3,
                    timestamp: '30 min ago',
                },
                {
                    id: '5',
                    author: {
                        name: 'Juliette Cordier',
                        avatar: '👩',
                    },
                    content: 'I agree! Simple and straightforward gamification is always better. Users appreciate clarity and tangible rewards.',
                    likes: 6,
                    timestamp: '20 min ago',
                },
            ],
        },
        {
            id: '3',
            author: {
                id: '3',
                name: 'Jamie Hilton',
                avatar: '👤',
            },
            title: 'Gamification: User levels based on activities and engagement',
            content: 'We need a gamification mechanism inside the community to increase user engagement. Simple gamification, like what Circle monthly launched, is sufficient for us, and from a business perspective, it can be another key feature. As I checked, the...',
            likes: 450,
            shares: 15,
            timestamp: '30 min ago',
            isLiked: false,
            comments: [
                {
                    id: '6',
                    author: {
                        name: 'David Meyer',
                        avatar: '👨',
                    },
                    content: 'Great insights! I\'ve been thinking about similar features for our platform. Do you have any data on user retention with gamification?',
                    likes: 12,
                    timestamp: '25 min ago',
                },
                {
                    id: '7',
                    author: {
                        name: 'Kelly Foster',
                        avatar: '👩',
                    },
                    content: 'The leaderboard concept could really drive healthy competition. Just need to be careful not to create toxicity.',
                    likes: 7,
                    timestamp: '15 min ago',
                },
            ],
        },
    ];

    // Mock trending posts
    const trendingPosts = [
        { id: '1', author: { name: 'Trun van Wijk', avatar: '👨' }, views: 170 },
        { id: '2', author: { name: 'Morgan Robinson', avatar: '👩' }, views: 128 },
        { id: '3', author: { name: 'Jimin Winglyen', avatar: '👨' }, views: 89 },
        { id: '4', author: { name: 'Zachary Hughes', avatar: '👨' }, views: 75 },
        { id: '5', author: { name: 'Adriane Cordier', avatar: '👩' }, views: 72 },
        { id: '6', author: { name: 'Luca Cook', avatar: '👨' }, views: 54 },
        { id: '7', author: { name: 'David Mayor', avatar: '👨' }, views: 47 },
        { id: '8', author: { name: 'Kelly Foster', avatar: '👩' }, views: 42 },
        { id: '9', author: { name: 'Sharon Lloyd', avatar: '👩' }, views: 15 },
        { id: '10', author: { name: 'Rachela Moser', avatar: '👩' }, views: 10 },
    ];

    const tabs = [
        { key: 'latest', label: 'Latest' },
        { key: 'recentActivity', label: 'Recent Activity' },
    ];

    const handleLike = (postId: string) => {
        console.log('Liked post:', postId);
    };

    const handleShowComments = (postId: string) => {
        setSelectedPostId(postId);
    };

    // Get the selected post data
    const selectedPost = feedPosts.find(p => p.id === selectedPostId);

    // If a post is selected, show the detail view
    if (selectedPostId && selectedPost) {
        return (
            <FeedDetail
                post={selectedPost}
                onBack={() => setSelectedPostId(null)}
            />
        );
    }

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <TabsHeader
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Feed Posts - Left/Center */}
                <div className="lg:col-span-2 space-y-4">
                    {feedPosts.map(post => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPostId(post.id)}
                            className="cursor-pointer transition-transform hover:shadow-md"
                        >
                            <FeedItem
                                post={post}
                                onLike={handleLike}
                                onShowComments={handleShowComments}
                                showComments={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Sidebar - Right */}
                <div className="lg:col-span-1">
                    <FeedSidebar trendingPosts={trendingPosts} />
                </div>
            </div>
        </div>
    );
};;

export default Feed;
