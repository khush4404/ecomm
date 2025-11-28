"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin, ShoppingCart, User, Menu, X, ChevronDown, Heart } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Select Country");
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

    const countries = ["United States", "Canada", "United Kingdom", "Germany", "Netherlands"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10"
                        : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
                    }`}
            >
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                        <svg
                                            viewBox="0 0 40 40"
                                            className="w-8 h-8 md:w-9 md:h-9"
                                            fill="none"
                                        >
                                            {/* Crown */}
                                            <path
                                                d="M12 14L15 8L20 12L25 8L28 14"
                                                stroke="#F59E0B"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle cx="15" cy="8" r="1.5" fill="#F59E0B" />
                                            <circle cx="20" cy="10" r="1.5" fill="#F59E0B" />
                                            <circle cx="25" cy="8" r="1.5" fill="#F59E0B" />
                                            {/* Wheat/Leaf */}
                                            <path
                                                d="M20 18V32"
                                                stroke="#F59E0B"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M20 20C17 20 14 22 14 25C17 25 20 23 20 20Z"
                                                fill="#F59E0B"
                                            />
                                            <path
                                                d="M20 20C23 20 26 22 26 25C23 25 20 23 20 20Z"
                                                fill="#F59E0B"
                                            />
                                            <path
                                                d="M20 24C17 24 14 26 14 29C17 29 20 27 20 24Z"
                                                fill="#F59E0B"
                                            />
                                            <path
                                                d="M20 24C23 24 26 26 26 29C23 29 20 27 20 24Z"
                                                fill="#F59E0B"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
                                    PASSION
                                    <span className="text-amber-400"> FARMS</span>
                                </h1>
                                <p className="text-[10px] text-slate-400 tracking-widest -mt-1">
                                    PREMIUM QUALITY
                                </p>
                            </div>
                        </Link>

                        {/* Search Bar - Desktop */}
                        <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                            <div
                                className={`relative w-full flex items-center transition-all duration-300 ${isSearchFocused ? "scale-[1.02]" : ""
                                    }`}
                            >
                                <div
                                    className={`absolute inset-0 rounded-full transition-all duration-300 ${isSearchFocused
                                            ? "bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl"
                                            : ""
                                        }`}
                                />
                                <div className="relative flex w-full bg-white/10 backdrop-blur-sm rounded-full border border-slate-600/50 hover:border-amber-500/50 focus-within:border-amber-400 focus-within:bg-white/15 transition-all duration-300">
                                    <div className="flex items-center pl-4 pr-2">
                                        <Search className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search products, strains, dispensaries..."
                                        className="flex-1 bg-transparent py-3 px-2 text-white placeholder-slate-400 focus:outline-none text-sm"
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setIsSearchFocused(false)}
                                    />
                                    {/* Country Selector */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                            className="flex items-center gap-2 px-4 py-3 border-l border-slate-600/50 text-slate-300 hover:text-white transition-colors"
                                        >
                                            <MapPin className="w-4 h-4 text-amber-400" />
                                            <span className="text-sm whitespace-nowrap">
                                                {selectedCountry}
                                            </span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {isCountryDropdownOpen && (
                                            <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                                                {countries.map((country) => (
                                                    <button
                                                        key={country}
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsCountryDropdownOpen(false);
                                                        }}
                                                        className="w-full px-4 py-3 text-left text-sm text-slate-300 hover:bg-amber-500/20 hover:text-white transition-colors"
                                                    >
                                                        {country}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Join Button - Desktop */}
                            <Link
                                href="/join"
                                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
                            >
                                <span>Join Passion Farms</span>
                            </Link>

                            {/* Wishlist */}
                            <button className="hidden md:flex relative p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                                <Heart className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-slate-900 text-xs font-bold rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            {/* Cart */}
                            <button className="relative p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-slate-900 text-xs font-bold rounded-full flex items-center justify-center">
                                    2
                                </span>
                            </button>

                            {/* User */}
                            <button className="hidden md:flex p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                                <User className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50"
                            >
                                {isMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search - Shows below main nav on tablet */}
                    <div className="lg:hidden pb-4">
                        <div className="flex bg-white/10 backdrop-blur-sm rounded-full border border-slate-600/50">
                            <div className="flex items-center pl-4">
                                <Search className="w-5 h-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 bg-transparent py-3 px-3 text-white placeholder-slate-400 focus:outline-none text-sm"
                            />
                            <button className="flex items-center gap-1 px-4 py-3 border-l border-slate-600/50 text-slate-300">
                                <MapPin className="w-4 h-4 text-amber-400" />
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"
                        }`}
                >
                    <div className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                            {/* Country Selector - Mobile */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-amber-400" />
                                        <span>{selectedCountry}</span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {isCountryDropdownOpen && (
                                    <div className="mt-2 bg-slate-700 rounded-xl overflow-hidden">
                                        {countries.map((country) => (
                                            <button
                                                key={country}
                                                onClick={() => {
                                                    setSelectedCountry(country);
                                                    setIsCountryDropdownOpen(false);
                                                }}
                                                className="w-full px-4 py-3 text-left text-slate-300 hover:bg-amber-500/20 hover:text-white transition-colors"
                                            >
                                                {country}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Navigation Links - Mobile */}
                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    href="/products"
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/dispensaries"
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                                >
                                    Dispensaries
                                </Link>
                                <Link
                                    href="/wishlist"
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                                >
                                    <Heart className="w-4 h-4" />
                                    Wishlist
                                </Link>
                                <Link
                                    href="/account"
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    Account
                                </Link>
                            </div>

                            {/* Join Button - Mobile */}
                            <Link
                                href="/join"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold rounded-xl transition-all duration-300"
                            >
                                Join Passion Farms
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-28 md:h-24 lg:h-20" />
        </>
    );
};

export default Navbar;