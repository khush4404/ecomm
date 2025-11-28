import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/common/Header";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import "./globals.css";
import Navbar from "@/components/common/Header/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcommStore - Your One-Stop Shop for Quality Products",
  description:
    "Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods, and more with fast shipping and excellent customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* <Header /> */}
        <Navbar />
        {/* Join Banner - Mobile Only */}
        <div className="w-full bg-[#F0BA43] py-3 lg:hidden">
          <div className="max-w-[1440px] mx-auto px-4">
            <p
              className="text-center text-base sm:text-lg font-medium tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="text-[#1D1D1D]">Join </span>
              <span className="text-white">Passion farms !</span>
            </p>
          </div>
        </div>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
