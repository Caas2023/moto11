# Roadmap editorial para 500 páginas Moto11

## Objetivo
Criar 500 páginas úteis para quem precisa contratar ou planejar uma entrega de moto. Cada URL deve responder uma necessidade própria, ter fonte revisada e ser um destino completo — não uma troca de bairro no mesmo texto.

## Regra editorial
- O Google não exige quantidade mínima de palavras. Meta interna: profundidade suficiente para responder à intenção, normalmente **900–1.500 palavras originais** em páginas guia; páginas de decisão podem ser menores quando resolvem tudo com clareza.
- Nenhuma afirmação de prazo, cobertura, preço, rastreio, equipe, avaliação, segurança, saúde, jurídico ou pagamento entra sem prova operacional registrada.
- Preços ficam somente em `/precos`; as demais páginas levam à tabela ou à cotação.
- Cada página tem autor/revisor, fontes internas, data de atualização e decisão de indexação.

## Arquitetura de 500 URLs
| Grupo | Qtd. | Intenção que a página resolve | Exemplo de URL |
|---|---:|---|---|
| Fundamentos do serviço | 20 | como contratar, itens compatíveis, coleta, entrega, espera, retorno | `/guias/como-solicitar-motoboy` |
| Necessidades e operações | 80 | documentos, pequena encomenda, coleta agendada, múltiplas paradas, empresa | `/guias/coleta-agendada-para-empresas` |
| Setores atendidos | 80 | necessidade logística de um setor real, com limites e fluxo | `/setores/escritorios` |
| Rotas e áreas comprovadas | 100 | orientação própria de uma área/rota efetivamente atendida | `/areas/[slug]` |
| Destinos metropolitanos comprovados | 80 | como cotar e operar uma rota específica entre municípios | `/rotas/[origem]-[destino]` |
| Guias de decisão | 70 | comparar opções, preparar item, evitar erro, definir prazo | `/guias/como-enviar-documentos` |
| Perguntas aprofundadas | 40 | uma dúvida real por URL, com resposta completa e links | `/perguntas/como-funciona-a-espera` |
| Casos e recursos próprios | 30 | processos, checklists, modelos de mensagem e estudos autorizados | `/recursos/checklist-de-coleta` |

**Total: 500.** Os grupos de área e rota só usam localidades com operação comprovada; se a prova não existir, a vaga é preenchida por um guia ou recurso genuinamente útil.

## Estrutura obrigatória de toda página indexável
1. **Hero padrão Moto11** — H1 específico, resumo honesto da intenção e CTA de cotação.
2. **Resposta direta** — 2–4 parágrafos que resolvem a dúvida principal sem exigir outra busca.
3. **Como funciona** — passos concretos: dados necessários, avaliação e confirmação.
4. **Cenário específico** — informação exclusiva da página: fluxo, restrição, origem/destino, tipo de item ou procedimento confirmado.
5. **Limites e cuidados** — o que a página não promete, itens/regras que precisam de confirmação e quando usar outra solução.
6. **Preparação do pedido** — checklist adaptado ao caso: endereços, contatos, item, embalagem, acesso, prazo, retorno.
7. **FAQ próprio** — 3–5 perguntas não repetidas de outra URL.
8. **Próximo passo** — CTA, links para serviço, preços, área/rota relacionada e contato.
9. **Confiança editorial** — revisor, data, fonte interna e aviso de que rota/previsão dependem do pedido quando aplicável.

## Pauta por tipo de página

### 1. Fundamentos do serviço
**Texto:** explicação prática, vocabulário simples, exemplos de pedido bem descrito e erros comuns.  
**Fonte:** regras reais de atendimento, horário e tabela aprovada.  
**Não usar:** “mais rápido”, “melhor”, prazo genérico ou vantagem sem prova.

### 2. Necessidades e operações
**Texto:** problema → informações necessárias → processo → limitações → checklist.  
**Fonte:** procedimento operacional real para aquela necessidade.  
**Exemplo de diferencial:** uma página sobre retorno explica autorizações e espera; uma de múltiplas paradas explica sequência e contatos — não são a mesma página com título diferente.

