# Planejamento Estratégico GEO & SEO Moto11
> Generative Engine Optimization (GEO) & Strategic Search Planning
> Data de elaboração: Outubro de 2026 | Alinhado às diretrizes oficiais do Google Search Central (AI Optimization Guide) e políticas contra Scaled Content Abuse.

---

## 1. Diagnóstico e Pontuação Geral de Prontidão

| Dimensão | Score | Status | Observações Críticas |
|---|:---:|:---:|---|
| **Technical SEO & Crawlability** | 94/100 | Excelente | SSR nativo Next.js 16, HTML limpo, sem dependência de renderização JS no cliente. |
| **Passage-Level Citability** | 88/100 | Forte | Blocos autocontidos de 80–150 palavras com fatos numéricos e regras operacionais. |
| **Structured Data (Schema.org)** | 92/100 | Forte | `LocalBusiness` (SAB), `Service`, `Offer`, `FAQPage` e `WebSite` estruturados. |
| **Brand Authority & E-E-A-T** | 76/100 | Em evolução | Alta transparência de preços e horários; pendente expansão de citações externas. |
| **AI Crawler Accessibility** | 98/100 | Liberado | `robots.txt` sem restrições a agentes de IA de busca (Googlebot, OAI-SearchBot, PerplexityBot). |
| **Score Consolidado GEO** | **89/100** | **Pronto** | Alta citabilidade para respostas locais e transacionais em Guarulhos. |

---

## 2. Status dos Rastreadores de IA (Robots.txt)

O arquivo `/robots.txt` da Moto11 adota a política recomendada: permite rastreamento completo na raiz (`Allow: /`) e bloqueia apenas rotas internas de sistema (`/api/`, `/admin/`).

| Rastreador | Entidade | Função | Status no Site | Impacto Prático |
|---|---|---|:---:|---|
| **Googlebot** | Google | Indexação Search e alimentação de AI Overviews / AI Mode | **Permitido** | Elegível para respostas do Google AI Overviews e AI Mode. |
| **OAI-SearchBot** | OpenAI | Citações e respostas no ChatGPT Search | **Permitido** | Totalmente citável nas buscas web do ChatGPT. |
| **PerplexityBot** | Perplexity | Rastreamento para respostas diretas no Perplexity AI | **Permitido** | Citável nas consultas locais e de cotação. |
| **Claude-SearchBot** | Anthropic | Citabilidade em pesquisas web do Claude | **Permitido** | Permitido para busca em tempo real. |
| **GPTBot / ClaudeBot** | OpenAI / Anthropic | Coleta de dados para treinamento de modelos fundacionais | **Permitido** | Sem restrições de treinamento. |
| **Google-Extended** | Google | Treinamento Gemini / Vertex AI | **Permitido** | Não interfere na inclusão nas buscas orgânicas. |

---

## 3. Diretrizes Oficiais Google contra Spam e Scaled Content Abuse

De acordo com o **Google Search Essentials (Spam Policies)** atualizado:

1. **Anti-Scaled Content Abuse:** Criar dezenas ou centenas de páginas geradas em massa com substituição mecânica de nomes de cidades/bairros sem valor agregado próprio viola as diretrizes do Google e gera desindexação algorítmica.
2. **Doorway Pages:** Páginas criadas apenas para capturar cliques de termos locais e redirecionar para um WhatsApp genérico sem responder à intenção do usuário no próprio conteúdo são classificadas como Doorways.
3. **Mito das 800 Palavras:** O Google declara oficialmente que *contagem de palavras não é fator de ranqueamento*. O que determina o posicionamento é a completude da resposta à intenção do usuário. Forçar texto artificial e prolixo é prejudicial.
4. **Aplicação Moto11:**
   - As 9 páginas principais indexáveis concentram o valor e a autoridade da marca.
   - As 80 rotas dinâmicas de bairros (`/areas/[slug]` e `/sao-paulo/[slug]`) permanecem sob diretiva `noindex: true` até que recebam revisão editorial independente e comprovada.
   - Toda página pública indexável possui texto 100% único, sem repetição de blocos inteiros entre URLs.

---

## 4. Otimização por Plataforma de IA (Google AIO, ChatGPT, Perplexity)

### Google AI Overviews & AI Mode
- **Mecanismo:** Recupera páginas indexadas no Top 10 com forte correspondência de intenção, aplicando RAG e fan-out de consultas.
- **Tática Moto11:** Definição clara da resposta nas primeiras 50 palavras de cada seção; tabela de preços transparente com dados exatos (R$ 35 até 8 km, R$ 2,50/km adicional); sem afirmações não verificáveis.

