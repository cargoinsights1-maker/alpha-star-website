// Content for dedicated sub-service pages (e.g. Air Freight's AOG). Kept
// separate from services.ts since a dedicated sub-page only needs a small
// amount of content unique to itself — everything else (hero image/gradient,
// the "why Alpha Star" differentiators, the sibling sub-items grid) is
// reused directly from the parent ServicePageContent object in services.ts,
// not re-authored here.
export interface SubServicePageContent {
  parentSlug: string;
  parentLabel: string;
  parentHref: string;
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  overviewHeading: string;
  overview: string[];
}

export const aog: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "aog",
  label: "AOG",
  metaTitle: "AOG Parts Logistics | Air Freight | Alpha Star Shipping",
  metaDescription:
    "Aircraft On Ground (AOG) parts logistics from Alpha Star. First priority booking and 24/7 handling to get a grounded aircraft back in service fast.",
  heroIntro:
    "Aircraft On Ground parts get first priority booking to get a grounded aircraft back in service with minimum downtime.",
  overviewHeading: "AOG Parts, Prioritised From the First Call",
  overview: [
    "An aircraft on the ground is not just delayed, it is losing money every hour it stays there. AOG parts get first boarding priority on the next available flight, ahead of standard freight, because getting the aircraft back in service outweighs almost every other shipping priority.",
    "Alpha Star's air freight desk is built to move on an AOG call immediately, coordinating pickup, documentation and airline booking in parallel rather than one after another. The part reaches Dubai's airports and clears onward to the aircraft with the same urgency the call came in with.",
  ],
};

// --- Air Freight ---------------------------------------------------------

export const generalCargo: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "general-cargo",
  label: "General Cargo",
  metaTitle: "General Cargo Air Freight | Air Freight | Alpha Star Shipping",
  metaDescription: "General cargo air freight from Dubai, consolidated and booked on scheduled flights for the most cost effective way to move freight by air.",
  heroIntro:
    "Standard palletised and loose cargo booked on scheduled flights, the most common and cost effective way to move freight by air.",
  overviewHeading: "General Cargo, Booked to Balance Cost and Speed",
  overview: [
    "Most air freight is general cargo: palletised or loose shipments that don't need a dedicated aircraft or special handling, just a reliable booking on a scheduled flight. It is the default choice for regular shipments because scheduled capacity is predictable and priced lower than urgent or chartered options.",
    "Alpha Star books general cargo onto the routing that fits your shipment's actual deadline, consolidating smaller loads where it brings the cost down without adding unnecessary transit time. Documentation and customs are handled as part of the same booking, so the cargo moves as one coordinated job from pickup to arrival.",
  ],
};

export const internationalCourier: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "international-courier",
  label: "International Courier",
  metaTitle: "International Courier Services | Air Freight | Alpha Star Shipping",
  metaDescription: "Door to door international courier handling for urgent documents and small parcels, with fast customs release from Alpha Star.",
  heroIntro:
    "Door to door express handling for urgent documents and small parcels, with minimal paperwork and fast customs release.",
  overviewHeading: "Courier Handling for Small, Urgent Shipments",
  overview: [
    "Not every urgent shipment needs a full air freight booking. International courier handling is built for documents and small parcels that need to move fast with as little paperwork as possible, picked up and delivered door to door rather than routed through a standard cargo terminal.",
    "Alpha Star's courier service keeps customs release quick by preparing the right documentation upfront, so a small shipment doesn't get held up behind larger freight. It's the option to reach for when the shipment is small but the deadline is not.",
  ],
};

export const timeCriticalNfo: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "time-critical-nfo",
  label: "Time Critical / NFO",
  metaTitle: "Time Critical & Next Flight Out (NFO) Freight | Air Freight | Alpha Star Shipping",
  metaDescription: "Next Flight Out (NFO) air freight for time critical shipments, booked onto the next available flight with urgent desk support from Alpha Star.",
  heroIntro:
    "Urgent shipments booked onto the next available flight out rather than the standard schedule, for deadlines that cannot move.",
  overviewHeading: "When the Standard Schedule Isn't Fast Enough",
  overview: [
    "Next Flight Out, or NFO, means exactly what it says: your shipment is booked onto the next available flight with capacity, not the next scheduled slot on a regular routing. It is used when a deadline cannot move, whether that's a production line waiting on a part or a legal deadline that doesn't care about standard transit times.",
    "Because every hour matters on a time critical shipment, our urgent desk runs pickup, documentation and airline booking at the same time rather than one after another. The aim is always the earliest physically possible departure, not just the fastest option on a standard schedule.",
  ],
};

export const obc: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "obc",
  label: "OBC",
  metaTitle: "On Board Courier (OBC) Services | Air Freight | Alpha Star Shipping",
  metaDescription: "On board courier (OBC) services from Alpha Star, for high value or high control shipments that travel with a dedicated courier from pickup to hand delivery.",
  heroIntro:
    "An on board courier travels with your shipment in person, for high value or high control cargo that needs eyes on it the whole way.",
  overviewHeading: "A Courier That Never Lets Go of Your Shipment",
  overview: [
    "An on board courier carries your shipment as excess baggage on a passenger flight, staying with it personally from the moment it's collected to the moment it's handed over. There is no warehouse stop, no standard cargo handling chain, and no point where the shipment is out of someone's direct control.",
    "This is less about raw speed than it is about certainty. OBC is the right choice when a shipment is too valuable, too sensitive or too urgent to risk sitting in a normal cargo flow, and you need a single person accountable for it door to door.",
  ],
};

