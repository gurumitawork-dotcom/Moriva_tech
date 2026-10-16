import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/services/",
    "/portfolio/",
    "/process/",
    "/faq/",
    "/contact/",
  ];
  const servicePaths = services.map((service) => `/services/${service.slug}/`);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
