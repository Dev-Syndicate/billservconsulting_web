export const site = {
  name: "BillServ Consulting",
  tagline: "Quality Is What We Believe In.",
  description:
    "Outsourced medical billing and revenue cycle management. We ensure that your claims are billed right every time and provide you with hassle-free billing services.",
  url: "https://www.billservconsulting.com",
  phone: "+1 408 462 6008",
  fax: "+1 408 462 6009",
  email: "team@billservconsulting.com",
  availability: "We are Available 24/7",
  address: {
    street: "45/20 T.S Street, Mount Road",
    city: "Chennai- 600002, T.N, India.",
  },
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Outsource", href: "#why" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact Us", href: "#contact" },
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

export const processSteps = [
  {
    title: "Submit",
    description:
      "Registration, eligibility checks, coding, and charge entry — then claims go out as X12 837 files.",
  },
  {
    title: "Review",
    description:
      "Clearinghouse and payer rejections are worked, denials analyzed by CARC/RARC, and appeals filed.",
  },
  {
    title: "Paid",
    description:
      "Remittances posted from 835 files, balances reconciled, and remaining A/R followed up by bucket.",
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

export const leadership = [
  { name: "Abutaleb Mirza", role: "President & Director of Operations" },
  { name: "Susan Peters", role: "Senior Manager Operations" },
] as const;

export const clients = [
  "Rashid Elahi, M.D, Inc.",
  "Van Buren Dialysis Center",
] as const;

export const testimonial = {
  quote:
    "Outsourcing billing to Billserv has been a game-changer. Fewer denials, faster reimbursements, and immediate answers from my dedicated rep. Now I can focus on patients, not paperwork! Highly recommend it.",
  author: "Dr Mohammed Q Khan",
  title: "Nephrologist, President/CEO, Riverside, CA",
} as const;
