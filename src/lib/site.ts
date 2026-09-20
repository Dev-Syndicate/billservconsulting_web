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
   * Stated without a time zone at the client's direction. The
   * information pack is explicit that the site must NOT claim 24/7
   * availability.
   */
  availability: "Monday–Friday, 9:00 AM–5:00 PM",
  /** Compact form, for places where the full string will not fit. */
  availabilityShort: "Mon–Fri, 9AM–5PM",
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

/*
 * Specialties. Each carries its own icon — a single shared stethoscope
 * across all seven made the icon purely decorative and the cards hard to
 * tell apart at a glance.
 */
export const expertise = [
  {
    name: "Internal Medicine",
    icon: "Stethoscope",
    description:
      "E/M level selection, chronic care management, and annual wellness visits across high patient volumes.",
  },
  {
    name: "Laboratory Billing",
    icon: "TestTube",
    description:
      "Panel versus component billing, medical necessity checks against payer LCD/NCD policy, and CLIA modifiers.",
  },
  {
    name: "Radiology Billing",
    icon: "Scan",
    description:
      "Professional and technical component splits, modifiers 26 and TC, and global versus split billing.",
  },
  {
    name: "Nephrology Billing",
    icon: "Droplets",
    description:
      "Monthly capitation payments for dialysis, ESRD codes, and place-of-service rules across facility settings.",
  },
  {
    name: "Cardiology Billing",
    icon: "HeartPulse",
    description:
      "Diagnostic and interventional procedures, device monitoring, and bundling rules under NCCI edits.",
  },
  {
    name: "Ophthalmology Billing",
    icon: "Eye",
    description:
      "Eye visit codes versus E/M, bilateral procedure modifiers, and global surgical period tracking.",
  },
  {
    name: "Hematology Billing",
    icon: "Microscope",
    description:
      "Infusion and injection hierarchies, drug units under HCPCS J-codes, and prior-authorization workflows.",
  },
] as const;

/*
 * Medical RCM services.
 *
 * `description` is the one-line summary used in the homepage teaser.
 * `detail` and `benefits` come from the information pack and are shown
 * only on /services — they are what makes that page worth visiting
 * rather than a repeat of the homepage.
 *
 * Dental is a separate line of business with its own list; see
 * `dentalServices` below and `serviceCategories` for the pairing. Add a
 * medical service here, not there — the two lists have different shapes
 * (dental entries carry no `detail`/`benefits` yet).
 */
