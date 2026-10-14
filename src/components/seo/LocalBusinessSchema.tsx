import Script from "next/script";
import { AREA_SERVED, BUSINESS } from "@/data/business";

// aggregateRating removido: sem dados reais do GBP — não inventar nota/contagem.
// Adicionar apenas com dados verificados do Google Business Profile.

/**
 * JSON-LD do negócio local (SAB — sem streetAddress público).
 * @type Profissional válido (ProfessionalService) + MotorCourier (termo do
 * projeto; manter Profissional primeiro p/ elegibilidade a rich results).
 */
export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "MotorCourier"],
    name: BUSINESS.name,
    description: BUSINESS.legalDescription,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneE164,
    priceRange: BUSINESS.priceRange,
    image: `${BUSINESS.url}/og-cover.jpg`,
    sameAs: [...BUSINESS.sameAs],
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: AREA_SERVED.map((a) => ({
      "@type": "City",
      name: a.city,
      containedInPlace: {
        "@type": "State",
        name: a.region,
        containedInPlace: { "@type": "Country", name: a.country },
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
