import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const posts = [
  {
    title: "How to Sell Your House Fast in Hudson Valley NY: A Complete Guide",
    slug: "how-to-sell-house-fast-hudson-valley-ny",
    excerpt: "Discover the fastest ways to sell your house in the Hudson Valley, including cash buyers, iBuyers, and traditional agents. Learn which option is right for your situation.",
    category: "Selling Tips",
    metaTitle: "How to Sell Your House Fast in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Complete guide to selling your house fast in Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties. Compare cash buyers vs agents.",
    content: `## How to Sell Your House Fast in Hudson Valley NY

Selling a home in the Hudson Valley can feel overwhelming — especially if you need to move quickly. Whether you're facing foreclosure, going through a divorce, dealing with an inherited property, or simply need cash fast, this guide will walk you through your options.

## Option 1: Sell to a Cash Home Buyer

The fastest way to sell your house in the Hudson Valley is to work with a local cash buyer like Cash Ready Homes Hudson Valley. Here's what you can expect:

- Receive a cash offer within 24 hours
- No repairs, cleaning, or staging required
- Close in as little as 7 days
- Zero agent commissions or closing costs
- Guaranteed sale — no financing contingencies

This option is ideal if you need to sell quickly, your home needs significant repairs, or you want to avoid the hassle of traditional real estate.

## Option 2: List with a Real Estate Agent

Listing with an agent can sometimes yield a higher sale price, but it comes with significant trade-offs:

- Average time to close: 60–90+ days
- Agent commissions: 5–6% of sale price
- Closing costs: 2–3% paid by seller
- Repairs and staging often required
- No guarantee the sale will close

If your home is in excellent condition and you have plenty of time, this may be worth considering.

## Option 3: For Sale By Owner (FSBO)

Selling your home yourself can save on commissions, but it requires significant time and expertise. Most FSBO sellers in the Hudson Valley end up selling for less than they would with an agent.

## Which Option Is Right for You?

**Choose a cash buyer if:**
- You need to sell in 30 days or less
- Your home needs repairs you can't afford
- You're facing foreclosure or financial hardship
- You've inherited a property you don't want to manage
- You want a guaranteed, hassle-free sale

**Choose an agent if:**
- Your home is move-in ready
- You have 3–6 months to wait
- Maximizing sale price is your top priority

## The Hudson Valley Real Estate Market

The Hudson Valley real estate market has seen strong demand in recent years, driven by buyers from New York City seeking more space and affordability. Counties like Dutchess, Ulster, and Orange have seen significant price appreciation.

However, the market can vary significantly by town and condition. A distressed property in Newburgh will have a very different buyer pool than a renovated colonial in Chappaqua.

## Get Your Free Cash Offer Today

If you're ready to sell your Hudson Valley home fast and without the hassle, contact Cash Ready Homes Hudson Valley today. We buy houses in any condition across Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties.

Call us at (929) 356-5144 or fill out our online form to get a free, no-obligation cash offer within 24 hours.`,
  },
  {
    title: "What Happens to Your House During Foreclosure in New York State",
    slug: "foreclosure-process-new-york-state-house",
    excerpt: "Understanding the New York foreclosure process is critical if you're behind on your mortgage. Learn the timeline, your rights, and how to stop foreclosure before it's too late.",
    category: "Foreclosure",
    metaTitle: "NY Foreclosure Process Explained | How to Stop Foreclosure in Hudson Valley",
    metaDescription: "Learn how foreclosure works in New York State and what options you have to stop it. Cash Ready Homes Hudson Valley can help you sell fast before foreclosure.",
    content: `## What Happens to Your House During Foreclosure in New York State

New York is a judicial foreclosure state, meaning lenders must go through the court system to foreclose on a property. This process can take anywhere from 12 months to several years — but that doesn't mean you should wait.

## The New York Foreclosure Timeline

**Stage 1: Missed Payments (Month 1–3)**
After missing one or more mortgage payments, your lender will begin contacting you. This is the best time to explore your options, including loan modification, refinancing, or selling the property.

**Stage 2: Notice of Default (Month 3–6)**
After 90 days of missed payments, your lender can file a notice of default. You'll receive a 90-day pre-foreclosure notice, which is required by New York law.

**Stage 3: Foreclosure Filing (Month 6+)**
If you haven't resolved the default, your lender files a foreclosure lawsuit. You'll be served with a summons and complaint.

**Stage 4: Court Process (Month 12–36+)**
New York's judicial process can be lengthy. You have the right to respond to the lawsuit and attend settlement conferences. Many homeowners are able to negotiate during this phase.

**Stage 5: Judgment and Sale**
If the court rules in the lender's favor, a judgment of foreclosure is entered and the property is scheduled for auction.

## Your Options to Stop Foreclosure

- **Loan modification:** Ask your lender to modify the terms of your loan
- **Refinancing:** Replace your current mortgage with a new one
- **Forbearance:** Temporarily pause or reduce payments
- **Short sale:** Sell the home for less than what you owe (requires lender approval)
- **Sell to a cash buyer:** Sell quickly before the foreclosure is finalized

## How Selling to a Cash Buyer Can Stop Foreclosure

If you have equity in your home, selling to a cash buyer is often the fastest and most effective way to stop foreclosure. Here's why:

- We can close in 7–14 days — fast enough to stop most foreclosures
- You receive cash at closing and can pay off your mortgage
- Your credit is protected from a foreclosure judgment
- You avoid the stress and embarrassment of the foreclosure process

Cash Ready Homes Hudson Valley has helped dozens of homeowners in Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties avoid foreclosure by providing a fast, fair cash offer.

## Act Now — Time Is Critical

If you're behind on your mortgage, don't wait. The earlier you act, the more options you have. Contact us today at (929) 356-5144 for a free consultation and cash offer.`,
  },
  {
    title: "Selling an Inherited House in Hudson Valley: What You Need to Know",
    slug: "selling-inherited-house-hudson-valley-ny",
    excerpt: "Inherited a property in the Hudson Valley? Learn about probate, taxes, and the fastest way to sell an inherited house without the hassle.",
    category: "Inherited Property",
    metaTitle: "Selling Inherited Property in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Complete guide to selling an inherited house in Westchester, Dutchess, Orange or Ulster County NY. Learn about probate, taxes, and how to sell fast for cash.",
    content: `## Selling an Inherited House in Hudson Valley: What You Need to Know

Inheriting a property can be both a blessing and a burden. While the asset has real value, managing an inherited home — especially from a distance or while grieving — can be overwhelming. This guide will help you understand your options.

## Understanding Probate in New York

Before you can sell an inherited property in New York, the estate typically needs to go through probate — the legal process of validating the will and transferring ownership.

**Key facts about New York probate:**
- Small estates (under $50,000) may qualify for a simplified process
- Larger estates typically take 6–12 months to complete probate
- If there is no will, the estate goes through intestate succession
- Multiple heirs must all agree on the sale

## Tax Considerations for Inherited Property

**Step-up in basis:** When you inherit a property, your cost basis is "stepped up" to the fair market value at the time of death. This can significantly reduce your capital gains tax when you sell.

**Estate taxes:** New York has its own estate tax with an exemption of approximately $6.94 million (2024). Federal estate tax exemption is $13.61 million.

**Property taxes:** You'll be responsible for property taxes from the date you inherit the property. Make sure you understand any outstanding tax obligations.

## Your Options for Selling an Inherited Property

**Option 1: Sell As-Is to a Cash Buyer**
This is often the fastest and simplest option. Cash buyers like Cash Ready Homes Hudson Valley purchase properties in any condition, handle all paperwork, and can close quickly — even during probate in some cases.

**Option 2: Renovate and List**
If the property has significant equity and you have time and capital, renovating and listing with an agent may yield a higher price. However, this requires managing contractors, carrying costs, and months of uncertainty.

**Option 3: Rent the Property**
If the property is in good condition and you want ongoing income, renting is an option. However, becoming a landlord comes with its own challenges.

## Why Many Heirs Choose to Sell Fast

- Avoid ongoing maintenance and property tax obligations
- Eliminate carrying costs (utilities, insurance, taxes)
- Resolve estate matters quickly among multiple heirs
- Avoid the emotional burden of managing a deceased loved one's home
- Convert the asset to cash that can be divided easily

## We Specialize in Inherited Properties

Cash Ready Homes Hudson Valley has extensive experience working with estates and inherited properties across the Hudson Valley. We understand the legal complexity and emotional difficulty of these situations, and we work with compassion and efficiency to help you move forward.

Contact us at (929) 356-5144 for a free, no-obligation cash offer on your inherited property.`,
  },
  {
    title: "5 Reasons to Sell Your House for Cash Instead of Using an Agent in Hudson Valley",
    slug: "sell-house-cash-vs-agent-hudson-valley",
    excerpt: "Comparing cash home buyers vs real estate agents in the Hudson Valley? Here are 5 compelling reasons why selling for cash might be the smarter choice for your situation.",
    category: "Selling Tips",
    metaTitle: "Cash Buyer vs Real Estate Agent in Hudson Valley NY | Which Is Better?",
    metaDescription: "Should you sell to a cash buyer or use a real estate agent in the Hudson Valley? Compare costs, timelines, and stress levels to make the right decision.",
    content: `## 5 Reasons to Sell Your House for Cash Instead of Using an Agent in Hudson Valley

When it comes to selling your home in Westchester, Dutchess, or any other Hudson Valley county, you have choices. While listing with a real estate agent is the traditional route, cash home buyers offer a compelling alternative for many sellers. Here are five reasons why.

## Reason 1: Speed — Close in Days, Not Months

The average home sale in New York takes 60–90 days from listing to closing — and that's if everything goes smoothly. With a cash buyer, you can close in as little as 7 days.

For homeowners facing foreclosure, job relocation, divorce, or financial hardship, this speed can be life-changing.

## Reason 2: No Repairs or Renovations Required

Before listing with an agent, most sellers spend thousands of dollars on repairs, updates, and staging. In the Hudson Valley, where many homes are older, this can easily run $20,000–$50,000 or more.

Cash buyers purchase homes in any condition — no repairs, no cleaning, no staging. You leave what you want, take what you want, and we handle the rest.

## Reason 3: Zero Fees and Commissions

A traditional home sale in New York typically costs the seller:
- 5–6% in real estate agent commissions
- 2–3% in closing costs
- Additional costs for repairs, staging, and carrying costs

On a $400,000 home, that's $28,000–$36,000 out of your pocket before you see a dime.

With a cash buyer, there are no commissions, no closing costs, and no hidden fees. The offer you accept is the amount you receive.

## Reason 4: Certainty — No Financing Contingencies

One of the most frustrating aspects of traditional home sales is deals falling through. Approximately 5–7% of home sales fall through after going under contract, often due to financing issues.

Cash buyers don't need bank financing. When we make an offer, it's backed by actual cash. Your sale is guaranteed.

## Reason 5: Simplicity and Stress Reduction

Selling a home traditionally involves:
- Weeks of showings and open houses
- Negotiations and counteroffers
- Home inspections and appraisals
- Waiting for buyer financing approval
- Potential last-minute deal collapses

With a cash buyer, the process is simple: get an offer, accept it, pick a closing date, get paid. No showings, no negotiations, no stress.

## Is Selling for Cash Right for You?

Cash buyers typically offer below full market value — that's how the business model works. However, when you factor in the savings on repairs, commissions, closing costs, and carrying costs, many sellers find that the net proceeds are comparable to or better than a traditional sale.

If you value speed, certainty, and simplicity over maximizing every dollar, selling for cash is likely the right choice.

Contact Cash Ready Homes Hudson Valley at (929) 356-5144 to get your free cash offer today.`,
  },
  {
    title: "Hudson Valley Real Estate Market Update: What Sellers Need to Know in 2025",
    slug: "hudson-valley-real-estate-market-2025",
    excerpt: "The Hudson Valley real estate market continues to evolve. Here's what home sellers in Westchester, Dutchess, Orange, and surrounding counties need to know right now.",
    category: "Market Updates",
    metaTitle: "Hudson Valley Real Estate Market 2025 | What Sellers Need to Know",
    metaDescription: "Hudson Valley real estate market update for 2025. Learn about home prices, inventory, and selling conditions in Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties.",
    content: `## Hudson Valley Real Estate Market Update: What Sellers Need to Know in 2025

The Hudson Valley real estate market has undergone significant changes over the past few years. Here's a comprehensive look at current conditions and what they mean for homeowners considering selling.

## Overall Market Conditions

The Hudson Valley continues to attract buyers from New York City and beyond, drawn by relatively affordable prices, scenic landscapes, and improved remote work options. However, rising interest rates have cooled demand compared to the frenzied market of 2020–2022.

**Key market indicators:**
- Inventory remains below historical averages in most counties
- Days on market have increased from pandemic lows
- Price growth has moderated but remains positive in most areas
- Cash buyers remain active, particularly for distressed properties

## County-by-County Overview

**Westchester County**
Westchester remains one of the most expensive markets in the Hudson Valley, with median home prices well above $600,000. The county's proximity to New York City and excellent school districts continue to support strong demand.

**Dutchess County**
Dutchess has seen significant appreciation, particularly in areas like Rhinebeck, Red Hook, and the City of Poughkeepsie. The county offers a mix of rural charm and urban amenities.

**Orange County**
Orange County offers some of the most affordable options in the Hudson Valley, with median prices significantly below Westchester and Dutchess. Newburgh and Middletown are seeing increased investor activity.

**Putnam County**
Putnam remains a quieter market with strong demand from buyers seeking a suburban feel with easy access to both Westchester and Dutchess.

**Rockland County**
Rockland's proximity to New York City makes it one of the most competitive markets in the region. Inventory is extremely tight.

**Ulster County**
Ulster County, anchored by Kingston, has seen dramatic price appreciation and increased interest from creative professionals and remote workers.

## What This Means for Sellers

The current market presents both opportunities and challenges for sellers:

**Opportunities:**
- Inventory remains relatively low, supporting prices
- Cash buyers are active and motivated
- Demand from NYC-area buyers continues

**Challenges:**
- Higher interest rates have reduced the buyer pool
- Buyers are more selective and negotiating harder
- Homes that need work are sitting longer

## Should You Sell Now or Wait?

This is a personal decision that depends on your situation. If you need to sell quickly due to financial hardship, relocation, or other circumstances, waiting for market conditions to improve may not be an option.

If you have flexibility, the market is likely to remain stable in the near term, with modest price appreciation in most Hudson Valley counties.

For homeowners who need to sell quickly and without the hassle of the traditional market, Cash Ready Homes Hudson Valley offers a reliable alternative. Contact us at (929) 356-5144 for a free cash offer.`,
  },
  {
    title: "How to Sell a House With Problem Tenants in New York",
    slug: "sell-house-problem-tenants-new-york",
    excerpt: "Dealing with difficult tenants and want to sell your rental property? Learn your options as a landlord in New York, including how to sell with tenants in place.",
    category: "Landlord Tips",
    metaTitle: "Sell Rental Property With Tenants in New York | Hudson Valley Cash Buyers",
    metaDescription: "Learn how to sell a house with problem tenants in New York. Cash buyers can purchase your rental property with tenants in place — no eviction needed.",
    content: `## How to Sell a House With Problem Tenants in New York

New York has some of the strongest tenant protection laws in the country, which can make selling a rental property with difficult tenants a major challenge. This guide explains your options.

## Understanding New York Tenant Rights

New York tenants have significant legal protections, including:
- Strong eviction protections that can make the process lengthy and expensive
- Right to remain in the property during a sale if they have a valid lease
- Notice requirements before showing the property to buyers
- Anti-harassment protections

This means that as a landlord, you can't simply force tenants out to sell the property. You need to work within the legal framework.

## Your Options for Selling With Tenants

**Option 1: Wait for the Lease to Expire**
If your tenant has a fixed-term lease, you can wait until it expires and then either not renew or sell the vacant property. This is the cleanest option but may require waiting months or years.

**Option 2: Negotiate a Cash-for-Keys Agreement**
You can offer tenants a financial incentive to vacate voluntarily. This is often faster and less expensive than eviction. The amount depends on the situation, but $2,000–$10,000 is common in the Hudson Valley.

**Option 3: Sell With Tenants in Place**
Some buyers — particularly investors — will purchase properties with tenants already in place. This is often the fastest option if you need to sell quickly.

**Option 4: Eviction (Last Resort)**
If tenants are violating the lease terms, you may have grounds for eviction. However, New York's eviction process can take 6–18 months and is expensive. This should be a last resort.

## Why Cash Buyers Are the Best Option for Landlords With Problem Tenants

Cash buyers like Cash Ready Homes Hudson Valley regularly purchase properties with tenants in place. Here's why this works:

- We are experienced investors who know how to handle tenant situations
- We take on the responsibility of dealing with tenants after closing
- You receive cash quickly without waiting for tenant issues to resolve
- No need to go through the lengthy eviction process
- No need to show the property to multiple buyers (which tenants can resist)

## What We Need to Know

When you contact us about a property with tenants, we'll ask about:
- The current lease terms and expiration date
- Whether tenants are current on rent
- Any outstanding issues or violations
- The condition of the property

We can typically make an offer within 24 hours and close in 2–4 weeks, even with tenants in place.

## Don't Let Problem Tenants Trap You

Many landlords feel trapped by difficult tenants, especially in New York where tenant protections are strong. But you have options. Cash Ready Homes Hudson Valley has helped dozens of Hudson Valley landlords exit difficult rental situations quickly and profitably.

Call us at (929) 356-5144 for a free consultation and cash offer on your rental property.`,
  },
  {
    title: "Selling a Fire-Damaged House in Hudson Valley: Your Complete Guide",
    slug: "selling-fire-damaged-house-hudson-valley",
    excerpt: "Dealing with a fire-damaged property in the Hudson Valley? Learn your options — from insurance claims to selling as-is — and find out how cash buyers can help.",
    category: "Distressed Properties",
    metaTitle: "Sell Fire Damaged House Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Learn how to sell a fire-damaged house in Westchester, Dutchess, Orange or Ulster County NY. Cash buyers purchase fire-damaged properties as-is, fast.",
    content: `## Selling a Fire-Damaged House in Hudson Valley: Your Complete Guide

Experiencing a house fire is traumatic. Once the immediate crisis is over, you're left with a damaged property and difficult decisions to make. This guide will help you understand your options.

## Step 1: Work With Your Insurance Company

Before making any decisions about selling, contact your homeowner's insurance company. Depending on your policy, you may be entitled to:
- Cost of repairs or replacement
- Additional living expenses while the home is uninhabitable
- Personal property replacement

Document all damage thoroughly with photos and videos before any cleanup begins.

## Step 2: Get a Professional Assessment

Have a licensed contractor or structural engineer assess the extent of the damage. This will help you understand:
- Whether the structure is salvageable
- The estimated cost of repairs
- Whether it's more cost-effective to repair or sell as-is

## Your Options After a House Fire

**Option 1: Repair and Keep or Sell**
If the damage is limited and your insurance covers most of the repair costs, repairing the home may make financial sense. However, fire repairs are complex and can take 6–18 months.

**Option 2: Sell As-Is to a Cash Buyer**
Many homeowners choose to sell their fire-damaged property as-is, especially if:
- The damage is extensive
- They don't want to manage a lengthy renovation
- They need cash quickly
- The insurance payout doesn't cover full repair costs

**Option 3: Demolish and Sell the Land**
In some cases, particularly if the structure is a total loss, it may make sense to demolish the building and sell the land.

## Why Cash Buyers Are Ideal for Fire-Damaged Properties

Traditional buyers and their mortgage lenders typically won't finance a fire-damaged property. This severely limits your buyer pool if you try to sell through a real estate agent.

Cash buyers like Cash Ready Homes Hudson Valley purchase fire-damaged properties regularly. We:
- Buy in any condition, including fire damage
- Don't require repairs or cleanup
- Can close quickly — often within 2–3 weeks
- Handle all the complexity of buying a distressed property

## Tax Considerations

If you sell a fire-damaged property, you may have tax implications related to:
- Insurance proceeds received
- Capital gains on the sale
- Casualty loss deductions

Consult with a tax professional before finalizing any sale.

## We Buy Fire-Damaged Houses in the Hudson Valley

Cash Ready Homes Hudson Valley has purchased fire-damaged properties across Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties. We understand the unique challenges of these situations and work quickly to help you move forward.

Call us at (929) 356-5144 for a free, no-obligation cash offer on your fire-damaged property.`,
  },
  {
    title: "Divorce and Your House: Options for Selling Quickly in the Hudson Valley",
    slug: "selling-house-divorce-hudson-valley-ny",
    excerpt: "Going through a divorce and need to sell your house in the Hudson Valley? Learn your options, understand the legal process, and find out how to sell fast with minimal conflict.",
    category: "Divorce",
    metaTitle: "Selling House During Divorce in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Learn how to sell your house quickly during a divorce in Westchester, Dutchess, Orange or Ulster County NY. Cash buyers offer a fast, conflict-free solution.",
    content: `## Divorce and Your House: Options for Selling Quickly in the Hudson Valley

Divorce is one of life's most difficult experiences, and the family home is often the most contentious asset to divide. This guide will help you understand your options for handling the house during a divorce in New York.

## New York Divorce and Property Division

New York is an "equitable distribution" state, meaning marital property is divided fairly — but not necessarily equally. The family home is typically considered marital property if it was purchased during the marriage, regardless of whose name is on the deed.

**Common outcomes for the family home in divorce:**
- Both spouses agree to sell and split the proceeds
- One spouse buys out the other's equity
- One spouse keeps the home (often the custodial parent)
- The court orders a sale if spouses can't agree

## Option 1: Sell the House and Split the Proceeds

This is often the cleanest and fastest resolution. Both spouses receive their share of the equity and can move on independently. The challenge is agreeing on a sale price and timeline.

## Option 2: One Spouse Buys Out the Other

If one spouse wants to keep the home, they can refinance the mortgage in their name and pay the other spouse their share of the equity. This requires the keeping spouse to qualify for a mortgage on their own.

## Option 3: Sell to a Cash Buyer for Speed and Simplicity

When divorcing spouses need to sell quickly and want to minimize ongoing conflict, a cash buyer offers significant advantages:

- Fast closing (7–30 days) means you can finalize the divorce sooner
- No need to agree on repairs, staging, or showing schedules
- No drawn-out negotiations with traditional buyers
- Certainty — the sale won't fall through due to financing
- Less ongoing contact between spouses required

## Practical Tips for Selling During Divorce

**Get legal advice first.** Before agreeing to any sale, consult with your divorce attorney. The proceeds may need to be handled in a specific way as part of your divorce settlement.

**Agree on the basics.** Even if you're not getting along, you'll need to agree on the asking price, who handles the sale, and how proceeds will be distributed.

**Consider a neutral third party.** A cash buyer can sometimes act as a neutral party that both spouses deal with separately, reducing direct conflict.

**Move quickly.** The longer the house sits on the market, the more carrying costs accumulate — costs that come out of both spouses' equity.

## We Help Divorcing Couples Sell Fast

Cash Ready Homes Hudson Valley has helped many divorcing couples in the Hudson Valley sell their homes quickly and fairly. We understand the sensitivity of these situations and work with both parties professionally and discreetly.

We can close in as little as 7 days, which means you can finalize your divorce and move forward with your life sooner.

Call us at (929) 356-5144 for a free, confidential consultation and cash offer.`,
  },
];

async function main() {
  const connection = await mysql.createConnection(DATABASE_URL);
  const db = drizzle(connection);

  console.log("Seeding blog posts...");

  for (const post of posts) {
    try {
      await connection.execute(
        `INSERT INTO blog_posts (title, slug, excerpt, content, metaTitle, metaDescription, published, category, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, 1, ?, NOW(), NOW())
         ON DUPLICATE KEY UPDATE title = title`,
        [post.title, post.slug, post.excerpt, post.content, post.metaTitle, post.metaDescription, post.category]
      );
      console.log(`✓ Seeded: ${post.title}`);
    } catch (err) {
      console.error(`✗ Failed: ${post.title}`, err.message);
    }
  }

  await connection.end();
  console.log("Done!");
}

main().catch(console.error);
