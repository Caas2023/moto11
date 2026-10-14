import type { Metadata } from "next";

export const SITE_URL = "https://www.moto11guarulhos.com.br";
export const SITE_NAME = "Moto11";
export const SITE_TAGLINE =
  "Empresa de motoboy em Guarulhos — entregas rápidas e coletas agendadas";
export const DEFAULT_DESCRIPTION =
  "Moto11 — empresa de motoboy em Guarulhos/SP. Entregas expressas, coletas agendadas, serviços para empresas e e-commerces. Solicite orçamento pelo WhatsApp.";
export const DEFAULT_KEYWORDS = [
  "motoboy guarulhos",
  "empresa de motoboy",
  "entrega expressa guarulhos",
  "coleta agendada",
  "motoboy para empresas",
  "moto11 guarulhos",
];
export const PHONE_DISPLAY = "(11) 95724-8425";
export const PHONE_WA = "5511957248425";
export const PHONE_TEL_LINK = "+5511957248425";

/** Monta URL canônica absoluta a partir de um path. */
export function canonical(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
}

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

/** Helper padrão para generateMetadata das páginas. */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = canonical(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

type ServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};

/** JSON-LD do tipo Service para páginas de serviço. */
export function jsonLdService({
  name,
  description,
  path,
  serviceType = "Serviço de motoboy",
}: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: canonical(path),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#empresa`,
      name: "Moto11 – Empresa de Motoboy",
      url: SITE_URL,
      telephone: PHONE_TEL_LINK,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guarulhos",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Guarulhos",
    },
  };
}

export type FaqItem = {
  pergunta: string;
  resposta: string;
};

/** JSON-LD FAQPage para acordeões de perguntas frequentes. */
export function jsonLdFAQ(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };
}

/** JSON-LD Organization/LocalBusiness da Moto11. */
export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#empresa`,
    name: "Moto11 – Empresa de Motoboy",
    url: SITE_URL,
    telephone: PHONE_TEL_LINK,
    description: DEFAULT_DESCRIPTION,
    makesOffer: [
      "Documentos",
      "Pequenos volumes",
      "Coleta agendada",
      "Apoio para empresas",
      "Comércio e e-commerce",
      "Locais com acesso especial",
    ].map((name) => ({
      "@type": "Offer",
      url: canonical("/servicos"),
      itemOffered: {
        "@type": "Service",
        name,
        url: canonical("/servicos"),
        provider: { "@id": `${SITE_URL}/#empresa` },
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guarulhos",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };
}

/** JSON-LD WebSite com SearchAction. */
export function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#empresa`,
    },
  };
}
