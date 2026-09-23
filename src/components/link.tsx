import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * `next/link` with the static export's `.html` extension applied.
 *
 * Wix does not serve directory indexes: on both the drag-and-drop upload
 * and a CLI release, `/about/index.html` returns 200 while `/about/`
 * returns 404. The export therefore uses `trailingSlash: false`, which
 * emits `about.html` at the top level — a real file Wix will serve.
 *
 * But Next still writes `href="/about"`, which is not a file and 404s.
 * Rewriting every href in source would spread host-specific detail
 * through the whole codebase, so it happens here instead: routes keep
 * their clean form everywhere, and the extension is added only when
 * building for export.
 *
 * Dev and a Node host are unaffected — `NEXT_OUTPUT` is unset there, so
 * hrefs pass through untouched and Next's own routing handles them.
 */
const IS_EXPORT = process.env.NEXT_PUBLIC_IS_EXPORT === "1";

/** "/about" -> "/about.html". Leaves "/", anchors and external URLs alone. */
export function withExtension(href: string) {
  if (!IS_EXPORT) return href;
  if (href === "/") return href;
  // Anything that is not a plain internal path: mailto:, tel:, https:,
  // "#anchor", or a path that already carries an extension or a query.
  if (!href.startsWith("/")) return href;
  if (/[.?#]/.test(href)) return href;
  return `${href.replace(/\/$/, "")}.html`;
}

/**
 * The same rewrite for a canonical URL. A canonical has to name the URL
 * the host actually serves, so in the export it carries the extension
 * too — pointing at /about when only /about.html resolves would tell
 * search engines to index a 404.
 */
export const canonicalPath = withExtension;

export function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      href={typeof href === "string" ? withExtension(href) : href}
      {...props}
    />
  );
}
