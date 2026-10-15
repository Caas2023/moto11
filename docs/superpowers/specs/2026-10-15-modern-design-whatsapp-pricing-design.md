# Especificação de Design: Modernização Visual, Padronização e Cotação WhatsApp

**Data:** 15 de Outubro de 2026  
**Status:** Aprovado  
**Objetivo:** Transformar o site da Moto11 em uma plataforma moderna, visualmente padronizada e com direcionamento 100% via WhatsApp para orçamentos e preços, eliminando qualquer menção ou cálculo de valores numéricos (R$) públicos na tela.

---

## 1. Contexto e Motivação
O site anterior exibia tabelas numéricas de preços (R$ 35,00 para 0–8 km, +R$ 2,50/km extra, adicionais de espera por minuto) e calculadoras interativas que estimavam valores na tela. Na prática operacional de entregas expressas em Guarulhos e Grande SP:
- Os valores variam por rotas reais, tipo de carga, trânsito e condições de espera (shoppings, aeroporto GRU, cartórios).
- A exibição de valores fixos no site gerava atrito e impedia negociação direta.
- A conversão real acontece quando o cliente entra em contato no WhatsApp com origem, destino e descrição do item.

A meta desta atualização é modernizar o visual, padronizar componentes e cores, e transformar todo ponto de contato sobre preços em um fluxo guiado para o WhatsApp.

---

## 2. Decisões de Arquitetura e Fluxo de Negócio

### 2.1 Eliminação de Valores Numéricos na Interface
- **Regra de Ouro:** Nenhuma página pública exibirá valores em Reais (R$), faixas de preço fixo ("a partir de R$ 35,00") ou fórmulas numéricas de acréscimo de km.
- **Substituição de Mensagem:** A comunicação foca na transparência e velocidade: *"Cotação por rota real calculada na hora, preço fechado antes da coleta e sem taxas surpresa"*.
- **Arquivos Higienizados:**
  - `src/app/page.tsx` (Home)
  - `src/app/(site)/precos/page.tsx` (Página de Cotação)
  - `src/app/(site)/termos-uso/page.tsx` (Termos de Serviço)
  - Textos de FAQ e seções editoriais que mencionavam regras com valores em R$.

### 2.2 Novo Fluxo de Cotação: Componente `CotacaoForm`
Substitui o antigo `OrcamentoForm` (que calculava valores com sliders).
- **Campos de Entrada:**
  1. **Origem:** Bairro ou endereço de coleta em Guarulhos/SP.
  2. **Destino:** Bairro ou endereço de entrega.
  3. **Chips de Categoria (Seleção com 1 clique):**
     - 📄 *Documentos / Malotes*
     - 📦 *Pacotes e Encomendas*
     - 🏢 *Empresas e Rotas Recorrentes*
     - ⚖️ *Cartório, Shopping e Aeroporto*
- **Ação ("Consultar Valor no WhatsApp"):**
  - Monta automaticamente o link `wa.me` com mensagem estruturada:
    > *"Olá! Gostaria de cotar uma entrega da categoria [Categoria Selecionada]. Origem: [Origem informada] / Destino: [Destino informado]. Poderia informar o valor e a previsão?"*
  - Comportamento de fallback: caso o cliente não preencha os campos e apenas clique no botão, abre com mensagem padrão amigável solicitando cotação, garantindo 0% de perda de contato.
- **Variantes do Componente:**
  - `compact`: Versão para o Hero da Home (card flutuante com blur e sombra elegante).
  - `full`: Versão completa para a página `/precos` e páginas internas com explicação de apoio.

### 2.3 Tratamento de SEO da Rota `/precos`
- **Manutenção de URL e Tráfego:** A rota `/precos` é mantida para não quebrar backlinks e aproveitar buscas de intenção transacional no Google ("preço motoboy guarulhos", "tabela motoboy").
- **Novo Posicionamento:**
  - Título da página: *"Cotação e Preços de Motoboy em Guarulhos"*.
  - No menu superior e rodapé: link atualizado para *"Cotação e Preços"*.
  - Em vez de uma tabela estática de preços, apresenta:
    1. O componente de cotação direta para o WhatsApp.
    2. Como o valor de cada corrida é avaliado (distância pela rota de moto, volume/peso, pontos de espera e paradas).
    3. Checklist do que o cliente deve enviar para ter resposta em minutos.
  - JSON-LD estruturado atualizado para tipo `Service` com oferta de cotação sob demanda.

---

## 3. Padronização Visual e Design System

### 3.1 Tokens de Cor e Contraste
- **`brand-950` (`#0b1626`):** Azul marinho escuro profundo para títulos, navbar sticky, rodapé e cards institucionais de alto contraste.
- **`primary-700` (`#c2410c`) & `primary-600` (`#ea580c`):** Laranja vibrante institucional para destaques, selos, ícones temáticos e microinterações.
- **`success` (`#15803d` / `#16a34a`):** Verde WhatsApp oficial, reservado exclusivamente para botões de conversão e cotação imediata.
- **`surface` (`#ffffff`) & `surface-warm` (`#f8fafc` / `#f1f5f9`):** Fundos alternados que criam profundidade e ritmo de leitura sem fadiga visual.
- **`line` (`#e2e8f0`):** Bordas finas e divisórias sutis.

### 3.2 Tipografia e Geometria
- **Títulos:** `font-display` com tracking compacto (`tracking-tight`) e pesos `font-bold` e `font-extrabold`.
- **Cantos:** `rounded-2xl` para cards e containers principais; `rounded-full` para chips e botões de chamada primária.
- **Botões:** Altura mínima de 44px a 48px para facilidade de toque no mobile (WCAG 2.5.5 Target Size).

---

## 4. Componentes e Arquivos Impactados

1. **`src/components/site/CotacaoForm.tsx` (Novo / Substitui `orcamento-form.tsx`)**
   - Criação do formulário moderno com campos de rota e chips de categoria.
   - Remoção de dependências de `quotePrice`, `quoteWait`, `PRICING` numérico.
2. **`src/app/(site)/precos/page.tsx`**
   - Redesenho completo da página de cotação, sem tabelas de R$ fixas, integrada com `CotacaoForm`.
3. **`src/app/page.tsx`**
   - Hero com o novo `CotacaoForm (compact)`.
   - Limpeza do parágrafo editorial com menções a "R$ 35,00" e "+R$ 2,50/km".
   - Atualização do FAQ para orientar cotação no WhatsApp.
4. **`src/components/site/Header.tsx` & `src/components/site/Footer.tsx`**
   - Atualização do link de menu para "Cotação e Preços".
   - Padronização de padding, alinhamentos e foco acessível.
5. **`src/app/(site)/termos-uso/page.tsx`**
   - Adequação da cláusula de remuneração para orçamento combinado previamente via atendimento, sem tabelas numéricas defasadas.
6. **`src/data/pricing.ts`**
   - Desacoplamento ou adaptação para suporte de mensagens e categorias de serviço sem valores numéricos hardcoded na interface.

---

## 5. Critérios de Sucesso e Validação
- **Zero menções numéricas:** Nenhuma busca por "R$ 35" ou valores por km retornará resultados nas páginas do site.
- **Fluxo WhatsApp Operante:** Teste do preenchimento e clique em desktop e mobile com abertura da mensagem correta e codificada no WhatsApp.
- **Acessibilidade e Layout:** 100% responsivo, sem scroll horizontal (`overflow-x: clip`), contrastes de texto conformes WCAG AA.
- **Build Limpo:** `npm run build` executando sem erros de tipagem TypeScript ou quebras de rotas.
