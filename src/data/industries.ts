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

export const industries: IndustryPageContent[] = [oilGasEnergy];
