/**
 * NAP central — Moto11 – Empresa de Motoboy (SAB, Guarulhos/SP).
 * Fonte única de verdade para Nome, Telefone e Área atendida.
 * Header/Footer e demais componentes DEVEM importar daqui (não hardcodar).
 */

export const BUSINESS = {
  name: "Moto11 – Empresa de Motoboy",
  legalDescription:
    "Empresa de motoboy e entregas expressas em Guarulhos/SP e região metropolitana.",
  phoneDisplay: "(11) 95724-8425",
  phoneHref: "tel:+5511957248425",
  phoneE164: "+55 11 95724-8425",
  whatsapp: "https://wa.me/5511957248425",
  priceRange: "$$",
  // Guarulhos centro (aprox.) — 5 casas decimais
  geo: {
    latitude: -23.4546,
    longitude: -46.5333,
  },
  addressLocality: "Guarulhos",
  addressRegion: "SP",
  addressCountry: "BR",
  // SAB: sem endereço público completo — atendimento em domicílio/coleta.
  hoursDisplay: "Seg–Sex 08:00–18:00",
  openingHours: "Mo-Fr 08:00-18:00" as const,
  sameAs: [
    "https://www.instagram.com/moto11guarulhos",
    "https://www.facebook.com/moto11guarulhos",
  ],
  // Canônico alinhado a SITE_URL em src/lib/seo.ts (usado por sitemap/robots).
  url: "https://www.moto11guarulhos.com.br",
} as const;

export type AreaServedCity = {
  city: string;
  region: string;
  country: string;
};

/** Guarulhos (sede) + 15 cidades da RMS/SP. GBP: listar cidades, nunca o estado inteiro. */
export const AREA_SERVED: AreaServedCity[] = [
  { city: "Guarulhos", region: "SP", country: "BR" },
  { city: "São Paulo", region: "SP", country: "BR" },
  { city: "Arujá", region: "SP", country: "BR" },
  { city: "Santa Isabel", region: "SP", country: "BR" },
  { city: "Itaquaquecetuba", region: "SP", country: "BR" },
  { city: "Poá", region: "SP", country: "BR" },
  { city: "Ferraz de Vasconcelos", region: "SP", country: "BR" },
  { city: "Suzano", region: "SP", country: "BR" },
  { city: "Mogi das Cruzes", region: "SP", country: "BR" },
  { city: "Osasco", region: "SP", country: "BR" },
  { city: "Barueri", region: "SP", country: "BR" },
  { city: "Santo André", region: "SP", country: "BR" },
  { city: "São Bernardo do Campo", region: "SP", country: "BR" },
  { city: "São Caetano do Sul", region: "SP", country: "BR" },
  { city: "Mauá", region: "SP", country: "BR" },
  { city: "Diadema", region: "SP", country: "BR" },
];

export const AREA_SERVED_NAMES = AREA_SERVED.map((a) => a.city);
