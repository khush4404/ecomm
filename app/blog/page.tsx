import { BlogCategories } from "@/components/BlogList/BlogCategories";
import { BlogHero } from "@/components/BlogList/BlogHero";
import { RecentBlogs } from "@/components/BlogList/RecentBlogs";
import { VideoLatestEvent } from "@/components/BlogList/VideoLatestEvent";
import Support from "@/components/common/Support";

export default function BlogListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHero />
      <BlogCategories />
      <VideoLatestEvent />
      <RecentBlogs />
      <Support />
    </div>
  );
}
