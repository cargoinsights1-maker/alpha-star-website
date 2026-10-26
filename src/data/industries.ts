import type { Differentiator, RelatedService } from "./services";

// Industries are flat/standalone (no parent category the way sub-services
// have one), so unlike subServicePages.ts each entry is fully self-contained
// — hero image/gradient and differentiators aren't inherited from anywhere.
export interface IndustryPageContent {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroIntro: string;
  heroImage?: string;
  heroGradient: string;
  overviewHeading: string;
  overview: string[];
  differentiators: Differentiator[];
  relevantServicesHeading: string;
  relevantServices: RelatedService[];
  siblingDescription: string;
  icon: string;
}

// Local icon set, grown one entry at a time as industries are added — not
// exported from services.ts, so kept here rather than duplicating that
// module's private object.
const icons = {
  clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />',
  hazard: '<path d="M12 3l9 16H3L12 3Z" /><path d="M12 10v4M12 17h.01" />',
  expand: '<path d="M4 4h6M4 4v6M4 4l7 7M20 20h-6M20 20v-6M20 20l-7-7" />',
  drop: '<path d="M12 3c4 5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-7 7-12Z" />',
  anchor: '<circle cx="12" cy="5" r="2" /><path d="M12 7v13M6 13H3a9 9 0 0 0 9 7 9 9 0 0 0 9-7h-3M8 10l-2 3M16 10l2 3" />',
  plane: '<path d="M3 12l18-7-7 18-2-8-8-2Z" />',
  person: '<circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-4 3-6 7-6s7 2 7 6" />',
  truck: '<rect x="2" y="9" width="12" height="8" rx="1" /><path d="M14 11h4l3 3v3h-3" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" />',
  route: '<path d="M4 18c4-10 12-10 16 0" /><circle cx="4" cy="18" r="1.5" /><circle cx="20" cy="18" r="1.5" />',
  document: '<rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 8h8M8 12h8M8 16h5" />',
  shield: '<path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" /><path d="M9.5 12l2 2 3.5-4" />',
  box: '<rect x="3" y="7" width="18" height="13" rx="1.5" /><path d="M3 7l9-4 9 4M12 3v4" />',
  boxGrid: '<rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />',
  warehouse: '<path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z" /><path d="M9 21v-7h6v7" />',
};

