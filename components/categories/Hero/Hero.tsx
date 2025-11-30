"use client";

export const Hero: React.FC = () => {
	return (
		<section className="w-full bg-white py-4.5 md:py-8">
			<div className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-[35px]">
				{/* Hero Images - Side by Side */}
				<div className="flex flex-col lg:flex-row sm:gap-[19px] gap-4 justify-center">
					{/* First Image */}
					<div className="relative w-full sm:w-[1023px] h-[381px] lg:h-[381px] rounded-[10px] overflow-hidden">
						<img
							src="/images/categories/branding.jpg"
							alt="Categories Hero"
							className="object-cover object-center w-full h-full"
						/>
					</div>

					{/* Second Image */}
					<div className="relative w-full lg:w-[500px] h-[300px] lg:h-[381px] rounded-[10px] overflow-hidden">
						<img
							src="/images/categories/sirake.jpg"
							alt="Categories Hero 2"
							className="object-cover object-center w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
