# Planejamento de melhoria — Design e SEO

## Objetivo

Melhorar confiança, clareza e conversão no WhatsApp sem ampliar o site antes de corrigir navegação, conteúdo e sinais técnicos já existentes.

## Prioridade 1 — Base técnica e confiança

- [ ] **Consolidar a raiz como única aplicação:** remover ou arquivar o projeto duplicado em `web/` após confirmar o deploy atual. → **Validar:** uma única origem para `src/`, `next.config.ts` e `package.json`.
- [ ] **Limpar qualidade do código:** limitar o ESLint ao projeto ativo e remover imports não usados. → **Validar:** `npx eslint src` e `npx tsc --noEmit` sem erros ou avisos.
- [ ] **Validar promessas comerciais:** revisar com o responsável rastreamento, SLA, baú de 20 kg, materiais de saúde, transporte de valores, espera e atendimento fora do horário. → **Validar:** toda afirmação publicada possui confirmação operacional; retirar o que não puder ser comprovado.
- [ ] **Revisar geografia e dados locais:** confirmar municípios, bairros, vias e coordenadas aproximadas das 80 páginas locais. → **Validar:** cada página informa a cidade correta e seu schema repete o mesmo território.

## Prioridade 2 — Redesign orientado à conversão

- [ ] **Simplificar o topo e a navegação:** manter em uma linha “Serviços”, “Áreas”, “Preços”, “Sobre” e “Contato”, com uma única ação “Pedir cotação”. → **Validar:** menu cabe em 1024 px, funciona por teclado e o CTA permanece visível no mobile.
- [ ] **Enxugar a home:** hero com promessa, horário, WhatsApp e formulário; depois processo, serviços, cobertura, prova operacional e FAQ. Remover seções repetidas e textos que não ajudam a contratar. → **Validar:** hero e CTA aparecem na primeira tela em 390 px e 1366 px.
- [ ] **Padronizar o sistema visual:** preservar azul e laranja da marca, definir uma escala de tipografia, espaçamento, bordas, botões e estados de formulário em `DESIGN.md`/`globals.css`. → **Validar:** não há variações acidentais de cor, raio, largura ou rótulo entre páginas.
- [ ] **Melhorar os formulários:** exigir origem, destino e item; evitar texto truncado; mostrar foco, erro e fallback real para WhatsApp. → **Validar:** fluxo completo por teclado, leitor de tela e viewport de 320 px.
- [ ] **Usar prova real, não decoração:** adicionar fotos próprias da operação e exemplos autorizados de comprovante; não criar avaliações, números ou selos fictícios. → **Validar:** cada ativo possui origem, autorização e texto alternativo adequado.

## Prioridade 3 — SEO e arquitetura de conteúdo

- [ ] **Fortalecer hubs e links internos:** listar todos os 30 serviços em `/servicos` e relacionar páginas por afinidade real, não pelos primeiros itens do array. → **Validar:** toda URL indexável recebe ao menos um link HTML interno e nenhum link retorna 404.
- [ ] **Resolver sobreposição de intenção:** revisar os grupos “expresso/urgente/same-day”, “coleta/busca/encomendas”, documentos e saúde; consolidar páginas sem diferença operacional. → **Validar:** cada URL mantida responde a uma intenção distinta e possui conteúdo comprovável.
- [ ] **Corrigir metadados e compartilhamento:** manter uma única marca no title, imagem OG/Twitter válida, canonical próprio e sitemap sem páginas `noindex`. → **Validar:** crawl local sem conflito entre canonical, robots e sitemap.
- [ ] **Adicionar evidência de E-E-A-T:** identificar responsável pela operação, explicar limites do serviço e publicar casos reais anonimizados nas páginas prioritárias. → **Validar:** nenhuma página depende apenas de texto genérico ou quantidade de palavras para demonstrar qualidade.
- [ ] **Medir conversão:** registrar cliques de WhatsApp por página e posição, sem enviar dados pessoais; configurar GSC, Bing e GA4/alternativa. → **Validar:** relatório distingue visita, intenção de contato e lead confirmado.

## Prioridade 4 — Verificação final

- [ ] Rodar build, TypeScript, ESLint, crawl de todas as URLs e teste de links.
- [ ] Testar home, serviços, área, preço e contato em 320, 390, 768, 1024 e 1440 px.
- [ ] Executar Lighthouse mobile e acessibilidade; meta: LCP < 2,5 s, INP < 200 ms, CLS < 0,1 e WCAG AA.
- [ ] Conferir schemas em validador externo e publicar somente após comparação visual antes/depois.

## Ordem recomendada

1. Base técnica e promessas.
2. Home, navegação e formulários.
3. Hubs, links e consolidação de conteúdo.
4. Evidências reais e mensuração.
5. Validação e publicação.

## Não fazer agora

- Não criar novas páginas locais, blog, animações complexas, dark mode ou nova biblioteca visual antes de concluir as prioridades 1–3.
- Não usar “mais de 800 caracteres”, schema ou nota própria como prova isolada de qualidade SEO.
