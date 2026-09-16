# BillServ Consulting

Marketing site for BillServ Consulting — outsourced medical billing and
revenue cycle management for US healthcare providers, operating from
Chennai, India.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and
shadcn/ui components. Every route is statically prerendered.

## Getting started

This project uses **pnpm** (see `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Other scripts:

```bash
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint         # eslint
npx tsc --noEmit  # type check
```

## Routes

| Route            | Contents                                              |
| ---------------- | ----------------------------------------------------- |
| `/`              | Landing page: hero, then a teaser per section          |
| `/services`      | Ten services, the claim lifecycle, seven specialties    |
| `/why-outsource` | The four reasons to outsource, plus the testimonial    |
| `/about`         | About, leadership, clientele                           |
| `/contact`       | Contact details, enquiry form, FAQ                     |
| `/terms`         | Terms and Conditions                                   |
| `/privacy`       | Privacy Policy                                         |

The homepage teasers show a subset (six of ten services, specialty names
only) and link through, so full content lives in exactly one place and
there is no duplicate-content penalty.

## Editing content

Most copy lives in data files rather than in markup:

- **`src/lib/site.ts`** — company details, navigation, services,
  specialties, reasons to outsource, leadership, clients, testimonial.
  Changing `nav` here updates the header, mobile menu, and footer.
- **`src/lib/legal.ts`** — the Terms and Privacy documents, as structured
  sections. Both pull company name, email, phone, and address from
  `site.ts` so contact details cannot drift.

Section components in `src/components/sections/` render that data. Most
accept a `headless` prop: when true they omit their own heading, because
the route's `PageHeader` already supplies the `h1` and lead.

## Design system

The brand palette is defined as CSS custom properties in
`src/app/globals.css`:

| Token                       | Colour              | Use                          |
| --------------------------- | ------------------- | ---------------------------- |
| `--foreground`/`--brand-deep`| Deep Navy `#0B1F3A` | Headings, body text          |
| `--primary`                 | Professional Blue `#3FA9E5` | Fills, icons, large text |
| `--brand-teal`              | Soft Cyan `#35C2C0` | Accents, confirmation states |
| `--secondary`               | Ice Blue `#F4FAFD`  | Section backgrounds          |

**Contrast caveat.** Professional Blue and Teal are light (L .70/.74), so
white text on them reaches only 2.6:1 and 2.2:1 — under the 4.5:1 WCAG AA
floor. They are used for fills, icons, and large display type. For small
text on white, use the darkened same-hue variants instead:

- `--primary-text` (4.9:1) — links, labels, eyebrows
- `--brand-teal-text` (4.6:1), `--brand-teal-deep` (6.5:1)
- `--brand-cta` / `--brand-cta-hover` — solid button fill carrying white
  text at 5.0:1

The design is deliberately **flat** — no gradients. The one
`linear-gradient` left in `globals.css` is `animate-flow`, a repeating
dash pattern for the lifecycle connector, not decorative colour.

Teal consistently signals a confirmed or positive state: the Paid step,
checkmarks, approved rows, and the clean-claim meter.

## Notes

- **The contact form has no backend.** It builds a `mailto:` link and
  hands off to the visitor's email client. Wiring it to a real endpoint
  (a form service or a route handler) is outstanding.
- **Dashboard figures are illustrative.** The numbers in the hero's
  claims panel (1,248 claims, 98% clean rate, +30% revenue) and the stats
  bar (500+ providers, 99% accuracy) came from the design reference, not
  from client data. They should be confirmed or softened before launch.
- **The legal pages need a lawyer's review.** The Governing law clause
  currently says "the laws applicable at our principal place of business"
  rather than naming a jurisdiction — BillServ operates from India while
  serving US providers, so this needs a decision.
- `src/components/hero-illustration.tsx` and
  `src/components/ui/navigation-menu.tsx` are currently unused.

`CONTENT.md` records the copy extracted from the original Wix site,
including which parts are verbatim client wording.
