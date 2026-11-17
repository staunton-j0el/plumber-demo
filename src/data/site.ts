/** Copy for the Finch & Flange Plumbing concept demo. Swap this file to retarget the layout. */

/** Names of the small line icons drawn in `Icon.astro`. */
export type IconName =
  | "drain"
  | "heater"
  | "leak"
  | "gas"
  | "bath"
  | "shield"
  | "clock"
  | "pin"
  | "check"
  | "phone"
  | "leaf";

/** Trading identity, example contact details, and the JS Web Services credit. */
export const business = {
  name: "Finch & Flange Plumbing",
  shortName: "Finch & Flange",
  phoneDisplay: "0491 570 156",
  phoneHref: "tel:+61491570156",
  email: "hello@finch-and-flange.example",
  address: "18 Flannel Lane, Woolloongabba QLD 4102",
  abn: "00 000 000 000",
  hours: "Example hours: Monday to Friday, 7am–4pm, with a 24/7 emergency line.",
  qbcc: "150000001",
  gasAuthorisation: "GWA-000123",
  insurance: "$20 million public liability",
};

/** In-page navigation. Paths work from the home page and the 404 page. */
export const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#areas", label: "Areas" },
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#quote", label: "Quote" },
];

/** Services a Brisbane plumber would list, with prices marked as examples in the UI. */
export const services: {
  title: string;
  icon: IconName;
  summary: string;
  price: string;
  priceDetail: string;
}[] = [
  {
    title: "Blocked drains",
    icon: "drain",
    summary:
      "Kitchen, laundry, shower, and sewer lines. If the cause is not obvious, a camera shows what is sitting in the pipe.",
    price: "from $189",
    priceDetail: "Example call-out to inspect a blockage.",
  },
  {
    title: "Hot water systems",
    icon: "heater",
    summary:
      "Storage units and continuous-flow replacements, electric or gas, sized for the people actually living there.",
    price: "from $1,450",
    priceDetail: "Example supply and install of a standard electric storage unit.",
  },
  {
    title: "Leaks",
    icon: "leak",
    summary:
      "Dripping taps, tired flexi hoses, and damp patches traced before they become a ceiling stain.",
    price: "from $149",
    priceDetail: "Example price to find and fix a visible leak.",
  },
  {
    title: "Gas fitting",
    icon: "gas",
    summary:
      "Cooktops, bayonet points, and gas leak checks. Gas work stays with a licensed fitter.",
    price: "from $220",
    priceDetail: "Example price for a straightforward cooktop connection.",
  },
  {
    title: "Bathroom renos",
    icon: "bath",
    summary:
      "A refresh or a full rip-out: waterproofing, tapware, and a room that still works on a Monday morning.",
    price: "from $8,900",
    priceDetail: "Example starting price for a straightforward one-room refresh.",
  },
];

/** Example coverage, grouped the way a local plumber would talk about the map. */
export const areaGroups: { name: string; note: string; places: string[] }[] = [
  {
    name: "Inner Brisbane",
    note: "Verandahs, old clay drains, and tight access.",
    places: [
      "West End",
      "Highgate Hill",
      "South Brisbane",
      "Woolloongabba",
      "Kangaroo Point",
      "New Farm",
      "Fortitude Valley",
      "Spring Hill",
      "Petrie Terrace",
      "Paddington",
      "Red Hill",
      "Kelvin Grove",
    ],
  },
  {
    name: "Northside",
    note: "Post-war houses through to the newer estates.",
    places: [
      "Albion",
      "Wilston",
      "Newmarket",
      "Windsor",
      "Lutwyche",
      "Kedron",
      "Stafford",
      "Grange",
      "Alderley",
      "Ashgrove",
      "Nundah",
      "Wooloowin",
      "Clayfield",
      "Ascot",
      "Hamilton",
      "Chermside",
    ],
  },
  {
    name: "West",
    note: "Hills, stumps, and the odd surprise under the house.",
    places: [
      "Bardon",
      "Milton",
      "Auchenflower",
      "Toowong",
      "Taringa",
      "St Lucia",
      "Indooroopilly",
      "Chapel Hill",
    ],
  },
  {
    name: "South",
    note: "Family bathrooms and hot-water cupboards that have had a long life.",
    places: [
      "Annerley",
      "Dutton Park",
      "Fairfield",
      "Yeronga",
      "Coorparoo",
      "Camp Hill",
      "Holland Park",
      "Mount Gravatt",
      "Carina",
      "Carindale",
    ],
  },
  {
    name: "Bayside",
    note: "Salt air, older galvanised lines, and homes near the bay.",
    places: [
      "Morningside",
      "Cannon Hill",
      "Norman Park",
      "Balmoral",
      "Bulimba",
      "Hawthorne",
      "Wynnum",
      "Manly",
      "Lota",
    ],
  },
  {
    name: "Further across South East Queensland",
    note: "By arrangement, not a promise of a same-day van.",
    places: ["Logan", "Ipswich", "Redlands", "Moreton Bay"],
  },
];