export const dangerousGoodsAir: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "dangerous-goods",
  label: "Dangerous Goods",
  metaTitle: "Dangerous Goods Air Freight | Air Freight | Alpha Star Shipping",
  metaDescription: "IATA DGR compliant dangerous goods air freight from Alpha Star, with classification, packing and airline acceptance confirmed before pickup.",
  heroIntro:
    "Hazardous cargo packed, labelled and declared to IATA DGR standards, handled by a team trained to keep it compliant from pickup to delivery.",
  overviewHeading: "Dangerous Goods, Classified Right the First Time",
  overview: [
    "Dangerous goods air freight lives or dies on classification. Get the UN number, packing group or hazard class wrong and a shipment can be rejected at the airline counter after it has already left your site, costing far more time than getting it right from the start.",
    "Alpha Star's dangerous goods desk confirms classification, packing and documentation against IATA DGR standards before pickup, and checks airline acceptance in advance rather than finding out at the terminal. The goal is a shipment that moves once, correctly, not one that gets bounced back for a fix.",
  ],
};

export const pharmaHealthcare: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "pharma-healthcare",
  label: "Pharma / Healthcare",
  metaTitle: "Pharma & Healthcare Air Freight | Air Freight | Alpha Star Shipping",
  metaDescription: "Temperature controlled pharma and healthcare air freight from Alpha Star, with routing planned to protect a cold chain from pickup to delivery.",
  heroIntro:
    "Temperature controlled handling for vaccines, medicines and medical equipment, moved fast to protect a cold chain that cannot break.",
  overviewHeading: "Cold Chain Logistics That Don't Break the Chain",
  overview: [
    "Pharmaceutical and healthcare shipments are judged on one thing above all: whether the cold chain held. A vaccine or medicine that spends too long outside its required temperature range can be compromised long before it reaches its destination, no matter how fast the flight itself was.",
    "We plan pharma shipments around minimising time outside controlled conditions specifically, not just minimising total transit time. That means tighter ground handling windows, pre-cleared documentation and routing chosen for consistency, not just speed.",
  ],
};

export const perishablesAir: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "perishables",
  label: "Perishables",
  metaTitle: "Perishables Air Freight | Air Freight | Alpha Star Shipping",
  metaDescription: "Perishables air freight from Alpha Star for fresh produce and flowers, routed and cleared fast to protect shelf life on arrival.",
  heroIntro:
    "Fresh produce, flowers and other time sensitive goods routed on the fastest suitable flight to protect shelf life on arrival.",
  overviewHeading: "Every Hour Matters When Shelf Life Is the Clock",
  overview: [
    "Perishable cargo doesn't get a second attempt. Fresh produce and flowers lose value every hour they spend in transit, so the booking that matters most is the earliest one that fits, not necessarily the cheapest.",
    "Alpha Star plans perishable shipments backward from shelf life rather than forward from pickup time, choosing routing and customs clearance that protect however much shelf life the cargo has left on arrival. It's a different planning logic to standard freight, and it changes which flight actually makes sense.",
  ],
};

export const charter: SubServicePageContent = {
  parentSlug: "air-freight",
  parentLabel: "Air Freight",
  parentHref: "/services/air-freight",
  slug: "charter",
  label: "Charter",
  metaTitle: "Air Charter Services | Air Freight | Alpha Star Shipping",
  metaDescription: "Air charter services from Alpha Star, sourcing and coordinating a dedicated aircraft for oversized or mission critical shipments.",
  heroIntro:
    "A dedicated aircraft reserved for your cargo alone, for oversized, high volume or mission critical shipments that cannot share a hold.",
  overviewHeading: "When the Shipment Needs the Whole Aircraft",
  overview: [
    "Some shipments don't fit the standard model of booking space on someone else's scheduled flight. Oversized cargo, very high volumes, or genuinely mission critical freight sometimes need an aircraft reserved entirely for that one shipment, moving on exactly the schedule the cargo needs.",
    "Alpha Star sources and coordinates charter aircraft for exactly these cases, handling the logistics of a dedicated flight the same way we'd handle any other shipment: booking, documentation and ground handling managed as one job, not outsourced to a separate charter broker.",
  ],
};

// --- Sea Freight -----------------------------------------------------------

export const fcl: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "fcl",
  label: "FCL",
  metaTitle: "FCL (Full Container Load) Shipping | Sea Freight | Alpha Star Shipping",
  metaDescription: "FCL (Full Container Load) sea freight from Alpha Star, a dedicated container loaded and sealed at your site for direct, unshared shipping.",
  heroIntro:
    "A full container reserved for one shipper, loaded and sealed at your site or a nearby facility.",
  overviewHeading: "Your Container, Loaded Once and Sealed",
  overview: [
    "A Full Container Load means exactly that: the whole container is yours, loaded and sealed at your own site or a nearby facility, with nobody else's cargo sharing the space. It is generally the most direct, lowest handling way to move a shipment large enough to fill a container on its own.",
    "Because there's no consolidation or deconsolidation involved, FCL shipments typically move with fewer handling touchpoints and a more predictable timeline than shared container options. Alpha Star books the container type and sailing that fits your volume and confirms the full route from loading to final port.",
  ],
};

