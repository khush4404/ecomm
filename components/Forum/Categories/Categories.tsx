import React from "react";
import { House, MessageSquare, Calendar1, BookOpen, Users, Plus } from "lucide-react";

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
	const tabs: { key: string; label: string; icon?: React.ReactNode }[] = [
		{ key: "explore", label: "Explore", icon: <House /> },
		{ key: "feed", label: "Feed", icon: <MessageSquare /> },
		{ key: "events", label: "Events", icon: <Calendar1 /> },
		{ key: "favorites", label: "Favorites", icon: <BookOpen /> },
	];

	return (
		<nav className="flex flex-col gap-3 p-5 lg:p-0">
			<div className="bg-white lg:rounded-[10px] lg:border lg:border-[#bbbbbb] p-3">
				<h1 className="lg:block hidden leading-9 text-text-dark text-base font-semibold pb-[5px]">Categories</h1>
				<ul className="flex flex-col gap-2">
					{tabs.map((t) => {
						const isActive = activeTab === t.key;
						return (
							<li key={t.key}>
								<button
									onClick={() => onTabChange(t.key)}
									className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-[10px] transition-colors duration-150 font-semibold leading-9 ${isActive
										? "bg-[#F0BA43] text-white font-medium"
										: "text-gray-700 hover:bg-gray-100"
										}`}
								>
									<span className={`text-lg ${isActive
										? "text-white font-medium"
										: "text-yellow-btn hover:bg-gray-text"
										}`} aria-hidden>
										{t.icon}
									</span>
									<span>{t.label}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</div>

			<button
				onClick={onCreateGroup}
				className="w-full flex items-center justify-between gap-3 px-5 py-2 rounded-md bg-white border border-[#BBBBBB] hover:bg-gray-50"
			>
				<div className="flex items-center justify-between w-full leading-9">
					<div className="flex gap-3 items-center font-semibold text-base">
						<span className={`text-lg text-yellow-btn hover:bg-gray-text`} aria-hidden>
							<Users />
						</span>
						<span className="leading-9">Create a group</span>
					</div>
					<span className="text-xl"><Plus /></span>
				</div>
			</button>
		</nav>
	);
};

export default Categories;
