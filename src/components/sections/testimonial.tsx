import { Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { testimonial } from "@/lib/site";

export function Testimonial() {
  return (
    <section className="border-b border-border bg-[linear-gradient(135deg,var(--brand-deep)_0%,oklch(0.34_0.09_247)_100%)] text-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal as="figure" className="text-center">
          <Quote aria-hidden className="mx-auto size-8 opacity-70" />
          <blockquote className="mt-6 text-xl leading-relaxed font-medium text-balance sm:text-2xl">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8">
            <p className="font-semibold">{testimonial.author}</p>
            <p className="mt-1 text-sm text-white/85">{testimonial.title}</p>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