export const oilGasEnergy: IndustryPageContent = {
  slug: "oil-gas-energy",
  label: "Oil & Gas / Energy",
  metaTitle: "Oil & Gas and Energy Logistics | Alpha Star Shipping",
  metaDescription:
    "Freight forwarding for the oil, gas and energy sector from Dubai: time-critical parts, project and out-of-gauge cargo, and dangerous goods handling for rigs, plants and offshore operations.",
  eyebrow: "Industries We Serve",
  heroIntro:
    "Rigs, plants and offshore platforms run on parts that can't wait and equipment that doesn't fit a standard container. We move both.",
  heroImage: "/industries/oil-gas.webp",
  heroGradient: "linear-gradient(135deg, #152056, #d81f2a)",
  overviewHeading: "Built for the Pace of Energy Operations",
  overview: [
    "A delayed valve, pump or control module can idle an entire platform or plant, and a lot of the equipment the sector moves, skids, manifolds, generators, pipe sections, doesn't fit a standard container to begin with. Alpha Star plans each shipment around what it actually is: an urgent spare that needs the fastest routing available, or an oversized load that needs its own lifting, securing and permit strategy from pickup to final site.",
    "Much of what moves through the energy sector is also regulated cargo, chemicals, flammables and other hazardous materials that need to be packed, labelled and declared correctly before they're accepted anywhere. Our team handles the IATA and IMDG compliance work alongside the transport itself, so a shipment doesn't stall at a customs desk or a carrier's dangerous goods check after it's already on its way.",
  ],
  differentiators: [
    { label: "Time-Critical Parts Delivery", description: "Urgent routing for rig and plant spares where downtime is the real cost, not the freight bill.", icon: icons.clock },
    { label: "Project & Out-of-Gauge Cargo", description: "Oversized equipment planned with its own lifting, securing and permit strategy, not forced into a standard move.", icon: icons.expand },
    { label: "Dangerous Goods Compliance", description: "Hazardous energy-sector cargo packed, labelled and declared to IATA and IMDG standards from the start.", icon: icons.hazard },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "project-oog-cargo", label: "Project / OOG Cargo", href: "/services/sea-freight/project-oog-cargo" },
    { slug: "aog", label: "AOG", href: "/services/air-freight/aog" },
    { slug: "dangerous-goods-air", label: "Dangerous Goods (Air)", href: "/services/air-freight/dangerous-goods" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
  siblingDescription: "Time-critical logistics for rigs, plants and offshore energy infrastructure.",
  icon: icons.drop,
};

export const marineShipSpares: IndustryPageContent = {
  slug: "marine-ship-spares",
  label: "Marine & Ship Spares",
  metaTitle: "Marine & Ship Spares Logistics | Alpha Star Shipping",
  metaDescription:
    "Ship spares logistics from Dubai: door-to-deck delivery, 24/7 urgent response and customs handling for vessels calling at ports across Europe, the USA, the Middle East and Far East Asia.",
  eyebrow: "Industries We Serve",
  heroIntro: "A vessel idle in port is an expensive vessel. We get spares to the deck fast, wherever it's berthed.",
  heroImage: "/industries/ship-spares.webp",
  heroGradient: "linear-gradient(135deg, #12557f, #2f8fc9)",
  overviewHeading: "Specialists in Ship Spares Logistics",
  overview: [
    "Every day a vessel waits on a part is a day it isn't earning, so ship spares move on a different clock to ordinary freight. Alpha Star's door-to-deck model takes a consignment from the supplier straight to the vessel itself, clearing customs and port formalities along the way rather than leaving the captain or agent to chase down the last leg.",
    "Our team is active 24/7 across Europe, the USA, the Middle East and Far East Asia, because a vessel doesn't call at a convenient hour and a spares request doesn't wait for a business day to start. Whatever port a ship is calling at next, we can have the right people on it.",
  ],
  differentiators: [
    { label: "Door-to-Deck Delivery", description: "Spares taken straight to the vessel, customs and port formalities handled along the way.", icon: icons.route },
    { label: "24/7 Urgent Response", description: "A team active around the clock, because a vessel's call schedule doesn't wait for business hours.", icon: icons.clock },
    { label: "Global Port Reach", description: "Active across Europe, the USA, the Middle East and Far East Asia, wherever the next port of call is.", icon: icons.anchor },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "ship-spares", label: "Ship Spares Logistics", href: "/ship-spares", image: "/ship-spares/ship-diagonal.webp" },
    { slug: "ship-spares-in-transit", label: "Ship Spares in Transit", href: "/ship-spares/ship-spares-in-transit" },
    { slug: "door-to-deck", label: "Door to Deck", href: "/ship-spares/door-to-deck" },
    { slug: "sea-freight", label: "Sea Freight", href: "/services/sea-freight", image: "/services/sea-freight.webp" },
  ],
  siblingDescription: "Door-to-deck delivery of urgent ship spares, wherever the vessel is berthed.",
  icon: icons.anchor,
};

