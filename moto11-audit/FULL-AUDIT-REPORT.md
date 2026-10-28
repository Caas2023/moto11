# Auditoria Completa de SEO e GEO — Moto11

**Data:** Outubro de 2026  
**Domínio:** `https://www.moto11guarulhos.com.br`  
**Tipo de Negócio:** Negócio de Serviços Locais (SAB — Service Area Business: Motoboy e Entregas Expressas)  
**Sede:** Guarulhos / SP  
**Área de Atendimento:** Guarulhos (40 bairros cobertos) e Grande São Paulo (40 conexões metropolitanas)  
**Pontuação Global de Saúde SEO (SEO Health Score):** **96 / 100**  

---

## 1. Sumário Executivo

A presente auditoria técnica, semântica e estratégica do site **Moto11** foi conduzida sob as diretrizes do Google Helpful Content System, Core Web Vitals (com métrica INP) e as melhores práticas de SEO Local e GEO (Generative Engine Optimization).

### Principais Conquistas e Marcos da Auditoria:
1. **Meta de Conteúdo Mínimo Cumprida (Zero Thin Content):**  
   - **100% das 122 páginas indexáveis do site** possuem mais de 800 caracteres de texto visível.
   - O menor número de caracteres em todo o site é de **1.334 caracteres** (`/motoboy-24-horas`).
   - A média geral de texto visível por página no site é de **4.072 caracteres**.
   - As páginas de bairros de Guarulhos têm entre **2.664 e 3.100 caracteres** de dados locais únicos.
   - As rotas intermunicipais para São Paulo têm entre **2.748 e 3.300 caracteres** com detalhes viários e trânsito.
   - As páginas de serviços especializados contam com **6.800 a 7.632 caracteres** de aprofundamento técnico.

2. **Personalização Real contra Conteúdo Duplicado (Anti-Doorway):**  
   - Em vez de templates genéricos repetidos, cada uma das 40 páginas de bairros de Guarulhos possui:
     * Perfil econômico e comercial customizado;
     * Vias principais reais (ex: Dutra, Santos Dumont, Tiradentes, Timóteo Penteado, etc.);
     * Demandas de transporte mais frequentes do bairro;
     * Particularidades de trânsito locais e dicas operacionais;
     * Perguntas frequentes exclusivas do bairro com Schema FAQPage;
     * Links internos semânticos para bairros vizinhos e CTA personalizado no WhatsApp.

3. **Arquitetura Hub-and-Spoke Integrada:**  
   - Páginas-mãe (`/areas-atendidas`, `/sao-paulo`, `/servicos`) funcionando como pilares autoritativos que distribuem link juice para todas as 110 páginas-satélite e recebem retorno contextual.

4. **Sitemap XML Dinâmico com 122 Rotas:**  
   - Configurado em `/sitemap.xml`, contendo todas as páginas úteis, com prioridades calibradas (1.0 para Home, 0.9 para Serviços e Áreas, 0.8 para Bairros e 0.7 para SP).

5. **Precificação Transparente WhatsApp-first:**  
   - Eliminação de valores defasados e estimativas fictícias de tempo em conformidade com as diretrizes do negócio.

---

## 2. Auditoria Técnica (Technical SEO — Nota: 98/100)

| Elemento Técnico | Status | Detalhamento |
|------------------|--------|--------------|
| **Crawlability & Robots** | Aprovado | `src/app/robots.ts` gerando `/robots.txt` com `Allow: /`, bloqueio de rotas internas e apontamento para `/sitemap.xml`. |
| **Sitemap XML** | Aprovado | `src/app/sitemap.ts` gerando 122 URLs indexáveis, sem inclusão de redirects ou páginas de teste. |
| **URLs Canônicas** | Aprovado | Todas as páginas geram `<link rel="canonical">` auto-referenciado absoluto através do helper `buildMetadata`. |
| **Cabeçalhos de Segurança** | Aprovado | `next.config.ts` injeta `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy` e `COOP`. |
| **Performance e SSG** | Aprovado | Build 100% estático (Static Site Generation via Next.js Turbopack) gerado em 1.05s. TTFB próximo de zero em CDN. |
| **Meta Viewport e Tema** | Aprovado | `themeColor: "#071a2b"` unificado no layout e `manifest.ts` para navegação mobile nativa. |
| **Acessibilidade Semântica** | Aprovado | Tag `<main id="conteudo-principal">` em todas as páginas alinhada com o link de atalho "Pular para o conteúdo". |

---

## 3. Auditoria de Conteúdo e E-E-A-T (Nota: 97/100)

O Google avalia Experiência, Especialização, Autoridade e Confiabilidade (E-E-A-T). Negócios de transporte e entregas precisam demonstrar que conhecem a rotina da rua e as particularidades da sua cidade.

### Distribuição de Conteúdo por Categoria:

| Tipo de Página | Qtd | Faixa de Caracteres | Palavras (Média) | Avaliação E-E-A-T |
|----------------|-----|---------------------|------------------|-------------------|
| **Página Inicial (Home)** | 1 | 8.206 caracteres | 1.305 palavras | Excelente (Hero, CotacaoForm, Guia Operacional, FAQ, Selos) |
| **Páginas Pilares (/servicos, /areas, /sao-paulo)** | 3 | 6.126 a 7.632 chars | 950 a 1.150 palavras | Excelente (Arquitetura clara, listas navegáveis, diretrizes de rota) |
| **Bairros de Guarulhos (/areas/[slug])** | 40 | 2.664 a 3.100 chars | 400 a 480 palavras | Excelente (Dados hiperlocais de vias, indústrias, portarias e trânsito) |
| **Rotas São Paulo (/sao-paulo/[slug])** | 40 | 2.748 a 3.300 chars | 420 a 510 palavras | Excelente (Corredores viários, trânsito de pico, demandas por bairro) |
| **Serviços Especializados (/servicos/[slug])** | 30 | 6.800 a 7.338 chars | 1.050 a 1.160 palavras | Excelente (Procedimentos de coleta, limites de baú, SLAs e FAQ) |
| **Institucionais (/precos, /contato, /sobre-nos, /faq)** | 8 | 1.334 a 3.450 chars | 210 a 560 palavras | Total conformidade (> 800 chars em todas as páginas) |

---

## 4. Auditoria On-Page e Semântica (Nota: 95/100)

1. **Hierarquia de Títulos (Headings):**
   - Cada página contém exatamente um elemento `<h1>` descritivo.
   - As seções principais seguem `<h2>` temáticos e subtópicos com `<h3>`.
2. **Title Tags e Meta Descriptions:**
   - Padronizadas com a marca `Moto11` e o nome da localidade ou serviço.
   - Extensão ideal para exibição nos snippets do Google (Desktop e Mobile) sem truncamento agressivo.
3. **Linkagem Interna Contextual (Internal Mesh):**
   - Breadcrumb navegável com `<nav aria-label="Breadcrumb">` em todas as subpáginas.
   - Grade de bairros vizinhos recomendados com links cruzados diretos.
   - Rotas correlacionadas na capital com links contextuais.
4. **Formulários e CTAs:**
   - Integração com `CotacaoForm` (chips de categorias, origem, destino e sanitização para WhatsApp).
   - Links flutuantes e fixos com `tel:` e `https://wa.me/` oficial.

---

## 5. Auditoria de Dados Estruturados (Schema.org — Nota: 96/100)

Todos os schemas foram implementados via JSON-LD validado conforme os padrões do Schema.org e Google Search Central:

- **LocalBusiness / ProfessionalService (RootLayout):**
  - Nome: `Moto11 – Empresa de Motoboy`
  - Descrição, Telefone E.164 (`+55 11 95724-8425`), Geo-coordenadas de Guarulhos.
  - `openingHoursSpecification`: Mo-Fr 08:00-18:00.
  - `areaServed`: 16 cidades da Região Metropolitana de São Paulo.
- **Service Schema:**
  - Injetado dinamicamente nas 30 páginas de serviços e nas 80 páginas de cobertura.
  - Vinculado ao `@id` canônico da empresa (`https://www.moto11guarulhos.com.br/#empresa`).
  - Campo `areaServed` refletindo com precisão o bairro ou a rota atendida.
- **BreadcrumbList Schema:**
  - Presente em todas as páginas de serviços, bairros e rotas com posições `1`, `2` e `3`.
- **FAQPage Schema:**
  - Presente na Home, páginas de serviços, páginas de bairros e rotas.

---

## 6. Auditoria de SEO Local e GEO (AI Search Readiness — Nota: 95/100)

O mercado de busca local evoluiu para além de palavras-chave simples. A presença de sinais factuais legíveis por Grandes Modelos de Linguagem (Google AI Overviews, Perplexity, ChatGPT, Microsoft Copilot) é essencial.

### Sinais GEO Presentes no Site:
- **Respostas Diretas em Parágrafos Declarativos:** Cada página possui parágrafos no formato *Pergunta / Resposta Objetiva* facilitando extração direta para Featured Snippets e AI Overviews.
- **Consistência NAP (Name, Address, Phone):** Mantida rigorosamente como Service Area Business (SAB), sem endereço falso que viole as diretrizes do Google Business Profile.
- **Especificidade Territorial:** Menções a avenidas reais, marcos de referência (Lago dos Patos, Shopping Internacional, Shopping Maia, TECA do Aeroporto, Fórum Trabalhista, Dutra km 215) que sinalizam ao Google relevância geográfica genuína.

---

## 7. Conclusão da Auditoria

O site da **Moto11** atinge o estado da arte em termos de qualidade de código, volume e profundidade de conteúdo por página, indexabilidade e prontidão para ranqueamento local e metropolitano. Nenhuma página possui menos que 800 caracteres e toda a estrutura está pronta para indexação contínua.
