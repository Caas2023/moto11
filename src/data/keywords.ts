/**
 * MOTO11 Guarulhos — Mapa de Keywords & Anti-Canibalização
 *
 * Fonte: PLANEJAMENTO_MOTO11.md §4 (Top 20 + long-tail + BoFu)
 *        + 1-PRD_TECNICO.md (32 serviços / 12 áreas)
 *
 * IA de 300 páginas (resumo):
 *  1 home + 33 serviços (/servicos/*) + 28 áreas (/areas/*)
 *  + 15 cidades (/atendemos/*) + 60 combos (/servicos/[s]-em-[bairro])
 *  + 60 blog (/blog/*) + 20 guias (/guia/*) + 15 transacionais
 *  + institucionais (~68) ≈ 300 URLs
 *
 * REGRA ANTI-CANIBALIZAÇÃO: 1 keyword primária por URL.
 * `validateNoCannibalization()` falha o build se houver duplicata.
 */

export type SearchIntent =
  | "transactional" // quer contratar agora
  | "commercial" // compara / avalia antes de contratar
  | "informational" // quer aprender
  | "local"; // busca com bairro/cidade

export type Priority = "P0" | "P1" | "P2";
export type Cluster = "head" | "long-tail" | "bofu";

export interface Keyword {
  term: string;
  intent: SearchIntent;
  /** buscas/mês estimadas (SEMrush-like, fonte: planejamento §4) */
  volumeEstimado: number;
  /** 0–100 (0 = mais fácil). Mapeado de Alta/Media/Baixa/Muito Baixa */
  dificuldade: number;
  dificuldadeLabel: "Muito Baixa" | "Baixa" | "Média" | "Alta";
  cpcEstimado?: number;
  /** URL canônica primária — ÚNICA por keyword */
  paginaAlvo: string;
  prioridade: Priority;
  cluster: Cluster;
}

