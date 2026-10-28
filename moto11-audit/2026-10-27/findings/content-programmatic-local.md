# Conteúdo programático e SEO local: auditoria de 27/10/2026

## Veredito e limites

**Prioridade: corrigir links locais, revisar geografia e comprovar promessas operacionais antes de ampliar cobertura.** Existem 80 registros locais e 30 serviços, não apenas páginas que trocam nomes. Há textos e FAQs distintos, mas distinção textual não comprova experiência operacional, correção geográfica ou utilidade própria de cada URL.

Auditoria somente leitura do código e relatórios existentes. Única gravação: este relatório novo. Não houve alteração de aplicação, publicação, build, testes de atendimento, consulta ao GBP, GSC, GA4, SERPs ou validação documental da empresa. Contagens descrevem o working tree atual, não o deploy nem páginas efetivamente indexadas. Referências abaixo são relativas à raiz `/media/caas/HD_1TB/SITE MOTO11`.

O gate de 50+ páginas locais fica aplicado à **expansão automática**, não ao diagnóstico das 80 existentes. Nenhuma penalidade, ação manual, perda de ranking ou canibalização efetiva é declarada. Também não se usa quantidade de caracteres como prova de qualidade. Sem nota composta: faltam dados externos e critérios calibrados que sustentem um número.

## 1. Inventário reproduzível

Método: leitura dos arquivos; transpilações TypeScript em memória com `typescript.transpileModule` e execução dos módulos de dados isolados com `vm`; comparação de valores com `JSON.stringify`; verificação dos slugs relacionados contra os respectivos conjuntos. Sem geração de páginas. Igualdade exata abaixo não significa similaridade semântica nem percentual de texto exclusivo.

| Fonte atual | Registros | Destino e evidência |
|---|---:|---|
| `neighborhoods-gu.ts` | 40 | Array começa em `src/data/neighborhoods-gu.ts:24`; último registro em `:1196`; rotas geradas em `src/app/areas/[slug]/page.tsx:29-33`. |
| `neighborhoods-sp.ts` | 40 | Array em `src/data/neighborhoods-sp.ts:24-1223`; geração em `src/app/sao-paulo/[slug]/page.tsx:29-33`. São 35 destinos da capital e cinco municípios: Barueri, São Caetano, Santo André, São Bernardo e Osasco (`:1196`, `:1076`, `:1106`, `:1136`, `:1166`). |
| `services.ts` | 30 | Array `src/data/services.ts:22-1702`; geração em `src/app/servicos/[slug]/page.tsx:27-31`. |
| `business.ts` | 1 negócio; 16 cidades | `BUSINESS` em `src/data/business.ts:7-33`; `AREA_SERVED` em `:42-59`. `AREA_SERVED_NAMES` deriva das mesmas cidades, não adiciona registros. |
| `combos.ts` | 63 | Array em `src/data/combos.ts:27-2334`; sem template atual no escopo. `/combos/:slug` redireciona para `/servicos`, `next.config.ts:13`. Não contar como 63 páginas publicadas atuais. |
| `posts.ts` | 50 | `POSTS` em `src/data/posts.ts:47`; 30 registros com `content`, 20 apenas com briefing/metadados. Comentário em `:43` diz conteúdo nos dez primeiros, já desatualizado. `/blog` e `/blog/:slug` redirecionam à home, `next.config.ts:14-15`; não contar 50 artigos atuais. |
| `reviews.ts` | 30 | `src/data/reviews.ts:14-285`; sem importador encontrado em `src` fora do próprio módulo. São registros de depoimentos, não prova de avaliações públicas. |
| `keywords.ts` | 75 | 20 head + 40 long-tail + 15 BoFu, agregados em `src/data/keywords.ts:125`; conjuntos não devem ser somados de novo ao agregado. |

O sitemap atual enumera **122 URLs candidatas**: 12 estáticas + 30 serviços + 40 áreas + 40 rotas (`src/app/sitemap.ts:7-20,31-51`). Número coincide com relatório antigo, mas não valida sua medição nem sua alegação de indexação. Não há `lastModified` inventado neste sitemap, nem datas reais por registro nas três coleções principais.

### Campos únicos e completude

Contagem de valores distintos por campo, por coleção. Arrays e FAQs comparados como estruturas completas, preservando ordem. Campos obrigatórios presentes e não vazios nos 110 registros; isso não valida fatos.

