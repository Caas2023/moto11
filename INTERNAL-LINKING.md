# Ligação interna do site

Este mapa registra a ligação entre páginas publicadas. Hubs, mapa do site e sitemap incluem todas as rotas dinâmicas existentes de serviços e regiões.

| Página de origem | Links internos publicados | Objetivo para o visitante |
|---|---|---|
| `/` | `/servicos`, quatro serviços prioritários, `/areas-atendidas`, `/sao-paulo`, `/faq`, `/precos` | Escolher serviço, consultar cobertura ou iniciar a conversa. |
| `/servicos` | Todas as páginas em `/servicos/[slug]` e `/precos` | Encontrar a modalidade compatível ou enviar outra necessidade pelo WhatsApp. |
| `/servicos/[slug]` | Links definidos na página correspondente e `/precos` | Comparar modalidades e solicitar cotação. |
| `/areas-atendidas` | Todas as páginas em `/areas/[slug]`, `/sao-paulo` e `/precos` | Encontrar a região ou informar outra rota pelo WhatsApp. |
| `/areas/[slug]` | Links definidos na página correspondente, `/servicos` e `/precos` | Continuar pela cobertura local ou escolher um serviço. |
| `/sao-paulo` | Todas as páginas em `/sao-paulo/[slug]`, `/servicos` e `/precos` | Consultar a travessia ou enviar outro destino pelo WhatsApp. |
| `/sao-paulo/[slug]` | Links definidos na página correspondente, `/servicos` e `/precos` | Navegar para destinos relacionados ou para a modalidade de serviço. |
| `/faq` | `/contato` e `/precos` | Tirar dúvida e falar com o atendente. |
| `/contato` | `/precos`, `/servicos`, `/areas-atendidas` | Escolher o próximo passo quando a necessidade estiver indefinida. |
| `/precos` | `/faq` | Preparar a solicitação e falar com o atendente pelo WhatsApp. |

## Regras de manutenção

- Hubs, mapa do site e sitemap devem listar todas as páginas dinâmicas existentes de serviços, áreas e rotas para São Paulo.
- Para necessidades que não correspondam a uma página, apresente a alternativa de avaliação da rota pelo WhatsApp.
- Use âncoras descritivas. Não usar "clique aqui" ou criar links só para repetir palavras-chave.
- Ao criar ou remover uma página dinâmica, atualize os hubs, `src/app/sitemap.ts` e `scripts/test-seo-integrity.cjs`.
- O teste de integridade confirma que hubs, mapa do site e sitemap publicam todas as páginas dinâmicas existentes.