### ChatGPT Search
- **Mecanismo:** Valoriza presença de entidade em registros públicos, citações consistentes de NAP (Name, Address, Phone) e dados objetivos.
- **Tática Moto11:** Metadados estruturados alinhados com `business.ts` e link de cotação direta com formato padronizado de mensagem.

### Perplexity AI
- **Mecanismo:** Focado em respostas rápidas com fontes citáveis, comparativos de preços e passos a passo.
- **Tática Moto11:** Seções em listas ordenadas de procedimentos (coleta, transporte, entrega) e FAQ detalhado com respostas diretas.

---

## 5. Estratégia de Conteúdo e Anti-Repetição (500+ a 800+ Palavras Únicas)

Para garantir que o site tenha densidade semântica sem incorrer em conteúdo duplicado, cada página foca em um pilar distinto da operação:

1. **Home (`/`):** Visão geral da logística urbana em Guarulhos, metodologia de cotação por quilometragem real, comparativo entre motofrete profissional e aplicativos genéricos.
2. **Serviços (`/servicos`):** Especificações de manuseio para documentos, malotes, pequenos volumes, coletas em transportadoras da Via Dutra e regras de acesso ao Aeroporto GRU.
3. **Preços (`/precos`):** Análise detalhada da composição de custos, cálculo de distância viária, política de tolerância de espera (15 minutos), adicionais de horário e destinos especiais.
4. **Áreas Atendidas (`/areas-atendidas`):** Geografia logística do município de Guarulhos, polos industriais de Cumbica e Bonsucesso, corredores comerciais do Centro e Vila Galvão.
5. **São Paulo (`/sao-paulo`):** Desafios das travessias intermunicipais, horários de rodízio, corredores da Marginal Tietê e Radial Leste, janelas de recebimento na capital.
6. **Contato (`/contato`):** Procedimentos para envio de solicitação, campos obrigatórios para orçamento rápido, canais oficiais e segurança na troca de dados.
7. **FAQ (`/faq`):** 10 respostas aprofundadas sobre responsabilidade de carga, limites de peso, notas fiscais, conferência de canhotos e procedimentos de cancelamento.
8. **Sobre Nós (`/sobre-nos`):** Filosofia operacional da Moto11, compromisso com a verdade em horário comercial (8h–18h) e postura contra falsas promessas de atendimento 24h.
9. **Mapa do Site (`/mapa-do-site`):** Guia de navegação completo com arquitetura de informação e direcionamento por tipo de necessidade.
10. **Horário Comercial (`/motoboy-24-horas`):** Esclarecimento educativo sobre segurança do condutor, regulamentação municipal e por que o foco corporativo em horário diurno garante maior pontualidade.
11. **Privacidade (`/politica-privacidade`):** Política completa de proteção de dados (LGPD - Lei 13.709/2018) no manuseio de ordens de serviço e rotas.
12. **Termos de Uso (`/termos-uso`):** Condições gerais de transporte, limites de responsabilidade, materiais proibidos e regras de custódia.

---

## 6. Padrão Visual e Consistência (Impeccable & UI UX Pro Max)

- **Paleta de Cores:**
  - Base Escura: `--brand-950` (`#071A2B`) e `--brand-900` (`#0B2742`).
  - Superfícies Claras: `--surface` (`#FFFCF8`) e `--surface-warm` (`#FFF4E8`).
  - Ação e Destaque: `--primary-700` (`#B93800`) e `--primary-600` (`#D24E00`).
  - Conversão WhatsApp: `--success` (`#147A3D`) em todos os botões de cotação com pulso suave e ícone oficial em SVG.
- **Hero Compacta e Adaptativa:**
  - Altura otimizada em viewport desktop (`min-h-[calc(100svh-4.5rem)] flex items-center`).
  - Conteúdo e card de cotação integrados sem exigir rolagem excessiva para visualização do CTA principal.
- **Acessibilidade:**
  - Alvos de toque de 48px mínimos.
  - Anéis de foco visíveis (`focus-visible:ring-2 focus-visible:ring-success`).
  - `prefers-reduced-motion` desativa animações de pulso para usuários com sensibilidade vestibular.

---

## 7. Roteiro de Validação e Monitoramento

1. **Checagem Técnica Contínua:**
   - Executar `npm run lint` e `npm run build` a cada atualização estrutural.
   - Conferir que o sitemap contém apenas as URLs canônicas indexáveis.
2. **Monitoramento de Citações em IA:**
   - Testar periodicamente prompts transacionais no ChatGPT Search e Perplexity: *"qual o valor de motoboy em Guarulhos para entrega expressa?"*.
   - Acompanhar relatórios do Google Search Console sobre impressões em consultas generativas.
3. **Revisão de Conteúdo:**
   - Manter as regras e tabelas sincronizadas entre os dados centrais (`pricing.ts`, `business.ts`) e o texto das páginas.
