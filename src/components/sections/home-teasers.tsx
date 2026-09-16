import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileCode2,
  FileWarning,
  Headset,
  PhoneCall,
  Send,
  ShieldCheck,
  Stethoscope,
  UserPlus,
  Wallet,
} from "lucide-react";

import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { TeamIllustration } from "@/components/illustrations";
import { expertise, services, whyOutsource } from "@/lib/site";

const serviceIcons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  UserPlus,
  ShieldCheck,
  FileCode2,
  ClipboardList,
  Send,
  Wallet,
  FileWarning,
  PhoneCall,
  BadgeCheck,
  Headset,
};

/** Shared heading block for each teaser. */
function TeaserHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground text-pretty">{lead}</p>
    </Reveal>
  );
}

function MoreLink({ href, children }: { href: string; children: string }) {
  return (
    <Button
      asChild
      variant="outline"
      className="group mt-10 h-12 rounded-xl border-border bg-background px-6 text-base font-medium"
    >
      <Link href={href}>
        {children}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Button>
  );
}

/** About: the pitch and the stats, with detail deferred to /about. */
export function AboutTeaser() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <TeaserHead
              eyebrow="About Us"
              title="Our Experts Are the Finest"
              lead="We provide services across the whole healthcare spectrum; from the moment a patient arrives for treatment until the time the insurance company settles the claim."
            />

            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "10", label: "Billing services offered" },
                { value: "7", label: "Specialties covered" },
                { value: "2022", label: "Serving providers since" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-primary-text sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground text-pretty sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>

            <MoreLink href="/about">Learn more about us</MoreLink>
          </div>

          <Reveal from="right" delay={120}>
            <TeamIllustration className="mx-auto w-full max-w-md animate-float" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Services: the first six, with the rest on /services. */
export function ServicesTeaser() {
  const shown = services.slice(0, 6);

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TeaserHead
          eyebrow="What We Do"
          title="Services Offered"
          lead="End-to-end revenue cycle support, from the first patient record to the final settled claim."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 60} className="h-full">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col items-center px-6 text-center">
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-16 shrink-0 place-items-center rounded-full ring-4",
                        i % 2 === 0
                          ? "bg-primary text-white ring-primary/15"
                          : "bg-brand-teal text-white ring-brand-teal/15",
                      )}
                    >
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-semibold text-balance">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <MoreLink href="/services">
          {`View all ${services.length} services`}
        </MoreLink>
      </div>
    </section>
  );
}

/** Why outsource: the four reasons, condensed. */
export function WhyTeaser() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TeaserHead
          eyebrow="Why Outsource"
          title="Billing is a full-time discipline"
          lead="Codes change annually, payer rules change constantly, and unworked claims age out of their filing windows."
        />

        <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {whyOutsource.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <h3 className="flex items-start gap-3 font-semibold text-pretty">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {item.title}
              </h3>
              <p className="mt-2 pl-4.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <MoreLink href="/why-outsource">Why it pays to outsource</MoreLink>
      </div>
    </section>
  );
}

/** Specialties: each with a one-line summary, linking into /services. */
export function ExpertiseTeaser() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TeaserHead
          eyebrow="Specialties"
          title="Areas of Expertise"
          lead="Each specialty carries its own coding rules, modifiers, and payer policies. These are the ones we work in daily."
        />

        {/*
         * A grid of named cards rather than a row of pills. Seven pills
         * wrapped to leave one stranded on its own line with the right
         * half of the section empty, and they discarded the per-specialty
         * description that the data already carries.
         *
         * Eight cells across four columns: the seven specialties plus a
         * closing link cell, so the last row completes instead of trailing
         * off. Below lg it falls back to two columns, where eight cells
         * still divide evenly.
         */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((area, i) => (
            <Reveal as="li" key={area.name} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <span
                  aria-hidden
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-xl text-white",
                    i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                  )}
                >
                  <Stethoscope className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-pretty">{area.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Completes the final row and carries the section's call to
              action, so no separate button is needed below the grid. */}
          <Reveal
            as="li"
            delay={expertise.length * 60}
            className="h-full"
          >
            <Link
              href="/services"
              className="group flex h-full flex-col justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 transition-colors hover:border-primary/60 hover:bg-primary/10"
            >
              {/* brand-cta, not primary-text: the primary/5 tint on this
                  cell darkens the background just enough that
                  primary-text lands at 4.47:1, under the 4.5:1 AA floor. */}
              <span className="font-semibold text-brand-cta text-pretty">
                See how we bill each specialty
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                View all services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
