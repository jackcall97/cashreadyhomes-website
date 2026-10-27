import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database and notification modules
vi.mock("./db", () => ({
  createLead: vi.fn().mockResolvedValue(undefined),
  getPublishedBlogPosts: vi.fn().mockResolvedValue([
    {
      id: 1,
      title: "Test Post",
      slug: "test-post",
      excerpt: "Test excerpt",
      content: "Test content",
      metaTitle: "Test Meta Title",
      metaDescription: "Test meta description",
      category: "Seller Guides",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getBlogPostBySlug: vi.fn().mockResolvedValue({
    id: 1,
    title: "Test Post",
    slug: "test-post",
    excerpt: "Test excerpt",
    content: "Test content",
    metaTitle: "Test Meta Title",
    metaDescription: "Test meta description",
    category: "Seller Guides",
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }),
  countPublishedBlogPosts: vi.fn().mockResolvedValue(1),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid lead submission with SMS consent", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      propertyAddress: "123 Main St, Beacon, NY 12508",
      fullName: "John Doe",
      email: "john@example.com",
      phone: "9293565144",
      smsConsent: true,
      sourcePage: "/sell-my-house-fast-beacon-ny",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a valid lead submission without SMS consent", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      propertyAddress: "456 Oak Ave, Poughkeepsie, NY 12601",
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "8455551234",
      smsConsent: false,
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects a lead with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        propertyAddress: "123 Main St",
        fullName: "Test User",
        email: "not-an-email",
        phone: "9293565144",
        smsConsent: false,
      })
    ).rejects.toThrow();
  });

  it("rejects a lead with too-short address", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.leads.submit({
        propertyAddress: "123",
        fullName: "Test User",
        email: "test@example.com",
        phone: "9293565144",
        smsConsent: false,
      })
    ).rejects.toThrow();
  });
});

describe("blog.list", () => {
  it("returns a list of published blog posts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.list({ limit: 10, offset: 0 });
    expect(result.posts).toHaveLength(1);
    expect(result.total).toBe(1);
    expect(result.posts[0].title).toBe("Test Post");
  });
});

describe("blog.bySlug", () => {
  it("returns a blog post by slug", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.bySlug({ slug: "test-post" });
    expect(result.title).toBe("Test Post");
    expect(result.slug).toBe("test-post");
  });

  it("throws when slug not found", async () => {
    const { getBlogPostBySlug } = await import("./db");
    vi.mocked(getBlogPostBySlug).mockResolvedValueOnce(undefined);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.blog.bySlug({ slug: "nonexistent" })).rejects.toThrow("Post not found");
  });
});
