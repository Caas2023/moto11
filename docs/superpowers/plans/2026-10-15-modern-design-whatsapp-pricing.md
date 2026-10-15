# Plano de Implementação: Modernização Visual, Padronização e Cotação WhatsApp

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o site da Moto11 em uma plataforma moderna e padronizada visualmente, eliminando todas as exibições de preços numéricos (R$) e direcionando 100% das cotações de forma guiada para o WhatsApp, validado visualmente com a ferramenta Iris.

**Architecture:** Substituição do antigo `OrcamentoForm` com cálculos numéricos por um novo `CotacaoForm` moderno e reativo que captura Origem, Destino e Categoria com chips rápidos e monta a mensagem codificada para o WhatsApp. Higienização de todas as menções a R$ na Home, Preços e Termos, padronização visual com tokens institucionais (`brand-950`, `primary-700`, `success`) e validação ponta a ponta com screenshots do Iris.

**Tech Stack:** Next.js 16 (App Router), React, Tailwind CSS, Lucide Icons, Iris CLI.

**Spec:** `docs/superpowers/specs/2026-10-15-modern-design-whatsapp-pricing-design.md`

## Global Constraints

- Proibida a exibição de qualquer valor monetário (R$) ou fórmulas numéricas de acréscimo de km nas páginas públicas.
- A rota `/precos` deve ser preservada para manter tráfego e SEO, reposicionada como "Cotação e Preços".
- Cores estritamente padronizadas: `brand-950` (azul escuro institucional), `primary-700/600` (laranja Moto11), `success` (verde WhatsApp).
- Sem dependências npm novas — utilizar componentes nativos, Tailwind CSS e Lucide Icons já instalados.
- Teste visual obrigatório com `/home/caas/.local/bin/iris` em desktop e mobile.

## Review Focus

1. **Campos vazios no formulário:** Se o usuário clicar no botão sem digitar origem/destino, o WhatsApp deve abrir com mensagem de fallback funcional sem quebrar ou mandar `undefined`.
2. **Cliques nos chips de categoria:** A seleção deve alternar instantaneamente com feedback visual claro (borda e fundo ativo) e atualizar a mensagem gerada.
3. **Responsividade no mobile:** O formulário e o hero não podem causar overflow horizontal (`overflow-x: clip`), mantendo botões com área de toque mínima de 44px.
4. **Resquícios de valores numéricos:** Busca textual rigorosa para certificar que nenhum "R$ 35" ou "2,50" permaneceu em textos institucionais ou metadados.
5. **Comportamento em produção:** O comando `npm run build` deve compilar todas as rotas estáticas sem erros de compilação ou hidratação.

---

### Task 1: Criação do Componente `CotacaoForm`

**Files:**
- Create: `src/components/site/CotacaoForm.tsx`
- Consumes: `src/lib/seo.ts` (`PHONE_WA`), `src/components/site/WhatsAppIcon.tsx`
- Produces: `CotacaoForm({ compact?: boolean })`

- [ ] **Passo 1: Criar o componente `CotacaoForm` com chips de categorias e inputs de rota**
- [ ] **Passo 2: Implementar a codificação da URL do WhatsApp com fallback seguro**
- [ ] **Passo 3: Validar a renderização e estados no TypeScript**

---

### Task 2: Redesenhar a Página `/precos` ("Cotação e Preços")

**Files:**
- Modify: `src/app/(site)/precos/page.tsx`
- Consumes: `CotacaoForm`, `PageHero`, `Breadcrumb`, `JsonLd`

- [ ] **Passo 1: Substituir tabelas numéricas e cálculos pelo novo `CotacaoForm` (versão full)**
- [ ] **Passo 2: Redigir o conteúdo explicativo moderno sobre fatores da cotação (rota real, segurança, agilidade)**
- [ ] **Passo 3: Atualizar metadata e Schema JSON-LD sem valores numéricos**

---

### Task 3: Atualizar a Página Inicial (Home) e Termos de Uso

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/(site)/termos-uso/page.tsx`
- Consumes: `CotacaoForm`

- [ ] **Passo 1: Integrar `CotacaoForm compact` no Hero da Home**
- [ ] **Passo 2: Limpar parágrafos editoriais da Home que continham "R$ 35,00" e valores por km**
- [ ] **Passo 3: Ajustar o FAQ da Home orientando cotação sob medida via WhatsApp**
- [ ] **Passo 4: Atualizar os Termos de Uso para refletir o modelo de cotação combinada previamente**

---

### Task 4: Padronização do Header, Footer e Navegação

**Files:**
- Modify: `src/components/site/Header.tsx`
- Modify: `src/components/site/Footer.tsx`

- [ ] **Passo 1: Atualizar o rótulo da navegação para "Cotação e Preços" no Header (desktop e mobile)**
- [ ] **Passo 2: Atualizar o rótulo e links no Footer**
- [ ] **Passo 3: Garantir padronização de botões CTA e contraste visual**

---

### Task 5: Build de Produção e Testes Visuais com Iris

**Files:**
- Output screenshots: `docs/screenshots/`

- [ ] **Passo 1: Executar `npm run build` para validar integridade de todas as páginas**
- [ ] **Passo 2: Iniciar servidor local em background**
- [ ] **Passo 3: Capturar e inspecionar screenshots com `iris` (Desktop e iPhone) para Home e `/precos`**
- [ ] **Passo 4: Analisar as imagens capturadas e validar o design moderno e padronizado**
- [ ] **Passo 5: Commit final das alterações**
