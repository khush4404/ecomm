"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ProductCard } from "@/components/common/Card";
// Reusable dual-thumb range slider (visual single control)
function RangeSlider({
	value,
	onChange,
	min = 0,
	max = 100,
}: {
	value: number[];
	onChange: (v: number[]) => void;
	min?: number;
	max?: number;
}) {
	const containerRef = React.useRef<HTMLDivElement | null>(null);

	const percent = (v: number) => ((v - min) / (max - min)) * 100;

	const handleLow = (val: number) => {
		const newLow = Math.min(val, value[1] - 1);
		onChange([newLow, value[1]]);
	};

	const handleHigh = (val: number) => {
		const newHigh = Math.max(val, value[0] + 1);
		onChange([value[0], newHigh]);
	};

	// hide native thumbs via CSS
	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = `
		input[type=range].range-input { -webkit-appearance: none; appearance: none; background: transparent; }
		input[type=range].range-input:focus { outline: none; }
		input[type=range].range-input::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 0; height: 0; background: transparent; border: none; }
		input[type=range].range-input::-moz-range-thumb { width: 0; height: 0; background: transparent; border: none; }
		`;
		document.head.appendChild(style);
		return () => { document.head.removeChild(style); };
	}, []);

	const valueFromClientX = (clientX: number) => {
		const el = containerRef.current;
		if (!el) return min;
		const rect = el.getBoundingClientRect();
		const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
		return Math.round(min + pct * (max - min));
	};

	const onPointerDown = (e: React.PointerEvent) => {
		e.preventDefault();
		const clientX = e.clientX;
		const clickedValue = valueFromClientX(clientX);
		const distLow = Math.abs(clickedValue - value[0]);
		const distHigh = Math.abs(clickedValue - value[1]);
		const pick: "low" | "high" = distLow <= distHigh ? "low" : "high";
		// start dragging picked thumb

		const onPointerMove = (ev: PointerEvent) => {
			const v = valueFromClientX(ev.clientX);
			if (pick === "low") {
				handleLow(v);
			} else {
				handleHigh(v);
			}
		};

		const onPointerUp = () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", onPointerUp);
		};

		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerup", onPointerUp);
	};

	const left = percent(value[0]);
	const right = percent(value[1]);

	return (
		<div ref={containerRef} onPointerDown={onPointerDown} className="w-full relative h-6">
			{/* Track */}
			<div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-300 rounded-full" />
			{/* Filled range */}
			<div
				className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-[#F0BA43] rounded-full"
				style={{ left: `${left}%`, width: `${Math.max(right - left, 0)}%` }}
			/>

			{/* Invisible native sliders (kept for keyboard accessibility) - pointer-events disabled, we handle dragging manually */}
			<input
				type="range"
				min={min}
				max={max}
				value={value[0]}
				onChange={(e) => handleLow(Number(e.target.value))}
				className="range-input absolute left-0 right-0 top-0 w-full h-10 appearance-none bg-transparent pointer-events-none"
				style={{ zIndex: 1 }}
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={value[1]}
				onChange={(e) => handleHigh(Number(e.target.value))}
				className="range-input absolute left-0 right-0 top-0 w-full h-10 appearance-none bg-transparent pointer-events-none"
				style={{ zIndex: 1 }}
			/>

			{/* Visible thumbs (custom) */}
			<div
				className="absolute w-4 h-4 rounded-full bg-[#F0BA43] -translate-y-1/2 top-1/2 shadow-md pointer-events-none"
				style={{ left: `calc(${left}% - 8px)` }}
			/>
			<div
				className="absolute w-4 h-4 rounded-full bg-[#F0BA43] -translate-y-1/2 top-1/2 shadow-md pointer-events-none"
				style={{ left: `calc(${right}% - 8px)` }}
			/>
		</div>
	);
}

