import { Check, Cpu, Lock, MessagesSquare } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { capabilities, communication, compliance } from "@/lib/site";

/**
 * Compliance, operational capability, and client communication.
 *
 * These three answer the questions a provider asks before handing over
 * PHI: is our data safe, can you actually do the work, and will we know
 * what is happening. They sit together because they are all about trust
 * rather than about services sold.
 *
 * Note for future edits: the information pack is explicit that specific
 * certification names and named EHR/clearinghouse integrations must not
 * be published until BillServ confirms them internally. The copy here
 * describes practices, not credentials, on purpose.
 */
export function Assurance() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            How we work
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Built on confidentiality, capability, and communication
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white"
              >
                <Lock className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-pretty">
                Compliance, privacy &amp; security
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">
                {compliance.lead}
              </p>
              <ul className="mt-5 space-y-2.5">
                {compliance.practices.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-teal-deep"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-teal text-white"
              >
                <Cpu className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-pretty">
                Technology &amp; operational capability
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">
                Experienced healthcare professionals working through
                technology-enabled billing workflows.
              </p>
              <ul className="mt-5 space-y-2.5">
                {capabilities.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-teal-deep"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white"
              >
                <MessagesSquare className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-pretty">
                Client communication &amp; reporting
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">
                {communication.lead}
              </p>
              <ul className="mt-5 space-y-2.5">
                {communication.points.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-teal-deep"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground text-pretty">
                {communication.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
