# Auditoria editorial de até 500 páginas

## Objetivo
Auditar candidatas uma a uma, em blocos de 10 minutos, e publicar/indexar apenas as que tiverem informação local própria, comprovada e útil. Não existe meta de “preencher 500 URLs”.

## Cadência
- **1 página = 10 minutos**; 50 páginas = **8h20**; 500 candidatas = **83h20** de revisão efetiva.
- Uma página recebe um status: `indexar`, `noindex`, `301` ou `descartar`.
- A próxima só começa após registrar o resultado da anterior. Não há publicação em lote.

## Equipe de agentes
| Papel | Responsabilidade | Não pode fazer |
|---|---|---|
| Inventário | manter fila, rota, template e status de indexação | aprovar conteúdo |
| Verificação factual | pedir/registrar fonte operacional e data de revisão | supor prazo, cobertura ou serviço |
| Revisão editorial | avaliar utilidade, diferenciação e duplicação | reescrever páginas por troca de localidade |
| QA técnico | validar mobile, CTA, links, metadata, canonical e robots | retirar `noindex` sem aprovação editorial |
| Integrador | aplica somente decisões aprovadas, executa lint/build e atualiza sitemap | publicar páginas reprovadas |

## Roteiro de 10 minutos por página
1. **0:00–2:00 — fato e intenção:** validar cidade/bairro, contato, horário, cobertura e serviço contra uma fonte do negócio.
2. **2:00–4:00 — valor próprio:** identificar a informação que torna a página diferente de outra área; sem diferença material, marcar `noindex` ou `301`.
3. **4:00–6:00 — conteúdo:** remover preço fora de `/precos`, prazo, rastreio, avaliação, equipe ou garantia sem prova.
4. **6:00–7:30 — UX:** testar hero, CTA de WhatsApp/telefone, responsividade e legibilidade.
5. **7:30–8:30 — SEO técnico:** conferir H1, title, description, canonical, Open Graph, links e resposta 200.
6. **8:30–10:00 — decisão:** registrar fonte, revisor, data, status e próxima ação.

## Portões de publicação
### Indexar
Todos: operação local comprovada; conteúdo materialmente distinto; destino útil; contato/condições corretos; revisão humana; canonical e sitemap corretos.

### Manter `noindex`
Rascunho, conteúdo fino/duplicado, localidade ainda não comprovada ou informação operacional pendente. Esta é a condição atual das páginas locais programáticas.

### Redirecionar 301 ou descartar
Mesma intenção de uma URL canônica, serviço não prestado ou página criada somente para capturar a busca por localidade.

## Execução em lotes
| Lote | Candidatas | Tempo | Saída |
|---|---:|---:|---|
| 0 | URLs existentes | 1h | inventário, duplicatas e filas |
| 1 | 50 locais atuais | 8h20 | decisão individual, sem novas URLs |
| 2–10 | até 50 candidatas por lote | 8h20 por lote | apenas URLs aprovadas seguem para implementação |

## Registro obrigatório por URL
`URL | intenção | fonte operacional | diferença local | revisor | data | status | ação | validação`

## Regra Google
O Google não define mínimo de palavras. Conteúdo em escala e páginas doorway são reprovados quando existem principalmente para ranquear, sem valor original ou diferença material entre localidades. Fontes: [conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br), [políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies?hl=pt-br#scaled-content).

## Concluído quando
- [ ] Cada candidata tem registro e decisão individual.
- [ ] Nenhuma página local entra no sitemap ou sai do `noindex` sem os portões de publicação.
- [ ] Cada lote aprovado passa por `npm run lint` e `npm run build` antes do deploy.
