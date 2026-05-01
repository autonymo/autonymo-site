import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://artifexone.com"
).replace(/\/$/, "");

const routes = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/book-a-call", priority: 0.8 },
  { path: "/custom-solutions", priority: 0.8 },
  { path: "/real-estate-os", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ),
          "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
        },
      },
    })),
  );
}