// ---------------------------------------------------------------- head (20)
export const headTerms: Keyword[] = [
  { term: "motoboy guarulhos", intent: "transactional", volumeEstimado: 1600, dificuldade: 75, dificuldadeLabel: "Alta", cpcEstimado: 25.5, paginaAlvo: "/", prioridade: "P0", cluster: "head" },
  { term: "entrega motoboy guarulhos", intent: "transactional", volumeEstimado: 880, dificuldade: 55, dificuldadeLabel: "Média", cpcEstimado: 18.3, paginaAlvo: "/servicos/motoboy-expresso", prioridade: "P0", cluster: "head" },
  { term: "motofrete guarulhos", intent: "transactional", volumeEstimado: 720, dificuldade: 58, dificuldadeLabel: "Média", cpcEstimado: 21.4, paginaAlvo: "/servicos/motofrete", prioridade: "P0", cluster: "head" },
  { term: "entrega expressa guarulhos", intent: "transactional", volumeEstimado: 590, dificuldade: 52, dificuldadeLabel: "Média", cpcEstimado: 15.2, paginaAlvo: "/servicos/entrega-expressa", prioridade: "P0", cluster: "head" },
  { term: "motoboy cumbica", intent: "local", volumeEstimado: 480, dificuldade: 28, dificuldadeLabel: "Baixa", cpcEstimado: 19.8, paginaAlvo: "/areas/cumbica", prioridade: "P0", cluster: "head" },
  { term: "motoboy centro guarulhos", intent: "local", volumeEstimado: 390, dificuldade: 30, dificuldadeLabel: "Baixa", cpcEstimado: 22.1, paginaAlvo: "/areas/centro-guarulhos", prioridade: "P0", cluster: "head" },
  { term: "entregador em guarulhos", intent: "transactional", volumeEstimado: 320, dificuldade: 32, dificuldadeLabel: "Baixa", cpcEstimado: 12.5, paginaAlvo: "/servicos/entregador", prioridade: "P1", cluster: "head" },
  { term: "moto frete guarulhos", intent: "transactional", volumeEstimado: 280, dificuldade: 50, dificuldadeLabel: "Média", cpcEstimado: 17.6, paginaAlvo: "/servicos/moto-entrega", prioridade: "P1", cluster: "head" },
  { term: "courier guarulhos", intent: "commercial", volumeEstimado: 240, dificuldade: 30, dificuldadeLabel: "Baixa", cpcEstimado: 23.4, paginaAlvo: "/servicos/courier", prioridade: "P1", cluster: "head" },
  { term: "entrega rapida guarulhos", intent: "transactional", volumeEstimado: 210, dificuldade: 48, dificuldadeLabel: "Média", cpcEstimado: 14.3, paginaAlvo: "/servicos/same-day", prioridade: "P1", cluster: "head" },
  { term: "entrega documentos guarulhos", intent: "transactional", volumeEstimado: 190, dificuldade: 25, dificuldadeLabel: "Baixa", cpcEstimado: 28.9, paginaAlvo: "/servicos/entrega-documentos", prioridade: "P0", cluster: "head" },
  { term: "transporte malotes guarulhos", intent: "transactional", volumeEstimado: 170, dificuldade: 12, dificuldadeLabel: "Muito Baixa", cpcEstimado: 25.6, paginaAlvo: "/servicos/transporte-malotes", prioridade: "P0", cluster: "head" },
  { term: "motoboy cartorio guarulhos", intent: "local", volumeEstimado: 150, dificuldade: 10, dificuldadeLabel: "Muito Baixa", cpcEstimado: 31.2, paginaAlvo: "/servicos/cartorio", prioridade: "P0", cluster: "head" },
  { term: "motoboy forum guarulhos", intent: "local", volumeEstimado: 120, dificuldade: 10, dificuldadeLabel: "Muito Baixa", cpcEstimado: 29.8, paginaAlvo: "/servicos/advogados", prioridade: "P0", cluster: "head" },
  { term: "coleta transportadora guarulhos", intent: "transactional", volumeEstimado: 110, dificuldade: 28, dificuldadeLabel: "Baixa", cpcEstimado: 19.4, paginaAlvo: "/servicos/coleta-transportadoras", prioridade: "P1", cluster: "head" },
  { term: "motoboy bonsucesso guarulhos", intent: "local", volumeEstimado: 95, dificuldade: 8, dificuldadeLabel: "Muito Baixa", cpcEstimado: 17.2, paginaAlvo: "/areas/bonsucesso", prioridade: "P1", cluster: "head" },
  { term: "entrega urgente guarulhos", intent: "transactional", volumeEstimado: 90, dificuldade: 30, dificuldadeLabel: "Baixa", cpcEstimado: 26.7, paginaAlvo: "/servicos/entrega-urgente", prioridade: "P0", cluster: "head" },
  { term: "motoboy vila galvao", intent: "local", volumeEstimado: 85, dificuldade: 10, dificuldadeLabel: "Muito Baixa", cpcEstimado: 15.8, paginaAlvo: "/areas/vila-galvao", prioridade: "P1", cluster: "head" },
  { term: "motoboy vila endres", intent: "local", volumeEstimado: 70, dificuldade: 8, dificuldadeLabel: "Muito Baixa", cpcEstimado: 14.5, paginaAlvo: "/areas/vila-endres", prioridade: "P2", cluster: "head" },
  { term: "entrega encomendas guarulhos", intent: "transactional", volumeEstimado: 65, dificuldade: 27, dificuldadeLabel: "Baixa", cpcEstimado: 18.9, paginaAlvo: "/servicos/entrega-encomendas", prioridade: "P1", cluster: "head" },
];

