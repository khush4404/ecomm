"use client";

import { useState } from "react";
import AccountSidebar from "@/components/common/AccountSidebar";
import { Orders } from "@/components/account/Orders";
import { Addresses } from "@/components/account/Addresses";
import { GiftCards } from "@/components/account/GiftCards";
import { Privacy } from "@/components/account/Privacy";
import { Dashboard } from "@/components/account/Dashboard";
import { PaymentMethods } from "@/components/account/PaymentMethods";
import { Wishlist } from "@/components/account/Wishlist";
import Support from "@/components/common/Support";
import { Address } from "@/components/account/Addresses/Addresses";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("dashboard");

    // Move address list into page state so we can edit/add from AddressForm
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            name: "Thomas",
            streetAddress: "82754 Christopher Ferry",
            city: "Romaguerastad",
            state: "MT",
            postCode: "84320-6068",
            country: "",
            phone: "726 528 942",
        },
    ]);

    const [addressFormView, setAddressFormView] = useState<"list" | "form">("list");

    function handleTabChange(tab: string) {
        setActiveTab(tab);
        // Reset address form view to list when switching to addresses tab
        if (tab === "addresses") {
            setAddressFormView("list");
        }
    }

    function handleAddClick() {
        setAddressFormView("form");
    }

    function handleEditClick() {
        setAddressFormView("form");
    }

    function handleRemove(id: number) {
        setAddresses((prev) => prev.filter((p) => p.id !== id));
    }

    function handleSave(data: Omit<Address, "id"> & Partial<Pick<Address, "id">>) {
        if (data.id) {
            // Update existing address
            setAddresses((prev) =>
                prev.map((p) => (p.id === data.id ? { ...p, ...(data as Address) } : p))
            );
        } else {
            // Add new address
            const nextId = addresses.length ? Math.max(...addresses.map((s) => s.id)) + 1 : 1;
            setAddresses((prev) => [...prev, { ...(data as Address), id: nextId }]);
        }
        // Switch back to list view after saving
        setAddressFormView("list");
    }

    const contentComponents: Record<string, React.ReactNode> = {
        dashboard: <Dashboard />,
        orders: <Orders />,
        addresses: (
            <Addresses
                addresses={addresses}
                view={addressFormView}
                onViewChange={setAddressFormView}
                onAdd={handleAddClick}
                onEdit={handleEditClick}
                onRemove={handleRemove}
                onSave={handleSave}
            />
        ),
        paymentMethods: <PaymentMethods />,
        wishlist: <Wishlist />,
        giftCards: <GiftCards />,
        privacy: <Privacy />,
    }; return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 lg:gap-12.5">
                <h1 className="hidden lg:block text-3xl font-bold">Your Account</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-11.5">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <AccountSidebar activeTab={activeTab} onTabChange={handleTabChange} />
                    </aside>
                    <main className="lg:col-span-3">{contentComponents[activeTab]}</main>
                </div>
            </div>
            <Support />
        </div>
    );
}