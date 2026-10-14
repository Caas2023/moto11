# Unificação Visual Moto11 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fazer todas as páginas públicas do Moto11 compartilharem o mesmo shell, hero, container, ritmo de seções, cards, botões, cores e tratamento tipográfico, preservando conteúdo, SEO e lógica.

**Architecture:** Criar primitivas visuais compartilhadas (`SiteSection`, `SectionIntro`, `InfoCard`) e fazer layouts de listagem, conteúdo institucional e páginas dinâmicas consumirem essas primitivas. O `PageHero` será o único padrão de abertura para páginas internas; o layout de `(site)` deixará de impor um wrapper incompatível. A home manterá seu conteúdo específico, mas usará as mesmas tokens, container e padrões de seção.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Lucide React, `next/font/google`.

**Spec:** `DESIGN.md` (autoridade visual do projeto) e `2-DESIGN_SYSTEM.md` (tokens e componentes complementares).

## Global Constraints

- Preservar paleta semântica: `brand-950`, `brand-900`, `primary-700`, `primary-600`, `primary-400`, `surface`, `surface-warm`, `muted`, `line`, `success`.
- Não usar `zinc-*`, `gray-*`, `red-*`, `emerald-*` ou cores inline como parte do design público.
- Usar Poppins para display e Inter para texto, conforme `DESIGN.md`.
- Manter touch targets mínimos de 44×44px e foco visível.
- Respeitar `prefers-reduced-motion`.
- Não alterar copy, metadata, canonical, JSON-LD, robots, sitemap ou regras `noindex` salvo quando necessário para preservar a estrutura visual.
- Não criar páginas SEO novas nem remover páginas existentes.
- Usar `PageHero` como abertura visual única nas páginas internas.
- Usar container padrão `max-w-6xl px-4 sm:px-6` e espaçamento vertical padrão `py-16 sm:py-24` nas seções públicas.

## Review Focus

- Página institucional longa: deve manter exatamente o mesmo header, hero, container, ritmo e CTA mesmo com muito texto; cobrir em `SiteLayout` e `PageHero`.
- Página dinâmica com slug: deve ter o mesmo hero e largura de conteúdo das páginas estáticas; cobrir nos templates `[slug]`.
- Mobile em 320px: grids devem empilhar sem scroll horizontal e CTAs devem ocupar largura útil; cobrir em screenshots mobile.
- Superfície escura e clara: texto e foco precisam continuar legíveis em todos os variantes; cobrir nos componentes compartilhados.
- Conteúdo sem card/grid: termos, privacidade e artigos devem conservar legibilidade sem criar um quarto padrão visual; cobrir no layout editorial.

---

### Task 1: Criar primitivas visuais compartilhadas

**Files:**
- Create: `web/src/components/site/SiteSection.tsx`
- Create: `web/src/components/site/SectionIntro.tsx`
- Create: `web/src/components/site/InfoCard.tsx`
- Modify: `web/src/components/site/PageHero.tsx`
- Modify: `web/src/app/globals.css`

**Interfaces:**
- `SiteSection({ children, tone = "surface", className?, labelledBy? })` renderiza `<section>` full-width com `py-16 sm:py-24` e container interno padrão.
- `SectionIntro({ eyebrow?, title, description?, align = "left" })` renderiza eyebrow, heading e descrição usando hierarquia única.
- `InfoCard({ children, tone = "surface", className? })` renderiza superfície com `border-line`, raio `rounded-2xl`, padding responsivo e hover limitado a 2px quando interativo.
- `PageHero` mantém props atuais (`eyebrow`, `title`, `description`, `children`, `compact`) e passa a encapsular breadcrumb opcional sem alterar chamadas existentes.

- [ ] **Step 1: Escrever teste de contrato visual estático**

Criar `web/src/components/site/__tests__/visual-contract.test.ts` como teste de texto que lê os componentes e garante que tokens proibidos não aparecem nos componentes compartilhados:

```ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const files = ["PageHero.tsx", "SiteSection.tsx", "SectionIntro.tsx", "InfoCard.tsx"];

describe("visual contract", () => {
  it("does not use off-system color utilities", () => {
    for (const file of files) {
      const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
      expect(source).not.toMatch(/(?:zinc|gray|red|emerald)-/);
    }
  });
});
```

- [ ] **Step 2: Implementar primitivas com classes centralizadas**

Definir os tipos `SectionTone = "surface" | "warm" | "dark"` e mapear cada tom apenas para tokens do tema. Usar `max-w-6xl w-full mx-auto px-4 sm:px-6` no container. `SectionIntro` deve usar `text-sm font-semibold text-primary-700` em fundos claros e `text-primary-400` em fundos escuros, sem `uppercase` ou tracking artificial.

- [ ] **Step 3: Tornar `PageHero` o hero único**

