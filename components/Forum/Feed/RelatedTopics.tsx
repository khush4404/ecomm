"use client";

const relatedTopics = [
	{
		id: "1",
		title: "Are retailers looking long-term prices again, or still shopping around batch by batch?",
		description:
			"With market prices continuing to fluctuate, many retailers are rethinking their purchasing strategies. Some dispensaries are returning to long-term supply contracts to stabilize costs and ensure consistency.",
		replies: 12,
		views: 20,
		activity: "Sep 2025",
	},
	{
		id: "2",
		title: "Are smaller shops still prioritizing terp profile variety or just chasing lowest per-lb cost?",
		description:
			"In today's competitive market, smaller cannabis cultivators face tough choices — should they focus on maintaining unique terpene profiles and strain diversity, or cut costs to compete with large-scale producers?",
		replies: 12,
		views: 20,
		activity: "Sep 2025",
	},
	{
		id: "3",
		title: "How are dispensaries managing overstock this season? Are flash sales or bundles working?",
		description:
			"Some are experimenting with flash sales, bundle offers, or BOGO deals to move inventory faster. Others are relying on wholesale partnerships, loyalty programs, or discount rotations to stay steady.",
		replies: 12,
		views: 20,
		activity: "Sep 2025",
	},
];

export const RelatedTopics = () => {
	return (
		<div className="bg-white">
			<div className="md:py-6 p-0 md:border-b border-0 border-[#BBBBBB]">
				<h3 className="font-semibold text-xl text-[#1D1D1D] mb-6">
					Related Topics
				</h3>

				{/* Table Header */}
				<div className="grid md:grid-cols-12 gap-4 pb-4">
					<div className="col-span-9">
						<p className="text-xl font-semibold text-text-dark uppercase tracking-wider">
							Topics
						</p>
					</div>
					<div className="col-span-1 md:block hidden">
						<p className="text-xs font-semibold text-text-dark uppercase tracking-wider text-center">
							Reply
						</p>
					</div>
					<div className="col-span-1 md:block hidden">
						<p className="text-xs font-semibold text-text-dark uppercase tracking-wider text-center">
							View
						</p>
					</div>
					<div className="col-span-1 md:block hidden">
						<p className="text-xs font-semibold text-text-dark uppercase tracking-wider text-center">
							Activity
						</p>
					</div>
				</div>
			</div>

			{/* Table Body */}
			<div className="divide-y divide-gray-200">
				{relatedTopics.map((topic) => (
					<div
						key={topic.id}
						className="md:py-6 p-0 hover:bg-gray-50 transition-colors"
					>
						<div className="grid md:grid-cols-12 grid-cols-3 md:gap-4 items-start">
							<div className="col-span-9 sm:mt-0 mt-6">
								<p className="text-base font-semibold text-[#1D1D1D] mb-2 leading-relaxed cursor-pointer hover:text-yellow-600 transition-colors">
									{topic.title}
								</p>
								<p className="text-base text-text-gray leading-relaxed">
									{topic.description}
								</p>
							</div>
							<div className="col-span-1 grid-start sm:my-0 my-6">
								<p className="text-sm  text-[#1D1D1D]  text-start sm:text-center">
									<p className="md:hidden block text-base text-[#1D1D1D]">
										replay
									</p>
									{topic.replies}
								</p>
							</div>
							<div className="col-span-1 sm:my-0 my-6">
								<p className="text-sm  text-[#1D1D1D] text-start sm:text-center">
									<p className="md:hidden block text-base text-[#1D1D1D]">
										view
									</p>
									{topic.views}
								</p>
							</div>
							<div className="col-span-1 sm:my-0 my-6">
								<p className="text-sm text-[#1D1D1D] text-start sm:text-center">
									<p className="md:hidden block text-base text-[#1D1D1D]">
										activity
									</p>
									{topic.activity}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelatedTopics;
