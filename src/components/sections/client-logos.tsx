import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

/**
 * Static row of client logos, used as social proof near the top of the
 * homepage. Each logo appears exactly once.
 *
 * Deliberately not a scrolling marquee: with only a handful of clients,
 * a continuous track has to repeat the same logos two or three times to
 * fill a desktop width, which reads as padding rather than proof.
 *
 * The full Clientele block on /about carries the practice names and
 * locations; this is just the recognition strip.
 */
export function ClientLogos({
  heading = "Trusted by healthcare providers",
}: {
  heading?: string;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h2 className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {heading}
          </h2>
        </Reveal>

        {/* Wraps to two rows on narrow screens rather than shrinking the
            logos to the point the baked-in wordmarks stop being legible. */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
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
