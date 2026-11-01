/**
 * Optional deep content for priority city pages.
 * Keep local facts verifiable; do not invent prices, review counts, or testimonials.
 */

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityLink {
  href: string;
  label: string;
}

export interface CityPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opener shown near the top (target ~120–180 words). */
  opener: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqItems: CityFaq[];
  internalLinks: CityLink[];
  nearbyCityLinks: CityLink[];
}

export const cityPageContent: Record<string, CityPageContent> = {
  poughkeepsie: {
    metaTitle: "Sell My House Fast in Poughkeepsie NY | Cash Offer, As-Is",
    metaDescription:
      "Sell your house fast in the City or Town of Poughkeepsie, NY. Cash Ready Homes buys as-is for cash, closes on your timeline with a NY attorney and title, and charges no realtor commissions.",
    h1: "Sell Your House Fast in Poughkeepsie, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Poughkeepsie — both the City of Poughkeepsie and the surrounding Town of Poughkeepsie in Dutchess County. If you need to sell without repairs, showings, or a long listing, we review your property and present a cash offer you can accept or decline. We buy as-is, including older homes that need work, rentals with tenants in place, vacant houses, and estate properties. Closings are coordinated with a New York real estate attorney and a title company, and you choose the timeline that fits your situation. There are no realtor commissions and no fees charged by us. Whether your mailing address says Poughkeepsie but your tax bill is City or Town, we buy throughout both municipalities.",
    sections: [
      {
        heading: "City of Poughkeepsie vs. Town of Poughkeepsie",
        paragraphs: [
          "“Poughkeepsie” covers two separate local governments. The City of Poughkeepsie sits on the Hudson River and is Dutchess County’s county seat. The Town of Poughkeepsie surrounds the city and includes unincorporated communities such as Arlington, Fairview, Spackenkill, Red Oaks Mill, Rochdale, and New Hamburg. Each has its own municipal hall, courts, and tax bills — City Hall is associated with Civic Center Plaza in the city, while Town Hall is on Overocker Road — so a Poughkeepsie mailing address alone does not tell you which government serves the parcel.",
          "That distinction matters when you sell. Zoning, building permits, and some utilities differ by municipality, and buyers (including cash buyers) need clear title recorded with the Dutchess County Clerk. We buy houses in both the City and the Town and work through the same New York attorney-and-title closing process either way.",
        ],
      },
      {
        heading: "Housing stock and common selling situations",
        paragraphs: [
          "Poughkeepsie’s housing stock ranges from older urban blocks in the city to suburban and riverside neighborhoods in the town. Many homes are decades old and may need updates to kitchens, systems, or exteriors before they compete on the open market. Sellers also come to us with multi-family buildings, tenant-occupied rentals, vacant houses, inherited properties, and homes tied up in probate.",
          "For estate sales in Dutchess County, probate and administration generally run through Dutchess County Surrogate’s Court in Poughkeepsie (Market Street). An executor or administrator typically needs court-issued letters before conveying estate real estate. Deeds and mortgages for Dutchess County properties are recorded with the Dutchess County Clerk at 22 Market Street in Poughkeepsie, which also offers online document search and eRecording for submitters. We coordinate with estate counsel and title so the closing tracks those requirements — without asking you to renovate first.",
        ],
      },
      {
        heading: "Commuting, campuses, and why sellers want certainty",
        paragraphs: [
          "Poughkeepsie is a regional hub: U.S. Route 9 meets U.S. 44 / N.Y. 55 in the area, and Metro-North’s Hudson Line terminates at the Poughkeepsie station (with Amtrak service at the same station). The Town of Poughkeepsie also includes the New Hamburg Metro-North stop. Nearby campuses — including Vassar College, Marist College, and Dutchess Community College — and landmarks such as the Walkway Over the Hudson shape local demand, but they do not remove the friction of traditional sales when a house needs work, tenants are in place, or an estate needs a clean close.",
          "If listing, repairs, and open houses are not realistic, a direct cash sale can be simpler. Tell us about the property, receive a cash offer, and pick a closing date that works with your attorney and the title company. Learn the full steps on our how-it-works page, or start with Dutchess County coverage if you are comparing options across the county.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy houses in both the City and the Town of Poughkeepsie?",
        answer:
          "Yes. Cash Ready Homes Hudson Valley buys houses in the City of Poughkeepsie and throughout the Town of Poughkeepsie, including areas such as Arlington, Fairview, Spackenkill, Red Oaks Mill, and New Hamburg. Confirm which municipality is on your tax bill — we buy in both.",
      },
      {
        question: "Can you buy a Poughkeepsie house that is in probate or was inherited?",
        answer:
          "Yes. We regularly work with inherited and probate properties in Dutchess County. Estate sales usually require authority from Dutchess County Surrogate’s Court in Poughkeepsie (Letters Testamentary or Letters of Administration) before the fiduciary can convey title. We coordinate with the estate’s attorney and title company and buy the property as-is.",
      },
      {
        question: "Do I need to make repairs or move tenants out before selling?",
        answer:
          "No. We buy Poughkeepsie houses as-is. You do not need to renovate, clean out, or complete an eviction before closing. Tenant-occupied rentals and vacant houses are both eligible for a cash offer.",
      },
      {
        question: "How does a cash closing work in New York for a Poughkeepsie property?",
        answer:
          "After you accept an offer, closing is handled with a New York real estate attorney and a title company. The deed is recorded with the Dutchess County Clerk in Poughkeepsie. You choose a closing timeline that fits your situation — we do not charge realtor commissions or fees from us.",
      },
      {
        question: "How fast can I get a cash offer on my Poughkeepsie home?",
        answer:
          "Share basic property details through our form or by phone and we aim to present a cash offer within 24 hours. There is no obligation to accept. If you move forward, you pick the closing date.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-dutchess-county-ny", label: "Sell a house fast in Dutchess County" },
      { href: "/how-it-works", label: "How our cash sale process works" },
      { href: "/situations/probate", label: "Sell a probate property" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/bad-tenants", label: "Sell a rental with tenants" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
      { href: "/situations/as-is", label: "Sell your house as-is" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-fishkill-ny", label: "Fishkill" },
      { href: "/sell-my-house-fast-beacon-ny", label: "Beacon" },
      { href: "/sell-my-house-fast-wappingers-falls-ny", label: "Wappingers Falls" },
      { href: "/sell-my-house-fast-hyde-park-ny", label: "Hyde Park" },
    ],
  },

  fishkill: {
    metaTitle: "Sell My House Fast in Fishkill NY | Town & Village Cash Buyers",
    metaDescription:
      "Sell your house fast in the Town or Village of Fishkill, NY. Local cash buyer for as-is homes near I-84 and Beacon. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Fishkill, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Fishkill, Dutchess County — covering both the Town of Fishkill and the incorporated Village of Fishkill. We are a local cash home buyer: you tell us about the property, we present a cash offer, and if you accept we close on your schedule with a New York real estate attorney and title company. Homes can be sold as-is, including houses that need repairs, vacant properties, rentals with tenants, and estate situations. We do not charge realtor commissions or fees from us. Fishkill’s split between town and village government, I-84 access, and proximity to Beacon’s Metro-North station make the area convenient for many households — and a direct cash sale can be the simplest path when a traditional listing is not.",
    sections: [
      {
        heading: "Town of Fishkill vs. Village of Fishkill",
        paragraphs: [
          "Fishkill is two municipalities that share a name. The Town of Fishkill is the larger surrounding government (Town Hall on Route 52). The Village of Fishkill is a separate incorporated village inside the town (Village Hall / Van Wyck Hall on Main Street). Village residents generally pay village taxes in addition to town, county, and school taxes. Zoning, building, and water/sewer questions depend on whether the parcel sits in the village or only in the town — confirm on your tax bill or Dutchess County parcel records before assuming “Fishkill” means one office.",
          "We buy houses in both the Town and the Village. Title still records at the county level with the Dutchess County Clerk in Poughkeepsie, and closings still run through a New York attorney and title company either way.",
        ],
      },
      {
        heading: "I-84, Route 9, schools, and commuting context",
        paragraphs: [
          "Southern Dutchess Fishkill sits near the interchange of Interstate 84 with U.S. Route 9 and N.Y. Route 52, with Route 9D along the Hudson Highlands edge. The Town of Fishkill surrounds the City of Beacon and borders East Fishkill and Wappinger. There is no everyday Metro-North station inside the Village or Town of Fishkill; many residents use the Beacon Hudson Line station (and related local transit connections) for trips toward New York City.",
          "School assignment is not one-size-fits-all. Parts of the Town of Fishkill are served by the Wappingers Central School District; other areas, especially toward the Route 9D / Beacon side, are associated with the Beacon City School District. A Fishkill mailing address can also overlap with neighboring postal names. When you sell, what matters for us is the property condition and clear title — not whether the house would need cosmetic work to list.",
        ],
      },
      {
        heading: "What kinds of Fishkill houses we buy",
        paragraphs: [
          "Local housing includes village and Main Street–area homes, suburban neighborhoods along the Route 9 and Route 52 corridors, and more rural or Highlands-edge properties toward Route 9D, plus hamlets such as Glenham and Brinckerhoff within the town. Sellers contact us when a house needs major repairs, when tenants make a traditional sale difficult, when a property is vacant, or when an inherited home must be sold through Dutchess County Surrogate’s Court processes in Poughkeepsie.",
          "You do not need to renovate, stage, or wait out a long listing. Get a cash offer, choose a closing date, and let attorney and title handle the paperwork. For county-wide options see our Dutchess hub; for process details see how it works.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Is the Town of Fishkill the same as the Village of Fishkill?",
        answer:
          "No. The Village of Fishkill is an incorporated village inside the Town of Fishkill, with its own village government and hall on Main Street. The Town of Fishkill is the larger municipality with Town Hall on Route 52. We buy houses in both.",
      },
      {
        question: "Do you buy Fishkill houses that need repairs or are vacant?",
        answer:
          "Yes. We buy Fishkill properties as-is — including homes that need structural or cosmetic work, vacant houses, and properties that would be hard to show. No repairs are required before closing.",
      },
      {
        question: "Can I sell a Fishkill rental with tenants still living there?",
        answer:
          "Yes. We can purchase tenant-occupied houses in the Town or Village of Fishkill. You do not have to complete an eviction or wait for a lease to end before requesting a cash offer.",
      },
      {
        question: "How do Fishkill cash closings work with New York attorneys?",
        answer:
          "Accepted offers close with a New York real estate attorney and a title company. Dutchess County deeds are recorded with the County Clerk in Poughkeepsie. You choose the closing timeline; we do not charge realtor commissions or fees from us.",
      },
      {
        question: "Where do Fishkill residents usually catch Metro-North?",
        answer:
          "There is no Metro-North station inside the Town or Village of Fishkill. Many area residents use the Beacon station on Metro-North’s Hudson Line. That commute pattern is common locally, but it does not change how a cash sale works — we still buy based on the property and clear title.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-dutchess-county-ny", label: "Dutchess County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
      { href: "/situations/bad-tenants", label: "Sell with tenants in place" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/probate", label: "Probate house sale" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-beacon-ny", label: "Beacon" },
      { href: "/sell-my-house-fast-wappingers-falls-ny", label: "Wappingers Falls" },
      { href: "/sell-my-house-fast-poughkeepsie-ny", label: "Poughkeepsie" },
      { href: "/sell-my-house-fast-hyde-park-ny", label: "Hyde Park" },
    ],
  },
};

export function getCityPageContent(slug: string): CityPageContent | undefined {
  return cityPageContent[slug];
}
