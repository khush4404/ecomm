"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/common/Card";
import { cn } from "@/lib/utils";

interface Tab {
    id: string;
    label: string;
}

interface Product {
    id: string;
    image: string;
    category: string;
    title: string;
    price: number;
    rating: number;
    isFavorite?: boolean;
}

interface CategoriesSectionProps {
    title?: string;
    subtitle?: string;
    tabs?: Tab[];
    products?: Product[];
    defaultTab?: string;
    showTabs?: boolean;
    showViewAllButton?: boolean;
    viewAllButtonText?: string;
    backgroundColor?: string;
    gridColumns?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    onTabChange?: (tabId: string) => void;
    onAddToCart?: (productId: string) => void;
    onToggleFavorite?: (productId: string) => void;
    onViewAll?: () => void;
    className?: string;
}

// Reusable Section component used for product grids with optional tabs or a View all button
export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
    title,
    subtitle,
    tabs = [],
    products = [],
    defaultTab = "all",
    showTabs = false,
    showViewAllButton = false,
    viewAllButtonText = "View all",
    backgroundColor = "white",
    gridColumns = { mobile: 2, tablet: 2, desktop: 4 },
    onTabChange,
    onAddToCart,
    onToggleFavorite,
    onViewAll,
    className = "",
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    const handleAddToCart = (productId: string) => {
        onAddToCart?.(productId);
    };

    const handleToggleFavorite = (productId: string) => {
        onToggleFavorite?.(productId);
    };

    const handleViewAll = () => {
        onViewAll?.();
    };

    const getGridClasses = () => {
        const { mobile = 2, tablet = 2, desktop = 4 } = gridColumns || {};
        const mobileClass = `grid-cols-${mobile}`;
        const tabletClass =
            tablet === 2 ? "sm:grid-cols-2" : tablet === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4";
        const desktopClass = desktop === 3 ? "lg:grid-cols-3" : desktop === 4 ? "xl:grid-cols-4" : "lg:grid-cols-2";
        return `${mobileClass} ${tabletClass} lg:grid-cols-3 ${desktopClass}`;
    };

    return (
        <section className={cn("w-full py-4.5 md:py-8", className)} style={{ background: backgroundColor }}>
            <div className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-[35px]">
                {/* Title / subtitle - styling taken from LatestNews heading */}
                {title && (
                    <div className="md:mb-6 mb-4 gap-2.5  flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex flex-col gap-2.5">
                            <h2 className="font-semibold text-base lg:text-[32px] sm:leading-9 leading-4 tracking-[-0.02em] text-[#1D1D1D]">
                                {title}
                            </h2>
                            {subtitle && <p className="text-[#888888] sm:text-base text-xs sm:leading-9 leading-5">{subtitle}</p>}
                        </div>

                        {/* Tabs on the right of heading (simple links). Active tab is only bold per request. */}
                        {showTabs && tabs.length > 0 ? (
                            <div className="flex self-center items-center sm:gap-6 gap-5">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={cn(
                                            "sm:text-[20px] text-xs  text-text-gray leading-9 tracking-[-0.02em]",
                                            activeTab === tab.id ? "font-semibold" : "font-normal"
                                        )}
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            /* If showTabs is false and showViewAllButton is true, render the View all button on the right */
                            showViewAllButton && (
                                <div className="self-end">
                                    <button
                                        onClick={handleViewAll}
                                        className="min-w-[120px] h-9 px-4 bg-[#F0BA43] rounded-[40px] text-white text-sm font-medium hover:bg-[#F0BA43]/90 transition-colors shadow"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        {viewAllButtonText}
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                )}

                <div className="border-t border-[#BBBBBB] mb-4" />

                {/* Products grid */}
                {products && products.length > 0 && (
                    <div className={`grid ${getGridClasses()} gap-4 lg:gap-5 `}>
                        {products.map((product) => (
                            <div key={product.id} className="flex justify-center">
                                <ProductCard
                                    id={product.id}
                                    image={product.image}
                                    category={product.category}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    isFavorite={product.isFavorite}
                                    onAddToCart={() => handleAddToCart(product.id)}
                                    onToggleFavorite={() => handleToggleFavorite(product.id)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* If tabs shown and view all requested, place view all at right */}
                {showViewAllButton && showTabs && (
                    <div className="flex justify-center lg:justify-end">
                        <button
                            onClick={handleViewAll}
                            className="min-w-[200px] h-[50px] px-8 bg-[#F0BA43] rounded-[40px] text-[#1D1D1D] text-base font-medium leading-9 tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors shadow-[0px_10px_48px_rgba(5,6,15,0.1)]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            {viewAllButtonText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

