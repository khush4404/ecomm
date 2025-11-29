import React from "react";
import Image from "next/image";
import Support from "@/components/common/Support";
import { RecentBlogCard } from "@/components/common/RecentBlogCard";
import { SocialIcons } from "@/components/common/SocialIcons";

type BlogPostContent = {
	title: string;
	subtitle: string;
	byline: string;
	source: string;
	introductionPara: string;
	featuredImage: string;
	img_1: string;
	img_2: string;
	bodyParagraphs: {
		text: string;
	}[];
	footerText: string;
	footerAuthor: string;
};

const blogPost: BlogPostContent = {
	featuredImage: "/images/blogs/blogdetail.png",
	title: "Most Rhode Island Marijuana Social Equity License Applicants Have Been Disqualified",
	subtitle: "The commission also adopted new rules for hemp products.",
	byline: "By Christopher Shea, Rhode Island Currant",
	source: "Rhodes Island Currant",
	introductionPara:
		"Only 38 percent of pre-applicants for a cannabis retail license reserved for those adversely affected by the war on drugs have qualified to submit a formal application, the Cannabis Control Commission announced Friday afternoon.",
	img_1: "/images/blogs/blogdetail-1.png",
	img_2: "/images/blogs/blogdetail-2.png",
	bodyParagraphs: [
		{
			text: "Of 94 requests to be considered for a social equity license, 36 met eligibility criteria after being screened. They were certified by the commission in a 2-0 vote Friday and now have until December 29 to submit their applications to go into a lottery. The commission will award six social equity licenses through that lottery.",
		},
		{
			text: "The vote was the first taken since the departure of Chairperson Kimberly Ahern, who stepped down from her $204,069-a-year post on October 21 to make a run for state attorney general in 2026.",
		},
		{
			text: "Ahern's usual seat between commissioners Layi Oduyingbo and Robert Jacquard sat empty as the two remaining members conducted business. In addition to voting to certify social equity applicants who passed the eligibility screening, the board formally adopted hemp regulations previously handled by another agency.",
		},
		{
			text: "Oduyingbo and Jacquard both thanked Ahern for doing the yeoman's work in getting them through the past two-and-a-half years worth of meetings, which included the establishment of the rules governing Rhode Island's recreational pot industry.",
		},
		{
			text: "The divide caused the General Assembly to request that the Cannabis Control Commission conduct a study of dosage limits, packaging standards, labeling requirements, licensing conditions, and other ways to ensure children don't accidentally consume the intoxicating drinks. The commission's recommendations are due to state lawmakers by March 1, 2026. The commission plans to hold listening sessions early next year as it shapes its study, Charon Rose, spokesperson for the commission, said Monday.",
		},
	],
	footerText: "This story was published by Passion Farms team",
	footerAuthor: "Marijuana Moment",
};

type BlogItem = {
	imgSrc: string;
	title: string;
	text: string;
	owner: string;
	date: string;
};

const data: BlogItem[] = [
	{
		imgSrc: "/images/blogs/blog1.png",
		title: "Netflix Documentary Shows How Psychedelics Help Military Veterans Heal Trauma",
		text: "Every year, the health and wellness landscape evolves dramatically. A new demand for non-psychoactive...",
		owner: "Ken",
		date: "October 27, 2025",
	},
	{
		imgSrc: "/images/blogs/blog2.png",
		title: "Sourcing Premium THCA Flower: Behind the Scenes with Top Growers",
		text: "Quality starts with genetics. Leading growers have access to specific strains bred for THCA levels between...",
		owner: "Ken",
		date: "October 26, 2025",
	},
];

export default function BlogDetailsPage() {
	return (
		<div className="container mx-auto px-4 py-8 flex flex-col gap-5 md:gap-14">
			<div className="bg-gray-200 h-[438px] w-full rounded-[10px]">
				<Image
					src={blogPost.featuredImage}
					alt={blogPost.title}
					width={1200}
					height={438}
					className="w-full h-full object-cover rounded-[10px]"
				/>
			</div>
			<div className="max-w-4xl mx-auto">
				<article>
					{/* Title */}
					<h1 className="text-xl md:text-4xl font-bold text-[#1D1D1D] md:mb-3 mb-2.5 leading-tight text-center">
						{blogPost.title}
					</h1>

					{/* Subtitle */}
					<p className="text-text-gray text-sm md:text-base  mb-5 md:mb-[30px] text-center">
						{blogPost.subtitle}
					</p>

					{/* Byline */}
					<div className="flex items-center gap-2 text-base md:text-2xl text-[#1D1D1D] md:mb-5 mb-2.5 ">
						<span className="font-semibold">{blogPost.byline}</span>
					</div>

					{/* Introduction paragraph */}
					<p className="text-base md:text-xl text-text-gray leading-relaxed md:mb-5 mb-2.5">
						{blogPost.introductionPara}
					</p>

					{/* Featured Image */}
					<div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden md:mb-5 mb-2.5">
						<Image
							src={blogPost.img_1}
							alt={blogPost.title}
							fill
							className="object-cover"
							sizes="(min-width: 1024px) 900px, 100vw"
						/>
					</div>

					{/* Body paragraphs with optional inline galleries */}
					<div className="space-y-6">
						{blogPost.bodyParagraphs.map((para, idx) => (
							<div key={idx}>
								<p className="text-base md:text-xl text-text-gray leading-relaxed">
									{para.text}
								</p>

								{/* Show img_2 after 2nd paragraph (idx === 1) */}
								{idx === 1 && (
									<div className="relative h-40 md:h-48 rounded-lg overflow-hidden mt-6">
										<Image
											src={blogPost.img_2}
											alt="inline-image"
											fill
											className="object-cover hover:scale-105 transition-transform"
											sizes="(min-width: 1024px) 900px, 100vw"
										/>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Footer attribution */}
					<div className="mt-8 ">
						<p className="italic text-[#1D1D1D] text-base md:text-2xl">
							<span className="font-semibold">
								{blogPost.footerText}
							</span>
						</p>
						<p className="text-[#1D1D1D] text-base md:text-2xl  mt-2 md:text-center text-start">
							{blogPost.footerAuthor} is made possible with
							support from readers. If you rely on our cannabis
							advocacy journalism to stay informed, please
							consider a monthly Patreon pledge.
						</p>
					</div>
				</article>
				<SocialIcons />
				<section className="py-6 lg:py-12">
					<div className="container mx-auto px-4">
						<h2 className="text-xl md:text-2xl font-semibold md:mb-5 mb-2.5">
							Related topics:
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{data.map((item, idx) => (
								<RecentBlogCard key={idx} item={item} />
							))}
						</div>

						<div className="flex justify-center mt-8">
							<button className="px-10 md:py-3.5 py-2 rounded-[10px] border border-gray-200 text-base bg-white hover:bg-gray-50">
								Load more
							</button>
						</div>
					</div>
				</section>
				<Support />
			</div>
		</div>
	);
}