export const lcl: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "lcl",
  label: "LCL",
  metaTitle: "LCL (Less than Container Load) Shipping | Sea Freight | Alpha Star Shipping",
  metaDescription: "LCL (Less than Container Load) sea freight from Alpha Star, consolidating smaller shipments into shared containers for a cost effective sailing.",
  heroIntro:
    "Your cargo shares a container with other shipments, consolidated and deconsolidated at either end.",
  overviewHeading: "Shared Container Space, Without the Wasted Cost",
  overview: [
    "Less than Container Load shipping exists for cargo that doesn't need, or doesn't justify the cost of, an entire container. Your shipment is consolidated with others heading to the same destination, and deconsolidated again once it arrives, sharing the container's cost across multiple shippers.",
    "The tradeoff is an extra handling step at each end compared to FCL, in exchange for not paying for space you don't need. Alpha Star manages the consolidation and deconsolidation directly, so an LCL shipment still moves as one tracked job rather than disappearing into a shared container with no visibility.",
  ],
};

export const breakbulk: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "breakbulk",
  label: "Breakbulk",
  metaTitle: "Breakbulk Shipping | Sea Freight | Alpha Star Shipping",
  metaDescription: "Breakbulk sea freight from Alpha Star for machinery, steel and other cargo too large for a standard container, loaded directly onto the vessel.",
  heroIntro:
    "Cargo too large or oddly shaped for a standard container, loaded directly onto the vessel using cranes rather than boxed into a unit.",
  overviewHeading: "Cargo That Was Never Going to Fit in a Box",
  overview: [
    "Breakbulk cargo doesn't go into a container at all. Machinery, steel coils, large equipment and other freight that's too large, too heavy or the wrong shape for containerisation gets loaded directly onto the vessel using cranes, often secured as individual units rather than a standard load.",
    "This kind of shipment needs its own handling plan at both ends, not just a booking. Alpha Star arranges the lifting equipment, stowage and port handling breakbulk cargo actually requires, rather than trying to fit it into a process built for standard containers.",
  ],
};

export const projectOogCargo: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "project-oog-cargo",
  label: "Project / OOG Cargo",
  metaTitle: "Project & Out of Gauge (OOG) Cargo | Sea Freight | Alpha Star Shipping",
  metaDescription: "Project and out of gauge (OOG) cargo shipping from Alpha Star, planned with a dedicated lifting, securing and permit strategy.",
  heroIntro:
    "Out of gauge and project cargo that exceeds standard container dimensions, planned with its own lifting, securing and permit strategy.",
  overviewHeading: "Oversized Cargo Needs an Oversized Plan",
  overview: [
    "Out of gauge, or OOG, cargo exceeds the dimensions of a standard container, usually by sticking out of the top, sides or ends of a flat rack or open top unit. Project cargo goes further still, covering entire shipments of equipment or structures planned as one coordinated job rather than a single container booking.",
    "These shipments need their own lifting plan, securing method and often permits before a sailing is even booked. Alpha Star plans project and OOG cargo from the ground up, not as an exception squeezed into a standard container process.",
  ],
};

export const dangerousGoodsSea: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "dangerous-goods",
  label: "Dangerous Goods",
  metaTitle: "Dangerous Goods Sea Freight | Sea Freight | Alpha Star Shipping",
  metaDescription: "IMDG compliant dangerous goods sea freight from Alpha Star, packed, labelled and declared correctly from pickup to vessel.",
  heroIntro:
    "Hazardous cargo packed, labelled and declared to IMDG standards, handled by a team trained to keep it compliant from pickup to vessel.",
  overviewHeading: "Dangerous Goods by Sea, Declared to IMDG Standards",
  overview: [
    "Hazardous cargo moving by sea follows the IMDG Code, not the air freight rules, and getting classification, packing and stowage right matters just as much on a vessel as it does on an aircraft. A misdeclared or poorly packed dangerous goods shipment can be refused at the terminal or held for correction.",
    "Alpha Star's dangerous goods team handles classification, labelling and documentation to IMDG standards before a container is booked, confirming the carrier will actually accept the shipment as declared. That upfront check is what keeps a hazardous shipment moving instead of stalling at the port.",
  ],
};

export const crossTrade: SubServicePageContent = {
  parentSlug: "sea-freight",
  parentLabel: "Sea Freight",
  parentHref: "/services/sea-freight",
  slug: "cross-trade",
  label: "Cross Trade",
  metaTitle: "Cross Trade Shipping | Sea Freight | Alpha Star Shipping",
  metaDescription: "Cross trade sea freight arranged by Alpha Star between two countries outside the UAE, managed end to end from our Dubai desk.",
  heroIntro:
    "Freight moved between two countries where neither is the UAE, arranged and documented from our Dubai desk.",
  overviewHeading: "Your Freight Doesn't Have to Touch the UAE",
  overview: [
    "Cross trade shipping covers freight moving between an origin and destination where neither one is the UAE, booked and documented through Alpha Star's Dubai desk rather than a forwarder local to either end. It's common for businesses whose supply chain runs between two other regions entirely but still want one trusted forwarder coordinating it.",
    "We arrange booking, documentation and tracking the same way we would for a shipment touching Dubai directly, just routed between two other ports. The service exists for exactly the businesses who need reliable freight forwarding without the UAE being part of the route.",
  ],
};

// --- Road Freight ------------------------------------------------------------

export const ftlLtl: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "ftl-ltl",
  label: "FTL / LTL",
  metaTitle: "FTL & LTL Trucking | Road Freight | Alpha Star Shipping",
  metaDescription: "Full truckload (FTL) and less than truckload (LTL) road freight from Alpha Star, booked on one desk and priced to match your cargo.",
  heroIntro:
    "A dedicated trailer for full truckload shipments, or shared space on a part load when you don't need the whole trailer.",
  overviewHeading: "A Full Trailer, or Just the Space You Need",
  overview: [
    "Full Truckload means a dedicated trailer for your shipment alone, the most direct option when you have enough cargo to justify it. Less than Truckload shares trailer space with other shipments, a more cost effective option when your cargo doesn't fill a trailer on its own.",
    "Alpha Star books both from the same desk, so you're not choosing between providers depending on shipment size, just between the option that actually fits what you're moving. Either way, the route planning and border documentation work the same.",
  ],
};

