import { MonitorCog, Network } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { systems } from "@/lib/site";

/**
 * Billing systems the team works in, and the clearinghouses it submits
 * through.
 *
 * Worth its own section because it answers the first question a practice
 * manager asks — "do you know our software?" — which the general
 * capability list could not, since that describes workflows rather than
 * naming anything.
 *
 * Wording matters here: these are systems the team is experienced in, not
 * integrations or partnerships. BillServ staff work inside whatever the
 * client already runs; there is no connector to speak of, and implying
 * one would be a claim a prospect could test. See the note in site.ts.
 */
export function Systems() {
  const groups = [
    {
      ...systems.software,
      heading: "Billing & practice-management systems",
      icon: MonitorCog,
      accent: "bg-primary",
    },
    {
      ...systems.clearinghouses,
      heading: "Clearinghouses",
      icon: Network,
      accent: "bg-brand-teal",
    },
  ];

  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            Systems We Work In
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            We work in your software, not ours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            There is no platform to migrate to and no new system for your staff
            to learn. Our team logs into the software your practice already
            runs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.heading} delay={i * 110}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
                  <span
                    aria-hidden
                    className={`grid size-11 shrink-0 place-items-center rounded-xl text-white ${group.accent}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-pretty">
                    {group.heading}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">
                    {group.lead}
                  </p>

                  {/* Names as chips rather than a bulleted list: they are
                      labels to be recognised at a glance, not points to
                      be read in sequence. */}
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-secondary px-3.5 py-2 text-sm font-medium text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={220}>
          <p className="mt-6 text-sm text-muted-foreground text-pretty">
            {systems.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
