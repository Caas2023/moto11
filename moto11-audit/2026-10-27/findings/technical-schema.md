# SEO técnico, metadados e schemas

Data: 27/10/2026. Escopo: fontes atuais e build local Next.js 16.2.9. Nenhuma medição de produção ou indexação Google.

## Achados verificados

| Prioridade | Evidência | Ação |
|---|---|---|
| Alta | 23 serviços sem link HTML de entrada entre as 122 URLs rastreadas; relação completa em crawl.json. `src/app/servicos/page.tsx:89-96` não oferece links às modalidades; `src/app/servicos/[slug]/page.tsx:102-105` usa seleção fixa dos primeiros seis outros serviços. | Criar entrada contextual pelo hub e substituir relação fixa por afinidade de serviço. Não criar páginas adicionais. |
| Média | `/motoboy-24-horas`, `/termos-uso`, `/politica-privacidade` têm noindex no HTML e estão no sitemap (`src/app/sitemap.ts:16-18`). | Remover esses três registros do sitemap se noindex for intencional. |
| Média | Termos e privacidade herdam canonical da home. Fonte `src/app/layout.tsx:42-44`; confirmado no HTML local. | Canonical próprio ou política sem canonical herdado nessas páginas. Impacto limitado porque são noindex. |
| Baixa | Nenhuma das 122 URLs forneceu og:image no HTML. Twitter anuncia summary_large_image. `src/lib/seo.ts:49-61`, `src/app/layout.tsx:45-57`. | Definir imagem existente, acessível e representativa; verificar preview. Não é bloqueio de indexação. |
| Baixa | Títulos incluem marca manual e template raiz, por exemplo `Motoboy Expresso em Guarulhos | Moto11 | Moto11 Guarulhos`. | Deixar marca em apenas uma camada. |
| Baixa | Helper substitui robots detalhado por index/follow, por merge shallow do Next. `src/lib/seo.ts:62-64`. | Preservar política desejada de previews em cada helper. Não confundir com noindex. |

Os 30 serviços estão no sitemap, porém o conjunto não recebe entrada pelo hub principal. Os primeiros sete recebem links entre serviços; os demais 23 não receberam nenhum link nas páginas rastreadas. XML ainda permite descoberta: não são URLs impossíveis de indexar.

## Verificações positivas

- 122 URLs distintas no sitemap, todas HTTP 200 local: 12 estáticas, 30 serviços, 40 bairros Guarulhos e 40 destinos SP.
- Títulos e descriptions sem duplicatas exatas no conjunto.
- Canonicals próprios nas páginas de negócio rastreadas. Variação com/sem barra na raiz normalizada, não tratada como erro.
- robots.txt permite conteúdo público e declara sitemap absoluto.
- Testados nove redirects locais: sete rotas removidas, `/combos/teste` e `/blog/teste`; todos 308 para destino configurado. 308 é permanente válido. Relevância editorial dos destinos exige revisão; não há soft-404 comprovado.
- `/areas/nao-existe` respondeu 404 no teste local.
- Schemas ativos incluem LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage e ContactPage. Entidade empresarial reutilizada; sem Review/AggregateRating fabricado encontrado no caminho ativo.
- Endereço municipal de SAB não é JSON-LD inválido por si só. Não fabricar endereço de rua nem prometer elegibilidade Google sem validação.
- FAQPage não deve ser promovido como garantia de rich result ou citação AI. Não substituir por QAPage quando não há respostas de usuários.

## Limitações e prevenção

Não executado Schema Validator ou Rich Results Test externo. Não confundir componentes legados sem importação com markup emitido. Serialização JSON-LD deveria escapar `<` antes de receber dados externos; strings locais atuais não demonstram exploração.

Documentação local consultada pelos revisores: generate-metadata (merge shallow), redirects (308), robots/sitemap, json-ld e not-found. Resultados de produção dependem de nova captura pública.
