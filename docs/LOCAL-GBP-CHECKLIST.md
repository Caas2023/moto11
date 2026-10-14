# Checklist GBP + Local SEO — Moto11 (SAB, Guarulhos/SP)

> Fonte de NAP: `src/data/business.ts`. Nunca hardcodar nome/telefone/áreas em
> Header, Footer ou páginas — importar de lá.

## 1. Perfil da Empresa no Google (GBP) — configuração inicial

- [ ] **Categoria primária:** `Serviço de entregas` (Delivery service).
- [ ] **Categorias secundárias (4):**
  1. `Serviço de mensageiro` (Courier service)
  2. `Serviço de entrega de documentos` / malotes
  3. `Serviço de entrega de comida` (delivery p/ restaurantes — se operar)
  4. `Serviço de logística` / despachante de entregas e-commerce
- [ ] **Tipo SAB:** marcar "atendo clientes no endereço deles", **ocultar endereço**.
  Sem rua/número públicos (SAB). Cidade base: Guarulhos/SP.
- [ ] **Áreas de atendimento:** cadastrar as 16 cidades de `AREA_SERVED`
  (Guarulhos + São Paulo, Arujá, Santa Isabel, Itaquaquecetuba, Poá, Ferraz de
  Vasconcelos, Suzano, Mogi das Cruzes, Osasco, Barueri, Santo André,
  São Bernardo do Campo, São Caetano do Sul, Mauá, Diadema). **Listar cidades,
  nunca "Estado de São Paulo" inteiro** (dilui relevância local).
- [ ] **Telefone:** +55 11 99999-9999 (idêntico ao site, com DDI).
- [ ] **Site:** link GBP → homepage `https://www.moto11.com.br` (UTM opcional
  `?utm_source=gbp&utm_medium=organic`).
- [ ] **Horários:** Seg–Sáb 07:00–22:00; Dom = "emergências" (horário especial
  / "mediante agendamento" + aviso no perfil). Feriados: atualizar horários
  especiais com 7 dias de antecedência.
- [ ] **WhatsApp como canal:** ativar botão de mensagem/chat do GBP com o mesmo
  número; SLA de resposta < 15 min em horário comercial.
- [ ] **Descrição (750 chars):** "Moto11 – Empresa de Motoboy em Guarulhos/SP.
  Entregas expressas, coleta de documentos, malotes, peças e delivery para
  e-commerce e restaurantes. Atendemos Guarulhos e 15 cidades da Grande SP,
  seg a sáb 7h–22h e emergências aos domingos. Orçamento pelo WhatsApp."

## 2. Fotos (mínimo viável → ideal)

- [ ] Logo + capa com nome/telefone/área atendida.
- [ ] 10+ fotos reais: pilotos uniformizados, baús, coletas, comprovantes
      (sem dados de cliente), base/operação.
- [ ] Nomear arquivos com keyword local: `motoboy-guarulhos-entrega.jpg`.
- [ ] Adicionar 2–3 fotos novas por mês (sinal de frescor).

## 3. Rotina semanal (30 min)

- [ ] **1 Post GBP/semana:** oferta, caso real ("40 entregas no Dia das Mães"),
      novidade de área atendida, horário de feriado. Sempre com CTA WhatsApp.
- [ ] **Responder TODOS os reviews em < 24h**, positivos e negativos, com nome
      do cliente + menção ao serviço/bairro (reforça keyword local).
- [ ] **Q&A:** semear 5 perguntas ("Atendem domingo?", "Fazem coleta em
      Itaquaquecetuba?", "Preço de malote fixo?") e responder como empresa.
- [ ] Pedir avaliação a cada serviço concluído (link curto de review no
      WhatsApp); meta: +8/mês até passar de 200.

## 4. Consistência NAP + site

- [ ] NAP idêntico em GBP, site (Header/Footer), Instagram/Facebook e
      diretórios (Apple Maps, Bing Places, Maplink etc.).
- [ ] JSON-LD `LocalBusinessSchema` (ProfessionalService + aggregateRating
      4.9/127) em todas as páginas locais; página `/avaliacoes` com
      `Review` schema e canonical próprio.
- [ ] Citações locais: cadastrar em 5+ diretórios com NAP idêntico.
- [ ] Monitorar "sugestões de edição" do GBP semanalmente (concorrentes
      alteram categoria/horário).

## 5. E-E-A-T (confiança)

- [ ] Página "Sobre": CNPJ, anos de operação, foto da equipe, área atendida.
- [ ] Página `/avaliacoes`: 30 depoimentos com nome/bairro/serviço/data.
- [ ] Política de manuseio (documentos sigilosos, protocolo com foto).
- [ ] Nomes reais + fotos nos reviews quando o cliente autorizar.