// ------------------------------------------------------------ long-tail (40)
export const longTailTerms: Keyword[] = [
  { term: "motoboy para cartorio guarulhos", intent: "informational", volumeEstimado: 60, dificuldade: 8, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/motoboy-para-cartorio-guarulhos", prioridade: "P1", cluster: "long-tail" },
  { term: "entrega malotes juridicos guarulhos", intent: "commercial", volumeEstimado: 55, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/entrega-malotes-juridicos-guarulhos", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy para laboratorio clinico", intent: "commercial", volumeEstimado: 50, dificuldade: 15, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/motoboy-laboratorios", prioridade: "P0", cluster: "long-tail" },
  { term: "entrega documentos seguros guarulhos", intent: "commercial", volumeEstimado: 50, dificuldade: 18, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/entrega-documentos-seguros-guarulhos", prioridade: "P1", cluster: "long-tail" },
  { term: "transporte valores guarulhos motoboy", intent: "commercial", volumeEstimado: 40, dificuldade: 20, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/transporte-valores", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy para eventos corporativos", intent: "commercial", volumeEstimado: 40, dificuldade: 18, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/motoboy-eventos", prioridade: "P2", cluster: "long-tail" },
  { term: "courier express guarulhos como funciona", intent: "informational", volumeEstimado: 35, dificuldade: 15, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/courier-express-guarulhos-como-funciona", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy para escritorios guarulhos", intent: "commercial", volumeEstimado: 60, dificuldade: 22, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/motoboy-escritorios", prioridade: "P1", cluster: "long-tail" },
  { term: "entrega pecas automotivas guarulhos", intent: "transactional", volumeEstimado: 55, dificuldade: 20, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/pecas-automotivas", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy para industrias guarulhos", intent: "commercial", volumeEstimado: 45, dificuldade: 22, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/motoboy-industrias", prioridade: "P1", cluster: "long-tail" },
  { term: "servico mensageiro guarulhos", intent: "transactional", volumeEstimado: 50, dificuldade: 25, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/mensageiro", prioridade: "P1", cluster: "long-tail" },
  { term: "busca e entrega guarulhos", intent: "transactional", volumeEstimado: 45, dificuldade: 24, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/busca-entrega", prioridade: "P1", cluster: "long-tail" },
  { term: "coleta em cartorio guarulhos passo a passo", intent: "informational", volumeEstimado: 30, dificuldade: 8, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/coleta-em-cartorio-guarulhos-passo-a-passo", prioridade: "P2", cluster: "long-tail" },
  { term: "entrega pecas juridicas guarulhos", intent: "transactional", volumeEstimado: 40, dificuldade: 12, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/pecas-juridicas", prioridade: "P1", cluster: "long-tail" },
  { term: "transporte exames medicos guarulhos", intent: "transactional", volumeEstimado: 45, dificuldade: 14, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/exames-medicos", prioridade: "P0", cluster: "long-tail" },
  { term: "motoboy aeroporto gru terminal 2", intent: "local", volumeEstimado: 70, dificuldade: 20, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/aeroporto-gru", prioridade: "P0", cluster: "long-tail" },
  { term: "motoboy hospital guarulhos 24h", intent: "local", volumeEstimado: 40, dificuldade: 16, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/hospitais", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy clinicas guarulhos coleta exames", intent: "commercial", volumeEstimado: 35, dificuldade: 14, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/motoboy-clinicas", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy contador guarulhos prazo fiscal", intent: "commercial", volumeEstimado: 30, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/contadores", prioridade: "P2", cluster: "long-tail" },
  { term: "entrega same day guarulhos ecommerce", intent: "commercial", volumeEstimado: 35, dificuldade: 26, dificuldadeLabel: "Baixa", paginaAlvo: "/blog/entrega-same-day-guarulhos-ecommerce", prioridade: "P2", cluster: "long-tail" },
  { term: "logistica urbana guarulhos pme", intent: "commercial", volumeEstimado: 25, dificuldade: 24, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/logistica-urbana", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy panfletagem guarulhos comercio", intent: "commercial", volumeEstimado: 20, dificuldade: 12, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/panfletos", prioridade: "P2", cluster: "long-tail" },
  { term: "entrega correspondencia condominio guarulhos", intent: "transactional", volumeEstimado: 25, dificuldade: 15, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/correspondencias", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy picanco guarulhos", intent: "local", volumeEstimado: 20, dificuldade: 5, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/picanco", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy gopouva guarulhos", intent: "local", volumeEstimado: 20, dificuldade: 5, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/gopouva", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy taboao guarulhos", intent: "local", volumeEstimado: 20, dificuldade: 5, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/taboao", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy macedo guarulhos", intent: "local", volumeEstimado: 15, dificuldade: 5, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/macedo", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy vila galvao entrega documentos", intent: "local", volumeEstimado: 25, dificuldade: 8, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/entrega-documentos-em-vila-galvao", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy cumbica retirada aeroporto", intent: "local", volumeEstimado: 30, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/aeroporto-gru-em-cumbica", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy centro guarulhos cartorio", intent: "local", volumeEstimado: 30, dificuldade: 8, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/cartorio-no-centro-guarulhos", prioridade: "P1", cluster: "long-tail" },
  { term: "entrega programada empresas guarulhos", intent: "commercial", volumeEstimado: 30, dificuldade: 20, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/entrega-programada", prioridade: "P1", cluster: "long-tail" },
  { term: "coleta entrega guarulhos porta a porta", intent: "transactional", volumeEstimado: 35, dificuldade: 22, dificuldadeLabel: "Baixa", paginaAlvo: "/servicos/coleta-entrega", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy itaquaquecetuba guarulhos", intent: "local", volumeEstimado: 40, dificuldade: 12, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/itaquaquecetuba", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy via dutra coleta transportadora", intent: "local", volumeEstimado: 25, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/via-dutra", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy parque novo mundo guarulhos", intent: "local", volumeEstimado: 15, dificuldade: 5, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/areas/parque-novo-mundo", prioridade: "P2", cluster: "long-tail" },
  { term: "distribuicao ecommerce guarulhos motoboy", intent: "commercial", volumeEstimado: 20, dificuldade: 28, dificuldadeLabel: "Baixa", paginaAlvo: "/blog/distribuicao-ecommerce-guarulhos-motoboy", prioridade: "P2", cluster: "long-tail" },
  { term: "quanto tempo entrega motoboy cumbica centro", intent: "informational", volumeEstimado: 25, dificuldade: 6, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/guia/quanto-tempo-entrega-motoboy-guarulhos", prioridade: "P1", cluster: "long-tail" },
  { term: "motoboy particular guarulhos whatsapp", intent: "transactional", volumeEstimado: 50, dificuldade: 30, dificuldadeLabel: "Baixa", paginaAlvo: "/blog/motoboy-particular-guarulhos-whatsapp", prioridade: "P2", cluster: "long-tail" },
  { term: "motoboy noturno guarulhos 24 horas", intent: "transactional", volumeEstimado: 45, dificuldade: 22, dificuldadeLabel: "Baixa", paginaAlvo: "/blog/motoboy-noturno-guarulhos-24-horas", prioridade: "P2", cluster: "long-tail" },
  { term: "entrega fragil guarulhos motoboy cuidados", intent: "informational", volumeEstimado: 15, dificuldade: 8, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/blog/entrega-fragil-guarulhos-motoboy-cuidados", prioridade: "P2", cluster: "long-tail" },
];

// ------------------------------------------------------------------ BoFu (15)
export const bofuTerms: Keyword[] = [
  { term: "quanto custa motoboy guarulhos", intent: "commercial", volumeEstimado: 140, dificuldade: 25, dificuldadeLabel: "Baixa", paginaAlvo: "/quanto-custa-motoboy-guarulhos", prioridade: "P0", cluster: "bofu" },
  { term: "valor motoboy guarulhos 2025", intent: "commercial", volumeEstimado: 90, dificuldade: 15, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/guia/tabela-precos-motoboy-guarulhos", prioridade: "P0", cluster: "bofu" },
  { term: "melhor motoboy guarulhos avaliacoes", intent: "commercial", volumeEstimado: 70, dificuldade: 30, dificuldadeLabel: "Baixa", paginaAlvo: "/melhor-motoboy-guarulhos-avaliacoes", prioridade: "P0", cluster: "bofu" },
  { term: "motoboy mais rapido cumbica", intent: "transactional", volumeEstimado: 40, dificuldade: 12, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/servicos/motoboy-expresso-em-cumbica", prioridade: "P0", cluster: "bofu" },
  { term: "motoboy barato guarulhos", intent: "commercial", volumeEstimado: 110, dificuldade: 35, dificuldadeLabel: "Baixa", paginaAlvo: "/guia/motoboy-barato-guarulhos-vale-a-pena", prioridade: "P1", cluster: "bofu" },
  { term: "orcamento motoboy guarulhos online", intent: "transactional", volumeEstimado: 80, dificuldade: 18, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/orcamento", prioridade: "P0", cluster: "bofu" },
  { term: "preco motofrete guarulhos por km", intent: "commercial", volumeEstimado: 60, dificuldade: 16, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/calculadora", prioridade: "P0", cluster: "bofu" },
  { term: "contratar motoboy mensalista guarulhos", intent: "transactional", volumeEstimado: 50, dificuldade: 20, dificuldadeLabel: "Baixa", paginaAlvo: "/contratar-motoboy-mensalista-guarulhos", prioridade: "P1", cluster: "bofu" },
  { term: "tabela precos entrega expressa guarulhos", intent: "commercial", volumeEstimado: 30, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/guia/tabela-precos-entrega-expressa-guarulhos", prioridade: "P1", cluster: "bofu" },
  { term: "motoboy urgente agora guarulhos whatsapp", intent: "transactional", volumeEstimado: 75, dificuldade: 22, dificuldadeLabel: "Baixa", paginaAlvo: "/pedido-urgente-whatsapp", prioridade: "P0", cluster: "bofu" },
  { term: "motoboy com nota fiscal guarulhos empresa", intent: "commercial", volumeEstimado: 35, dificuldade: 12, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/para-empresas", prioridade: "P1", cluster: "bofu" },
  { term: "motoboy convenio clinica guarulhos preco", intent: "commercial", volumeEstimado: 25, dificuldade: 10, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/convenio-clinicas-laboratorios", prioridade: "P1", cluster: "bofu" },
  { term: "avaliacao motoboy guarulhos reclame aqui", intent: "commercial", volumeEstimado: 20, dificuldade: 18, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/avaliacoes", prioridade: "P2", cluster: "bofu" },
  { term: "motoboy entrega hoje guarulhos", intent: "transactional", volumeEstimado: 55, dificuldade: 24, dificuldadeLabel: "Baixa", paginaAlvo: "/entrega-hoje-guarulhos", prioridade: "P0", cluster: "bofu" },
  { term: "rastrear entrega motoboy guarulhos", intent: "transactional", volumeEstimado: 65, dificuldade: 14, dificuldadeLabel: "Muito Baixa", paginaAlvo: "/rastreio", prioridade: "P0", cluster: "bofu" },
];

export const allKeywords: Keyword[] = [...headTerms, ...longTailTerms, ...bofuTerms];

// ------------------------------------------------------- anti-canibalização
/** URL -> keyword primária. Usado por SEO Manager / gerador de sitemap. */
export const primaryKeywordByUrl: Record<string, string> = Object.fromEntries(
  allKeywords.map((k) => [k.paginaAlvo, k.term]),
);

export function validateNoCannibalization(keywords: Keyword[] = allKeywords): {
  ok: boolean;
  duplicates: { paginaAlvo: string; terms: string[] }[];
} {
  const byUrl = new Map<string, string[]>();
  for (const k of keywords) {
    const list = byUrl.get(k.paginaAlvo) ?? [];
    list.push(k.term);
    byUrl.set(k.paginaAlvo, list);
  }
  const duplicates = Array.from(byUrl.entries())
    .filter(([, terms]) => terms.length > 1)
    .map(([paginaAlvo, terms]) => ({ paginaAlvo, terms }));
  return { ok: duplicates.length === 0, duplicates };
}

export function getByPriority(p: Priority): Keyword[] {
  return allKeywords.filter((k) => k.prioridade === p);
}

export function getByIntent(intent: SearchIntent): Keyword[] {
  return allKeywords.filter((k) => k.intent === intent);
}

export function getTargetUrl(term: string): string | undefined {
  return allKeywords.find((k) => k.term === term)?.paginaAlvo;
}
