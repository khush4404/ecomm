"use client";

import Link from "next/link";
import Image from "next/image";
import {
	Instagram,
	Facebook,
	Linkedin,
	Send,
	Home,
	Bell,
	User,
	ShoppingCart,
} from "lucide-react";
import { useState } from "react";

export const Footer = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter subscription
		console.log("Email submitted:", email);
	};

	return (
		<>
			<footer className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
				{/* Main Footer Content */}
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[73px] py-8 sm:py-12 lg:py-16">
					<div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
						{/* Logo & Address Column */}
						<div className="lg:block">
							<Link
								href="/"
								className="block w-[79px] h-[88px] relative mb-5 sm:mb-6 lg:mb-6"
							>
								<Image
									src="/images/logo.png"
									alt="Logo"
									fill
									className="object-contain"
								/>
							</Link>
							<p
								className="text-white text-sm sm:text-base lg:text-xl font-normal leading-5 sm:leading-6 lg:leading-9 tracking-[-0.02em] mb-5 sm:mb-6 lg:mb-6 max-w-[341px]"
								style={{ fontFamily: "Inter, sans-serif" }}
							>
								Our Address: California, Oklahoma, and Texas.
							</p>

							{/* Social Media Icons - 4x2 grid on mobile */}
							<div className="flex flex-wrap gap-3 sm:gap-4 max-w-[280px] lg:max-w-none">
								{/* Row 1: Instagram, Facebook, TikTok, Telegram */}
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="Instagram"
								>
									<Instagram
										className="w-8 h-8 text-black"
										strokeWidth={1.5}
									/>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="Facebook"
								>
									<Facebook
										className="w-8 h-8 text-black"
										strokeWidth={1.5}
										fill="currentColor"
									/>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="TikTok"
								>
									<svg
										className="w-8 h-8 text-black"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
									</svg>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="Telegram"
								>
									<Send
										className="w-8 h-8 text-black"
										strokeWidth={1.5}
										fill="currentColor"
									/>
								</a>
								{/* Row 2: Link, YouTube, LinkedIn */}
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="Link"
								>
									<svg
										className="w-8 h-8 text-black"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
									</svg>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="YouTube"
								>
									<svg
										className="w-8 h-8 text-black"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
									</svg>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-[#F0BA43] rounded-none flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
									aria-label="LinkedIn"
								>
									<Linkedin
										className="w-8 h-8 text-black"
										strokeWidth={1.5}
										fill="currentColor"
									/>
								</a>
							</div>
						</div>

						{/* Two Column Layout for Explore and Information on Mobile */}
						<div className="grid grid-cols-2 gap-6 lg:contents">
							{/* Explore Column */}
							<div>
								<h3
									className="text-white text-xl lg:text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-3 lg:mb-6"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Explore
								</h3>
								<ul className="space-y-0">
									<li>
										<Link
											href="/shop"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Shop
										</Link>
									</li>
									<li>
										<Link
											href="/about"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											About us
										</Link>
									</li>
									<li>
										<Link
											href="/account"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											My Account
										</Link>
									</li>
									<li>
										<Link
											href="/faq"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											FAQ
										</Link>
									</li>
									<li>
										<Link
											href="/contact"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Contact us
										</Link>
									</li>
								</ul>
							</div>

							{/* Information Column */}
							<div>
								<h3
									className="text-white text-xl lg:text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-3 lg:mb-6"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Information
								</h3>
								<ul className="space-y-0">
									<li>
										<Link
											href="/tracking"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Order Tracking
										</Link>
									</li>
									<li>
										<Link
											href="/fda"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											FDA Disclaimer
										</Link>
									</li>
									<li>
										<Link
											href="/refund"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Refund & Return Policy
										</Link>
									</li>
									<li>
										<Link
											href="/terms"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Terms & Conditions
										</Link>
									</li>
									<li>
										<Link
											href="/privacy"
											className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
											style={{
												fontFamily: "Inter, sans-serif",
											}}
										>
											Privacy Policy
										</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Newsletter Column */}
						<div className="lg:col-span-1">
							<h3
								className="text-white text-xl lg:text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-3 lg:mb-6"
								style={{ fontFamily: "Inter, sans-serif" }}
							>
								Sign for Newsletter
							</h3>
							<p
								className="text-white text-sm lg:text-xl font-normal leading-5 lg:leading-9 tracking-[-0.02em] mb-5 lg:mb-6 max-w-[343px] lg:max-w-[450px]"
								style={{ fontFamily: "Inter, sans-serif" }}
							>
								Join the PASSION FARMS Community. Enter your
								email below to receive exclusive news and
								special offers!
							</p>

							{/* Email Input */}
							<form
								onSubmit={handleSubmit}
								className="relative max-w-[343px] lg:max-w-[450px]"
							>
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full h-[55px] bg-white border border-[#BBBBBB] lg:border-[#BBBBBB] pl-4 pr-[90px] lg:pr-[97px] text-text-gray text-xl font-normal leading-9 tracking-[-0.02em] outline-none rounded-[10px]"
									style={{ fontFamily: "Inter, sans-serif" }}
								/>
								<button
									type="submit"
									className="absolute right-0 top-0 w-[90px] lg:w-[97px] h-[55px] bg-[#F0BA43] text-[#1D1D1D] text-xl font-normal leading-9 tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors rounded-r-[10px]"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>

				{/* Bottom Copyright Bar */}
				<div className="w-full bg-[#F0BA43] min-h-[90px] lg:h-[70px] py-3 lg:py-0 flex items-center justify-center">
					<div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
						{/* Mobile: Stacked Layout */}
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">
							{/* Links - Top on Mobile, Right on Desktop */}
							<div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 lg:gap-6 lg:order-2">
								<Link
									href="/terms"
									className="text-[#1D1D1D] text-sm lg:text-base xl:text-xl font-normal leading-9 tracking-[-0.02em] hover:underline"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Terms & Service
								</Link>
								<Link
									href="/privacy"
									className="text-[#1D1D1D] text-sm lg:text-base xl:text-xl font-normal leading-9 tracking-[-0.02em] hover:underline"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Privacy Policy
								</Link>
								<Link
									href="/cookies"
									className="text-[#1D1D1D] text-sm lg:text-base xl:text-xl font-normal leading-9 tracking-[-0.02em] hover:underline"
									style={{ fontFamily: "Inter, sans-serif" }}
								>
									Cookies
								</Link>
							</div>
							{/* Copyright - Bottom on Mobile, Left on Desktop */}
							<p
								className="text-[#1D1D1D] text-base lg:text-base xl:text-xl font-normal leading-9 tracking-[-0.02em] text-center lg:text-left lg:order-1"
								style={{ fontFamily: "Inter, sans-serif" }}
							>
								Copyright @ 2025 Passionfarms.org
							</p>
						</div>
					</div>
				</div>
			</footer>
			<div className="sm:hidden flex flex-row items-center justify-between p-4">
				<button aria-label="Home" className="p-2">
					<Home className="w-6 h-6 text-[#1D1D1D]" />
				</button>
				<button aria-label="Messages" className="p-2">
					<ShoppingCart className="w-6 h-6 text-[#1D1D1D]" />
				</button>
				<button aria-label="Notifications" className="p-2">
					<Bell className="w-6 h-6 text-[#1D1D1D]" />
				</button>
				<button aria-label="Account" className="p-2">
					<User className="w-6 h-6 text-[#1D1D1D]" />
				</button>
			</div>
		</>
	);
};
