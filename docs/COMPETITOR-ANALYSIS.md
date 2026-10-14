# Competitor Analysis — Moto11 Guarulhos

> Fonte: `PLANEJAMENTO_MOTO11.md` §1–§4 + `1-PRD_TECNICO.md`. Sem tool web neste agente — volumes/dificuldades são estimativas do planejamento (§4.1), não medição live. Validar com GSC + Search Console após Sprint 2.
> Dados vivos em `web/src/data/keywords.ts` (75 keywords, 1 primária por URL).

## 1. Top 5 concorrentes

| # | Concorrente | Domínio | Anos | Páginas | Keywords âncora | Forças | Fraquezas (gaps exploráveis) |
|---|-------------|---------|------|---------|-----------------|--------|-------------------------------|
| 1 | **R.E. Express** | reexpress.com.br | 14+ | 100+ | motoboy guarulhos, motofrete, entregas urgentes | Autoridade + idade de domínio; cobre head terms | Conteúdo repetitivo entre páginas; sem calculadora; sem FAQ schema; sem rastreio live; sem blog ativo |
| 2 | **Continental Express** | continentalexpressmotoboy.com.br | 22+ | 50+ | cartório, fórum, malotes, documentos | Nicho jurídico/cartório bem posicionado; domínio mais antigo | Sem orçamento online; sem rastreio; sem FAQ schema; conteúdo fino por bairro |
| 3 | **Dimi Express** | dimiexpress.com.br | 5+ | 60+ | cumbica, aeroporto GRU, moto-frete | Foco Cumbica/GRU (alto valor logístico) | Sem calculadora; sem PWA; sem guia "como funciona"; sem prova social estruturada (Review schema) |
| 4 | **ML Motoboy** | mlmotoboy.com.br | 21+ | 40+ | motoboy sp, grande sp, online | Cobertura Grande SP; termo "online" | Conteúdo genérico (não local Guarulhos); sem FAQ schema; sem garantia explícita; sem vídeo |
| 5 | **Jet Motoboy** | jetmotoboy.com.br | ? | 30+ | zona norte, motoboy guarulhos | Posição zona norte/Guarulhos | Poucas páginas; sem blog; sem rastreio; sem calculadora; sem SSL/prova técnica consistente |

**Padrão comum (vale para os 5):** conteúdo repetitivo, sem calculadora de preço, sem FAQ + Schema.org, sem rastreio live, sem blog ativo, sem garantia, sem orçamento online, sem PWA, sem vídeo de frota/rotas.

## 2. Top 20 head terms (tabela principal)

| # | Keyword | Vol./mês | Dif. | Intent | Página-alvo (primária, única) | Pri. |
|---|---------|----------|------|--------|-------------------------------|------|
| 1 | motoboy guarulhos | 1600 | Alta | transacional | `/` | P0 |
| 2 | entrega motoboy guarulhos | 880 | Média | transacional | `/servicos/motoboy-expresso` | P0 |
| 3 | motofrete guarulhos | 720 | Média | transacional | `/servicos/motofrete` | P0 |
| 4 | entrega expressa guarulhos | 590 | Média | transacional | `/servicos/entrega-expressa` | P0 |
| 5 | motoboy cumbica | 480 | Baixa | local | `/areas/cumbica` | P0 |
| 6 | motoboy centro guarulhos | 390 | Baixa | local | `/areas/centro-guarulhos` | P0 |
| 7 | entregador em guarulhos | 320 | Baixa | transacional | `/servicos/entregador` | P1 |
| 8 | moto frete guarulhos | 280 | Média | transacional | `/servicos/moto-entrega` | P1 |
| 9 | courier guarulhos | 240 | Baixa | comercial | `/servicos/courier` | P1 |
| 10 | entrega rapida guarulhos | 210 | Média | transacional | `/servicos/same-day` | P1 |
| 11 | entrega documentos guarulhos | 190 | Baixa | transacional | `/servicos/entrega-documentos` | P0 |
| 12 | transporte malotes guarulhos | 170 | Muito Baixa | transacional | `/servicos/transporte-malotes` | P0 |
| 13 | motoboy cartorio guarulhos | 150 | Muito Baixa | local | `/servicos/cartorio` | P0 |
| 14 | motoboy forum guarulhos | 120 | Muito Baixa | local | `/servicos/advogados` | P0 |
| 15 | coleta transportadora guarulhos | 110 | Baixa | transacional | `/servicos/coleta-transportadoras` | P1 |
| 16 | motoboy bonsucesso guarulhos | 95 | Muito Baixa | local | `/areas/bonsucesso` | P1 |
| 17 | entrega urgente guarulhos | 90 | Baixa | transacional | `/servicos/entrega-urgente` | P0 |
| 18 | motoboy vila galvao | 85 | Muito Baixa | local | `/areas/vila-galvao` | P1 |
| 19 | motoboy vila endres | 70 | Muito Baixa | local | `/areas/vila-endres` | P2 |
| 20 | entrega encomendas guarulhos | 65 | Baixa | transacional | `/servicos/entrega-encomendas` | P1 |

Detalhe 40 long-tail + 15 BoFu: ver `web/src/data/keywords.ts` (`longTailTerms`, `bofuTerms`).

## 3. Gaps críticos (onde atacar primeiro)