| Coleção | Valores distintos por campo |
|---|---|
| Guarulhos, 40 registros, 11 campos | `slug` 40; `nome` 40; `zona` 39; `subtitulo` 40; `resumoLocal` 40; `viasPrincipais` 40; `demandasComuns` 40; `particularidadesLogistica` 40; `faq` 40; `bairrosVizinhos` 40. Estrutura em `src/data/neighborhoods-gu.ts:11-21`. |
| São Paulo, 40 registros, 11 campos | `slug`, `nome`, `regiao`, `subtitulo`, `resumoRota`, `eixosViarios`, `demandasComuns`, `orientacaoTransito`, `faq`, `rotasRelacionadas`: 40 cada. Estrutura em `src/data/neighborhoods-sp.ts:11-21`. |
| Serviços, 30 registros, 14 campos | `slug`, `title`, `h1`, `description`, `keywords`, `hero`, `beneficios`, `faq`, `areasAtendidas`, `detalhes`: 30 cada. `tempoMedio`, `precoBase`, `schemaType`: um valor cada. Estrutura em `src/data/services.ts:6-19`; valores padronizados exemplificados em `:60-61,77`. |

Resultados adicionais:

- Guarulhos: 80 blocos principais, `resumoLocal` + `particularidadesLogistica`, todos exatamente distintos; 120 FAQs, 120 perguntas e 120 respostas distintas. Quatro demandas e quatro vizinhos em cada registro. As 160 demandas têm 158 valores distintos; 161 vias têm 116 valores distintos. `zona` repete “Zona Norte Residencial” em Itapetinga e Recreio São Jorge (`src/data/neighborhoods-gu.ts:478,598`).
- São Paulo: 80 blocos principais, `resumoRota` + `orientacaoTransito`, todos exatamente distintos; 120 FAQs, 119 perguntas e 120 respostas distintas. Mesma pergunta de sigilo em Itaim Bibi e Barueri (`src/data/neighborhoods-sp.ts:820,1210`), com respostas diferentes. As 160 demandas têm 157 valores distintos; 176 eixos têm 139. Quatro demandas e quatro relações em cada registro.
- Serviços: 120 FAQs, todas as perguntas e respostas exatamente distintas; 120 benefícios e 120 parágrafos de detalhes, cada item completo exatamente distinto. Mesma frase de solicitação, contudo, aparece em **30/30 serviços**: “Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.” Exemplos em `src/data/services.ts:74,130,186,1698`. Blocos tarifários repetem frases em grupos de cinco, por exemplo `:73,409`. Não confundir parágrafo distinto com ausência de boilerplate.
- Coleções locais não têm campos de fonte, data de verificação, responsável, caso real ou evidência de atendimento (`src/data/neighborhoods-gu.ts:11-21`; `src/data/neighborhoods-sp.ts:11-21`). Serviços também não (`src/data/services.ts:6-19`).

Repetir uma avenida de ligação ou instrução de cotação é legítimo quando necessário. Esses números não sustentam diagnóstico automático de conteúdo inadequado. Não foi produzido percentual semântico de exclusividade, nem aplicado limiar arbitrário como se fosse critério do Google.

## 2. Achados prioritários

### P1. Doze links locais apontam para slugs ausentes no próprio namespace

**Certeza alta no código; impacto esperado: navegação interrompida e ligação territorial incorreta.** Ambos os templates concatenam um prefixo fixo ao slug e desabilitam parâmetros dinâmicos fora da lista (`src/app/areas/[slug]/page.tsx:29-33,353-356`; `src/app/sao-paulo/[slug]/page.tsx:29-33,358-361`). Não há redirecionamentos correspondentes em `next.config.ts:4-16`. Portanto os destinos não são gerados pelo código atual; status HTTP do deploy não foi testado.

**Guarulhos: 3 de 160 relações**

| Origem | Destino gerado ausente | Registro |
|---|---|---|
| `/areas/parque-novo-mundo` | `/areas/vila-maria` | `src/data/neighborhoods-gu.ts:352` |
| `/areas/jardim-vila-galvao` | `/areas/jacana` | `src/data/neighborhoods-gu.ts:562` |
| `/areas/ponta-grande` | `/areas/penha` | `src/data/neighborhoods-gu.ts:1190` |

**São Paulo: 9 de 160 relações**

