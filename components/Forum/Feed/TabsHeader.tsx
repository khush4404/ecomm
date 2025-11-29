"use client";

import React from "react";

interface TabsHeaderProps {
	tabs: { key: string; label: string }[];
	activeTab: string;
	onTabChange: (tab: string) => void;
}

export const TabsHeader: React.FC<TabsHeaderProps> = ({
	tabs,
	activeTab,
	onTabChange,
}) => {
	return (
		<div className="flex items-center gap-3 mb-6">
			{tabs.map((tab) => (
				<button
					key={tab.key}
					onClick={() => onTabChange(tab.key)}
					className={`px-6 py-2 rounded-full font-medium transition-all ${
						activeTab === tab.key
							? "bg-yellow-400 text-black"
							: "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
					}`}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
};

export default TabsHeader;
