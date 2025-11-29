"use client";

import { cn } from "@/lib/utils";

const accountLinks = [
  { id: "dashboard", label: "Dashboard", icon: "/images/account/dashboard.svg" },
  { id: "orders", label: "Orders", icon: "/images/account/Order.svg" },
  { id: "privacy", label: "Privacy & Security", icon: "/images/account/security.svg" },
  { id: "addresses", label: "Address Details", icon: "/images/account/address.svg" },
  { id: "paymentMethods", label: "Payment Methods", icon: "/images/account/payment.svg" },
  { id: "giftCards", label: "Gift Cards & Coupons", icon: "/images/account/gift-card.svg" },
  { id: "wishlist", label: "Whishlist", icon: "/images/account/heart.svg" },
];

interface AccountSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {
  return (
    <ul className="space-y-4">
      {accountLinks.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => onTabChange(link.id)}
            className={cn(
              "w-full inline-flex gap-5 px-4 py-[7px] rounded-[10px] transition-colors border border-[#bbbbbb] lg:text-start text-center leading-9",
              activeTab === link.id
                ? "bg-[#F0BA43] border-[#f0ba43] text-white"
                : "hover:bg-gray-100"
            )}
          >
            <img src={link.icon} alt={link.label} className="text-white stroke-amber-200" />
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}