import React from "react";

type Props = {
	activeTab: string;
	onTabChange: (tab: string) => void;
	onCreateGroup: () => void;
};

export const Categories: React.FC<Props> = ({
	activeTab,
	onTabChange,
	onCreateGroup,
}) => {
	const tabs: { key: string; label: string; icon?: string }[] = [
		{ key: "explore", label: "Explore", icon: "🔎" },
		{ key: "feed", label: "Feed", icon: "📰" },
		{ key: "events", label: "Events", icon: "📅" },
		{ key: "favorites", label: "Favorites", icon: "⭐" },
	];

	return (
		<nav className="flex flex-col gap-3">
			<div className="bg-white rounded-md shadow-sm p-3">
				<ul className="flex flex-col gap-1">
					{tabs.map((t) => {
						const isActive = activeTab === t.key;
						return (
							<li key={t.key}>
								<button
									onClick={() => onTabChange(t.key)}
									className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 ${
										isActive
											? "bg-[#F0BA43] text-white font-medium"
											: "text-gray-700 hover:bg-gray-100"
									}`}
								>
									<span className="text-lg" aria-hidden>
										{t.icon}
									</span>
									<span>{t.label}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="mt-3">
				<button
					onClick={onCreateGroup}
					className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50"
				>
					<div className="flex items-center gap-3">
						<span className="text-xl">➕</span>
						<span>Create a group</span>
					</div>
				</button>
			</div>
		</nav>
	);
};

export default Categories;
