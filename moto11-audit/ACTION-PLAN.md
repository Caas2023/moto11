# Plano de Ação Priorizado — SEO e Posicionamento no Google (Moto11)

Este plano de ação organiza as iniciativas em 4 fases cronológicas e de impacto, com foco em maximizar o posicionamento orgânico e a geração de leads no WhatsApp para a **Moto11**.

---

## Fase 1: Validação Técnica e Indexação Imediata (Semana 1) — CRÍTICO

- [x] **Eliminação de Thin Content:** Garantir que nenhuma página do site tenha menos que 800 caracteres. *(Concluído: 100% das 122 páginas possuem > 1.300 caracteres, média de 4.072 caracteres).*
- [x] **Enriquecimento semântico de 40 bairros de Guarulhos:** Vias principais, perfis econômicos, dicas logísticas e FAQ local. *(Concluído em `src/data/neighborhoods-gu.ts` e `src/app/areas/[slug]/page.tsx`).*
- [x] **Enriquecimento semântico de 40 rotas para São Paulo:** Eixos viários (Dutra, Ayrton Senna, Marginais), trânsito e rotas intermunicipais. *(Concluído em `src/data/neighborhoods-sp.ts` e `src/app/sao-paulo/[slug]/page.tsx`).*
- [x] **Ativação de 30 páginas de serviços dedicados:** Páginas completas com procedimentos operacionais, limites de carga, SLAs e formulário de cotação. *(Concluído em `src/app/servicos/[slug]/page.tsx`).*
- [x] **Sitemap XML Expandido:** Configuração dinâmica de 122 rotas em `/sitemap.xml`. *(Concluído em `src/app/sitemap.ts`).*
- [ ] **Submissão no Google Search Console (GSC):**
  - Acessar o painel do Google Search Console do domínio `https://www.moto11guarulhos.com.br`.
  - Submeter a URL do sitemap: `https://www.moto11guarulhos.com.br/sitemap.xml`.
  - Solicitar inspeção e indexação da página inicial e das páginas pilares (`/servicos`, `/areas-atendidas`, `/sao-paulo`).
- [ ] **Submissão no Bing Webmaster Tools:**
  - Importar as configurações do GSC para o Bing Webmaster Tools e verificar a leitura do sitemap.

---

## Fase 2: Sinais de Confiança e Google Business Profile (Semanas 2 a 4) — ALTO IMPACTO

- [ ] **Otimização da Ficha do Google Business Profile (GBP):**
  - Nome exato: `Moto11 – Empresa de Motoboy`.
  - Categoria principal: `Serviço de entregas / Empresa de motoboy`.
  - Área de cobertura (SAB): Adicionar explicitamente Guarulhos e as cidades da RMSP (São Paulo, Arujá, Santa Isabel, Itaquaquecetuba, Osasco, Barueri, ABC).
  - Telefone comercial verificado: `(11) 95724-8425`.
  - Horário de atendimento: Segunda a sexta-feira, das 08h00 às 18h00.
  - Link de agendamento/cotação: Apontar diretamente para `https://www.moto11guarulhos.com.br/precos` ou para a Home.
- [ ] **Campanha de Avaliações Reais (Reviews):**
  - Estabelecer rotina pós-entrega: enviar link curto de avaliação do Google para clientes atendidos no WhatsApp.
  - Estimular menção voluntária ao bairro de atendimento (ex: *"Excelente entrega em Cumbica"*, *"Muito rápido no Centro de Guarulhos"*), gerando sinais locais ricos para o algoritmo do Google Maps.

---

## Fase 3: Monitoramento de Rankings e Conversões (Mês 2) — MÉDIO IMPACTO

- [ ] **Acompanhamento de Posições (Rank Tracking):**
  - Monitorar no GSC os cliques e impressões para:
    * `"motoboy guarulhos"`
    * `"empresa de motoboy em guarulhos"`
    * `"motoboy cumbica"` / `"motoboy centro guarulhos"` / `"motoboy bonsucesso"`
    * `"motoboy guarulhos sao paulo"` / `"motoboy guarulhos tatuape"`
    * `"entrega de documentos guarulhos"` / `"transporte de malotes guarulhos"`
- [ ] **Análise de Engajamento por Canal:**
  - Mensurar no WhatsApp a taxa de mensagens iniciadas com o texto pré-preenchido de cada página de bairro ou serviço.
  - Identificar quais bairros geram maior volume de chamados para priorizar campanhas locais.

---

## Fase 4: Otimização Contínua e Inteligência de Busca (Meses 3 a 6) — CONTÍNUO

- [ ] **Otimização para AI Overviews (GEO):**
  - Monitorar menções da marca Moto11 no Google AI Overviews, Perplexity e ChatGPT para consultas como *"qual a melhor empresa de motoboy em Guarulhos para empresas"*.
  - Reforçar trechos em formato de definição direta e listas pontuais sempre que novas demandas surgirem.
- [ ] **Expansão de Parcerias e Citações:**
  - Cadastro em diretórios comerciais locais de Guarulhos (ACE-Guarulhos, portais de bairros, páginas de serviços regionais).
