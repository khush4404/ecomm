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
		avatar: "/images/followlist/followlist1.jpg",
		members: "2K",
	},
	{
		id: "g2",
		name: "Marijuana hood",
		avatar: "/images/followlist/followlist2.png",
		members: "15K",
	},
	{
		id: "g3",
		name: "Flower Valley",
		avatar: "/images/followlist/followlist3.jpg",
		members: "25k",
	},
	{
		id: "g4",
		name: "Smoking ducks",
		avatar: "/images/followlist/followlist5.jpg",
		members: "128k",
	},
	{
		id: "g5",
		name: "Cannabis home",
		avatar: "/images/followlist/followlist4.png",
		members: "2K",
	},
	{
		id: "g6",
		name: "Marijuana hood",
		avatar: "/images/followlist/followlist5.jpg",
		members: "15K",
	},
];

export const FollowedList: React.FC<{ groups?: Group[] }> = ({
	groups = sampleGroups,
}) => {
	return (
		<div className="flex flex-col gap-2.5 pt-2">
			<h3 className="text-base text-center md:text-start font-semibold text-[#1D1D1D] leading-9">
				Followed Groups List
			</h3>
			<div className="bg-white lg:rounded-[10px] lg:border lg:border-[#BBBBBB] lg:p-4">
				<div className="flex justify-between pb-3">
					<h2 className="text-[12px]">Group name</h2>
					<p className="text-[12px]">Members</p>
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
									<div className="text-base font-medium text-text-gray truncate">
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
		</div>
	);
};

export default FollowedList;
