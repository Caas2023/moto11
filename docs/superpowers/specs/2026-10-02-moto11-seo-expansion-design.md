# Especificação Técnica: Expansão SEO e Arquitetura Canônica Moto11 (25 a 500 Páginas)

- **Data**: 2026-10-02
- **Status**: Aprovado para Planejamento
- **Domínio Canônico**: `https://moto11transportes.com.br`
- **Ambiente de Teste/Staging**: `https://moto11-pearl.vercel.app/`
- **Modelo de Negócio**: SAB (Service Area Business) — Motoboy e Motofrete comercial e B2B

---

## 1. Contexto Operacional e Diretrizes de Negócio

### 1.1 Modelo Operacional Real
1. **Sede e Prioridade**: Guarulhos/SP (foco principal e ponto de partida de coletas).
2. **Cobertura Ampliada**: Grande São Paulo (São Paulo Capital, Osasco, ABC e municípios metropolitanos).
3. **Entregas Intermunicipais**: Qualquer cidade do estado de São Paulo mediante orçamento prévio de rota e quilometragem.
4. **Horário de Atendimento**: Exclusivamente horário comercial (segunda a sexta-feira, das 08h às 18h). Proibido qualquer claim de "atendimento 24 horas" ou "plantão noturno".
5. **Cargas Autorizadas**:
   - Documentos, certidões, cartórios e malotes bancários/empresariais.
   - Encomendas leves e pequenos volumes de e-commerce e escritórios.
   - Peças automotivas e peças de trator/agrícolas (limite físico estrito de 20 kg por baú de motocicleta).
   - Coletas em lojas, distribuidores e fornecedores para entrega direta.
6. **Cargas Proibidas**: Proibida expressamente entrega de refeições, comida ou motoboy para aplicativos de restaurantes.

---

## 2. Diagnóstico da Base Atual (232 Páginas no Código)

| Componente | Quantidade | Rota | Situação Atual | Decisão Arquitetural |
|---|---|---|---|---|
| **Páginas Centrais** | 9 | `/`, `/servicos`, `/areas-atendidas`, `/sao-paulo`, `/precos`, `/contato`, `/faq`, `/sobre-nos`, `/mapa-do-site` | HTTP 200 (únicas no sitemap) | **Manter e otimizar** (injetar "motofrete", CNPJ e hero leve). |
| **Bairros Guarulhos** | 40 | `/areas/[slug]` | HTTP 200 com `noIndex: true` | **Manter noindex temporário**; limpar vazamento em `/mapa-do-site`. |
| **Bairros São Paulo** | 40 | `/sao-paulo/[slug]` | HTTP 200 com `noIndex: true` | **Manter noindex temporário**; limpar vazamento em `/mapa-do-site`. |
| **Serviços Individuais** | 30 | `/servicos/[slug]` | Redirecionamento 308 → `/servicos` | **Remover redirect 308** para serviços reais validados. |
| **Combos Comerciais** | 63 | `/combos/[slug]` | Redirecionamento 308 → `/servicos` | **Manter redirect 308** até validação de demanda comercial. |
| **Posts de Blog** | 50 | `/blog/[slug]` | Redirecionamento 308 → `/` | **Manter redirect 308** até implementação do motor de blog. |

---

## 3. Arquitetura Canônica de Rotas e Indexação

### 3.1 Desbloqueio de Rotas em `web/next.config.ts`
- Remover do array `redirects()` a regra curinga `{ source: "/servicos/:slug", destination: "/servicos", permanent: true }`.
- Garantir que `/servicos/[slug]` renderize metadados canônicos com `index: true, follow: true`.
- Manter redirects defensivos:
  - `/combos/:slug` → `/servicos`
  - `/blog/:slug` → `/`
  - `/orcamento` → `/contato`
  - `/avaliacoes` → `/contato`
  - `/rastreamento` → `/contato`
  - `/motoboy-24-horas` (página de esclarecimento institucional sem promessa 24h).

### 3.2 Higienização de `web/src/app/sitemap.ts`
- Incluir no sitemap canônico:
  - 9 páginas centrais.
  - Rotas de serviços individuais autorizadas e com conteúdo único.
- Excluir estritamente do sitemap:
  - Rotas com `noIndex: true` (`/areas/*`, `/sao-paulo/*`).
  - Rotas redirecionadas via 308.

### 3.3 Higienização de `web/src/app/(site)/mapa-do-site/page.tsx`
- Remover do HTML do mapa do site os 80 links diretos para bairros `noindex`.
- Apresentar no mapa do site apenas links para hubs indexáveis e serviços ativos.

---

## 4. Otimização Semântica, E-E-A-T e Confiança

