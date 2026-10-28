# Auditoria SEO Moto11

**Data:** 27/10/2026. **Escopo:** working tree existente, Next.js 16.2.9, build de produção local e revisão de estratégia/programmatic SEO. **Objetivo proposto, pendente de confirmação comercial:** aumentar conversas qualificadas e vendas atribuíveis à busca orgânica.

## Veredito executivo

A base técnica funciona localmente, mas **não há evidência para sustentar a nota histórica 96/100 ou a alegação zero thin content**. Existem falhas verificadas de links internos, descoberta de serviços, alinhamento sitemap/noindex e confiabilidade operacional que devem vir antes da expansão.

Não houve alteração de aplicação, commit, deploy ou publicação externa. Documentos anteriores foram preservados. Todos os novos materiais estão nesta pasta datada.

### Cobertura e resultados

| Verificação | Resultado | O que não significa |
|---|---|---|
| Build atual | Passou; 128 artefatos gerados | Não são 128 páginas indexadas nem nota CWV |
| Sitemap | 122 URLs únicas, todas HTTP 200 local | Não comprova disponibilidade pública ou indexação |
| Inventário | 40 GU + 40 SP + 30 serviços + 12 estáticas | Não comprova atendimento em cada local |
| Links fora do sitemap | 10 destinos distintos HTTP 404 | Não prova perda de tráfego |
| Serviços sem entrada HTML | 23 entre páginas rastreadas | XML ainda pode permitir descoberta |
| Noindex no sitemap | 3 URLs | Não prova que Google as indexou |
| Canonical de legais | 2 apontam à home | Não revela canonical escolhido por Google |
| Metadados | Sem duplicatas exatas de title/description | Não mede competição de intenção |
| Detector de template | 110 páginas; risco heurístico baixo | Não certifica qualidade do corpo |
| Imagem Open Graph | Ausente nas 122 páginas capturadas | Não bloqueia indexação |
| Redirects | 9 testes, todos 308; rota inválida testada 404 | Correspondência editorial ainda precisa revisão |
| Tipos e lint da aplicação | tsc e eslint src next.config.ts passaram | Não equivale ao lint global |
| Lint global | Falhou: 1.167 erros e 11.341 avisos | Inclui scripts de ferramentas em .opencode, não apenas aplicação |

### Limites importantes

- A renderização de `https://www.moto11guarulhos.com.br` falhou com DNS resolution failed neste ambiente. Não concluir que o domínio está indisponível para todas as pessoas. Crawl público e comparação local/deploy não realizados.
- Checagem de fontes de credenciais Google/Matomo/backlinks foi bloqueada pela camada de permissões e não foi contornada. Sem GSC, GA4, CrUX, GBP ou backlinks autenticados.
- Busca de concorrentes não retornou resultados úteis. Não foram inventados cinco concorrentes, volumes, DA, posições ou estimativas de tráfego.
- Sem CWV de laboratório/campo, nota Lighthouse ou fração Agentic Browsing. Capturas locais desktop e viewport estreito disponíveis; não representam ensaio completo de acessibilidade/mobile.
- Não se atribuiu nota global ou programática artificial: usar null para métricas não medidas. A recomendação de não expandir é controle de qualidade, não diagnóstico de penalidade Google.

## Achados prioritários

### Alta: links regionais quebrados

12 de 320 relações locais apontam para slugs ausentes, gerando 10 destinos distintos com 404 local. Exemplos: `/areas/penha`, `/areas/jacana`, `/areas/vila-maria`, `/sao-paulo/guarulhos-sul` e `/sao-paulo/vila-galvao`. Evidência HTTP: `links-outside-sitemap.json`. Origem: templates constroem namespace fixo (`src/app/areas/[slug]/page.tsx:353-356`, `src/app/sao-paulo/[slug]/page.tsx:358-361`). Tabela completa dos 12 registros: findings/content-programmatic-local.md.

Corrigir modelagem para armazenar href ou coleção explicitamente e validar cada relação antes da geração. Nem todo destino ausente exige página nova ou redirect; usar equivalente real, link de hub ou remover relação incorreta.

### Alta: serviços pouco descobertos pela navegação

Hub `/servicos` não apresenta links às 30 páginas individuais. Seleção fixa de outros serviços alcança apenas primeiros sete registros; 23 não recebem links HTML nas 122 páginas rastreadas. Listar modalidades com intenção clara no hub e relacionar por afinidade, preservando URLs. Evidências: `src/app/servicos/page.tsx:89-96`; `src/app/servicos/[slug]/page.tsx:102-105,328-331`; crawl.json.

### Alta: lastro de conteúdo operacional

Dados ativos prometem rastreio ao vivo, coleta em minutos, protocolos e especializações que precisam de aprovação operacional/documental. Há segmentos sensíveis: exames, cadeia térmica, hospitais, credenciamento e transporte de valores. Nada disso foi validado externamente. Não chamar as promessas de falsas sem apuração; exigir evidência, escopo e responsável antes de ampliar exposição.

