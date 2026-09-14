export interface NavLink {
  label: string;
  href: string;
}

export interface DropdownItem {
  label: string;
  href: string;
}

// split around the Services/Industries dropdowns so the full nav reads:
// Home, About Us, Services, Industries, Careers, CSR, Resources, Contact
export const navLinksBefore: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export const navLinksAfter: NavLink[] = [
  { label: "Careers", href: "/careers" },
  { label: "CSR", href: "/csr" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const serviceItems: DropdownItem[] = [
  { label: "Air Freight", href: "/services#air-freight" },
  { label: "Sea Freight", href: "/services#sea-freight" },
  { label: "Land Freight", href: "/services#land-freight" },
  { label: "Customs Clearance", href: "/services#customs-clearance" },
  { label: "Warehousing & 3PL", href: "/services#warehousing" },
  { label: "Cross Trade & Transhipment", href: "/services#cross-trade" },
];

export const industryItems: DropdownItem[] = [
  { label: "Pharmaceutical Logistics", href: "/services#pharmaceutical-logistics" },
  { label: "Perishable Shipments", href: "/services#perishable-shipments" },
  { label: "DG Cargo", href: "/services#dg-cargo" },
  { label: "AOG (Aircraft on Ground)", href: "/services#aog" },
  { label: "Automobile Logistics", href: "/services#automobile-logistics" },
  { label: "Yacht & Boat Transportation", href: "/services#yacht-boat-transportation" },
];