1. **Cartório/fórum/malote (CPC R$ 25–31, dificuldade Muito Baixa)** — Continental rankeia com conteúdo fino. Atacar com `/servicos/cartorio` + `/blog/coleta-em-cartorio-guarulhos-passo-a-passo` + combo `/servicos/cartorio-no-centro-guarulhos` + FAQ schema. (P0)
2. **Cumbica/GRU (480/mês, Baixa)** — Dimi não tem calculadora nem rastreio. Atacar com `/areas/cumbica` + `/servicos/aeroporto-gru-em-cumbica` + garantia 2h. (P0)
3. **BoFu preço/orçamento ("quanto custa", "valor 2025", "orçamento online", "por km")** — nenhum concorrente tem calculadora nem tabela pública. Atacar com `/calculadora`, `/orcamento`, `/quanto-custa-motoboy-guarulhos`, `/guia/tabela-precos-motoboy-guarulhos`. (P0)
4. **Saúde (laboratório/clínica/exames, CPC alto, concorrência ~zero)** — nenhum concorrente tem protocolo térmico/custódia como página dedicada. Atacar com `/servicos/motoboy-laboratorios`, `/servicos/exames-medicos`, `/convenio-clinicas-laboratorios`. (P0)
5. **Rastreio + prova social ("rastrear entrega", "melhor avaliado", "reclame aqui")** — zero concorrentes com rastreio live/PWA/Review schema. Atacar com `/rastreio`, `/avaliacoes`, `/melhor-motoboy-guarulhos-avaliacoes`. (P0)
6. **Bairros cauda (Picanço, Gopoúva, Taboão, Macedo, Vila Endres — dif. 5)** — ninguém produz conteúdo único por bairro. Atacar com `/areas/*` + texto único + foto + tempo estimado. (P2, barato e cumulativo)

## 4. 15 oportunidades únicas (ninguém tem → Moto11 terá)

| # | Oportunidade | Execução Moto11 | URL / entregável |
|---|--------------|-----------------|------------------|
| 1 | Calculadora de preço em tempo real | widget por km + urgência + bairro | `/calculadora` |
| 2 | Rastreio live no site | mapa + status + ETA | `/rastreio` |
| 3 | Garantia "2h ou 50% desconto" | selo + termo + schema | home + `/servicos/entrega-urgente` |
| 4 | FAQ com Schema.org em 100% das páginas | accordion + JSON-LD | todas `/servicos/*`, `/areas/*` |
| 5 | Chatbot WhatsApp API | triagem + orçamento + tracking | flutuante global |
| 6 | Guia "Como funciona" educativo | passo a passo + vídeo | `/guia/*` |
| 7 | Orçamento online que calcula na hora | formulário + calculadora | `/orcamento` |
| 8 | PWA de rastreamento | instalável, push de status | PWA `/rastreio` |
| 9 | Blog ativo semanal otimizado | 60 posts (clusters serviço×bairro×BoFu) | `/blog/*` |
| 10 | Vídeo frota/equipe/rotas + YouTube | hero + páginas GRU/Cumbica | home, `/servicos/aeroporto-gru`, YouTube |
| 11 | Texto único por página (anti-repetição) | brief + revisão por URL | CMS + SEO Manager |
| 12 | URLs padronizadas | `/servicos/[s]`, `/areas/[b]`, `/blog/[p]` | sitemap + robots |
| 13 | HTTPS + performance >90 | Vercel + imagens otimizadas | Core Web Vitals |
| 14 | Prova social estruturada | carrossel + Review/AggregateRating schema | `/avaliacoes`, home |
| 15 | Contagem regressiva same-day + calendário programada | urgência + agendamento online | `/servicos/same-day`, `/servicos/entrega-programada` |

## 5. Mapa anti-canibalização (resumo da regra)

- **Regra:** 1 keyword primária por URL; variações viram seção H2, FAQ ou canonical — nunca nova página concorrente.
- **Implementação:** `primaryKeywordByUrl` + `validateNoCannibalization()` em `web/src/data/keywords.ts`. Ex.: `entrega expressa` → `/servicos/entrega-expressa`, `entrega urgente` → `/servicos/entrega-urgente` (páginas irmãs, H1 e FAQ distintos, interlink com anchor diferenciada).
- **Clusters:** head → `/` + `/servicos/*` + `/areas/*`; long-tail informacional → `/blog/*` + `/guia/*`; long-tail local → combos `/servicos/[s]-em-[bairro]`; BoFu → `/calculadora`, `/orcamento`, `/quanto-custa-*`, `/guia/tabela-*`, `/rastreio`, `/avaliacoes`.
- **Total:** 75 keywords → 75 URLs únicas (20 head + 40 long-tail + 15 BoFu). Checagem: `validateNoCannibalization().ok === true`.
- **Manutenção:** ao criar página nova, rodar validação; se colidir, escolher: (a) fundir conteúdo, (b) canonical, ou (c) trocar keyword primária.

## 6. Prioridades de execução

- **P0 (atacar agora):** head 1–6, 11–14, 17 + saúde/aeroporto + todo BoFu de preço/rastreio (`/`, `/areas/cumbica`, `/servicos/cartorio`, `/calculadora`, `/orcamento`, `/rastreio`).
- **P1 (Sprint 2–3):** head 7–10, 15–16, 18 + long-tail comercial + combos bairro×serviço.
- **P2 (blog contínuo):** head 19 + bairros cauda + posts informacionais (Picanço, Gopoúva, Taboão, frágil, panfletagem).
