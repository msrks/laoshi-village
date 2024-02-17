import { type MetadataRoute } from "next";
import { allPages, allEvents } from "contentlayer/generated";
import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagesRoutes = allPages.map((page) => ({
    url: absoluteUrl(`${page.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const postsRoutes = allEvents.map((event) => ({
    url: absoluteUrl(`${event.slug}`),
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/events", "/about"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...pagesRoutes, ...postsRoutes];
}