export const gcc: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "gcc",
  label: "GCC",
  metaTitle: "GCC Road Freight | Road Freight | Alpha Star Shipping",
  metaDescription: "Cross-border GCC road freight from Alpha Star, connecting the UAE with Saudi Arabia, Oman, Qatar, Bahrain and Kuwait on established lanes.",
  heroIntro:
    "Cross-border trucking between the UAE, Saudi Arabia, Oman, Qatar, Bahrain and Kuwait, run on established lanes with predictable transit times.",
  overviewHeading: "Established Lanes Across Every GCC Market",
  overview: [
    "Road freight within the GCC runs on lanes Alpha Star operates regularly, connecting the UAE to Saudi Arabia, Oman, Qatar, Bahrain and Kuwait with transit times that are predictable precisely because the route isn't new to us. That matters for shipments where the customer at the other end is planning around a specific delivery window.",
    "Border documentation for each crossing is prepared ahead of departure, not assembled after the truck is already en route. It's the difference between a shipment that moves through a border smoothly and one that sits at a checkpoint waiting on paperwork.",
  ],
};

export const turkiye: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "turkiye",
  label: "Türkiye",
  metaTitle: "Road Freight to Türkiye | Road Freight | Alpha Star Shipping",
  metaDescription: "Overland road freight from the GCC to Türkiye with Alpha Star, connecting Gulf markets toward Europe by road.",
  heroIntro:
    "Overland freight connecting the GCC to Türkiye, a key gateway between Gulf markets and Europe.",
  overviewHeading: "The Overland Route Between the Gulf and Europe",
  overview: [
    "Türkiye sits at the crossing point between the Gulf and Europe, and road freight into it gives cargo a path toward European markets that doesn't require a sea or air leg for that part of the journey. It's a lane that suits cargo where an overland transit time is acceptable in exchange for not routing through a port.",
    "Alpha Star runs this corridor as a planned route rather than a one-off booking, with documentation prepared for the crossings along the way. For cargo already moving between the GCC and markets further west, it's often a practical middle step.",
  ],
};

export const egyptJordan: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "egypt-jordan",
  label: "Egypt / Jordan",
  metaTitle: "Road Freight to Egypt & Jordan | Road Freight | Alpha Star Shipping",
  metaDescription: "Overland road freight from the GCC to Egypt and Jordan with Alpha Star, linking Gulf markets to North Africa and the Levant.",
  heroIntro:
    "Road lanes into Egypt and Jordan, linking the GCC to North Africa and the Levant without routing through a port.",
  overviewHeading: "Overland Into North Africa and the Levant",
  overview: [
    "Road freight into Egypt and Jordan connects the GCC to North Africa and the Levant without needing a sea leg, a useful alternative when cargo needs to reach these markets without the added handling of a port transfer. The route runs through established border crossings rather than ad hoc arrangements.",
    "As with every overland lane Alpha Star operates, documentation for each border is prepared before departure. The goal on a multi-border route like this one is a shipment that keeps moving at each crossing, not one that stops to sort out paperwork along the way.",
  ],
};

export const kazakhstanTurkmenistan: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "kazakhstan-turkmenistan",
  label: "Kazakhstan / Turkmenistan",
  metaTitle: "Road Freight to Kazakhstan & Turkmenistan | Road Freight | Alpha Star Shipping",
  metaDescription: "Overland road freight from the GCC into Kazakhstan and Turkmenistan with Alpha Star, an alternative to sea routing for Central Asia.",
  heroIntro:
    "Overland freight reaching into Central Asia, an alternative to sea routing for cargo moving between the Gulf and these markets.",
  overviewHeading: "Reaching Central Asia Without a Port in Between",
  overview: [
    "Cargo moving between the Gulf and Central Asia doesn't have to route through a sea port first. Overland freight into Kazakhstan and Turkmenistan gives a direct road option for these markets, often with a shorter overall transit than a sea leg plus onward trucking would need.",
    "This is a longer, more specialised lane than our GCC routes, and we plan it as such, with border documentation and routing confirmed before the shipment leaves. It suits cargo where the destination is genuinely Central Asia, not a stop on the way somewhere else.",
  ],
};

export const georgiaAzerbaijan: SubServicePageContent = {
  parentSlug: "road-freight",
  parentLabel: "Road Freight",
  parentHref: "/services/road-freight",
  slug: "georgia-azerbaijan",
  label: "Georgia / Azerbaijan",
  metaTitle: "Road Freight to Georgia & Azerbaijan | Road Freight | Alpha Star Shipping",
  metaDescription: "Overland road freight from the GCC to Georgia and Azerbaijan with Alpha Star, connecting Gulf markets to the Caucasus.",
  heroIntro:
    "Road freight into the Caucasus, connecting the GCC toward markets that sit between the Black and Caspian seas.",
  overviewHeading: "Overland Into the Caucasus",
  overview: [
    "Georgia and Azerbaijan sit between the Black and Caspian seas, a corridor that connects the Gulf toward the Caucasus and, beyond it, routes further into Europe and Central Asia. Road freight into this region gives cargo a direct overland path rather than a longer routing through multiple sea legs.",
    "Alpha Star runs this lane with the same border-by-border documentation approach as our other overland corridors, planned ahead of departure rather than handled reactively. It's a specialised route, booked as one with full visibility from dispatch to delivery.",
  ],
};

