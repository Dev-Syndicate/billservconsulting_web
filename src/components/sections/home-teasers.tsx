import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Droplets,
  Eye,
  FileCode2,
  FileWarning,
  CalendarDays,
  Check,
  Clock,
  GraduationCap,
  Headset,
  HeartPulse,
  Layers,
  Microscope,
  PhoneCall,
  Scan,
  Send,
  ShieldCheck,
  Stethoscope,
  TestTube,
  TrendingDown,
  UserPlus,
  Wallet,
} from "lucide-react";

import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ClaimFlowIllustration } from "@/components/illustrations";
import {
  expertise,
  outsourceOutcomes,
  outsourcePromise,
  services,
  whyOutsource,
} from "@/lib/site";

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

const whyIcons: Record<(typeof whyOutsource)[number]["icon"], LucideIcon> = {
  GraduationCap,
  ShieldCheck,
  TrendingDown,
  Clock,
};

const specialtyIcons: Record<(typeof expertise)[number]["icon"], LucideIcon> = {
  Stethoscope,
  TestTube,
  Scan,
  Droplets,
  HeartPulse,
  Eye,
  Microscope,
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

            {/* Stats as bordered tiles rather than bare numerals: as plain
                text they read as loose figures floating under the copy,
                with nothing tying them to each other. */}
            <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "10", label: "Billing services", icon: Layers },
                { value: "7", label: "Specialties covered", icon: Stethoscope },
                { value: "2022", label: "Serving providers since", icon: CalendarDays },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background p-4 sm:p-5"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-9 place-items-center rounded-xl text-white",
                      i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                    )}
                  >
                    <stat.icon className="size-4.5" />
                  </span>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="mt-3 text-2xl font-bold tabular-nums text-primary-text sm:text-3xl">
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
            <ClaimFlowIllustration className="mx-auto w-full max-w-md animate-float" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Services: all ten, in an asymmetric layout.
 *
 * The first two get large feature tiles and the remaining eight sit in a
 * compact grid beneath. Ten equal cards read as a uniform wall of boxes
 * with no entry point; giving the first two more weight creates a
 * reading order and lets the whole offering show without the section
 * becoming a long scroll.
 *
 * Numbering is deliberate: the services are listed in the order a claim
 * actually moves through them, so the digits double as a hint that this
 * is one continuous pipeline rather than a menu of unrelated items.
 */
export function ServicesTeaser() {
  const [lead, second, ...rest] = services;
  const featured = [lead, second];

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TeaserHead
          eyebrow="What We Do"
          title="Services Offered"
          lead="End-to-end revenue cycle support, from the first patient record to the final settled claim."
        />

        {/* Two feature tiles: the front of the revenue cycle, where the
            most claim problems originate. */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            const teal = i % 2 === 1;
            return (
              <Reveal key={service.title} delay={i * 90} className="h-full">
                <Link
                  href="/services"
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8",
                    teal
                      ? "border-brand-teal/25 bg-brand-teal/8 hover:border-brand-teal/50 hover:shadow-brand-teal/10"
                      : "border-primary/25 bg-primary/8 hover:border-primary/50 hover:shadow-primary/10",
                  )}
                >
                  {/* Oversized step number, sunk into the corner as a
                      graphic rather than read as content. */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -top-4 right-2 text-[7rem] leading-none font-bold tabular-nums select-none",
                      teal ? "text-brand-teal/12" : "text-primary/12",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden
                    className={cn(
                      "relative grid size-14 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                      teal ? "bg-brand-teal" : "bg-primary",
                    )}
                  >
                    <Icon className="size-7" />
                  </span>

                  <h3 className="relative mt-5 text-lg font-semibold text-balance">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.description}
                  </p>

                  <span
                    className={cn(
                      "relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
                      teal ? "text-brand-teal-deep" : "text-brand-cta",
                    )}
                  >
                    See how it works
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* The remaining eight, compact. Four columns divide them evenly,
            so no cell is left stranded on an incomplete row. */}
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            const teal = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={180 + i * 50}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl text-white",
                        teal ? "bg-brand-teal" : "bg-primary",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span
                      aria-hidden
                      className="text-sm font-semibold tabular-nums text-muted-foreground/60"
                    >
                      {String(i + 3).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-pretty">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <MoreLink href="/services">
          {`Explore all ${services.length} services in detail`}
        </MoreLink>
      </div>
    </section>
  );
}

/**
 * Why outsource: the four reasons, then what a practice gets back.
 *
 * The reasons were a plain bulleted list — four dots and two columns of
 * text, with no hierarchy and no use of the icons the data already
 * carries. They are now numbered cards.
 *
 * The dark panel beneath carries the pack's own closing line and its
 * twelve outcome phrases. Those outcomes are the answer to "so what?"
 * that the four reasons raise, and they had no home anywhere on the site.
 */
export function WhyTeaser() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <TeaserHead
          eyebrow="Why Outsource"
          title={"Billing is a full‑time discipline"}
          lead="Codes change annually, payer rules change constantly, and unworked claims age out of their filing windows."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyOutsource.map((item, i) => {
            const Icon = whyIcons[item.icon];
            const teal = i % 2 === 1;
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                  {/* Oversized numeral, sunk into the corner as a graphic. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 right-3 text-7xl leading-none font-bold tabular-nums text-muted-foreground/8 select-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden
                    className={cn(
                      "relative grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                      teal ? "bg-brand-teal" : "bg-primary",
                    )}
                  >
                    <Icon className="size-6" />
                  </span>

                  <h3 className="relative mt-5 font-semibold text-pretty">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {/* What you get back. Navy panel so it reads as a conclusion
            rather than as a fifth reason. */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl bg-brand-deep p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
              <div>
                <p className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
                  What you get back
                </p>
                <p className="mt-4 text-xl font-semibold text-balance sm:text-2xl">
                  {outsourcePromise}
                </p>
                <Button
                  asChild
                  className="group mt-7 h-12 rounded-xl bg-white px-6 text-base font-semibold text-brand-deep hover:bg-white/90"
                >
                  <Link href="/why-outsource">
                    Why it pays to outsource
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>

              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {outsourceOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-teal"
                    />
                    <span className="text-white/90 text-pretty">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
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
          {expertise.map((area, i) => {
            const Icon = specialtyIcons[area.icon];
            return (
            <Reveal as="li" key={area.name} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <span
                  aria-hidden
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-xl text-white",
                    i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-pretty">{area.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {area.description}
                </p>
              </div>
            </Reveal>
            );
          })}

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