/** Trust points. Licence numbers are rendered beside an “example only” label. */
export const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Licensed and insured",
    text: "Plumbing, drainage, and gas fitting sit under a licence a customer can ask to see. The numbers on this page are examples.",
  },
  {
    icon: "check",
    title: "The price, before the tools",
    text: "What the job likely is, and what it is likely to cost, gets said out loud before work starts. Hidden extras are how plumbers lose the next call.",
  },
  {
    icon: "pin",
    title: "Local to Brisbane and SEQ",
    text: "The suburb list is the example round. A real crew would know which streets flood and which houses still have clay sewer.",
  },
  {
    icon: "leaf",
    title: "Shoe covers, then a clean-up",
    text: "Floors stay covered. The mess from the job leaves with the van, not in the hallway.",
  },
  {
    icon: "clock",
    title: "24/7 for bursts and overflows",
    text: "After hours is for sewage, burst pipes, and no water. A dripping tap can wait until morning, and the fee is said first.",
  },
  {
    icon: "phone",
    title: "Plain language",
    text: "One person explains the job without the theatre. If a wall has to open, you hear that before the plaster does.",
  },
];

/** How a visit would run on a live version of this site. */
export const steps: { title: string; text: string }[] = [
  {
    title: "You get in touch",
    text: "Call or use the form. On this demo, neither one dispatches a plumber.",
  },
  {
    title: "The job is explained",
    text: "What it likely is, and the likely cost, before anyone reaches for a spanner.",
  },
  {
    title: "The visit",
    text: "Shoe covers on. If something hidden turns up, the price is confirmed again.",
  },
  {
    title: "A tidy finish",
    text: "The work is checked with you, then the offcuts leave with the van.",
  },
];

/** Sample reviews. The UI also badges each one as a sample. */
export const reviews: { suburb: string; quote: string }[] = [
  {
    suburb: "West End",
    quote:
      "They talked me through the blocked sewer on the verandah, and the figure they said before opening the toolbox was the figure on the invoice.",
  },
  {
    suburb: "Wynnum",
    quote:
      "Hot water died on a Sunday. The after-hours call was clear about the fee, and the new unit was in the next day.",
  },
  {
    suburb: "Ashgrove",
    quote:
      "The bathroom refresh stayed on the price we agreed, and they left the hallway cleaner than they found it.",
  },
];

/** Questions the demo should answer, including that the business is not real. */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is Finch & Flange a real plumber?",
    answer:
      "No. Finch & Flange Plumbing is fictional. JS Web Services built this page as a concept for a local business. The form does not send a message, and 0491 570 156 is an ACMA number reserved for fiction. Nothing here can be booked.",
  },
  {
    question: "Do you come out after hours?",
    answer:
      "On a live version of this site, the top banner would be a real 24/7 line for burst pipes and sewage overflows. The call-out fee would be said before anyone drives over. This demo cannot dispatch a plumber.",
  },
  {
    question: "What if I smell gas?",
    answer:
      "Leave the building. Do not use electrical switches on the way out. If anyone is in danger, call 000 from outside. A website form is the wrong tool for a gas leak, including this one.",
  },
  {
    question: "Are those prices real?",
    answer:
      "No. Every dollar figure is an example so you can see how pricing sits on the page. A real quote depends on access, parts, and what is behind the wall.",
  },
  {
    question: "Which suburbs are covered?",
    answer:
      "The list further up is an example round: inner Brisbane, the northside, the west, the south, and the bayside, with Logan, Ipswich, Redlands, and Moreton Bay by arrangement.",
  },
  {
    question: "Can I check the licence?",
    answer:
      "The numbers on this page are placeholders. A working site would show the real QBCC licence and gas authorisation. For a real plumber, check the QBCC register before you pay a deposit.",
  },
  {
    question: "What happens when I press Request a quote?",
    answer:
      "You will see a confirmation on this page and nothing else. Your details are not emailed, stored, or sent to a server by this demo.",
  },
  {
    question: "Do you renovate whole bathrooms?",
    answer:
      "A live version of this offer would, from a straightforward refresh to a full rip-out, including waterproofing. The example starting figure is for a simple one-room refresh. Moving the layout changes it.",
  },
];

/** Services offered in the quote form. Values are labels, not submissions. */
export const serviceOptions = [
  "Blocked drain",
  "Hot water system",
  "Leak",
  "Gas fitting",
  "Bathroom renovation",
  "Emergency",
  "Not sure yet",
];

/**
 * Build the document title for a page in this demo.
 * @param page - Short page label. Pass an empty string for the home page.
 * @returns A title that names the fictional plumber and JS Web Services.
 */
export function pageTitle(page: string): string {
  if (page.length === 0) {
    return "Finch & Flange Plumbing — Brisbane demo | JS Web Services";
  }
  return `${page} | Finch & Flange Plumbing demo`;
}

/** Default social-image description. Shared by the home page and the 404 page. */
export const ogAlt =
  "Finch & Flange Plumbing, a fictional Brisbane plumber. Concept demo by JS Web Services.";
