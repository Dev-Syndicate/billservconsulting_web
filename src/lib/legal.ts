import { site } from "@/lib/site";

/**
 * Content for the /terms and /privacy pages.
 *
 * Structure follows the common medical-billing convention (see
 * cpamedicalbilling.com), extended with the clauses an RCM vendor
 * handling PHI actually needs: HIPAA/business-associate framing,
 * a no-advice disclaimer, and liability limits.
 *
 * Paragraphs render as <p>; a `list` renders as a bulleted list below them.
 */
export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  /** Shown under the page title. */
  summary: string;
  updated: string;
  sections: LegalSection[];
};

/** Single source of truth so both documents state the same date. */
export const legalUpdated = "September 16, 2026";

export const terms: LegalDocument = {
  title: "Terms and Conditions",
  summary:
    "These terms govern your use of this website and, where applicable, the medical billing and revenue cycle management services we provide.",
  updated: legalUpdated,
  sections: [
    {
      heading: "Agreement to these terms",
      body: [
        `Please read these Terms and Conditions (“Terms”) carefully before using ${site.url} (the “Site”), operated by ${site.name} (“we”, “us”, or “our”).`,
        "Your access to and use of the Site is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Site. By accessing or using the Site you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Site.",
      ],
    },
    {
      heading: "Use of the Site",
      body: [
        "You may use the Site for lawful purposes only, and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the Site. You agree not to:",
      ],
      list: [
        "Attempt to gain unauthorised access to the Site, the servers on which it is hosted, or any connected system or network.",
        "Use the Site to transmit any unlawful, harassing, defamatory, or misleading material, or any virus or other malicious code.",
        "Use automated systems to scrape, harvest, or otherwise extract data from the Site in a way that imposes an unreasonable load on our infrastructure.",
        "Submit protected health information or other sensitive patient data through the Site’s contact form. The form is intended for general business enquiries only.",
      ],
    },
    {
      heading: "Services and engagement terms",
      body: [
        "The Site describes the medical billing, coding, credentialing, and revenue cycle management services we offer. Descriptions on the Site are provided for general information and do not themselves constitute an offer, a quotation, or a binding commitment to provide services.",
        "Services are provided only under a separate written services agreement executed between us and the client. Where that agreement conflicts with these Terms, the terms of that agreement govern the services it covers.",
      ],
    },
    {
      heading: "No professional advice",
      body: [
        "Content on the Site — including material relating to coding, claim submission, payer policy, denial handling, and reimbursement — is provided for general informational purposes only. It does not constitute legal, medical, compliance, or professional billing advice, and it should not be relied upon as a substitute for advice from a qualified professional familiar with your circumstances.",
        "Coding standards, payer rules, and regulatory requirements change frequently. We do not warrant that any material on the Site reflects the most current standards or payer policy at the time you read it.",
      ],
    },
    {
      heading: "Confidentiality and protected health information",
      body: [
        "In the course of providing services under a written agreement, we may handle protected health information (“PHI”) as that term is defined under the Health Insurance Portability and Accountability Act of 1996 and its implementing regulations (“HIPAA”). Where we do so, we act as a business associate of the client and handle such information in accordance with an executed business associate agreement.",
        "No such relationship is created by your use of the Site alone. Do not transmit PHI to us through the Site, by unencrypted email, or through any other channel not established under a written agreement.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        `The Site and its original content, features, and functionality are and will remain the exclusive property of ${site.name} and its licensors. The Site’s content is protected by copyright and other applicable laws. Our name, logo, and branding may not be used in connection with any product or service without our prior written consent.`,
      ],
    },
    {
      heading: "Links to other web sites",
      body: [
        "The Site may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.",
        "You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.",
      ],
    },
    {
      heading: "Disclaimer of warranties",
      body: [
        "The Site is provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or in connection with your access to or use of the Site.",
        "Nothing in this section limits liability that cannot be excluded or limited under applicable law, and nothing here alters the liability provisions of any separate written services agreement.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "We may terminate or suspend access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.",
        "All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These Terms shall be governed and construed in accordance with the laws applicable at our principal place of business, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use the Site after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Site.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `If you have any questions about these Terms, please contact us at ${site.email} or by telephone at ${site.phone}.`,
      ],
    },
  ],
};

export const privacy: LegalDocument = {
  title: "Privacy Policy",
  summary:
    "How we collect, use, and protect information when you visit this website or get in touch with us.",
  updated: legalUpdated,
  sections: [
    {
      heading: "Introduction",
      body: [
        `${site.name} (“we”, “us”, or “our”) operates ${site.url} (the “Site”). This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users of the Site.`,
        "We use your personal information only for providing and improving the Site and responding to your enquiries. By using the Site, you agree to the collection and use of information in accordance with this policy.",
      ],
    },
    {
      heading: "Information collection and use",
      body: [
        "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, telephone number, practice or organisation name, and the content of any message you choose to send us (“Personal Information”).",
        "We collect this information only when you voluntarily provide it — for example, by submitting our contact form or contacting us by email or telephone — and we use it to respond to your enquiry and, where relevant, to discuss the services you have asked about.",
      ],
    },
    {
      heading: "Protected health information",
      body: [
        "The Site is not a channel for protected health information. Please do not submit patient names, medical records, claim data, or any other protected health information through the contact form or by unencrypted email.",
        "Where we handle protected health information in the course of delivering billing and revenue cycle services, we do so as a business associate under an executed business associate agreement and in accordance with HIPAA — not under this policy, which covers the Site only.",
      ],
    },
    {
      heading: "Log data",
      body: [
        "Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.",
        "Log Data is used to operate and secure the Site and to understand how it is used in aggregate. It is not used to build a profile of you as an individual.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your device.",
        "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.",
      ],
    },
    {
      heading: "Service providers",
      body: [
        "We may employ third-party companies and individuals to facilitate our Site, to provide the Site on our behalf, to perform Site-related services, or to assist us in analysing how our Site is used — for example, hosting and infrastructure providers.",
        "These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
      ],
    },
    {
      heading: "Disclosure of information",
      body: [
        "We do not sell, rent, or trade your Personal Information. We may disclose your Personal Information where we believe in good faith that such action is necessary to:",
      ],
      list: [
        "Comply with a legal obligation, court order, or lawful request by a public authority.",
        "Protect and defend our rights or property.",
        "Prevent or investigate possible wrongdoing in connection with the Site.",
        "Protect the personal safety of users of the Site or the public.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We retain Personal Information submitted through the Site only for as long as is necessary to respond to your enquiry and to maintain a record of our business correspondence, unless a longer retention period is required by law or under a separate services agreement.",
      ],
    },
    {
      heading: "Security",
      body: [
        "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "Our Site may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party’s site. We strongly advise you to review the privacy policy of every site you visit. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.",
      ],
    },
    {
      heading: "Children’s privacy",
      body: [
        "The Site is directed to healthcare providers and business contacts and is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you believe a child has provided us with Personal Information, please contact us so that we can remove it.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        `You may ask us to access, correct, or delete the Personal Information you have submitted through the Site by contacting us at ${site.email}. We will respond to reasonable requests in accordance with applicable law.`,
      ],
    },
    {
      heading: "Changes to this privacy policy",
      body: [
        `${site.name} may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site and updating the date shown above. You are advised to review this Privacy Policy periodically for any changes.`,
      ],
    },
    {
      heading: "Contact us",
      body: [
        `If you have any questions about this Privacy Policy, please contact us at ${site.email}, by telephone at ${site.phone}, or by post at ${site.address.street}, ${site.address.city}`,
      ],
    },
  ],
};