export const medicalServices = [
  {
    title: "Patient Registration / Demographic entry",
    icon: "UserPlus",
    description:
      "Capturing and validating patient demographics, guarantor details, and insurance information at intake, so claims carry accurate identifiers from the outset.",
    detail:
      "BillServ supports patient registration and demographic entry to ensure essential patient information is captured accurately and entered into the appropriate systems. Our attention to detail at the beginning of the revenue cycle helps prevent downstream billing issues and unnecessary claim delays.",
    benefits: [
      "Accurate patient information",
      "Cleaner billing records",
      "Reduced demographic errors",
      "Fewer avoidable claim issues",
      "Improved revenue cycle efficiency",
    ],
  },
  {
    title: "Insurance eligibility verification",
    icon: "ShieldCheck",
    description:
      "Confirming active coverage, benefits, copay, deductible, and prior-authorization requirements before the visit — via X12 270/271 transactions or payer portals.",
    detail:
      "Our team verifies insurance eligibility, coverage, benefits, payer information, and other relevant details to identify potential billing problems before they become costly denials. By strengthening the front end of the revenue cycle, BillServ helps providers minimize avoidable eligibility-related issues.",
    benefits: [
      "Reduced eligibility-related denials",
      "Better understanding of patient coverage",
      "Fewer unexpected billing issues",
      "Improved front-end revenue cycle management",
      "Better patient financial communication",
    ],
  },
  {
    title: "Medical Coding services",
    icon: "FileCode2",
    description:
      "Translating clinical documentation into ICD-10-CM diagnosis and CPT/HCPCS procedure codes with appropriate modifiers, each supported by the record.",
    detail:
      "BillServ provides medical coding support designed to ensure that healthcare services are appropriately translated into billing codes based on documentation and applicable requirements. Our team focuses on accuracy, consistency, and claim quality.",
    benefits: [
      "Accurate coding",
      "Improved claim quality",
      "Reduced coding-related errors",
      "Reduced avoidable denials",
      "Improved reimbursement accuracy",
    ],
  },
  {
    title: "Charge Entry Services",
    icon: "ClipboardList",
    description:
      "Entering coded services with date and place of service, provider, units, and modifiers, then auditing each charge against the fee schedule before claim creation.",
    detail:
      "BillServ provides accurate and timely charge entry to ensure that services provided by healthcare professionals are properly captured within the billing system. Our charge-entry processes help reduce missed charges, improve revenue capture, and ensure claims are prepared accurately.",
    benefits: [
      "Improved charge capture",
      "Reduced missed revenue",
      "Accurate claim preparation",
      "Faster billing workflows",
      "Improved financial visibility",
    ],
  },
  {
    title: "EDI -Setup / Electronic claims Transmission",
    icon: "Send",
    description:
      "Establishing payer and clearinghouse enrollments, then transmitting claims as HIPAA-standard X12 837P/837I files and working rejection reports.",
    detail:
      "BillServ supports electronic claims transmission and EDI processes to help healthcare providers submit claims efficiently and identify issues as early as possible. Our team helps ensure claims are properly transmitted and works with rejected claims that require correction and resubmission.",
    benefits: [
      "Efficient electronic claim submission",
      "Faster identification of rejected claims",
      "Reduced manual processing",
      "Faster correction and resubmission",
      "Improved claims workflow",
    ],
  },
  {
    title: "Payment Posting",
    icon: "Wallet",
    description:
      "Posting payments from X12 835 remittance advice and manual EOBs, reconciling against deposits while flagging underpayments, adjustments, and denial codes.",
    detail:
      "BillServ posts insurance and patient payments, adjustments, and related transactions accurately while helping maintain reliable account balances. This gives providers greater visibility into their financial position and helps identify outstanding accounts requiring follow-up.",
    benefits: [
      "Accurate account balances",
      "Improved financial visibility",
      "Reduced posting errors",
      "Better identification of outstanding A/R",
      "More efficient revenue cycle management",
    ],
  },
  {
    title: "Denial Management",
    icon: "FileWarning",
    description:
      "Analyzing CARC/RARC denial reasons, correcting and appealing within timely-filing limits, and tracing denial trends back to their root cause.",
    detail:
      "BillServ takes a proactive approach to denial management by identifying denial reasons, investigating issues, correcting problems, submitting appeals where appropriate, and following claims through resolution. We also look beyond individual denials to identify recurring patterns and opportunities to prevent future revenue leakage.",
    benefits: [
      "Denial identification",
      "Denial analysis",
      "Appeals management",
      "Revenue recovery",
      "Root-cause analysis",
      "Reduced preventable denials",
      "Improved reimbursement",
    ],
  },
  {
    title: "Account Receivable, Insurance and Patient follow up",
    icon: "PhoneCall",
    description:
      "Working aged A/R by bucket — checking claim status via X12 276/277, pursuing unpaid balances, and managing patient statements and payment plans.",
    detail:
      "BillServ's A/R management services are designed to turn outstanding receivables into collected revenue. Our team proactively follows up on unpaid claims and outstanding balances, communicates with insurance companies and patients where appropriate, investigates payment delays, and works toward resolution.",
    benefits: [
      "Improved A/R recovery",
      "Reduced aging",
      "Proactive insurance follow-up",
      "Patient balance follow-up",
      "Improved cash flow",
      "Greater visibility into outstanding revenue",
    ],
  },
  {
    title: "Credentialing",
    icon: "BadgeCheck",
    description:
      "Enrolling providers with payers and Medicare/Medicaid, maintaining CAQH ProView profiles, and tracking re-credentialing cycles and licence expirations.",
    detail:
      "BillServ provides credentialing support to help healthcare providers manage payer enrollment and credentialing requirements in an organized and efficient manner.",
    benefits: [
      "Streamlined credentialing",
      "Reduced administrative workload",
      "Organized enrollment processes",
      "Better payer participation management",
      "Reduced credentialing-related delays",
    ],
  },
  {
    title: "Call Centre",
    icon: "Headset",
    description:
      "Inbound and outbound voice support — patient billing inquiries, eligibility calls, and payer follow-up — under HIPAA-compliant handling protocols.",
    detail:
      "BillServ provides professional call center support designed to help healthcare organizations manage communication efficiently. Our team can support patient, billing, insurance, and administrative communication while helping providers maintain responsive and professional service.",
    benefits: [
      "Professional communication",
      "Improved responsiveness",
      "Reduced administrative workload",
      "Better patient experience",
      "Scalable support",
    ],
  },
] as const;

