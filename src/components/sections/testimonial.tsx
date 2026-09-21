import { Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/site";

/**
 * Client testimonials.
 *
 * Deliberately not a carousel. The original site put a single quote
 * behind next/previous arrows and one dot — controls that advertise
 * missing content. Two quotes fit side by side and both stay readable,
 * which is strictly better than hiding one behind an interaction. Past
 * four or five, this needs to become a real carousel.
 *
 * Background is the plain white surface, chosen by elimination: the
 * ExpertiseTeaser above is tinted and the closing CtaBand below is deep
 * navy, and matching either one merged the two sections into a single
 * slab with no seam between them. Navy now belongs to the CTA alone,
 * which lets it read as the page's closing note. The quote cards take
 * the tint instead, so they still lift off the section behind them.
 */
export function Testimonial() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <h2 className="text-center text-sm font-semibold tracking-wide text-primary-text uppercase">
            In our clients&rsquo; words
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-secondary p-7 transition-colors duration-300 hover:border-primary/30 sm:p-8">
                <Quote
                  aria-hidden
                  className="size-7 shrink-0 fill-brand-teal text-brand-teal"
                />

                {/* The quote carries the section; sized just under a
                    section heading so it stays the thing being read. */}
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed font-medium text-pretty sm:text-xl sm:leading-relaxed">
                  {item.quote}
                </blockquote>

                {/* A short rule separates the claim from who makes it. */}
                <span aria-hidden className="mt-7 h-px w-12 bg-brand-teal/60" />

                <figcaption className="mt-5">
                  <p className="font-semibold text-primary-text">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">
                    {item.title} &middot; {item.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
