/**
 * Matriz de links internos — estratégia hub-and-spoke (Moto11 Guarulhos).
 *
 * Hierarquia:
 *   HOME (/) → hubs (/servicos, /areas, /combos, /blog)
 *     → spokes (/servicos/[slug], /areas/[slug], /combos/[slug], /blog/[slug])
 *       → conversão (/orcamento, /contato) + retorno ao hub
 *
 * Regras:
 * - Toda entrada da matriz tem 3+ links internos.
 * - Todo anchor contém a keyword da página de destino (sem "clique aqui",
 *   sem "saiba mais" genérico, sem "aqui").
 * - Spokes linkam de volta ao hub + 2+ spokes irmãos (link equity lateral).
 * - Hubs linkam para o hub seguinte do funil (servicos→areas→combos→blog).
 */

export interface InternalLink {
  /** Rota de destino (ex.: `/servicos/motofrete`). */
  href: string;
  /** Texto-âncora visível — deve conter keyword, nunca genérico. */
  anchor: string;
  /** Keyword principal da página de destino (para auditoria). */
  keyword: string;
  /** Contexto opcional de uso (ex.: "card hub", "cross-sell fim de página"). */
  context?: string;
}

/** Âncoras proibidas — auditoria via `isValidAnchor()`. */
export const FORBIDDEN_ANCHOR_PATTERNS: RegExp[] = [
  /clique\s+aqui/i,
  /^aqui$/i,
  /^saiba\s+mais$/i,
  /^leia\s+mais$/i,
  /^ver\s+mais$/i,
  /^acesse$/i,
];

/** Retorna false se a âncora for genérica (sem keyword). */
export function isValidAnchor(anchor: string): boolean {
  const text = anchor.trim();
  if (text.length < 12) return false;
  return !FORBIDDEN_ANCHOR_PATTERNS.some((re) => re.test(text));
}

export const SERVICE_SLUGS = [
  "motoboy-expresso",
  "motofrete",
  "entrega-documentos",
  "entrega-encomendas",
  "coleta-entrega",
  "mensageiro",
  "transporte-malotes",
  "coleta-transportadoras",
  "aeroporto-gru",
  "entrega-urgente",
  "entrega-programada",
  "motoboy-escritorios",
  "motoboy-industrias",
  "motoboy-clinicas",
  "motoboy-laboratorios",
  "pecas-automotivas",
  "courier",
  "panfletos",
  "correspondencias",
  "transporte-valores",
  "motoboy-eventos",
  "busca-entrega",
  "logistica-urbana",
  "same-day",
  "advogados",
  "contadores",
  "hospitais",
  "cartorio",
  "pecas-juridicas",
  "exames-medicos",
  "moto-entrega",
  "entregador",
] as const;

export const AREA_SLUGS = [
  "cumbica",
  "centro-guarulhos",
  "bonsucesso",
  "vila-galvao",
  "picanco",
  "gopouva",
  "taboao",
  "via-dutra",
  "vila-endres",
  "macedo",
  "parque-novo-mundo",
  "itaquaquecetuba",
] as const;

export const COMBO_SLUGS = [
  "cartorio-forum-advocacia",
  "saude-exames-laboratorio",
  "industria-logistica-urgente",
  "escritorio-corporativo-programado",
  "aeroporto-courier-same-day",
  "ecommerce-encomendas-programada",
] as const;

export const POST_SLUGS = [
  "quanto-custa-motoboy-guarulhos",
  "motoboy-ou-motofrete-diferencas",
  "como-funciona-coleta-entrega",
  "entrega-documentos-seguranca",
  "motoboy-cumbica-aeroporto-gru",
  "prazos-entrega-urgente-guarulhos",
] as const;

// ---------------------------------------------------------------------------
// Hubs
// ---------------------------------------------------------------------------

const HOME_LINKS: InternalLink[] = [
  {
    href: "/servicos/motofrete",
    anchor: "motofrete rápido em Guarulhos com preço por km",
    keyword: "motofrete guarulhos",
    context: "hero hub serviços",
  },
  {
    href: "/servicos/entrega-urgente",
    anchor: "entrega urgente em Guarulhos em até 2 horas",
    keyword: "entrega urgente guarulhos",
    context: "hero garantia",
  },
  {
    href: "/areas/cumbica",
    anchor: "motoboy em Cumbica próximo ao Aeroporto GRU",
    keyword: "motoboy cumbica",
    context: "mapa de bairros",
  },
  {
    href: "/combos/cartorio-forum-advocacia",
    anchor: "combo cartório e fórum para advogados em Guarulhos",
    keyword: "motoboy cartório guarulhos",
    context: "cross-sell combos",
  },
  {
    href: "/blog/quanto-custa-motoboy-guarulhos",
    anchor: "quanto custa um motoboy em Guarulhos em 2026",
    keyword: "quanto custa motoboy guarulhos",
    context: "blog teaser home",
  },
  {
    href: "/orcamento",
    anchor: "pedir orçamento de motoboy online em Guarulhos",
    keyword: "orçamento motoboy guarulhos",
    context: "CTA conversão",
  },
];

