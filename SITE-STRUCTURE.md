# Estrutura SEO e jornada

```text
/                         Home / cotação
├── /servicos              modalidades e limites
├── /precos                fonte única de preços
├── /areas-atendidas       hub Guarulhos
│   └── /areas/[slug]      noindex até revisão editorial
├── /sao-paulo             hub metropolitano
│   └── /sao-paulo/[slug]  noindex até revisão editorial
├── /contato               canais e formulário
├── /faq                   objeções e dúvidas
├── /sobre-nos             confiança institucional
└── /mapa-do-site          navegação
```

## Regras

- Sitemap só inclui páginas canônicas indexáveis.
- Rotas legadas apontam 301 para a página mais próxima.
- Não criar URL por cada variação de keyword.
- Links de `/` → `/servicos`, `/precos`, `/areas-atendidas`, `/sao-paulo`, `/faq` e `/contato`.
- Toda página transacional deve levar a cotação sem depender de menu ou rodapé.
- Bairros só devem virar landing indexável com intenção distinta, fatos locais verificáveis e revisão humana.

## Jornada principal

1. Visitante busca serviço/rota.
2. Home ou hub explica escopo e horário.
3. Preços reduz incerteza.
4. CTA abre WhatsApp com campos estruturados.
5. Equipe confirma rota, valor e disponibilidade.

## Schema

- Layout: `LocalBusiness`/`Organization` e `WebSite`.
- Home: `Service` e FAQ visível.
- Contato: `ContactPage` + negócio local.
- FAQ: perguntas visíveis e respostas iguais ao schema.
- Não usar avaliações ou propriedades sem fonte real.