| Origem | Destinos gerados ausentes | Registro |
|---|---|---|
| `/sao-paulo/penha` | `/sao-paulo/ponta-grande` | `src/data/neighborhoods-sp.ts:171` |
| `/sao-paulo/sao-miguel-paulista` | `/sao-paulo/itaquaquecetuba-divisa`, `/sao-paulo/guarulhos-sul` | `:231-232` |
| `/sao-paulo/tucuruvi` | `/sao-paulo/vila-galvao` | `:532` |
| `/sao-paulo/vila-maria` | `/sao-paulo/parque-novo-mundo` | `:560` |
| `/sao-paulo/jacana` | `/sao-paulo/vila-galvao`, `/sao-paulo/jardim-vila-galvao` | `:590-591` |
| `/sao-paulo/pirituba` | `/sao-paulo/ponta-grande` | `:651` |
| `/sao-paulo/aricanduva` | `/sao-paulo/sao-mateus` | `:1071` |

Parte dos destinos existe na outra coleção; São Mateus não tem registro em nenhuma delas. Correção mínima: usar destinos existentes e pertinentes ou URL explícita para travessia entre coleções. Não criar novas páginas só para preencher a grade.

### P1. Geografia editorial e localização do prestador precisam ser separadas

Parque Novo Mundo é descrito como zona de divisa SP/Guarulhos, cortada pela Marginal Tietê (`src/data/neighborhoods-gu.ts:326-333`), mas template injeta “Guarulhos” em título, canonical textual e `areaServed` de todos os registros (`src/app/areas/[slug]/page.tsx:45-47,91-94,140`). É sinal concreto de classificação a conferir, não prova de filial ou de atendimento local próprio. “Itapetinga” (`src/data/neighborhoods-gu.ts:476-483`) e “Ponta Grande” (`:1166-1173`) também exigem conferência de topônimo e município com fonte cartográfica, antes de manter alegações locais específicas.

O conjunto SP contém quatro municípios, mas todos recebem o mesmo breadcrumb “São Paulo” e `AdministrativeArea` com sufixo “São Paulo - SP” (`src/app/sao-paulo/[slug]/page.tsx:91-99,114-123`). Pode representar estado, mas texto e agrupamento não explicitam essa distinção. Separar capital de municípios metropolitanos e identificar cidade real em dados, heading e schema, sem inventar endereço.

`BUSINESS.geo` é explicitamente centro aproximado de Guarulhos (`src/data/business.ts:16-20`) e vai para `GeoCoordinates` do prestador (`src/components/seo/LocalBusinessSchema.tsx:29-33`). Relatório antigo chama as coordenadas de “oficiais” e a sede de formalmente declarada (`moto11-audit/findings/local.md:6`), sem evidência correspondente. Não apresentar centro municipal como localização operacional verificada.

### P1. Promessas operacionais relevantes não vêm acompanhadas de prova

**Sem comprovação no material inspecionado não significa falsas.** Solicitar confirmação do operador e documentação proporcional antes de conservar formulações absolutas, sobretudo em saúde, transporte de valores e acesso aeroportuário.

| Alegação publicada nos dados/templates | Evidência | Prova mínima ou correção |
|---|---|---|
| Pilotos posicionados, rastreio ao vivo, foto/protocolo em todas as entregas, baú vedado e cumprimento de prazo | `src/data/services.ts:26-40`; template exibe hero e benefícios em `src/app/servicos/[slug]/page.tsx:166,200` | Fluxo demonstrável, exemplo anonimizado de comprovante e limites reais de cobertura. Sem evidência, retirar “garantindo segurança total” e promessa universal. |
| Credenciamento para portarias e EPI/documentação “em dia”; moto assegura SLA industrial | `src/data/neighborhoods-gu.ts:30-38`; `src/data/services.ts:708-712` | Escopo e exigências confirmados por estabelecimento, documentação e treinamento válidos. Acesso não pode ser garantido só pelo modal. |
| Biossegurança, cadeia térmica, conservação e registro de temperatura de amostras | `src/data/services.ts:820,1500,1504,1660,1676`; promessa de confidencialidade vinculada à LGPD em `:1684` | Responsável operacional, procedimentos, treinamento, embalagem, registros e revisão regulatória do transporte efetivamente oferecido. Não tratar menção a LGPD como certificação. |
| Cadeia de custódia de numerário, rotas sigilosas, piloto fixo e eventual escolta coordenada | `src/data/services.ts:1128,1135-1138` | Validar serviço e limites com operador e assessoria competente. Não inferir legalidade de uma categoria genérica ou de “pequenos valores”. |
| Economia “costuma passar de 30%” para escritórios | `src/data/services.ts:662` | Demonstrar cálculo e premissas comparáveis ou remover percentual. |
| Relatos de atendimento no domingo à noite e numa sexta à noite | `src/data/reviews.ts:37,46` | Dados estão sem importador atual; não são contradição publicada atual demonstrada. Antes de reutilizar, conciliar origem e contexto com horário comercial (`src/data/business.ts:25-26`) e página 24h, que informa não atender fora dele (`src/app/(site)/motoboy-24-horas/page.tsx:20-21,50,60`). |

