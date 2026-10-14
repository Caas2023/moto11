# Moto11 — Design System

## 1. Direção visual

**Logística urbana premium:** clara, rápida e confiável. A interface deve lembrar
mobilidade e operação profissional sem parecer um aplicativo genérico. O azul-noturno
é a base institucional; o laranja sinaliza movimento e conversão; o creme aquece as
superfícies e diferencia a marca dos sites cinza/vermelho do setor.

## 2. Paleta semântica

| Token | Valor | Uso |
|---|---:|---|
| `--brand-950` | `#071A2B` | Hero, footer, títulos de alto contraste |
| `--brand-900` | `#0B2742` | Superfícies escuras e hover |
| `--primary-700` | `#B93800` | Botões e links sobre fundo claro |
| `--primary-600` | `#D24E00` | Elementos gráficos e destaque |
| `--primary-400` | `#FF8A1F` | Detalhes sobre superfícies escuras |
| `--surface` | `#FFFCF8` | Fundo principal |
| `--surface-warm` | `#FFF4E8` | Seções alternadas |
| `--ink` | `#10212F` | Texto principal |
| `--muted` | `#526473` | Texto secundário (AA em fundo claro) |
| `--border` | `#D9E0E5` | Divisores e campos |
| `--success` | `#147A3D` | WhatsApp e confirmação |
| `--warning` | `#A15C00` | Avisos |
| `--danger` | `#B42318` | Erros |

Regra: texto branco só usa `brand-900`, `brand-950`, `primary-700`, `success`
ou `danger`. `primary-400` é decorativo em fundo escuro e não deve receber texto branco.

## 3. Tipografia

- **Display:** Poppins 600/700 — títulos, números e CTAs.
- **Texto:** Inter 400/500/600 — parágrafos, formulários e navegação.
- H1 fluido: `clamp(2.25rem, 6vw, 4.75rem)`, linha 1.02.
- H2 fluido: `clamp(1.75rem, 4vw, 3rem)`, linha 1.12.
- Corpo: 1rem–1.125rem, linha 1.7.
- Largura de leitura: 68–75 caracteres.

## 4. Layout e espaçamento

- Grid-base: 4px; escala principal 8, 12, 16, 24, 32, 48, 64, 96.
- Conteúdo: `max-width: 72rem`; leitura: `max-width: 48rem`.
- Seções: `clamp(3.5rem, 8vw, 7rem)` no eixo vertical.
- Cards: raio 16–24px, borda visível e sombra curta; evitar glassmorphism.
- Touch targets: mínimo 44×44px.

## 5. Componentes

### Botão primário

Fundo `primary-700`, texto branco, altura mínima 48px, raio 999px. Hover em
`brand-950`; foco com anel laranja e offset de 3px.

### Botão secundário

Fundo transparente, borda `brand-900`, texto `brand-950`. Em fundo escuro,
borda branca translúcida e texto branco.

### Cards

Superfície branca/creme, borda `border`, título `brand-950`, detalhes em laranja.
Movimento máximo de 2px no hover e desativado com `prefers-reduced-motion`.

### Formulários

Labels sempre visíveis; placeholder não substitui label. Campo mínimo 48px,
borda 1px e foco com anel `primary-600`.

## 6. Acessibilidade

- WCAG 2.1 AA: 4.5:1 para texto comum e 3:1 para texto grande/componentes.
- Link de salto para `#conteudo-principal`.
- Um H1 por página; sequência lógica de títulos.
- Foco visível global; navegação completa por teclado.
- Movimento respeita `prefers-reduced-motion`.
- Ícones decorativos usam `aria-hidden`; controles têm nome acessível.

## 7. Conteúdo e confiança

- Usar somente telefone, horário, preço e condições confirmados pelo proprietário.
- Não publicar avaliações, garantias, prazos ou métricas sem fonte verificável.
- CTA informa o próximo passo com precisão: “Calcular orçamento” ou “Enviar rota”.
- Horário oficial: segunda a sexta, 8h–18h.
- Tabela oficial: até 8 km por R$ 35; excedente R$ 2,50/km; tolerância de espera
  de 15 minutos e depois R$ 0,60/min; cartórios, shopping e aeroporto sob cotação.

## 8. Responsividade

- Começar em 320px; nenhum scroll horizontal a 200% de zoom.
- Grades: 1 coluna → 2 em 640px → 3 em 1024px quando houver espaço real.
- Hero empilha no mobile; CTAs ocupam largura útil e não ficam lado a lado à força.
- Navegação desktop somente a partir de 1024px; menu mobile mantém alvos de 44px.