// --- Warehousing & 3PL -------------------------------------------------------

export const uaeGatewaySolutions: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "uae-gateway-solutions",
  label: "UAE Gateway Solutions",
  metaTitle: "UAE Gateway Solutions | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "UAE gateway warehousing solutions from Alpha Star, using Dubai as the entry point for cargo distributed across the GCC and wider region.",
  heroIntro:
    "Dubai as the entry point for cargo headed across the GCC and wider region, with storage and handling set up for onward distribution rather than a single destination.",
  overviewHeading: "Dubai as Your Entry Point to the Region",
  overview: [
    "Cargo doesn't have to land at its final destination directly. Using Dubai as a gateway, shipments arrive once, clear once, and are stored and prepared for onward distribution across the GCC and beyond, rather than being shipped separately to each individual market.",
    "Alpha Star's UAE gateway solution is built around that onward-distribution model from the start, not retrofitted onto standard warehousing. Storage, handling and outbound dispatch are all planned with the next leg of the journey in mind.",
  ],
};

export const transshipment: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "transshipment",
  label: "Transshipment",
  metaTitle: "Transshipment Services | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Transshipment handling from Alpha Star, transferring cargo between vessels or modes in Dubai on its way to a destination beyond the UAE.",
  heroIntro:
    "Cargo transferred from one vessel or mode to another at our facility, on its way to a final destination that isn't the UAE.",
  overviewHeading: "A Routing Stop, Not a Final Destination",
  overview: [
    "Transshipment cargo isn't headed for the UAE at all, it's passing through on its way from one country to another, using Dubai's port connectivity as a convenient transfer point between vessels or modes. For cargo on major east-west trade routes, that transfer point often sits right here.",
    "Our facilities handle the transfer directly, whether that's vessel to vessel or a switch to a different mode of transport for the next leg. The shipment keeps moving toward its actual destination, with Dubai as a waypoint rather than a stop.",
  ],
};

export const jafzaWarehousing3pl: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "jafza-warehousing-3pl",
  label: "JAFZA Warehousing & 3PL",
  metaTitle: "JAFZA Warehousing & 3PL | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "JAFZA warehousing and 3PL services from Alpha Star, bonded facilities inside Jebel Ali Free Zone connected directly to the port.",
  heroIntro:
    "Bonded facilities inside Jebel Ali Free Zone, connected directly to the port so cargo moves from vessel to warehouse without clearing mainland customs first.",
  overviewHeading: "Bonded Storage, Steps From the Port",
  overview: [
    "Facilities inside Jebel Ali Free Zone carry bonded status automatically, meaning cargo can move from vessel straight to warehouse without first clearing mainland customs. For cargo destined for re-export or further processing, that's one less customs event before it's actually ready to move again.",
    "Being physically close to Jebel Ali Port also means less time and handling between discharge and storage. Alpha Star's JAFZA operations are built around that proximity, not just the free zone's duty advantages.",
  ],
};

export const bondedWarehousing: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "bonded-warehousing",
  label: "Bonded Warehousing",
  metaTitle: "Bonded Warehousing | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Bonded warehousing from Alpha Star in Dubai, with import duty suspended until cargo is re-exported or formally cleared.",
  heroIntro:
    "Storage where import duty stays suspended until cargo is re-exported, moved to another bonded facility, or formally cleared into the UAE market.",
  overviewHeading: "Duty Suspended, Until You Decide Otherwise",
  overview: [
    "Bonded warehousing means import duty simply doesn't apply yet. Cargo can sit in storage, duty suspended, until it's re-exported, transferred to another bonded facility, or formally cleared for the UAE mainland market, whichever happens to fit your plans.",
    "That flexibility matters most when you don't yet know the final destination of your stock at the time it arrives. Alpha Star's bonded storage gives you the room to decide later, without paying duty on cargo that might never actually enter the UAE market.",
  ],
};

export const crossStuffing: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "cross-stuffing",
  label: "Cross Stuffing",
  metaTitle: "Cross Stuffing Services | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Cross stuffing services from Alpha Star, repacking cargo between containers to match what the next leg of the journey needs.",
  heroIntro:
    "Cargo repacked from one container into another, combining or splitting loads to match what the next leg of the journey actually needs.",
  overviewHeading: "Repacked for the Next Leg, Not the Last One",
  overview: [
    "The container that made sense for the first leg of a journey doesn't always make sense for the next one. Cross stuffing repacks cargo from one container into another, combining partial loads or splitting a larger one, so the next leg moves in whatever configuration it actually needs.",
    "This happens at our facility as a planned step, not an improvised one. Alpha Star handles the repacking, documentation and any customs implications of the transfer as part of the same job, so nothing gets lost in translation between legs.",
  ],
};

export const seaAirGateway: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "sea-air-gateway",
  label: "Sea-Air / Air-Sea Gateway",
  metaTitle: "Sea-Air & Air-Sea Gateway | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Sea-air and air-sea gateway handling from Alpha Star, transferring cargo between ocean and air freight at our Dubai facility.",
  heroIntro:
    "Cargo transferred between sea and air freight at our facility, combining the cost of ocean freight with the speed of an air leg for part of the journey.",
  overviewHeading: "The Gateway Between Two Modes",
  overview: [
    "A sea-air or air-sea gateway is where a shipment physically changes mode, moving from a vessel onto a flight or the reverse, combining the lower cost of ocean freight for part of the journey with the speed of air freight for the rest. Dubai's position makes it a natural point for that switch.",
    "Alpha Star's facility handles the transfer directly, with storage, customs and onward booking managed as one coordinated step rather than two separate shipments that happen to connect. The cargo arrives in one mode and leaves in another, without losing time in between.",
  ],
};