interface FilterSidebarProps {
	showCategoryMore: boolean;
	setShowCategoryMore: (value: boolean) => void;
	showBrandMore: boolean;
	setShowBrandMore: (value: boolean) => void;
	selectedPriceRanges: string[];
	setSelectedPriceRanges: (value: string[]) => void;
	selectedBrands: string[];
	setSelectedBrands: (value: string[]) => void;
	priceRange: number[];
	setPriceRange: (value: number[]) => void;
	categories: Array<{ name: string; count: number }>;
	priceRanges: Array<{
		label: string;
		min: number;
		max: number;
		count: number;
	}>;
	brands: Array<{ name: string; count: number }>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
	showCategoryMore,
	setShowCategoryMore,
	showBrandMore,
	setShowBrandMore,
	selectedPriceRanges,
	setSelectedPriceRanges,
	selectedBrands,
	setSelectedBrands,
	priceRange,
	setPriceRange,
	categories,
	priceRanges,
	brands,
}) => (
	<div className="bg-white border  border-[#BBBBBB] pb-6">
		{/* Product Categories */}
		<div className="border-b  border-[#BBBBBB]">
			<h2 className="font-semibold text-base text-[#21465E] border-b border-[#BBBBBB] px-7 py-5">
				Product Categories
			</h2>
			<div className="space-y-2.5 p-4">
				{categories
					.slice(0, showCategoryMore ? categories.length : 8)
					.map((category, idx) => (
						<label
							key={idx}
							className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded sm:leading-9"
						>
							<span className="text-[#1D1D1d] md:text-base text-sm sm:leading-9">
								{category.name}
							</span>
							<span className="px-2 py-0.5 bg-[#f2f2f2] rounded text-xs text-[#1D1D1D] w-[34px] inline-flex itmes-center justify-center sm:leading-[26px]">
								{category.count}
							</span>
						</label>
					))}
				{categories.length > 4 && (
					<button
						onClick={() => setShowCategoryMore(!showCategoryMore)}
						className="flex items-center gap-2 mt-4 text-[#1D1D1D] font-medium"
					>
						See More
						<ChevronDown
							size={16}
							className={`transition-transform ${showCategoryMore ? "rotate-180" : ""
								}`}
						/>
					</button>
				)}
			</div>
		</div>
		{/* Price Section */}
		<div className="border-b border-[#BBBBBB] p-6">
			<h1 className="font-semibold text-base text-[#21465E] mb-4">
				Product Categories
			</h1>
			<h2 className="font-semibold text-base text-[#21465E] mb-4">
				Price
			</h2>

			{/* Price Range Slider */}
			<div className="mb-6">
				<div className="flex items-center gap-4 mb-3">
					{/* Single visual range slider with two thumbs */}
					<RangeSlider
						value={priceRange}
						onChange={setPriceRange}
						min={0}
						max={200}
					/>
				</div>
				<p className="text-xs md:text-sm text-[#1D1D1D]">
					Price Range: ${priceRange[0]} - ${priceRange[1]}
				</p>
			</div>

			{/* Price Range Checkboxes */}
			<div className="space-y-2.5">
				{priceRanges.map((range, idx) => (
					<label
						key={idx}
						className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
					>
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								checked={selectedPriceRanges.includes(
									range.label
								)}
								onChange={(e) => {
									if (e.target.checked) {
										setSelectedPriceRanges([
											...selectedPriceRanges,
											range.label,
										]);
									} else {
										setSelectedPriceRanges(
											selectedPriceRanges.filter(
												(r) => r !== range.label
											)
										);
									}
								}}
								className="w-4 h-4 accent-yellow-400 rounded"
							/>
							<span className="text-[#1D1D1D] md:text-base text-sm">
								{range.label}
							</span>
						</div>
						<span className="px-2 py-0.5 bg-gray-200 rounded text-xs text-[#1D1D1D]">
							{range.count}
						</span>
					</label>
				))}
			</div>
		</div>
		{/* Brands Section */}
		<div className="p-6">
			<h2 className="font-semibold text-base text-[#21465E] mb-4">
				Brands
			</h2>
			<div className="space-y-2.5">
				{brands
					.slice(0, showBrandMore ? brands.length : 5)
					.map((brand, idx) => (
						<label
							key={idx}
							className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-1 rounded"
						>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									checked={selectedBrands.includes(
										brand.name
									)}
									onChange={(e) => {
										if (e.target.checked) {
											setSelectedBrands([
												...selectedBrands,
												brand.name,
											]);
										} else {
											setSelectedBrands(
												selectedBrands.filter(
													(b) => b !== brand.name
												)
											);
										}
									}}
									className="w-4 h-4 accent-yellow-400 rounded"
								/>
								<span className="text-[#1D1D1D] md:text-base text-sm">
									{brand.name}
								</span>
							</div>
							<span className="px-2 py-0.5 bg-gray-200 rounded text-xs text-[#1D1D1D]">
								{brand.count}
							</span>
						</label>
					))}
			</div>
			{brands.length > 5 && (
				<button
					onClick={() => setShowBrandMore(!showBrandMore)}
					className="flex items-center md:text-base text-sm gap-2 mt-4 text-[#1D1D1D] font-medium"
				>
					See More
					<ChevronDown
						size={16}
						className={`transition-transform ${showBrandMore ? "rotate-180" : ""
							}`}
					/>
				</button>
			)}
		</div>
		<button className="items-center flex bg-[#F0BA43] text-white px-10.5 py-2 rounded-full font-medium hover:bg-yellow-500 transition m-4">
			{/* Mobile text */}
			<span className="block md:hidden">Apply</span>

			{/* Desktop text */}
			<span className="hidden md:block text-center">More Filters</span>
		</button>
	</div>
);