### 4.1 Injeção do Termo Primário "Motofrete"
- Inserir a entidade "motofrete" em H1, H2, títulos e descrições das páginas:
  - Home: `Motoboy e Motofrete em Guarulhos e Grande São Paulo`.
  - Serviços: `Serviços de Motoboy e Motofrete para Empresas e Particulares`.
  - Preços: `Tabela de Preços de Motofrete e Entregas Rápidas`.
- Adicionar no catálogo de serviços a distinção entre corrida avulsa de motoboy e contrato corporativo de motofrete.

### 4.2 Identificação Jurídica e Fiscal
- Adicionar em `src/data/business.ts` e renderizar no `Footer.tsx` e `/contato`:
  - Razão Social oficial.
  - CNPJ oficial (ou placeholder estruturado com aviso de transparência fiscal).
  - Informação de emissão de nota fiscal para faturamento de empresas.
  - Conformidade com regulamentação de transporte urbano de cargas.

### 4.3 Schema JSON-LD (Estruturado)
- Unificar geração em `src/lib/seo.ts` com dados consistentes:
  - `@type`: `LocalBusiness` / `ProfessionalService`.
  - `@id`: `https://moto11transportes.com.br/#empresa`.
  - `geo`: `{"@type": "GeoCoordinates", "latitude": -23.4546, "longitude": -46.5333}`.
  - `areaServed`: lista dos municípios da Grande São Paulo atendidos.
  - `sameAs`: preenchimento com perfis oficiais (sem array vazio).
  - Adição de `BreadcrumbList` em `/servicos`, `/areas-atendidas`, `/sao-paulo`, `/precos`, `/contato`, `/faq`, `/sobre-nos`, `/mapa-do-site`.

---

## 5. Performance e Core Web Vitals (LCP)

- **Ativo Crítico**: `/images/hero-moto11.png` (atualmente 1.89 MB PNG).
- **Ação Técnica**:
  - Comprimir e converter para WebP (< 200 KB).
  - Otimizar carregamento visual do hero na primeira dobra de `src/app/page.tsx`.
  - Evitar bloqueio de renderização no mobile.

---

## 6. Roadmap de Expansão Escalonada em 5 Lotes (25 → 500 Páginas)

```
Lote 1 (Imediato): Base Operacional Desbloqueada (~25 páginas)
  - 9 páginas centrais corrigidas + ~16 serviços individuais de services.ts liberados.
  - Entrada imediata no sitemap e rankeamento de cauda longa de serviços.

Lote 2: Top 20 Polos de Guarulhos Enriquecidos (~45 páginas acumuladas)
  - Seleção dos 20 bairros de maior tráfego (Cumbica, Centro, Macedo, Pimentas, Taboão, Aeroporto, etc.).
  - Adição de conteúdo único >= 60% (polos econômicos, rotas, vias principais).
  - Remoção de noindex e inclusão no sitemap.

Lote 3: Corredores Intermunicipais Estratégicos (~75 páginas acumuladas)
  - Criação de landing pages para rotas intermunicipais:
    Guarulhos ↔ Campinas, Santos, Jundiaí, Sorocaba, São José dos Campos, Osasco, Barueri, ABC.
  - Conteúdo com cálculo de distância, tempo médio estimado e regras de orçamento.

Lote 4: Especialização B2B e Setores Industriais (~125 páginas acumuladas)
  - Páginas de nicho: Entrega para Oficinas Mecânicas, Concessionárias, Distribuidores de Autopeças, Peças Agrícolas, Farmácias, Cartórios, Indústrias.

Lote 5: Escala Regional São Paulo e Cidades do Interior (~500 páginas acumuladas)
  - Matriz programática controlada: cruzamento de tipos de frete B2B com municípios do Estado de SP com mais de 50 mil habitantes.
  - Regra de qualidade: cada página conterá tabela de distância real, tempo de trânsito e CTA de orçamento direto no WhatsApp.
```

---

## 7. Critérios de Validação e Qualidade (TDD / Gates)

1. **Gate Técnico**: `npm run build` deve compilar com zero erros de tipo ou rotas quebradas.
2. **Gate de Canonical**: Todas as páginas indexáveis devem possuir canonical absoluto apontando para `https://moto11transportes.com.br`.
3. **Gate de Sitemap**: URLs presentes no `sitemap.xml` devem retornar HTTP 200 e nunca conter páginas `noindex` ou com redirecionamento 308.
4. **Gate de Rastreamento**: `/mapa-do-site` não deve conter links para páginas marcadas com `noindex`.
5. **Gate de Integridade Operacional**: Nenhuma página deve prometer serviço 24h ou entrega de alimentos.
