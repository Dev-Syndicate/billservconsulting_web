import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

/**
 * Closing call to action for inner pages. Every route ends here rather
 * than dead-ending, so a visitor always has a next step without needing
 * to go back to the nav.
 */
export function CtaBand({
  heading = "Ready to get your claims paid faster?",
  body = "Tell us about your practice and we will get back to you.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            {/* The company's own promise line, from the information pack. */}
            <p className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
              {site.promise}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-white/80 text-pretty sm:text-lg">{body}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button
              asChild
              size="lg"
              className="group h-13 rounded-xl bg-white px-7 text-base font-semibold text-brand-deep hover:bg-white/90"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-xl border-white/30 bg-transparent px-7 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
