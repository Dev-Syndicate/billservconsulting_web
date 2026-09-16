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

## Deploying

Two build modes:

```bash
pnpm build          # Vercel / Netlify / any Node host
pnpm build:static   # emits out/ for upload-only hosts
```

`build:static` sets `NEXT_OUTPUT=export`, producing a plain HTML/CSS/JS
tree in `out/` (~2.4 MB, 69 files, largest 224 KB). That suits hosts that
take an upload rather than running Node — Wix Headless drag-and-drop, for
example, which caps at 20 MB total and 3 MB per file.

Everything here is statically prerendered either way, so no server
functionality is lost in the export. `trailingSlash` is on in that mode so
subpages resolve as directories on plain static hosts.

If the domain stays with Wix, it can point at an external host via DNS
records (Wix does not allow changing nameservers, so use pointing).

## Routes

| Route            | Contents                                              |
| ---------------- | ----------------------------------------------------- |
| `/`              | Landing page: hero, then a teaser per section          |
| `/services`      | Ten services, seven specialties                        |
| `/why-outsource` | The four reasons to outsource                          |
| `/about`         | About, mission/vision/values, leadership, clientele, compliance & capability |
| `/contact`       | Contact details, enquiry form, FAQ                     |
| `/terms`         | Terms and Conditions                                   |
| `/privacy`       | Privacy Policy                                         |

The homepage teasers show a subset (six of ten services) and link
through, so full content lives in exactly one place and there is no
duplicate-content penalty.

## Editing content

Most copy lives in data files rather than in markup:

- **`src/lib/site.ts`** — company details, navigation, services,
  specialties, reasons to outsource, mission/vision/values, leadership,
  clients, compliance and capability lists.
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

The design is deliberately **flat** — no gradients. `globals.css` contains
none at all. The only `linear-gradient` anywhere in `src/` is the hero's
`maskImage`, which fades the photograph's left edge to transparent; it
paints no colour.

Teal consistently signals a confirmed or positive state: checkmarks,
approved rows, and the clean-claim meter.

## Images

All images in `public/` are hand-optimised AVIF, committed at the size
they are served. `next.config.ts` sets `images.unoptimized`, so they are
served straight from `public/` rather than through `/_next/image`.

That is deliberate: the sources are already small, and routing them
through the optimiser returned **89 KB against a 54 KB source** at the
hero’s rendered size, while consuming Vercel Image Optimization quota
(metered on the Hobby tier).

If you add an image that is *not* pre-optimised — a large JPEG or PNG
from the client, say — either convert it the same way:

```bash
npx sharp-cli -i source.png -o public/name.avif -f avif --quality 62 resize 1536
```

…or remove the `unoptimized` flag and let Next handle it.

### Client logos

`public/client-*.avif` are the practice logos shown in the Clientele
section on `/about`, supplied by the clients themselves. They are
registered in `clients` in `src/lib/site.ts` along with their intrinsic
`width`/`height`, which Next needs to reserve space and avoid layout
shift — the artwork is not a uniform aspect ratio.

They render as a plain logo row with no captions — the logos carry their
own names, and the practice name always reaches screen readers through
the image `alt`. The same row appears on the homepage via
`sections/client-logos.tsx`.

**Replacing a logo:** files under `public/` are served at a stable URL, so
overwriting one in place leaves browsers and CDNs holding the old copy.
Ship the replacement under a new filename instead — that is what the
`-v2` suffixes are for.

## Notes

- **The contact form has no backend.** It builds a `mailto:` link and
  hands off to the visitor's email client. Wiring it to a real endpoint
  (a form service or a route handler) is outstanding.
- **The legal pages need a lawyer's review.** The Governing law clause
  currently says "the laws applicable at our principal place of business"
  rather than naming a jurisdiction — BillServ operates from India while
  serving US providers, so this needs a decision.
- **Do not publish certification names or named integrations** without
  written confirmation from BillServ. The information pack states that
  specific certification names, issuing organizations, and certificate
  details, and named EHR/EMR, practice-management, and clearinghouse
  integrations, are to go live only once confirmed internally. The
  Compliance and Technology copy on `/about` describes practices and
  workflows for that reason.
- **Do not state that BillServ is available 24/7** — the pack forbids it.
  Business hours are Monday–Friday, 8:00 AM–5:00 PM Pacific Time, held in
  `site.availability`. PT is used rather than a fixed offset because
  California observes both PST and PDT.
- `src/components/hero-illustration.tsx` and
  `src/components/ui/navigation-menu.tsx` are currently unused.
- **The hero photograph is AI-generated** (`public/hero-billing-v2.avif`).
  It shows a stock-style clinician, not BillServ staff or a real client
  setting. Swap it for a genuine photograph if one becomes available.

`CONTENT.md` records the copy extracted from the original Wix site,
including which parts are verbatim client wording.