const SERVICOS_HUB_LINKS: InternalLink[] = [
  {
    href: "/servicos/motoboy-expresso",
    anchor: "motoboy expresso em Guarulhos para entregas imediatas",
    keyword: "motoboy guarulhos",
  },
  {
    href: "/servicos/entrega-documentos",
    anchor: "entrega de documentos com protocolo em Guarulhos",
    keyword: "entrega documentos guarulhos",
  },
  {
    href: "/servicos/aeroporto-gru",
    anchor: "motoboy para o Aeroporto de Guarulhos GRU",
    keyword: "motoboy aeroporto gru",
  },
  {
    href: "/areas/centro-guarulhos",
    anchor: "motoboy no Centro de Guarulhos para comércios e fórum",
    keyword: "motoboy centro guarulhos",
    context: "ponte servicos→areas",
  },
  {
    href: "/combos/industria-logistica-urgente",
    anchor: "combo logística urgente para indústrias de Cumbica",
    keyword: "logística urgente guarulhos",
    context: "ponte servicos→combos",
  },
];

const AREAS_HUB_LINKS: InternalLink[] = [
  {
    href: "/areas/cumbica",
    anchor: "motoboy em Cumbica com coleta em 30 minutos",
    keyword: "motoboy cumbica",
  },
  {
    href: "/areas/centro-guarulhos",
    anchor: "entrega expressa no Centro de Guarulhos",
    keyword: "motoboy centro guarulhos",
  },
  {
    href: "/areas/bonsucesso",
    anchor: "motoboy em Bonsucesso para comércios locais",
    keyword: "motoboy bonsucesso guarulhos",
  },
  {
    href: "/servicos/coleta-entrega",
    anchor: "serviço de coleta e entrega com rastreamento ao vivo",
    keyword: "coleta e entrega guarulhos",
    context: "ponte areas→servicos",
  },
  {
    href: "/combos/escritorio-corporativo-programado",
    anchor: "combo corporativo com entregas programadas em Guarulhos",
    keyword: "motoboy escritórios guarulhos",
    context: "ponte areas→combos",
  },
];

const COMBOS_HUB_LINKS: InternalLink[] = [
  {
    href: "/combos/cartorio-forum-advocacia",
    anchor: "combo cartório e fórum para advogados em Guarulhos",
    keyword: "motoboy cartório guarulhos",
  },
  {
    href: "/combos/saude-exames-laboratorio",
    anchor: "combo saúde para transporte de exames em Guarulhos",
    keyword: "transporte exames médicos guarulhos",
  },
  {
    href: "/combos/aeroporto-courier-same-day",
    anchor: "combo aeroporto com courier same day em Guarulhos",
    keyword: "courier guarulhos",
  },
  {
    href: "/blog/motoboy-ou-motofrete-diferencas",
    anchor: "diferenças entre motoboy e motofrete explicadas no blog",
    keyword: "motoboy ou motofrete",
    context: "ponte combos→blog",
  },
  {
    href: "/orcamento",
    anchor: "pedir orçamento de combo de entregas em Guarulhos",
    keyword: "orçamento motoboy guarulhos",
    context: "conversão",
  },
];

const BLOG_HUB_LINKS: InternalLink[] = [
  {
    href: "/blog/quanto-custa-motoboy-guarulhos",
    anchor: "quanto custa um motoboy em Guarulhos em 2026",
    keyword: "quanto custa motoboy guarulhos",
  },
  {
    href: "/blog/como-funciona-coleta-entrega",
    anchor: "como funciona a coleta e entrega com rastreamento",
    keyword: "coleta e entrega guarulhos",
  },
  {
    href: "/servicos/motofrete",
    anchor: "tabela de preço do motofrete em Guarulhos",
    keyword: "motofrete guarulhos",
    context: "ponte blog→servicos (pilar)",
  },
  {
    href: "/areas/cumbica",
    anchor: "guia de entregas em Cumbica perto do Aeroporto GRU",
    keyword: "motoboy cumbica",
    context: "ponte blog→areas (pilar)",
  },
];

