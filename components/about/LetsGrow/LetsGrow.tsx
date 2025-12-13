import { Mail } from "lucide-react";
import Image from "next/image";

export const LetsGrow = () => {
	return (
		<section className="w-full  flex justify-center items-center bg-white">
			{/* Main Card Container */}
			<div className="relative w-full max-w-7xl bg-[#F0BA43] rounded-[37px] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
				{/* Left Content Column */}
				<div className="flex-1 p-7 md:p-16 flex flex-col justify-center relative z-20">
					{/* Eyebrow Text */}
					<p className="text-[#FFFFFF] text-sm md:text-[28px] font-medium tracking-wide mb-4 max-w-sm leading-snug">
						Your Next Million Starts With the Right Partnership
					</p>

					{/* Main Headline */}
					<h2 className="text-xl md:text-[52px] font-extrabold text-[#1a1a1a] leading-[1.1] md:mb-18 mb-8">
						Lets Grow the <br />
						Future of Cannabis <br />
						Together
					</h2>

					{/* CTA Button / Link */}
					<div className="w-full max-w-md group cursor-pointer">
						<div className="flex justify-between items-center pb-3 border-b-2 border-[#000000] transition-all group-hover:border-white">
							<span className="text-[#1a1a1a] font-bold text-xs md:text-2xl group-hover:text-white transition-colors">
								Book Your Consultation
							</span>
							<div className="bg-[#1a1a1a] text-[#F5C344] p-1 rounded-sm group-hover:bg-white group-hover:text-black transition-colors">
								<Mail size={16} fill="currentColor" />
							</div>
						</div>
					</div>
				</div>

				{/* Right Image/Graphic Column */}
				<div className="flex-1 relative min-h-[400px] md:min-h-auto flex items-end justify-center  overflow-hidden">
					{/* Graphic Element: The Arc Line */}
					<div className="absolute top-[10%] right-[10%] md:right-[20%] w-[350px] h-[350px] md:w-[450px] md:h-[450px] pointer-events-none z-0"></div>

					{/* Graphic Element: The Floating Badge */}
					<div className="absolute top-[55%] right-[15%] md:right-[22%] z-10 animate-spin-slow">
						<div className="w-16 h-16 rounded-full border border-black flex items-center justify-center bg-[#F5C344]">
							<div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-[8px] text-center p-1 leading-tight font-mono">
								JOIN THE REVOLUTION
							</div>
						</div>
					</div>

					{/* Man Profile Image */}
					{/* Note: I am using a placeholder image. Replace 'src' with your actual transparent PNG of the man. */}
					<div className="relative z-10 w-[80%] md:w-[75%] h-[90%] bottom-0 md:mr-10">
						<Image
							src="/images/about/growmen.png"
							alt=""
							width={100}
							height={100}
							className="object-contain w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
