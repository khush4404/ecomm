"use client";

import Image from "next/image";
import Link from "next/link";

export const ProductCategories = () => {
  const categories = [
    {
      name: "Prerolls",
      image: "/images/categories/prerolls.svg",
      href: "/categories/prerolls",
    },
    {
      name: "Edibles",
      image: "/images/categories/Edibels.svg",
      href: "/categories/edibels",
    },
    {
      name: "Disposables",
      image: "/images/categories/disposables.svg",
      href: "/categories/disposables",
    },
    {
      name: "Bulk Flowers",
      image: "/images/categories/bulk-flowers.svg",
      href: "/categories/bulk-flowers",
    },
    {
      name: "Cartridge",
      image: "/images/categories/cartridge.svg",
      href: "/categories/cartridge",
    },
    {
      name: "Moonrocks",
      image: "/images/categories/moonrocks.svg",
      href: "/categories/moonrocks",
    },
    {
      name: "Deals",
      image: "/images/categories/deals.svg",
      href: "/categories/deals",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-amber-50/30 to-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-11">

        {/* Mobile Horizontal Scroll View */}
        <div className="lg:hidden">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center group flex-shrink-0 snap-start min-w-[100px] sm:min-w-[120px]"
              >
                {/* Circle Container with Glow Effect */}
                <div className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] mb-3 sm:mb-4">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 blur-xl opacity-0 group-active:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Main Circle Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 shadow-lg shadow-amber-500/30 group-active:scale-95 transition-all duration-200"></div>

                  {/* Inner Highlight */}
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>

                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain drop-shadow-lg"
                        priority={index < 4}
                      />
                    </div>
                  </div>
                </div>

                {/* Category Name */}
                <span className="text-gray-800 text-xs sm:text-sm font-semibold text-center whitespace-nowrap px-2 group-active:text-amber-600 transition-colors duration-200">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-4 xl:grid-cols-7 gap-8 xl:gap-10">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center group"
            >
              {/* Circle Container with Enhanced Hover Effects */}
              <div className="relative w-[130px] h-[130px] xl:w-[140px] xl:h-[140px] mb-4">
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                
                {/* Main Circle Background with Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 shadow-xl shadow-amber-500/40 group-hover:shadow-2xl group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Inner Highlight Circle */}
                <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={index < 4}
                    />
                  </div>
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-500"></div>
              </div>

              {/* Category Name with Enhanced Typography */}
              <span className="text-gray-800 text-base xl:text-lg font-semibold text-center group-hover:text-amber-600 transition-all duration-300 group-hover:scale-105">
                {category.name}
              </span>
              
              {/* Subtle Underline Effect */}
              <div className="h-0.5 w-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent group-hover:w-full transition-all duration-500 mt-1"></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Enhanced Scrollbar Hide Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 1023px) {
          .scrollbar-hide {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};