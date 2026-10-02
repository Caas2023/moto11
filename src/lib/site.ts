import {
  SITE_URL,
  SITE_NAME,
  PHONE_DISPLAY,
  PHONE_WA,
  PHONE_TEL_LINK,
} from "@/lib/seo";

/** Identidade NAP compartilhada — canônica em `@/lib/seo`. */
export const SITE = {
  name: SITE_NAME,
  tagline: "Motoboy em Guarulhos — Seg a Sex, 8h às 18h",
  phoneDisplay: PHONE_DISPLAY,
  phoneHref: `tel:${PHONE_TEL_LINK}`,
  whatsappDisplay: PHONE_DISPLAY,
  whatsappNumber: PHONE_WA,
  email: "contato@moto11guarulhos.com.br",
  address: {
    city: "Guarulhos",
    region: "SP",
    country: "BR",
  },
  hours: "Segunda a sexta, das 8h às 18h",
  baseUrl: SITE_URL,
} as const;

export function waLink(message: string, phone = SITE.whatsappNumber) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Olá! Quero calcular uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar) / Horário desejado: (informar).";

/**
 * JSON-LD LocalBusiness complementar para páginas transacionais.
 * Mantido mínimo de propósito: Organization global já vive no layout raiz.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.baseUrl}/#empresa`,
    name: `${SITE.name} – Motoboy em Guarulhos`,
    description:
      "Serviço de motoboy em Guarulhos (seg a sex, 8h às 18h): entregas, coletas programadas, serviços de cartório e entregas para empresas e e-commerce.",
    url: SITE.baseUrl,
    telephone: PHONE_TEL_LINK,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    openingHours: "Mo-Fr 08:00-18:00",
    areaServed: {
      "@type": "City",
      name: "Guarulhos",
    },
  };
}