Há ainda preço numérico remanescente de espera, **R$ 0,60/min**, no corpo de coleta e entrega (`src/data/services.ts:297`), apesar de `precoBase` e `tempoMedio` padronizados e da alegação antiga de remoção de valores. Confirmar política atual ou retirar. Substituir valores em campos-resumo não saneia corpo, FAQ ou depoimentos.

## 3. E-E-A-T e SEO local

**Sinais úteis existentes:** identidade e contato acessíveis, telefone consistente nos três templates, horário comercial explícito, instrução de orçamento com origem/destino/item e configuração SAB sem endereço completo público (`src/data/business.ts:7-33`; `src/app/areas/[slug]/page.tsx:68-89`; `src/app/sao-paulo/[slug]/page.tsx:68-89`; `src/app/servicos/[slug]/page.tsx:60-62,128-129`). Isso favorece clareza, não comprova operação nem conformidade do GBP.

**Limites de confiança:**

1. Página institucional descreve atendimento e promete foto do protocolo, nome e documento de recebedor (`src/app/(site)/sobre-nos/page.tsx:35-49,126-141`), mas não oferece casos verificáveis ligados às rotas ou identificação de responsável por revisar as alegações técnicas. A auditoria não exige endereço residencial público de um SAB. Ação proporcional é comprovar quem opera e quais serviços executa, respeitando privacidade.
2. Dados de avaliações incluem nomes abreviados, estrelas e datas, mas não URL de origem, identificador da avaliação nem evidência de consentimento (`src/data/reviews.ts:1-9,16-22`). Exemplos alegam domingo à noite, menos de uma hora e ausência total de atraso (`:28,46`). Sem importadores atuais, não tratar como prova social visível atual nem acusar fabricação. Não republicar como avaliação verificada antes de confirmar origem.
3. Remoção de `aggregateRating` por ausência de dados reais está documentada no componente (`src/components/seo/LocalBusinessSchema.tsx:4-5`). Boa decisão; não reintroduzir nota ou contagem calculada desses depoimentos sem fundamento.
4. Horário, cidades e canais sociais no código não comprovam correspondência com GBP ou citações externas. Não foram verificados propriedade do perfil, área de atendimento real, categoria, avaliações públicas, posição em mapas ou consistência externa do NAP. O relatório antigo não fornece essa comprovação (`moto11-audit/findings/local.md:5-19`).

Não somar autor genérico, data ou schema como prova automática de experiência. `posts.ts:3-5` chama “Equipe Moto11” de E-E-A-T, mas isso é atribuição editorial, não demonstração de operação; tampouco há blog atual para usar como sinal publicado.

## 4. Templates, duplicação e canibalização

### Diferenciação real, mas também estrutura compartilhada

As páginas locais injetam resumo, particularidades de trânsito, demandas, vias e FAQ do registro. Não são somente substituição de bairro. Exemplos: `src/app/areas/[slug]/page.tsx:183,209,256,285,322`; `src/app/sao-paulo/[slug]/page.tsx:189,214,261,290,328`. Esses blocos são benefício editorial potencial, desde que corretos e aprovados pela operação.

Há estrutura repetida, como cotação por WhatsApp, distância viária, prazo comercial e exigências de coleta. Nos serviços, o mesmo pedido aparece em todos os detalhes. Compartilhamento desse tipo não é defeito por si só; remover instruções úteis para buscar um percentual “único” prejudicaria uso. Avaliar por resposta a necessidades distintas, não por tamanho ou troca de sinônimos.

**Metadados:** todos os 40 títulos e descrições GU seguem uma única forma com `area.nome`; SP idem (`src/app/areas/[slug]/page.tsx:44-54`; `src/app/sao-paulo/[slug]/page.tsx:44-54`). São valores finais distintos, mas pouco específicos sobre indústria, aeroporto ou propósito de cada rota. Ajustar somente onde houver atributo confirmado que ajude a decidir. Não chamar de metadados exatamente duplicados.

