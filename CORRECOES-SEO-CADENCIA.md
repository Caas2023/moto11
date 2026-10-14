# Correções SEO — 1 página a cada 2 minutos

## Objetivo
Revisar cada URL pública em blocos de 2 minutos, removendo erro, promessa sem prova, preço fora de `/precos`, duplicação e falha de navegação. A cadência **não** autoriza publicar conteúdo em massa: páginas locais seguem `noindex` até aprovação editorial.

## Regra de cada bloco (2 minutos)
1. Conferir título, descrição, H1 e link canônico.
2. Remover afirmação, prazo, rastreio, avaliação, equipe ou cobertura sem fonte operacional.
3. Corrigir CTA, telefone, horário e links internos; preço somente em `/precos`.
4. Abrir a URL e registrar: corrigida, pendente de prova ou redirecionada.

## Ordem e tempo estimado
| Minuto | URL | Resultado mínimo verificável |
|---:|---|---|
| 00–02 | `/` | intenção principal, CTA e hero corretos |
| 02–04 | `/servicos` | serviços reais, sem promessas não comprovadas |
| 04–06 | `/precos` | única URL com valores e condições claras |
| 06–08 | `/areas-atendidas` | hub de Guarulhos sem alegação local inventada |
| 08–10 | `/sao-paulo` | hub de rotas sem prazo garantido |
| 10–12 | `/contato` | WhatsApp, telefone e horário funcionam |
| 12–14 | `/faq` | respostas factuais, sem FAQ schema enganoso |
| 14–16 | `/sobre-nos` | somente dados institucionais comprovados |
| 16–18 | `/mapa-do-site` | todos os links respondem e a listagem está completa |
| 18–20 | `/motoboy-24-horas` | corrigir nome/expectativa para o horário real ou redirecionar |
| 20–22 | `/politica-privacidade` | revisar com responsável jurídico; manter `noindex` |
| 22–24 | `/termos-uso` | revisar com responsável jurídico; manter `noindex` |

## Páginas locais — 160 minutos, sem indexação
| Período | URLs | Ação |
|---:|---|---|
| 24–104 | 40 URLs `/areas/[slug]` | 2 min por página: remover dados não comprovados, confirmar `noindex`, checar link e encaminhar para pauta editorial. |
| 104–184 | 40 URLs `/sao-paulo/[slug]` | 2 min por página: remover dados não comprovados, confirmar `noindex`, checar link e encaminhar para pauta editorial. |

## Publicação editorial de uma página local
Uma página local só sai do `noindex` depois de ter: fonte para cada afirmação operacional, informação própria da área, necessidade distinta da página-hub, revisão humana e conteúdo útil suficiente para a intenção da busca. Não há mínimo oficial de palavras do Google.

## Conclusão
- [ ] Todas as 92 URLs navegáveis passaram pela revisão rápida (184 min).
- [ ] As 9 URLs indexáveis passaram por validação visual e `npm run build`.
- [ ] Nenhuma URL local foi indexada por volume, contagem de palavras ou troca de nome de bairro.
