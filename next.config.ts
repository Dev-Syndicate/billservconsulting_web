import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Set NEXT_OUTPUT=export to emit a plain static site into out/ — needed
   * for hosts that take an upload rather than running Node, such as Wix
   * Headless drag-and-drop (static files only, 20MB total / 3MB per file;
   * this build is ~2.4MB). Left unset for Vercel, which serves the app
   * build directly.
   */
  /*
   * trailingSlash OFF: the export emits about.html rather than
   * about/index.html.
   *
   * Wix does not serve directory indexes. Tested on both the
   * drag-and-drop upload and a CLI release: /about/index.html returns
   * 200 while /about/ returns 404, so the folder shape leaves every page
   * reachable only at its full filename. The flat shape at least puts a
   * real file at /about.html, which Wix does serve.
   *
   * Links are rewritten to match in src/lib/site.ts. Re-test every route
   * on the deployed URL after changing this, with a real browser: Wix's
   * edge serves 404 to plain curl even for pages that exist.
   */
  ...(process.env.NEXT_OUTPUT === "export"
    ? { output: "export" as const, trailingSlash: false }
    : {}),
  /*
   * Exposed to the browser so components can tell they are running in the
   * static export. process.env.NEXT_OUTPUT is a server-side build var and
   * is NOT inlined into client bundles; without this, the check in
   * components/link.tsx would silently read undefined there and every
   * link would lose its .html extension.
   */
  env: {
    NEXT_PUBLIC_IS_EXPORT: process.env.NEXT_OUTPUT === "export" ? "1" : "",
  },
  images: {
    /*
     * Every image in this project is a hand-optimised AVIF committed to
     * public/, so routing them through Next's optimiser costs Vercel
     * Image Optimization quota without shrinking anything — at the size
     * the hero actually renders it returned 89 KB against a 54 KB source.
     *
     * Serving them as-is keeps the bytes lower and keeps the site inside
     * the Hobby tier's free allowance. If a future image is added that is
     * NOT pre-optimised (a large JPEG/PNG from a client, say), either
     * convert it the same way or drop this flag and let the optimiser
     * handle it.
     */
    unoptimized: true,
  },
};

export default nextConfig;
