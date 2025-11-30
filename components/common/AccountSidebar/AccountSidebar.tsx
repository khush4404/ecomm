"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingBag,
  Lock,
  MapPin,
  CreditCard,
  Gift,
  Heart,
} from "lucide-react";

const accountLinks = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "privacy", label: "Privacy & Security", icon: Lock },
  { id: "addresses", label: "Address Details", icon: MapPin },
  { id: "paymentMethods", label: "Payment Methods", icon: CreditCard },
  { id: "giftCards", label: "Gift Cards & Coupons", icon: Gift },
  { id: "wishlist", label: "Whishlist", icon: Heart },
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
              "w-full inline-flex gap-5 px-4 py-[7px] rounded-[10px] transition-colors border border-[#bbbbbb] lg:text-start text-center leading-9  items-center",
              activeTab === link.id
                ? "bg-[#F0BA43] border-[#f0ba43] text-white"
                : "hover:bg-gray-100"
            )}
          >
            <link.icon className="w-5 h-5" strokeWidth={2} />
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}