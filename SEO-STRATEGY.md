# Estratégia de SEO e Posicionamento Orgânico — Moto11

**Documento Estratégico:** SEO-STRATEGY.md  
**Projeto:** Moto11 — Empresa de Motoboy em Guarulhos/SP  
**Mercado:** Transporte Urbano, Entregas Expressas e Logística de Documentos / Malotes  
**Público-Alvo:** B2B (Empresas, escritórios de advocacia, clínicas, contabilidades, indústrias, comércios locais) e B2C (particulares que demandam entregas urgentes no mesmo dia).

---

## 1. Visão Geral e Posicionamento de Mercado

A **Moto11** posiciona-se no mercado de Guarulhos e Região Metropolitana de São Paulo como uma empresa profissional de motofrete com modelo **SAB (Service Area Business)** e atendimento humanizado **WhatsApp-first**. 

Ao contrário de aplicativos de corrida convencionais que cobram tarifas dinâmicas imprevisíveis e não oferecem protocolo de entrega formal, a Moto11 atende no horário comercial (segunda a sexta, das 8h às 18h), com piloto capacitado, baús vedados de alta capacidade, conferência prévia da rota real por quilometragem viária e emissão de comprovante digital com foto e assinatura.

### Diferenciais Competitivos de Ranqueamento:
1. **Transparência e Previsibilidade:** Preço fechado antes da moto sair, sem taxas ocultas.
2. **Profundidade Territorial:** Presença mapeada e personalizada em todos os 40 bairros de Guarulhos e em 40 destinos de São Paulo.
3. **Especialização por Segmento:** Páginas dedicadas para indústrias, cartórios, hospitais, clínicas, advocacias e e-commerces.
4. **Sem Thin Content:** Todas as 122 páginas indexáveis do site contam com profundidade técnica e semântica expressiva (mínimo de 1.334 caracteres, média de 4.072 caracteres).

---

## 2. Arquitetura de Informação e Estrutura do Site

O site adota uma arquitetura em **Hub-and-Spoke** perfeitamente estruturada para canalizar autoridade temática (Topic Authority):

```
                        [ / ] (Home - Autoridade Central)
                                 |
         +-----------------------+-----------------------+
         |                       |                       |
   [ /servicos ]          [ /areas-atendidas ]      [ /sao-paulo ]
   (Pilar Serviços)       (Pilar Guarulhos)         (Pilar Metropolitano)
         |                       |                       |
   30 páginas              40 páginas              40 páginas
   /servicos/[slug]        /areas/[slug]           /sao-paulo/[slug]
   (Express, Docs,         (Cumbica, Centro,       (Sé, Brás, Tatuapé,
    Malotes, Hospitais)     Vila Galvão, etc.)      Pinheiros, Moema, etc.)
```

### Regras de Interconexão (Internal Linking Mesh):
- Cada página de bairro conecta-se de volta à sua página pilar (`/areas-atendidas`) e ao Hub Central (`/`).
- Cada página de bairro apresenta links contextuais para 4 bairros vizinhos contíguos.
- Cada página de rota metropolitana conecta-se a `/sao-paulo` e a 4 destinos correlatos na capital.
- As páginas de serviços apresentam links cruzados para outras modalidades complementares e formulário de cotação integrado.

---

## 3. Matriz de Intenção de Busca e Conteúdo

| Nível de Intenção | Exemplo de Termo de Busca | Página de Destino | Objetivo de Conversão |
|-------------------|---------------------------|-------------------|-----------------------|
| **BoFu (Fundo de Funil - Transacional)** | *"motoboy cumbica whatsapp"*, *"motoboy urgente guarulhos"* | `/areas/cumbica`, `/servicos/motoboy-expresso` | Início de cotação imediata via WhatsApp. |
| **BoFu (Segmento Especializado)** | *"transporte de malotes empresas guarulhos"*, *"motoboy para cartório"* | `/servicos/transporte-malotes`, `/servicos/cartorio` | Pedido de proposta corporativa ou faturamento mensal. |
| **MoFu (Meio de Funil - Comparativo)** | *"quanto custa motoboy guarulhos"*, *"preço motofrete por km"* | `/precos` | Esclarecimento de critérios e checklist de rota. |
| **MoFu (Cobertura Territorial)** | *"motoboy guarulhos para sao paulo"*, *"motoboy guarulhos tatuape"* | `/sao-paulo`, `/sao-paulo/tatuape` | Validação de rota viária e tempo estimado. |
| **ToFu (Topo de Funil - Informativo)** | *"como funciona motoboy para empresas"*, *"dúvidas entrega moto"* | `/faq`, `/sobre-nos` | Construção de confiança, autoridade e conformidade E-E-A-T. |

