"use client";

import ProductCardRow from "@/components/common/ProductCardRow/ProductCardRow";

type Product = {
    id: number;
    title: string;
    category: string;
    price: string;
    original?: string;
    img: string;
    starImage?: string;
};
export const RecentlyViewed = () => {
    const products: Product[] = [
        { id: 1, title: 'Frosted Donuts', category: 'Bulk Flowers', price: '$850.00', original: '$1,000.00', img: '/images/categories/bulk-flowers.svg', starImage: '/images/categories/stars.svg' },
        { id: 2, title: 'Lemon Cherry Pie', category: 'Bulk Flowers', price: '$550.00', original: '$700.00', img: '/images/categories/Graphes.png', starImage: '/images/categories/stars.svg' },
        { id: 3, title: 'SHERBINSKI LIVE RESIN JOINTS', category: 'Prerolls', price: '$200.00', original: '$800.00', img: '/images/categories/payroll.png', starImage: '/images/categories/stars.svg' },
        { id: 4, title: 'UGI Cannabis Infused Gummies', category: 'Edibles', price: '$550.00', original: '$700.00', img: '/images/categories/watermallon.png', starImage: '/images/categories/stars.svg' },
    ];
    return (
        <div className="flex flex-col gap-5 py-4.5 md:py-8">
            <p className="text-base text-text-dark font-semibold">
                Recently viewed items
            </p>
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: grid of products */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px] ">
                        {products.map((p) => (
                            <ProductCardRow key={p.id} p={p} className="bg-white border border-[#bbbbbb]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
