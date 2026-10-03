export interface SpNeighborhood {
  slug: string;
  nome: string;
}

export const neighborhoodsSp: SpNeighborhood[] = [
  { slug: "se", nome: "Sé" },
  { slug: "bras", nome: "Brás" },
  { slug: "mooca", nome: "Mooca" },
  { slug: "tatuape", nome: "Tatuapé" },
  { slug: "penha", nome: "Penha" },
  { slug: "itaquera", nome: "Itaquera" },
  { slug: "sao-miguel-paulista", nome: "São Miguel Paulista" },
  { slug: "vila-prudente", nome: "Vila Prudente" },
  { slug: "ipiranga", nome: "Ipiranga" },
  { slug: "sacoma", nome: "Sacomã" },
  { slug: "moema", nome: "Moema" },
  { slug: "vila-mariana", nome: "Vila Mariana" },
  { slug: "pinheiros", nome: "Pinheiros" },
  { slug: "lapa", nome: "Lapa" },
  { slug: "perdizes", nome: "Perdizes" },
  { slug: "santana", nome: "Santana" },
  { slug: "tucuruvi", nome: "Tucuruvi" },
  { slug: "vila-maria", nome: "Vila Maria" },
  { slug: "jacana", nome: "Jaçanã" },
  { slug: "freguesia-do-o", nome: "Freguesia do Ó" },
  { slug: "pirituba", nome: "Pirituba" },
  { slug: "butanta", nome: "Butantã" },
  { slug: "morumbi", nome: "Morumbi" },
  { slug: "campo-belo", nome: "Campo Belo" },
  { slug: "santo-amaro", nome: "Santo Amaro" },
  { slug: "campo-limpo", nome: "Campo Limpo" },
  { slug: "itaim-bibi", nome: "Itaim Bibi" },
  { slug: "jardins", nome: "Jardins" },
  { slug: "bela-vista", nome: "Bela Vista" },
  { slug: "republica", nome: "República" },
  { slug: "santa-cecilia", nome: "Santa Cecília" },
  { slug: "cambuci", nome: "Cambuci" },
  { slug: "vila-leopoldina", nome: "Vila Leopoldina" },
  { slug: "barra-funda", nome: "Barra Funda" },
  { slug: "aricanduva", nome: "Aricanduva" },
  { slug: "sao-caetano", nome: "São Caetano do Sul" },
  { slug: "santo-andre", nome: "Santo André" },
  { slug: "sao-bernardo", nome: "São Bernardo do Campo" },
  { slug: "osasco", nome: "Osasco" },
  { slug: "barueri", nome: "Barueri" },
];

export function getSpNeighborhood(slug: string): SpNeighborhood | undefined {
  return neighborhoodsSp.find((area) => area.slug === slug);
}
