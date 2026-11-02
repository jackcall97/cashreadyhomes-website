/**
 * Deep content for county hub pages.
 * Keep local facts verifiable; do not invent prices, growth rates, or development claims.
 * Each county's body copy should remain pairwise-dissimilar after place-name stripping.
 */

export interface CountyFaq {
  question: string;
  answer: string;
}

export interface CountyLink {
  href: string;
  label: string;
}

export interface CountyPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opener near the top. */
  opener: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqItems: CountyFaq[];
  internalLinks: CountyLink[];
  /** Featured city pages that already exist in this county. */
  cityLinks: CountyLink[];
}

export const countyPageContent: Record<string, CountyPageContent> = {
  westchester: {
    metaTitle: "Sell My House Fast Westchester County NY | Cash",
    metaDescription:
      "Cash buyer for Westchester County, NY — Yonkers, White Plains, New Rochelle & more. As-is offers, attorney closing, no realtor commissions.",
    h1: "Sell Your House Fast in Westchester County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash across Westchester County — from dense southern cities along the Bronx line to river villages and inland suburbs. If listing, repairs, or months of showings are not realistic, we review your property and present a cash offer you can accept or decline. We buy as-is: older multi-family buildings, single-family homes that need work, vacant houses, rentals with tenants in place, and estate properties. Closings run through a New York real estate attorney and a title company, and you choose the timeline. There are no realtor commissions and no fees charged by us.",
    sections: [
      {
        heading: "Where Westchester sellers usually live — and why the map matters",
        paragraphs: [
          "Westchester sits directly north of New York City. Metro-North’s Harlem, Hudson, and New Haven lines shape daily commuting, and many parcels sit a short drive from the Bronx border. Housing is not one market: Yonkers alone mixes waterfront blocks, older multi-family stock, and hillside neighborhoods; White Plains concentrates county government and commercial corridors; New Rochelle anchors Sound Shore transit; Mount Vernon, Peekskill, Ossining, Tarrytown, Scarsdale, Port Chester, and smaller river and inland villages each bring different municipal rules and housing ages.",
          "We buy throughout the county and publish dedicated pages for several Westchester cities, including Yonkers, White Plains, New Rochelle, Mount Vernon, Peekskill, Ossining, Tarrytown, Scarsdale, Hastings-on-Hudson, Pleasantville, Dobbs Ferry, Irvington, and Port Chester. Use those city pages when you want neighborhood-level detail, then return here for county-wide process questions.",
        ],
      },
      {
        heading: "Probate, land records, and common Westchester selling situations",
        paragraphs: [
          "Estate sales in Westchester County generally require authority from Westchester County Surrogate’s Court at the county courthouse complex in White Plains (111 Dr. Martin Luther King Jr. Blvd., Surrogate’s Court on the 19th floor). An executor or administrator typically needs Letters Testamentary or Letters of Administration before conveying estate real estate. Deeds and mortgages for Westchester parcels are recorded with the Westchester County Clerk (110 Dr. Martin Luther King Jr. Blvd., accessed through the Richard J. Daronco Courthouse campus). We coordinate with estate counsel and title so the closing tracks those requirements — without asking you to renovate first.",
          "Sellers also contact us when older housing needs systems or exterior work before it could compete on the open market, when tenants make showings impractical, when a house sits vacant, or when a divorce or inherited ownership requires a clean break. New York mortgage foreclosure is a judicial process: lenders file in court and often record a notice of pendency with the county clerk where the property sits. If you are navigating a foreclosure timeline, a direct cash sale can still be an option once title and payoff questions are clear — talk with your attorney about timing. We buy as-is either way.",
        ],
      },
      {
        heading: "How a Westchester cash closing works with us",
        paragraphs: [
          "Tell us about the property by form or phone. We aim to present a cash offer within 24 hours; there is no obligation to accept. If you move forward, closing is scheduled with a New York real estate attorney and a title company, and the deed records with the Westchester County Clerk. You pick a closing date that fits your situation.",
          "Compare our steps on the how-it-works page, request an offer through the contact page, or read our Westchester-focused note on what a fair cash offer means for sellers evaluating numbers. Situation guides cover probate, inherited property, vacant houses, as-is sales, and rentals with difficult tenants.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy houses in every Westchester city and town?",
        answer:
          "Yes. Cash Ready Homes Hudson Valley buys houses throughout Westchester County. We have dedicated pages for cities such as Yonkers, White Plains, New Rochelle, Mount Vernon, Peekskill, and others listed on this hub. If your town is not listed separately, we still buy there based on the property and clear title.",
      },
      {
        question: "Where does Westchester probate go if I inherited a house?",
        answer:
          "Estate matters for Westchester decedents generally run through Westchester County Surrogate’s Court in White Plains. Fiduciaries usually need court-issued letters before conveying estate real estate. We coordinate with the estate’s attorney and title company and buy the property as-is.",
      },
      {
        question: "Can I sell a Westchester rental with tenants still living there?",
        answer:
          "Yes. Tenant-occupied houses and multi-family buildings in Westchester can qualify for a cash offer. You do not have to finish an eviction or wait for every lease to end before contacting us.",
      },
      {
        question: "Is foreclosure different in Westchester than elsewhere in New York?",
        answer:
          "New York uses a judicial foreclosure process statewide. Filings and notices of pendency are handled through the courts and the county clerk where the property is located. We are not a law firm; speak with your attorney about case status. When a cash sale fits your timeline, we buy as-is and close through attorney and title.",
      },
      {
        question: "Do I need repairs before selling my Westchester house for cash?",
        answer:
          "No. We buy Westchester properties as-is. You do not need to renovate, stage, or complete a cleanout before closing.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How our cash sale process works" },
      { href: "/blog/what-is-a-fair-cash-offer-for-a-house-in-westchester-county-ny-w41", label: "Fair cash offers in Westchester County" },
      { href: "/blog/selling-house-during-probate-new-york-state-w42", label: "Selling during probate in New York" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/as-is", label: "Sell your house as-is" },
      { href: "/situations/bad-tenants", label: "Sell a rental with tenants" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-yonkers-ny", label: "Yonkers" },
      { href: "/sell-my-house-fast-white-plains-ny", label: "White Plains" },
      { href: "/sell-my-house-fast-new-rochelle-ny", label: "New Rochelle" },
      { href: "/sell-my-house-fast-mount-vernon-ny", label: "Mount Vernon" },
      { href: "/sell-my-house-fast-peekskill-ny", label: "Peekskill" },
      { href: "/sell-my-house-fast-ossining-ny", label: "Ossining" },
      { href: "/sell-my-house-fast-tarrytown-ny", label: "Tarrytown" },
      { href: "/sell-my-house-fast-scarsdale-ny", label: "Scarsdale" },
      { href: "/sell-my-house-fast-port-chester-ny", label: "Port Chester" },
    ],
  },

  dutchess: {
    metaTitle: "Sell My House Fast Dutchess County NY | As-Is",
    metaDescription:
      "Sell your Dutchess County, NY house for cash — Poughkeepsie, Beacon, Fishkill & more. As-is offers, attorney closings, no realtor commissions from us.",
    h1: "Sell Your House Fast in Dutchess County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Dutchess County on the east bank of the Hudson River. Whether your property is in the City or Town of Poughkeepsie, Beacon’s riverfront arts corridor, Fishkill near I-84 and Route 9, or towns farther north such as Hyde Park, Rhinebeck, Red Hook, Millbrook, or Wappingers Falls, we can review the house and present a cash offer. We buy as-is — including older stock that needs updates, vacant homes, tenant-occupied rentals, and estate properties. Closings use a New York real estate attorney and title company on a timeline you choose, with no realtor commissions and no fees charged by us.",
    sections: [
      {
        heading: "Dutchess County’s east-bank geography and municipalities",
        paragraphs: [
          "Dutchess runs along the Hudson’s eastern shore from the Putnam line north toward Columbia County. U.S. Route 9 is a north–south spine; I-84 crosses the southern end near Fishkill and the Newburgh–Beacon Bridge approach. Metro-North’s Hudson Line serves Beacon and terminates at Poughkeepsie (with Amtrak at the same station), and the Town of Poughkeepsie also includes the New Hamburg stop. That transit and highway pattern supports regional demand, but it does not remove friction when a house needs work, tenants are in place, or an estate must close cleanly.",
          "Municipal boundaries matter. “Poughkeepsie” alone can mean the City of Poughkeepsie (county seat on the river) or the surrounding Town of Poughkeepsie — separate tax bills and halls. Beacon and Fishkill likewise combine city/town or town/village layers sellers often discover only on a tax statement. We buy across those municipalities and keep dedicated pages for Poughkeepsie, Beacon, Fishkill, Hyde Park, Rhinebeck, Wappingers Falls, Millbrook, and Red Hook.",
        ],
      },
      {
        heading: "Surrogate’s Court, the County Clerk, and seller situations we see",
        paragraphs: [
          "For Dutchess County estates, probate and administration generally run through Dutchess County Surrogate’s Court in Poughkeepsie (Market Street courthouse complex). Fiduciaries typically need Letters Testamentary or Letters of Administration before conveying estate real estate. Deeds and mortgages record with the Dutchess County Clerk at 22 Market Street in Poughkeepsie. We work with estate counsel and title so those steps are handled without a renovation requirement.",
          "Common reasons Dutchess sellers skip a traditional listing include deferred maintenance on mid-century and older homes, inherited houses that heirs do not want to hold, rentals where showings are impractical, vacant properties that still carry taxes and insurance, and divorce-driven sales that need a predictable close. New York foreclosure is judicial; if a notice of pendency appears in Dutchess land records, speak with your attorney about timing while we evaluate whether a cash purchase still fits.",
        ],
      },
      {
        heading: "Next steps for a Dutchess cash sale",
        paragraphs: [
          "Share property details through our form or by phone and we aim to return a cash offer within 24 hours. Accept only if it works for you; then pick a closing date coordinated with attorney and title. Recording happens with the Dutchess County Clerk in Poughkeepsie.",
          "Start on the contact page, review the process on how it works, or read our guides on selling during probate in New York and selling an inherited Hudson Valley house. Situation pages cover as-is sales, vacant houses, and rentals with problem tenants.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy in both the City and Town of Poughkeepsie?",
        answer:
          "Yes. We buy houses in the City of Poughkeepsie and throughout the Town of Poughkeepsie, and across the rest of Dutchess County. Confirm which municipality is on your tax bill — we buy in both Poughkeepsie governments and in Beacon, Fishkill, and other Dutchess communities listed on this page.",
      },
      {
        question: "Where is Dutchess County Surrogate’s Court for an inherited house?",
        answer:
          "Dutchess County Surrogate’s Court sits in Poughkeepsie on Market Street. Estate fiduciaries usually need court-issued letters before conveying real estate. We coordinate with estate counsel and title and purchase the property as-is.",
      },
      {
        question: "Can I sell a Dutchess County house that needs major repairs?",
        answer:
          "Yes. We buy Dutchess properties as-is. You do not need to complete renovations, staging, or a full cleanout before closing.",
      },
      {
        question: "Do you buy Beacon and Fishkill houses as well as Poughkeepsie?",
        answer:
          "Yes. We buy throughout southern and northern Dutchess, including Beacon, Fishkill, Wappingers Falls, Hyde Park, Rhinebeck, Red Hook, and Millbrook. Each of those communities has (or can use) our city pages for local detail.",
      },
      {
        question: "How fast can I close on a Dutchess County cash sale?",
        answer:
          "After you accept an offer, you choose the closing timeline. Closings are handled with a New York real estate attorney and a title company. Many sellers close in well under thirty days when title is clear and estate paperwork (if any) is in order.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/blog/selling-house-during-probate-new-york-state-w42", label: "Selling a house during probate in NY" },
      { href: "/blog/selling-inherited-house-hudson-valley-ny", label: "Selling an inherited Hudson Valley house" },
      { href: "/situations/probate", label: "Probate property" },
      { href: "/situations/inherited-property", label: "Inherited property" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-poughkeepsie-ny", label: "Poughkeepsie" },
      { href: "/sell-my-house-fast-beacon-ny", label: "Beacon" },
      { href: "/sell-my-house-fast-fishkill-ny", label: "Fishkill" },
      { href: "/sell-my-house-fast-hyde-park-ny", label: "Hyde Park" },
      { href: "/sell-my-house-fast-rhinebeck-ny", label: "Rhinebeck" },
      { href: "/sell-my-house-fast-wappingers-falls-ny", label: "Wappingers Falls" },
      { href: "/sell-my-house-fast-millbrook-ny", label: "Millbrook" },
      { href: "/sell-my-house-fast-red-hook-ny", label: "Red Hook" },
    ],
  },

  orange: {
    metaTitle: "Sell House Fast Orange County NY | Cash Buyers",
    metaDescription:
      "Cash home buyers in Orange County, NY — Newburgh, Middletown, Goshen & beyond. As-is purchases, attorney closings, no realtor commissions from us.",
    h1: "Sell Your House Fast in Orange County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Orange County — west of the Hudson, where I-84 and the New York State Thruway (I-87) meet near Newburgh and Route 17 / I-84 corridors run through the Middletown area. We purchase City and Town of Newburgh properties, Middletown homes, and houses in Goshen, Monroe, Warwick, Cornwall, Chester, Port Jervis, Tuxedo, and surrounding towns. Offers are cash and as-is: repairs, tenants, vacancy, and estate complications do not have to be solved before you talk to us. Closings use a New York attorney and title company; we charge no realtor commissions and no fees of our own.",
    sections: [
      {
        heading: "Orange County corridors: river cities, Route 17, and the tri-state edge",
        paragraphs: [
          "Orange County’s map is shaped by highways and the river. The City of Newburgh sits on the Hudson opposite Beacon; the Town of Newburgh surrounds parts of the city near the I-84 / Thruway junction and the Newburgh–Beacon Bridge. Farther west, the City of Middletown anchors north-central Orange near NY Route 17 and I-84, with Metro-North Port Jervis Line access commonly discussed via the Middletown–Town of Wallkill station area. Goshen, the county seat, holds county government and courts. Port Jervis marks the New York–New Jersey–Pennsylvania corner; Monroe, Warwick, Cornwall, Chester, and Tuxedo fill suburban and mountain-edge pockets.",
          "City versus town naming trips up many sellers — especially Newburgh. Always check the tax bill for the municipality that actually governs the parcel. We buy in both Newburgh governments and maintain city pages for Newburgh, Middletown, Port Jervis, Goshen, Monroe, Warwick, Cornwall, Chester, and Tuxedo.",
        ],
      },
      {
        heading: "Goshen courts, recording, and why Orange sellers call a cash buyer",
        paragraphs: [
          "Orange County Surrogate’s Court is in Goshen (30 Park Place). Estate fiduciaries typically need Letters Testamentary or Letters of Administration before conveying estate real estate. Orange County deeds and mortgages record with the Orange County Clerk in Goshen. When you sell to us, attorney and title coordinate those county requirements while you skip repairs and open houses.",
          "We also hear from owners of older Newburgh multi-family and nineteenth-century stock that would need heavy prep to list, Middletown sellers facing deferred maintenance, landlords with difficult tenants, heirs holding vacant houses, and homeowners watching a judicial foreclosure timeline. New York foreclosures proceed through the courts; a notice of pendency may appear in Orange County land records. We are not counsel — your attorney should advise on case strategy — but a cash purchase can still be structured when payoff and title questions are workable.",
        ],
      },
      {
        heading: "Getting an Orange County cash offer",
        paragraphs: [
          "Describe the property by form or phone. We aim to deliver a cash offer within 24 hours with no obligation. Choose a closing date that fits; recording lands with the Orange County Clerk in Goshen.",
          "Use the contact page to start, read how it works for the three-step overview, or browse posts on New York’s foreclosure process and selling a rental with problem tenants. Situation hubs cover foreclosure, as-is sales, probate, and inherited property.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy in both the City and Town of Newburgh?",
        answer:
          "Yes. The City and Town of Newburgh are separate municipalities. We buy houses in both, and across the rest of Orange County including Middletown, Goshen, Monroe, Warwick, Cornwall, Chester, Port Jervis, and Tuxedo.",
      },
      {
        question: "Where are Orange County deeds recorded?",
        answer:
          "Orange County land records are recorded with the Orange County Clerk in Goshen. Our closings are coordinated with a New York real estate attorney and a title company so recording and title requirements are handled professionally.",
      },
      {
        question: "Can you buy an Orange County house in probate?",
        answer:
          "Yes. Estate sales often require authority from Orange County Surrogate’s Court in Goshen before the fiduciary can convey title. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Will you buy a Middletown or Newburgh house that needs major repairs?",
        answer:
          "Yes. We buy Orange County properties as-is, including homes with structural issues, outdated systems, long vacancy, or code problems. No repairs or staging are required before closing.",
      },
      {
        question: "Can I sell an Orange County rental with tenants in place?",
        answer:
          "Yes. Tenant-occupied houses can receive a cash offer. You do not need to complete an eviction before contacting us.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/blog/foreclosure-process-new-york-state-house", label: "NY foreclosure process overview" },
      { href: "/blog/selling-rental-property-with-bad-tenants-new-york-w34", label: "Selling a rental with bad tenants" },
      { href: "/situations/foreclosure", label: "Sell before foreclosure" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/probate", label: "Probate house sale" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-newburgh-ny", label: "Newburgh" },
      { href: "/sell-my-house-fast-middletown-ny", label: "Middletown" },
      { href: "/sell-my-house-fast-goshen-ny", label: "Goshen" },
      { href: "/sell-my-house-fast-monroe-ny", label: "Monroe" },
      { href: "/sell-my-house-fast-warwick-ny", label: "Warwick" },
      { href: "/sell-my-house-fast-cornwall-ny", label: "Cornwall" },
      { href: "/sell-my-house-fast-chester-ny", label: "Chester" },
      { href: "/sell-my-house-fast-port-jervis-ny", label: "Port Jervis" },
      { href: "/sell-my-house-fast-tuxedo-ny", label: "Tuxedo" },
    ],
  },

  putnam: {
    metaTitle: "Sell My House Fast Putnam County NY | As-Is Cash",
    metaDescription:
      "Sell your Putnam County, NY house as-is for cash — Carmel, Brewster, Cold Spring, Mahopac. Attorney closing, your timeline, no realtor commissions.",
    h1: "Sell Your House Fast in Putnam County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Putnam County — the compact county between Westchester and Dutchess, with Carmel as county seat and Hudson Highlands villages such as Cold Spring on the river. If your Putnam home needs work, sits vacant, came through an estate, or simply will not fit a long listing, we can make a cash offer and close on your timeline with a New York real estate attorney and title company. We buy as-is in Carmel (including Lake Carmel and Mahopac areas), Brewster, Cold Spring, Patterson, and elsewhere in the county. No realtor commissions and no fees charged by us.",
    sections: [
      {
        heading: "Putnam’s small-county map: lakes, Highlands, and rail",
        paragraphs: [
          "Putnam is geographically smaller than its neighbors but not uniform. The Town of Carmel — county seat — includes Lake Carmel and the Mahopac hamlet around Lake Mahopac. Brewster (Village of Brewster in the Town of Southeast) sits on Metro-North’s Harlem Line toward Grand Central. Cold Spring, in the Town of Philipstown, faces the Hudson Highlands with Hudson Line service and a walkable Main Street that draws day visitors. Patterson covers more rural northeastern Putnam near I-84. Heirs and long-distance owners often hold property here without living nearby, which makes vacancy and maintenance costs feel heavier than a listing timeline allows.",
          "We keep city/town pages for Carmel, Brewster, Cold Spring, Mahopac, and Patterson so you can read local notes, then use this hub for county-wide probate, recording, and process questions.",
        ],
      },
      {
        heading: "Carmel Surrogate’s Court and as-is Putnam sales",
        paragraphs: [
          "Putnam County Surrogate’s Court is in Carmel at the Historic Courthouse, 44 Gleneida Avenue. Estate fiduciaries typically need Letters Testamentary or Letters of Administration before conveying estate real estate. County land records are handled through Putnam County offices in Carmel (county government is centered at County Center). When you sell to us, attorney and title manage clear-title and recording steps while you skip repairs, staging, and open houses.",
          "Putnam housing often includes mid-century lake-area homes, older village houses in Cold Spring and Brewster, and rural dwellings that need systems updates before a retail buyer would finance comfortably. Sellers also reach us for inherited cabins or primary residences, divorce-driven sales, and properties that would list “as-is” anyway. Our Putnam as-is guide goes deeper on that path; the short version is that we already price houses in their current condition.",
        ],
      },
      {
        heading: "From offer to closing in Putnam County",
        paragraphs: [
          "Send property details via the contact page or by phone. We aim to present a cash offer within 24 hours. If you accept, you set the closing date; a New York attorney and title company handle paperwork and recording.",
          "Read how it works for the full sequence, or open our Putnam as-is article and the deferred-maintenance guide for sellers weighing repair quotes against a direct sale. Situation pages cover vacant houses, probate, and inherited property.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Which Putnam County towns do you buy in?",
        answer:
          "We buy throughout Putnam County, including Carmel, Brewster, Cold Spring, Mahopac, and Patterson. If your hamlet or village is not named on a separate page, we still evaluate the property based on condition and clear title.",
      },
      {
        question: "Where is Putnam County Surrogate’s Court?",
        answer:
          "Putnam County Surrogate’s Court is in Carmel at the Historic Courthouse on Gleneida Avenue. Fiduciaries usually need court-issued letters before selling estate real estate. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Can I sell my Putnam house without making repairs?",
        answer:
          "Yes. We specialize in as-is purchases in Putnam County. You do not need to renovate, stage, or finish a cleanout before closing.",
      },
      {
        question: "Do you buy lake-area homes in Mahopac or Lake Carmel?",
        answer:
          "Yes. Lake Carmel and Mahopac sit within the Town of Carmel. We buy houses in those communities as-is, including properties that need substantial updates.",
      },
      {
        question: "How does a cash closing work for a Putnam County property?",
        answer:
          "After you accept an offer, closing is coordinated with a New York real estate attorney and a title company. You choose the timeline. We do not charge realtor commissions or fees from us.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/blog/how-to-sell-house-as-is-putnam-county-ny-w36", label: "Sell a house as-is in Putnam County" },
      { href: "/blog/selling-house-deferred-maintenance-hudson-valley-w39", label: "Deferred maintenance and selling" },
      { href: "/situations/as-is", label: "Sell as-is" },
      { href: "/situations/vacant-house", label: "Sell a vacant house" },
      { href: "/situations/inherited-property", label: "Sell an inherited house" },
      { href: "/situations/probate", label: "Probate house sale" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-carmel-ny", label: "Carmel" },
      { href: "/sell-my-house-fast-brewster-ny", label: "Brewster" },
      { href: "/sell-my-house-fast-cold-spring-ny", label: "Cold Spring" },
      { href: "/sell-my-house-fast-mahopac-ny", label: "Mahopac" },
      { href: "/sell-my-house-fast-patterson-ny", label: "Patterson" },
    ],
  },

  rockland: {
    metaTitle: "Sell My House Fast Rockland County NY | Cash Offer",
    metaDescription:
      "Cash home buyer in Rockland County, NY — Nyack, Spring Valley, New City, Suffern & more. As-is offers, attorney closings, no realtor commissions.",
    h1: "Sell Your House Fast in Rockland County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Rockland County on the west bank of the Hudson, just north of New Jersey and a short drive from the George Washington Bridge corridor. From Nyack’s river villages to Spring Valley, New City, Suffern, Haverstraw, and Nanuet, we review properties as they stand and present cash offers without requiring repairs or empty tenants first. Closings use a New York real estate attorney and title company on your schedule. There are no realtor commissions and no fees charged by us.",
    sections: [
      {
        heading: "Rockland’s west-bank communities and why local structure matters",
        paragraphs: [
          "Rockland is New York’s smallest county by land area, yet it packs distinct places. Nyack is an incorporated village in the Town of Orangetown; Upper Nyack and South Nyack are separate villages nearby. Spring Valley is a densely built village; New City is the county seat hamlet in the Town of Clarkstown; Suffern sits on the New Jersey line with rail toward Hoboken and Penn Station; Haverstraw faces the Hudson; Nanuet is a Clarkstown hamlet near major retail corridors. Town-versus-village boundaries affect taxes, permits, and which hall answers the phone — always verify the municipality on your bill.",
          "Dedicated pages cover Nyack, Spring Valley, New City, Suffern, Haverstraw, and Nanuet. Use them for place-specific notes; use this hub when your question is county-wide (courts, recording, foreclosure timing, or process).",
        ],
      },
      {
        heading: "New City courts, judicial foreclosure, and tenant/estate sales",
        paragraphs: [
          "Rockland County Surrogate’s Court and other county courts are centered at 1 South Main Street in New City. Estate fiduciaries typically need Letters Testamentary or Letters of Administration from Surrogate’s Court before conveying estate real estate. Deeds and mortgages record with the Rockland County Clerk in New City. We coordinate attorney and title around those requirements and still buy the house as-is.",
          "Rockland sellers often contact us when multi-family or older single-family stock needs work, when tenants make a conventional listing painful, when an inherited house must be liquidated, or when a foreclosure action is underway. New York foreclosure is judicial: the lender sues in court and may file a notice of pendency with the county clerk. Our Rockland foreclosure guide explains seller options in plain language; it is educational, not legal advice — speak with counsel about your case. When a cash sale fits, we can move on a timeline that works with payoff figures and title.",
        ],
      },
      {
        heading: "Requesting a Rockland County cash offer",
        paragraphs: [
          "Reach us through the contact page or by phone with basic property details. We aim to return a cash offer within 24 hours. Accept only if the number and timing work; then close with attorney and title while the deed records in New City.",
          "Review how it works, read our Rockland foreclosure article, or open guides on selling with problem tenants and stopping foreclosure by selling in New York. Situation pages cover foreclosure, bad tenants, probate, and as-is sales.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy houses in Nyack, Spring Valley, and New City?",
        answer:
          "Yes. We buy throughout Rockland County, including Nyack, Spring Valley, New City, Suffern, Haverstraw, and Nanuet. Village and town lines can be confusing — check your tax bill — and we buy across those municipalities.",
      },
      {
        question: "Where is Rockland County Surrogate’s Court?",
        answer:
          "Rockland County Surrogate’s Court is in New City at 1 South Main Street. Fiduciaries usually need court-issued letters before conveying estate real estate. We coordinate with estate counsel and purchase as-is.",
      },
      {
        question: "Can a cash sale help if I am facing foreclosure in Rockland?",
        answer:
          "Sometimes. New York foreclosure is a court process, and timing depends on your case. Speak with your attorney about status and payoff. When a sale is still possible, we buy as-is and close through attorney and title on an agreed schedule.",
      },
      {
        question: "Do I need to move tenants out before selling a Rockland rental?",
        answer:
          "No. We purchase tenant-occupied Rockland properties. You do not need to complete an eviction before requesting a cash offer.",
      },
      {
        question: "Are repairs required before a Rockland County cash closing?",
        answer:
          "No. We buy Rockland houses as-is. Renovations, staging, and cleanouts are not required before closing.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/blog/avoid-foreclosure-rockland-county-ny-w30", label: "Avoiding foreclosure in Rockland County" },
      { href: "/blog/how-to-stop-foreclosure-in-new-york-selling-house-w38", label: "Stopping foreclosure by selling in NY" },
      { href: "/situations/foreclosure", label: "Foreclosure situation" },
      { href: "/situations/bad-tenants", label: "Sell with tenants" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/as-is", label: "Sell as-is" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-nyack-ny", label: "Nyack" },
      { href: "/sell-my-house-fast-spring-valley-ny", label: "Spring Valley" },
      { href: "/sell-my-house-fast-new-city-ny", label: "New City" },
      { href: "/sell-my-house-fast-suffern-ny", label: "Suffern" },
      { href: "/sell-my-house-fast-haverstraw-ny", label: "Haverstraw" },
      { href: "/sell-my-house-fast-nanuet-ny", label: "Nanuet" },
    ],
  },

  ulster: {
    metaTitle: "Sell House Fast Ulster County NY | Vacant or As-Is",
    metaDescription:
      "Cash buyer for Ulster County, NY homes — Kingston, New Paltz, Woodstock, Saugerties. Vacant or as-is OK. Attorney closing, no realtor commissions.",
    h1: "Sell Your House Fast in Ulster County, NY",
    opener:
      "Cash Ready Homes Hudson Valley buys houses for cash in Ulster County — from Kingston’s Stockade and Rondout districts to New Paltz, Woodstock, Saugerties, Highland, Marlboro, Rosendale, Ellenville, and Catskill-adjacent hamlets such as Phoenicia. Sellers here often hold vacant houses, inherited mountain or village properties, or homes that need work after years of seasonal use. We buy those properties as-is, close with a New York real estate attorney and title company on your timeline, and charge no realtor commissions and no fees of our own.",
    sections: [
      {
        heading: "Ulster’s mix: river cities, college town, Catskills, and Shawangunks",
        paragraphs: [
          "Ulster stretches from the Hudson’s west bank into the Catskill Mountains and along the Shawangunk Ridge. Kingston, the county seat, joined historic Stockade/Uptown and Rondout districts when the city incorporated in 1872. New Paltz pairs a village (home to SUNY New Paltz and Huguenot Street) with a surrounding town. Woodstock and Saugerties draw arts and visitor traffic; Highland and Marlboro sit along the river opposite Dutchess; Rosendale and Ellenville lean toward ridge and valley recreation; Phoenicia is a Shandaken hamlet known as a Catskills gateway. Distances are larger than in Rockland or Putnam, so out-of-area heirs frequently manage vacant houses from afar.",
          "We publish city pages for Kingston, Woodstock, Saugerties, New Paltz, Ellenville, Highland, Marlboro, Rosendale, and Phoenicia. Start there for local context, then use this county hub for Surrogate’s Court, recording, and vacant-house process notes.",
        ],
      },
      {
        heading: "Kingston Surrogate’s Court, vacant houses, and estate sales",
        paragraphs: [
          "Ulster County Surrogate’s Court is in Kingston at the County Office Building, 244 Fair Street (3rd floor). Fiduciaries typically need Letters Testamentary or Letters of Administration before conveying estate real estate. Supreme and County Court matters often use the Ulster County Courthouse on Wall Street; land records are handled through Ulster County offices in Kingston. We buy estate properties as-is and coordinate with counsel and title so court authority and recording line up.",
          "Vacant Ulster houses are a recurring seller situation: seasonal places left empty, inherited homes waiting on family decisions, or primary residences vacated after a move. Vacancy still means taxes, insurance, freeze risk, and occasional vandalism concerns — costs that accrue while a traditional listing prepares. Our Ulster vacant-house article walks through options; as a cash buyer we can purchase without requiring you to restore the property first. Tenant-occupied rentals, fire- or water-damaged homes, and divorce-driven sales are also within scope when title is workable.",
        ],
      },
      {
        heading: "How to start an Ulster County cash sale",
        paragraphs: [
          "Contact us with the address and situation. We aim to deliver a cash offer within 24 hours. If you accept, you choose the closing date; attorney and title handle the Ulster County recording path.",
          "Begin on the contact page, skim how it works, and read selling a vacant house in Ulster County plus our inherited-property and probate guides. Situation pages also cover as-is sales and fire-damaged houses.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Do you buy vacant houses in Ulster County?",
        answer:
          "Yes. Vacant Ulster County houses are a common reason sellers contact us. You do not need to restore, clean out, or re-occupy the property before requesting a cash offer.",
      },
      {
        question: "Where is Ulster County Surrogate’s Court for probate sales?",
        answer:
          "Ulster County Surrogate’s Court is in Kingston at 244 Fair Street (County Office Building, 3rd floor). Estate fiduciaries usually need court-issued letters before conveying real estate. We coordinate with estate counsel and buy as-is.",
      },
      {
        question: "Do you buy in Kingston, New Paltz, and Woodstock?",
        answer:
          "Yes. We buy throughout Ulster County, including Kingston, New Paltz (village and town), Woodstock, Saugerties, Highland, Marlboro, Rosendale, Ellenville, and Phoenicia.",
      },
      {
        question: "Can I sell an Ulster rental with tenants still in place?",
        answer:
          "Yes. Tenant-occupied Ulster properties can qualify for a cash offer. Completing an eviction first is not required.",
      },
      {
        question: "Are repairs required before closing with Cash Ready Homes in Ulster?",
        answer:
          "No. We buy Ulster County houses as-is. Repairs, staging, and cleanouts are optional for you — not required by us.",
      },
    ],
    internalLinks: [
      { href: "/contact", label: "Contact us for a cash offer" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/blog/selling-vacant-house-ulster-county-w29", label: "Selling a vacant house in Ulster County" },
      { href: "/blog/selling-inherited-house-hudson-valley-ny", label: "Selling an inherited Hudson Valley house" },
      { href: "/situations/vacant-house", label: "Vacant house situation" },
      { href: "/situations/inherited-property", label: "Inherited property" },
      { href: "/situations/probate", label: "Probate house sale" },
      { href: "/situations/as-is", label: "Sell as-is" },
    ],
    cityLinks: [
      { href: "/sell-my-house-fast-kingston-ny", label: "Kingston" },
      { href: "/sell-my-house-fast-new-paltz-ny", label: "New Paltz" },
      { href: "/sell-my-house-fast-woodstock-ny", label: "Woodstock" },
      { href: "/sell-my-house-fast-saugerties-ny", label: "Saugerties" },
      { href: "/sell-my-house-fast-highland-ny", label: "Highland" },
      { href: "/sell-my-house-fast-ellenville-ny", label: "Ellenville" },
      { href: "/sell-my-house-fast-marlboro-ny", label: "Marlboro" },
      { href: "/sell-my-house-fast-rosendale-ny", label: "Rosendale" },
      { href: "/sell-my-house-fast-phoenicia-ny", label: "Phoenicia" },
    ],
  },
};

export function getCountyPageContent(slug: string): CountyPageContent | undefined {
  return countyPageContent[slug];
}
