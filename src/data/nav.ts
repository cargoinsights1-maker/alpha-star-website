export interface NavLink {
  label: string;
  href: string;
}

export interface DropdownItem {
  label: string;
  href: string;
}

// a "column" groups a heading (optionally itself a link) with its sub-items —
// used both by the Services mega-menu (6 real categories) and by the flatter
// dropdowns below, which just use a single unlabeled column.
export interface NavColumn {
  heading?: string;
  headingHref?: string;
  items: DropdownItem[];
}

// Full site nav, replacing the previous Home/About/Services/Industries/
// Careers/CSR/Resources/Contact set entirely, per the client's supplied menu
// structure. Insights and "Our Team" are footer-only (see Footer.astro) and
// deliberately don't appear here. None of these destination pages exist yet —
// same placeholder-link convention already used site-wide (e.g. the old
// /careers, /csr links) until each page gets built.
export const homeLink: NavLink = { label: "Home", href: "/" };

export const servicesMegaMenu: NavColumn[] = [
  {
    heading: "Air Freight",
    headingHref: "/services/air-freight",
    items: [
      { label: "General Cargo", href: "/services/air-freight#general-cargo" },
      { label: "International Courier", href: "/services/air-freight#international-courier" },
      { label: "Time Critical / NFO", href: "/services/air-freight#time-critical-nfo" },
      { label: "AOG", href: "/services/air-freight/aog" },
      { label: "OBC", href: "/services/air-freight#obc" },
      { label: "Dangerous Goods", href: "/services/air-freight#dangerous-goods" },
      { label: "Pharma / Healthcare", href: "/services/air-freight#pharma-healthcare" },
      { label: "Perishables", href: "/services/air-freight#perishables" },
      { label: "Charter", href: "/services/air-freight#charter" },
    ],
  },
  {
    heading: "Sea Freight",
    headingHref: "/services/sea-freight",
    items: [
      { label: "FCL", href: "/services/sea-freight#fcl" },
      { label: "LCL", href: "/services/sea-freight#lcl" },
      { label: "Breakbulk", href: "/services/sea-freight#breakbulk" },
      { label: "Project / OOG Cargo", href: "/services/sea-freight#project-oog-cargo" },
      { label: "Dangerous Goods", href: "/services/sea-freight#dangerous-goods" },
      { label: "Cross Trade", href: "/services/sea-freight#cross-trade" },
    ],
  },
  {
    heading: "Road Freight",
    headingHref: "/services/road-freight",
    items: [
      { label: "FTL / LTL", href: "/services/road-freight#ftl-ltl" },
      { label: "GCC", href: "/services/road-freight#gcc" },
      { label: "Türkiye", href: "/services/road-freight#turkiye" },
      { label: "Egypt / Jordan", href: "/services/road-freight#egypt-jordan" },
      { label: "Kazakhstan / Turkmenistan", href: "/services/road-freight#kazakhstan-turkmenistan" },
      { label: "Georgia / Azerbaijan", href: "/services/road-freight#georgia-azerbaijan" },
    ],
  },
  {
    heading: "Warehousing & 3PL",
    headingHref: "/warehousing-3pl",
    items: [],
  },
  {
    heading: "Multimodal",
    headingHref: "/services/multimodal",
    items: [
      { label: "Sea-Air", href: "/services/multimodal#sea-air" },
      { label: "Air-Sea", href: "/services/multimodal#air-sea" },
      { label: "Road / Sea Combinations", href: "/services/multimodal#road-sea-combinations" },
    ],
  },
  {
    heading: "Customs Clearance",
    headingHref: "/services/customs-clearance",
    items: [
      { label: "Import / Export", href: "/services/customs-clearance#import-export" },
      { label: "Free Zone / Mainland", href: "/services/customs-clearance#free-zone-mainland" },
      { label: "Transit Clearance", href: "/services/customs-clearance#transit-clearance" },
    ],
  },
];

