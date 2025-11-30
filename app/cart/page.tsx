import { ProductCard } from "@/components";
import { CartView } from "@/components/Cart/CartView";
import { Discount } from "@/components/Cart/Discount";
import { RecentlyViewed } from "@/components/Cart/RecentlyViewed";
import { SimilarItems } from "@/components/categories/SimilarItems";
import Support from "@/components/common/Support";
import React from "react";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CartView />
      <SimilarItems
        title="You may also like"
        gridColumns={{ mobile: 2, tablet: 2, desktop: 4 }}
      />
      <RecentlyViewed />
      <Discount />
      <Support />
    </div>
  );
}