---

## 4. Política de Qualidade de Conteúdo e Garantia Anti-Doorway

O Google penaliza redes de páginas de localização ("doorway pages") que apenas trocam o nome da cidade ou bairro sobre um texto idêntico. 

Para a Moto11, a política anti-doorway foi aplicada na raiz do código e dos dados:
1. **Dados Geográficos Reais:** Todas as páginas de bairros utilizam nomes reais de avenidas e eixos viários locais (Dutra, Santos Dumont, Timóteo Penteado, Tiradentes, Papa João Paulo I, etc.).
2. **Contexto Econômico Genuíno:** Diferenciação clara entre zonas industriais (Cumbica, Sadokim, Cidade Satélite), zonas comerciais nobres (Bosque Maia, Vila Augusta), centros jurídicos (Centro, Macedo) e centros populosos (Pimentas, Bonsucesso).
3. **Trânsito e SLAs Realistas:** Alertas reais sobre trânsito em horários de pico, evitando promessas de tempo fixo universais que geram frustração no cliente e avaliações negativas no Google Maps.
4. **Volume Robusto:** Nenhuma página com menos de 1.300 caracteres, superando com folga o piso de 800 caracteres exigido.

---

## 5. Estratégia de Dados Estruturados (Schema.org)

O site implementa uma suíte completa de marcação JSON-LD:
- **LocalBusiness / ProfessionalService:** No `RootLayout`, definindo a identidade da empresa, geo-posicionamento, telefone, horários e área servida ampla.
- **Service Schema:** Nas 30 páginas de serviços e 80 páginas de localização, explicitando o tipo de serviço (`serviceType`) e a abrangência geográfica (`areaServed`).
- **BreadcrumbList:** Garantindo caminho de navegação claro e snippets aprimorados nas SERPs.
- **FAQPage:** Marcação semântica em todas as páginas com acordeões de dúvidas frequentes.

---

## 6. Metas e Indicadores de Desempenho (KPI Targets)

| Indicador (KPI) | Linha de Base (Atual) | Meta 3 Meses | Meta 6 Meses | Meta 12 Meses |
|-----------------|-----------------------|--------------|--------------|---------------|
| **Páginas Indexadas no Google** | 9 páginas | 122 páginas | 122 páginas | 122+ páginas |
| **Páginas com < 800 caracteres** | 0 páginas | 0 páginas | 0 páginas | 0 páginas |
| **Impressões Orgânicas Mensais (GSC)** | ~500 | 8.000 | 25.000 | 60.000+ |
| **Cliques Orgânicos Mensais (GSC)** | ~40 | 450 | 1.800 | 4.500+ |
| **Leads Qualificados no WhatsApp / Mês** | ~25 | 150 | 450 | 1.000+ |
| **Core Web Vitals (CrUX)** | Aprovado | 100% verde | 100% verde | 100% verde |

---

## 7. Próximos Passos e Rotina de Acompanhamento

1. Enviar imediatamente o novo arquivo `/sitemap.xml` no Google Search Console.
2. Solicitar indexação prioritária via ferramenta de Inspeção de URL para `/servicos`, `/areas-atendidas` e `/sao-paulo`.
3. Manter a diretriz de não reintroduzir tabelas ou valores em R$ na interface; qualquer orçamento deve ser conduzido via WhatsApp pelo `CotacaoForm`.
4. Acompanhar mensalmente os termos com maior volume de impressões para identificar novas oportunidades de expansão de conteúdo.