export const aviationAerospace: IndustryPageContent = {
  slug: "aviation-aerospace",
  label: "Aviation & Aerospace",
  metaTitle: "Aviation & Aerospace Logistics | Alpha Star Shipping",
  metaDescription:
    "AOG and aviation parts logistics from Dubai: priority airport handling, on board courier dispatch and dangerous goods compliance for grounded aircraft and time-critical aerospace shipments.",
  eyebrow: "Industries We Serve",
  heroIntro: "A grounded aircraft costs more by the hour than almost anything else we move. Every AOG shipment gets treated that way.",
  heroGradient: "linear-gradient(135deg, #152056, #12557f)",
  overviewHeading: "Built Around Aircraft-on-Ground Urgency",
  overview: [
    "When a part is keeping an aircraft on the ground, the shipment stops being routine freight and becomes the priority. Alpha Star's AOG desk books the fastest available routing, pushes it through priority airport handling, and tracks it through to the moment it's in the engineer's hands.",
    "For the most time-critical pieces, an on board courier can hand-carry the shipment itself rather than routing it as standard cargo. Aviation parts are also frequently dangerous goods, lithium batteries, hydraulic fluids, pressurised components, so our team handles the IATA packing and declaration work as part of the same shipment, not as a separate step that risks a delay at the gate.",
  ],
  differentiators: [
    { label: "AOG-Speed Routing", description: "Priority airport handling and the fastest available routing when an aircraft is grounded on a part.", icon: icons.clock },
    { label: "On Board Courier Option", description: "Hand-carried dispatch for the most time-critical shipments, not routed as standard cargo.", icon: icons.person },
    { label: "Aviation Dangerous Goods Compliance", description: "Lithium batteries, hydraulic fluids and other regulated aviation cargo packed and declared to IATA standards.", icon: icons.hazard },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "aog", label: "AOG", href: "/services/air-freight/aog" },
    { slug: "obc", label: "OBC", href: "/services/air-freight/obc" },
    { slug: "time-critical-nfo", label: "Time Critical / NFO", href: "/services/air-freight/time-critical-nfo" },
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
  ],
  siblingDescription: "Aircraft-on-ground speed for the parts that ground a plane.",
  icon: icons.plane,
};

export const automotive: IndustryPageContent = {
  slug: "automotive",
  label: "Automotive",
  metaTitle: "Automotive Logistics | Alpha Star Shipping",
  metaDescription:
    "Automotive freight forwarding from Dubai: FCL and groupage vehicle shipping, regional road distribution across the GCC, and customs clearance for vehicle and parts imports.",
  eyebrow: "Industries We Serve",
  heroIntro: "Vehicles, parts and components moving on schedule, from a single container to an ongoing parts pipeline.",
  heroImage: "/industries/automobiles.webp",
  heroGradient: "linear-gradient(135deg, #2f8fc9, #12557f)",
  overviewHeading: "Keeping Automotive Supply Chains on Schedule",
  overview: [
    "Vehicles and automotive parts move in very different volumes depending on where they are in the supply chain, a full container of completed units, a groupage load of components, or an ongoing stream of parts feeding a workshop or distributor. Alpha Star books FCL sea freight for the former and road freight across the GCC for regional distribution, so each shipment moves at the scale it actually needs.",
    "Vehicle and parts imports also carry their own customs requirements, and a hold-up at clearance has the same knock-on effect as a delay in transit. Our customs team and regional warehousing work alongside the transport booking, so parts reach a distributor or workshop ready to use rather than sitting in a yard waiting on paperwork.",
  ],
  differentiators: [
    { label: "FCL & Groupage Vehicle Shipping", description: "Full container loads for completed units, groupage for smaller parts and component consignments.", icon: icons.box },
    { label: "Regional Road Distribution", description: "Road freight across the GCC for the parts and inventory that need to keep moving locally.", icon: icons.truck },
    { label: "Customs Clearance for Imports", description: "Vehicle and parts import clearance handled alongside the transport, not as a separate bottleneck.", icon: icons.document },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "fcl", label: "FCL", href: "/services/sea-freight/fcl" },
    { slug: "ftl-ltl", label: "FTL / LTL", href: "/services/road-freight/ftl-ltl" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
  siblingDescription: "FCL, road freight and parts distribution for automotive supply chains.",
  icon: icons.truck,
};

export const industrialProjects: IndustryPageContent = {
  slug: "industrial-projects",
  label: "Industrial / Projects",
  metaTitle: "Industrial & Project Cargo Logistics | Alpha Star Shipping",
  metaDescription:
    "Project cargo logistics from Dubai: breakbulk and out-of-gauge shipping, and multimodal routing for plant, machinery and equipment that doesn't fit a standard container.",
  eyebrow: "Industries We Serve",
  heroIntro: "Plant, machinery and equipment that doesn't fit a standard container, planned around what it actually is.",
  heroImage: "/industries/project-cargo.webp",
  heroGradient: "linear-gradient(135deg, #152056, #d81f2a)",
  overviewHeading: "Project Cargo, Planned Around the Load",
  overview: [
    "Industrial and project shipments, generators, process skids, structural steel, heavy machinery, are measured in tonnes and metres, not pallets, and a standard container move isn't always the right answer. Alpha Star plans breakbulk and out-of-gauge cargo with its own lifting, securing and permit strategy from pickup to the final site.",
    "A lot of project cargo also needs to travel beyond the port, onto an inland site that a vessel can't reach directly. We combine sea and road freight into a single multimodal routing for that last stretch, so the equipment arrives at the actual site, not just the nearest terminal.",
  ],
  differentiators: [
    { label: "Project & Out-of-Gauge Cargo", description: "Oversized equipment planned with its own lifting, securing and permit strategy from pickup to site.", icon: icons.expand },
    { label: "Breakbulk Shipping", description: "Cargo that doesn't fit a standard container, handled on its own terms rather than forced into one.", icon: icons.boxGrid },
    { label: "Multimodal Project Routing", description: "Sea and road freight combined to reach inland sites a vessel alone can't get to.", icon: icons.route },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "project-oog-cargo", label: "Project / OOG Cargo", href: "/services/sea-freight/project-oog-cargo" },
    { slug: "breakbulk", label: "Breakbulk", href: "/services/sea-freight/breakbulk" },
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
  ],
  siblingDescription: "Breakbulk and out-of-gauge cargo planned around the load, not forced into a standard move.",
  icon: icons.expand,
};

