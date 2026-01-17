export const businessData = {
  name: "ZA Electrical Ltd",
  landline: "01444 236 780",
  mobile: "07402 829735",
  whatsapp: "447460037733",
  email: "Dune1975@gmail.com",
  address: {
    line1: "Anvil Cottage",
    line2: "Foundry Court",
    line3: "Mill Road",
    town: "Burgess Hill",
    county: "West Sussex",
    country: "United Kingdom",
    postcode: "RH15 8UH",
  },
  fullAddress: "ZA Electrical Ltd, Anvil Cottage, Foundry Court, Mill Road, Burgess Hill, West Sussex, United Kingdom, RH15 8UH",
  hours: "Monday – Sunday: 5:00 am – 11:30 pm",
  niceicNumber: "603139000",
  established: "2001",
  experience: "24 years",
  trustCredentials: [
    "NICEIC Registered",
    "Fully Insured",
    "DBS Cleared",
  ],
  standard: "BS 7671 Current 18th Edition",
};

export const services = [
  {
    id: "emergency",
    title: "Emergency Electrical 24/7",
    description: "Round-the-clock emergency call-outs for urgent electrical issues. Available 7 days a week to ensure your safety.",
    icon: "Zap",
    category: "Emergency",
  },
  {
    id: "testing",
    title: "Electrical Testing & Inspection",
    description: "EICRs (Electrical Inspection and Condition Reports), landlord safety certificates, and domestic testing with full certification.",
    icon: "ClipboardCheck",
    category: "Testing",
  },
  {
    id: "fuse-boards",
    title: "Fuse Boards & Consumer Units",
    description: "Consumer unit upgrades and replacements to meet current safety standards. All installations comply with BS 7671.",
    icon: "LayoutGrid",
    category: "Installation",
  },
  {
    id: "lighting",
    title: "Lighting Installation",
    description: "Indoor, outdoor, and LED lighting design and installation. From kitchen spotlights to security floodlights.",
    icon: "Lightbulb",
    category: "Lighting",
  },
  {
    id: "ev-chargers",
    title: "EV Charger Installation",
    description: "Home and workplace electric vehicle charger installation including Pod Point and Zappi units. Fully certified.",
    icon: "BatteryCharging",
    category: "EV",
  },
  {
    id: "smart-home",
    title: "Smart Home & Automation",
    description: "Nest thermostats, smart lighting, heating controls, and voice-controlled home automation systems.",
    icon: "Home",
    category: "Smart Home",
  },
  {
    id: "security",
    title: "Security Systems",
    description: "Ring doorbells, CCTV cameras, Nest alarm systems, and security lighting installation.",
    icon: "Shield",
    category: "Security",
  },
  {
    id: "rewiring",
    title: "Rewiring & Upgrades",
    description: "Complete property rewires, new power points, and electrical upgrades for domestic and commercial properties.",
    icon: "Cable",
    category: "Installation",
  },
  {
    id: "solar",
    title: "Solar Systems",
    description: "Solar panel electrical connections and integration with your home electrical system.",
    icon: "Sun",
    category: "Renewable",
  },
  {
    id: "appliances",
    title: "Appliance Installation",
    description: "Electric oven supplies, hob fitting, and electric shower installation by qualified electricians.",
    icon: "Plug",
    category: "Domestic",
  },
  {
    id: "commercial",
    title: "Commercial Electrical",
    description: "NICEIC approved 3-phase work, commercial lighting projects, and business electrical services.",
    icon: "Building2",
    category: "Commercial",
  },
  {
    id: "outdoor",
    title: "Outdoor Electrical",
    description: "Outside security lighting, garden lighting, and external power supplies.",
    icon: "TreePine",
    category: "Outdoor",
  },
];

export const areasCovered = [
  "Burgess Hill",
  "Haywards Heath",
  "Hassocks",
  "Hurstpierpoint",
  "Brighton",
  "Hove",
  "Lindfield",
  "Walstead",
  "Newick",
  "Keymer",
  "Poynings",
  "Bolney",
  "Twineham",
  "Skaynes Hill",
  "Plumpton",
  "Clayton",
];

export const postcodesCovered = ["BN6", "RH15", "RH16", "RH17"];

export const reviews = {
  trustpilot: {
    url: "https://uk.trustpilot.com/review/zaelectrical.com",
    count: 115,
    rating: 4.9,
  },
  google: {
    count: 300,
    rating: 5,
    note: "Over 300 five-star reviews",
  },
  trustindex: {
    count: 444,
    rating: 5,
  },
  sampleReviews: [
    {
      text: "Punctual, professional and very knowledgeable",
      author: "Emma Scott",
      date: "Dec 2025",
      source: "Trustpilot",
    },
    {
      text: "Friendly and efficient service",
      author: "Anonymous",
      date: "Aug 2025",
      source: "Trustpilot",
    },
    {
      text: "Fast response… reliable and professional",
      author: "L Gallagher",
      date: "Jan 2025",
      source: "Trustpilot",
    },
  ],
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Areas Covered", href: "/areas" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];