/*
 * Dental RCM services. Supplied by BillServ on 2026-09-18.
 *
 * Kept as its own list rather than folded into the medical one: dental
 * runs on CDT codes rather than CPT/ICD, has its own payer behaviour
 * (annual maximums, pre-determination, frequency limitations), and a
 * dental practice searching for a biller should not have to read twelve
 * medical services to find out it is served.
 *
 * These entries carry no `detail`/`benefits` — the client supplied one
 * description each. Do not invent them; ask BillServ if the dental page
 * needs the same depth as the medical one.
 */
export const dentalServices = [
  {
    title: "Insurance Eligibility & Benefits Verification",
    icon: "ShieldCheck",
    description:
      "Verify patient eligibility, coverage, benefits, deductibles, limitations, and remaining benefits before treatment.",
  },
  {
    title: "Dental Claim Submission",
    icon: "Send",
    description:
      "Accurate and timely electronic claim submission with thorough claim review to minimize errors and rejections.",
  },
  {
    title: "CDT Coding & Claim Scrubbing",
    icon: "FileCode2",
    description:
      "Review CDT codes, modifiers, documentation, and claim details to support accurate and clean claim submission.",
  },
  {
    title: "Pre-Authorization & Pre-Determination",
    icon: "ClipboardCheck",
    description:
      "Manage authorization and pre-determination requirements to help reduce unexpected claim issues and patient balances.",
  },
  {
    title: "Claim Status & Follow-Up",
    icon: "Search",
    description:
      "Proactive follow-up on outstanding claims, including payer communication and timely resolution of pending claims.",
  },
  {
    title: "Payment Posting & EOB Reconciliation",
    icon: "Wallet",
    description:
      "Accurate posting of insurance payments, adjustments, denials, and patient payments with EOB/ERA reconciliation.",
  },
  {
    title: "Dental Denial Management & Appeals",
    icon: "FileWarning",
    description:
      "Identify denial reasons, investigate root causes, correct billing issues, and manage appropriate appeals.",
  },
  {
    title: "Dental A/R Follow-Up",
    icon: "ClipboardList",
    description:
      "Focused follow-up on aging accounts to improve reimbursement and reduce outstanding insurance A/R.",
  },
  {
    title: "Underpayment & Variance Recovery",
    icon: "Scale",
    description:
      "Review contracted reimbursement against actual payments to identify underpayments and support recovery.",
  },
  {
    title: "Patient Billing Support",
    icon: "Headset",
    description:
      "Assist with patient statements, outstanding balances, insurance responsibility, and account resolution.",
  },
  {
    title: "Secondary & Tertiary Claims Management",
    icon: "Layers",
    description:
      "Coordinate secondary and tertiary billing to ensure eligible remaining balances are appropriately submitted.",
  },
  {
    title: "Dental RCM Reporting & Analytics",
    icon: "BarChart3",
    description:
      "Provide customized reporting on collections, aging A/R, denials, payments, and other key billing performance indicators.",
  },
] as const;

