"use client";
import React from "react";
import Image from "next/image";

type Group = {
	id: string;
	name: string;
	avatar: string;
	members: string;
};

const sampleGroups: Group[] = [
	{
		id: "g1",
		name: "Cannabis home",
		avatar: "/public/images/followlist/followlist1.jpg",
		members: "2K",
	},
	{
		id: "g2",
		name: "Marijuana hood",
		avatar: "/public/images/followlist/followlist2.png",
		members: "15K",
	},
	{
		id: "g3",
		name: "Flower Valley",
		avatar: "/public/images/followlist/followlist3.jpg",
		members: "25k",
	},
	{
		id: "g4",
		name: "Smoking ducks",
		avatar: "/public/images/followlist/followlist5.jpg",
		members: "128k",
	},
	{
		id: "g5",
		name: "Cannabis home",
		avatar: "/public/images/followlist/followlist4.png",
		members: "2K",
	},
	{
		id: "g6",
		name: "Marijuana hood",
		avatar: "/public/images/followlist/followlist5.jpg",
		members: "15K",
	},
];

export const FollowedList: React.FC<{ groups?: Group[] }> = ({
	groups = sampleGroups,
}) => {
	return (
		<>
			<h3 className="text-base font-semibold text-[#1D1D1D] mb-3">
				Followed Groups List
			</h3>
			<div className="bg-white rounded-[10px] border border-[#BBBBBB] p-4">
				<div className="flex justify-between pb-3">
					<h2>Group name</h2>
					<p>Members</p>
				</div>
				<ul className="space-y-3">
					{groups.map((g) => (
						<li
							key={g.id}
							className="flex items-center justify-between"
						>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 relative rounded-full overflow-hidden">
									<Image
										src={g.avatar}
										alt={g.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="min-w-0">
									<div className="text-base font-medium text-[#878787] truncate">
										{g.name}
									</div>
								</div>
							</div>

							<div className="text-base text-[#1D1D1D] ml-4">
								{g.members}
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default FollowedList;