export const pharmaHealthcare: IndustryPageContent = {
  slug: "pharma-healthcare",
  label: "Pharma & Healthcare",
  metaTitle: "Pharma & Healthcare Logistics | Alpha Star Shipping",
  metaDescription:
    "Pharmaceutical and healthcare logistics from Dubai: cold chain handling, GDP-aligned practices and time-critical air routing for temperature-sensitive medicines and medical shipments.",
  eyebrow: "Industries We Serve",
  heroIntro: "Temperature-sensitive medicines and healthcare products need an unbroken cold chain, not just a fast flight.",
  heroImage: "/industries/pharma.webp",
  heroGradient: "linear-gradient(135deg, #12557f, #2f8fc9)",
  overviewHeading: "Cold Chain Integrity From Pickup to Delivery",
  overview: [
    "A pharmaceutical shipment is only as good as its weakest link in the cold chain, one gap in temperature control, and the product itself can be compromised. Alpha Star handles pharma and healthcare cargo with temperature-controlled processes and GDP-aligned practices at every stage, from pickup through to final delivery.",
    "Time matters too, since many medical shipments are moving to meet a genuine clinical need. We route pharma and healthcare freight with the same time-critical priority as our other urgent cargo, backed by bonded warehousing and customs clearance that keep the shipment moving rather than waiting.",
  ],
  differentiators: [
    { label: "Cold Chain Handling", description: "Temperature-controlled processes maintained from pickup through to final delivery.", icon: icons.shield },
    { label: "GDP-Aligned Practices", description: "Pharma and healthcare cargo handled to Good Distribution Practice standards throughout.", icon: icons.document },
    { label: "Time-Critical Air Routing", description: "Priority routing for shipments moving against a genuine clinical need.", icon: icons.clock },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "pharma-healthcare-air", label: "Pharma / Healthcare (Air)", href: "/services/air-freight/pharma-healthcare" },
    { slug: "bonded-warehousing", label: "Bonded Warehousing", href: "/warehousing-3pl/bonded-warehousing" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
  ],
  siblingDescription: "Cold chain integrity for temperature-sensitive medicines and healthcare products.",
  icon: icons.shield,
};