Manter imagem `/images/hero-moto11.png`, overlay `bg-brand-950/85`, altura e tipografia existentes, mas aceitar `breadcrumb?: ReactNode` e renderizá-lo dentro do hero antes do eyebrow. Garantir `text-slate-200` apenas para texto sobre imagem e focus rings existentes.

- [ ] **Step 4: Rodar contrato e lint**

Run: `cd web && npm run lint`
Expected: PASS. Se o repositório não tiver Vitest configurado, executar o teste equivalente via `grep`/script Node e registrar a ausência sem instalar dependência.

---

### Task 2: Unificar shell e layout das páginas internas

**Files:**
- Modify: `web/src/app/(site)/layout.tsx`
- Modify: `web/src/components/site/Breadcrumb.tsx`
- Modify: `web/src/components/site/Header.tsx`
- Modify: `web/src/components/site/Footer.tsx`
- Modify: `web/src/components/site/WhatsAppButton.tsx`
- Modify: `web/src/app/loading.tsx`
- Modify: `web/src/app/not-found.tsx`

**Interfaces:**
- `(site)/layout.tsx` passa a fornecer apenas `main`/stack sem impor `max-w-6xl` ao conteúdo inteiro; cada página usa `SiteSection` e `PageHero`.
- Header/Footer/WhatsAppButton continuam com as mesmas props e links.

- [ ] **Step 1: Remover wrapper incompatível do layout `(site)`**

Trocar o wrapper atual por `<div className="flex w-full flex-1 flex-col">{children}</div>`. Não alterar o layout raiz, Header, Footer ou scripts JSON-LD.

- [ ] **Step 2: Padronizar Breadcrumb**

Manter JSON-LD e links. Usar `text-sm text-muted`, `text-brand-950` para item atual e largura `max-w-6xl px-4 sm:px-6`. Quando usado fora de hero, envolver em uma faixa padrão sem margens arbitrárias.

- [ ] **Step 3: Revisar Header/Footer/WhatsAppButton**

Garantir mesma altura do header (`h-[4.5rem]`), mesma largura (`max-w-6xl`), mesma ordem dos CTAs, footer com grid responsivo e botão flutuante usando `success`. Remover somente variações de cor/espaçamento que conflitem com `DESIGN.md`.

- [ ] **Step 4: Padronizar loading e 404**

Loading usa `border-line border-t-primary-700` e `text-muted`. 404 usa `PageHero` e botão secundário com `border-line text-brand-950 hover:bg-surface-warm`.

- [ ] **Step 5: Verificar todas as rotas internas**

Run: `cd web && npm run lint && npx tsc --noEmit`
Expected: PASS; nenhum layout com wrapper interno deve criar hero estreito ou scroll horizontal.

---

### Task 3: Migrar páginas centrais e listagens para o mesmo padrão

**Files:**
- Modify: `web/src/app/page.tsx`
- Modify: `web/src/app/servicos/page.tsx`
- Modify: `web/src/app/areas-atendidas/page.tsx`
- Modify: `web/src/app/sao-paulo/page.tsx`
- Modify: `web/src/app/mapa-do-site/page.tsx`
- Modify: `web/src/app/(site)/precos/page.tsx`
- Modify: `web/src/app/(site)/contato/page.tsx`
- Modify: `web/src/app/(site)/faq/page.tsx`

**Interfaces:**
- Todas as páginas usam `PageHero` para abertura e `SiteSection` para seções.
- Grids usam `InfoCard` quando representam itens equivalentes.
- Conteúdo textual continua com `max-w-3xl`, `text-muted`, `leading-7`/`leading-8`.

- [ ] **Step 1: Migrar `/servicos`, `/areas-atendidas` e `/sao-paulo`**

Substituir classes duplicadas de seções por `SiteSection`; substituir cabeçalhos repetidos por `SectionIntro`; manter conteúdo e dados atuais. Todas devem ter: hero, seção de introdução/listagem, seção warm de orientação, seção de conteúdo, CTA final dark.

- [ ] **Step 2: Migrar `/precos`, `/contato` e `/faq`**

Preservar tabela, formulários e FAQ. Usar `InfoCard` para canais de contato e blocos equivalentes; tabela permanece tabela sem card; FAQ mantém disclosure mas recebe superfície/borda padrão.

- [ ] **Step 3: Ajustar home ao mesmo vocabulário visual**

Manter hero específico da home por ser a conversão principal, mas trocar wrappers de seção por `SiteSection`, alinhar `SectionIntro`, usar somente alternância `surface`/`warm`/`dark` e garantir que grids/cartões usem as mesmas bordas, raios e padding.

- [ ] **Step 4: Migrar mapa do site**

Usar `PageHero`, `SiteSection` e links em `InfoCard`/grid com `border-line`, sem inventar estilo próprio.

- [ ] **Step 5: Rodar build**

Run: `cd web && npm run build`
Expected: build verde com 198 páginas geradas ou número equivalente após a própria build, sem erro de TypeScript.

---

