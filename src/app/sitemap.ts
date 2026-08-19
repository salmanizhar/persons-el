import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { services, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tjanster",
    "/om-oss",
    "/sociala-medier",
    "/kontakt",
    "/integritetspolicy",
  ];
  const serviceRoutes = services.map((s) => `/tjanster/${s.slug}`);
  const seoRoutes = seoLandingPages
    .filter((page) => page.slug !== "helsingborg")
    .map((page) => `/elektriker/${page.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...seoRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/elektriker")
          ? 0.9
          : path.startsWith("/tjanster")
            ? 0.8
            : 0.6,
  }));
}
