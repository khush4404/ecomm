"use client";

export function Privacy() {
	return (
		<div className="flex flex-col md:gap-10 gap-4">
			<div className="lg:flex-row flex-col flex items-center gap-5 md:justify-between">
				<h2 className="md:text-2xl text-base font-bold">
					Privacy & Security details
				</h2>

				<button className="w-[163px] bg-amber-400 text-white px-15 py-3 rounded-md text-base h-[42px] md:h-13 md:text-[20px] font-semibold hover:bg-amber-500">
					Edit
				</button>
			</div>
			<div className="grid lg:grid-cols-2 grid-cols-1 py-6.5 border-y border-[#bbbbbb]">
				<div className="grid grid-cols-2">
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-gray">
						Thomas
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-dark">
						Name
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-dark">
						Email Address
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-gray">
						Thomas@gmail.com
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-dark">
						Mobile Number
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-gray">
						726 258 942
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-dark">
						Password
					</p>
					<p className="md:leading-9 leading-6 text-[12px] md:text-base text-text-gray">
						*************
					</p>
				</div>
			</div>
		</div>
	);
}
