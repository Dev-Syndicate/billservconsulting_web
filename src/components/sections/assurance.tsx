import Image from "next/image";
import { Check, Cpu, Lock, MessagesSquare } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  capabilities,
  communication,
  compliance,
  credentials,
} from "@/lib/site";

/**
 * Compliance, operational capability, and client communication.
 *
 * These three answer the questions a provider asks before handing over
 * PHI: is our data safe, can you actually do the work, and will we know
 * what is happening. They sit together because they are all about trust
 * rather than about services sold.
 *
 * Note for future edits: the information pack asked that specific
 * certification names and named EHR/clearinghouse integrations be
 * withheld until BillServ confirms them internally. The client cleared
 * the PMBA and CHA badges on 2026-09-21, so those are published below;
 * the three cards still describe practices rather than credentials, and
 * named integrations remain off the site.
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

        {/*
          Credentials.

          Sits below the three practice cards rather than inside them:
          these are external attestations, and the cards above describe
          what BillServ does rather than what it has been awarded.

          Each badge states who holds it. PMBA is the company's
          membership; CHA is an individual qualification, and presenting
          a personal certificate as an organisational one is exactly the
          claim a prospect's compliance officer would check.
        */}
        <Reveal delay={280} className="mt-12">
          <h3 className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Credentials
          </h3>
          <ul className="mt-8 flex flex-wrap items-stretch justify-center gap-5">
            {credentials.map((item, i) => (
              <Reveal as="li" key={item.name} delay={320 + i * 90}>
                <figure className="flex h-full w-full max-w-sm flex-col items-center rounded-2xl border border-border bg-background p-6 text-center">
                  {/*
                    Badge artwork is supplied with its own lettering and
                    colours, so it is shown as-is rather than recoloured.

                    Sized in a fixed box rather than by height: the two
                    badges have very different ratios (PMBA is a 3.1:1
                    banner, CHA a square), and matching their heights
                    would leave the PMBA wordmark far smaller than the
                    CHA block. object-contain centres each one inside the
                    same area, so they read as equal in weight.
                  */}
                  <div className="flex h-24 w-full items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.full} badge`}
                      width={item.width}
                      height={item.height}
                      className="max-h-24 w-auto max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-semibold">{item.full}</p>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">
                      {item.heldBy}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