export const shipSparesItems: DropdownItem[] = [
  { label: "Ship Spares in Transit", href: "/ship-spares#ship-spares-in-transit" },
  { label: "Door to Deck", href: "/ship-spares#door-to-deck" },
  { label: "24/7 Urgent Support", href: "/ship-spares#urgent-support" },
  { label: "Customs & Transit Handling", href: "/ship-spares#customs-transit-handling" },
  { label: "Marine Logistics", href: "/ship-spares#marine-logistics" },
];

export const warehousingItems: DropdownItem[] = [
  { label: "UAE Gateway Solutions", href: "/warehousing-3pl#uae-gateway-solutions" },
  { label: "Transshipment", href: "/warehousing-3pl#transshipment" },
  { label: "JAFZA Warehousing & 3PL", href: "/warehousing-3pl#jafza-warehousing-3pl" },
  { label: "Bonded Warehousing", href: "/warehousing-3pl#bonded-warehousing" },
  { label: "Cross Stuffing", href: "/warehousing-3pl#cross-stuffing" },
  { label: "Sea-Air / Air-Sea Gateway", href: "/warehousing-3pl#sea-air-gateway" },
  { label: "Regional Distribution", href: "/warehousing-3pl#regional-distribution" },
  { label: "E-commerce / Fulfilment", href: "/warehousing-3pl#ecommerce-fulfilment" },
  { label: "Value Added Services", href: "/warehousing-3pl#value-added-services" },
  { label: "WMS / Inventory Visibility", href: "/warehousing-3pl#wms-inventory-visibility" },
];

export const industryItems: DropdownItem[] = [
  { label: "Marine & Ship Spares", href: "/industries#marine-ship-spares" },
  { label: "Oil & Gas / Energy", href: "/industries#oil-gas-energy" },
  { label: "Aviation & Aerospace", href: "/industries#aviation-aerospace" },
  { label: "Automotive", href: "/industries#automotive" },
  { label: "Industrial / Projects", href: "/industries#industrial-projects" },
  { label: "Pharma & Healthcare", href: "/industries#pharma-healthcare" },
  { label: "Food & Perishables", href: "/industries#food-perishables" },
  { label: "Retail / E-commerce", href: "/industries#retail-ecommerce" },
];

export const airlineCargoItems: DropdownItem[] = [
  { label: "Turkmenistan Airlines – Exclusive CSA UAE", href: "/airline-cargo-representation#turkmenistan-airlines" },
  { label: "Air Arabia – CSA", href: "/airline-cargo-representation#air-arabia" },
  { label: "Cargo Sales & Representation", href: "/airline-cargo-representation#cargo-sales-representation" },
  { label: "Airline Cargo Enquiries", href: "/airline-cargo-representation#airline-cargo-enquiries" },
];

// footer-only sections, per the client's spec — intentionally absent from
// the header nav above.
export const insightsItems: DropdownItem[] = [
  { label: "Real Cargo Stories", href: "/insights#real-cargo-stories" },
  { label: "Case Studies", href: "/insights#case-studies" },
  { label: "Market / Operational Updates", href: "/insights#market-operational-updates" },
  { label: "Customer Advisories", href: "/insights#customer-advisories" },
  { label: "Logistics Guides / Useful Tools", href: "/insights#logistics-guides-useful-tools" },
  { label: "News", href: "/insights#news" },
];

export const ourTeamItems: DropdownItem[] = [
  { label: "Our Story", href: "/our-team#our-story" },
  { label: "Leadership / Team", href: "/our-team#leadership-team" },
  { label: "Offices & Facilities", href: "/our-team#offices-facilities" },
  { label: "Global Network", href: "/our-team#global-network" },
  { label: "Certifications & Memberships", href: "/our-team#certifications-memberships" },
  { label: "Technology & Visibility", href: "/our-team#technology-visibility" },
  { label: "Sustainability / Compliance", href: "/our-team#sustainability-compliance" },
  { label: "Careers", href: "/our-team#careers" },
  { label: "Contact", href: "/contact" },
];
