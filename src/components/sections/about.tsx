import {
  CalendarDays,
  ClipboardCheck,
  Compass,
  Handshake,
  Layers,
  ServerCog,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { cn } from "cn";

import { Reveal } from "@/components/reveal";
import { ClaimFlowIllustration } from "@/components/illustrations";
import {
  companyBelief,
  companyDescription,
  dentalServices,
  leadership,
  medicalServices,
  type Leader,
} from "@/lib/site";

export function About({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      {/* In headless mode the route's PageHeader supplies the separation
          above, so the section's own top padding is reduced. */}
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20",
          headless ? "pt-10 sm:pt-12" : "pt-16 sm:pt-20",
        )}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            {!headless && (
              <>
                <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                  About Us
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Our Experts Are the Finest
                </h2>
              </>
            )}
            {/* The information pack's own company description. Only the
                first paragraph sits in this column — the second runs long
                and would push the copy well past the illustration beside
                it, so it follows below the grid at full width. */}
            <p className={cn("text-lg text-muted-foreground text-pretty", headless ? "mt-0" : "mt-6")}>
              {companyDescription[0]}
            </p>

            {/* Tiles rather than bare numerals, matching the homepage
                teaser — as loose figures they had nothing tying them
                together. */}
            <dl className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                {
                  /* Derived, not hardcoded: this read "10" and went
                     stale when dental was added. */
                  value: String(medicalServices.length + dentalServices.length),
                  label: "Billing services",
                  icon: Layers,
                },
                { value: "7", label: "Specialties covered", icon: Stethoscope },
                {
                  value: "2022",
                  label: "Serving providers since",
                  icon: CalendarDays,
                },
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
          </Reveal>

          <Reveal from="right" delay={120}>
            <ClaimFlowIllustration className="mx-auto w-full max-w-md animate-float" />
          </Reveal>
        </div>

        {/* The rest of the company description, at full width below both
            columns. The closing belief is set apart on the secondary
            surface: it is the argument the rest of the page rests on, and
            as a fourth plain paragraph it disappeared into the prose. */}
        <Reveal delay={90} className="mt-14">
          <p className="max-w-4xl text-lg text-muted-foreground text-pretty">
            {companyDescription[1]}
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-secondary p-7 sm:p-8">
            <p className="max-w-4xl text-lg text-pretty">{companyBelief}</p>
          </div>
        </Reveal>

        {/*
          Leadership — an even grid of five equal cards.

          The bios in site.ts are held to a similar length precisely so
          this grid sits flush; the cards are not force-matched with a
          fixed height. Three across on desktop leaves two in the final
          row, so that row is centred rather than left-aligned against an
          empty third column.
        */}
        <Reveal delay={100} className="mt-16">
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Leadership
          </h3>

          <ul className="mt-6 flex flex-wrap justify-center gap-5">
            {leadership.map((person, i) => (
              <Reveal
                as="li"
                key={person.name}
                delay={150 + i * 80}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <LeaderCard person={person} />
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/*
 * Domain accents.
 *
 * Only two hues, not one per person: blue for the work itself
 * (operations and growth) and teal for the functions that protect it
 * (compliance and technology). Five different colours read as arbitrary
 * decoration — this split says something true about the team.
 */
const domainAccent: Record<
  Leader["domain"],
  { tile: string; rule: string; chip: string }
> = {
  operations: {
    tile: "bg-primary",
    rule: "bg-primary",
    chip: "bg-primary/10 text-primary-text",
  },
  growth: {
    tile: "bg-primary",
    rule: "bg-primary",
    chip: "bg-primary/10 text-primary-text",
  },
  compliance: {
    tile: "bg-brand-teal",
    rule: "bg-brand-teal",
    chip: "bg-brand-teal/12 text-brand-teal-deep",
  },
  technology: {
    tile: "bg-brand-teal",
    rule: "bg-brand-teal",
    chip: "bg-brand-teal/12 text-brand-teal-deep",
  },
};

const leaderIcons: Record<string, LucideIcon> = {
  Compass,
  ClipboardCheck,
  Handshake,
  ShieldCheck,
  ServerCog,
};

/**
 * One person on the leadership roster.
 *
 * The signature detail is the rule along the card's top edge: it sits at
 * a short fixed width and draws across the full card on hover, in the
 * person's domain colour. It gives the grid a reason to be interactive
 * without moving the card contents around, and the colour is the only
 * place the operations/assurance split is stated visually.
 *
 * Reading order is name, then remit, then role. The formal titles are
 * long and similar to each other, so what someone owns is the more
 * useful line to meet first; the title follows as the record line.
 */
function LeaderCard({ person }: { person: Leader }) {
  const accent = domainAccent[person.domain];
  const Icon = leaderIcons[person.icon];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
      {/* The drawing rule. Motion-reduce holds it at its resting width. */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-0.5 w-14 transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:transition-none",
          accent.rule,
        )}
      />

      <div className="flex items-center gap-3.5">
        <span
          aria-hidden
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-105",
            accent.tile,
          )}
        >
          <Icon className="size-5" />
        </span>
        <div className="min-w-0">
          <h4 className="font-semibold tracking-tight">{person.name}</h4>
          <p
            className={cn(
              "mt-1 inline-block rounded-md px-1.5 py-0.5 text-[0.6875rem] font-medium tracking-wide uppercase",
              accent.chip,
            )}
          >
            {person.role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[0.9375rem] font-medium text-foreground text-pretty">
        {person.remit}
      </p>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">
        {person.bio}
      </p>
    </article>
  );
}
