import {
  Eye,
  Gauge,
  Handshake,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { approach, coreValues, mission, vision } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Target,
  ShieldCheck,
  Eye,
  Scale,
  Gauge,
  Handshake,
  TrendingUp,
};

/**
 * Mission, vision, approach, and core values — the company's own words
 * from the information pack.
 *
 * Mission and vision pair up at the top because they answer adjacent
 * questions (what we do now, where we are going). The seven values follow
 * as a centred flex wrap so the last row centres rather than leaving a
 * gap, matching the Services and Expertise sections.
 */
export function Values() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-secondary p-7 sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                Mission
              </p>
              <p className="mt-4 text-lg text-pretty">{mission}</p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="h-full rounded-2xl border border-border bg-secondary p-7 sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-brand-teal-deep uppercase">
                Vision
              </p>
              <p className="mt-4 text-lg text-pretty">{vision}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <h2 className="mt-16 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Our Approach
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {approach}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-16 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Core Values
          </h2>
        </Reveal>

        {/* Centred flex wrap, not a grid: seven items leave an incomplete
            final row, and a grid would strand it against the left edge. */}
        <ul className="mt-8 flex flex-wrap justify-center gap-5">
          {coreValues.map((value, i) => {
            const Icon = icons[value.icon];
            return (
              <Reveal
                as="li"
                key={value.name}
                delay={i * 80}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <div className="flex h-full gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span
                    aria-hidden
                    className={`grid size-11 shrink-0 place-items-center rounded-xl text-white ${
                      i % 2 === 0 ? "bg-primary" : "bg-brand-teal"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-pretty">{value.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
