import { servicesMegaMenu } from "./nav";

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
    { slug: "multimodal", label: "Multimodal", href: "/services/multimodal" },
    { slug: "customs-clearance", label: "Customs Clearance", href: "/services/customs-clearance", image: "/services/customs-clearance.webp" },
  ],
};
