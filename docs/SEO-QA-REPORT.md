# SEO QA REPORT — Moto11 Guarulhos

> Template do AGENTE 10/10 (QA / Links / Performance). Preencher a cada release.
> Escopo: `web/` (Next.js 16). Não rodar `npm run build` em paralelo com outros agentes — usar `tsc --noEmit --skipLibCheck` para validação rápida.

- Data: <!-- YYYY-MM-DD -->
- Responsável: <!-- nome -->
- Commit: <!-- sha -->
- Ambiente: <!-- preview / produção + URL -->

---

## 1. Contagem de URLs (meta: 300)

| Grupo | Rota base | Esperado | Encontrado | Obs |
|---|---|---|---|---|
| Home + hubs | `/`, `/servicos`, `/areas`, `/combos`, `/blog` | 5 | | |
| Serviços | `/servicos/[slug]` | 32 | | ver `SERVICE_SLUGS` em `src/lib/internal-links.ts` |
| Áreas | `/areas/[slug]` | 12 | | ver `AREA_SLUGS` |
| Combos | `/combos/[slug]` | 6 | | ver `COMBO_SLUGS` |
| Blog | `/blog/[slug]` | 20+ | | ver `POST_SLUGS` (+ posts do CMS) |
| Institucionais | `/sobre`, `/contato`, `/orcamento`, `/privacidade`, `/termos` | 5 | | |
| Sitemap total | `/sitemap.xml` | ≥ 80 estático / 300 c/ CMS | | |

Como conferir:

```bash
# URLs cobertas pela matriz de links internos (TS):
npx tsx -e "import('./src/lib/internal-links.ts').then(m => console.log(m.countMatrixUrls()))"
# Sitemap em produção:
curl -s https://SEU-DOMINIO/sitemap.xml | grep -c "<loc>"
```

- [ ] Total no sitemap confere com a tabela (divergência > 5% = investigar)
- [ ] Nenhuma URL com trailing slash duplicada / parâmetro indexado
- [ ] `src/data/*.ts` com 1 slug = 1 URL (sem órfãs)

---

## 2. Unicidade de conteúdo (meta: ≥ 60% único por arquivo)

```bash
node scripts/check-unique.mjs
# detalhe máquina-legível:
node scripts/check-unique.mjs --json
```

| Arquivo `src/data/*` | % único | Par mais similar | Ação |
|---|---|---|---|
| <!-- ex.: services.ts --> | | | |
| <!-- ex.: areas.ts --> | | | |

- [ ] Nenhum arquivo abaixo de 60% de unicidade
- [ ] Nenhum `title` / `description` duplicado (exato ou > 85% similar)
- [ ] H1 único por página contendo a keyword principal

---

## 3. Links internos — matriz hub-and-spoke

Fonte da verdade: `src/lib/internal-links.ts` + `src/components/seo/RelatedLinks.tsx`.

```bash
npx tsx -e "import('./src/lib/internal-links.ts').then(m => { const p = m.auditInternalLinks(); console.log(p.length ? p.join('\n') : 'MATRIZ OK'); })"
```

- [ ] `auditInternalLinks()` retorna vazio
- [ ] Toda página tem 3+ links internos (hub + 2 irmãos/pilares + conversão)
- [ ] Fluxo respeitado: home → serviços → áreas → combos → blog → orçamento
- [ ] Zero âncoras genéricas (`clique aqui`, `saiba mais`, `aqui`, `ver mais`)
- [ ] Toda âncora contém a keyword do destino; nenhum auto-link
- [ ] `RelatedLinks` renderizado no fim de serviço/área/combo/post (sem `currentPath` = auto-link)

---

## 4. Core Web Vitals (targets)

| Métrica | Target | Mobile | Desktop | Fonte |
|---|---|---|---|---|
| LCP | < 2.5s | | | PageSpeed / CrUX |
| INP | < 200ms | | | PageSpeed / CrUX |
| CLS | < 0.1 | | | PageSpeed / CrUX |
| PageSpeed | > 90 | | | Lighthouse |
| FCP | < 1.5s (PRD) | | | Lighthouse |
| TTFB | < 600ms (PRD) | | | Lighthouse |

URLs testadas (mínimo): `/`, 1 serviço, 1 área, 1 post, `/orcamento`.

- [ ] Nenhuma regressão vs. baseline anterior (anexar prints/CSV)
- [ ] Imagens em WebP/AVIF + `srcset` + `lazy` (exceto hero `priority`)
- [ ] Sem layout shift em hero/CTA/float WhatsApp

---

## 5. WCAG 2.1 AA — checklist

- [ ] Contraste texto ≥ 4.5:1 (texto grande ≥ 3:1) — checar com DevTools/Lighthouse
- [ ] Navegação completa por teclado (Tab/Shift+Tab/Enter/Escape); foco sempre visível
- [ ] `alt` descritivo com keyword em toda `<img>` informativa; `alt=""` só em decorativa
- [ ] Hierarquia H1 único → H2 → H3 sem saltos; landmarks (`header`, `main`, `nav`, `footer`)
- [ ] Formulários com `<label>` associado + mensagens de erro por `aria-describedby`
- [ ] Componente `RelatedLinks` usa `<nav aria-label="Links relacionados">`
- [ ] Sem conteúdo dependente só de cor; sem autoplay com áudio
- [ ] Lighthouse Accessibility ≥ 95 nas 5 URLs do item 4

---

## 6. Pré-deploy (obrigatório antes de `vercel --prod` / merge)

> ⚠️ `npm run build` só quando nenhum outro agente estiver escrevendo.

- [ ] `npx tsc --noEmit --skipLibCheck` limpo (anexar saída)
- [ ] `npm run build` passa (anexar últimas 20 linhas)
- [ ] `/sitemap.xml` acessível (200) e contém as URLs da seção 1
- [ ] `/robots.txt` acessível: permite Googlebot, bloqueia `/admin`, aponta p/ sitemap
- [ ] `canonical` absoluto e único por página (sem self-duplicata http/https, com/sem www)
- [ ] OG images: `og:image` absoluta ≥ 1200×630 por página (testar 3 amostras)
- [ ] `alt` em 100% das imagens (grep: `<img` sem `alt` = 0)
- [ ] Schema.org válido: LocalBusiness + Service + BreadcrumbList + FAQPage + Review ([Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Meta `title` 50–60 chars e `description` 120–160 chars únicos por página
- [ ] WhatsApp float + formulário de orçamento funcionais no mobile

---

## 7. Resultado

- [ ] ✅ APROVADO — pode ir a prod
- [ ] ⚠️ APROVADO COM RESSALVAS — itens pendentes: <!-- listar -->
- [ ] ❌ REPROVADO — bloqueadores: <!-- listar -->

Assinatura: ______________________ Data: __________
