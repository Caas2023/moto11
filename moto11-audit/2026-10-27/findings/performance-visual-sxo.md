# Desempenho, experiência de busca e acessibilidade

Data: 27/10/2026. Fontes atuais e duas capturas da home local: desktop 1440×1000 e viewport estreito 390×844. Viewport desktop estreito não equivale a dispositivo móvel real. Sem Lighthouse, CrUX ou medição de LCP, INP e CLS.

## Achados

1. **Alta — seleção não anunciada.** `src/components/site/CotacaoForm.tsx:93-109,157-172`: estado das categorias expresso por classes sem aria-pressed ou radio nativo. Corrigir semântica e verificar com leitor de tela.
2. **Média — contraste.** CTA completo branco sobre primary-600 (#d24e00), em `CotacaoForm.tsx:179-184`, tem contraste calculado dos tokens de aproximadamente 4,34:1; texto normal requer 4,5:1. Confirmar cor computada e ajustar.
3. **Média — contato anuncia encaminhamento antecipadamente.** `src/components/site/contact-form.tsx:19-24,97-105` muda para estado de enviado antes de window.open. Oferecer link alternativo e distinguir tentativa de abrir conversa de mensagem enviada.
4. **Média — medição não encontrada nas fontes.** CTAs wa.me e window.open sem instrumentação observada. Hospedagem pode injetar medição, o que não foi testado. Registrar evento de intenção com posição/rota/categoria, sem dados pessoais; reconciliar com conversas e vendas reais.
5. **Média — fluxo de contato solicita cadastro sem exigir dados essenciais da rota.** `contact-form.tsx:33-85`. Detalhes opcionais podem gerar pedido sem origem/destino/item. Preferir fluxo coerente de cotação e deixar conversa genérica disponível.
6. **Baixa — categorias truncadas.** Capturas confirmam texto visual incompleto nas opções do formulário compacto. No viewport estreito, botão flutuante ocupa canto direito da região do formulário; captura estática não prova bloqueio de clique ou foco. Testar navegação por teclado e scroll.
7. **Baixa — tokens ausentes.** bg-primary-50 e text-primary-900 usados sem definição localizada em globals.css. Conferir CSS computado antes de atribuir falha visual específica.
8. **Média — landmark nas páginas do grupo.** Contato, preços e sobre retornam seções dentro de div id=conteudo-principal (`src/app/(site)/layout.tsx:3-7`), sem main final. HTML bruto contém main do loading fallback; não contar esse nó temporário como landmark final. Skip link tem alvo no HTML atual: não reportar link quebrado.

## Oportunidades de desempenho a medir

- Hero original PNG: 2.184.030 bytes, 1916×821. `PageHero.tsx:15-23` e home usam next/image com prioridade. Original não é payload transferido; registrar tamanho otimizado e candidato LCP real antes de mudar.
- Next16 depreca priority de Image. Ajustar estratégia de preload/loading/fetchPriority conforme docs e medição, sem pré-carregar indiscriminadamente.
- Root carrega Inter variável e Poppins 500/600/700. Fontes são auto-hospedadas por next/font; não alegar requests Google Fonts em runtime. Medir bytes e uso de pesos.

## Capturas e pontos positivos

Home comunica Guarulhos, horário seg-sex 8h–18h, preço confirmado antes da saída e CTAs WhatsApp/telefone. Formulário está visível e utilizável visualmente nos dois tamanhos capturados. Desktop deixa grande espaço vertical superior; avaliar densidade com teste de conversão, não declarar falha de ranking.

Labels explícitos, número centralizado, links codificados com encodeURIComponent, noopener/noreferrer, reduced-motion e imagens decorativas com alt vazio são positivos. Não foi enviado formulário nem aberta conversa real durante a auditoria.

Próxima validação: categoria anunciada → contraste computado → fallback de contato → foco/teclado/menu mobile → eventos → métricas de rede/laboratório → CWV de campo.