### Sobreposições de intenção a validar

| Grupo de URLs | Sobreposição observada no código | Decisão mínima proposta |
|---|---|---|
| `/servicos/motoboy-expresso`, `/servicos/entrega-urgente`, `/servicos/same-day` | Entrega rápida, rota direta e urgência, com diferenças de prazo não sempre nítidas. Registros em `src/data/services.ts:24-36,528-540,1312-1324`. | Definir expresso imediato, prioridade urgente e entrega até janela do mesmo dia, se operação realmente oferece três produtos. Caso contrário, consolidar conforme dados de busca/uso. |
| `/servicos/coleta-entrega`, `/servicos/busca-entrega`, `/servicos/entrega-encomendas` | Retirada e entrega de volumes com mesmo fluxo central, `src/data/services.ts:192-204,248-260,1200-1212`. | Escolher proprietária para intenção genérica; manter especialização apenas com diferença comercial verificável. |
| `/servicos/entrega-documentos`, `/servicos/mensageiro`, `/servicos/transporte-malotes`, `/servicos/advogados`, `/servicos/cartorio`, `/servicos/pecas-juridicas` | Documentos e protocolos aparecem em múltiplas modalidades (`src/data/services.ts:136,304,360,1368,1536,1592`). | Separar objeto/serviço de público-alvo. Não publicar variações só porque palavra-chave mudou. |
| `/servicos/motoboy-clinicas`, `/servicos/motoboy-laboratorios`, `/servicos/hospitais`, `/servicos/exames-medicos` | Documentos, amostras e materiais de saúde repetidos; diferenças técnicas precisam de prova (`src/data/services.ts:752,808,1480,1648`). | Separar logística documental de material biológico; manter página especializada só após validação de escopo. |
| `/`, `/servicos`, `/areas-atendidas` e páginas de bairro | Intenção genérica “motoboy Guarulhos” aparece nos keywords locais (`src/app/areas/[slug]/page.tsx:49-53`). | Home proprietária da intenção genérica; hubs navegam; bairro responde cobertura e particularidades verificáveis, sem competir por todas as consultas. |

Isto é **potencial de canibalização**, não diagnóstico de competição nos resultados. Comprovação exige GSC por consulta/URL, período, impressões/cliques e inspeção de resultados. Não aplicar canonical a toda página semelhante: páginas com propósito próprio conservam self-canonical; equivalentes reais pedem consolidação e redirecionamento após inventário de demanda.

### Falhas no mapa e na linkagem

`validateNoCannibalization()` agrupa **keywords por URL** e acusa múltiplos termos destinados à mesma página (`src/data/keywords.ts:136-149`). Isso não detecta páginas diferentes competindo pela mesma intenção; uma URL normalmente pode responder a várias consultas relacionadas. Não foi encontrado chamador no código da aplicação ou configuração de build; comentário que diz “falha o build” (`:13-14`) não está demonstrado. **33 das 75 URLs-alvo não pertencem às 122 rotas atuais**. Incluem blog, combos e slugs antigos de serviços/bairros; algumas são redirecionadas, outras precisam de revisão. Logo, mapa não serve de inventário nem de prova anti-canibalização. Volumes “SEMrush-like” são estimativas de planejamento (`src/data/keywords.ts:29-31`), não extração atual de ferramenta.

Links de “outros serviços” são os primeiros seis do array, excluindo a própria página (`src/app/servicos/[slug]/page.tsx:101-105,328`). Assim, 24 páginas recebem sempre o mesmo conjunto e as primeiras sete concentram esse bloco. Não é recomendação semântica. Correção mínima: lista curta de serviços realmente complementares, sem criar grafo ou motor de recomendação.

Canonicals e indexabilidade têm base coerente: templates usam `buildMetadata` com caminho próprio e `noIndex: false`; helper gera canonical absoluto (`src/lib/seo.ts:21-24,43-48,62-64`). Isso é intenção do código, não teste do HTML servido. Sitemap inclui todos os registros atuais, independentemente de revisão factual (`src/app/sitemap.ts:31-49`). Revisão editorial deve anteceder eventual ampliação; não aplicar noindex em massa como substituto de diagnóstico individual.

## 5. Relatórios anteriores: o que aceitar e o que retirar

