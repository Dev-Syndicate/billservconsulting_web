import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

/**
 * Client logos. Lives on /about rather than with the specialties, since it
 * describes who we work for, not what we bill.
 *
 * Same plain logo row as the homepage strip — no cards, no per-logo
 * captions. The logos carry their own names, and a card per client left
 * most of each tile empty with a stranded line of text at the bottom.
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
            Our client relationships include healthcare organizations serving
            patients across California, with particular strength in nephrology
            and dialysis-related revenue cycle operations.
          </p>
        </Reveal>

        {/* Wraps to two rows on narrow screens rather than shrinking the
            logos to the point the baked-in wordmarks stop being legible. */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {clients.map((client, i) => (
            <Reveal as="li" key={client.name} delay={i * 90}>
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                className="h-20 w-auto object-contain sm:h-24"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