export const regionalDistribution: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "regional-distribution",
  label: "Regional Distribution",
  metaTitle: "Regional Distribution | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Regional distribution from Alpha Star, holding stock in Dubai and distributing it out to GCC markets as orders come in.",
  heroIntro:
    "Stock held in Dubai and distributed out to GCC markets as orders come in, rather than shipped in bulk to each destination separately.",
  overviewHeading: "One Stock Point, Many Destinations",
  overview: [
    "Shipping bulk inventory separately to each GCC market gets expensive and slow fast. Holding stock centrally in Dubai and distributing it out as orders actually arrive means each individual delivery is smaller and faster, without needing to forecast exactly how much goes where in advance.",
    "Alpha Star's regional distribution service manages that stock, picks and ships against real orders, and tracks what's moved versus what's still on hand. It's warehousing built for a distribution model, not just storage with shipping bolted on.",
  ],
};

export const ecommerceFulfilment: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "ecommerce-fulfilment",
  label: "E-commerce / Fulfilment",
  metaTitle: "E-commerce Fulfilment | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "E-commerce fulfilment from Alpha Star, pick, pack and ship handling for online orders out of Dubai.",
  heroIntro:
    "Pick, pack and ship handling for online orders, built to move single units out the door as fast as a pallet moves out to a distributor.",
  overviewHeading: "Built for Single Units, Not Just Pallets",
  overview: [
    "E-commerce orders don't move like bulk freight. A single unit needs to be picked, packed and shipped just as reliably as a full pallet, and the volume of individual orders can be far higher than a standard warehouse operation is set up to handle.",
    "Alpha Star's fulfilment service is built around that order-by-order reality, with pick and pack processes sized for single-unit speed rather than bulk handling slowed down to cope with small orders. The goal is getting individual orders out the door as fast as larger shipments move.",
  ],
};

export const valueAddedServices: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "value-added-services",
  label: "Value Added Services",
  metaTitle: "Value Added Warehousing Services | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Value added warehousing services from Alpha Star including labelling, kitting, repackaging and light assembly.",
  heroIntro:
    "Labelling, kitting, repackaging and light assembly done at the warehouse, so cargo leaves ready for shelf rather than needing another stop.",
  overviewHeading: "One Stop, Not an Extra One",
  overview: [
    "Cargo often needs more done to it than just storage and dispatch: labelling for a specific market, kitting multiple items into one unit, repackaging, or light assembly before it's ready for shelf. Doing that at a separate facility just adds another stop and another handoff.",
    "Alpha Star handles these value added steps at the same warehouse the cargo is already sitting in, so it leaves ready for its next step instead of needing to travel somewhere else first. It's warehousing that does more than hold cargo until you need it.",
  ],
};

export const wmsInventoryVisibility: SubServicePageContent = {
  parentSlug: "warehousing",
  parentLabel: "Warehousing & 3PL",
  parentHref: "/warehousing-3pl",
  slug: "wms-inventory-visibility",
  label: "WMS / Inventory Visibility",
  metaTitle: "WMS & Inventory Visibility | Warehousing & 3PL | Alpha Star Shipping",
  metaDescription: "Warehouse management system (WMS) and real time inventory visibility from Alpha Star, so you always know what stock you have and where it is.",
  heroIntro:
    "A warehouse management system giving real time stock counts and location data, so you always know exactly what you have and where it sits.",
  overviewHeading: "Know What You Have, Not Just What You Shipped",
  overview: [
    "A weekly stock report is already out of date by the time you read it. Real time inventory visibility means knowing exactly what's on hand, down to location within the warehouse, at the moment you actually need the answer, not a few days behind it.",
    "Our warehouse management system tracks stock movement as it happens, from receiving through to dispatch, giving you a live view rather than a periodic one. It's the layer that makes every other warehousing service, from regional distribution to fulfilment, actually manageable at scale.",
  ],
};

// --- Multimodal --------------------------------------------------------------

export const seaAir: SubServicePageContent = {
  parentSlug: "multimodal",
  parentLabel: "Multimodal",
  parentHref: "/services/multimodal",
  slug: "sea-air",
  label: "Sea-Air",
  metaTitle: "Sea-Air Multimodal Freight | Multimodal | Alpha Star Shipping",
  metaDescription: "Sea-air multimodal freight from Alpha Star, combining ocean freight for the long haul with air freight for a faster final leg.",
  heroIntro:
    "Cargo starts on a vessel for the long haul and finishes by air for the final leg, balancing ocean freight's cost against air freight's speed where it matters most.",
  overviewHeading: "Ocean Freight's Cost, Air Freight's Finish",
  overview: [
    "A sea-air routing puts your cargo on a vessel for the longest, most cost effective part of the journey, then switches it to air freight for the final leg where speed actually makes the difference to your delivery date. It's a way to beat a pure sea freight timeline without paying for a full air freight routing end to end.",
    "Alpha Star plans the transfer point and timing so the switch between modes doesn't eat into the time savings. The shipment is tracked and documented as one job across both legs, not handed off as two separate bookings that happen to connect.",
  ],
};