// ---------------------------------------------------------------------------
// Spokes gerados por regra (hub + 2 irmãos + conversão = 4 links)
// ---------------------------------------------------------------------------

function serviceSpokeLinks(slug: string, siblings: [string, string]): InternalLink[] {
  const label = slug.replace(/-/g, " ");
  return [
    {
      href: "/servicos",
      anchor: `ver todos os 32 serviços de motoboy em Guarulhos`,
      keyword: "motoboy guarulhos",
      context: "voltar ao hub",
    },
    {
      href: `/servicos/${siblings[0]}`,
      anchor: `${siblings[0].replace(/-/g, " ")} em Guarulhos com coleta rápida`,
      keyword: `${siblings[0].replace(/-/g, " ")} guarulhos`,
      context: "spoke irmão",
    },
    {
      href: `/servicos/${siblings[1]}`,
      anchor: `${siblings[1].replace(/-/g, " ")} com protocolo e rastreamento`,
      keyword: `${siblings[1].replace(/-/g, " ")} guarulhos`,
      context: "spoke irmão",
    },
    {
      href: "/orcamento",
      anchor: `pedir orçamento de ${label} em Guarulhos pelo WhatsApp`,
      keyword: `${label} guarulhos`,
      context: "conversão",
    },
  ];
}

function areaSpokeLinks(slug: string, serviceSlug: string, areaSibling: string): InternalLink[] {
  const area = slug.replace(/-/g, " ");
  return [
    {
      href: "/areas",
      anchor: "ver todas as áreas atendidas em Guarulhos e região",
      keyword: "motoboy guarulhos bairros",
      context: "voltar ao hub",
    },
    {
      href: `/servicos/${serviceSlug}`,
      anchor: `${serviceSlug.replace(/-/g, " ")} no bairro ${area} com coleta rápida`,
      keyword: `${serviceSlug.replace(/-/g, " ")} ${area}`,
      context: "ponte area→servico",
    },
    {
      href: `/areas/${areaSibling}`,
      anchor: `motoboy em ${areaSibling.replace(/-/g, " ")} com entrega expressa`,
      keyword: `motoboy ${areaSibling.replace(/-/g, " ")}`,
      context: "área irmã",
    },
    {
      href: "/orcamento",
      anchor: `pedir orçamento de motoboy na ${area} em Guarulhos`,
      keyword: `motoboy ${area}`,
      context: "conversão",
    },
  ];
}

function comboSpokeLinks(slug: string, serviceSlug: string, postSlug: string): InternalLink[] {
  const combo = slug.replace(/-/g, " ");
  return [
    {
      href: "/combos",
      anchor: "ver todos os combos de entrega com desconto em Guarulhos",
      keyword: "combos motoboy guarulhos",
      context: "voltar ao hub",
    },
    {
      href: `/servicos/${serviceSlug}`,
      anchor: `${serviceSlug.replace(/-/g, " ")} avulso em Guarulhos sem combo`,
      keyword: `${serviceSlug.replace(/-/g, " ")} guarulhos`,
      context: "combo→serviço base",
    },
    {
      href: `/blog/${postSlug}`,
      anchor: "guia do blog que explica quando o combo vale a pena",
      keyword: "guia motoboy guarulhos",
      context: "combo→blog educativo",
    },
    {
      href: "/orcamento",
      anchor: `pedir orçamento do combo ${combo} em Guarulhos`,
      keyword: `${combo} guarulhos`,
      context: "conversão",
    },
  ];
}

function postSpokeLinks(slug: string, serviceSlug: string, areaSlug: string): InternalLink[] {
  return [
    {
      href: "/blog",
      anchor: "ver todos os guias do blog sobre motoboy em Guarulhos",
      keyword: "blog motoboy guarulhos",
      context: "voltar ao hub",
    },
    {
      href: `/servicos/${serviceSlug}`,
      anchor: `${serviceSlug.replace(/-/g, " ")} em Guarulhos com preço por km`,
      keyword: `${serviceSlug.replace(/-/g, " ")} guarulhos`,
      context: "post→pilar serviço",
    },
    {
      href: `/areas/${areaSlug}`,
      anchor: `motoboy no bairro ${areaSlug.replace(/-/g, " ")} com coleta em 30 minutos`,
      keyword: `motoboy ${areaSlug.replace(/-/g, " ")}`,
      context: "post→pilar área",
    },
    {
      href: "/orcamento",
      anchor: "pedir orçamento de motoboy em Guarulhos pelo WhatsApp",
      keyword: "orçamento motoboy guarulhos",
      context: "conversão",
    },
  ];
}

