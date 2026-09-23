import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * Required by `output: export`: without it the route is treated as
 * dynamic and the build fails rather than emitting a file.
 */
export const dynamic = "force-static";

/**
 * robots.txt.
 *
 * Everything is public, so this allows all crawlers, and it declares the
 * sitemap so a crawler can find it without Search Console.
 *
 * Note this file does NOT win on Wix: like /sitemap.xml and
 * /favicon.ico, /robots.txt is a reserved path there and Wix serves its
 * own auto-generated version instead. It is kept for any other host, and
 * because it costs nothing. On Wix the sitemap has to be submitted to
 * Search Console by hand — see scripts/build-sitemap.mjs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/pages-sitemap.xml`,
  };
}