### 3. Setores atendidos
**Texto:** fluxo de trabalho do setor, documentos/itens compatíveis, pontos de falha e como a solicitação deve ser organizada.  
**Fonte:** cliente/setor realmente atendido, procedimento autorizado ou responsável operacional.  
**Bloqueio:** saúde, jurídico, financeiro, medicamentos, amostras ou valores só entram com procedimento e responsável específicos.

### 4. Áreas comprovadas
**Texto:** motivo real para a área ter página própria, orientação útil de coleta/entrega, restrições comprovadas, como informar endereço e links para hubs.  
**Fonte:** cobertura confirmada, histórico operacional autorizado ou informação local pública relevante.  
**Bloqueio:** não publicar apenas porque o bairro tem volume de busca; sem diferença material, consolidar no hub de Guarulhos e manter `noindex`.

### 5. Rotas metropolitanas
**Texto:** o que muda na rota, dados necessários nos dois lados, acessos/horários que precisam ser confirmados e como evitar falha de recebimento.  
**Fonte:** rota realmente executável; não usar duração fixa sem medição e aprovação.  
**Bloqueio:** não prometer tempo, trânsito, disponibilidade ou entrega no mesmo dia.

### 6. Guias de decisão
**Texto:** método passo a passo, comparação honesta, checklist reutilizável e links para a página de contratação.  
**Fonte:** política operacional, normas públicas quando aplicável e revisão humana.  
**Diferencial:** resolve uma tarefa, não tenta ranquear para uma localidade.

### 7. Perguntas aprofundadas
**Texto:** resposta curta no início, explicação, exceções, checklist e próximo passo.  
**Fonte:** uma pergunta recorrente identificada no atendimento.  
**Bloqueio:** não duplicar o FAQ geral; cada URL precisa aprofundar uma única pergunta.

### 8. Casos e recursos próprios
**Texto:** caso real autorizado ou ferramenta/checklist produzido pela Moto11; contexto, processo, resultado comprovável e limites.  
**Fonte:** autorização do cliente e dados anonimizados quando necessário.  
**Bloqueio:** jamais usar depoimento, métrica, avaliação ou caso inventado.

## Ficha que precisa existir antes de escrever
```text
URL proposta:
Tipo de página:
Pergunta/intenção do cliente:
Diferença material para páginas existentes:
Serviço e localidade confirmados por:
Fatos que podem ser publicados:
Fatos que não podem ser prometidos:
Fontes e data de verificação:
Autor e revisor:
Links internos de entrada e saída:
Decisão: rascunho | noindex | indexar | redirecionar
```

## Fluxo de criação e publicação
1. Registrar ficha e verificar se já existe URL com a mesma intenção.
2. Produzir a pauta específica e reunir fontes.
3. Escrever seguindo a estrutura obrigatória, com texto original.
4. Revisar fatos, duplicidade, tom, links e design padrão.
5. Publicar em `noindex` para QA visual e validação do responsável.
6. Depois da aprovação, remover `noindex`, incluir no sitemap e acompanhar no Search Console.

## Primeiras 30 páginas
Começar por guias e necessidades que não dependem de alegações locais ou dados sensíveis: contratação, dados para cotação, tipos de item, coleta agendada, retorno, múltiplas paradas, entrega de documentos, pequenos volumes, checklist de embalagem, acesso a portaria, prazo desejado, espera, entrega para empresa, envio para pessoa física, rota Guarulhos–São Paulo, preparação de coleta, como informar contato, como pedir cotação, quando usar outra solução e perguntas frequentes aprofundadas.

## Publicação programada
- As 30 primeiras só entram depois de aprovadas individualmente.
- A cadência de “1 a cada 2 dias” pode ser configurada no CMS, mas não substitui a ficha, fontes e revisão.
- Página reprovada não entra na fila: fica em rascunho ou é consolidada/redirecionada.

## Definição de pronto
- A página é útil mesmo sem tráfego de busca.
- Não depende de frase genérica trocando cidade, bairro ou serviço.
- Todos os fatos têm fonte interna ou pública identificada.
- Usa `PageHero` e o padrão de `DESIGN.md`.
- Passa revisão editorial, QA mobile, metadata, links, `npm run lint` e `npm run build`.
