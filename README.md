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
| `/services`      | Medical (10) and dental (12) services, systems, seven specialties |
| `/why-outsource` | The four reasons to outsource                          |
| `/about`         | About, mission/vision/values, leadership, clientele, compliance & capability |
| `/contact`       | Contact details, enquiry form, FAQ                     |
| `/terms`         | Terms and Conditions                                   |
| `/privacy`       | Privacy Policy                                         |

The homepage teasers show a subset (six of the ten medical services) and link
through, so full content lives in exactly one place and there is no
duplicate-content penalty.

## Editing content

Most copy lives in data files rather than in markup:

- **`src/lib/site.ts`** — company details, navigation, services,
  specialties, reasons to outsource, mission/vision/values, leadership,
  clients, compliance and capability lists.
  Changing `nav` here updates the header, mobile menu, and footer.
  Services are split by line of business: `medicalServices` (10, each
  with `detail` and `benefits`) and `dentalServices` (12, one-line
  descriptions only), paired in `serviceCategories`. `services` remains
  as an alias for the medical list, which is what the homepage teaser
  and the medical detail rows mean. Homepage counts derive from both
  arrays rather than being hardcoded — a literal `10` went stale the
  moment dental was added.
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
none at all. The only `linear-gradient` values anywhere in `src/` are the
`maskImage` on the homepage hero and the `/contact` page header, which
fade each photograph's left edge to transparent; they paint no colour.

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

They render as a plain logo row. Most of the artwork spells the practice
name already; those are flagged `nameInLogo: true` and get no caption,
because printing the name twice reads as a mistake. Artwork with no
wordmark is captioned beneath — name only on the homepage strip, name and
location in the Clientele block on `/about`. The practice name reaches
screen readers through the image `alt` either way. The same row appears on
the homepage via `sections/client-logos.tsx`.

**Replacing a logo:** files under `public/` are served at a stable URL, so
overwriting one in place leaves browsers and CDNs holding the old copy.
Ship the replacement under a new filename instead — that is what the
`-v2` suffixes are for.

## Notes

- **The contact form posts to Web3Forms**, which forwards submissions to
  `site.email`. The site is a static export, so it has no server of its
  own to send from; a relay is the only way an enquiry reaches us without
  the visitor having a mail client configured.

  Set `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`). **Leave it unset
  and the form silently falls back to `mailto:`** — the old behaviour —
  so the build never breaks, but enquiries are then only as reliable as
  the visitor's mail client. Check the key is present in whatever builds
  the deployed bundle.

  The key is public by design and is safe in the client bundle: it only
  permits sending mail to the address it is registered to. Never put an
  SMTP password or a Wix admin API key in a `NEXT_PUBLIC_` variable.

  Web3Forms is named as a processor in the Privacy Policy. If it is
  swapped or dropped, update "Information collection and use", "Service
  providers", and "Security" in `src/lib/legal.ts` — the header comment
  in that file carries the mapping.
- **The legal pages still need a lawyer's review**, though the factual
  inaccuracies have been fixed. The documents no longer claim cookies,
  first-party server logs, or form submissions the Site does not make;
  they name the operating entity (`site.legalEntity`) rather than the
  trading name; and Terms now carries the indemnity clause that its
  Termination section had always promised would survive.
- **Governing law names India, with exclusive jurisdiction in Chennai**,
  scoped to use of the Site only and expressly subordinate to any
  services agreement. That reflects where the entity operates, but a US
  client may want a US forum for the services themselves — which is a
  matter for the services agreement, not this Site. Confirm with counsel.
- **The legal text asserts two things that code must keep true:** that
  the Site sets no cookies, and that fonts are self-hosted. Both were
  verified against the production build (no `document.cookie` or
  `localStorage` in any bundle; no `fonts.googleapis`/`gstatic` request,
  with 11 `.woff2` files emitted locally by `next/font`). Adding
  analytics or a remote font would make the published policy false.
- **Do not publish certification names** without written confirmation
  from BillServ. The information pack states that specific certification
  names, issuing organizations, and certificate details go live only once
  confirmed internally. The Compliance copy on `/about` describes
  practices rather than naming certifications for that reason.
- **Named systems and clearinghouses were confirmed by the client on
  2026-09-18** and live in `systems` in `site.ts` (HealthNautica
  WebPractice, eClinicalWorks, Kareo, MEDITECH, AdvancedMD; Availity,
  TriZetto, Office Ally). This lifted the pack's earlier hold on naming
  them. Two things to preserve when editing: the copy says the team is
  **experienced in** these systems, never that BillServ "integrates
  with" or "partners with" them — BillServ staff work inside whatever
  the client already runs, so an integration claim would describe a
  technical connection that does not exist and that a prospect could
  test. Vendor partner programmes also carry their own branding rules.
  Do not add a name without the client confirming it.
- **Do not state that BillServ is available 24/7** — the pack forbids it.
  Business hours are Monday–Friday, 8:00 AM–5:00 PM Pacific Time, held in
  `site.availability`. PT is used rather than a fixed offset because
  California observes both PST and PDT.
- `src/components/hero-illustration.tsx` and
  `src/components/ui/navigation-menu.tsx` are currently unused.
- **The photographs are AI-generated** (`public/hero-billing-v2.avif` and
  `public/contact-support.avif`). They show stock-style people, not
  BillServ staff or a real client setting. Swap them for genuine
  photographs if any become available.

`CONTENT.md` records the copy extracted from the original Wix site,
including which parts are verbatim client wording.