export const airSea: SubServicePageContent = {
  parentSlug: "multimodal",
  parentLabel: "Multimodal",
  parentHref: "/services/multimodal",
  slug: "air-sea",
  label: "Air-Sea",
  metaTitle: "Air-Sea Multimodal Freight | Multimodal | Alpha Star Shipping",
  metaDescription: "Air-sea multimodal freight from Alpha Star, combining a fast air freight first leg with ocean freight for the rest of the journey.",
  heroIntro:
    "Cargo starts by air out of origin and finishes on a vessel, useful when the first leg needs speed but the rest of the journey can move at ocean freight's pace.",
  overviewHeading: "Fast Out of Origin, Steady the Rest of the Way",
  overview: [
    "Sometimes the urgency is at the start of a journey, not the end. An air-sea routing moves cargo quickly out of origin by air, then transfers it to a vessel for the remainder of the journey once that initial time pressure is no longer the deciding factor.",
    "This combination suits cargo facing a tight production or shipping window at origin but with more flexibility once it's actually moving. Alpha Star coordinates the handoff from air to sea directly, keeping the shipment on one continuous timeline rather than two disconnected bookings.",
  ],
};

export const roadSeaCombinations: SubServicePageContent = {
  parentSlug: "multimodal",
  parentLabel: "Multimodal",
  parentHref: "/services/multimodal",
  slug: "road-sea-combinations",
  label: "Road / Sea Combinations",
  metaTitle: "Road-Sea Multimodal Freight | Multimodal | Alpha Star Shipping",
  metaDescription: "Road-sea multimodal freight from Alpha Star, combining road transport to or from port with ocean freight for the main leg.",
  heroIntro:
    "Cargo moves by road to or from a port, combining trucking's flexibility with ocean freight's capacity for the main leg of the journey.",
  overviewHeading: "Trucking to the Port, Capacity From There",
  overview: [
    "Not every shipment originates or ends at a port, which is exactly what a road-sea combination solves. Cargo moves by road to reach the vessel, or from the vessel to its actual destination, with ocean freight carrying the main leg where it's most cost effective.",
    "Alpha Star plans the road and sea legs together rather than booking them as separate services that happen to meet at the port. That means one point of contact and one tracked timeline, even though the cargo physically changes mode partway through.",
  ],
};

// --- Customs Clearance ---------------------------------------------------------

export const importExport: SubServicePageContent = {
  parentSlug: "customs-clearance",
  parentLabel: "Customs Clearance",
  parentHref: "/services/customs-clearance",
  slug: "import-export",
  label: "Import / Export",
  metaTitle: "Import & Export Customs Clearance | Customs Clearance | Alpha Star Shipping",
  metaDescription: "Import and export customs clearance from Alpha Star in the UAE, with declarations prepared and classified correctly from the start.",
  heroIntro:
    "Declarations for cargo entering or leaving the UAE, prepared with the correct classification and duty treatment from the start.",
  overviewHeading: "Declarations Prepared Right the First Time",
  overview: [
    "Every shipment entering or leaving the UAE needs a customs declaration, and the accuracy of that declaration determines whether cargo clears smoothly or gets held for correction. Tariff classification and duty treatment have to be right before submission, not fixed after a query comes back.",
    "Alpha Star prepares import and export declarations with that classification confirmed upfront, working directly with UAE customs authorities to keep queries from turning into delays. The aim is a declaration that doesn't need a second look.",
  ],
};

export const freeZoneMainland: SubServicePageContent = {
  parentSlug: "customs-clearance",
  parentLabel: "Customs Clearance",
  parentHref: "/services/customs-clearance",
  slug: "free-zone-mainland",
  label: "Free Zone / Mainland",
  metaTitle: "Free Zone & Mainland Customs Clearance | Customs Clearance | Alpha Star Shipping",
  metaDescription: "Free zone and mainland customs clearance from Alpha Star, handling the declaration and duty treatment when cargo moves between the two.",
  heroIntro:
    "Clearance for cargo moving between a free zone and the UAE mainland, where duty becomes payable only once goods actually enter the domestic market.",
  overviewHeading: "Where Duty Actually Starts",
  overview: [
    "UAE free zones sit outside the customs territory for duty purposes, meaning cargo can be stored, processed or re-exported from one without duty ever becoming payable. The moment goods move from a free zone into the mainland market, that changes, and a separate declaration is needed to reflect it.",
    "Alpha Star handles that free zone to mainland movement correctly, filing the right declaration at the point duty actually becomes due rather than treating every movement the same way. Getting this distinction wrong can turn a duty-suspended shipment into an unexpected tax event, which is exactly what we manage around.",
  ],
};

export const transitClearance: SubServicePageContent = {
  parentSlug: "customs-clearance",
  parentLabel: "Customs Clearance",
  parentHref: "/services/customs-clearance",
  slug: "transit-clearance",
  label: "Transit Clearance",
  metaTitle: "Transit Customs Clearance | Customs Clearance | Alpha Star Shipping",
  metaDescription: "Transit customs clearance from Alpha Star for cargo passing through the UAE on its way to another destination.",
  heroIntro:
    "Clearance for cargo passing through the UAE on its way to another destination, kept moving rather than treated as a full import.",
  overviewHeading: "Passing Through, Not Importing",
  overview: [
    "Cargo that's genuinely just passing through the UAE on its way somewhere else shouldn't be cleared as a full import, and transit clearance exists to reflect that. The declaration treats the shipment as cargo in transit, not cargo entering the domestic market, which changes the duty and documentation involved.",
    "Alpha Star files transit declarations for cargo routed through UAE ports or airports toward a final destination elsewhere, keeping it moving rather than stalling it in a clearance process built for imports. For cargo using the UAE purely as a routing point, this is the clearance that actually fits.",
  ],
};

// --- Ship Spares ---------------------------------------------------------------

