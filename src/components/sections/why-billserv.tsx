import {
  Expand,
  Eye,
  Gauge,
  Headset,
  HeartHandshake,
  Layers,
  SearchCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "cn";

import { Reveal } from "@/components/reveal";
import { whyBillServ, whyBillServLead } from "@/lib/site";

const icons: Record<(typeof whyBillServ)[number]["icon"], LucideIcon> = {
  Layers,
  Users,
  SearchCheck,
  Gauge,
  HeartHandshake,
  Headset,
  Eye,
  Expand,
};

/**
 * Why healthcare providers choose BillServ — the information pack's
 * section 6.
 *
 * Deliberately separate from the Why Outsource section: that one argues
 * the case for outsourcing at all, this one argues the case for this
 * company once the decision is made. Collapsing the two would lose the
 * second argument, which is the one that closes.
 *
 * Eight items divide evenly two-up and four-up, so this is a plain grid
 * rather than the centred flex wrap used for the seven values and ten
 * services — there is no orphaned final row to centre.
 */
export function WhyBillServ({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section
      id="why-billserv"
      className="scroll-mt-16 border-b border-border bg-background"
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",
          headless ? "pt-10 sm:pt-12" : "pt-16 sm:pt-20",
        )}
      >
        <Reveal className="max-w-3xl">
          {!headless && (
            <>
              <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                Why BillServ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                More Than Medical Billing. A Complete Revenue Cycle Partner.
              </h2>
            </>
          )}
          <p
            className={cn(
              "text-lg text-muted-foreground text-pretty",
              headless ? "mt-0" : "mt-5",
            )}
          >
            {whyBillServLead}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyBillServ.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal as="li" key={item.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-xl text-white",
                      i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-pretty">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