// ---------------------------------------------------------------------------
// Matriz consolidada
// ---------------------------------------------------------------------------

/** Matriz completa: pathname canônico → 3+ links internos com âncora keyword. */
export const INTERNAL_LINK_MATRIX: Record<string, InternalLink[]> = {
  "/": HOME_LINKS,
  "/servicos": SERVICOS_HUB_LINKS,
  "/areas": AREAS_HUB_LINKS,
  "/combos": COMBOS_HUB_LINKS,
  "/blog": BLOG_HUB_LINKS,
  "/orcamento": [
    {
      href: "/servicos/motofrete",
      anchor: "tabela de preço do motofrete em Guarulhos antes de pedir",
      keyword: "motofrete guarulhos",
    },
    {
      href: "/areas/cumbica",
      anchor: "prazo de coleta em Cumbica e no Aeroporto GRU",
      keyword: "motoboy cumbica",
    },
    {
      href: "/contato",
      anchor: "falar com a equipe Moto11 pelo contato direto",
      keyword: "contato moto11 guarulhos",
    },
  ],
  "/contato": [
    {
      href: "/orcamento",
      anchor: "pedir orçamento de motoboy online em Guarulhos",
      keyword: "orçamento motoboy guarulhos",
    },
    {
      href: "/servicos/entrega-urgente",
      anchor: "entrega urgente em Guarulhos em até 2 horas",
      keyword: "entrega urgente guarulhos",
    },
    {
      href: "/sobre",
      anchor: "conhecer a história da Moto11 em Guarulhos",
      keyword: "moto11 guarulhos",
    },
  ],
  "/sobre": [
    {
      href: "/servicos/motoboy-expresso",
      anchor: "motoboy expresso em Guarulhos da equipe Moto11",
      keyword: "motoboy guarulhos",
    },
    {
      href: "/areas/centro-guarulhos",
      anchor: "nossa base no Centro de Guarulhos e rotas diárias",
      keyword: "motoboy centro guarulhos",
    },
    {
      href: "/contato",
      anchor: "falar com a equipe Moto11 pelo contato direto",
      keyword: "contato moto11 guarulhos",
    },
  ],
};

// Spokes de serviços: cada um aponta p/ hub + 2 irmãos curados + orçamento.
const SERVICE_SIBLINGS: Record<string, [string, string]> = {
  "motoboy-expresso": ["entrega-urgente", "same-day"],
  motofrete: ["coleta-entrega", "moto-entrega"],
  "entrega-documentos": ["transporte-malotes", "correspondencias"],
  "entrega-encomendas": ["same-day", "coleta-entrega"],
  "coleta-entrega": ["busca-entrega", "motofrete"],
  mensageiro: ["motoboy-escritorios", "correspondencias"],
  "transporte-malotes": ["entrega-documentos", "transporte-valores"],
  "coleta-transportadoras": ["logistica-urbana", "pecas-automotivas"],
  "aeroporto-gru": ["courier", "same-day"],
  "entrega-urgente": ["motoboy-expresso", "same-day"],
  "entrega-programada": ["motoboy-escritorios", "panfletos"],
  "motoboy-escritorios": ["advogados", "contadores"],
  "motoboy-industrias": ["logistica-urbana", "pecas-automotivas"],
  "motoboy-clinicas": ["exames-medicos", "hospitais"],
  "motoboy-laboratorios": ["exames-medicos", "motoboy-clinicas"],
  "pecas-automotivas": ["coleta-transportadoras", "logistica-urbana"],
  courier: ["aeroporto-gru", "same-day"],
  panfletos: ["entrega-programada", "motoboy-eventos"],
  correspondencias: ["entrega-documentos", "cartorio"],
  "transporte-valores": ["transporte-malotes", "advogados"],
  "motoboy-eventos": ["panfletos", "busca-entrega"],
  "busca-entrega": ["coleta-entrega", "cartorio"],
  "logistica-urbana": ["motoboy-industrias", "coleta-transportadoras"],
  "same-day": ["entrega-urgente", "entrega-encomendas"],
  advogados: ["pecas-juridicas", "cartorio"],
  contadores: ["advogados", "motoboy-escritorios"],
  hospitais: ["exames-medicos", "motoboy-clinicas"],
  cartorio: ["pecas-juridicas", "advogados"],
  "pecas-juridicas": ["cartorio", "advogados"],
  "exames-medicos": ["motoboy-laboratorios", "hospitais"],
  "moto-entrega": ["motofrete", "entregador"],
  entregador: ["moto-entrega", "motoboy-expresso"],
};

