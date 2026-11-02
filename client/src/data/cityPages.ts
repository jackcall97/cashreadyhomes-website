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

  beacon: {
    metaTitle: "Sell My House Fast in Beacon NY | Cash Offer Near Metro-North",
    metaDescription:
      "Sell your house fast in Beacon, NY. Cash Ready Homes buys as-is homes in this Dutchess River City near Metro-North and Main Street. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Beacon, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Beacon, Dutchess County — a Hudson River city with Metro-North Hudson Line service and a downtown Main Street corridor shaped by arts and adaptive reuse. We are a local cash home buyer: share details about your property, receive a cash offer, and if you accept we close on your schedule with a New York real estate attorney and a title company. We buy houses as-is, including older industrial-era homes that need work, vacant properties, rentals with tenants, and estate situations. There are no realtor commissions and no fees charged by us. When listing, repairs, and showings are not realistic — whether the house is near the riverfront, Main Street, or a quieter residential block — a direct cash sale can be the simpler path.",
    sections: [
      {
        heading: "Beacon’s river city setting and housing stock",
        paragraphs: [
          "Beacon sits on the east bank of the Hudson River in southern Dutchess County, at the foot of Mount Beacon. The City of Beacon was incorporated in 1913 from the former villages of Matteawan and Fishkill Landing (plus a small portion of Glenham from the Town of Fishkill). The city’s manufacturing past — including a long hat-making era — left a stock of older houses and former industrial buildings. Adaptive reuse is visible around the riverfront, including Dia Beacon, which opened in 2003 in a former Nabisco box-printing factory listed on the National Register of Historic Places.",
          "Sellers here often deal with deferred maintenance on older homes, multi-unit buildings, vacant houses, or inherited property. We buy those situations as-is and do not require renovations before closing. Deeds for Dutchess County properties are recorded with the Dutchess County Clerk in Poughkeepsie; estate matters often involve Dutchess County Surrogate’s Court when letters are required to convey title.",
        ],
      },
      {
        heading: "Metro-North, Main Street, and why certainty matters",
        paragraphs: [
          "Beacon Station on Metro-North’s Hudson Line connects the city with Grand Central Terminal and other Hudson Line stops; Dia Beacon publishes that the museum is roughly an 8–10 minute walk from the station. Main Street and nearby galleries draw visitors, but visitor traffic does not remove the friction of a traditional sale when a house needs major work, tenants are in place, or an estate needs a clean close on a fixed timeline.",
          "Tell us about the Beacon property, review a cash offer with no obligation, and pick a closing date that works with your attorney and title company. For county-wide coverage see our Dutchess hub; for process steps see how it works. Nearby communities we also serve include Fishkill, Wappingers Falls, and Cold Spring.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy Beacon houses that need major repairs?",
        answer:
          "Yes. We buy Beacon properties as-is, including older homes and buildings that need structural or cosmetic work. You do not need to renovate or stage before closing.",
      },
      {
        question: "Can I sell a Beacon rental with tenants still living there?",
        answer:
          "Yes. Tenant-occupied Beacon houses can qualify for a cash offer. You do not have to finish an eviction or wait for a lease to end before contacting us.",
      },
      {
        question: "How does a cash closing work for a Beacon property?",
        answer:
          "After you accept an offer, closing is coordinated with a New York real estate attorney and a title company. Dutchess County deeds record with the County Clerk in Poughkeepsie. You choose the closing timeline; we do not charge realtor commissions or fees from us.",
      },
      {
        question: "Do you buy inherited or probate homes in Beacon?",
        answer:
          "Yes. We work with inherited and probate properties in Dutchess County. Fiduciaries typically need authority from Dutchess County Surrogate’s Court before conveying estate real estate. We coordinate with estate counsel and title and buy the property as-is.",
      },
      {
        question: "Is Beacon near Metro-North useful if I need to sell quickly?",
        answer:
          "Beacon has a Metro-North Hudson Line station, which supports local demand — but a cash sale is about your timeline and clear title, not waiting for the perfect retail buyer. We can close on a schedule you choose after an accepted offer.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-dutchess-county-ny", label: "Dutchess County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-fishkill-ny", label: "Fishkill" },
      { href: "/sell-my-house-fast-wappingers-falls-ny", label: "Wappingers Falls" },
      { href: "/sell-my-house-fast-poughkeepsie-ny", label: "Poughkeepsie" },
      { href: "/sell-my-house-fast-cold-spring-ny", label: "Cold Spring" },
    ],
  },

  newburgh: {
    metaTitle: "Sell My House Fast in Newburgh NY | City & Town Cash Buyers",
    metaDescription:
      "Sell your house fast in the City or Town of Newburgh, NY. Cash offers for as-is Orange County homes near I-84 and the Hudson. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Newburgh, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Newburgh, Orange County — both the City of Newburgh on the Hudson River and the surrounding Town of Newburgh near Interstate 84 and the Thruway. We review your property, present a cash offer you can accept or decline, and close on your timeline with a New York real estate attorney and title company. We buy as-is: older city housing that needs work, vacant houses, rentals with tenants, and estate properties. There are no realtor commissions and no fees charged by us. A Newburgh mailing address alone does not tell you whether the parcel is City or Town — check the tax bill — and we buy in both municipalities without requiring repairs first.",
    sections: [
      {
        heading: "City of Newburgh vs. Town of Newburgh",
        paragraphs: [
          "They are separate municipalities. The City of Newburgh is the incorporated river city (City Hall on Broadway) operating under a council-manager form of government. The Town of Newburgh surrounds parts of the city to the north and west, covers a much larger land area, and sits at the junction of Interstate 84 and the New York State Thruway (I-87), with the western approach to the Newburgh-Beacon Bridge carrying I-84 across the Hudson. The Town of New Windsor borders the city to the south.",
          "Zoning, building permits, and some services differ by municipality. County-level recording for Orange County deeds and mortgages is handled by the Orange County Clerk in Goshen. Estate sales that require court authority generally go through Orange County Surrogate’s Court in Goshen. We buy houses in both the City and the Town and use the same attorney-and-title closing process either way.",
        ],
      },
      {
        heading: "Housing, repairs, and common seller situations",
        paragraphs: [
          "The City of Newburgh is known for a large stock of nineteenth-century architecture and older multi-family buildings; many properties carry deferred maintenance that can slow a traditional listing. Town neighborhoods are more suburban and corridor-oriented around major state routes such as 9W, 17K, 32, 52, and 300. Sellers contact us for foreclosure timelines, inherited houses, problem tenants, vacant properties, fire or water damage, and homes that would need substantial repairs before showings.",
          "You do not need to renovate first. Share property details, get a cash offer, and choose a closing date. Compare county options on our Orange County hub, or read the process on how it works.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy in both the City and the Town of Newburgh?",
        answer:
          "Yes. We buy houses in the City of Newburgh and throughout the Town of Newburgh. Confirm which municipality appears on your tax bill — the governments are separate — and we can make an offer in either.",
      },
      {
        question: "Can you buy a Newburgh house that needs major repairs?",
        answer:
          "Yes. We buy Newburgh properties as-is, including homes with structural issues, outdated systems, or long vacancy. No repairs or staging are required before closing.",
      },
      {
        question: "Where are Orange County deeds recorded for a Newburgh sale?",
        answer:
          "Orange County land records are recorded with the Orange County Clerk in Goshen. Closings we complete are coordinated with a New York real estate attorney and a title company so recording and title requirements are handled professionally.",
      },
      {
        question: "Do you buy inherited or probate homes in Newburgh?",
        answer:
          "Yes. Estate sales in Orange County often require Letters Testamentary or Letters of Administration from Orange County Surrogate’s Court in Goshen before the fiduciary can convey title. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Can I sell a Newburgh rental with tenants in place?",
        answer:
          "Yes. We purchase tenant-occupied properties in the City and Town of Newburgh. You do not need to complete an eviction before requesting a cash offer.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-orange-county-ny", label: "Orange County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/foreclosure", label: "Sell before foreclosure" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/probate", label: "Probate house sale" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-beacon-ny", label: "Beacon" },
      { href: "/sell-my-house-fast-middletown-ny", label: "Middletown" },
      { href: "/sell-my-house-fast-cornwall-ny", label: "Cornwall" },
      { href: "/sell-my-house-fast-fishkill-ny", label: "Fishkill" },
    ],
  },

  middletown: {
    metaTitle: "Sell My House Fast in Middletown NY | Orange County Cash Offer",
    metaDescription:
      "Sell your house fast in Middletown, NY. Cash Ready Homes buys as-is Orange County homes near NY 17 and I-84. NY attorney closing, seller timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Middletown, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Middletown, Orange County — a north-central Orange County city near the junction of New York Route 17 and Interstate 84. We are a local cash home buyer: tell us about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is, including houses that need repairs, vacant homes, rentals with tenants, and estate properties tied to Orange County Surrogate’s Court processes when letters are required. There are no realtor commissions and no fees charged by us. When a traditional listing would require costly fixes or months of uncertainty, a direct cash sale can simplify the exit on a schedule you choose.",
    sections: [
      {
        heading: "Middletown’s location and housing mix",
        paragraphs: [
          "The City of Middletown sits in north-central Orange County, just west of the Wallkill River corridor and the heavily traveled NY Route 17 / I-84 area (interchange work and related access are often discussed for the adjoining Town of Wallkill). State routes 17M and 211 run through the city and form important commercial and neighborhood spines. Housing ranges from older downtown and near-downtown stock to more suburban streets toward the municipal borders.",
          "Commuters in the area also use the Middletown–Town of Wallkill station on Metro-North’s Port Jervis Line (park-and-ride access published by MTA). Rail access can support demand, but it does not remove the need for certainty when a house needs work or an estate must close cleanly.",
        ],
      },
      {
        heading: "Repairs, tenants, and Orange County closings",
        paragraphs: [
          "Sellers contact us when deferred maintenance would stall a listing, when tenants make showings difficult, when a property is vacant, or when an inherited house must be sold through Orange County Surrogate’s Court processes in Goshen. Orange County deeds and mortgages are recorded with the Orange County Clerk in Goshen. We coordinate attorney and title so recording and clear-title requirements are handled without asking you to renovate first.",
          "Get a cash offer, choose your closing date, and compare nearby options on our Orange County hub or how-it-works page. We also buy in Newburgh, Goshen, and Monroe.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy Middletown houses that need repairs?",
        answer:
          "Yes. We buy Middletown properties as-is. You do not need to complete renovations, cleanouts, or staging before closing.",
      },
      {
        question: "Is the Metro-North Middletown station in the City of Middletown?",
        answer:
          "MTA lists the station as Middletown–Town of Wallkill on the Port Jervis Line, serving the Middletown area with park-and-ride access. We buy houses in the City of Middletown based on the property and clear title, regardless of which municipality a station parcel sits in.",
      },
      {
        question: "Can I sell a Middletown rental with tenants in place?",
        answer:
          "Yes. Tenant-occupied Middletown houses can receive a cash offer. You do not need to finish an eviction before contacting us.",
      },
      {
        question: "How do Middletown cash closings work in New York?",
        answer:
          "Accepted offers close with a New York real estate attorney and a title company. Orange County land records are recorded with the County Clerk in Goshen. You choose the timeline; we do not charge realtor commissions or fees from us.",
      },
      {
        question: "Do you buy probate or inherited homes in Middletown?",
        answer:
          "Yes. Estate conveyances in Orange County often require authority from Orange County Surrogate’s Court in Goshen. We work with estate counsel and title and buy the property as-is.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-orange-county-ny", label: "Orange County hub" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/probate", label: "Probate sales" },
      { href: "/situations/foreclosure", label: "Foreclosure timeline sales" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-newburgh-ny", label: "Newburgh" },
      { href: "/sell-my-house-fast-goshen-ny", label: "Goshen" },
      { href: "/sell-my-house-fast-monroe-ny", label: "Monroe" },
      { href: "/sell-my-house-fast-warwick-ny", label: "Warwick" },
    ],
  },

  kingston: {
    metaTitle: "Sell My House Fast in Kingston NY | Ulster County Cash Buyers",
    metaDescription:
      "Sell your house fast in Kingston, NY. Cash offers for as-is Ulster County homes in Stockade, Midtown, and Rondout. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Kingston, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Kingston, the Ulster County seat on the Hudson River. Share details about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is — including older Stockade and Midtown homes that need work, Rondout-area properties, vacant houses, rentals with tenants, and estate situations that may involve Ulster County Surrogate’s Court in Kingston. There are no realtor commissions and no fees charged by us. When repairs and a long listing are not practical across Uptown, Midtown, or Rondout neighborhoods, a direct cash sale can move the process forward without open houses or showings while attorney and title handle the paperwork.",
    sections: [
      {
        heading: "Stockade, Midtown, and Rondout",
        paragraphs: [
          "Kingston’s neighborhoods reflect distinct histories. The Stockade District (Uptown) traces to the seventeenth-century Dutch settlement ordered into a fortified stockade; it remains a compact historic core with early stone houses and civic buildings. Rondout grew as a separate river/creek port and canal-era village and later merged with Kingston when the City of Kingston was incorporated in 1872. Midtown sits between those poles with a mix of residential and commercial fabric. Older housing stock is common across the city, so deferred maintenance and modernization needs are frequent seller concerns.",
          "Ulster County Surrogate’s Court — which handles probate and administration for the county — sits in the Ulster County Office Building on Fair Street in Kingston. Land records are maintained by the Ulster County Clerk. We coordinate attorney and title so estate and recording requirements are handled while you sell as-is.",
        ],
      },
      {
        heading: "Why Kingston sellers choose a cash close",
        paragraphs: [
          "Sellers contact us for inherited houses, probate timelines, vacant properties, tenant issues, and homes that would need substantial repairs before competing on the open market. Kingston’s role as county seat and its historic districts create unique inventory — not a single template house type.",
          "Get a cash offer, pick a closing date, and see our Ulster County hub for nearby towns such as Saugerties, New Paltz, and Woodstock. Process details are on how it works.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy houses in Kingston’s Stockade, Midtown, and Rondout areas?",
        answer:
          "Yes. We buy throughout the City of Kingston, including Stockade/Uptown, Midtown, and Rondout-area properties, in any condition.",
      },
      {
        question: "Can you buy a Kingston house that is in probate?",
        answer:
          "Yes. Ulster County probate and administration are handled by Ulster County Surrogate’s Court in Kingston. Fiduciaries typically need court-issued letters before conveying estate real estate. We coordinate with estate counsel and title and buy as-is.",
      },
      {
        question: "Do I need to repair an older Kingston home before selling?",
        answer:
          "No. We buy Kingston houses as-is. You do not need to renovate historic or older homes before closing.",
      },
      {
        question: "Can I sell a Kingston rental with tenants still there?",
        answer:
          "Yes. Tenant-occupied Kingston properties can qualify for a cash offer without completing an eviction first.",
      },
      {
        question: "How does a Kingston cash closing work?",
        answer:
          "After you accept an offer, closing runs with a New York real estate attorney and a title company. You choose the timeline; we do not charge realtor commissions or fees from us.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-ulster-county-ny", label: "Ulster County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/inherited-property", label: "Inherited house sale" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Vacant house sale" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-new-paltz-ny", label: "New Paltz" },
      { href: "/sell-my-house-fast-saugerties-ny", label: "Saugerties" },
      { href: "/sell-my-house-fast-woodstock-ny", label: "Woodstock" },
      { href: "/sell-my-house-fast-highland-ny", label: "Highland" },
    ],
  },

  "new-paltz": {
    metaTitle: "Sell My House Fast in New Paltz NY | Village & Town Cash Offer",
    metaDescription:
      "Sell your house fast in the Village or Town of New Paltz, NY. Cash buyer for as-is Ulster County homes near SUNY and the Thruway. NY attorney closing, no realtor commissions.",
    h1: "Sell Your House Fast in New Paltz, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in New Paltz, Ulster County — covering both the Village of New Paltz and the surrounding Town of New Paltz near SUNY New Paltz and Thruway Exit 18. Tell us about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is, including houses that need repairs, vacant homes, rentals with student or long-term tenants, and inherited properties. There are no realtor commissions and no fees charged by us. A New Paltz mailing address can sit in the village or only in the town — check your tax bill — and we buy in both without requiring renovations first.",
    sections: [
      {
        heading: "Village of New Paltz vs. Town of New Paltz",
        paragraphs: [
          "They are separate local governments today. The Village of New Paltz sits inside the Town of New Paltz; Village Hall is on Plattekill Avenue, while the town government surrounds the village with its own supervisor and council. The community is known for Huguenot Street’s early stone houses (a National Historic Landmark district) along the Wallkill River, the State University of New York at New Paltz campus, and access via New York State Thruway (I-87) Exit 18 plus state routes 299, 32, and 208.",
          "Because village and town services and taxes differ, confirm the municipality before assuming one office handles permits or assessments. County recording and estate court matters for Ulster County run through Kingston offices (Ulster County Clerk and Ulster County Surrogate’s Court). We buy in the village and the town using the same attorney-and-title closing process.",
        ],
      },
      {
        heading: "Housing near campus and the Shawangunks",
        paragraphs: [
          "Local housing includes village streets near Main Street and the campus, town parcels toward the Shawangunk Ridge and surrounding farmland, and a mix of single-family and multi-unit properties influenced by the college-town rental market. Sellers often need a fast, certain close when tenants are in place, when a house needs substantial updates, when a property is vacant, or when an estate must be settled through Surrogate’s Court in Kingston.",
          "Request a cash offer without renovating first. See our Ulster County hub for Kingston, Saugerties, and Woodstock, and read how it works for the step-by-step process.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy in both the Village and the Town of New Paltz?",
        answer:
          "Yes. The Village of New Paltz and the Town of New Paltz are separate municipalities. We buy houses in both — confirm which one is on your tax bill.",
      },
      {
        question: "Can I sell a New Paltz rental with tenants still living there?",
        answer:
          "Yes. Student and long-term rentals with tenants in place can still receive a cash offer. You do not need to complete an eviction first.",
      },
      {
        question: "Do you buy New Paltz houses that need repairs?",
        answer:
          "Yes. We buy as-is. No renovations or staging are required before closing.",
      },
      {
        question: "How do New Paltz cash closings work?",
        answer:
          "Accepted offers close with a New York real estate attorney and a title company. Ulster County recording and probate matters are handled through county offices in Kingston. You choose the closing timeline; we do not charge realtor commissions or fees from us.",
      },
      {
        question: "Do you buy inherited homes in New Paltz?",
        answer:
          "Yes. Inherited and probate properties in Ulster County often require Surrogate’s Court authority in Kingston before the fiduciary can convey title. We coordinate with estate counsel and buy as-is.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-ulster-county-ny", label: "Ulster County hub" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/inherited-property", label: "Inherited house" },
      { href: "/situations/probate", label: "Probate sale" },
      { href: "/situations/vacant-house", label: "Vacant house" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-kingston-ny", label: "Kingston" },
      { href: "/sell-my-house-fast-highland-ny", label: "Highland" },
      { href: "/sell-my-house-fast-saugerties-ny", label: "Saugerties" },
      { href: "/sell-my-house-fast-woodstock-ny", label: "Woodstock" },
    ],
  },

  yonkers: {
    metaTitle: "Sell My House Fast in Yonkers NY | Cash Offer Near Metro-North",
    metaDescription:
      "Sell your house fast in Yonkers, NY. Cash Ready Homes buys as-is homes from Getty Square to Crestwood and Dunwoodie. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Yonkers, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Yonkers, Westchester County — New York State’s fourth-largest city and Westchester’s largest. Tell us about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is across waterfront and Getty Square blocks, Ludlow and Park Hill, Greystone, Dunwoodie, Crestwood, and other neighborhoods, including multi-family buildings and homes that need work. There are no realtor commissions and no fees charged by us. When repairs, tenants, vacant rooms, or an estate timeline make a traditional listing impractical, a direct cash sale can simplify the path to closing without weeks of showings. Share basic details online or by phone and we aim to present a cash offer within 24 hours so you can decide with clear next steps.",
    sections: [
      {
        heading: "Yonkers neighborhoods and housing stock",
        paragraphs: [
          "Yonkers stretches along the Hudson River north of the Bronx with a dense downtown around Getty Square — the city’s civic and transit hub — plus riverside redevelopment near the Metro-North Yonkers station on the Hudson Line (Amtrak also serves the station). Other areas include Ludlow (with its own Hudson Line stop), Park Hill, Greystone/North Broadway, Dunwoodie, Homefield, Runyon Heights, and more suburban Crestwood/Cedar Knolls streets toward the Harlem Line. Housing ranges from older multi-family buildings and hillside houses to postwar single-family stock; deferred maintenance and tenant-occupied properties are common seller situations.",
          "Westchester County deeds record with the Westchester County Clerk’s Land Records Division in White Plains (PREP cover pages and state transfer forms are part of the recording process). Estate sales that need court authority generally go through Westchester County Surrogate’s Court, also in White Plains. We coordinate attorney and title so those requirements are handled while you sell as-is.",
        ],
      },
      {
        heading: "Why Yonkers sellers want certainty",
        paragraphs: [
          "Commuter rail and proximity to New York City support demand, but they do not remove listing friction when a house needs major repairs, tenants limit showings, a property is vacant, or an inherited home must close on a fiduciary’s timeline. We present a cash offer without requiring renovations, and you choose the closing date.",
          "Compare county options on our Westchester hub, or read how it works. Nearby cities we also serve include Mount Vernon, New Rochelle, and White Plains.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy Yonkers multi-family buildings and houses that need repairs?",
        answer:
          "Yes. We buy Yonkers single-family and multi-family properties as-is, including homes that need structural or cosmetic work. No renovations are required before closing.",
      },
      {
        question: "Can I sell a Yonkers rental with tenants still living there?",
        answer:
          "Yes. Tenant-occupied Yonkers properties can receive a cash offer. You do not need to finish an eviction first.",
      },
      {
        question: "Where are Westchester deeds recorded for a Yonkers sale?",
        answer:
          "Westchester County land records are recorded with the County Clerk in White Plains. Closings we complete are coordinated with a New York real estate attorney and a title company.",
      },
      {
        question: "Do you buy inherited or probate homes in Yonkers?",
        answer:
          "Yes. Estate conveyances in Westchester County often require authority from Westchester County Surrogate’s Court in White Plains. We work with estate counsel and title and buy as-is.",
      },
      {
        question: "Which parts of Yonkers do you cover?",
        answer:
          "We buy throughout the City of Yonkers, including downtown/Getty Square and waterfront areas, Ludlow, Park Hill, Greystone, Dunwoodie, Crestwood, and other neighborhoods.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-westchester-county-ny", label: "Westchester County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/inherited-property", label: "Inherited house" },
      { href: "/situations/probate", label: "Probate sale" },
      { href: "/situations/vacant-house", label: "Vacant house" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-mount-vernon-ny", label: "Mount Vernon" },
      { href: "/sell-my-house-fast-new-rochelle-ny", label: "New Rochelle" },
      { href: "/sell-my-house-fast-white-plains-ny", label: "White Plains" },
      { href: "/sell-my-house-fast-hastings-on-hudson-ny", label: "Hastings-on-Hudson" },
    ],
  },

  "white-plains": {
    metaTitle: "Sell My House Fast in White Plains NY | Westchester County Seat",
    metaDescription:
      "Sell your house fast in White Plains, NY. Cash offers for as-is homes in Westchester’s county seat near Metro-North. NY attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in White Plains, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in White Plains, the county seat of Westchester County. Share details about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is — including older houses that need work, condos and multi-family properties, vacant homes, rentals with tenants, and estate situations. There are no realtor commissions and no fees charged by us. Because White Plains hosts major county offices — including the County Clerk’s land records and Surrogate’s Court — and a busy downtown with Metro-North Harlem Line access, sellers often need certainty more than a long listing when repairs or probate timelines intervene. Request an offer online or by phone and we aim to respond within 24 hours.",
    sections: [
      {
        heading: "County seat, downtown, and commuting",
        paragraphs: [
          "White Plains is Westchester’s county seat and a commercial hub about 25 miles north of Midtown Manhattan. Downtown includes county and court facilities alongside retail and a growing residential component. The city is served by two Metro-North Harlem Line stations — White Plains (downtown) and North White Plains — plus Bee-Line bus connections at the TransCenter. Westchester County Airport is nearby in Harrison and is often referred to colloquially in connection with White Plains air travel.",
          "The Westchester County Clerk’s Land Records Division records deeds and mortgages for properties countywide from White Plains, and Westchester County Surrogate’s Court (probate and estate administration) is also located in White Plains. Local sellers dealing with inherited houses frequently coordinate counsel around those offices — we buy estate properties as-is once the fiduciary has authority to convey.",
        ],
      },
      {
        heading: "Housing situations we see in White Plains",
        paragraphs: [
          "Inventory ranges from downtown residential buildings to single-family streets in surrounding neighborhoods. Sellers contact us when updates would be costly before listing, when tenants limit showings, when a house is vacant, or when an estate must close cleanly. A cash offer lets you skip repairs and choose a closing date that fits attorney and title scheduling.",
          "See our Westchester hub for nearby cities such as Yonkers, New Rochelle, and Scarsdale, and read how it works for the process steps.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy White Plains houses and condos as-is?",
        answer:
          "Yes. We buy White Plains properties as-is, including homes and units that need repairs. No renovations or staging are required before closing.",
      },
      {
        question: "Where are deeds recorded for a White Plains sale?",
        answer:
          "Westchester County deeds are recorded with the County Clerk’s Land Records Division in White Plains. We close with a New York real estate attorney and a title company so recording requirements are handled.",
      },
      {
        question: "Do you buy probate homes in White Plains?",
        answer:
          "Yes. Westchester County Surrogate’s Court is in White Plains. Fiduciaries typically need court-issued letters before conveying estate real estate. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Can I sell a White Plains rental with tenants in place?",
        answer:
          "Yes. Tenant-occupied properties can receive a cash offer without completing an eviction first.",
      },
      {
        question: "How fast can I get a cash offer in White Plains?",
        answer:
          "Share basic property details online or by phone and we aim to present a cash offer within 24 hours. There is no obligation to accept. If you move forward, you pick the closing date.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-westchester-county-ny", label: "Westchester County hub" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/inherited-property", label: "Inherited house" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/divorce", label: "Sell during divorce" },
      { href: "/situations/vacant-house", label: "Vacant house" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-yonkers-ny", label: "Yonkers" },
      { href: "/sell-my-house-fast-new-rochelle-ny", label: "New Rochelle" },
      { href: "/sell-my-house-fast-scarsdale-ny", label: "Scarsdale" },
      { href: "/sell-my-house-fast-tarrytown-ny", label: "Tarrytown" },
    ],
  },

  "new-rochelle": {
    metaTitle: "Sell My House Fast in New Rochelle NY | Sound Shore Cash Buyers",
    metaDescription:
      "Sell your house fast in New Rochelle, NY. Cash offers for as-is homes near Metro-North New Haven Line and Amtrak. NY attorney closing, seller timeline, no realtor commissions.",
    h1: "Sell Your House Fast in New Rochelle, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in New Rochelle, Westchester County — a Sound Shore city with an intermodal downtown rail hub on Metro-North’s New Haven Line and Amtrak’s Northeast Corridor. Tell us about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is, including older houses that need work, multi-family buildings, vacant homes, rentals with tenants, and estate properties. There are no realtor commissions and no fees charged by us. When a listing would demand costly repairs, tenant-limited showings, or uncertain timing for an inherited house, a direct cash sale can provide a clearer close. Share property details online or by phone and we aim to present a cash offer within 24 hours.",
    sections: [
      {
        heading: "Downtown transit hub and city housing mix",
        paragraphs: [
          "New Rochelle’s downtown train station is an intermodal center connecting Metro-North New Haven Line service, Amtrak, and Westchester Bee-Line buses, with a city transit-center garage supporting park-and-ride and transfers. The city notes the station is among the busiest New Haven Line stops in New York outside New York City and is the Amtrak stop for southern Westchester on the Northeast Regional. Housing ranges from downtown residential buildings to single-family neighborhoods toward Pelham, Larchmont, and Mamaroneck borders, plus coastal and inland streets with older stock that may need updates before competing on the open market.",
          "Closings still record at the county level: Westchester County Clerk in White Plains for deeds, and Westchester County Surrogate’s Court in White Plains when estate letters are required. We buy throughout the City of New Rochelle and coordinate attorney and title without asking you to renovate first.",
        ],
      },
      {
        heading: "Situations we help New Rochelle sellers with",
        paragraphs: [
          "Common reasons sellers contact us include deferred maintenance, tenant-occupied buildings, vacant houses, inherited property, divorce timelines, and foreclosure pressure. Commuter demand supports the city, but it does not erase the cost of getting a tired property ready to list.",
          "Request a cash offer, choose your closing date, and see our Westchester hub or how-it-works page for next steps. Nearby cities include Yonkers, Mount Vernon, and White Plains.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy New Rochelle houses near downtown and in outlying neighborhoods?",
        answer:
          "Yes. We buy throughout the City of New Rochelle — downtown residential buildings and neighborhood single-family or multi-family homes — as-is.",
      },
      {
        question: "Can I sell a New Rochelle rental with tenants in place?",
        answer:
          "Yes. Tenant-occupied properties can receive a cash offer without completing an eviction first.",
      },
      {
        question: "How does a New Rochelle cash closing work?",
        answer:
          "Accepted offers close with a New York real estate attorney and a title company. Westchester deeds record with the County Clerk in White Plains. You choose the timeline; we do not charge realtor commissions or fees from us.",
      },
      {
        question: "Do you buy inherited homes in New Rochelle?",
        answer:
          "Yes. Estate sales in Westchester County often require Surrogate’s Court authority in White Plains before the fiduciary can convey title. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Does Metro-North access change how a cash sale works?",
        answer:
          "New Rochelle’s rail connections support local demand, but a cash sale is about your timeline and clear title. We can close on a schedule you choose after an accepted offer, without requiring showings or repairs.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-westchester-county-ny", label: "Westchester County hub" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/inherited-property", label: "Inherited house" },
      { href: "/situations/probate", label: "Probate sale" },
      { href: "/situations/foreclosure", label: "Foreclosure timeline" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-yonkers-ny", label: "Yonkers" },
      { href: "/sell-my-house-fast-mount-vernon-ny", label: "Mount Vernon" },
      { href: "/sell-my-house-fast-white-plains-ny", label: "White Plains" },
      { href: "/sell-my-house-fast-port-chester-ny", label: "Port Chester" },
    ],
  },

  nyack: {
    metaTitle: "Sell My House Fast in Nyack NY | Rockland Village Cash Buyers",
    metaDescription:
      "Sell your house fast in Nyack, NY. Cash offers for as-is homes in this Hudson River village in Orangetown, Rockland County. NY attorney closing, no realtor commissions.",
    h1: "Sell Your House Fast in Nyack, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Nyack, Rockland County — a Hudson River village within the Town of Orangetown. Share details about your property, receive a cash offer, and close on your timeline with a New York real estate attorney and title company. We buy as-is, including older village homes that need work, vacant houses, rentals with tenants, and inherited properties. There are no realtor commissions and no fees charged by us. Whether your tax bill shows the Village of Nyack or you are comparing nearby Rockland river villages, we focus on clear title and a closing date you can plan around. Rockland County land records and Surrogate’s Court are in New City; we coordinate attorney and title so those steps stay on track while you sell without repairs.",
    sections: [
      {
        heading: "Village of Nyack in the Town of Orangetown",
        paragraphs: [
          "Nyack is an incorporated village with Village Hall on North Broadway. It sits primarily within the Town of Orangetown, which has its own town government in Orangeburg. Nearby villages such as Upper Nyack and South Nyack are separate municipalities — a Nyack-area mailing address does not automatically mean Village of Nyack taxes or zoning. Confirm the municipality on your tax bill before assuming one clerk’s office handles local permits.",
          "County land records for Rockland County are recorded with the Rockland County Clerk in New City. Rockland County Surrogate’s Court — for probate and estate administration — is likewise in New City. We buy Nyack village properties and coordinate attorney and title through those county processes when deeds and estate letters are required.",
        ],
      },
      {
        heading: "River-village housing and selling situations",
        paragraphs: [
          "Nyack’s housing includes older village streets near Broadway and Main Street, hillside and river-adjacent blocks, and a mix of single-family and multi-unit buildings. Sellers often need a fast close when renovations would be costly, tenants limit showings, a house is vacant, or an estate must be settled through Surrogate’s Court in New City. The Governor Mario M. Cuomo Bridge links Rockland to Westchester, supporting regional commuting patterns, but a cash sale still turns on your timeline rather than waiting out a traditional market cycle.",
          "Get a cash offer without repairing first. See our Rockland County hub and how-it-works page, and nearby communities such as Suffern, Spring Valley, and New City coverage via the county page.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Is Nyack the same as Orangetown?",
        answer:
          "No. The Village of Nyack is an incorporated village that sits within the Town of Orangetown. They are separate local governments. We buy houses in the Village of Nyack; confirm your tax bill for the exact municipality.",
      },
      {
        question: "Do you buy Nyack houses that need repairs?",
        answer:
          "Yes. We buy Nyack properties as-is. No renovations or staging are required before closing.",
      },
      {
        question: "Where are Rockland County deeds recorded?",
        answer:
          "Rockland County land records are recorded with the County Clerk in New City. We close with a New York real estate attorney and a title company so recording is handled correctly.",
      },
      {
        question: "Do you buy inherited or probate homes in Nyack?",
        answer:
          "Yes. Estate sales in Rockland County often require authority from Rockland County Surrogate’s Court in New City. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Can I sell a Nyack rental with tenants in place?",
        answer:
          "Yes. Tenant-occupied Nyack houses can receive a cash offer without completing an eviction first.",
      },
    ],
    internalLinks: [
      { href: "/sell-my-house-fast-rockland-county-ny", label: "Rockland County cash home buyers" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/inherited-property", label: "Inherited house" },
      { href: "/situations/probate", label: "Probate sale" },
      { href: "/situations/vacant-house", label: "Vacant house" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
    ],
    nearbyCityLinks: [
      { href: "/sell-my-house-fast-suffern-ny", label: "Suffern" },
      { href: "/sell-my-house-fast-spring-valley-ny", label: "Spring Valley" },
      { href: "/sell-my-house-fast-new-city-ny", label: "New City" },
      { href: "/sell-my-house-fast-tarrytown-ny", label: "Tarrytown" },
    ],
  },

};

export function getCityPageContent(slug: string): CityPageContent | undefined {
  return cityPageContent[slug];
}
