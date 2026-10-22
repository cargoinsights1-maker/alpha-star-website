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
