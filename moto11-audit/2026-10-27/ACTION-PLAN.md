# Plano de ação verificável

Nenhuma correção aplicada. Prioridades são propostas, não prazos contratados. Responsáveis: desenvolvimento (D), operação (O), marketing/SEO (M). Antes de publicar, preservar URLs e histórico e obter aprovação da fase.

| Ordem | Prioridade e tarefa | Fundamento observado | Dependência | Critério que refuta sucesso | Indicador antecipado | Responsável / esforço proposto |
|---|---|---|---|---|---|---|
| 1 | Alta: corrigir 12 relações locais | 10 destinos retornaram 404 | Aprovar destinos reais por coleção | Qualquer link relacionado continuar 404 ou apontar região errada | Relações válidas/total = 320/320 | D+O / 0,5–1 dia |
| 2 | Alta: expor 30 serviços no hub | 23 URLs sem entrada HTML | Classificação de modalidades existentes | Novo crawl continuar sem entrada para serviço destinado à navegação | Serviços com entrada contextual/30 | D+M / 0,5–1 dia |
| 3 | Alta: validar promessas e geografia | Alegações ativas sem prova associada | Documentos e confirmação da operação | Página continuar prometendo capacidade não confirmada | % de alegações com evidência/responsável | O+M / 2–5 dias |
| 4 | Média: sitemap, noindex e canonical legais | 3 noindex no sitemap;2 canonical home | Confirmar intenção de indexação | Sitemap continuar anunciando URL noindex | Zero incompatibilidades em teste automatizado | D / 0,5 dia |
| 5 | Alta/média: categoria, contraste e estado do contato | Estado não anunciado e abertura afirmada antecipadamente | Fluxo de mensagem acordado | Leitor não anunciar categoria; contraste <4,5; janela bloqueada produzir falsa confirmação | Checks teclado/árvore/CSS/fallback aprovados | D / 1–2 dias |
| 6 | Média: definir funil sem PII | Eventos não encontrados nas fontes | Verificar medição no deploy; consentimento/privacidade | Eventos duplicarem ou clique ser contado como venda | Clique → conversa qualificada → orçamento → venda reconciliados | D+M+O / 1–3 dias |
| 7 | Média: baseline público e GSC | DNS ambiente falhou; indexação desconhecida | URL pública acessível e acesso autorizado | Persistirem divergências deploy/código sem registro | Cobertura real por grupo e conversões orgânicas | M / 1–2 dias após acesso |
| 8 | Média: medir e otimizar CWV | Sem LCP/INP/CLS medidos | Deploy e ferramenta de medição | Melhoria de bytes não melhorar métrica-alvo ou piorar experiência | LCP≤2,5s;INP≤200ms;CLS≤0,1 no p75 de campo, se dados disponíveis | D+M / 2–5 dias |
| 9 | Baixa: OG/títulos/previews | 122 sem og:image;marca duplicada | Asset aprovado | Preview permanecer sem imagem correta ou título redundante | Cobertura de previews corretos por template | D+M / 0,5–1 dia |
| 10 | Média: revisar intenção e evidência editorial | 80 páginas locais;mapa antigo desalinhado | Etapas 1–3 e dados de demanda | Nova página não acrescentar valor próprio; competidor de intenção persistir no GSC | Amostra revisada, consultas por landing, leads por grupo | M+O / contínuo |

## Sequenciamento

**Semana 1:** relações, descoberta, sitemap/canonicals, semântica do orçamento. Paralelo: operação aprova promessas e dados locais.

**Semanas 2–4:** baseline público, medição de funil, revisão editorial estratificada, previews e testes mobile com teclado/foco. Não contratar expansão com base em nota histórica.

**Meses 2–3:** otimizações sustentadas por métricas, GBP/citações reais e cases autorizados. Revisar páginas de mesma intenção; consolidar somente com evidências e plano URL a URL.

**Meses 4–6:** decidir expansão em lotes pequenos após gate editorial, cobertura operacional e resultados observados. Não publicar 80 páginas adicionais por multiplicação de palavras-chave.

## Critérios de aceite da primeira fase

- Zero 404 nos destinos relacionados; teste de integridade das coleções incluído na validação.
- 30 serviços navegáveis a partir do hub, com rótulos compreensíveis.
- Sitemap só contém URLs canônicas destinadas à indexação.
- Categoria escolhida anunciada; CTA com contraste adequado; fallback de WhatsApp verdadeiro.
- Promessas sensíveis documentadas ou qualificadas; nenhuma filial/endereço inventado.
- Reexecutar build, tsc, lint da aplicação e crawl; lint global deve ser tratado separadamente e não silenciosamente ignorado.
