import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { neighborhoodGuSlugs } from "@/data/neighborhoods-gu";
import { neighborhoodsSp } from "@/data/neighborhoods-sp";
import { SERVICES } from "@/data/services";

const staticRoutes = [
  ["/", "daily", 1.0],
  ["/servicos", "weekly", 0.9],
  ["/areas-atendidas", "weekly", 0.9],
  ["/sao-paulo", "weekly", 0.8],
  ["/precos", "weekly", 0.9],
  ["/contato", "monthly", 0.8],
  ["/faq", "monthly", 0.7],
  ["/sobre-nos", "monthly", 0.6],
  ["/mapa-do-site", "monthly", 0.5],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = staticRoutes.map(
    ([path, changeFrequency, priority]) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    }),
  );

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/servicos/${service.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const guarulhosAreas: MetadataRoute.Sitemap = neighborhoodGuSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/areas/${slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const spRoutes: MetadataRoute.Sitemap = neighborhoodsSp.map((area) => ({
    url: `${SITE_URL}/sao-paulo/${area.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...guarulhosAreas, ...spRoutes];
}
