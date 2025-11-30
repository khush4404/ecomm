import { Crafted } from "@/components/categories/Crafted";
import FeaturedCategories from "@/components/categories/FeaturedCategories/FeaturedCategories";
import { Hero } from "@/components/categories/Hero";
import LatestNews from "@/components/categories/LatestNews";
import { TopSelling } from "@/components/categories/TopSelling";
import { CategoriesSection } from "@/components/common/CategoriesSection";
import Support from "@/components/common/Support";

// Sample product data used by the sections on this page.
const sampleProducts = [
  {
    id: "p1",
    image: "/images/categories/Graphes.png",
    category: "Bulk Flowers",
    title: "Frosted Donuts",
    price: 850,
    rating: 4.4,
    isFavorite: false,
  },
  {
    id: "p2",
    image: "/images/categories/Graphes.png",
    category: "Bulk Flowers",
    title: "Frosted Donuts",
    price: 850,
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: "p3",
    image: "/images/categories/Graphes.png",
    category: "Bulk Flowers",
    title: "Frosted Donuts",
    price: 850,
    rating: 4.2,
    isFavorite: false,
  },
  {
    id: "p4",
    image: "/images/categories/Graphes.png",
    category: "Bulk Flowers",
    title: "Frosted Donuts",
    price: 850,
    rating: 4.8,
    isFavorite: false,
  },
];

const bestTabs = [
  { id: "all", label: "All" },
  { id: "best", label: "Best Sellers" },
  { id: "most", label: "Most Viewed" },
  { id: "brands", label: "Top Brands" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Hero />
      <FeaturedCategories />
      <CategoriesSection
        title="Best Sellers"
        subtitle="Special products in this month."
        tabs={bestTabs}
        products={sampleProducts}
        defaultTab="all"
        showTabs={true}
        showViewAllButton={false}
        viewAllButtonText="View all"
        gridColumns={{ mobile: 2, tablet: 2, desktop: 4 }}
      />
      <CategoriesSection
        title="Latest Products"
        subtitle="Special products in this month."
        products={sampleProducts}
        showTabs={false}
        showViewAllButton={true}
        viewAllButtonText="View all"
        gridColumns={{ mobile: 2, tablet: 2, desktop: 4 }}
      />
      <Crafted />
      <TopSelling />
      <LatestNews />
      <Support />

    </div>
  );
}