for (const slug of SERVICE_SLUGS) {
  const siblings = SERVICE_SIBLINGS[slug] ?? ["motofrete", "entrega-urgente"];
  INTERNAL_LINK_MATRIX[`/servicos/${slug}`] = serviceSpokeLinks(slug, siblings);
}

// Spokes de áreas: hub + serviço âncora + área irmã + orçamento.
const AREA_SERVICE: Record<string, string> = {
  cumbica: "aeroporto-gru",
  "centro-guarulhos": "motoboy-expresso",
  bonsucesso: "entrega-encomendas",
  "vila-galvao": "coleta-entrega",
  picanco: "motofrete",
  gopouva: "entrega-programada",
  taboao: "motoboy-industrias",
  "via-dutra": "coleta-transportadoras",
  "vila-endres": "motoboy-escritorios",
  macedo: "entrega-documentos",
  "parque-novo-mundo": "entrega-encomendas",
  itaquaquecetuba: "logistica-urbana",
};

AREA_SLUGS.forEach((slug, i) => {
  const sibling = AREA_SLUGS[(i + 1) % AREA_SLUGS.length];
  INTERNAL_LINK_MATRIX[`/areas/${slug}`] = areaSpokeLinks(
    slug,
    AREA_SERVICE[slug] ?? "motofrete",
    sibling,
  );
});

// Spokes de combos: hub + serviço base + post educativo + orçamento.
const COMBO_SERVICE: Record<string, string> = {
  "cartorio-forum-advocacia": "cartorio",
  "saude-exames-laboratorio": "exames-medicos",
  "industria-logistica-urgente": "motoboy-industrias",
  "escritorio-corporativo-programado": "motoboy-escritorios",
  "aeroporto-courier-same-day": "aeroporto-gru",
  "ecommerce-encomendas-programada": "entrega-encomendas",
};

COMBO_SLUGS.forEach((slug, i) => {
  INTERNAL_LINK_MATRIX[`/combos/${slug}`] = comboSpokeLinks(
    slug,
    COMBO_SERVICE[slug] ?? "motofrete",
    POST_SLUGS[i % POST_SLUGS.length],
  );
});

// Spokes do blog: hub + pilar serviço + pilar área + orçamento.
POST_SLUGS.forEach((slug, i) => {
  INTERNAL_LINK_MATRIX[`/blog/${slug}`] = postSpokeLinks(
    slug,
    SERVICE_SLUGS[i % SERVICE_SLUGS.length],
    AREA_SLUGS[i % AREA_SLUGS.length],
  );
});

// ---------------------------------------------------------------------------
// Helpers de consumo (páginas / componentes)
// ---------------------------------------------------------------------------

/** Normaliza pathname (remove trailing slash, query e hash). */
export function normalizePath(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean || "/";
}

/** Links internos da matriz para um pathname. Fallback: links da home. */
export function getInternalLinks(pathname: string): InternalLink[] {
  const key = normalizePath(pathname);
  return INTERNAL_LINK_MATRIX[key] ?? HOME_LINKS;
}

/** Valida a matriz inteira: retorna lista de problemas (vazio = OK). */
export function auditInternalLinks(): string[] {
  const problems: string[] = [];
  for (const [page, links] of Object.entries(INTERNAL_LINK_MATRIX)) {
    if (links.length < 3) {
      problems.push(`${page}: apenas ${links.length} links (mínimo 3)`);
    }
    for (const link of links) {
      if (!link.href.startsWith("/")) {
        problems.push(`${page}: href externo "${link.href}" (matriz é só interna)`);
      }
      if (!isValidAnchor(link.anchor)) {
        problems.push(`${page}: âncora genérica/curta "${link.anchor}"`);
      }
      if (!link.keyword || link.anchor.toLowerCase().indexOf(link.keyword.split(" ")[0]) === -1) {
        problems.push(`${page}: âncora "${link.anchor}" não contém a keyword "${link.keyword}"`);
      }
      if (link.href === page) {
        problems.push(`${page}: auto-link para si mesma`);
      }
    }
  }
  return problems;
}

/** Total de URLs cobertas pela matriz (meta: escalar p/ 300 no sitemap). */
export function countMatrixUrls(): number {
  return Object.keys(INTERNAL_LINK_MATRIX).length;
}
