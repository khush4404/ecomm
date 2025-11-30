"use client";

import { useState } from "react";
import { ProductCard } from "@/components/common/Card";

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
  featured?: boolean;
}

interface AvailableNowProps {
  title?: string;
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
}

export const AvailableNow = ({
  title,
  tabs = [
    { id: "all", label: "All Products" },
    { id: "new", label: "New Arrivals" },
    { id: "best", label: "Best Sellers" },
    { id: "sale", label: "Sale Items" },
  ],
  products = [],
  defaultTab = "all",
  showTabs = true,
  showViewAllButton = true,
  viewAllButtonText = "View all products",
  backgroundColor = "white",
  gridColumns = {
    mobile: 2,
    tablet: 2,
    desktop: 4,
  },
  onTabChange,
  onAddToCart,
  onToggleFavorite,
  onViewAll,
}: AvailableNowProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const handleAddToCart = (productId: string) => {
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      console.log(`Add to cart: ${productId}`);
    }
  };

  const handleToggleFavorite = (productId: string) => {
    if (onToggleFavorite) {
      onToggleFavorite(productId);
    } else {
      console.log(`Toggle favorite: ${productId}`);
    }
  };

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      console.log("View all products clicked");
    }
  };

  // Dynamic grid classes based on gridColumns prop
  const getGridClasses = () => {
    const { mobile = 2, tablet = 2, desktop = 4 } = gridColumns;
    const mobileClass = `grid-cols-${mobile}`;
    const tabletClass =
      tablet === 2
        ? "sm:grid-cols-2"
        : tablet === 3
          ? "sm:grid-cols-3"
          : "sm:grid-cols-4";
    const desktopClass =
      desktop === 3
        ? "lg:grid-cols-3"
        : desktop === 4
          ? "xl:grid-cols-4"
          : "lg:grid-cols-2";
    return `${mobileClass} ${tabletClass} lg:grid-cols-3 ${desktopClass}`;
  };

  return (
    <section className={`w-full bg-${backgroundColor} py-12 lg:py-16`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        {title && (
          <h2
            className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {title}
          </h2>
        )}

        {/* Filter Tabs */}
        {showTabs && tabs.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-8 lg:mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`min-w-[118px] h-9 px-4 rounded-[40px] text-base font-normal leading-9 tracking-[-0.02em] transition-all duration-300 ${activeTab === tab.id
                  ? "bg-[#F0BA43] text-white shadow-[0px_10px_48px_rgba(5,6,15,0.1)]"
                  : "bg-white text-[#1D1D1D] border border-[rgba(187,187,187,0.73)]"
                  }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 && (
          <div className={`grid ${getGridClasses()} gap-4 lg:gap-5 mb-8`}>
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

        {/* View All Products Button */}
        {showViewAllButton && (
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={handleViewAll}
              className="min-w-[200px] h-[50px] px-8 bg-[#F0BA43] rounded-[40px] text-white text-base font-medium leading-9 tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors shadow-[0px_10px_48px_rgba(5,6,15,0.1)]"
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
