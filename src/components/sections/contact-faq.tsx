import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";

/**
 * Closes the contact page by answering what a practice usually asks
 * before making contact, so the page ends on substance rather than
 * running straight into the footer.
 */
const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Onboarding usually runs two to four weeks, depending on how quickly payer and clearinghouse enrolments clear. We can work your existing backlog in parallel, so nothing sits idle while setup completes.",
  },
  {
    q: "Do you work with our practice management software?",
    a: "We work inside whatever system you already use, so there is no migration and no new licence to buy. If you are between systems, we can advise on what your specialty and volumes call for.",
  },
  {
    q: "How is pricing structured?",
    a: "Most engagements are a percentage of collections, so our incentive matches yours. Fixed-fee and per-claim arrangements are available where they suit the work better. Either way, you get the scope and price in writing before anything starts.",
  },
  {
    q: "What happens to our existing aged A/R?",
    a: "We review it by bucket and by payer, then work what is still inside its filing window. Anything genuinely uncollectible we tell you plainly rather than billing you to chase it.",
  },
  {
    q: "How do you handle patient data?",
    a: "As a business associate under an executed BAA, in line with HIPAA. Please do not send protected health information through this contact form — we will set up a secure channel once an agreement is in place.",
  },
];

export function ContactFaq() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-14">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              Before you ask
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Questions we get most
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              If your question is not here, put it in the form above and we
              will answer it directly.
            </p>
          </Reveal>

          <Reveal from="right" delay={120}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
