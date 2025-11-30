import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestNews() {
	const LatestNews = [
		{
			imgSrc: "/images/LatestNews/Latest News & Events.png",
			text: "Sourcing Premium THCA Flower: Behind the Scenes with Top Growers.",
			date: "November 7, 2025",
		},
		{
			imgSrc: "/images/LatestNews/Latest News & Events (2).png",
			text: "Automate Your Cannabis Business with Passion Farms, Texas.",
			date: "October 16, 2025",
		},
		{
			imgSrc: "/images/LatestNews/Latest News & Events (3).png",
			text: "Can cannabis users own guns? The Supreme Court is to decide | PF",
			date: "October 17, 2025",
		},
		{
			imgSrc: "/images/LatestNews/Latest News & Events (4).png",
			text: "THCA vs THC Edibles: The Real Difference Explained",
			date: "October 20, 2025",
		},
	];
	return (
		<section className="md:py-8 pt-4.5 flex flex-col gap-2.5 ">
			<div className="flex flex-row justify-between ">
				<div className="flex flex-col gap-2.5">
					<h2 className="font-semibold text-base sm:text-[32px] tracking-tight text-text-dark leading-4 sm:leading-9">
						Latest News & Events
					</h2>
					<p className="text-[#888888] leading-5 sm:leading-9 text-xs sm:text-base">
						From our blog, forum
					</p>
				</div>
				<div className="flex-row hidden sm:flex gap-7.5">
					<ChevronLeft className="border border-[#bbbb] size-6 rounded-md" />
					<ChevronRight className="border border-[#bbbb] size-6 rounded-md" />
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-4.5">
				{LatestNews.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-[23px] w-full"
					>
						<img
							src={item.imgSrc}
							alt="Latest News"
							className="w-full h-auto object-cover rounded-[10px]"
						/>
						<div className="flex flex-col justify-center grow">
							<p className="text-[14px] sm:text-[17px] text-text-dark grow leading-6">
								{item.text}
							</p>
							<p className="text-text-gray text-[14px] sm:text-base mb-2 leading-5 sm:leading-9">
								{item.date}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
