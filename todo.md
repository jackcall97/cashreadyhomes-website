# Cash Ready Homes Hudson Valley — Project TODO

## Foundation
- [x] Database schema: leads table, blog_posts table
- [x] Global CSS theme: navy/yellow brand colors, Inter font
- [x] Global layout component: header nav + footer
- [x] App.tsx routes for all pages

## Homepage
- [x] Hero section: dark navy bg, yellow CTA, headline, lead form
- [x] 3-step process section
- [x] Benefits grid (No Repairs, No Waiting, Transparency, Easy Process, Dedicated Specialists)
- [x] Stats bar (homes bought, years experience)
- [x] Before/after photo carousel
- [x] Comparison table (cash offer vs. traditional agent)
- [x] About section
- [x] Second lead form at bottom

## Lead Form & Notifications
- [x] Lead capture form: address, name, email, phone, SMS consent checkbox
- [x] tRPC mutation to save lead to DB
- [x] Owner email notification on every lead submission (notifyOwner)

## Core Pages
- [x] About page with founder story, Google Reviews section
- [x] FAQ page (featured snippet optimized)
- [x] Contact page with form
- [x] How It Works page

## Blog System
- [x] blog_posts table in DB
- [x] Blog index page (/blog/)
- [x] Blog post page (/blog/[slug]/)
- [x] 8 initial SEO-optimized blog posts seeded to DB
- [x] Weekly automated AI blog post cron (Heartbeat + LLM)
- [x] /api/scheduled/generate-blog-post handler

## City/Town Landing Pages (51 total)
- [x] City page template component
- [x] Westchester county cities (13 pages)
- [x] Dutchess county cities (8 pages)
- [x] Orange county cities (9 pages)
- [x] Putnam county cities (5 pages)
- [x] Rockland county cities (6 pages)
- [x] Ulster county cities (8 pages) + 2 extra = 51 total

## County Hub Pages (6)
- [x] /sell-my-house-fast-westchester-county-ny/
- [x] /sell-my-house-fast-dutchess-county-ny/
- [x] /sell-my-house-fast-orange-county-ny/
- [x] /sell-my-house-fast-putnam-county-ny/
- [x] /sell-my-house-fast-rockland-county-ny/
- [x] /sell-my-house-fast-ulster-county-ny/

## Situation Pages (8)
- [x] /situations/foreclosure
- [x] /situations/inherited-property
- [x] /situations/divorce
- [x] /situations/bad-tenants
- [x] /situations/probate
- [x] /situations/fire-damage
- [x] /situations/vacant-house
- [x] /situations/as-is

## SEO
- [x] Unique meta title + description per page (SEO component)
- [x] LocalBusiness JSON-LD schema on homepage
- [x] Open Graph tags on all pages
- [x] sitemap.xml (auto-generated, includes all city/county/blog pages)
- [x] robots.txt

## Mobile & Polish
- [x] Mobile responsive throughout
- [x] Active states on nav links
- [x] Smooth scroll behavior
- [x] Form validation with error messages

- [x] Integrate company logo (CashReadyHomeslogo.png) into header/nav
- [x] Add real before/after photos (living room pair + kitchen pair) to homepage carousel
- [x] Change all "Close in 7 days" wording to "Close in less than 30 days"
- [x] Remove all "200+ homes purchased" language from the site
- [x] Rebrand color scheme from navy/yellow to forest green/white/yellow (#1e4d1e primary, #F5C518 CTA buttons)
- [x] Add "Cash Ready Homes Hudson Valley" text next to logo in header and footer
- [x] Replace low-res hero background image with high-quality Bear Mountain Bridge / Hudson Valley panoramic photo (3000×1685px from Unsplash)
- [x] Fix city/county page routing — regexparam doesn't support mid-segment params like /sell-my-house-fast-:city-ny, need to use a catch-all route handler instead
- [x] Fix About page placeholder founder photo section — removed placeholder, converted to clean centered text layout
- [x] Full pre-launch review of all pages — all pages verified, routing fixed, no remaining blockers
- [x] Add Privacy Policy and Terms of Use pages (footer links currently 404)
- [x] Remove "purchased over 200 homes" claim from FAQ.tsx
- [x] Fix React missing-key warning in HowItWorks.tsx
- [x] Set logo as favicon (browser tab icon) — generated favicon.ico + apple-touch-icon from CashReadyHomeslogo.png
- [x] Update header logo icon to full color logo (replacing small placeholder icon)
- [x] Fix form input text color to white on dark backgrounds (inline/dark variant)
- [x] Integrate REsimpli CRM — POST to live-api.resimpli.com/api/v4/webForm/createLead on every lead form submission
- [x] Fix REsimpli name field not transferring — confirmed ownerName1 is correct, was already in code, blank name was from pre-fix test submission
- [x] Add SOLD house photo to About page — added "Real Results" section with the SOLD property photo
- [x] Remove "Living Room Renovation" and "Kitchen Renovation" labels from homepage Before/After section
- [x] Update header/footer logo to new crisp version (Gemini_Generated_Image_66kyfq66kyfq66ky.png)
- [x] Fix comparison table text readability (green-on-green text in Cash Ready Homes column)
- [x] Fix footer links to scroll to top of page when navigating
- [x] Remove "Google Reviews" / "on Google" labels from testimonials section
- [x] Replace Kingston review with Yorktown Heights review
- [x] Remove "Licensed and insured" line from About page
- [x] Update contact email to jack@cashreadyhomeshudsonvalley.com site-wide
- [x] Add authentic photos to each blog post
- [x] Add FAQPage schema to all city pages (51 pages)
- [x] Add FAQPage schema to all county pages (6 pages)
- [x] Add Article schema to all blog posts (9 posts)
- [x] Rewrite top 10 city pages with unique local content (White Plains, Poughkeepsie, Newburgh, Yonkers, Spring Valley, Kingston, Middletown, Mount Vernon, New Rochelle, Peekskill)
- [x] Create /we-buy-houses-hudson-valley-ny landing page
- [x] Internal linking: footer links to new landing page, new page links to all county hubs and situation pages
- [x] Image alt text: all key images have descriptive alt text
- [x] Verify sitemap.xml includes all city, county, blog, and situation pages; added /we-buy-houses-hudson-valley-ny with priority 0.9
- [x] Add 301 redirects for old website URLs: /city/:slug → county/city pages, /contact-us → /contact, /about-us → /about, /faqs → /faq
- [x] Resolve Search Console legacy URL issues: removed /blog self-redirect loop and added redirects for /feed/ and old cash-sale article
- [ ] Connect the bare cashreadyhomeshudsonvalley.com domain to the Manus site and redirect it to www
