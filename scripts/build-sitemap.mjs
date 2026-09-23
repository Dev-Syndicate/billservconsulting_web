import { writeFileSync } from "node:fs";

/*
 * Writes public/pages-sitemap.xml.
 *
 * Wix reserves /sitemap.xml and /robots.txt: it serves its own file at
 * both paths regardless of what is uploaded, the same way it does
 * /favicon.ico. And because the pages here are uploaded static files
 * rather than pages built in the Wix editor, Wix's own SEO tools report
 * "No pages have been added to your site" and will never generate a
 * sitemap for them. So neither our file nor theirs can appear at
 * /sitemap.xml, which is why Search Console reported 0 discovered pages.
 *
 * A non-reserved filename sidesteps the collision. Submit
 * https://www.billservconsulting.com/pages-sitemap.xml in Search Console
 * directly — Google accepts any filename, the path is only a convention.
 *
 * Kept as a build script writing into public/ rather than as
 * src/app/sitemap.ts, because that file convention can only ever emit
 * /sitemap.xml.
 */

const ORIGIN = "https://www.billservconsulting.com";

/*
 * No trailing slashes, matching `trailingSlash: false` in next.config.ts.
 * If that setting changes these must change with it, or the sitemap will
 * advertise URLs the host redirects away from.
 */
const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/why-outsource", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  ({ path, priority, changefreq }) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n")}
</urlset>
`;

writeFileSync("public/pages-sitemap.xml", xml);
console.log(`public/pages-sitemap.xml — ${ROUTES.length} URLs, lastmod ${lastmod}`);
