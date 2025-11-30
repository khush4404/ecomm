"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Forum", href: "/forum" },
		{ name: "Contact Us", href: "/contact" },
	];

	const isActive = (href: string) => pathname === href;

	return (
		<>
			<nav className="w-full bg-white border-b border-[#BBBBBB]">
				<div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-11">
					<div className="flex items-center h-[50px] sm:h-[54px] gap-4 md:gap-6 lg:gap-8">
						{/* Hamburger Menu Button */}
						<button
							className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded transition-colors"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							aria-label="Toggle menu"
						>
							<Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1D1D]" />
						</button>

						{/* Navigation Links - Horizontal */}
						<div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="relative text-[#1D1D1D] text-xs sm:text-sm lg:text-base font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors whitespace-nowrap"
									style={{
										fontFamily: "Inter, sans-serif",
										fontWeight: isActive(link.href)
											? 600
											: 400,
									}}
								>
									{link.name}
									{isActive(link.href) && (
										<span className="absolute -bottom-[13px] sm:-bottom-3.5 left-1/2 -translate-x-1/2 w-[50px] sm:w-[60px] lg:w-[70px] h-1 bg-[#F0BA43] rounded-[10px]" />
									)}
								</Link>
							))}
						</div>
					</div>

					{/* Mobile Dropdown Menu */}
					{isMobileMenuOpen && (
						<div className="py-3 border-t border-[#BBBBBB] animate-fadeIn">
							<div className="flex flex-col space-y-2">
								{navLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="flex items-center justify-between px-4 py-2 text-[#1D1D1D] text-sm hover:bg-gray-50 hover:text-[#F0BA43] rounded transition-colors"
										style={{
											fontFamily: "Inter, sans-serif",
											fontWeight: isActive(link.href)
												? 600
												: 400,
										}}
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
									>
										<span>{link.name}</span>
										{isActive(link.href) && (
											<span className="w-2 h-2 bg-[#F0BA43] rounded-full" />
										)}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>

				<style jsx>{`
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(-4px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.animate-fadeIn {
						animation: fadeIn 0.2s ease-out;
					}
				`}</style>
			</nav>
		</>
	);
};
