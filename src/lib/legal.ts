import { site } from "@/lib/site";

/**
 * Content for the /terms and /privacy pages.
 *
 * Structure follows the common medical-billing convention (see
 * cpamedicalbilling.com), extended with the clauses an RCM vendor
 * handling PHI actually needs: HIPAA/business-associate framing,
 * a no-advice disclaimer, indemnity, and liability limits.
 *
 * These documents must describe what the Site ACTUALLY does, not what
 * boilerplate assumes. Three statements here were inherited from a
 * template and were untrue of this build: that the Site sets cookies,
 * that we collect server logs, and that the contact form transmits data
 * to us. They have been corrected. If any of the following change, the
 * matching section must be revisited:
 *
 *   - the form backend changes   -> "Information collection and use",
 *                                   "Service providers", "Security"
 *   - analytics are added        -> "Cookies and tracking" (and consent)
 *   - fonts move off self-host   -> "Service providers"
 *
 * The form now posts to Web3Forms, which is named as a processor. If that
 * service is swapped or dropped, those three sections must change with it.
 *
 * Still outstanding: neither document has been reviewed by a lawyer.
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
export const legalUpdated = "September 18, 2026";

export const terms: LegalDocument = {
  title: "Terms and Conditions",
  summary:
    "These terms govern your use of this website and, where applicable, the medical billing and revenue cycle management services we provide.",
  updated: legalUpdated,
  sections: [
    {
      heading: "Agreement to these terms",
      body: [
        `Please read these Terms and Conditions (“Terms”) carefully before using ${site.url} (the “Site”), operated by ${site.legalEntity}, trading as ${site.name} (“we”, “us”, or “our”).`,
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
        `The Site and its original content, features, and functionality are and will remain the exclusive property of ${site.legalEntity} and its licensors. The Site’s content is protected by copyright and other applicable laws. Our name, logo, and branding may not be used in connection with any product or service without our prior written consent.`,
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
      /*
       * The Termination section states that indemnity provisions survive
       * termination, so the document has to contain one. Scoped to use of
       * the Site — indemnity for the services themselves belongs in the
       * written services agreement, not here.
       */
      heading: "Indemnity",
      body: [
        "You agree to indemnify and hold harmless us, our officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Site, your breach of these Terms, or your violation of any applicable law or the rights of a third party.",
        "This section concerns your use of the Site. Indemnities relating to the services themselves are addressed in the separate written services agreement, and nothing here extends or replaces them.",
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
      /*
       * Named rather than left as "our principal place of business": the
       * operating entity is Indian while most visitors are US providers,
       * so an unnamed forum left it genuinely unclear which law applied.
       * Scoped to the Site only — a US client's services agreement will
       * normally choose a US forum, and that choice must win.
       */
      heading: "Governing law",
      body: [
        "These Terms, and any dispute arising out of or in connection with them or with your use of the Site, shall be governed by and construed in accordance with the laws of India, without regard to conflict of law provisions. You agree that the courts at Chennai, Tamil Nadu, India shall have exclusive jurisdiction over any such dispute.",
        "This section governs the Site only. Where a separate written services agreement specifies a governing law or forum for the services, that agreement controls the matters it covers.",
        "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions remain in full force and effect.",
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
        `If you have any questions about these Terms, please contact ${site.legalEntity} at ${site.email}, by telephone at ${site.phone}, or by post at ${site.address.street}, ${site.address.city}`,
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
        `${site.legalEntity}, trading as ${site.name} (“we”, “us”, or “our”), operates ${site.url} (the “Site”). This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users of the Site.`,
        "We use your personal information only for responding to your enquiries and for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.",
        "The Site is a static informational website. It does not require you to create an account, it does not track you, and it collects nothing from you unless you choose to get in touch.",
      ],
    },
    {
      /*
       * Describes the mailto: flow the contact form actually uses — see
       * the handler in components/sections/contact.tsx. Nothing is posted
       * to a server, so the earlier wording ("submitting our contact
       * form" as a collection event) described a mechanism this build
       * does not have. If a form backend is added later, this section and
       * "Service providers" both need revisiting.
       */
      heading: "Information collection and use",
      body: [
        "We collect personal information only when you voluntarily send it to us. This may include your name, email address, telephone number, practice or organisation name, and the content of any message you choose to send us (“Personal Information”).",
        "When you submit the contact form, the details you entered are sent to Web3Forms, a form-delivery service, which forwards them to us by email. Web3Forms processes that information on our behalf solely in order to deliver it, and we do not use the service for anything else. If the form cannot reach that service, it falls back to opening a pre-filled message in your own email application, and nothing is sent until you send it yourself.",
        "We use what you send us to respond to your enquiry and, where relevant, to discuss the services you have asked about. We do not use it for marketing unrelated to your enquiry.",
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
      /*
       * The Site is a static export with no backend of our own, so we run
       * no logging. Whatever access logs exist are the hosting provider's.
       * The previous wording claimed the collection as ours, which was
       * both inaccurate and silent about the party actually doing it.
       */
      heading: "Server logs",
      body: [
        "We do not operate a server of our own for this Site and we keep no logs of your visit. The Site is published as a set of static files served by a third-party hosting provider.",
        "Like most hosting providers, ours records standard technical information when a page is requested — typically the Internet Protocol (“IP”) address, browser type, the page requested, and the time of the request — for the purposes of delivering the Site, security, and abuse prevention. That processing is governed by the hosting provider’s own privacy policy. We do not use these records to identify or profile individual visitors.",
      ],
    },
    {
      /*
       * Verified by inspection: no analytics, tag manager, pixel, consent
       * tool or any other cookie-setting code exists in this project. The
       * boilerplate cookie section told visitors the Site might break
       * without cookies, which was simply untrue.
       */
      heading: "Cookies and tracking",
      body: [
        "This Site does not use cookies. We do not run analytics, advertising pixels, session recording, or any other tracking technology, and we do not build a profile of you or share information about your visit with advertisers.",
        "Because nothing is stored on your device and nothing tracks you between visits, there is no cookie banner and no tracking settings for you to configure. If this ever changes, we will update this policy and, where the law requires it, ask for your consent first.",
      ],
    },
    {
      /*
       * Fonts are bundled at build time by next/font, so the browser
       * never contacts Google — worth stating, because a self-hosted
       * webfont and a remotely fetched one have very different privacy
       * consequences and the difference is invisible from the page.
       */
      heading: "Service providers",
      body: [
        "We keep the number of third parties involved in this Site to a minimum. Two are involved in normal use:",
      ],
      list: [
        "A hosting provider, which stores the Site’s files and serves them to your browser, and which processes the technical request information described under “Server logs” above.",
        "Web3Forms, a form-delivery service, which receives what you submit through the contact form and forwards it to us by email. It acts on our instructions for that purpose only.",
        "An email provider, which carries and stores the correspondence you send us and our replies to it.",
        "Fonts used on this Site are served from our own hosting alongside the rest of the Site. Your browser makes no request to any external font service, and no information about your visit is shared with one.",
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
        "Because enquiries reach us as email, what we hold is the correspondence itself. We keep it only for as long as is necessary to respond to you and to maintain a reasonable record of our business correspondence, unless a longer retention period is required by law or under a separate services agreement. You can ask us to delete it at any time.",
      ],
    },
    {
      heading: "Security",
      body: [
        "The Site is served over an encrypted connection (HTTPS), and contact form submissions are transmitted over an encrypted connection to the delivery service described above. Email itself, however, is not a secure channel: a message may pass through systems outside our control once it leaves us, and should not be treated as confidential. This is why we ask you not to send patient information or other sensitive data through the form or by email.",
        "We take reasonable steps to protect the information we hold, but no method of transmission over the Internet, and no method of electronic storage, is completely secure, and we cannot guarantee absolute security.",
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
        `You may ask us to access, correct, or delete the Personal Information you have sent us by contacting us at ${site.email}. We will respond to reasonable requests in accordance with applicable law.`,
        "Depending on where you live, you may have further rights over your personal information — including rights of access, correction, deletion, and objection — under laws such as the EU and UK General Data Protection Regulation, the California Consumer Privacy Act, or India’s Digital Personal Data Protection Act. We will honour any such right that applies to you. We do not sell or share personal information, and we do not discriminate against anyone for exercising these rights.",
      ],
    },
    {
      heading: "Changes to this privacy policy",
      body: [
        `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site and updating the date shown above. You are advised to review this Privacy Policy periodically for any changes.`,
      ],
    },
    {
      heading: "Contact us",
      body: [
        `If you have any questions about this Privacy Policy, or wish to exercise any of the rights described above, please contact ${site.legalEntity} at ${site.email}, by telephone at ${site.phone}, or by post at ${site.address.street}, ${site.address.city}`,
      ],
    },
  ],
};