export const shipSparesInTransit: SubServicePageContent = {
  parentSlug: "ship-spares",
  parentLabel: "Ship Spares",
  parentHref: "/ship-spares",
  slug: "ship-spares-in-transit",
  label: "Ship Spares in Transit",
  metaTitle: "Ship Spares in Transit | Ship Spares | Alpha Star Shipping",
  metaDescription: "Ship spares in transit handling from Alpha Star, tracking and managing spares already moving through another country's customs system.",
  heroIntro:
    "Spares already moving through another country's customs system, tracked and handled so transit status doesn't turn into a delay at the next border.",
  overviewHeading: "Transit Status Shouldn't Mean Lost Visibility",
  overview: [
    "Ship spares often arrive already in transit, having started their journey through another country's customs system before reaching us. That transit status needs to be tracked and carried through correctly, or it can turn into exactly the kind of delay a time bound spare can't afford.",
    "Alpha Star picks up spares already in transit and manages the handoff so their status is preserved rather than restarted, keeping the shipment moving toward the vessel instead of getting stuck being re-processed as if it were starting fresh.",
  ],
};

export const doorToDeck: SubServicePageContent = {
  parentSlug: "ship-spares",
  parentLabel: "Ship Spares",
  parentHref: "/ship-spares",
  slug: "door-to-deck",
  label: "Door to Deck",
  metaTitle: "Door to Deck Delivery | Ship Spares | Alpha Star Shipping",
  metaDescription: "Door to deck ship spares delivery from Alpha Star, tracked all the way to the vessel and confirmed received before the job closes.",
  heroIntro:
    "Delivery that doesn't stop at the port gate. We track the shipment through to the vessel's deck and confirm it's received before closing the job.",
  overviewHeading: "Delivery Doesn't End at the Port Gate",
  overview: [
    "A lot of ship spares logistics stops at the port, handing the final leg to someone else to actually get the part onto the vessel. Door to deck delivery means that handoff doesn't happen: the shipment is tracked by the same team all the way to the deck, not passed off at the gate.",
    "We confirm the spare is physically received on board before considering the job closed, not just delivered to the port. For a part a vessel is waiting on, that last stretch from gate to deck is exactly where delays like to hide.",
  ],
};

export const urgentSupport: SubServicePageContent = {
  parentSlug: "ship-spares",
  parentLabel: "Ship Spares",
  parentHref: "/ship-spares",
  slug: "urgent-support",
  label: "24/7 Urgent Support",
  metaTitle: "24/7 Urgent Ship Spares Support | Ship Spares | Alpha Star Shipping",
  metaDescription: "24/7 urgent ship spares support from Alpha Star, staffed around the clock for vessels that can't wait for business hours.",
  heroIntro:
    "A desk that's staffed around the clock for urgent spares, because a vessel idle in port waiting on a part is an expensive problem that doesn't wait for business hours.",
  overviewHeading: "Vessels Don't Wait for Business Hours",
  overview: [
    "A vessel idle in port doesn't stop costing money overnight or on a weekend, and neither does our ship spares desk stop taking calls. Urgent support is staffed around the clock specifically because the moments a spare is needed most urgently rarely land during standard business hours.",
    "That means a call at 2am gets the same immediate coordination as one at 2pm: booking, documentation and transit handling starting right away, not queued until morning. For time bound ship spares, the hour the call comes in shouldn't change how fast we move.",
  ],
};

export const customsTransitHandling: SubServicePageContent = {
  parentSlug: "ship-spares",
  parentLabel: "Ship Spares",
  parentHref: "/ship-spares",
  slug: "customs-transit-handling",
  label: "Customs & Transit Handling",
  metaTitle: "Customs & Transit Handling for Ship Spares | Ship Spares | Alpha Star Shipping",
  metaDescription: "Customs and transit handling for ship spares from Alpha Star, managing in-transit and bonded clearance so spares keep moving.",
  heroIntro:
    "In-transit and bonded customs handling managed directly, so spares already in the system keep moving instead of sitting on paperwork.",
  overviewHeading: "Paperwork That Doesn't Slow the Part Down",
  overview: [
    "Ship spares frequently move through customs under in-transit or bonded status, and managing that correctly is the difference between a spare that keeps moving and one that gets held pending documentation. These aren't standard import declarations, and treating them as one causes exactly the delay a time bound part can't absorb.",
    "Alpha Star manages the customs and transit documentation directly, confirmed before the spare reaches the next checkpoint rather than sorted out once it's already there. The part keeps moving while the paperwork is being handled, not after.",
  ],
};

export const marineLogistics: SubServicePageContent = {
  parentSlug: "ship-spares",
  parentLabel: "Ship Spares",
  parentHref: "/ship-spares",
  slug: "marine-logistics",
  label: "Marine Logistics",
  metaTitle: "Marine Logistics Support | Ship Spares | Alpha Star Shipping",
  metaDescription: "Marine logistics support from Alpha Star for vessels calling at UAE ports, beyond individual ship spares shipments.",
  heroIntro:
    "Broader marine logistics support beyond a single spare part, covering the wider shipping and handling needs of vessels calling at UAE ports.",
  overviewHeading: "Support Beyond a Single Spare Part",
  overview: [
    "A vessel calling at a UAE port often needs more than one spare part handled, covering a broader set of logistics needs around its time in port. Marine logistics support covers that wider scope, not just a single urgent shipment in isolation.",
    "Alpha Star's marine logistics service draws on the same ship spares expertise and urgency, applied across whatever a vessel actually needs while it's in UAE waters. It's the same team and the same standard, scaled to the full scope of a vessel's call rather than one shipment at a time.",
  ],
};