### Task 4: Migrar conteúdo institucional e templates dinâmicos

**Files:**
- Modify: `web/src/app/(site)/sobre-nos/page.tsx`
- Modify: `web/src/app/(site)/orcamento/page.tsx`
- Modify: `web/src/app/(site)/rastreamento/page.tsx`
- Modify: `web/src/app/(site)/avaliacoes/page.tsx`
- Modify: `web/src/app/(site)/entrega-urgente/page.tsx`
- Modify: `web/src/app/(site)/quanto-custa-motoboy-guarulhos/page.tsx`
- Modify: `web/src/app/(site)/melhor-motoboy-guarulhos/page.tsx`
- Modify: `web/src/app/(site)/motoboy-24-horas/page.tsx`
- Modify: `web/src/app/(site)/motoboy-barato-guarulhos/page.tsx`
- Modify: `web/src/app/(site)/politica-privacidade/page.tsx`
- Modify: `web/src/app/(site)/termos-uso/page.tsx`
- Modify: `web/src/app/areas/[slug]/page.tsx`
- Modify: `web/src/app/sao-paulo/[slug]/page.tsx`
- Modify: `web/src/app/servicos/[slug]/page.tsx`
- Modify: `web/src/app/combos/[slug]/page.tsx`
- Modify: `web/src/app/combos/[slug]/ComboWidgets.tsx`
- Modify: `web/src/app/servicos/[slug]/OrcamentoForm.tsx`

**Interfaces:**
- Cada página usa `PageHero` + conteúdo em `SiteSection`; templates dinâmicos não criam um segundo hero.
- Conteúdo editorial usa `max-w-3xl`; painéis de preço/CTA usam `InfoCard` ou `SiteSection tone="warm"`.
- Formulários mantêm campos, ações e mensagens atuais, mudando apenas tokens e classes visuais.

- [ ] **Step 1: Criar padrão editorial para páginas legais/informativas**

Trocar artigos que começam diretamente com `Breadcrumb` por `PageHero compact` seguido de `SiteSection` com `max-w-3xl`. Manter títulos, copy, metadata e JSON-LD.

- [ ] **Step 2: Migrar páginas comerciais curtas**

Aplicar o mesmo hero, uma seção de conteúdo, blocos de informação e CTA final a orçamento, rastreamento, avaliações e landing pages, sem alterar as chamadas de negócio.

- [ ] **Step 3: Migrar templates dinâmicos**

Nos três templates de slug, usar o mesmo `PageHero compact`, breadcrumb dentro do hero e seções padrão. Remover larguras `max-w-4xl` e paddings únicos; usar `max-w-6xl px-4 sm:px-6` e conteúdo interno `max-w-3xl`.

- [ ] **Step 4: Padronizar formulários dinâmicos**

Substituir classes `zinc-*` e superfícies isoladas por `border-line`, `bg-surface`, `bg-surface-warm`, `text-brand-950`, `text-muted`, `focus:border-primary-600` e botões oficiais.

- [ ] **Step 5: Rodar lint, TypeScript e build**

Run: `cd web && npm run lint && npx tsc --noEmit && npm run build`
Expected: PASS.

---

### Task 5: Validação visual página a página

**Files:**
- Create: `web/scripts/visual-smoke.sh`
- Create: `web/scripts/visual-routes.txt`
- Modify: `web/src/app/globals.css` only if a shared visual defect is confirmed.

- [ ] **Step 1: Criar lista de rotas representativas**

Incluir `/`, `/servicos`, `/servicos/motoboy-expresso`, `/areas-atendidas`, `/areas/cumbica`, `/sao-paulo`, `/sao-paulo/bras`, `/precos`, `/contato`, `/faq`, `/sobre-nos`, `/orcamento`, `/rastreamento`, `/politica-privacidade`, `/termos-uso`, `/mapa-do-site` e `/nao-existe`.

- [ ] **Step 2: Criar smoke script do navegador**

Usar Brave headless já disponível via Flatpak para capturar cada rota em viewport desktop `1440x1100` e mobile `390x844`, verificando HTTP 200/404 esperado, ausência de scroll horizontal via script de página e presença de `header`, `main`, `footer`, `h1`.

- [ ] **Step 3: Inspecionar screenshots**

Abrir os screenshots gerados e comparar: hero, breadcrumb, alinhamento do container, alternância de fundos, cards, CTA final, footer e mobile. Corrigir somente em componentes compartilhados quando a diferença aparecer em mais de uma rota.

- [ ] **Step 4: Rodar validação final**

Run: `cd web && npm run lint && npx tsc --noEmit && npm run build`
Expected: todos passam; screenshots não mostram hero estreito, containers desalinhados, cores fora da paleta ou overflow horizontal.

- [ ] **Step 5: Registrar resultado**

Anotar no relatório final as rotas verificadas, viewport desktop/mobile, comandos executados, avisos existentes e qualquer rota que retorne 404 intencional.
