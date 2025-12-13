import Image from "next/image";
import { Users } from "lucide-react";

export const WeDesigned = () => {
	return (
		<section className="bg-white py-16 md:py-24 px-6 font-sans text-[#1A1A1A]">
			<div className="max-w-7xl mx-auto">
				{/* --- Section Header --- */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#1D1D1D]">
						We Designed Three Systems That Power
						<br className="hidden md:block" /> Unstoppable Growth
					</h2>
				</div>

				{/* --- Cards Grid --- */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* === Card 1: Marketplace === */}
					{/* <div className="flex flex-col rounded-[32px] overflow-hidden border border-gray-100 shadow-sm h-full">
						<Image
							src="/images/about/cardimage1.png"
							alt="Marketplace Background"
							width={400}
							height={200}
							className="w-full  object-cover"
						/>
						<div className="bg-white p-8 flex-1 border-t border-gray-50">
							<p className="text-[#1D1D1D] text-base leading-6 font-medium">
								A verified wholesale marketplace giving you
								access to licensed suppliers, bulk deals,
								premium THCA products, and reliable fulfillment
								partners.
							</p>
						</div>
					</div> */}
					<div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full">
						{/* Top Visual Area (Beige Background) */}
						<Image
							src="/images/about/cardimage1.png"
							alt="Marketplace Background"
							width={400}
							height={200}
							className="w-full  object-cover h-full grow"
						/>

						{/* Bottom Text Area */}
						<div className="bg-white p-6 flex-1 border-t border-gray-50 flex flex-col justify-start h-full grow">
							<p className="text-[#1D1D1D] text-base leading-6 font-medium">A verified wholesale marketplace giving you access to licensed suppliers, bulk deals, premium THCA products, and reliable fulfillment partners.
							</p>
						</div>
					</div>
					{/* === Card 2: Community === */}
					<div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full">
						{/* Top Visual Area (Beige Background) */}
						<div className="bg-[#FFF6E5] p-6 relative flex flex-col overflow-visible h-full grow">
							{/* Header: "Passion Farms" + Line */}
							<div className="flex items-center gap-4 mb-4">
								<p className="text-xs font-bold text-[#1D1D1D] whitespace-nowrap">
									Passion Farms
								</p>
								<div className="h-px bg-[#F0BA43] w-full"></div>
							</div>

							{/* White Inner Card Container */}
							<div className="bg-white rounded-3xl shadow-md p-4 flex flex-col  flex-1 w-full mx-auto max-w-[280px]">
								{/* Title inside white card */}
								<h3 className="text-xl font-medium text-[#1D1D1D] text-center mb-4 leading-tight">
									A thriving
									<br />
									<span className="font-bold">community</span>
								</h3>

							</div>
							{/* 3 Images with Connect Icons */}
							<div className="absolute flex items-center w-[110%] overflow-hidden bottom-20 gap-2 justify-between -left-5">
								{/* Left Image */}
								<div className="w-[140px] h-[140px] relative rounded-xl overflow-hidden shadow-md  border-2 border-white z-10">
									<Image
										src="/images/about/Teamimage1.png"
										alt="Community 1"
										fill
										className="object-cover"
									/>
								</div>

								{/* Center Image */}
								<div className="w-[140px] h-[140px] relative rounded-xl overflow-hidden shadow-xl z-20 border-2 border-white -mt-2">
									<Image
										src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=200"
										alt="Community 2"
										fill
										className="object-cover"
									/>
								</div>

								{/* Right Image */}
								<div className="w-[140px] h-[140px] relative rounded-xl overflow-hidden shadow-md  border-2 border-white z-10">
									<Image
										src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=200"
										alt="Community 3"
										fill
										className="object-cover"
									/>
								</div>

								{/* Left Connector Icon */}
								<div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F0BA43] rounded-full flex items-center justify-center text-white border border-white z-30 shadow-sm">
									<Users size={12} />
								</div>

								{/* Right Connector Icon */}
								<div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F0BA43] rounded-full flex items-center justify-center text-white border border-white z-30 shadow-sm">
									<Users size={12} />
								</div>
							</div>
						</div>

						{/* Bottom Text Area */}
						<div className="bg-white p-6 flex-1 border-t border-gray-50 flex flex-col justify-start h-full grow">
							<p className="text-[#1D1D1D] text-base leading-6 font-medium">
								A thriving community of cannabis industry
								experts sharing resources, strategies, and
								real-time insights to strengthen your business.
							</p>
						</div>
					</div>
					<div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full">
						<Image
							src="/images/about/cardimage3.png"
							alt="Software Tools Background"
							width={400}
							height={100}
							className="w-full  object-cover grow h-full"
						/>

						{/* Bottom Text Area */}
						<div className="bg-white p-6 flex-1 border-t border-gray-50 flex flex-col justify-start h-full grow">
							<p className="text-[#1D1D1D] text-base leading-6 font-medium">From POS, CRM to Marketing. Our Smart backend solutions, analytics dashboards, and automation tools that simplify operations and amplify your revenue potential.
							</p>
						</div>
					</div>
					{/* === Card 3: Software Tools === */}
					{/* <div className="flex flex-col rounded-[32px] overflow-hidden border border-gray-100 shadow-sm grow">
						<Image
							src="/images/about/cardimage3.png"
							alt="Software Tools Background"
							width={400}
							height={200}
							className="w-full  object-cover"
						/>

						<div className="bg-white p-8 flex-1 border-t border-gray-50">
							<p className="text-[#1D1D1D] text-base leading-6 font-medium">
								From POS, CRM to Marketing. Our Smart backend
								solutions, analytics dashboards, and automation
								tools that simplify operations and amplify your
								revenue potential.
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};
