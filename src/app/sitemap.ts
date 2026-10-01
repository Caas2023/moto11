import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  ["/", "daily", 1],
  ["/servicos", "weekly", 0.9],
  ["/areas-atendidas", "weekly", 0.9],
  ["/sao-paulo", "weekly", 0.8],
  ["/precos", "weekly", 0.9],
  ["/quanto-custa-motoboy-guarulhos", "weekly", 0.8],
  ["/motoboy-24-horas", "monthly", 0.7],
  ["/orcamento", "weekly", 0.9],
  ["/contato", "monthly", 0.8],
  ["/faq", "monthly", 0.7],
  ["/politica-privacidade", "yearly", 0.2],
  ["/termos-uso", "yearly", 0.2],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
