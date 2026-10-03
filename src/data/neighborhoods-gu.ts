export interface Neighborhood {
  slug: string;
  nome: string;
}

export const neighborhoodsGu: Neighborhood[] = [
  { slug: "cumbica", nome: "Cumbica" },
  { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
  { slug: "bonsucesso", nome: "Bonsucesso" },
  { slug: "vila-galvao", nome: "Vila Galvão" },
  { slug: "picanco", nome: "Picanço" },
  { slug: "gopouva", nome: "Gopoúva" },
  { slug: "taboao", nome: "Taboão" },
  { slug: "via-dutra", nome: "Via Dutra (eixo Guarulhos)" },
  { slug: "vila-endres", nome: "Vila Endres" },
  { slug: "macedo", nome: "Macedo" },
  { slug: "parque-novo-mundo", nome: "Parque Novo Mundo" },
  { slug: "bosque-maia", nome: "Bosque Maia" },
  { slug: "morros", nome: "Morros" },
  { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
  { slug: "jardim-nova-cumbica", nome: "Jardim Nova Cumbica" },
  { slug: "itapetinga", nome: "Itapetinga" },
  { slug: "vila-augusta", nome: "Vila Augusta" },
  { slug: "jardim-vila-galvao", nome: "Jardim Vila Galvão" },
  { slug: "cidade-soberana", nome: "Cidade Soberana" },
  { slug: "jardim-adriana", nome: "Jardim Adriana" },
  { slug: "presidente-dutra", nome: "Jardim Presidente Dutra" },
  { slug: "cabucu", nome: "Cabuçu" },
  { slug: "recreio-sao-jorge", nome: "Recreio São Jorge" },
  { slug: "jardim-cumbica", nome: "Jardim Cumbica" },
  { slug: "vila-fatima", nome: "Vila Fátima" },
  { slug: "jardim-santa-mena", nome: "Jardim Santa Mena" },
  { slug: "vila-barros", nome: "Vila Barros" },
  { slug: "jardim-tranquilidade", nome: "Jardim Tranquilidade" },
  { slug: "vila-rio", nome: "Vila Rio" },
  { slug: "jd-paulista-guarulhos", nome: "Jardim Paulista (Guarulhos)" },
  { slug: "santa-clara", nome: "Santa Clara" },
  { slug: "sadokin", nome: "Sadokim" },
  { slug: "bananal", nome: "Bananal" },
  { slug: "itaquaquecetuba-divisa", nome: "Divisa com Itaquaquecetuba" },
  { slug: "guarulhos-sul", nome: "Guarulhos Sul (Pimentas)" },
  { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
  { slug: "vila-progresso", nome: "Vila Progresso" },
  { slug: "jardim-flor-da-montanha", nome: "Jardim Flor da Montanha" },
  { slug: "ponta-grande", nome: "Ponta Grande" },
  { slug: "vila-camisaria", nome: "Vila Camisaria" },
];

export const neighborhoodGuSlugs = neighborhoodsGu.map((area) => area.slug);

export function getNeighborhoodGu(slug: string): Neighborhood | undefined {
  return neighborhoodsGu.find((area) => area.slug === slug);
}
