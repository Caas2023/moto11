# Achados de SEO Técnico — Moto11

## 1. Indexabilidade e Rastreabilidade
- **Robots.txt:** Configurado e válido em `/robots.txt` (`src/app/robots.ts`). Permite acesso total dos robôs de busca à raiz (`Allow: /`) e bloqueia áreas de `/api/` e `/admin/`. Inclui link canônico para o sitemap XML.
- **Sitemap XML:** Disponível em `/sitemap.xml` (`src/app/sitemap.ts`), gerado dinamicamente contendo 122 rotas indexáveis (Home, 11 páginas institucionais e pilares, 30 páginas de serviços dedicados, 40 bairros de Guarulhos e 40 rotas para São Paulo). Frequências e prioridades calibradas conforme relevância estratégica.
- **URLs Canônicas:** Todas as páginas possuem tag `<link rel="canonical">` auto-referenciada gerada pelo helper `buildMetadata` em `src/lib/seo.ts`.

## 2. Segurança e Cabeçalhos HTTP
- `next.config.ts` aplica cabeçalhos de segurança obrigatórios para todas as rotas (`/(.*)`):
  - `X-Content-Type-Options: nosniff` (impede MIME-sniffing)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN` (proteção contra clickjacking)
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Cross-Origin-Opener-Policy: same-origin`

## 3. Renderização e Arquitetura Estática (SSG)
- Todas as 122 páginas são pré-renderizadas estaticamente durante o build via Next.js Turbopack.
- Tempo total de compilação: ~1 segundo para todas as 128 rotas estáticas.
- Tempo de resposta inicial (TTFB) otimizado para entrega imediata em CDN.

## 4. Estrutura HTML e Acessibilidade
- `<html lang="pt-BR">` com fontes pré-carregadas (`Poppins` e `Inter`).
- Link de salto para acessibilidade ("Pular para o conteúdo") apontando para `<main id="conteudo-principal">`.