export default function ProductListPage() {
	const [showCategoryMore, setShowCategoryMore] = useState(false);
	const [showBrandMore, setShowBrandMore] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [selectedPriceRanges, setSelectedPriceRanges] = useState([
		"Free - $100",
	]);
	const [selectedBrands, setSelectedBrands] = useState(["Stiiizy"]);
	const [priceRange, setPriceRange] = useState([10, 150]);
	const [sortBy, setSortBy] = useState("latest");
	const [itemsPerPage, setItemsPerPage] = useState("30");

	const categories = [
		{ name: "Super Buff Cherry", count: 100 },
		{ name: "Cherry Garcia", count: 12 },
		{ name: "Candy Comet", count: 24 },
		{ name: "Gelonatti", count: 35 },
		{ name: "Lemon Cherry Pie", count: 65 },
		{ name: "Apple Fritter", count: 76 },
		{ name: "Black Runtz", count: 85 },
		{ name: "Italian Ice", count: 52 },
	];

	const priceRanges = [
		{ label: "Free - $100", min: 0, max: 100, count: 100 },
		{ label: "$100 - $200", min: 100, max: 200, count: 12 },
		{ label: "$200 - $400", min: 200, max: 400, count: 24 },
		{ label: "$400 - $600", min: 400, max: 600, count: 35 },
		{ label: "$600 - $600", min: 600, max: 800, count: 65 },
		{ label: "Over $1000", min: 1000, max: Infinity, count: 76 },
	];

	const brands = [
		{ name: "Stiiizy", count: 100 },
		{ name: "Wyld", count: 12 },
		{ name: "Jeeter", count: 24 },
		{ name: "Curaleaf", count: 35 },
		{ name: "Trulieve", count: 65 },
		{ name: "Aurora Cannabis", count: 76 },
	];

	const products = [
		{
			id: "1",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Frosted Donuts",
			price: 850.0,
			rating: 4.4,
		},
		{
			id: "2",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Italian Ice",
			price: 850.0,
			rating: 4.4,
		},
		{
			id: "3",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Warheads",
			price: 1400.0,
			rating: 4.4,
		},
		{
			id: "4",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Rainbow Poundcake",
			price: 1525.0,
			rating: 4.4,
		},
		{
			id: "5",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Froyo",
			price: 1350.0,
			rating: 4.4,
		},
		{
			id: "6",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Team Rocket",
			price: 850.0,
			rating: 4.4,
		},
		{
			id: "7",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Blueberry nerdz",
			price: 1400.0,
			rating: 4.4,
		},
		{
			id: "8",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Papa Smurf",
			price: 1300.0,
			rating: 4.4,
		},
		{
			id: "9",
			image: "/images/products/placeholder.svg",
			category: "Bulk Flowers",
			title: "Cherry Pops",
			price: 1025.0,
			rating: 4.4,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
					<div className="bg-white w-3/4 max-w-sm h-full overflow-y-auto">
						<div className="p-4 border-b flex items-center justify-between">
							<h3 className="font-semibold text-blue-900">
								Menu
							</h3>
							<button onClick={() => setMobileMenuOpen(false)}>
								<X size={24} />
							</button>
						</div>
						<div className="p-4 space-y-4">
							<div>Home</div>
							<div>All Categories</div>
							<div>Shop</div>
							<div>Blog</div>
							<div>Contact</div>
						</div>
					</div>
				</div>
			)}

			{/* Mobile Filters Modal */}
			{mobileFiltersOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
					<div className="bg-white w-full h-full overflow-y-auto">
						<div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
							<h3 className="font-semibold text-blue-900">
								Filters
							</h3>
							<button onClick={() => setMobileFiltersOpen(false)}>
								<X size={24} />
							</button>
						</div>
						<div className="p-6">
							<FilterSidebar
								showCategoryMore={showCategoryMore}
								setShowCategoryMore={setShowCategoryMore}
								showBrandMore={showBrandMore}
								setShowBrandMore={setShowBrandMore}
								selectedPriceRanges={selectedPriceRanges}
								setSelectedPriceRanges={setSelectedPriceRanges}
								selectedBrands={selectedBrands}
								setSelectedBrands={setSelectedBrands}
								priceRange={priceRange}
								setPriceRange={setPriceRange}
								categories={categories}
								priceRanges={priceRanges}
								brands={brands}
							/>
						</div>
					</div>
				</div>
			)}

			{/* Breadcrumb */}
			<div className="bg-gray-100 px-4 md:px-9 py-5 flex items-center gap-2 text-sm">
				<span className="text-[#1D1D1D]">Home</span>
				<ChevronDown size={16} className="rotate-180 text-[#1D1D1D]" />
				<span className="text-[#1D1D1D]">Bulk flowers</span>
			</div>

			{/* Main Content */}
			<div className="flex flex-col lg:flex-row gap-6 px-4 md:px-9 py-8">
				{/* Sidebar - Hidden on mobile */}
				<div className="hidden lg:block md:w-80">
					<FilterSidebar
						showCategoryMore={showCategoryMore}
						setShowCategoryMore={setShowCategoryMore}
						showBrandMore={showBrandMore}
						setShowBrandMore={setShowBrandMore}
						selectedPriceRanges={selectedPriceRanges}
						setSelectedPriceRanges={setSelectedPriceRanges}
						selectedBrands={selectedBrands}
						setSelectedBrands={setSelectedBrands}
						priceRange={priceRange}
						setPriceRange={setPriceRange}
						categories={categories}
						priceRanges={priceRanges}
						brands={brands}
					/>
				</div>

				{/* Mobile Filter Button */}
				{/* <div className="md:hidden mb-4">
          <button className="w-full bg-[#F0BA43] text-[#1D1D1D] py-2 rounded-[10px] font-medium flex items-center justify-center gap-2">
            <Search size={18} />
            All Filters
          </button>
        </div> */}

				{/* Products Section */}
				<div className="flex-1">
					<div className="flex flex-col-reverse lg:flex-col">
						{/* Filter Bar */}
						<div className="flex flex-col md:flex-row  items-center justify-between gap-4 mb-8 pb-4 border-b border-[#BBBBBB]">
							<div className="flex items-center gap-3 text-base w-full md:w-auto">
								<button
									onClick={() => setMobileFiltersOpen(true)}
									className="flex  items-center gap-2 font-medium  text-[#21465E] px-4 py-2 rounded-[10px] transition w-full md:w-auto justify-center"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 17.5H7"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 6.5H17"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M13 17.5H22"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M11 6.5H2"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M10 20.3999C8.34315 20.3999 7 19.0568 7 17.3999C7 15.743 8.34315 14.3999 10 14.3999C11.6569 14.3999 13 15.743 13 17.3999C13 19.0568 11.6569 20.3999 10 20.3999Z"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M14 9.3999C15.6569 9.3999 17 8.05676 17 6.3999C17 4.74305 15.6569 3.3999 14 3.3999C12.3431 3.3999 11 4.74305 11 6.3999C11 8.05676 12.3431 9.3999 14 9.3999Z"
											stroke="#1D1D1D"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>

									<span
										style={{ letterSpacing: "-0.02em" }}
										className=""
									>
										All Filters
									</span>
								</button>
							</div>

							<div className="flex flex-col md:flex-row flex-wrap items-center  gap-4 text-sm w-full md:w-auto">
								<div className="flex items-center gap-2  md:w-auto">
									<span
										className="text-text-gray text-center whitespace-nowrap"
										style={{ letterSpacing: "-0.02em" }}
									>
										Showing 1-18 of 22 results
									</span>
								</div>

								<div className="hidden md:flex items-center gap-2">
									<div className="w-px h-4 bg-[#BBBBBB]"></div>
								</div>

								<div className="flex justify-between items-center gap-2 w-full md:w-auto">
									<span
										className="text-[#21465E] whitespace-nowrap"
										style={{ letterSpacing: "-0.02em" }}
									>
										Sort by:
									</span>
									<select
										value={sortBy}
										onChange={(e) =>
											setSortBy(e.target.value)
										}
										className="px-3 py-2 text-text-gray bg-white cursor-pointer  focus:outline-none"
										style={{ letterSpacing: "-0.02em" }}
									>
										<option value="latest">
											Latest products
										</option>
										<option value="price-low">
											Price: Low to High
										</option>
										<option value="price-high">
											Price: High to Low
										</option>
										<option value="rating">
											Highest Rated
										</option>
										<option value="popularity">
											Most Popular
										</option>
									</select>
								</div>

								<div className="hidden md:flex items-center gap-2">
									<div className="w-px h-4 bg-[#BBBBBB]"></div>
								</div>

								<div className="hidden md:flex items-center gap-2 w-full md:w-auto">
									<span
										className="text-[#21465E] whitespace-nowrap"
										style={{ letterSpacing: "-0.02em" }}
									>
										Show items:
									</span>
									<select
										value={itemsPerPage}
										onChange={(e) =>
											setItemsPerPage(e.target.value)
										}
										className="px-3 py-2 text-text-gray cursor-pointer focus:outline-none"
										style={{ letterSpacing: "-0.02em" }}
									>
										<option value="10">10 items</option>
										<option value="20">20 items</option>
										<option value="30">30 items</option>
										<option value="50">50 items</option>
									</select>
								</div>
							</div>
						</div>
						<div className="h-[204px] md:h-[381px] w-full bg-gray-100 mb-8 rounded-[10px] overflow-hidden">
							<img src="/images/products/product-banner.jpg" alt="" className="w-full h-full" />
						</div>
					</div>
					{/* Product Grid */}
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{products.map((product) => (
							<div
								key={product.id}
								className="flex justify-center"
							>
								<ProductCard
									id={product.id}
									image={product.image}
									category={product.category}
									title={product.title}
									price={product.price}
									rating={product.rating}
									onAddToCart={() =>
										console.log("Add to cart:", product.id)
									}
									onToggleFavorite={() =>
										console.log(
											"Toggle favorite:",
											product.id
										)
									}
								/>
							</div>
						))}
					</div>

					{/* Pagination */}
					<div className="flex items-center justify-center gap-2 mt-12">
						<button className="px-2 py-1 text-gray-600 hover:text-[#1D1D1D]">
							<ChevronLeft size={30} />
						</button>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
							<button
								key={page}
								className={`px-3 py-1 rounded-[10px] ${page === 1
									? "bg-gray-200 text-[#1D1D1D] font-semibold"
									: "text-gray-600 hover:text-[#1D1D1D]"
									}`}
							>
								{page}
							</button>
						))}
						<button className="px-2 py-1 text-gray-600 hover:text-[#1D1D1D]">
							<ChevronRight size={30} />

						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
