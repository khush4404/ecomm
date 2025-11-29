import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Allow external image hosts used in the forum sample data (e.g. Unsplash)
	images: {
		domains: ["images.unsplash.com"],
	},
};

export default nextConfig;