export const foodPerishables: IndustryPageContent = {
  slug: "food-perishables",
  label: "Food & Perishables",
  metaTitle: "Food & Perishables Logistics | Alpha Star Shipping",
  metaDescription:
    "Perishables logistics from Dubai: temperature-controlled handling, priority transit booking and cold chain warehousing for food and perishable cargo moving against the clock.",
  eyebrow: "Industries We Serve",
  heroIntro: "Every hour in transit is an hour off a perishable shipment's shelf life. We plan routing around that clock.",
  heroImage: "/industries/perishables.webp",
  heroGradient: "linear-gradient(135deg, #152056, #12557f)",
  overviewHeading: "Speed and Temperature Control, Together",
  overview: [
    "Perishable cargo loses value with every hour it sits still, so the routing decision matters as much as the temperature control. Alpha Star books priority air freight capacity for perishable shipments and keeps them temperature-controlled from pickup to the point they're handed over.",
    "Where a shipment needs to be held or redistributed rather than moving straight through, our cold chain warehousing and regional distribution network across the GCC keep it at the right temperature without adding unnecessary transit time.",
  ],
  differentiators: [
    { label: "Temperature-Controlled Handling", description: "Perishable cargo kept at the right temperature from pickup to handover, not just in transit.", icon: icons.shield },
    { label: "Priority Transit Booking", description: "Priority air freight capacity booked for shipments where every hour affects shelf life.", icon: icons.clock },
    { label: "Cold Chain Warehousing", description: "Regional cold storage and distribution across the GCC for cargo that needs to be held or redistributed.", icon: icons.warehouse },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "perishables-air", label: "Perishables (Air)", href: "/services/air-freight/perishables" },
    { slug: "warehousing", label: "Warehousing & 3PL", href: "/warehousing-3pl", image: "/services/warehousing.webp" },
    { slug: "regional-distribution", label: "Regional Distribution", href: "/warehousing-3pl/regional-distribution" },
    { slug: "air-freight", label: "Air Freight", href: "/services/air-freight", image: "/services/air-freight.webp" },
  ],
  siblingDescription: "Temperature-controlled, time-critical logistics for perishable cargo.",
  icon: icons.clock,
};

export const retailEcommerce: IndustryPageContent = {
  slug: "retail-ecommerce",
  label: "Retail / E-commerce",
  metaTitle: "Retail & E-commerce Logistics | Alpha Star Shipping",
  metaDescription:
    "Retail and e-commerce fulfilment from Dubai: order fulfilment, real-time inventory visibility and regional last-mile distribution for online and retail supply chains across the GCC.",
  eyebrow: "Industries We Serve",
  heroIntro: "Online orders don't wait. Fulfilment, inventory visibility and last-mile distribution built to keep pace.",
  heroGradient: "linear-gradient(135deg, #2f8fc9, #12557f)",
  overviewHeading: "Fulfilment Built for E-commerce Speed",
  overview: [
    "Retail and e-commerce supply chains run on turnaround time, stock has to be received, stored and picked fast enough that an order placed today can actually ship today. Our warehousing operations handle that pick-pack-ship cycle directly, rather than treating fulfilment as an afterthought to storage.",
    "Knowing what's in stock, and where, matters just as much as moving it. Our WMS and inventory visibility tools keep that picture current, and our regional distribution network gets orders out across the GCC on the kind of timeline online retail actually runs on.",
  ],
  differentiators: [
    { label: "E-commerce Fulfilment", description: "Pick-pack-ship handled as a core part of warehousing, not bolted on after storage.", icon: icons.box },
    { label: "Real-Time Inventory Visibility", description: "WMS tools that keep an accurate, current picture of what's in stock and where.", icon: icons.boxGrid },
    { label: "Regional Last-Mile Distribution", description: "A distribution network built to get orders out across the GCC on retail timelines.", icon: icons.route },
  ],
  relevantServicesHeading: "Relevant Services",
  relevantServices: [
    { slug: "ecommerce-fulfilment", label: "E-commerce / Fulfilment", href: "/warehousing-3pl/ecommerce-fulfilment" },
    { slug: "wms-inventory-visibility", label: "WMS / Inventory Visibility", href: "/warehousing-3pl/wms-inventory-visibility" },
    { slug: "regional-distribution", label: "Regional Distribution", href: "/warehousing-3pl/regional-distribution" },
    { slug: "road-freight", label: "Road Freight", href: "/services/road-freight", image: "/services/road-freight.webp" },
  ],
  siblingDescription: "E-commerce fulfilment, inventory visibility and last-mile distribution across the GCC.",
  icon: icons.box,
};

export const industries: IndustryPageContent[] = [
  oilGasEnergy,
  marineShipSpares,
  aviationAerospace,
  automotive,
  industrialProjects,
  pharmaHealthcare,
  foodPerishables,
  retailEcommerce,
];
