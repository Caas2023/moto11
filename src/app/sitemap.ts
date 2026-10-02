import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Apenas páginas indexáveis: bairros têm noindex e serviços individuais redirecionam.
const routes = [
  ["/", "daily", 1],
  ["/servicos", "weekly", 0.9],
  ["/areas-atendidas", "weekly", 0.9],
  ["/sao-paulo", "weekly", 0.8],
  ["/precos", "weekly", 0.9],
  ["/contato", "monthly", 0.8],
  ["/faq", "monthly", 0.7],
  ["/sobre-nos", "monthly", 0.5],
  ["/mapa-do-site", "monthly", 0.5],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Sem data editorial confiável, não publicar a data do build como última alteração.
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
