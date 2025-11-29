'use client';

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

export const RelatedTopics = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-6">Related Topics</h3>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-300">
                    <div className="col-span-6">
                        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Topics</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Reply</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">View</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">Activity</p>
                    </div>
                </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
                {relatedTopics.map(topic => (
                    <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="grid grid-cols-12 gap-4 items-start">
                            <div className="col-span-6">
                                <p className="text-sm font-semibold text-gray-900 mb-2 leading-relaxed cursor-pointer hover:text-yellow-600 transition-colors">
                                    {topic.title}
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {topic.description}
                                </p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm font-semibold text-gray-900 text-center">{topic.replies}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-sm font-semibold text-gray-900 text-center">{topic.views}</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-xs text-gray-600 text-center">{topic.activity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedTopics;
