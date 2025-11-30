import React from "react";
import Image from "next/image";

type BlogItem = {
	imgSrc: string;
	title: string;
	text: string;
	owner: string;
	date: string;
};

export const RecentBlogCard: React.FC<{ item: BlogItem }> = ({ item }) => {
	return (
		<article className="flex flex-col gap-4 w-full grow">
			<div className="w-full h-40 md:h-48 lg:h-[300px] overflow-hidden rounded-[10px] relative">
				<Image
					src={item.imgSrc}
					alt={item.title}
					fill
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					className="object-cover rounded-[10px]"
				/>
			</div>

			<div className="flex flex-col grow">
				<h3 className="md:text-xl text-base font-semibold text-text-dark mb-2 leading-6">
					{item.title}
				</h3>

				<p className="text-base text-text-gray mb-3 line-clamp-3 grow">
					{item.text}
				</p>

				<div className="flex items-center gap-2 text-text-gray text-sm">
					<div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
					</div>
					<div>
						<p className="text-[12px]">
							By {item.owner} / {item.date}
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};