/** Why a dental practice should choose BillServ. Client's own copy. */
export const dentalWhy = [
  {
    title: "Dental-Focused Expertise",
    description:
      "Specialized understanding of dental billing workflows and payer processes.",
    icon: "Sparkles",
  },
  {
    title: "Improved Revenue Visibility",
    description:
      "Clear reporting and actionable insights into your practice's financial performance.",
    icon: "BarChart3",
  },
  {
    title: "Reduced Billing Burden",
    description:
      "Let your dental team focus on patient care while we manage the billing cycle.",
    icon: "HeartPulse",
  },
  {
    title: "Proactive A/R Management",
    description:
      "Consistent follow-up designed to keep claims moving and aging A/R under control.",
    icon: "ClipboardList",
  },
] as const;

/*
 * The two lines of business, for the /services page and its navigation.
 *
 * Ordered medical first: it is the larger list, the established business,
 * and what every existing client logo represents.
 */
export const serviceCategories = [
  {
    id: "medical",
    label: "Medical",
    eyebrow: "Medical RCM Solutions",
    title: "End-to-end medical revenue cycle management",
    lead: "From the moment a patient arrives for treatment until the insurance company settles the claim, BillServ can manage every step of the medical revenue cycle.",
    services: medicalServices,
  },
  {
    id: "dental",
    label: "Dental",
    eyebrow: "Dental RCM Solutions",
    title: "Streamline Your Dental Revenue. Strengthen Your Practice.",
    lead: "At BillServ Consulting, we provide specialized dental billing and revenue cycle management solutions designed to help dental practices improve collections, reduce claim delays, and maintain a healthier A/R.",
    services: dentalServices,
  },
] as const;

/** Closing line for the dental section. Client's own copy. */
export const dentalClosing = {
  headline: "Let Us Handle Your Dental Billing. You Focus on Your Patients.",
  lead: "Partner with BillServ Consulting for reliable, end-to-end Dental RCM support.",
} as const;

/**
 * Back-compat alias. The homepage teaser and the medical detail rows both
 * predate the medical/dental split and still mean the medical list.
 */
export const services = medicalServices;

/*
 * Why providers choose BillServ — the information pack's section 6.
 *
 * Distinct from `whyOutsource` below, and the two are not interchangeable:
 * this answers "why this company" (what BillServ brings), while that one
 * answers "why outsource at all" (why not keep billing in-house). The pack
 * treats them as separate pages for the same reason. Wording here is the
 * client's own, so edit only against a revised pack.
 */
export const whyBillServLead =
  "Choosing a billing company means choosing a partner that directly influences an organization's financial performance. BillServ provides the expertise, people, processes, and support required to manage the revenue cycle from beginning to end.";

export const whyBillServ = [
  {
    title: "Comprehensive Services",
    description:
      "From patient registration to final reimbursement, BillServ can manage the complete revenue cycle under one roof.",
    icon: "Layers",
  },
  {
    title: "Experienced Professionals",
    description:
      "Specialized knowledge of healthcare billing, claims, insurance processes, denials, A/R, coding, and revenue cycle operations.",
    icon: "Users",
  },
  {
    title: "Fewer Revenue Leaks",
    description:
      "We work to identify billing issues, claim problems, denials, missed charges, and outstanding accounts.",
    icon: "SearchCheck",
  },
  {
    title: "Faster Revenue Cycle",
    description:
      "Efficient workflows, proactive follow-up, and consistent claims management help keep revenue moving.",
    icon: "Gauge",
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Providers and internal teams can focus more on patients and core operations.",
    icon: "HeartHandshake",
  },
  {
    title: "Dedicated Support",
    description:
      "Clients have access to people who understand their accounts and can provide clear answers.",
    icon: "Headset",
  },
  {
    title: "Transparent Communication",
    description:
      "Clients receive visibility into their billing operations.",
    icon: "Eye",
  },
  {
    title: "Scalable Solutions",
    description:
      "Support can be tailored to specific billing functions or comprehensive RCM.",
    icon: "Expand",
  },
] as const;

/**
 * Closing line from the information pack's "Why Outsource" section.
 * Their own wording, and the sharpest sentence in the document.
 */
export const outsourcePromise =
  "Your patients deserve your attention. Your revenue cycle deserves ours.";

/**
 * What a practice actually gets back, from the same section. Kept as
 * short outcome phrases rather than prose — they read as a checklist,
 * which is how the pack presents them.
 */