Geografia também exige revisão: conjunto SP inclui capital e outros municípios; não apresentar todos como bairros da capital. Há exemplos de coordenadas e associações locais potencialmente incorretas. Não gerar endereço/filial fictício para cada página.

### Alta: seleção de categoria inacessível

Botões mudam visualmente sem estado selecionado programático (`CotacaoForm.tsx:93-109,157-172`). Preferir radios nomeados; manter categoria correta na mensagem WhatsApp. Não é apenas SEO: afeta a compreensão da cotação por pessoas e agentes.

### Médias: indexação pretendida e confiança na conversão

- Remover de sitemap as 3 URLs noindex intencionais: `/motoboy-24-horas`, `/termos-uso`, `/politica-privacidade`.
- Corrigir canonical das duas páginas legais, sem transformar conteúdo legal em prioridade de tráfego.
- Contato anuncia janela aberta antes de confirmar abertura e não comprova envio final. Exibir estado honesto e link alternativo.
- Medição de eventos não encontrada nas fontes. Verificar deploy antes de instalar nova solução; medir clique, conversa qualificada e venda separadamente, sem PII no analytics.
- Contraste do CTA completo calculado pelos tokens ≈4,34:1; confirmar CSS computado e atender 4,5:1 para texto normal.
- Contato/preços/sobre não têm main final nas fontes; main do loading no HTML streamed não deve ser confundido com landmark final. Skip link tem alvo atual, hipótese de link quebrado descartada.

### Baixas: polimento e eficiência

Imagem OG ausente, títulos com marca duplicada, Twitter herdado em institucionais, tokens de cor ausentes e categorias truncadas. Medir payload real do hero e fontes antes de otimizar. next/image otimiza a imagem original; 2,18 MB de arquivo-fonte não é transferência medida. next/font auto-hospeda fontes.

## Conteúdo programático

Não é correto resumir o conjunto como simples troca de nome: há descrições e FAQs diferentes. Igualdade de campos e número de palavras não medem exclusividade semântica ou experiência real. Corpo principal bruto local: GU 444–541 palavras; SP 462–553; serviços 1.099–1.210. São indicadores editoriais, não limites impostos pelo Google.

Detector metadata_template: 110 páginas verificadas, zero sinalizadas pelo detector, site_risk=low; método heurístico documentado em metadata-analysis.json. Não invalida outros problemas.

**Gate:** com 80 páginas locais, suspender expansão automática até revisão de geografia, cobertura e valor próprio. Auditar amostra humana inicial de 8–12 páginas estratificadas, revisar todas as promessas sensíveis e corrigir relações do conjunto inteiro. Não aplicar noindex, exclusão ou consolidação em massa sem demanda, links e GSC.

## GEO, schema e autoridade local

Conteúdo pré-renderizado, identificação centralizada, telefone/horário e links reais são pontos positivos. LocalBusiness/WebSite/Service/BreadcrumbList estão no caminho ativo; não se encontrou avaliação fabricada no schema ativo. Não inventar endereço para SAB. FAQPage não é garantia de rich result ou citação AI.

llms.txt/Markdown/WebMCP são opcionais e posteriores a acessibilidade e conteúdo confiável. Ausência não bloqueia Google. Priorizar evidência operacional, cases autorizados, fotos reais e consistência no perfil empresarial. GBP, citações e avaliações externas aguardam acesso/dados.

## Estratégia recomendada

Manter home como intenção principal de motoboy Guarulhos; preços para critérios de cotação; serviços para modalidades; diretórios regionais para cobertura comprovada; sobre/contato para confiança e ação. Validar demanda antes de consolidar variantes de urgência, same-day, courier e motofrete. O mapa antigo de keywords inclui 33/75 URLs fora do inventário: atualizar antes de usá-lo como evidência de canibalização.

Investir primeiro em páginas existentes e dados reais. Crescimento esperado deve ser apresentado como hipótese, nunca promessa numérica sem baseline.

## Entregáveis e rastreabilidade

- ACTION-PLAN.md: dependências, validação e indicadores.
- SEO-STRATEGY.md, SITE-STRUCTURE.md, CONTENT-CALENDAR.md, IMPLEMENTATION-ROADMAP.md e COMPETITOR-ANALYSIS.md: estratégia nova, sem sobrescrever versões da raiz.
- audit-data.json: envelope com métricas desconhecidas explícitas.
- findings/: evidências por especialidade.
- crawl.json, links-outside-sitemap.json, metadata-pairs.json e metadata-analysis.json: dados reproduzíveis.
- home-mobile.png e home-desktop.png: capturas locais inspecionadas.

**Próxima decisão:** aprovar uma fase de correções. Esta auditoria não autoriza alterações de produção, exclusões ou novas páginas.
