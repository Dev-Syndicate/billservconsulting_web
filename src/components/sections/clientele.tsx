import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

/**
 * Client logos. Lives on /about rather than with the specialties, since it
 * describes who we work for, not what we bill.
 *
 * The logos arrive at different aspect ratios (two square marks, two
 * wordmarks), so each sits in a fixed-height box with object-contain. That
 * normalises them optically without distorting anyone's brand.
 */
export function Clientele() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            Clientele
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Practices we work with
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            Nephrology and dialysis groups across the United States trust us
            with their revenue cycle.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, i) => (
            <Reveal as="li" key={client.name} delay={i * 90}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                {/* Fixed box keeps every mark on the same optical baseline.
                    Tall enough that the square marks' own wordmarks stay
                    legible rather than shrinking to a few pixels. */}
                <div className="flex h-36 w-full items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                {/* Only caption the marks that are pure symbol — otherwise
                    the practice name would appear twice in the same card. */}
                {client.nameInLogo ? null : (
                  <p className="mt-4 text-sm font-medium text-pretty">
                    {client.name}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
