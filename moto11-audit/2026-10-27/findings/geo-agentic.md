# GEO e prontidão para agentes

Data: 27/10/2026. Síntese revisada após inspeção de fontes e HTML da build local. Não é teste de produção nem medição de citações AI.

## Base confirmada

- Texto, telefone, horário e links estão presentes no HTML pré-renderizado. Capturas locais confirmaram apresentação da home.
- robots.txt local permite conteúdo público e declara sitemap. WAF e comportamento de agentes na produção não testados.
- Entidade empresarial central e providers dos Service reaproveitam identificação. Endereço público apenas municipal é coerente com SAB; não inventar filial em cada destino.
- Skip link tem destino id=conteudo-principal no HTML atual da home, serviços e páginas institucionais verificadas. Uma suspeita anterior derivada de fonte incompleta foi descartada.

## Prioridades

1. **Alta: verificar promessas.** `src/data/services.ts:26-36,57-58` alimenta páginas ativas com coleta em minutos e rastreio em tempo real. Aprovação operacional deve estabelecer o que existe, em quais horários/modalidades e como demonstrar. Redirecionamento de /rastreamento para contato não prova ausência de ferramenta privada. Não retirar promessa comprovada nem manter promessa sem lastro.
2. **Alta: expor seleção acessível.** `src/components/site/CotacaoForm.tsx:93-109,157-172` usa classes para seleção, sem estado programático equivalente. Preferir radio ou aria-pressed e validar árvore acessível.
3. **Média: estado do contato.** `src/components/site/contact-form.tsx:19-24,96-104`: setEnviado antecede window.open; mensagem afirma janela aberta, sem confirmação. Não equivale a solicitação recebida. Oferecer link alternativo e explicar envio final no WhatsApp. role=status já existe, portanto não recomendar como se ausente.
4. **Média: evidência citável.** Acrescentar informação operacional verificável: limites de pacote, cobertura, horários, como se confirma orçamento, restrições e exemplos autorizados de entregas. Dados estruturados não substituem esses fatos.

## Complementos opcionais

llms.txt, Markdown, ai-catalog.json e WebMCP não foram encontrados nas fontes/public inspecionadas. Ausência não bloqueia Google nem demonstra baixa qualidade. Só avaliar após resolver conteúdo, links e acessibilidade; não criar protocolos vazios nem prometer citação em ChatGPT/AI Overviews.

## Medições indisponíveis

Sem fração Lighthouse Agentic Browsing, árvore de acessibilidade automatizada, posições AI, citações externas, logs de crawler ou métricas GEO. Nenhuma nota artificial atribuída. JSON-LD FAQ não foi tratado como garantia de rich results ou de citação.
