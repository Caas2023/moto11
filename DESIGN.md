# Regra visual das páginas Moto11

Toda página renderizada deve usar o mesmo sistema visual; o conteúdo pode variar, a apresentação não.

## Obrigatório
- `Header`, `Footer` e botão de WhatsApp globais.
- Um único `h1` no `PageHero` ou no hero da home.
- Hero com a imagem `/images/hero-moto11.png`, sobreposição azul-noturno, rótulo laranja, largura total e conteúdo limitado a `max-w-6xl`.
- Conteúdo com a mesma grade, cores (`surface`, `surface-warm`, `brand-950`), bordas `line`, botões arredondados e CTA verde.
- Hero, CTA e seções responsivos; nenhuma variação de fonte, cor primária ou estilo de card por página.

## Implementação
- Para qualquer rota nova, importar `PageHero` de `@/components/site/PageHero`.
- Não recriar um hero com cores, imagem, raio, espaçamento ou tipografia próprios.
- A home pode manter o cartão de cotação ao lado do hero; as demais páginas usam o mesmo fundo e composição de `PageHero`.
- URLs que só redirecionam não precisam de layout próprio.

## Exceções
- Páginas legais e 404 usam a versão `compact` do mesmo componente.
- Uma exceção visual precisa ser aprovada antes de entrar no código.
