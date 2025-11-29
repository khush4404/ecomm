"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, User, MapPin, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	const [showMobileSearch, setShowMobileSearch] = useState(false);

	return (
		<header className="w-full bg-[#21465E] py-3 sm:py-4 lg:py-0 lg:h-[150px] relative overflow-hidden">
			<div className="max-w-[1440px] mx-auto px-2 sm:px-4 md:px-6 lg:px-11 relative h-full">
				<div className="flex flex-col lg:flex-row items-center lg:h-full gap-3 sm:gap-4 lg:gap-0">
					{/* Top Row - Mobile/Tablet */}
					<div className="flex items-center justify-between w-full lg:hidden min-w-0">
						{/* Logo */}
						<Link
							href="/"
							className="block w-[50px] h-[56px] sm:w-[60px] sm:h-[67px] md:w-[70px] md:h-[78px] relative flex-shrink-0"
						>
							<Image
								src="/images/logo.png"
								alt="Logo"
								fill
								className="object-contain"
								priority
							/>
						</Link>

						{/* Search Bar - Mobile/Tablet */}
						<div className="flex-1 mx-2 sm:mx-3 md:mx-4 min-w-0">
							<div className="flex h-12 sm:h-[48px] bg-white rounded-[30px] items-center px-4 sm:px-5">
								<Search className="w-5 h-5 text-text-gray flex-shrink-0" />
								<input
									type="text"
									placeholder="What are you looking for?"
									value={searchQuery}
									onChange={(e) =>
										setSearchQuery(e.target.value)
									}
									className="flex-1 bg-transparent border-none outline-none text-text-gray placeholder:text-text-gray text-sm sm:text-base px-3 font-normal tracking-[-0.02em] min-w-0"
									style={{ fontFamily: "Inter, sans-serif" }}
								/>
							</div>
						</div>

						{/* Right Side Actions - Mobile/Tablet */}
						<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
							{/* Language Selector - Mobile */}
							<button
								className="text-white text-sm sm:text-base font-semibold hover:opacity-80 transition-opacity flex-shrink-0"
								aria-label="Select language"
								style={{ fontFamily: "Inter, sans-serif" }}
							>
								EN
							</button>

							{/* Location Button */}
							<button
								className="w-10 h-10 sm:w-[48px] sm:h-[48px] flex items-center justify-center   flex-shrink-0"
								aria-label="Location"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-10 sm:w-9 h-10 sm:h-9"
								>
									<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
									<circle cx="12" cy="10" r="3" />
								</svg>
							</button>

							{/* Cart Button */}
							<button
								className="w-10 h-10 sm:w-[48px] sm:h-[48px] bg-white rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors flex-shrink-0"
								aria-label="Shopping cart"
							>
								<ShoppingCart className="w-6 sm:w-7 h-6 sm:h-7 text-[#21465E]" />
							</button>

							{/* Profile Button */}
							<button
								className="w-10 h-10 sm:w-[48px] sm:h-[48px] bg-white rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors flex-shrink-0"
								aria-label="User profile"
							>
								<User className="w-6 sm:w-7 h-6 sm:h-7 text-[#21465E]" />
							</button>
						</div>
					</div>

					{/* Desktop Logo */}
					<div className="hidden lg:flex flex-shrink-0 lg:mr-6">
						<Link
							href="/"
							className="block w-[79px] h-[88px] relative"
						>
							<Image
								src="/images/logo.png"
								alt="Logo"
								fill
								className="object-contain"
								priority
							/>
						</Link>
					</div>

					{/* Search Bar - Desktop */}
					<div className="hidden lg:flex flex-1 max-w-[907px] h-[54px] bg-[#F5F5F5] rounded-[42px] items-center px-6 relative">
						<Search className="w-6 h-6 text-text-gray flex-shrink-0" />
						<input
							type="text"
							placeholder="What are you looking for?"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="flex-1 bg-transparent border-none outline-none text-text-gray placeholder:text-text-gray text-base px-4 font-normal tracking-[-0.02em]"
							style={{ fontFamily: "Inter, sans-serif" }}
						/>

						{/* Divider */}
						<div className="w-px h-[37px] bg-[#878787] mx-4"></div>

						{/* Country Select */}
						<div className="flex items-center gap-2 flex-shrink-0">
							<MapPin className="w-6 h-6 text-black" />
							<input
								type="text"
								placeholder="Select country"
								value={selectedCountry}
								onChange={(e) =>
									setSelectedCountry(e.target.value)
								}
								className="bg-transparent border-none outline-none text-[#1D1D1D] placeholder:text-[#1D1D1D] placeholder:opacity-50 text-base w-[106px] font-normal tracking-[-0.02em]"
								style={{ fontFamily: "Inter, sans-serif" }}
							/>
						</div>
					</div>

					{/* Right Side Actions - Desktop */}
					<div className="hidden lg:flex items-center gap-3 lg:ml-auto">
						{/* Join Button - Responsive Desktop */}
						<button
							className="hidden lg:flex xl:hidden items-center justify-center w-[140px] h-[48px] bg-[#F0BA43] rounded-[10px] text-sm font-normal tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors whitespace-nowrap"
							style={{ fontFamily: "Inter, sans-serif" }}
						>
							<span className="text-black">Join</span>
							<span className="text-white ml-1">Passion!</span>
						</button>

						{/* Join Button - Large Desktop */}
						<button
							className="hidden xl:flex items-center justify-center w-[178px] h-[54px] bg-[#F0BA43] rounded-[10px] text-base font-normal tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors"
							style={{ fontFamily: "Inter, sans-serif" }}
						>
							<span className="text-black">Join</span>
							<span className="text-white ml-1">
								Passion farms !
							</span>
						</button>

						{/* Cart Button */}
						<button
							className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[10px] flex items-center justify-center hover:bg-[#F5F5F5]/80 transition-colors"
							aria-label="Shopping cart"
						>
							<ShoppingCart className="w-6 h-6 text-[#080341]" />
						</button>

						{/* Profile Button */}
						<button
							className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[10px] flex items-center justify-center hover:bg-[#F5F5F5]/80 transition-colors"
							aria-label="User profile"
						>
							<User className="w-6 h-6 text-black" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
