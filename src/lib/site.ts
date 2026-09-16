export const site = {
  name: "BillServ Consulting",
  /* Hero headline, carried over from the original Wix site. */
  tagline: "Quality Is What We Believe In.",
  /* Logo lockup tagline. */
  logoTagline: "Billing Today. A Healthier Tomorrow.",
  /* Closing line from the information pack's "Our Promise" section. */
  promise: "Your Healthcare. Our Expertise. Better Revenue Management.",
  description:
    "Outsourced medical billing and revenue cycle management. We ensure that your claims are billed right every time and provide you with hassle-free billing services.",
  url: "https://www.billservconsulting.com",
  phone: "+1 408 462 6008",
  fax: "+1 408 462 6009",
  email: "team@billservconsulting.com",
  /*
   * Pacific Time, not a fixed offset: California observes PST and PDT at
   * different points in the year, so naming the zone stays correct
   * year-round. The information pack is explicit that the site must NOT
   * claim 24/7 availability.
   */
  availability: "Monday–Friday, 8:00 AM–5:00 PM Pacific Time (PT)",
  /** Compact form, for places where the full string will not fit. */
  availabilityShort: "Mon–Fri, 8AM–5PM PT",
  legalEntity: "Billserv Consulting (OPC) Private Limited",
  established: 2022,
  address: {
    street: "45/20 T.S Street, Mount Road",
    city: "Chennai- 600002, T.N, India.",
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Why Outsource", href: "/why-outsource" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

export const expertise = [
  {
    name: "Internal Medicine",
    description:
      "E/M level selection, chronic care management, and annual wellness visits across high patient volumes.",
  },
  {
    name: "Laboratory Billing",
    description:
      "Panel versus component billing, medical necessity checks against payer LCD/NCD policy, and CLIA modifiers.",
  },
  {
    name: "Radiology Billing",
    description:
      "Professional and technical component splits, modifiers 26 and TC, and global versus split billing.",
  },
  {
    name: "Nephrology Billing",
    description:
      "Monthly capitation payments for dialysis, ESRD codes, and place-of-service rules across facility settings.",
  },
  {
    name: "Cardiology Billing",
    description:
      "Diagnostic and interventional procedures, device monitoring, and bundling rules under NCCI edits.",
  },
  {
    name: "Ophthalmology Billing",
    description:
      "Eye visit codes versus E/M, bilateral procedure modifiers, and global surgical period tracking.",
  },
  {
    name: "Hematology Billing",
    description:
      "Infusion and injection hierarchies, drug units under HCPCS J-codes, and prior-authorization workflows.",
  },
] as const;

export const services = [
  {
    title: "Patient Registration / Demographic entry",
    icon: "UserPlus",
    description:
      "Capturing and validating patient demographics, guarantor details, and insurance information at intake, so claims carry accurate identifiers from the outset.",
  },
  {
    title: "Insurance eligibility verification",
    icon: "ShieldCheck",
    description:
      "Confirming active coverage, benefits, copay, deductible, and prior-authorization requirements before the visit — via X12 270/271 transactions or payer portals.",
  },
  {
    title: "Medical Coding services",
    icon: "FileCode2",
    description:
      "Translating clinical documentation into ICD-10-CM diagnosis and CPT/HCPCS procedure codes with appropriate modifiers, each supported by the record.",
  },
  {
    title: "Charge Entry Services",
    icon: "ClipboardList",
    description:
      "Entering coded services with date and place of service, provider, units, and modifiers, then auditing each charge against the fee schedule before claim creation.",
  },
  {
    title: "EDI -Setup / Electronic claims Transmission",
    icon: "Send",
    description:
      "Establishing payer and clearinghouse enrollments, then transmitting claims as HIPAA-standard X12 837P/837I files and working rejection reports.",
  },
  {
    title: "Payment Posting",
    icon: "Wallet",
    description:
      "Posting payments from X12 835 remittance advice and manual EOBs, reconciling against deposits while flagging underpayments, adjustments, and denial codes.",
  },
  {
    title: "Denial Management",
    icon: "FileWarning",
    description:
      "Analyzing CARC/RARC denial reasons, correcting and appealing within timely-filing limits, and tracing denial trends back to their root cause.",
  },
  {
    title: "Account Receivable, Insurance and Patient follow up",
    icon: "PhoneCall",
    description:
      "Working aged A/R by bucket — checking claim status via X12 276/277, pursuing unpaid balances, and managing patient statements and payment plans.",
  },
  {
    title: "Credentialing",
    icon: "BadgeCheck",
    description:
      "Enrolling providers with payers and Medicare/Medicaid, maintaining CAQH ProView profiles, and tracking re-credentialing cycles and licence expirations.",
  },
  {
    title: "Call Centre",
    icon: "Headset",
    description:
      "Inbound and outbound voice support — patient billing inquiries, eligibility calls, and payer follow-up — under HIPAA-compliant handling protocols.",
  },
] as const;

export const whyOutsource = [
  {
    title: "Current coding and payer expertise",
    description:
      "ICD-10-CM, CPT, and HCPCS are revised annually and payer policies change continuously. Dedicated teams stay current across payers and specialties.",
    icon: "GraduationCap",
  },
  {
    title: "Fewer denials at the source",
    description:
      "The leading denial causes are front-end failures in registration and eligibility. Consistent verification routines address them where they originate.",
    icon: "ShieldCheck",
  },
  {
    title: "Variable cost, not fixed headcount",
    description:
      "Replaces fixed salaries, benefits, billing software licences, and clearinghouse fees — and removes single-point-of-failure risk from staff turnover.",
    icon: "TrendingDown",
  },
  {
    title: "Continuous A/R follow-up",
    description:
      "Aged A/R loses collectibility past 90 days and filing windows are finite. A dedicated team keeps claims moving inside those windows.",
    icon: "Clock",
  },
] as const;

/*
 * Mission, vision, and values — verbatim from the information pack, which
 * is the client's own approved wording.
 */
export const mission =
  "Our mission is to simplify healthcare revenue cycle management by delivering accurate, efficient, transparent, and dependable billing solutions that help healthcare providers maximize revenue while minimizing administrative complexity.";

export const vision =
  "Our vision is to become a trusted global leader in healthcare revenue cycle management, recognized for exceptional service, operational excellence, technological capability, transparency, and long-term client partnerships.";

export const coreValues = [
  {
    name: "Accuracy",
    description:
      "Every patient record, charge, claim, payment, and account matters.",
    icon: "Target",
  },
  {
    name: "Accountability",
    description: "We take responsibility for the work entrusted to us.",
    icon: "ShieldCheck",
  },
  {
    name: "Transparency",
    description:
      "Our clients deserve clear communication and visibility into their revenue cycle.",
    icon: "Eye",
  },
  {
    name: "Integrity",
    description:
      "We operate with professionalism, confidentiality, and respect for the trust placed in us.",
    icon: "Scale",
  },
  {
    name: "Efficiency",
    description:
      "We continuously look for ways to improve workflows and eliminate unnecessary delays.",
    icon: "Gauge",
  },
  {
    name: "Partnership",
    description:
      "We work alongside our clients as an extension of their team.",
    icon: "Handshake",
  },
  {
    name: "Continuous Improvement",
    description:
      "We continually develop our knowledge, processes, and capabilities.",
    icon: "TrendingUp",
  },
] as const;

/**
 * Our Approach — the pack is explicit that BillServ does not work to a
 * single template, which is a genuine differentiator worth stating.
 */
export const approach =
  "At BillServ, we don't believe in a one-size-fits-all approach. Every healthcare organization has different workflows, specialties, payer mixes, patient populations, and operational requirements. We work closely with our clients to understand their business, identify opportunities for improvement, establish efficient workflows, and provide the support required to maintain a healthy revenue cycle. Our goal is to become an extension of our client's organization — not just another outsourced vendor.";

export const leadership = [
  {
    name: "Abutaleb Mirza",
    role: "President & Director of Operations",
    bio: "Abutaleb Mirza leads BillServ Consulting with a focus on operational excellence, healthcare revenue cycle management, client relationships, and the continued development of the company's billing operations. His leadership is centered on building efficient processes, developing strong teams, maintaining service quality, and ensuring that BillServ consistently delivers value to healthcare providers.",
  },
  {
    name: "Susan Peters",
    role: "Senior Manager, Operations",
    bio: "Susan Peters is part of BillServ's operations leadership team, supporting day-to-day billing operations, team coordination, workflow management, and service delivery. Her role contributes to maintaining consistency, efficiency, and quality across BillServ's healthcare revenue cycle operations.",
  },
] as const;

/*
 * Client logos are supplied by each practice and committed as AVIF in
 * public/. `width`/`height` are the intrinsic pixel dimensions — needed so
 * Next can reserve space and avoid layout shift, since these are not
 * uniform (two square marks, two wordmarks of different ratios).
 *
 * The `-v2` suffix on two filenames is deliberate. Files under public/ are
 * served at a stable URL, so replacing one in place leaves browsers (and
 * CDNs) holding the old copy indefinitely. Those two had their opaque
 * white backgrounds removed, so they ship under a new name to guarantee
 * every visitor gets the corrected artwork. Rename again on any future
 * edit to the pixels.
 */
export type Client = {
  name: string;
  /** Where the practice is based, per the information pack. */
  location: string;
  logo: string;
  width: number;
  height: number;
  /**
   * True when the supplied artwork already spells the practice name. Those
   * get no caption underneath — printing it twice reads as a mistake.
   * The name is still carried into the image alt text either way.
   */
  nameInLogo?: boolean;
};

export const clients: Client[] = [
  {
    name: "Dr. Rashid Elahi, M.D., Inc.",
    location: "San Jose, California",
    logo: "/client-rashid-elahi.avif",
    width: 290,
    height: 228,
  },
  {
    name: "Riverside-Nephrology Physicians Inc.",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/client-riverside-nephrology.avif",
    width: 581,
    height: 232,
  },
  {
    name: "Van Buren Dialysis Center",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/client-van-buren-dialysis-v2.avif",
    width: 386,
    height: 386,
  },
  {
    name: "Tri-City Dialysis Center",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/client-tricity-dialysis-v2.avif",
    width: 386,
    height: 386,
  },
];

/*
 * Compliance and security posture.
 *
 * Deliberately describes practices rather than naming certifications: the
 * information pack states that specific certification names, issuing
 * organizations, and certificate details are to be published only once
 * finalised internally. Do not add certification badges or names here
 * without written confirmation from BillServ.
 */
export const compliance = {
  lead:
    "Healthcare billing requires the responsible handling of highly sensitive patient and financial information. BillServ is committed to maintaining professional standards for confidentiality, privacy, and responsible information handling across its operations.",
  practices: [
    "Confidentiality",
    "Secure information management",
    "Controlled access",
    "Employee responsibility",
    "Privacy-conscious workflows",
    "Healthcare compliance awareness",
    "Responsible data handling",
  ],
} as const;

/*
 * Operational capability.
 *
 * The pack is explicit that BillServ is a services company, not a software
 * product company — so this describes technology-enabled workflows rather
 * than implying a proprietary platform. Named EHR/EMR, practice-management,
 * and clearinghouse integrations are to be added only after internal
 * confirmation.
 */
export const capabilities = [
  "Electronic claims transmission",
  "EDI workflows",
  "Insurance and payer portals",
  "Electronic payment processing workflows",
  "Billing and practice-management systems",
  "Claims tracking",
  "A/R tracking",
  "Denial tracking",
  "Reporting and account monitoring",
  "Digital communication and documentation",
] as const;

/** Client communication commitments, from the pack's section 11. */
export const communication = {
  lead:
    "Communication is one of the most important parts of a successful outsourcing relationship. BillServ believes healthcare providers should never be left wondering what is happening with their revenue.",
  closing:
    "We aim to make our clients feel that their billing department is still right there with them — even when BillServ is handling the work remotely.",
  points: [
    "Clear communication",
    "Responsive support",
    "Dedicated points of contact",
    "Account visibility",
    "Billing updates",
    "A/R information",
    "Denial information",
    "Claim status updates",
    "Performance discussions",
    "Ongoing operational coordination",
  ],
} as const;