Foram lidos relatórios Markdown relevantes, JSON e texto extraído do PDF antigo com `pdftotext` em stdout, sem gravar artefatos intermediários. PDF traz data **15/10/2026** e pontuação **96/100** na capa; repete narrativa dos arquivos Markdown, portanto não é evidência independente.

| Conclusão antiga | Reavaliação atual |
|---|---|
| “Zero Thin Content” por superar 800/1.300 caracteres | Não demonstrada. `moto11-audit/findings/content.md:3-10`, `moto11-audit/FULL-AUDIT-REPORT.md:17-23` e `SEO-STRATEGY.md:20,70` medem extensão, não correção, utilidade, experiência ou intenção. Não existe comprovação ali de piso universal de qualidade imposto pelo Google. |
| Conteúdo único e revisão manual integral | Dados têm alta distinção exata, mas não trazem evidências operacionais. Relatório afirma “checagem manual de 100%”, `moto11-audit/findings/content.md:40-44`, sem amostra documentada, critérios, aprovador ou registro de correções. Links inexistentes e fatos pendentes impedem endossar certificação integral. |
| “122 páginas indexadas” | JSON usa `total_pages_indexed` (`moto11-audit/audit-data.json:7`) sem exportação GSC. Aqui há 122 rotas no sitemap, não contagem de indexadas. |
| Coordenadas “oficiais”, NAP como fonte única e conformidade SAB | `moto11-audit/findings/local.md:5-12` exagera o que código demonstra. Coordenadas são aproximadas, e telefone/cidade estão também hardcoded em templates locais e `src/lib/seo.ts:17-19`. Valores coincidem hoje, mas não derivam todos de `business.ts`. Ocultar endereço de SAB não comprova conformidade completa de perfil externo. |
| Sem preços numéricos e promessas irreais | `moto11-audit/FULL-AUDIT-REPORT.md:45-49` e `moto11-audit/audit-data.json:11-16` não cobrem preço residual (`src/data/services.ts:297`), garantias operacionais e contradições de plantão. |

Manter como constatações de implementação: 40 GU, 40 SP, 30 serviços, sitemap dinâmico e self-canonical no código. Não transportar nota 96, garantias de qualidade ou ausência de risco para nova auditoria. `SEO-STRATEGY.md:64` também não permite concluir penalidade automática por um padrão editorial; não há evidência de ação contra este domínio.

## 6. Plano mínimo, sem expansão automática

1. **Corrigir navegação e classificação territorial.** Resolver as 12 relações ausentes; conferir município/topônimo dos registros sinalizados e separar capital de municípios. Validar todos os 320 destinos e igualdade entre texto e schema. Critério de aceite: nenhum link interno local aponta a rota ausente; identificação territorial aprovada com fonte.
2. **Obter uma aprovação operacional única.** Responsável da empresa revisa horário/plantão, cobertura, rastreamento, protocolos, acesso industrial/aeroportuário, preço de espera e percentuais de economia. Para saúde e valores, validação técnica proporcional antes de oferecer escopo especializado. Critério: manter só promessa demonstrável, com limite claro; nenhum conflito entre FAQ, corpo, página 24h e horário comum.
3. **Revisar cinco grupos de intenção, não reescrever 110 páginas.** Usar tabela de sobreposição; proprietário define diferenças reais de produto. Pedir exportação GSC de consultas e páginas para decidir manutenção ou consolidação. Atualizar mapa antigo e remover falsa garantia do validador. Critério: cada URL preservada tem propósito distinto e destino coerente; não decidir fusão só por texto parecido.
4. **Acrescentar evidência no lugar de volume.** Para páginas locais prioritárias, usar caso anonimizado autorizado, restrição real de acesso, janela de atendimento confirmada ou instrução útil exclusiva, com data e responsável pela revisão. Não criar estatísticas nem casos fictícios. Revisar pelo menos uma página de cada perfil e todas as páginas com alegações sensíveis; se modelo se repetir, corrigir bloco compartilhado uma vez.
5. **Liberar expansão só após revisão.** As 80 páginas existentes continuam auditáveis. Antes de adicionar novas, resolver pendências anteriores, comprovar demanda distinta e registrar fonte local/escopo real. Monitorar GSC, navegação e contatos; não prometer melhoria de ranking, ausência de penalidade ou cobertura operacional sem dados.

**Próximo passo de até dois minutos:** abrir `src/data/neighborhoods-gu.ts:352` e `src/app/areas/[slug]/page.tsx:356` para confirmar primeiro link cruzado incorreto, sem criar página substituta.