export const outsourceOutcomes = [
  "Reduce administrative workload",
  "Improve billing accuracy",
  "Strengthen front-end processes",
  "Improve claims management",
  "Reduce preventable denials",
  "Improve A/R follow-up",
  "Recover outstanding revenue",
  "Improve financial visibility",
  "Reduce operational complexity",
  "Access experienced billing professionals",
  "Scale billing operations more efficiently",
  "Spend more time focusing on patient care",
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
 * Company description — the information pack's section 2, verbatim.
 *
 * Split into paragraphs rather than held as one block: as a single run it
 * is a 150-word wall, and the three parts answer different questions
 * (what we are, what we cover, what we believe). The closing line is the
 * argument the rest of the site is built on, so it reads as its own beat.
 */
export const companyDescription = [
  "BillServ Consulting is a full-service healthcare revenue cycle management and medical billing company helping healthcare providers streamline their billing operations, improve revenue performance, reduce administrative burden, and focus more on delivering quality patient care.",
  "We provide comprehensive revenue cycle solutions covering the entire billing journey — from patient registration and insurance eligibility verification through medical coding, charge entry, electronic claims transmission, payment posting, denial management, accounts receivable follow-up, credentialing, and healthcare call center support. Our team works across the healthcare spectrum, supporting providers and organizations across multiple specialties, including Internal Medicine, Laboratory, Radiology, Nephrology, Cardiology, Ophthalmology, and Hematology.",
] as const;

/**
 * The closing claim of the company description, kept separate so it can be
 * set apart from the prose above it.
 */
export const companyBelief =
  "At BillServ, we believe healthcare providers deserve more than a billing vendor. They deserve a dependable revenue cycle partner that understands their business, takes ownership of the billing process, communicates clearly, and works continuously to keep revenue moving.";

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
    logo: "/clients/rashid-elahi.avif",
    width: 290,
    height: 228,
  },
  {
    name: "Riverside-Nephrology Physicians Inc.",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/clients/riverside-nephrology.avif",
    width: 581,
    height: 232,
  },
  {
    name: "Van Buren Dialysis Center",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/clients/van-buren-dialysis-v2.avif",
    width: 386,
    height: 386,
  },
  {
    name: "Tri-City Dialysis Center",
    location: "Riverside, California",
    nameInLogo: true,
    logo: "/clients/tricity-dialysis-v2.avif",
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
 * Billing and practice-management systems the team has worked in, and the
 * clearinghouses it submits through. Confirmed by BillServ on 2026-09-18.
 *
 * Deliberately framed as systems the team is EXPERIENCED IN rather than
 * systems BillServ "integrates with". BillServ is a services company, not
 * a software product company: staff work inside whatever system the
 * client already runs. Claiming an integration would imply a technical
 * connection that does not exist and that a prospect could test.
 *
 * Do not add a name here without the client confirming it, and keep the
 * wording about familiarity rather than partnership or certification —
 * vendor partner programmes carry their own branding rules.
 */
export const systems = {
  software: {
    lead:
      "Our team works inside the billing and practice-management systems our clients already use, so there is no platform to migrate to and no new software to learn.",
    items: [
      "HealthNautica WebPractice",
      "eClinicalWorks (eCW)",
      "Kareo",
      "MEDITECH",
      "AdvancedMD",
    ],
  },
  clearinghouses: {
    lead:
      "Claims are submitted and tracked through established clearinghouses, with electronic remittance returned to the same workflow.",
    items: ["Availity", "TriZetto", "Office Ally"],
  },
  /**
   * Shown beneath both lists. The team's experience is not limited to the
   * named systems, and the site should not imply a practice is turned away
   * for running something else.
   */
  note:
    "Working in a system that is not listed here? Our team adapts to the software your practice already runs — tell us what you use and we will confirm.",
} as const;

/*
 * Operational capability.
 *
 * The pack is explicit that BillServ is a services company, not a software
 * product company — so this describes technology-enabled workflows rather
 * than implying a proprietary platform. Named systems and clearinghouses
 * live in `systems` above; anything added there needs client confirmation.
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
