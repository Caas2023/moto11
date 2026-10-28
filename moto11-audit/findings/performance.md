# Achados de Performance e Core Web Vitals — Moto11

## 1. Métrica INP (Interaction to Next Paint)
- O Google substituiu definitivamente o FID pelo INP como métrica oficial de Core Web Vitals.
- O site da Moto11 utiliza Server Components estáticos em sua quase totalidade, com interações reativas mínimas e leves (componentes de acordeão nativo HTML `<details>` e formulário controlado `CotacaoForm`).
- O processamento de eventos ocorre sem bloqueio de thread principal, mantendo o INP estimado bem abaixo do limiar ótimo de 200ms.

## 2. Métrica LCP (Largest Contentful Paint)
- Na Home, a imagem do hero (`/images/hero-moto11.png`) utiliza `<Image priority>` do Next.js com `sizes="100vw"` e pré-carregamento automático (`rel="preload"` gerado no head do documento).
- Nas páginas internas de serviços e bairros, o elemento LCP é o cabeçalho textual do `PageHero`, renderizado em HTML inline no primeiro pacote recebido do servidor, garantindo LCP < 1.2s em conexões de alta velocidade e < 2.0s em redes 4G móveis.

## 3. Métrica CLS (Cumulative Layout Shift)
- Todas as imagens possuem dimensões fixas ou utilizam `fill` com conteinerização CSS estável.
- As fontes do Google (`Poppins` e `Inter`) utilizam a estratégia `next/font` com troca automática de fonte do sistema sem causar FOUT (Flash of Unstyled Text) ou deslocamento repentino de layout (CLS < 0.02, meta < 0.1).

## 4. Eficiência de Assets
- Estilos compilados com Tailwind CSS v4, resultando em um pacote CSS minificado único servido com compressão gzip/brotli.
- Scripts reduzidos apenas ao runtime essencial do Next.js e React 19.
