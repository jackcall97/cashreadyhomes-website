import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import { trpc } from "@/lib/trpc";

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readingTime(content: string) {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function Blog() {
  const { data, isLoading } = trpc.blog.list.useQuery({ limit: 20, offset: 0 });

  return (
    <SiteLayout>
      <SEOHead
        title="Blog — Hudson Valley Real Estate Tips & Advice | Cash Ready Homes"
        description="Read expert tips on selling your house fast in the Hudson Valley. Articles on foreclosure, probate, cash sales, and the Hudson Valley real estate market."
        canonical="/blog"
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Real Estate Insights</p>
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-6">Hudson Valley Real Estate Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert tips, market insights, and practical advice for homeowners in Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-6 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : !data?.posts?.length ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-[#1a3d1a] font-black text-2xl mb-3">Blog Posts Coming Soon</h2>
              <p className="text-gray-500">We're working on helpful articles for Hudson Valley homeowners. Check back soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden" style={{ backgroundColor: "#1a3d1a" }}>
                    {post.featuredImage ? (
                      <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">🏠</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readingTime(post.content)} min read
                      </span>
                    </div>
                    {post.category && (
                      <span className="inline-block text-xs font-bold text-[#1a3d1a] bg-[#F5C518]/20 px-2 py-0.5 rounded mb-2">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-[#1a3d1a] font-black text-lg leading-snug mb-3 group-hover:text-[#F5C518] transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                    )}
                    <span className="text-[#F5C518] font-bold text-sm flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
