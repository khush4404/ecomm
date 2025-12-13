import React from "react";

const stats = [
	{
		number: "3x",
		label: "Growth",
		description:
			"Grow faster with verified buyers, real demand, and access to multi-state suppliers that accelerate your operation's speed, output, and profitability.",
	},
	{
		number: "7x",
		label: "Product Expansion",
		description:
			"Expand your product mix with premium THCA, vapes, edibles, concentrates, pre-rolls, and limited drops sourced from trusted cultivators across the country.",
	},
	{
		number: "10x",
		label: "Qualified Leads",
		description:
			"Our community and marketplace generate high intent, verified leads that convert into predictable revenue, long term partnerships, and sustainable growth.",
	},
];

export const StatsCard = () => {
	return (
		<div className="w-full flex justify-center py-10 md:px-4">
			<div className="bg-[#FFF6E5] w-full max-w-7xl rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
				<div className="flex flex-col">
					{stats.map((stat, index) => (
						<div key={index} className="group">
							<div className="flex flex-col md:flex-row md:items-center py-8 md:py-11 gap-6 md:gap-12">
								{/* Left Column: Stats */}
								<div className="flex flex-col w-full md:w-32 shrink-0">
									<span className="text-[64px] text-center md:text-start md:text-5xl font-bold text-[#1D1D1D] tracking-tight">
										{stat.number}
									</span>
									<span className="text-[10px] text-center md:text-start md:text-[11px] font-bold uppercase tracking-widest text-[#1D1D1D] mt-1">
										{stat.label}
									</span>
								</div>

								{/* Right Column: Description */}
								<div className="flex-1">
									<p className="text-sm md:text-xl text-[#1D1D1D] leading-relaxed font-medium">
										{stat.description}
									</p>
								</div>
							</div>

							{/* Dashed Separator (hide for last item) */}
							{index !== stats.length - 1 && (
								<div className="w-full border-b border-dashed border-gray-300 my-2" />
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
