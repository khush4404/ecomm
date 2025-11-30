"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import ReactStars from "react-rating-stars-component";
import { cn } from "@/lib/utils";

// Product Card Component - Fully Reusable
interface ProductCardProps {
	id: string;
	image: string;
	category: string;
	title: string;
	price: number;
	rating: number;
	onAddToCart?: () => void;
	onToggleFavorite?: () => void;
	isFavorite?: boolean;
	className?: string;
}

const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex items-center gap-0.5">
			{[...Array(fullStars)].map((_, i) => (
				<svg
					key={`full-${i}`}
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
				>
					<path
						d="M7 0L8.5716 5.16492H14L9.4142 8.33508L10.9858 13.5L7 10.3349L3.0142 13.5L4.5858 8.33508L0 5.16492H5.4284L7 0Z"
						fill="#F0BA43"
					/>
				</svg>
			))}
			{hasHalfStar && (
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
					<defs>
						<linearGradient id="half">
							<stop offset="50%" stopColor="#F0BA43" />
							<stop offset="50%" stopColor="#BBBBBB" />
						</linearGradient>
					</defs>
					<path
						d="M7 0L8.5716 5.16492H14L9.4142 8.33508L10.9858 13.5L7 10.3349L3.0142 13.5L4.5858 8.33508L0 5.16492H5.4284L7 0Z"
						fill="url(#half)"
					/>
				</svg>
			)}
			{[...Array(emptyStars)].map((_, i) => (
				<svg
					key={`empty-${i}`}
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
				>
					<path
						d="M7 0L8.5716 5.16492H14L9.4142 8.33508L10.9858 13.5L7 10.3349L3.0142 13.5L4.5858 8.33508L0 5.16492H5.4284L7 0Z"
						fill="#BBBBBB"
					/>
				</svg>
			))}
		</div>
	);
};

export const ProductCard = ({
	id,
	image,
	category,
	title,
	price,
	rating,
	onAddToCart,
	onToggleFavorite,
	isFavorite = false,
	className = "",
}: ProductCardProps) => {
	return (
		<div
			className={`relative w-full max-w-[328px] sm:h-[381px] bg-[#F2F2F2] rounded-[10px] p-4 flex flex-col transition-all duration-300 hover:border-2 hover:border-[#F0BA43] ${className}`}
		>
			{/* Favorite Button */}
			<button
				onClick={onToggleFavorite}
				className="absolute top-4 right-4 z-10 w-6 h-6 flex items-center justify-center transition-transform hover:scale-110"
				aria-label="Add to favorites"
			>
				<Heart
					className={`w-6 h-6 ${
						isFavorite ? "fill-red-500 text-red-500" : "text-black"
					} transition-colors`}
				/>
			</button>

			{/* Product Image */}
			<div className="relative w-full sm:h-[197px] flex items-center justify-center mb-3">
				<img
					src={image}
					alt={title}
					className="max-w-full max-h-full object-contain"
				/>
			</div>

			{/* Category */}
			<p className="text-text-gray text-[10px] sm:text-base font-normal leading-4 sm:leading-6 tracking-[-0.02em] mb-0">
				{category}
			</p>

			{/* Title */}
			<h3 className="text-[#1D1D1D] text-[10px] sm:text-base font-semibold leading-3 sm:leading-[22px] tracking-[-0.02em] mb-2">
				{title}
			</h3>

			{/* Rating */}
			<div className="flex items-center gap-2 mb-2">
				<span className="text-[#1D1D1D] text-[10px] sm:text-xs font-medium leading-4 tracking-[-0.02em]">
					{rating.toFixed(1)}
				</span>
				<StarRating rating={rating} />
			</div>

			{/* Price and Cart Button */}
			<div className="flex items-center justify-between mt-auto">
				<p className="text-[#1D1D1D] text-lg sm:text-xl font-medium leading-9 tracking-[-0.02em]">
					${" "}
					{price.toLocaleString("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</p>

				{/* Add to Cart Button */}
				<button
					onClick={onAddToCart}
					className="sm:size-[50px] size-7 bg-[#F0BA43] rounded-full flex items-center justify-center hover:bg-[#e5af3a] transition-colors shadow-md"
					aria-label="Add to cart"
				>
					<ShoppingCart className="size-4 sm:size-6 text-[#080341]" />
				</button>
			</div>
		</div>
	);
};

// Legacy Card Components for backward compatibility

interface CardProps {
	children: React.ReactNode;
	className?: string;
	hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
	children,
	className,
	hover = false,
}) => {
	return (
		<div
			className={cn(
				"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6",
				hover &&
					"transition-transform duration-300 hover:scale-105 hover:shadow-xl",
				className
			)}
		>
			{children}
		</div>
	);
};

interface CardHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
	children,
	className,
}) => {
	return <div className={cn("mb-4", className)}>{children}</div>;
};

interface CardTitleProps {
	children: React.ReactNode;
	className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
	children,
	className,
}) => {
	return (
		<h3
			className={cn(
				"text-xl font-bold text-[#1D1D1D] dark:text-white",
				className
			)}
		>
			{children}
		</h3>
	);
};

interface CardContentProps {
	children: React.ReactNode;
	className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
	children,
	className,
}) => {
	return (
		<div className={cn("text-gray-600 dark:text-gray-300", className)}>
			{children}
		</div>
	);
};
