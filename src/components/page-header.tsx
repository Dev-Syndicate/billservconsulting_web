import { Reveal } from "@/components/reveal";

/**
 * Banner at the top of an inner page: eyebrow, title, and lead paragraph.
 * Gives every route the same entry rhythm, so a visitor landing on any of
 * them gets the same orientation the homepage teaser gave them.
 *
 * `aside` fills the right-hand half on large screens. Without it the
 * heading spans a comfortable measure and the rest stays empty, which is
 * fine for short pages but leaves a hole on wide ones.
 *
 * `bleed` switches the aside to the homepage hero's treatment: the aside
 * is anchored to the section's right edge and runs to the top, bottom,
 * and side with its left edge masked into the background, rather than
 * sitting as a framed card inside the content column. Use it when the
 * aside is a photograph; a card or a list should stay in the grid.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  aside,
  bleed = false,
  asideStacked,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  aside?: React.ReactNode;
  bleed?: boolean;
  /**
   * Bleed mode only. The full-bleed layer needs an absolutely positioned
   * fill image, which cannot also serve as the in-flow copy shown below
   * lg — that one needs intrinsic dimensions to reserve its space. Pass
   * the in-flow version here.
   */
  asideStacked?: React.ReactNode;
}) {
  if (aside && bleed) {
    return (
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        {/*
         * Full-bleed layer, from lg up. The mask fades the left edge into
         * the background so the photo does not end on a hard vertical
         * line behind the copy. Matches the homepage hero.
         */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
          }}
        >
          {aside}
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:min-h-96 lg:px-8">
          <Reveal className="lg:max-w-[46%]">
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty sm:text-xl">
              {lead}
            </p>
          </Reveal>

          {/* Below lg the layer above is hidden and the aside stacks in
              flow beneath the copy, so it is still seen on phones. */}
          <div className="mt-10 lg:hidden">{asideStacked ?? aside}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div
          className={
            aside
              ? "grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16"
              : undefined
          }
        >
          <Reveal className={aside ? undefined : "max-w-3xl"}>
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty sm:text-xl">
              {lead}
            </p>
          </Reveal>

          {aside ? (
            <Reveal from="right" delay={120}>
              {aside}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
