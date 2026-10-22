import { servicesMegaMenu, warehousingItems } from "./nav";

export interface SubServiceContent {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface Differentiator {
  label: string;
  description: string;
  icon: string;
}

export interface RelatedService {
  slug: string;
  label: string;
  href: string;
  image?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServicePageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroIntro: string;
  heroImage?: string;
  heroGradient: string;
  overviewHeading: string;
  overview: string[];
  overviewImage?: string;
  differentiators: Differentiator[];
  processHeading: string;
  process: ProcessStep[];
  subServicesHeading: string;
  subServicesIntro: string;
  subServices: SubServiceContent[];
  relatedServices: RelatedService[];
}

// Builds a sub-service entry from the matching src/data/nav.ts item so the
// anchor id/label can never drift from what the header mega-menu links to —
// only description/icon are authored here.
function fromNav(navItems: { label: string; href: string }[], label: string, description: string, icon: string): SubServiceContent {
  const navItem = navItems.find((item) => item.label === label);
  if (!navItem) {
    throw new Error(`services.ts: no nav.ts entry found for sub-item "${label}"`);
  }
  return { id: navItem.href.split("#")[1], label: navItem.label, description, icon };
}

const airFreightNavItems = servicesMegaMenu[0].items;

export const airFreight: ServicePageContent = {
  slug: "air-freight",
  metaTitle: "Air Freight Services in Dubai & the GCC | Alpha Star Shipping",
  metaDescription:
    "Scheduled and time critical air freight out of Dubai, covering general cargo, AOG, OBC, dangerous goods, pharma and charter flights across the GCC and beyond.",
  eyebrow: "Air Freight",
  heroTitle: "Air Freight",
  heroIntro: "Scheduled and time critical air cargo out of Dubai, built around the deadlines that matter most to your shipment.",
  heroImage: "/services/air-freight.webp",
  heroGradient: "linear-gradient(135deg, #152056, #12557f)",
  overviewHeading: "Air Freight Built Around Your Deadline",
  overview: [
    "Alpha Star moves air cargo through Dubai's airports with the speed air freight is chosen for in the first place. Whether it is a routine pallet on a scheduled flight or a single part needed to get a grounded aircraft back in the air, our air freight desk handles booking, documentation and airside coordination so your shipment makes the flight it needs to be on.",
    "Dubai sits at the centre of the GCC's air cargo network, with direct capacity to Europe, Asia, Africa and the Americas inside a single connection. We use that position to keep transit times short and routing flexible, whether your cargo moves on a major carrier's scheduled hold or a dedicated charter booked for your shipment alone.",
  ],
  overviewImage: "/services/air-freight-ground.webp",
  differentiators: [
    {
      label: "Priority Airport Handling",
      description: "Established relationships with Dubai's cargo terminals keep booking and dock to flight turnaround fast.",
      icon: '<circle cx="12" cy="12" r="9" /><path d="M12 16V8M8 11l4-4 4 4" />',
    },
    {
      label: "24/7 Urgent & AOG Desk",
      description: "A desk that stays open around the clock for time critical, NFO and AOG shipments that cannot wait.",
      icon: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />',
    },
    {
      label: "IATA Dangerous Goods Compliance",
      description: "DG shipments are documented, packed and declared to IATA standards before they ever reach the ramp.",
      icon: '<path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" /><path d="M9.5 12l2 2 3.5-4" />',
    },
  ],
  processHeading: "How Your Air Freight Moves With Us",
  process: [
    {
      title: "Book & Confirm",
      description: "Share your cargo details, dimensions and deadline, and we confirm space on the flight that actually meets it.",
    },
    {
      title: "Document & Prepare",
      description: "Export paperwork, labelling and any dangerous goods or pharma declarations are completed before cargo reaches the terminal.",
    },
    {
      title: "Airside Handling",
      description: "Our team manages customs clearance, build up and airline coordination on the ground so nothing holds up departure.",
    },
    {
      title: "Track & Deliver",
      description: "You get visibility on your shipment's status from departure through to arrival and final delivery.",
    },
  ],
  subServicesHeading: "Air Freight Services We Offer",
  subServicesIntro:
    "From a routine pallet to a single urgent part, every Air Freight shipment gets handled by the team built for that specific job.",
  subServices: [
    fromNav(
      airFreightNavItems,
      "General Cargo",
      "Standard palletised and loose cargo booked on scheduled flights, the most common and cost effective way to move freight by air. We consolidate where it makes sense and book the routing that balances cost against transit time for your shipment.",
      '<rect x="3" y="7" width="18" height="13" rx="1.5" /><path d="M3 7l9-4 9 4M12 3v4" />',
    ),
    fromNav(
      airFreightNavItems,
      "International Courier",
      "Door to door express handling for urgent documents and small parcels, with minimal paperwork and fast customs release. Built for shipments where speed and simplicity matter more than volume.",
      '<path d="M3 8l9-5 9 5-9 5-9-5Z" /><path d="M3 8v8l9 5 9-5V8" />',
    ),
    fromNav(
      airFreightNavItems,
      "Time Critical / NFO",
      "Urgent shipments booked onto the next available flight out rather than the standard schedule, for deadlines that cannot move. Our urgent desk coordinates pickup, documentation and airline booking in parallel to save every possible hour.",
      '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" />',
    ),
    fromNav(
      airFreightNavItems,
      "AOG",
      "Aircraft On Ground parts get first priority booking to get a grounded aircraft back in service with minimum downtime. We handle the booking, customs and last mile to the hangar as one continuous job, not a handoff between parties.",
      '<circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" />',
    ),
    fromNav(
      airFreightNavItems,
      "OBC",
      "An on board courier travels with your shipment in person, for high value or high control cargo that needs eyes on it the whole way. The courier stays with the shipment from pickup to hand delivery, with no stop in a cargo warehouse in between.",
      '<circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-4 3-6 7-6s7 2 7 6" />',
    ),
    fromNav(
      airFreightNavItems,
      "Dangerous Goods",
      "Hazardous cargo packed, labelled and declared to IATA DGR standards, handled by a team trained to keep it compliant from pickup to delivery. We confirm classification and airline acceptance before your shipment ever leaves your site.",
      '<path d="M12 3l9 16H3L12 3Z" /><path d="M12 10v4M12 17h.01" />',
    ),
    fromNav(
      airFreightNavItems,
      "Pharma / Healthcare",
      "Temperature controlled handling for vaccines, medicines and medical equipment, moved fast to protect a cold chain that cannot break. We plan routing and ground handling time specifically to limit a shipment's time outside controlled conditions.",
      '<path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 11c0 5.65-7 10-7 10Z" />',
    ),
    fromNav(
      airFreightNavItems,
      "Perishables",
      "Fresh produce, flowers and other time sensitive goods routed on the fastest suitable flight to protect shelf life on arrival. Booking and customs clearance are planned around the shipment's shelf life, not the other way around.",
      '<path d="M12 2v20M12 7c-3 0-5 2-5 5M12 12c3 0 5 2 5 5" />',
    ),
    fromNav(
      airFreightNavItems,
      "Charter",
      "A dedicated aircraft reserved for your cargo alone, for oversized, high volume or mission critical shipments that cannot share a hold. We source and coordinate the aircraft so your shipment moves on your schedule, not a scheduled carrier's.",
      '<line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 12 2" />',
    ),
  ],
  relatedServices: [
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};

// Reusable icon fragments shared across pages below, so the same concept
// (route, transfer, shield, etc.) always looks identical wherever it appears.
const icons = {
  anchor: '<circle cx="12" cy="5" r="2" /><path d="M12 7v13M6 13H3a9 9 0 0 0 9 7 9 9 0 0 0 9-7h-3M8 10l-2 3M16 10l2 3" />',
  box: '<rect x="3" y="7" width="18" height="13" rx="1.5" /><path d="M3 7l9-4 9 4M12 3v4" />',
  boxGrid: '<rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />',
  expand: '<path d="M4 4h6M4 4v6M4 4l7 7M20 20h-6M20 20v-6M20 20l-7-7" />',
  layers: '<path d="M3 17l9 4 9-4M3 12l9 4 9-4M3 7l9 4 9-4" />',
  shield: '<path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" /><path d="M9.5 12l2 2 3.5-4" />',
  clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />',
  globe: '<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />',
  truck: '<rect x="2" y="9" width="12" height="8" rx="1" /><path d="M14 11h4l3 3v3h-3" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" />',
  pin: '<path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" />',
  route: '<path d="M4 18c4-10 12-10 16 0" /><circle cx="4" cy="18" r="1.5" /><circle cx="20" cy="18" r="1.5" />',
  transfer: '<path d="M4 7h16M4 7l4-4M4 7l4 4M20 17H4M20 17l-4-4M20 17l-4 4" />',
  warehouse: '<path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z" /><path d="M9 21v-7h6v7" />',
  hub: '<circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v6M12 13l-5.5 4M12 13l5.5 4" />',
  boxCheck: '<rect x="3" y="7" width="18" height="13" rx="1.5" /><path d="M3 7l9-4 9 4" /><path d="M9 13l2 2 4-4" />',
  tag: '<path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.59a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83Z" /><circle cx="7.5" cy="7.5" r="1.2" />',
  document: '<rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 8h8M8 12h8M8 16h5" />',
  hazard: '<path d="M12 3l9 16H3L12 3Z" /><path d="M12 10v4M12 17h.01" />',
  scale: '<path d="M12 3v18M7 7l-4 7a4 4 0 0 0 8 0l-4-7ZM17 7l-4 7a4 4 0 0 0 8 0l-4-7Z" /><path d="M5 7h14" />',
  person: '<circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-4 3-6 7-6s7 2 7 6" />',
};

const seaFreightNavItems = servicesMegaMenu[1].items;

export const seaFreight: ServicePageContent = {
  slug: "sea-freight",
  metaTitle: "Sea Freight Services in Dubai & the GCC | Alpha Star Shipping",
  metaDescription:
    "Ocean freight through Jebel Ali and the wider GCC, covering FCL, LCL, breakbulk, project and OOG cargo, dangerous goods and cross trade shipments.",
  eyebrow: "Sea Freight",
  heroTitle: "Sea Freight",
  heroIntro: "Reliable ocean freight through Jebel Ali and beyond, scaled to fit a single pallet or a full container.",
  heroImage: "/services/sea-freight.webp",
  heroGradient: "linear-gradient(135deg, #12557f, #2f8fc9)",
  overviewHeading: "Sea Freight Scaled to Your Cargo",
  overview: [
    "Alpha Star moves ocean freight through Jebel Ali and the wider GCC port network, booking the container type and sailing that actually fits your cargo rather than a one size answer. From a single pallet sharing space in a consolidated container to a full container reserved for one shipper, our sea freight desk handles booking, documentation and port coordination from origin to destination.",
    "Dubai's ports sit on one of the busiest east-west shipping lanes in the world, giving direct sailings to Asia, Europe, Africa and the Americas. We use that connectivity to keep routing flexible and transit times competitive, whether your cargo is standard containerised freight or an oversized load that needs its own lifting plan.",
  ],
  overviewImage: "/services/sea-freight-overview.webp",
  differentiators: [
    { label: "Jebel Ali Port Expertise", description: "Direct relationships at one of the world's busiest transshipment hubs keep container bookings and port handling moving.", icon: icons.anchor },
    { label: "FCL & LCL Flexibility", description: "Full and shared container options booked side by side, so you only pay for the space your cargo actually needs.", icon: icons.box },
    { label: "OOG & Project Cargo Ready", description: "Oversized and out of gauge loads get their own lifting and stowage plan before they ever reach the quay.", icon: icons.expand },
  ],
  processHeading: "How Your Sea Freight Moves With Us",
  process: [
    { title: "Book & Consolidate", description: "Share your cargo volume and destination, and we confirm the container type and sailing that fits it best." },
    { title: "Document & Prepare", description: "Bill of lading, packing list and any dangerous goods or project cargo paperwork are completed before the vessel cut-off." },
    { title: "Port & Vessel Handling", description: "Our team manages terminal handling, loading and customs formalities at the port of origin." },
    { title: "Track & Deliver", description: "You get visibility from vessel departure through to arrival and final delivery at destination." },
  ],
  subServicesHeading: "Sea Freight Services We Offer",
  subServicesIntro: "From a shared container to a dedicated vessel booking, every Sea Freight shipment gets the handling it actually needs.",
  subServices: [
    fromNav(seaFreightNavItems, "FCL", "A full container reserved for one shipper, loaded and sealed at your site or a nearby facility. The most direct way to move a larger shipment without sharing space or handling.", icons.box),
    fromNav(seaFreightNavItems, "LCL", "Your cargo shares a container with other shipments, consolidated and deconsolidated at either end. A cost effective option when you don't need a full container's worth of space.", icons.boxGrid),
    fromNav(seaFreightNavItems, "Breakbulk", "Cargo too large or oddly shaped for a standard container, loaded directly onto the vessel using cranes rather than boxed into a unit. Common for machinery, steel and other non-containerised freight.", icons.layers),
    fromNav(seaFreightNavItems, "Project / OOG Cargo", "Out of gauge and project cargo that exceeds standard container dimensions, planned with its own lifting, securing and permit strategy. Built for cargo measured in tonnes and metres, not pallets.", icons.expand),
    fromNav(seaFreightNavItems, "Dangerous Goods", "Hazardous cargo packed, labelled and declared to IMDG standards, handled by a team trained to keep it compliant from pickup to vessel.", icons.hazard),
    fromNav(seaFreightNavItems, "Cross Trade", "Freight moved between two countries where neither is the UAE, arranged and documented from our Dubai desk. Useful when your supply chain runs entirely outside the GCC but still needs a reliable forwarder behind it.", icons.globe),
  ],
  relatedServices: [
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};

const roadFreightNavItems = servicesMegaMenu[2].items;

export const roadFreight: ServicePageContent = {
  slug: "road-freight",
  metaTitle: "Road Freight Services in Dubai & the GCC | Alpha Star Shipping",
  metaDescription:
    "Full and part truckload road freight across the GCC, with overland lanes reaching Türkiye, Egypt, Jordan, Kazakhstan, Turkmenistan, Georgia and Azerbaijan.",
  eyebrow: "Road Freight",
  heroTitle: "Road Freight",
  heroIntro: "Full and part truckload freight across the GCC and the overland corridors beyond it.",
  heroImage: "/services/road-freight.webp",
  heroGradient: "linear-gradient(135deg, #152056, #d81f2a)",
  overviewHeading: "Road Freight Across the GCC and Beyond",
  overview: [
    "Alpha Star runs full and part truckload freight across the GCC, moving cargo between Dubai and every major market in the region by road. Whether your shipment needs a dedicated trailer or shares space with other freight, our road team plans the route and handles border documentation so delivery stays on schedule.",
    "Beyond the GCC, our road network extends overland toward Türkiye, Egypt and Jordan, and further into Kazakhstan, Turkmenistan, Georgia and Azerbaijan. These corridors give an alternative to sea or air for cargo moving between the Gulf and Central Asia or the Caucasus, often with a shorter transit than routing through a port.",
  ],
  overviewImage: "/services/road-freight-overview.webp",
  differentiators: [
    { label: "GCC-Wide Trucking Network", description: "Established trucking capacity across every GCC market, so cross-border delivery doesn't depend on finding a carrier at short notice.", icon: icons.truck },
    { label: "FTL & LTL Flexibility", description: "Full truckload for larger shipments, part loads for smaller ones, booked on the same desk without switching providers.", icon: icons.boxGrid },
    { label: "Overland Corridors to Central Asia", description: "Road lanes connecting the GCC through Türkiye, Egypt, Jordan and the Caucasus for cargo that doesn't need to move by sea or air.", icon: icons.pin },
  ],
  processHeading: "How Your Road Freight Moves With Us",
  process: [
    { title: "Book & Plan Route", description: "Share your cargo and destination, and we plan the lane, trailer type and border crossings it needs." },
    { title: "Document & Prepare", description: "Customs and transit paperwork for every border on the route is completed before the truck leaves." },
    { title: "Transit & Border Handling", description: "Our team tracks the shipment and manages border clearance at each crossing along the way." },
    { title: "Track & Deliver", description: "You get visibility from dispatch through to final delivery, wherever the destination sits on the route." },
  ],
  subServicesHeading: "Road Freight Lanes We Cover",
  subServicesIntro: "From same-day GCC deliveries to overland freight reaching Central Asia, every road lane is run by a team that knows its border crossings.",
  subServices: [
    fromNav(roadFreightNavItems, "FTL / LTL", "A dedicated trailer for full truckload shipments, or shared space on a part load when you don't need the whole trailer. Both booked on the same desk, priced to match what your cargo actually needs.", icons.truck),
    fromNav(roadFreightNavItems, "GCC", "Cross-border trucking between the UAE, Saudi Arabia, Oman, Qatar, Bahrain and Kuwait, run on established lanes with predictable transit times.", icons.pin),
    fromNav(roadFreightNavItems, "Türkiye", "Overland freight connecting the GCC to Türkiye, a key gateway between Gulf markets and Europe.", icons.route),
    fromNav(roadFreightNavItems, "Egypt / Jordan", "Road lanes into Egypt and Jordan, linking the GCC to North Africa and the Levant without routing through a port.", icons.route),
    fromNav(roadFreightNavItems, "Kazakhstan / Turkmenistan", "Overland freight reaching into Central Asia, an alternative to sea routing for cargo moving between the Gulf and these markets.", icons.route),
    fromNav(roadFreightNavItems, "Georgia / Azerbaijan", "Road freight into the Caucasus, connecting the GCC toward markets that sit between the Black and Caspian seas.", icons.route),
  ],
  relatedServices: [
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};

export const warehousing: ServicePageContent = {
  slug: "warehousing",
  metaTitle: "Warehousing & 3PL Services in Dubai | Alpha Star Shipping",
  metaDescription:
    "Bonded and mainland warehousing in Dubai, covering JAFZA storage, cross stuffing, regional distribution, e-commerce fulfilment and inventory visibility.",
  eyebrow: "Warehousing & 3PL",
  heroTitle: "Warehousing & 3PL",
  heroIntro: "Bonded and non-bonded warehousing in Dubai, built to store, handle and distribute your cargo for as long as you need it to sit still.",
  heroImage: "/services/warehousing.webp",
  heroGradient: "linear-gradient(135deg, #2f8fc9, #12557f)",
  overviewHeading: "Warehousing Built Around Your Supply Chain",
  overview: [
    "Alpha Star's warehousing and 3PL services give your cargo a place to land in Dubai, whether that's a short stop between two modes of transport or ongoing storage ahead of regional distribution. Our facilities handle receiving, storage, pick and pack, and outbound dispatch under one roof, so your inventory doesn't pass through multiple hands to get from port to customer.",
    "With both bonded and mainland storage options, cargo can sit duty suspended until it's re-exported or cleared for the UAE market, giving you flexibility on when and where duty actually becomes payable. That flexibility is especially useful for cargo using Dubai as a regional distribution point rather than a final destination.",
  ],
  overviewImage: "/services/warehousing-overview.webp",
  differentiators: [
    { label: "Bonded & Mainland Storage", description: "Duty suspended bonded storage alongside mainland options, so you choose when duty becomes payable.", icon: icons.shield },
    { label: "Jebel Ali Port Connectivity", description: "Facilities linked directly to Jebel Ali Port, so cargo moves from vessel to storage without extra handling.", icon: icons.anchor },
    { label: "Inventory Visibility", description: "A warehouse management system that gives you real time stock visibility rather than a weekly report.", icon: icons.document },
  ],
  processHeading: "How Your Cargo Moves Through Our Warehouse",
  process: [
    { title: "Receive & Inspect", description: "Cargo is received against your purchase order and checked for condition and count before it's shelved." },
    { title: "Store & Manage", description: "Stock sits in bonded or mainland storage, tracked in our WMS so you always know what's on hand." },
    { title: "Pick & Prepare", description: "Orders are picked, packed and labelled for the next leg, whether that's regional distribution or final delivery." },
    { title: "Dispatch & Deliver", description: "Outbound shipments are loaded and tracked through to the customer or next mode of transport." },
  ],
  subServicesHeading: "Warehousing & 3PL Services We Offer",
  subServicesIntro: "From bonded storage to e-commerce fulfilment, every warehousing service here plugs straight into the rest of your supply chain.",
  subServices: [
    fromNav(warehousingItems, "UAE Gateway Solutions", "Dubai as the entry point for cargo headed across the GCC and wider region, with storage and handling set up for onward distribution rather than a single destination.", icons.pin),
    fromNav(warehousingItems, "Transshipment", "Cargo transferred from one vessel or mode to another at our facility, on its way to a final destination that isn't the UAE. A practical stop for freight using Dubai as a routing point.", icons.transfer),
    fromNav(warehousingItems, "JAFZA Warehousing & 3PL", "Bonded facilities inside Jebel Ali Free Zone, connected directly to the port so cargo moves from vessel to warehouse without clearing mainland customs first.", icons.warehouse),
    fromNav(warehousingItems, "Bonded Warehousing", "Storage where import duty stays suspended until cargo is re-exported, moved to another bonded facility, or formally cleared into the UAE market.", icons.shield),
    fromNav(warehousingItems, "Cross Stuffing", "Cargo repacked from one container into another, combining or splitting loads to match what the next leg of the journey actually needs.", icons.boxGrid),
    fromNav(warehousingItems, "Sea-Air / Air-Sea Gateway", "Cargo transferred between sea and air freight at our facility, combining the cost of ocean freight with the speed of an air leg for part of the journey.", icons.transfer),
    fromNav(warehousingItems, "Regional Distribution", "Stock held in Dubai and distributed out to GCC markets as orders come in, rather than shipped in bulk to each destination separately.", icons.hub),
    fromNav(warehousingItems, "E-commerce / Fulfilment", "Pick, pack and ship handling for online orders, built to move single units out the door as fast as a pallet moves out to a distributor.", icons.boxCheck),
    fromNav(warehousingItems, "Value Added Services", "Labelling, kitting, repackaging and light assembly done at the warehouse, so cargo leaves ready for shelf rather than needing another stop.", icons.tag),
    fromNav(warehousingItems, "WMS / Inventory Visibility", "A warehouse management system giving real time stock counts and location data, so you always know exactly what you have and where it sits.", icons.document),
  ],
  relatedServices: [
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};

const multimodalNavItems = servicesMegaMenu[4].items;

export const multimodal: ServicePageContent = {
  slug: "multimodal",
  metaTitle: "Multimodal Freight Services in Dubai & the GCC | Alpha Star Shipping",
  metaDescription:
    "Sea-air, air-sea and road-sea multimodal freight combinations, planned and tracked as a single shipment from Dubai across the GCC and beyond.",
  eyebrow: "Multimodal",
  heroTitle: "Multimodal",
  heroIntro: "Air, sea and road combined into a single routing, built to balance cost and speed across the whole journey.",
  heroGradient: "linear-gradient(135deg, #152056, #12557f)",
  overviewHeading: "One Routing, Every Mode You Need",
  overview: [
    "Some cargo doesn't fit neatly into a single mode of transport. Multimodal freight combines sea, air and road into one routing, using each mode for the leg of the journey it's actually best at rather than forcing your shipment onto a single carrier end to end.",
    "Alpha Star plans these combinations from one desk, so a shipment that starts on a vessel and finishes on a truck is still tracked and documented as a single job, not three separate ones handed between different providers.",
  ],
  differentiators: [
    { label: "One Desk, Every Mode", description: "Sea, air and road booked and tracked together, so a multimodal shipment never gets lost in a handoff between providers.", icon: icons.hub },
    { label: "Cost Balanced Against Speed", description: "Each leg of the journey uses whichever mode actually makes sense, instead of defaulting to the fastest or cheapest option throughout.", icon: icons.scale },
    { label: "Single Point of Contact", description: "One team manages documentation and tracking across every mode in the routing, not a different contact per leg.", icon: icons.person },
  ],
  processHeading: "How a Multimodal Shipment Moves",
  process: [
    { title: "Plan the Routing", description: "We map out which modes your shipment should use and in what order, based on cost, speed and what the cargo actually needs." },
    { title: "Document Once", description: "A single set of documentation covers the full journey, not a separate set for each leg." },
    { title: "Coordinate the Handoffs", description: "Our team manages the transfer between modes directly, so cargo doesn't sit waiting between legs." },
    { title: "Track End to End", description: "You get one view of the shipment's status across sea, air and road, from first pickup to final delivery." },
  ],
  subServicesHeading: "Multimodal Combinations We Offer",
  subServicesIntro: "Every combination below is planned and tracked as one shipment, not three separate ones.",
  subServices: [
    fromNav(multimodalNavItems, "Sea-Air", "Cargo starts on a vessel for the long haul and finishes by air for the final leg, balancing ocean freight's cost against air freight's speed where it matters most.", icons.transfer),
    fromNav(multimodalNavItems, "Air-Sea", "Cargo starts by air out of origin and finishes on a vessel, useful when the first leg needs speed but the rest of the journey can move at ocean freight's pace.", icons.transfer),
    fromNav(multimodalNavItems, "Road / Sea Combinations", "Cargo moves by road to or from a port, combining trucking's flexibility with ocean freight's capacity for the main leg of the journey.", icons.truck),
  ],
  relatedServices: [
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};

const customsClearanceNavItems = servicesMegaMenu[5].items;

export const customsClearance: ServicePageContent = {
  slug: "customs-clearance",
  metaTitle: "Customs Clearance Services in Dubai & the UAE | Alpha Star Shipping",
  metaDescription:
    "Import, export, free zone, mainland and transit customs clearance across the UAE, handled from documentation through to release.",
  eyebrow: "Customs Clearance",
  heroTitle: "Customs Clearance",
  heroIntro: "Import, export and transit clearance across the UAE's free zones and mainland, handled so your cargo doesn't sit waiting at the border.",
  heroImage: "/services/customs-clearance.webp",
  heroGradient: "linear-gradient(135deg, #12557f, #2f8fc9)",
  overviewHeading: "Customs Clearance That Keeps Cargo Moving",
  overview: [
    "Alpha Star handles customs clearance across the UAE's free zones and mainland, preparing and submitting declarations so your cargo clears without delays that weren't necessary in the first place. Whether cargo is entering the UAE market, leaving it, or simply passing through, our customs team manages the paperwork and the relationship with the authorities.",
    "Free zones and mainland each carry a different duty treatment, and cargo that moves between them needs its own declaration and documentation. We handle that distinction directly, so you don't need to track which rules apply to which part of your shipment.",
  ],
  overviewImage: "/services/customs-clearance-overview.webp",
  differentiators: [
    { label: "Free Zone & Mainland Expertise", description: "Declarations handled correctly for both free zone and mainland movements, so duty is only ever paid where it's actually owed.", icon: icons.shield },
    { label: "Fast Declaration Turnaround", description: "Documentation prepared and submitted ahead of arrival wherever possible, so cargo isn't waiting on paperwork at the border.", icon: icons.clock },
    { label: "Direct Authority Relationships", description: "Established relationships with UAE customs authorities keep queries and inspections moving instead of stalling a shipment.", icon: icons.document },
  ],
  processHeading: "How Your Customs Clearance Works",
  process: [
    { title: "Prepare Documentation", description: "We review your shipment details and prepare the declaration and supporting paperwork it needs." },
    { title: "Submit & Classify", description: "Declarations are submitted with the correct tariff classification and duty treatment for free zone or mainland movement." },
    { title: "Inspection & Release", description: "Our team manages any inspection queries directly with customs so release isn't held up waiting on a response." },
    { title: "Cargo Released", description: "Once cleared, cargo is released for pickup, onward transport or warehouse storage without further delay." },
  ],
  subServicesHeading: "Customs Clearance Services We Offer",
  subServicesIntro: "Every declaration below is prepared and managed by a team that works with UAE customs every day, not occasionally.",
  subServices: [
    fromNav(customsClearanceNavItems, "Import / Export", "Declarations for cargo entering or leaving the UAE, prepared with the correct classification and duty treatment from the start.", icons.transfer),
    fromNav(customsClearanceNavItems, "Free Zone / Mainland", "Clearance for cargo moving between a free zone and the UAE mainland, where duty becomes payable only once goods actually enter the domestic market.", icons.shield),
    fromNav(customsClearanceNavItems, "Transit Clearance", "Clearance for cargo passing through the UAE on its way to another destination, kept moving rather than treated as a full import.", icons.route),
  ],
  relatedServices: [
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
  ],
};
