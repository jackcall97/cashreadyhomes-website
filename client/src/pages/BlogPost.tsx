import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { getPostBySlug } from "@/lib/blog";
import NotFound from "@/pages/NotFound";

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

// Render markdown content — handles ##/###/#### headings, */-/+ lists, **bold** inline, and plain paragraphs
function renderInline(text: string): React.ReactNode {
  // Replace **bold** with <strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    // H2
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-[#1a3d1a] font-black text-2xl mt-10 mb-4">{renderInline(line.slice(3))}</h2>);
    // H3
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-[#1a3d1a] font-black text-xl mt-8 mb-3">{renderInline(line.slice(4))}</h3>);
    // H4 (#### Pros: / #### Cons: etc)
    } else if (line.startsWith("#### ")) {
      elements.push(<h4 key={i} className="text-[#1a3d1a] font-bold text-lg mt-6 mb-2">{renderInline(line.slice(5))}</h4>);
    // Unordered list items: *, -, or +
    } else if (/^[*\-+] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[*\-+] /.test(lines[i].trim())) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#F5C518] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    // Numbered list items: 1. 2. etc
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 text-gray-700">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    // Whole-line bold (legacy format)
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(<p key={i} className="text-[#1a3d1a] font-bold text-lg my-4">{line.slice(2, -2)}</p>);
    // Regular paragraph
    } else {
      elements.push(<p key={i} className="text-gray-700 leading-relaxed my-4">{renderInline(line)}</p>);
    }
    i++;
  }
  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug ?? "");
  const isLoading = false;
  if (!post) return <NotFound />;
  const error = null;

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#F5C518] border-t-transparent rounded-full mx-auto" />
        </div>
      </SiteLayout>
    );
  }

  if (error || !post) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="text-[#1a3d1a] font-black text-3xl mb-4">Post Not Found</h1>
          <Link href="/blog" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metaTitle || post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.featuredImage ? `https://cashreadyhomeshudsonvalley.com${post.featuredImage}` : undefined,
    "datePublished": new Date(post.createdAt).toISOString(),
    "dateModified": new Date(post.updatedAt ?? post.createdAt).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Cash Ready Homes Hudson Valley",
      "url": "https://cashreadyhomeshudsonvalley.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cash Ready Homes Hudson Valley",
      "url": "https://cashreadyhomeshudsonvalley.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cashreadyhomeshudsonvalley.com/manus-storage/logo-icon-crisp_222c6ff1.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cashreadyhomeshudsonvalley.com/blog/${post.slug}`,
    },
  };

  return (
    <SiteLayout>
      <SEOHead
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.featuredImage || undefined}
        ogType="article"
        publishedTime={new Date(post.createdAt).toISOString()}
        schema={articleSchema}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-16">
        <div className="container max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          {post.category && (
            <span className="inline-block text-xs font-bold text-[#1a3d1a] bg-[#F5C518] px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-white font-black text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readingTime(post.content)} min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="w-full h-72 lg:h-96 overflow-hidden">
          <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose max-w-none">
                {renderContent(post.content)}
              </div>

              {/* CTA at bottom of article */}
              <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: "#1a3d1a" }}>
                <h3 className="text-white font-black text-xl mb-2">Ready to Sell Your Hudson Valley Home?</h3>
                <p className="text-gray-400 text-sm mb-4">Get a free cash offer in 24 hours. No repairs, no fees, no commissions.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#get-offer" className="btn-yellow px-5 py-2.5 rounded-lg font-bold text-sm inline-flex items-center gap-2">
                    Get Cash Offer <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+19293565144" className="px-5 py-2.5 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors">
                    Call (929) 356-5144
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm
                  variant="inline"
                  sourcePage={`/blog/${post.slug}`}
                  headline="Get a Free Cash Offer"
                  subheadline="No obligation. Close in less than 30 days."
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
