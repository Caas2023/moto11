export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  hero: string;
  beneficios: string[];
  faq: ServiceFaq[];
  tempoMedio: string;
  precoBase: string;
  areasAtendidas: string[];
  schemaType: "Service";
  detalhes?: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "motoboy-expresso",
    title: "Motoboy Expresso em Guarulhos",
    h1: "Motoboy Expresso em Guarulhos com coleta em minutos",
    description:
      "Motoboy expresso em Guarulhos com coleta rápida, rastreio em tempo real e entrega expressa no Centro, Cumbica, Bonsucesso e toda a cidade, com preço fechado.",
    keywords: [
      "motoboy guarulhos",
      "motoboy expresso guarulhos",
      "entrega expressa guarulhos",
      "motofrete guarulhos",
      "entrega rápida guarulhos",
    ],
    hero: "Quando cada minuto conta, o nosso motoboy expresso em Guarulhos coleta o seu pacote em poucos minutos e segue direto ao destino, sem paradas e sem enrolação. Atendemos o Centro, a Avenida Paulo Faccini, o calçadão da Avenida Guarulhos e os corredores comerciais da Tiradentes com pilotos posicionados em pontos estratégicos da cidade. O serviço foi desenhado para documentos, contratos, chaves, pequenos volumes e qualquer item que não pode esperar o próximo dia útil. Você acompanha o deslocamento por rastreio em tempo real, recebe confirmação com foto e protocolo de entrega, e fala com o piloto pelo WhatsApp durante todo o trajeto. Operamos com baú vedado de alta capacidade, capa de chuva e rota otimizada que evita os gargalos da Via Dutra nos horários de pico. É a solução ideal para escritórios, clínicas, lojas e indústrias que precisam de previsibilidade: informamos o tempo estimado antes da coleta e cumprimos o prazo combinado.",
    beneficios: [
      "Coleta ágil em Guarulhos com pilotos distribuídos pelo Centro, Vila Augusta, Pimentas e Cumbica, reduzindo o tempo de espera mesmo nos horários de maior movimento.",
      "Rastreio em tempo real e comprovação de entrega com foto, nome de quem recebeu e horário exato, garantindo segurança total para documentos e objetos importantes.",
      "Rota inteligente que contorna os congestionamentos da Rodovia Presidente Dutra, da Avenida Guarulhos e do entorno do Aeroporto Internacional de Guarulhos.",
      "Atendimento pelo WhatsApp com orçamento imediato, preço fechado antes da coleta e pagamento por Pix, cartão ou faturamento para empresas conveniadas.",
    ],
    faq: [
      {
        q: "Em quanto tempo o motoboy expresso chega para coletar em Guarulhos?",
        a: "O prazo é informado no orçamento em horário comercial, conforme o bairro de coleta e o trânsito do momento — sempre confirmado antes de você fechar o pedido.",
      },
      {
        q: "Qual o valor da entrega expressa de moto em Guarulhos?",
        a: "Seguimos a tabela real Moto11: 0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra, com 15 min de tolerância de espera (+R$ 0,60/min após). Você recebe o valor fechado no WhatsApp antes da coleta, sem taxa surpresa e com recibo digital ao final da entrega.",
      },
      {
        q: "O que pode ser transportado no motoboy expresso?",
        a: "Documentos, contratos, procurações, chaves, celulares, peças pequenas, medicamentos, marmitas corporativas e encomendas de até 20 kg que caibam no baú. Não transportamos dinheiro em espécie acima de valores simbólicos, armas, produtos ilícitos ou itens frágeis sem embalagem adequada.",
      },
      {
        q: "Vocês entregam fora de Guarulhos, em São Paulo e região?",
        a: "Sim. Fazemos rotas expressas de Guarulhos para São Paulo, Osasco, Barueri, São Caetano, Arujá, Santa Isabel e cidades do Alto Tietê. O prazo e o valor são calculados por rota, e o cliente acompanha tudo pelo rastreio até a baixa definitiva no destino.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Jardim Maia",
      "Cumbica",
      "Bonsucesso",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Um escritorio no Centro precisa colher uma assinatura de contrato no Jardim Maia antes do almoco e nao pode deslocar ninguem da mesa. voce descreve o item e os dois enderecos no WhatsApp; recebe valor e previsao; o piloto mais proximo assume; coleta com foto; segue direto sem paradas; entrega com foto, nome de quem recebeu e horario. A rota usa Os pilotos ficam posicionados entre a Avenida Paulo Faccini, a Tiradentes e o calcadao da Dom Pedro II, escapando dos gargalos da Via Dutra pelo Anel Viario.",
      "Sobre limites, vale o recorte honesto: estao incluidos documentos, contratos, chaves, celulares, remedios e volumes ate 20 kg que caibam no bau vedado, com rastreio e protocolo por mensagem. Ja ficam de fora volumes acima de 20 kg, dinheiro em especie de valor relevante, armas, ilicitos e frageis sem embalagem adequada.",
      "No horario comercial de segunda a sexta, das 8h as 18h, coletas no Centro e na Vila Augusta costumam ser assumidas rapidamente; bairros afastados como Bonsucesso e Cabucu pedem margem maior, e o prazo exato e informado como exemplo de orcamento antes da confirmacao. Pela tabela real Moto11, o calculo e R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra acima disso. Como exemplo de orcamento: 5 km sai R$ 35,00; 10 km sai R$ 40,00; 15 km sai R$ 52,50; 20 km sai R$ 65,00. A espera tem 15 minutos de tolerancia e, apos esse periodo, R$ 0,60 por minuto. Destinos com coleta ou entrega em cartorios, shopping ou aeroporto recebem cotacao a parte, e o atendimento ocorre de segunda a sexta, das 8h as 18h. O valor fechado chega pelo WhatsApp (11) 95724-8425 antes da coleta.",
      "Para decidir se e para voce: e indicado para escritorios, clinicas, lojas e industrias que precisam de previsibilidade no mesmo dia util. Por outro lado, nao e o formato certo para quem precisa transportar moveis, fazer mudanca ou manter espera de horas em balcao. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motofrete",
    title: "Motofrete em Guarulhos",
    h1: "Motofrete em Guarulhos para cargas rápidas urbanas",
    description:
      "Motofrete em Guarulhos para volumes, caixas e cargas leves com baú amplo, nota fiscal, rastreio GPS e coleta programada para empresas e e-commerces locais.",
    keywords: [
      "motofrete guarulhos",
      "motofrete sp",
      "entrega de volumes guarulhos",
      "motoboy carga guarulhos",
      "transporte de caixas guarulhos",
    ],
    hero: "O motofrete em Guarulhos é o serviço certo para quem precisa movimentar caixas, volumes e cargas leves com agilidade e custo menor que o de um utilitário. Atendemos distribuidoras do polo de Cumbica, autopeças da Avenida Guarulhos, confecções do Bonsucesso e e-commerces de toda a cidade com motos equipadas com baús de até 100 litros e suporte para amarração segura. Cada frete sai com romaneio, possibilidade de emissão de nota e rastreio por GPS do início ao fim do percurso. Trabalhamos com coletas avulsas e contratos recorrentes, incluindo janelas fixas de coleta pela manhã e à tarde para empresas que despacham todos os dias. Nossos pilotos conhecem as docas, os horários de recebimento dos galpões logísticos da Via Dutra e os acessos ao TECA do Aeroporto de Guarulhos, o que evita devoluções por atraso. Se a sua operação precisa escoar mercadoria rápido dentro da cidade e na Grande São Paulo, o motofrete resolve sem burocracia.",
    beneficios: [
      "Capacidade real de carga com baús vedados de até 100 litros, redes de amarração e separação de volumes por romaneio, ideal para caixas de e-commerce e peças.",
      "Contratos recorrentes com tabela fixa por faixa de distância, coletas em janelas programadas e faturamento mensal para empresas de Guarulhos e região.",
      "Cobertura dos polos logísticos de Cumbica, Cidade Industrial Satélite, Bonsucesso e do Terminal de Cargas do Aeroporto Internacional de Guarulhos.",
      "Comprovação completa de cada frete com foto da mercadoria, assinatura do recebedor e baixa digital enviada ao contratante em minutos.",
    ],
    faq: [
      {
        q: "Qual o peso e o tamanho máximo aceito no motofrete?",
        a: "Transportamos volumes de até 20 kg por baú e caixas de até 60 x 50 x 50 cm aproximadamente. Para cargas maiores ou múltiplos volumes, dividimos em dois pilotos ou agendamos coletas sequenciais, sempre com romaneio unificado e preço combinado antes da saída.",
      },
      {
        q: "Vocês emitem nota fiscal e trabalham com CNPJ?",
        a: "Sim. Atendemos empresas com CNPJ, emitimos documento fiscal do serviço e fornecemos relatório mensal de fretes com data, origem, destino e comprovantes. Também oferecemos contrato de prestação continuada com tabela fechada por zona de entrega.",
      },
      {
        q: "Fazem coletas diárias programadas para e-commerce?",
        a: "Fazemos. Definimos janelas fixas de coleta no seu centro de distribuição ou loja, por exemplo às 10h e às 16h, e escoamos os pedidos do dia para Guarulhos, São Paulo e Alto Tietê. O lojista acompanha cada pacote pelo rastreio e recebe as baixas consolidadas.",
      },
      {
        q: "O motofrete atende o Aeroporto de Guarulhos e transportadoras?",
        a: "Sim, é uma das nossas rotas mais frequentes. Coletamos e entregamos mercadorias no TECA, nos terminais de cargas e nas filiais de transportadoras da Via Dutra, respeitando horários de cutoff e apresentando a documentação exigida na portaria.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Cumbica",
      "Cidade Industrial Satélite",
      "Bonsucesso",
      "Pimentas",
      "Parque Cecap",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma distribuidora do polo de Cumbica precisa escoar quarenta caixas de e-commerce separadas por romaneio ainda hoje. voce envia a lista de volumes com origem e destinos; recebe proposta por faixa de distancia; o piloto confere etiquetas e romaneio na coleta; acomoda no bau de ate 100 litros com amarracao; cumpre as paradas com baixa individual e foto. A rota usa A operacao cobre a Avenida Santos Dumont, a Cidade Industrial Satelite, os acessos da Dutra nos kms 205 e 207 e o entorno do TECA do aeroporto.",
      "Quanto ao escopo, o combinado e claro: estao incluidos caixas e volumes ate 20 kg por bau, multiplos volumes com romaneio unificado, nota do servico para CNPJ e relatorio mensal. Ja ficam de fora cargas que excedam o bau e a amarracao segura, paletes, botijoes e materiais perigosos.",
      "Em horario comercial de segunda a sexta, das 8h as 18h, as janelas fixas da manha e da tarde evitam o pico da Dutra; o tempo de cada frete e estimado como exemplo de orcamento conforme a zona, e cutoffs de transportadoras sao respeitados. O preco segue a tabela oficial: R$ 35,00 ate 8 km, mais R$ 2,50 por quilometro adicional. Para referencia de orcamento, considere 5 km por R$ 35,00, 10 km por R$ 40,00, 15 km por R$ 52,50 e 20 km por R$ 65,00. Ha 15 minutos de espera inclusos; o excedente custa R$ 0,60 o minuto. Rotas envolvendo cartorio, shopping ou aeroporto pedem cotacao especifica. Operamos de segunda a sexta, das 8h as 18h, com confirmacao de valor no WhatsApp (11) 95724-8425 antes de qualquer deslocamento.",
      "Na escolha, considere o perfil ideal: e indicado para distribuidoras, autopecas, confeccoes e e-commerces com despacho diario ou semanal. Por outro lado, nao e o formato certo para quem precisa de caminhao, empilhadeira ou transporte de carga paletizada. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "entrega-documentos",
    title: "Entrega de Documentos em Guarulhos",
    h1: "Entrega de documentos em Guarulhos com protocolo assinado",
    description:
      "Entrega de documentos em Guarulhos com protocolo assinado, foto comprobatória e sigilo absoluto. Contratos, licitações e pastas entregues no prazo garantido.",
    keywords: [
      "entrega de documentos guarulhos",
      "motoboy documentos guarulhos",
      "protocolo de entrega guarulhos",
      "levar documentos guarulhos",
      "entrega de contratos sp",
    ],
    hero: "Contratos que precisam de assinatura hoje, pastas de licitação com horário marcado, procurações, certificados e dossiês: a nossa entrega de documentos em Guarulhos trata cada envelope como único. O piloto retira o material lacrado, confere a quantidade de vias na frente do remetente e só dá baixa mediante protocolo assinado, carimbo ou foto de quem recebeu. Atendemos escritórios do Centro, contadores da Avenida Salgado Filho, imobiliárias da Vila Augusta e departamentos jurídicos das indústrias de Cumbica. Para documentos sensíveis, utilizamos pasta executiva à prova de chuva dentro do baú e rota direta, sem paradas intermediárias que exponham o material. Também fazemos o caminho inverso: buscamos documentos assinados no cliente do seu cliente e devolvemos ao seu escritório no mesmo dia. O histórico de cada entrega fica arquivado com data, hora e comprovante, pronto para auditoria sempre que você precisar comprovar o cumprimento de um prazo.",
    beneficios: [
      "Protocolo formal de entrega com assinatura, carimbo, nome legível e horário, além de foto comprobatória enviada ao contratante logo após a baixa.",
      "Sigilo absoluto no manuseio: envelopes lacrados, pastas executivas protegidas da chuva e pilotos orientados a não abrir nem expor o conteúdo.",
      "Ideal para licitações, concorrências e protocolos com hora marcada, com planejamento de rota que considera o trânsito da Via Dutra e do Centro.",
      "Busca de retorno no mesmo dia: levamos para assinatura e trazemos de volta o documento assinado, fechando o ciclo sem você sair do escritório.",
    ],
    faq: [
      {
        q: "Como comprovo que o documento foi entregue?",
        a: "Você recebe foto do protocolo assinado com nome, horário e, quando houver, carimbo do recebedor, além do registro digital da entrega. Mantemos esse arquivo disponível para reenvio sempre que precisar comprovar prazos em auditorias ou processos.",
      },
      {
        q: "Vocês levam documentos para fóruns e repartições?",
        a: "Sim. Entregamos e protocolamos documentos no Fórum de Guarulhos, na Receita Federal, na Prefeitura, em cartórios e em órgãos estaduais na capital, seguindo as exigências de cada balcão e retornando o comprovante carimbado.",
      },
      {
        q: "Documentos sigilosos têm tratamento diferente?",
        a: "Têm. O material viaja lacrado em pasta executiva, sem identificação externa do conteúdo, com rota direta e entrega feita exclusivamente à pessoa indicada. Nenhum dado do documento é fotografado ou compartilhado além do comprovante de entrega.",
      },
      {
        q: "Qual o prazo para entrega de documentos dentro de Guarulhos?",
        a: "O prazo é informado no orçamento em horário comercial, conforme os bairros de origem e destino. Para compromissos com hora marcada, agendamos a coleta com antecedência e monitoramos o trajeto até a confirmação do recebimento.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Jardim Santa Mena",
      "Vila Galvão",
      "Itapegica",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Uma imobiliaria da Vila Augusta precisa levar um contrato de locacao para assinatura no Taboao e trazer a via assinada ainda hoje. voce informa quantidade de vias e destinatario; o piloto retira o envelope lacrado e confere as vias na sua frente; transporta em pasta executiva a prova de chuva; colhe protocolo assinado com carimbo; devolve a comprovacao por foto e mantem arquivo para auditoria. A rota usa O giro concentra-se no Centro, na Salgado Filho, na Vila Augusta e na Vila Galvao, com extensao ao Forum, a Prefeitura e aos cartorios centrais.",
      "Nos limites do servico, funciona assim: estao incluidos contratos, procuracoes, pastas de licitacao, certificados e dossies lacrados, com busca de retorno no mesmo dia. Ja ficam de fora abertura ou exposicao do conteudo, transporte de originais sem lacre quando exigido e atos que dependam de presenca das partes.",
      "De segunda a sexta, das 8h as 18h, o tempo entre coleta e baixa varia por bairros de origem e destino; para hora marcada, a coleta e agendada com antecedencia e o prazo e tratado como exemplo de orcamento monitorado ate a confirmacao. Transparencia de valores: a base e R$ 35,00 para trajetos de ate 8 km, acrescida de R$ 2,50 por km que passar desse limite. Exemplos praticos de orcamento ficam assim: 5 km equivale a R$ 35,00; 10 km a R$ 40,00; 15 km a R$ 52,50; 20 km a R$ 65,00. Incluimos 15 minutos de espera; depois disso, cada minuto sai R$ 0,60. Casos de cartorios, shoppings e aeroporto sao cotados separadamente. Nosso horario e segunda a sexta, das 8h as 18h, e cada proposta e fechada pelo WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para advocacias, contabilidades, imobiliarias e departamentos juridicos com protocolo diario. Por outro lado, nao e o formato certo para quem busca apenas entrega anonima sem comprovante ou transporte de valores em especie. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "entrega-encomendas",
    title: "Entrega de Encomendas em Guarulhos",
    h1: "Entrega de encomendas em Guarulhos no mesmo dia",
    description:
      "Entrega de encomendas em Guarulhos no mesmo dia com rastreio, foto de recebimento e cuidado redobrado. Sua loja entrega rápido e fideliza clientes de verdade.",
    keywords: [
      "entrega de encomendas guarulhos",
      "motoboy encomendas guarulhos",
      "entrega no mesmo dia guarulhos",
      "entregar pacote guarulhos",
      "delivery de produtos sp",
    ],
    hero: "Vendeu, despachou, entregou: a nossa entrega de encomendas em Guarulhos ajuda lojas, confeiteiras, farmácias, pet shops e vendedores de marketplace a cumprir a promessa do mesmo dia. Coletamos o produto embalado no seu balcão, acomodamos no baú com proteção contra balanço e chuva, e seguimos direto ao endereço do cliente final. Cada parada gera foto de recebimento e baixa imediata, que você pode repassar ao comprador para reduzir ansiedade e mensagens de onde está meu pedido. Atendemos bem os bairros residenciais de alto giro como Vila Augusta, Jardim Maia, Parque Cecap, Vila Galvão e Ponte Grande, além das rotas comerciais do Centro e do Bonsucesso. Para quem vende volume, montamos roteiros com múltiplas paradas e ordem otimizada de entrega, cobrando por rota em vez de por pacote. O resultado aparece no pós-venda: menos reclamações, mais avaliações positivas e clientes que voltam a comprar porque sabem que chega rápido.",
    beneficios: [
      "Entrega no mesmo dia em Guarulhos com coleta na sua loja e baixa com foto, perfeita para vendas de Instagram, WhatsApp, iFood direto e marketplaces.",
      "Roteirização de múltiplas paradas com ordem otimizada de entrega, reduzindo o custo por pacote para lojistas que despacham vários pedidos por dia.",
      "Manuseio cuidadoso de produtos frágeis, alimentos, cosméticos e itens de maior valor, com acomodação individual e proteção contra chuva e impacto.",
      "Comunicação pronta para o cliente final com previsão de chegada e confirmação de recebimento, diminuindo trocas de mensagens no seu atendimento.",
    ],
    faq: [
      {
        q: "Vocês entregam para o cliente final da minha loja?",
        a: "Sim, esse é o nosso dia a dia. Coletamos na sua loja ou cozinha e entregamos ao consumidor com cordialidade, foto de recebimento e confirmação imediata para você. Também aguardamos poucos minutos em caso de portaria ou interfone, sem custo extra dentro da tolerância.",
      },
      {
        q: "Como funciona a entrega com várias paradas?",
        a: "Você envia a lista de endereços, montamos a ordem mais eficiente e o piloto executa a rota com baixas individuais por parada. A cobrança é por rota e número de paradas, com relatório final mostrando cada entrega, horário e comprovante.",
      },
      {
        q: "Entregam alimentos, bolos e produtos perecíveis?",
        a: "Entregamos. Bolos, doces, marmitas e cestas viajam em compartimento separado, sem empilhamento, e com prioridade de rota para preservar a apresentação. Recomendamos embalagem firme e, em dias quentes, gelo reutilizável para perecíveis.",
      },
      {
        q: "E se o destinatário não estiver em casa?",
        a: "Tentamos contato por interfone e telefone, aguardamos a tolerância combinada e, se necessário, retornamos em nova tentativa ou devolvemos ao remetente. Você é avisado em tempo real e escolhe o melhor caminho sem pagar uma nova coleta cheia quando houver acordo prévio.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Parque Cecap",
      "Vila Galvão",
      "Ponte Grande",
      "Jardim Maia",
      "Centro de Guarulhos",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma confeiteira do Parque Cecap vendeu oito bolos pelo Instagram e precisa entregar todos na mesma tarde sem derreter a cobertura. voce manda a lista de enderecos com contatos; montamos a ordem mais eficiente; o piloto coleta os produtos embalados; acomoda cada item sem empilhamento; cumpre as paradas com foto de recebimento; envia as baixas para voce repassar aos compradores. A rota usa As rotas cobrem Vila Augusta, Jardim Maia, Parque Cecap, Vila Galvao, Ponte Grande e o comercio do Centro e do Bonsucesso.",
      "Sobre limites, vale o recorte honesto: estao incluidos produtos de loja, alimentos, cosmeticos e itens de maior valor com protecao contra balanco e chuva, alem de roteiros multi-paradas por rota. Ja ficam de fora pereceveis sem embalagem firme, botijoes de gas e volumes que nao caibam no bau com seguranca.",
      "No horario comercial de segunda a sexta, das 8h as 18h, o roteiro e calculado por zona; cada parada recebe previsao como exemplo de orcamento, e a tolerancia de espera em portaria e combinada antes da saida. Sem taxa surpresa: cobramos R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra. Um exemplo de conta ajuda a planejar: 5 km custa R$ 35,00, 10 km custa R$ 40,00, 15 km custa R$ 52,50 e 20 km custa R$ 65,00. Voce tem 15 minutos de espera sem custo, e o minuto adicional sai R$ 0,60. Entregas ou coletas em cartorios, shopping e aeroporto seguem cotacao a parte. Atendemos segunda a sexta, das 8h as 18h, e o orcamento fechado e enviado ao WhatsApp (11) 95724-8425.",
      "Para decidir se e para voce: e indicado para lojas, confeiteiras, farmacias, pet shops e vendedores de marketplace com promessa de mesmo dia. Por outro lado, nao e o formato certo para quem precisa de entrega refrigerada dedicada ou de carga fragil sem embalagem. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "coleta-entrega",
    title: "Coleta e Entrega em Guarulhos",
    h1: "Coleta e entrega em Guarulhos com ida e volta",
    description:
      "Coleta e entrega em Guarulhos com ida e volta no mesmo chamado. Buscamos, levamos, aguardamos e devolvemos com protocolo, foto e rastreio em tempo real.",
    keywords: [
      "coleta e entrega guarulhos",
      "motoboy coleta guarulhos",
      "buscar e entregar guarulhos",
      "coleta de mercadoria sp",
      "motoboy ida e volta guarulhos",
    ],
    hero: "Há rotinas que exigem ida e volta no mesmo chamado: levar um equipamento para conserto e trazer o laudo, buscar exames e devolver na clínica, coletar assinaturas em dois endereços. O nosso serviço de coleta e entrega em Guarulhos cobre o ciclo completo com um único piloto responsável do início ao fim. Ele retira o item com conferência, cumpre a etapa externa, aguarda quando necessário e retorna com o resultado, o recibo ou o troco documentado. Empresas do Centro, oficinas da Avenida Guarulhos, assistências técnicas do Taboão e comércios da Vila Rio usam esse formato para eliminar deslocamentos da própria equipe. O tempo de espera em balcões e filas entra no orçamento com transparência, e você acompanha cada fase pelo WhatsApp com fotos e horários. É como ter um funcionário externo sob demanda, sem encargos e sem improvisar com aplicativos de corrida que não assumem responsabilidade pelo material.",
    beneficios: [
      "Ciclo completo de ida e volta com o mesmo piloto, incluindo espera em filas, conferência de itens e retorno com recibos, laudos ou documentos assinados.",
      "Conferência na coleta com foto e checklist do que foi retirado, evitando divergências sobre quantidades, modelos ou estado do material transportado.",
      "Tempo de espera transparente com tolerância inicial inclusa e cobrança proporcional após esse período, sempre avisada antes de continuar aguardando.",
      "Substitui o deslocamento da sua equipe: enquanto o piloto resolve a rua, seu time segue produzindo no escritório, na oficina ou no balcão.",
    ],
    faq: [
      {
        q: "O piloto aguarda atendimento em filas e balcões?",
        a: "Sim. A primeira fração de espera está inclusa no orçamento e, se passar disso, avisamos pelo WhatsApp com o tempo decorrido e o valor proporcional antes de prosseguir. Você decide se mantém a espera, reagenda ou autoriza a continuidade.",
      },
      {
        q: "Como é feita a conferência do que foi coletado?",
        a: "Fotografamos o item na retirada, registramos quantidade, modelo ou número de série quando aplicável e enviamos a você na hora. Na devolução, repetimos o registro para fechar o ciclo com evidência completa das duas pontas.",
      },
      {
        q: "Dá para combinar coleta em um bairro e entrega em outro?",
        a: "Dá, e é o formato mais comum. Buscamos no Pimentas e entregamos no Centro, coletamos em Cumbica e levamos à Vila Galvão, ou qualquer combinação dentro de Guarulhos e Grande São Paulo, com preço fechado pela rota total.",
      },
      {
        q: "Vocês fazem esse serviço de forma recorrente?",
        a: "Sim. Muitas empresas mantêm coletas fixas duas ou três vezes por semana, como buscar peças, levar malotes ou recolher documentos. Com agenda recorrente, o valor por ciclo cai e você ganha prioridade nos horários de pico.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Taboão",
      "Vila Rio de Janeiro",
      "São João",
      "Centro de Guarulhos",
      "Jardim Bom Clima",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma assistencia tecnica do Taboao precisa levar um notebook para diagnostico no Centro, aguardar o laudo e trazer o equipamento de volta. um unico piloto assume o chamado; retira com foto e checklist; cumpre a etapa externa; aguarda em fila ou balcao dentro da tolerancia; retorna com recibo, laudo ou assinaturas; voce acompanha cada fase pelo WhatsApp. A rota usa O ciclo liga Centro, Taboao, Vila Rio, Sao Joao e Jardim Bom Clima, com extensao a Cumbica e a Vila Galvao quando o fornecedor fica no polo.",
      "Quanto ao escopo, o combinado e claro: estao incluidos ida e volta com o mesmo piloto, espera com tolerancia inclusa, conferencia fotografada e retorno documentado. Ja ficam de fora esperas ilimitadas sem aviso de custo, servicos tecnicos no local e manuseio de equipamento sem autorizacao do responsavel.",
      "De segunda a sexta, das 8h as 18h, o ciclo completo e dimensionado por rota total; a primeira fracao de espera entra no orcamento como exemplo, e qualquer excedente a R$ 0,60 por minuto e avisado antes de prosseguir. A conta e direta e sempre apresentada antes da saida: R$ 35,00 ate 8 km, mais R$ 2,50 por km excedente. Como exemplos de orcamento, um trajeto de 5 km fica R$ 35,00, um de 10 km fica R$ 40,00, um de 15 km fica R$ 52,50 e um de 20 km fica R$ 65,00. A tolerancia de espera e de 15 minutos, com adicional de R$ 0,60 por minuto apos esse marco. Missoes em cartorios, shoppings ou no aeroporto recebem cotacao propria. Funcionamos de segunda a sexta, das 8h as 18h, pelo WhatsApp (11) 95724-8425.",
      "Na escolha, considere o perfil ideal: e indicado para empresas, oficinas e comercios que resolvem rua sem deslocar a propria equipe. Por outro lado, nao e o formato certo para quem precisa de mao de obra especializada no destino ou de permanencia de turno inteiro. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "mensageiro",
    title: "Mensageiro em Guarulhos",
    h1: "Mensageiro em Guarulhos para rotinas de rua",
    description:
      "Mensageiro em Guarulhos para bancos, cartórios, fóruns e repartições. Profissional uniformizado que resolve sua rua com protocolo, agilidade e relatório.",
    keywords: [
      "mensageiro guarulhos",
      "motoboy mensageiro sp",
      "serviço de rua guarulhos",
      "office boy motorizado guarulhos",
      "resolver pendências guarulhos",
    ],
    hero: "Banco, cartório, fórum, prefeitura, fornecedor: a pauta de rua de uma empresa consome horas que ninguém tem. O nosso mensageiro em Guarulhos assume essa rotina com roteiro planejado, documentos organizados por parada e prestação de contas ao final do dia. Diferente do office boy interno, ele chega de moto, cumpre várias paradas em sequência e devolve tudo com protocolos carimbados e fotos. Atendemos escritórios do Centro, administradoras de condomínio da Vila Augusta, escolas do Jardim Maia e prestadores de serviço que terceirizam o rua com a gente todos os dias. O mensageiro apresenta-se uniformizado, com crachá e pasta executiva, postura adequada para atendimento em gerências bancárias e balcões de cartório. Contratando por dia, meio período ou pacotes mensais, você transforma custo fixo com deslocamento em serviço sob demanda, pagando apenas pelas rotas executadas e recebendo relatório completo de cada saída.",
    beneficios: [
      "Roteiro multi-paradas planejado por proximidade, reunindo banco, cartório, correio e fornecedores num único giro em vez de várias saídas isoladas.",
      "Prestação de contas detalhada com protocolos, recibos, comprovantes de pagamento e fotos, organizada por parada e entregue no mesmo dia.",
      "Apresentação profissional com uniforme, crachá e pasta executiva, adequada para representar sua empresa em bancos, cartórios e clientes.",
      "Formatos flexíveis de contratação por chamada avulsa, diária, meio período ou pacote mensal, com prioridade de agenda para clientes recorrentes.",
    ],
    faq: [
      {
        q: "Qual a diferença entre mensageiro e motoboy expresso?",
        a: "O expresso resolve uma entrega urgente ponto a ponto. O mensageiro cumpre uma pauta com várias paradas, esperas e retornos ao longo do período, como resolver banco, cartório e fornecedores na mesma saída, com relatório consolidado no final.",
      },
      {
        q: "O mensageiro pode fazer pagamentos e depósitos?",
        a: "Pode realizar pagamentos, depósitos e saques mediante autorização formal, limite pré-combinado e comprovação com recibo do banco. Valores, contas e procedimentos são registrados por escrito antes da saída para segurança das duas partes.",
      },
      {
        q: "Como contrato o mensageiro por mês?",
        a: "Definimos juntos os dias, o período e a média de paradas, e fechamos um pacote mensal com valor fixo e relatório de execução. Clientes mensais têm piloto preferencial, que já conhece a rotina, os endereços e os contatos da sua empresa.",
      },
      {
        q: "Vocês atendem fora do horário comercial?",
        a: "Nosso atendimento é de segunda a sexta, das 8h às 18h. Pautas urgentes dentro do horário comercial têm prioridade com aviso prévio pelo WhatsApp. Fora do horário comercial, chame no WhatsApp e retornamos no próximo dia útil.",
      },
    ],
    tempoMedio: "período de 4h ou diária",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Jardim Maia",
      "Vila Augusta",
      "Paraventi",
      "Vila Galvão",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Uma administradora de condominios da Vila Augusta tem banco, cartorio e tres fornecedores para resolver na mesma manha. voce passa a pauta com documentos e limites; definimos a ordem por proximidade; o mensageiro uniformizado cumpre as paradas com pasta executiva; colhe protocolos e recibos; devolve tudo organizado por parada com fotos no mesmo dia. A rota usa O roteiro agrupa Centro, Jardim Maia, Vila Augusta, Paraventi e Vila Galvao por proximidade, reunindo banco, cartorio, correio e fornecedores num giro.",
      "Nos limites do servico, funciona assim: estao incluidos pauta multi-paradas, pagamentos e depositos com autorizacao formal e limite pre-combinado, prestacao de contas detalhada. Ja ficam de fora atos personalissimos que exigem a presenca do titular, saques sem autorizacao escrita e transporte de valores fora do limite declarado.",
      "O mensageiro opera de segunda a sexta, das 8h as 18h, por chamada avulsa, meio periodo, diaria ou pacote mensal; pautas com prazo fatal pedem aviso com antecedencia e o cronograma chega como exemplo de orcamento. Para planejar o custo, use a regra verdadeira: R$ 35,00 cobre ate 8 km; cada quilometro a mais soma R$ 2,50. Na pratica do orcamento, isso significa R$ 35,00 aos 5 km, R$ 40,00 aos 10 km, R$ 52,50 aos 15 km e R$ 65,00 aos 20 km. A espera inclui 15 minutos de cortesia e cobra R$ 0,60 por minuto seguinte. Servicos com cartorio, shopping ou aeroporto sao orcados caso a caso. O expediente e segunda a sexta, das 8h as 18h, e o fechamento acontece no WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para escritorios, administradoras, escolas e prestadores com rua recorrente. Por outro lado, nao e o formato certo para quem tem apenas uma entrega pontual urgente, que se resolve melhor no expresso. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Clientes mensais ainda ganham piloto preferencial, que ja conhece a rotina, os enderecos e os contatos da empresa.",
    ],

    schemaType: "Service",
  },
  {
    slug: "transporte-malotes",
    title: "Transporte de Malotes em Guarulhos",
    h1: "Transporte de malotes em Guarulhos com lacre e rota fixa",
    description:
      "Transporte de malotes em Guarulhos com malote lacrado, rota fixa e comprovação. Ideal para bancos, empresas e redes com várias unidades na cidade e região.",
    keywords: [
      "transporte de malotes guarulhos",
      "malote bancário guarulhos",
      "coleta de malote sp",
      "motoboy malote guarulhos",
      "malote empresarial guarulhos",
    ],
    hero: "Redes de lojas, bancos, administradoras e empresas com matriz e filiais dependem do malote diário para girar documentos, cheques, contratos e numerário operacional. O nosso transporte de malotes em Guarulhos opera com rotas fixas, horários cravados e malotes lacrados com numeração controlada. Cada coleta registra o número do lacre na saída e confere a integridade na entrega, com assinatura do responsável em cada ponto da rota. Atendemos agências bancárias do Centro e da Avenida Paulo Faccini, redes varejistas do Bonsucesso e do Pimentas, e grupos empresariais com unidades entre Guarulhos e São Paulo. O piloto da rota é fixo sempre que possível, criando vínculo de confiança com os responsáveis de cada unidade. Em caso de lacre violado ou divergência, o protocolo de segurança trava a entrega e aciona imediatamente o contratante. É operação séria, repetível e auditável, do jeito que o setor financeiro exige.",
    beneficios: [
      "Lacres numerados com conferência na coleta e na entrega, garantindo cadeia de custódia íntegra entre matriz, filiais, bancos e fornecedores.",
      "Rotas fixas com horários programados de segunda a sábado, piloto preferencial na rota e cobertura de férias e faltas sem quebrar a operação.",
      "Cadeia de custódia documentada com assinaturas por ponto, horários registrados e relatório diário consolidado para a sua tesouraria ou controladoria.",
      "Protocolo de divergência que interrompe a entrega diante de lacre violado e comunica o contratante na hora, protegendo valores e documentos.",
    ],
    faq: [
      {
        q: "Como funciona o controle dos lacres?",
        a: "Cada malote recebe lacre numerado registrado na coleta. No destino, o recebedor confere número e integridade antes de assinar. Qualquer divergência trava o processo e gera ocorrência formal comunicada imediatamente ao contratante.",
      },
      {
        q: "Vocês fazem rota diária entre matriz e filiais?",
        a: "Sim, é o nosso formato principal. Montamos a sequência de unidades, definimos os horários de passagem e executamos de segunda a sábado. Rotas entre Guarulhos e São Paulo também são atendidas com janela de trânsito planejada.",
      },
      {
        q: "Podem transportar cheques e numerário operacional?",
        a: "Transportamos cheques, documentos financeiros e numerário operacional de baixo valor mediante declaração, lacre reforçado e autorização formal. Para grandes valores em espécie, indicamos o serviço especializado de carro-forte, por exigência regulatória.",
      },
      {
        q: "O que acontece se uma unidade estiver fechada?",
        a: "O piloto registra a tentativa com foto, horário e contato realizado, segue a rota e retorna ao ponto no fim do giro ou no próximo ciclo, conforme o contrato. Todas as tentativas constam no relatório diário sem custo oculto.",
      },
    ],
    tempoMedio: "rota programada diária",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Bonsucesso",
      "Pimentas",
      "Vila Augusta",
      "São João",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma rede varejista com lojas no Bonsucesso e no Pimentas precisa girar cheques e contratos entre matriz e filiais todos os dias. definimos a sequencia de unidades e os horarios de passagem; cada malote recebe lacre numerado registrado na coleta; o piloto fixo cumpre o giro; cada ponto confere lacre e assina; a tesouraria recebe relatorio diario consolidado. A rota usa As rotas fixas ligam Centro, Bonsucesso, Pimentas, Vila Augusta e Sao Joao, com extensao a unidades na capital em janela de transito planejada.",
      "Sobre limites, vale o recorte honesto: estao incluidos malotes lacrados com numeracao controlada, cadeia de custodia documentada, cobertura de ferias e faltas sem quebrar a operacao. Ja ficam de fora grandes valores em especie, que exigem carro-forte por exigencia regulatoria, e malotes sem declaracao de conteudo.",
      "As rotas rodam de segunda a sexta, das 8h as 18h, com horarios cravados; tentativas em unidade fechada sao registradas com foto e retornam no giro seguinte, tudo previsto no exemplo de orcamento do contrato. Pela tabela real Moto11, o calculo e R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra acima disso. Como exemplo de orcamento: 5 km sai R$ 35,00; 10 km sai R$ 40,00; 15 km sai R$ 52,50; 20 km sai R$ 65,00. A espera tem 15 minutos de tolerancia e, apos esse periodo, R$ 0,60 por minuto. Destinos com coleta ou entrega em cartorios, shopping ou aeroporto recebem cotacao a parte, e o atendimento ocorre de segunda a sexta, das 8h as 18h. O valor fechado chega pelo WhatsApp (11) 95724-8425 antes da coleta.",
      "Para decidir se e para voce: e indicado para bancos, redes de lojas, administradoras e grupos com matriz e filiais. Por outro lado, nao e o formato certo para operacoes esporadicas de um unico envelope, melhor atendidas pela entrega de documentos. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. O piloto da rota e fixo sempre que possivel, criando vinculo de confianca com os responsaveis de cada unidade atendida.",
    ],

    schemaType: "Service",
  },
  {
    slug: "coleta-transportadoras",
    title: "Coleta em Transportadoras em Guarulhos",
    h1: "Coleta em transportadoras em Guarulhos sem fila",
    description:
      "Coleta em transportadoras em Guarulhos com retirada ágil na Via Dutra, Cumbica e TECA. Evite filas, respeite cutoffs e receba tudo com romaneio assinado.",
    keywords: [
      "coleta em transportadora guarulhos",
      "retirada de mercadoria guarulhos",
      "motoboy transportadora dutra",
      "coleta teca gru",
      "retirar encomenda transportadora sp",
    ],
    hero: "Quem já perdeu uma tarde na fila de uma transportadora na Via Dutra sabe o valor de terceirizar a retirada. Nossa coleta em transportadoras em Guarulhos cobre as filiais ao longo da Rodovia Presidente Dutra, os galpões de Cumbica e o Terminal de Cargas do Aeroporto, o TECA. Apresentamos autorização, documento e código de rastreio, aguardamos a liberação, conferimos volumes, etiquetas e avarias aparentes, e trazemos tudo com romaneio assinado. Conhecemos os procedimentos de cada grande operadora, os horários de cutoff e os dias de maior movimento, então programamos a ida no melhor momento. Lojistas do Centro, oficinas que aguardam peças e e-commerces que consolidam carga usam o serviço diariamente. Se houver divergência, avaria ou cobrança indevida no balcão, registramos na hora com fotos e avisamos antes de assinar qualquer quitação, protegendo o seu direito de reclamar depois.",
    beneficios: [
      "Retirada profissional nas transportadoras da Via Dutra, de Cumbica e do TECA do Aeroporto de Guarulhos, com conhecimento dos procedimentos de cada operadora.",
      "Conferência de volumes, etiquetas e avarias aparentes antes de assinar a quitação, com fotos que sustentam reclamações posteriores se necessário.",
      "Espera em fila inclusa na lógica do serviço, com tolerância transparente e aviso prévio caso a liberação ultrapasse o tempo normal de atendimento.",
      "Romaneio de entrega com assinatura, horário e registro fotográfico, permitindo conciliação imediata com o seu pedido de compra ou ordem de coleta.",
    ],
    faq: [
      {
        q: "Quais documentos preciso enviar para a retirada?",
        a: "Geralmente autorização por escrito, cópia do documento do destinatário, nota fiscal ou código de rastreio da mercadoria. Confirmamos com você o checklist exato da transportadora antes de sair, para não voltar sem a carga por falta de papel.",
      },
      {
        q: "Vocês conferem a mercadoria no balcão?",
        a: "Conferimos quantidade de volumes, etiquetas, números de rastreio e sinais aparentes de avaria ou violação. Qualquer divergência é fotografada e comunicada a você antes de assinarmos, preservando seu direito de ressalva no canhoto.",
      },
      {
        q: "Atendem o TECA do Aeroporto de Guarulhos?",
        a: "Sim, com frequência. Operamos retiradas e entregas no Terminal de Cargas, incluindo conferência documental e acompanhamento de prazos de companhias aéreas e agentes de carga que operam em GRU.",
      },
      {
        q: "E se a mercadoria ainda não estiver liberada?",
        a: "Aguardamos dentro da tolerância, registramos a posição da carga com o atendente e, se a liberação for para outro dia, retornamos sem custo de nova coleta cheia quando contratado em pacote, ou com valor reduzido na segunda tentativa.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Cumbica",
      "Jardim Cumbica",
      "Cidade Industrial Satélite",
      "Bonsucesso",
      "Pimentas",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Um lojista do Centro comprou reposicao que chegou a uma filial de transportadora na Dutra e precisa do material antes do fim do expediente. voce envia autorizacao, documento e codigo de rastreio; confirmamos o checklist da operadora; o piloto apresenta a documentacao; aguarda a liberacao; confere volumes, etiquetas e avarias aparentes com fotos; traz tudo com romaneio assinado. A rota usa A cobertura alcanca as filiais ao longo da Dutra, os galpoes de Cumbica e do Jardim Cumbica, a Cidade Industrial Satelite e o TECA do aeroporto.",
      "Quanto ao escopo, o combinado e claro: estao incluidos retirada com espera em fila dentro da logica do servico, conferencia fotografada antes de assinar quitacao e romaneio para conciliacao. Ja ficam de fora assinatura de quitacao com divergencia nao registrada, retirada sem autorizacao e cargas acima do limite da moto.",
      "De segunda a sexta, das 8h as 18h, programamos a ida fora dos horarios de maior fila; se a carga nao estiver liberada, registramos a posicao e a segunda tentativa segue o exemplo de orcamento combinado. O preco segue a tabela oficial: R$ 35,00 ate 8 km, mais R$ 2,50 por quilometro adicional. Para referencia de orcamento, considere 5 km por R$ 35,00, 10 km por R$ 40,00, 15 km por R$ 52,50 e 20 km por R$ 65,00. Ha 15 minutos de espera inclusos; o excedente custa R$ 0,60 o minuto. Rotas envolvendo cartorio, shopping ou aeroporto pedem cotacao especifica. Operamos de segunda a sexta, das 8h as 18h, com confirmacao de valor no WhatsApp (11) 95724-8425 antes de qualquer deslocamento.",
      "Na escolha, considere o perfil ideal: e indicado para lojistas, oficinas, e-commerces e industrias que consolidam carga em transportadoras. Por outro lado, nao e o formato certo para quem precisa de coleta com caminhao ou de armazenagem intermediada. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Se houver divergencia, avaria ou cobranca indevida no balcao, tudo e registrado com fotos antes de qualquer assinatura.",
    ],

    schemaType: "Service",
  },
  {
    slug: "aeroporto-gru",
    title: "Motoboy Aeroporto de Guarulhos (GRU)",
    h1: "Motoboy no Aeroporto de Guarulhos (GRU) nos terminais e TECA",
    description:
      "Motoboy no Aeroporto de Guarulhos com atendimento nos Terminais 1, 2, 3 e TECA. Documentos esquecidos, peças e cargas urgentes com prioridade e rastreio.",
    keywords: [
      "motoboy aeroporto guarulhos",
      "motoboy gru",
      "entrega aeroporto guarulhos",
      "coleta teca gru",
      "documento esquecido avião gru",
    ],
    hero: "Esqueceu um documento no embarque, precisa enviar uma peça pelo próximo voo ou retirar carga urgente no terminal: o nosso motoboy no Aeroporto de Guarulhos resolve com conhecimento real da operação de GRU. Atuamos nos Terminais 1, 2 e 3, nos estacionamentos, nos balcões das companhias e no Terminal de Cargas, o TECA, sabendo onde parar, onde protocolar e quais acessos cada perfil de visitante pode usar. O serviço é muito usado por executivos que deixaram pastas e notebooks no raio-x, por despachantes que precisam de documentos para liberação de carga e por indústrias que embarcam peças em voos com cutoff apertado. Como o aeroporto tem regras rígidas de circulação e estacionamento, o piloto planeja a chegada pelo melhor acesso, seja pela Rodovia Hélio Smidt ou pela Avenida Jamil João Zarif, e mantém contato contínuo até a entrega na mão do passageiro, do comissário ou do agente de carga. Rapidez aqui não é luxo: é a diferença entre embarcar a tempo ou perder o voo.",
    beneficios: [
      "Cobertura dos Terminais 1, 2 e 3, do TECA, dos estacionamentos e dos balcões das companhias, com pilotos que conhecem acessos e regras de cada área.",
      "Atendimento emergencial para documentos esquecidos, passaportes, notebooks e peças embarcadas em voos com horário de cutoff apertado.",
      "Coordenação em tempo real com o passageiro ou o agente de carga, definindo ponto de encontro exato por terminal, piso, letra e número de balcão.",
      "Rota expressa pela Hélio Smidt e pelo Anel Viário com monitoramento do trânsito, priorizando a janela do voo acima de qualquer outro compromisso.",
    ],
    faq: [
      {
        q: "Vocês entregam documentos a passageiros já embarcados?",
        a: "Entregamos até o limite permitido das áreas públicas: balcões de check-in, atendimento das companhias e pontos de encontro nos desembarques. Articulamos com você e com a companhia a melhor forma de fazer o item chegar ao passageiro, inclusive via funcionário da empresa aérea quando autorizado.",
      },
      {
        q: "Atendem o TECA e cargas de companhias aéreas?",
        a: "Sim. Fazemos entregas e retiradas no Terminal de Cargas com a documentação exigida, acompanhamos cutoffs de embarque e registramos cada etapa com fotos e horários para o seu controle logístico.",
      },
      {
        q: "Qual o prazo de atendimento na região do aeroporto?",
        a: "Em horário comercial (seg–sex, 8h–18h), o prazo até os terminais é informado no orçamento, conforme a origem do deslocamento. Para voos com horário crítico, recomendamos acionar imediatamente pelo WhatsApp informando companhia, terminal e horário limite.",
      },
      {
        q: "Quanto custa o serviço no Aeroporto de Guarulhos?",
        a: "A região do aeroporto tem cotação à parte, conforme o terminal, o tempo de espera e a origem do deslocamento. O valor é fechado antes da saída no WhatsApp, em horário comercial.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "sob cotação",
    areasAtendidas: [
      "Aeroporto Internacional de Guarulhos",
      "Jardim Cumbica",
      "Cumbica",
      "Parque Cecap",
      "Bonsucesso",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Um executivo esqueceu a pasta com contrato no raio-x do Terminal 2 e o voo conecta em poucas horas. voce informa companhia, terminal, piso e horario-limite; o piloto planeja o acesso permitido; mantem contato continuo; entrega na mao do passageiro, do funcionario da companhia ou do agente de carga; registra horarios e fotos de cada etapa. A rota usa A atuacao cobre Terminais 1, 2 e 3, estacionamentos, balcoes das companhias e o TECA, com chegada pela Helio Smidt ou pela Jamil Joao Zarif conforme o transito.",
      "Nos limites do servico, funciona assim: estao incluidos documentos esquecidos, pecas para embarque com cutoff apertado, passaportes e notebooks ate o limite das areas publicas. Ja ficam de fora acesso a areas restritas de embarque, despacho de bagagem e promessa de embarque apos o fechamento do voo.",
      "O atendimento segue o horario comercial de segunda a sexta, das 8h as 18h, com prioridade a janela do voo; por ser area de regras rigidas, cada missao recebe cotacao a parte tratada como exemplo de orcamento, e a primeira fracao de espera no ponto de encontro esta incluida. Transparencia de valores: a base e R$ 35,00 para trajetos de ate 8 km, acrescida de R$ 2,50 por km que passar desse limite. Exemplos praticos de orcamento ficam assim: 5 km equivale a R$ 35,00; 10 km a R$ 40,00; 15 km a R$ 52,50; 20 km a R$ 65,00. Incluimos 15 minutos de espera; depois disso, cada minuto sai R$ 0,60. Casos de cartorios, shoppings e aeroporto sao cotados separadamente. Nosso horario e segunda a sexta, das 8h as 18h, e cada proposta e fechada pelo WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para executivos, despachantes, industrias e familias com urgencia ligada a voo. Por outro lado, nao e o formato certo para cargas que exigem overlaps de terminal sem contato disponivel do outro lado. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar.",
    ],

    schemaType: "Service",
  },
  {
    slug: "entrega-urgente",
    title: "Entrega Urgente em Guarulhos",
    h1: "Entrega urgente em Guarulhos com prioridade máxima",
    description:
      "Entrega urgente em Guarulhos com piloto dedicado e rota direta. Para prazos fatais e itens críticos em horário comercial: acionamento imediato no WhatsApp, seg–sex 8h–18h.",
    keywords: [
      "entrega urgente guarulhos",
      "motoboy urgente guarulhos",
      "entrega emergencial sp",
      "motoboy 24 horas guarulhos",
      "delivery urgente guarulhos",
    ],
    hero: "Prazo fatal de licitação, peça que parou a linha de produção, medicamento que não pode esperar, chave do cofre com a equipe parada: a entrega urgente em Guarulhos existe para esses momentos. Ao acionar em horário comercial (seg–sex, 8h–18h), um piloto dedicado assume o seu chamado com prioridade sobre a fila, segue em rota direta sem paradas intermediárias e mantém contato aberto até a baixa. Fora do horário comercial, chame no WhatsApp e retornamos no próximo dia útil. O despacho considera o trânsito em tempo real entre bairros como Pimentas, Bonsucesso, Centro e Cumbica, escolhendo o trajeto mais rápido, não o mais curto no mapa. Empresas que vivem de SLA usam esse canal como extensão do plano de contingência: quando algo sai do trilho, um piloto já está a caminho enquanto a equipe interna se reorganiza. O preço reflete a prioridade absoluta, e é informado de forma fechada antes da saída, sem surpresa depois do susto.",
    beneficios: [
      "Piloto dedicado com prioridade sobre a fila e rota direta ao destino, sem agrupar o seu chamado com outras entregas em hipótese alguma.",
      "Urgência com prioridade dentro do horário comercial (seg–sex, 8h–18h), com acionamento imediato pelo WhatsApp e despacho em minutos.",
      "Monitoramento do trânsito em tempo real para escolher o trajeto mais rápido entre qualquer origem e destino em Guarulhos e na Grande São Paulo.",
      "Preço fechado informado antes da saída, com comprovação reforçada de entrega por foto, assinatura e registro de horários de coleta e baixa.",
    ],
    faq: [
      {
        q: "Vocês atendem de madrugada e em feriados?",
        a: "Não. Atendemos de segunda a sexta, das 8h às 18h — sem operação de madrugada, à noite, aos fins de semana ou em feriados. A urgência com piloto dedicado vale dentro do horário comercial. Fora dele, chame no WhatsApp e retornamos no próximo dia útil.",
      },
      {
        q: "O que caracteriza uma entrega urgente?",
        a: "Qualquer item com prazo fatal ou impacto operacional: licitações, peças que pararam máquinas, medicamentos, documentos para embarque, chaves e equipamentos críticos. Se a demora gera prejuízo ou perda de prazo, trate como urgente e acione direto.",
      },
      {
        q: "A entrega urgente é realmente direta, sem paradas?",
        a: "Sim. O piloto dedicado sai da coleta direto ao destino, sem agrupar com outros chamados. Essa exclusividade é o que garante o menor tempo porta a porta possível dentro das condições do trânsito.",
      },
      {
        q: "Como acompanho uma entrega urgente em andamento?",
        a: "Você recebe confirmação de coleta, posição em tempo real e aviso imediato de baixa com foto e horário. Em casos críticos, o piloto mantém contato contínuo pelo WhatsApp até a entrega na mão do destinatário.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Pimentas",
      "Cumbica",
      "Vila Galvão",
      "Jardim Presidente Dutra",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma confeccao do Bonsucesso parou a linha porque o lote de aviamentos nao chegou e o turno da tarde depende dele. voce aciona pelo WhatsApp com prazo-limite real; um piloto dedicado assume com prioridade sobre a fila; segue em rota direta sem agrupar; mantem contato aberto; da baixa com foto, assinatura e horarios registrados. A rota usa O despacho monitora em tempo real os eixos entre Pimentas, Bonsucesso, Centro, Cumbica e Vila Galvao, escolhendo o trajeto mais rapido, nao o mais curto no mapa.",
      "Sobre limites, vale o recorte honesto: estao incluidos piloto exclusivo, rota direta, monitoramento de transito e comprovacao reforcada para prazos fatais e emergencias. Ja ficam de fora promessa de tempo inferior ao fisicamente possivel no transito e transporte de itens proibidos ou acima do limite.",
      "O canal urgente opera dentro do expediente de segunda a sexta, das 8h as 18h, com plantao sob consulta; o preco reflete a prioridade absoluta e e informado fechado antes da saida, como exemplo de orcamento, sem surpresa posterior. Sem taxa surpresa: cobramos R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra. Um exemplo de conta ajuda a planejar: 5 km custa R$ 35,00, 10 km custa R$ 40,00, 15 km custa R$ 52,50 e 20 km custa R$ 65,00. Voce tem 15 minutos de espera sem custo, e o minuto adicional sai R$ 0,60. Entregas ou coletas em cartorios, shopping e aeroporto seguem cotacao a parte. Atendemos segunda a sexta, das 8h as 18h, e o orcamento fechado e enviado ao WhatsApp (11) 95724-8425.",
      "Para decidir se e para voce: e indicado para operacoes com SLA, linhas paradas, medicamentos criticos e licitacoes com hora marcada. Por outro lado, nao e o formato certo para rotinas previsiveis sem consequencia por atraso, que saem mais baratas no programado. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Empresas que vivem de SLA usam o canal urgente como extensao do plano de contingencia para os dias criticos.",
    ],

    schemaType: "Service",
  },
  {
    slug: "entrega-programada",
    title: "Entrega Programada em Guarulhos",
    h1: "Entrega programada em Guarulhos com dia e hora marcados",
    description:
      "Entrega programada em Guarulhos com dia e hora marcados, roteirização inteligente e confirmação. Rotas fixas semanais para empresas e comércios locais.",
    keywords: [
      "entrega programada guarulhos",
      "motoboy agendado guarulhos",
      "rota fixa motoboy sp",
      "entrega recorrente guarulhos",
      "distribuição programada guarulhos",
    ],
    hero: "Nem toda entrega precisa ser um corre-corre: contratos que vencem toda segunda, reposições de loja às quartas, documentos que seguem para a matriz toda sexta. A entrega programada em Guarulhos organiza esses compromissos recorrentes numa agenda fixa, com dia, janela de horário e rota definida. Você agenda com antecedência, recebe confirmação na véspera e acompanha a execução com baixas individuais por parada. Comércios do Centro, distribuidoras de Cumbica, redes com lojas no Bonsucesso e no Pimentas e prestadores de serviço com visitas semanais usam esse formato para transformar logística em rotina silenciosa que simplesmente funciona. A roteirização agrupa paradas por proximidade, o que derruba o custo por entrega em comparação com chamados avulsos. E quando surge um imprevisto fora da agenda, clientes programados têm prioridade no encaixe urgente, porque a operação já conhece os seus endereços, contatos e particularidades de recebimento.",
    beneficios: [
      "Agenda fixa com dia e janela de horário recorrentes, confirmação na véspera e execução monitorada com baixas individuais por parada.",
      "Custo por entrega menor que o avulso graças ao agrupamento inteligente de paradas por proximidade e à previsibilidade da demanda.",
      "Piloto habitual na sua rota, que conhece recebedores, horários de almoço, docas e exigências de cada ponto, reduzindo tentativas frustradas.",
      "Prioridade de encaixe para demandas urgentes fora da agenda, com seus endereços e contatos já cadastrados para despacho imediato.",
    ],
    faq: [
      {
        q: "Como funciona o agendamento das entregas?",
        a: "Definimos os dias, as janelas de horário e os endereços fixos, e a rota passa a rodar automaticamente. Você recebe confirmação na véspera de cada ciclo e pode incluir paradas extras avulsas com aviso prévio, cobradas à parte.",
      },
      {
        q: "Existe fidelidade ou contrato mínimo?",
        a: "Trabalhamos com acordo mensal renovável, sem multa de fidelidade abusiva. O compromisso mínimo é de um ciclo mensal para garantir a reserva do piloto e da janela, com reajuste apenas por mudança relevante de rota ou volume.",
      },
      {
        q: "Posso alterar endereços e horários depois de contratado?",
        a: "Pode. Ajustes de rota são incorporados à agenda com aviso de 24 horas, e mudanças pontuais de um dia específico são aceitas até a véspera sem custo, desde que não alterem drasticamente a quilometragem planejada.",
      },
      {
        q: "Vale a pena para poucas entregas por semana?",
        a: "Vale a partir de duas rotas semanais, porque o valor por parada já fica abaixo do chamado avulso. Para volumes menores, oferecemos a modalidade de agendamento avulso com dia e hora marcados, sem compromisso mensal.",
      },
    ],
    tempoMedio: "janela agendada de 2h",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Vila Augusta",
      "Jardim Maia",
      "Centro de Guarulhos",
      "Ponte Grande",
      "Parque Cecap",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma distribuidora de Cumbica repoe duas lojas toda terca e quinta e quer transformar isso numa rotina silenciosa. definimos dias, janelas e enderecos fixos; a rota passa a rodar automaticamente; voce recebe confirmacao na vespera; cada parada gera baixa individual; extras avulsos entram com aviso previo e clientes programados tem prioridade no encaixe urgente. A rota usa As agendas fixas atendem Vila Augusta, Jardim Maia, Centro, Ponte Grande e Parque Cecap, com roteirizacao que agrupa paradas por proximidade.",
      "Quanto ao escopo, o combinado e claro: estao incluidos agenda recorrente, piloto habitual, custo por parada menor que o avulso e relatorio por ciclo. Ja ficam de fora compromisso de fidelidade abusiva; o acordo e mensal e renovavel, com reajuste so por mudanca relevante de rota ou volume.",
      "As janelas rodam de segunda a sexta, das 8h as 18h, com margem de duas horas por ciclo; ajustes entram com 24 horas de aviso e mudancas pontuais vao ate a vespera, tudo refletido no exemplo de orcamento mensal. A conta e direta e sempre apresentada antes da saida: R$ 35,00 ate 8 km, mais R$ 2,50 por km excedente. Como exemplos de orcamento, um trajeto de 5 km fica R$ 35,00, um de 10 km fica R$ 40,00, um de 15 km fica R$ 52,50 e um de 20 km fica R$ 65,00. A tolerancia de espera e de 15 minutos, com adicional de R$ 0,60 por minuto apos esse marco. Missoes em cartorios, shoppings ou no aeroporto recebem cotacao propria. Funcionamos de segunda a sexta, das 8h as 18h, pelo WhatsApp (11) 95724-8425.",
      "Na escolha, considere o perfil ideal: e indicado para comercios, distribuidoras, redes com lojas no Bonsucesso e no Pimentas e prestadores com visitas semanais. Por outro lado, nao e o formato certo para demandas totalmente aleatorias sem repeticao, que funcionam melhor no avulso. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Quando surge um imprevisto fora da agenda, clientes programados tem prioridade no encaixe urgente da operacao.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motoboy-escritorios",
    title: "Motoboy para Escritórios em Guarulhos",
    h1: "Motoboy para escritórios em Guarulhos todos os dias",
    description:
      "Motoboy para escritórios em Guarulhos com atendimento recorrente, protocolos organizados e piloto habitual. Sua operação de rua resolvida sem contratar CLT.",
    keywords: [
      "motoboy para escritórios guarulhos",
      "motoboy empresarial guarulhos",
      "motoboy fixo escritório sp",
      "terceirizar motoboy guarulhos",
      "motoboy contábil guarulhos",
    ],
    hero: "Escritórios de contabilidade, advocacia, engenharia e administração em Guarulhos vivem de idas a bancos, cartórios, clientes e repartições. Manter um motoboy fixo próprio custa salário, moto, manutenção e gestão; improvisar com aplicativos a cada demanda sai caro e não gera compromisso com prazos. O nosso motoboy para escritórios ocupa o meio-termo ideal: atendimento recorrente com piloto habitual, que conhece sua rotina, seus clientes e o jeito certo de apresentar cada documento em cada balcão. Atendemos concentrados no Centro, na Avenida Salgado Filho, na Paulo Faccini e na Vila Augusta, onde fica a maior densidade de escritórios da cidade. O serviço inclui organização de protocolos por cliente ou por processo, relatório diário de saídas e canal direto no WhatsApp para acionar sem burocracia. Quando o movimento aperta no fim do mês, reforçamos com um segundo piloto sem que você precise contratar ninguém.",
    beneficios: [
      "Piloto habitual que conhece a rotina do escritório, os clientes frequentes e as exigências de cada banco, cartório e repartição que você frequenta.",
      "Protocolos organizados por cliente, processo ou competência, com relatório diário e arquivo digital que facilita a cobrança e a auditoria interna.",
      "Custo menor que um funcionário próprio, sem moto, manutenção, combustível ou gestão trabalhista, pagando apenas pelos períodos e rotas usados.",
      "Reforço de fim de mês e de pico com segundo piloto disponível, absorvendo vencimentos, fechamentos e prazos sem sobrecarregar a operação.",
    ],
    faq: [
      {
        q: "É mais barato que contratar um motoboy CLT?",
        a: "Na maioria dos casos, sim. Você elimina salário fixo, encargos, moto, seguro, manutenção e combustível, pagando apenas pelo serviço executado. Para escritórios com demanda de até dois períodos por dia, a economia costuma passar de 30%.",
      },
      {
        q: "O piloto é sempre o mesmo?",
        a: "Priorizamos o piloto habitual na sua conta para criar vínculo e agilidade. Em férias, faltas ou picos, um substituto treinado assume com o roteiro e os contatos já documentados, sem quebra de continuidade.",
      },
      {
        q: "Vocês organizam os comprovantes por cliente?",
        a: "Sim. Cada protocolo é identificado por cliente, processo ou referência que você indicar, e o relatório diário já chega organizado. Isso simplifica repassar custos e comprovar diligências em prestações de contas.",
      },
      {
        q: "Atendem escritórios fora do Centro?",
        a: "Atendemos toda Guarulhos, incluindo escritórios na Vila Galvão, Parque Cecap, Cumbica e Bonsucesso, além de filiais na capital. A base operacional no Centro garante deslocamento rápido para qualquer região da cidade.",
      },
    ],
    tempoMedio: "atendimento no mesmo dia",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Paraventi",
      "Jardim Santa Mena",
      "Itapegica",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Um escritorio contabil da Salgado Filho perde toda segunda-feira deslocando estagiario a bancos e cartorios. mapeamos sua rotina e destinos frequentes; um piloto habitual assume a conta; voce aciona sem burocracia pelo WhatsApp; protocolos saem organizados por cliente ou processo; nos picos de fim de mes, um segundo piloto reforca sem contratacao. A rota usa A base concentra-se no Centro, na Salgado Filho, na Paulo Faccini e na Vila Augusta, com extensao a Vila Galvao, Cecap, Cumbica e Bonsucesso.",
      "Nos limites do servico, funciona assim: estao incluidos atendimento recorrente, relatorio diario, arquivo digital e reforco de pico com piloto adicional. Ja ficam de fora custos de moto propria, combustivel, manutencao e gestao trabalhista, que deixam de existir.",
      "De segunda a sexta, das 8h as 18h, o atendimento e no mesmo dia com coleta estimada informada como exemplo de orcamento; demandas criticas recebem prioridade do piloto habitual. Para planejar o custo, use a regra verdadeira: R$ 35,00 cobre ate 8 km; cada quilometro a mais soma R$ 2,50. Na pratica do orcamento, isso significa R$ 35,00 aos 5 km, R$ 40,00 aos 10 km, R$ 52,50 aos 15 km e R$ 65,00 aos 20 km. A espera inclui 15 minutos de cortesia e cobra R$ 0,60 por minuto seguinte. Servicos com cartorio, shopping ou aeroporto sao orcados caso a caso. O expediente e segunda a sexta, das 8h as 18h, e o fechamento acontece no WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para contabilidades, advocacias, engenharias e administradoras com rua diaria. Por outro lado, nao e o formato certo para empresas com demanda inferior a duas saidas semanais, que se resolvem no avulso. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Quando o movimento aperta no fim do mes, a operacao reforca com um segundo piloto sem que voce contrate ninguem.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motoboy-industrias",
    title: "Motoboy para Indústrias em Guarulhos",
    h1: "Motoboy para indústrias em Guarulhos e Cumbica",
    description:
      "Motoboy para indústrias em Guarulhos com acesso a portarias, retirada de peças e documentos fiscais. Operação alinhada ao ritmo da sua fábrica, sem parar.",
    keywords: [
      "motoboy para indústrias guarulhos",
      "motoboy industrial cumbica",
      "entrega para fábrica guarulhos",
      "coleta de peças industriais sp",
      "motofrete industrial guarulhos",
    ],
    hero: "O polo industrial de Cumbica e a Cidade Industrial Satélite concentram fábricas que não podem parar por falta de uma peça, de um documento fiscal ou de uma amostra. O nosso motoboy para indústrias opera dentro dessa lógica: pilotos credenciados para portarias com controle rígido, conhecimento de procedimentos de segurança, uso de EPI básico e apresentação de documentação na guarita sem improvisos. Fazemos a ponte entre a fábrica e fornecedores da Via Dutra, retira de peças em distribuidoras, leva e traz documentos fiscais, transporta amostras para laboratórios e entrega brindes e contratos em clientes. O despacho entende termos como ordem de compra, DANFE, romaneio e cutoff de expedição, então a comunicação com o seu PCP e o seu almoxarifado é direta. Com janelas fixas de coleta pela manhã e à tarde, a fábrica ganha um pulmão logístico diário que evita fretes emergenciais caros e paradas de linha por itens pequenos.",
    beneficios: [
      "Pilotos preparados para portarias industriais com documentação completa, EPI básico e cumprimento de normas de segurança de cada planta.",
      "Linguagem industrial fluente: DANFE, romaneio, ordem de compra, cutoff de expedição e conferência cega tratados com naturalidade pela equipe.",
      "Janelas fixas de coleta matinal e vespertina que criam um fluxo diário entre fábrica, fornecedores, clientes e laboratórios de apoio.",
      "Resposta rápida a paradas de linha com piloto de prontidão para buscar peças críticas em distribuidoras da Via Dutra e do Brás em minutos.",
    ],
    faq: [
      {
        q: "Os pilotos conseguem entrar em portarias com controle rígido?",
        a: "Sim. Trabalhamos com pilotos documentados, moto identificada e procedimento padrão de apresentação na guarita, incluindo uso de EPI quando exigido. Para plantas com credenciamento prévio, cadastramos o piloto fixo da sua rota.",
      },
      {
        q: "Vocês transportam documentos fiscais e DANFE?",
        a: "Transportamos DANFE,_XML por meios próprios do cliente quando aplicável, pedidos de compra, contratos e laudos, sempre com protocolo. Orientamos sobre a documentação que deve acompanhar mercadorias para evitar retenção em fiscalizações.",
      },
      {
        q: "Fazem coleta programada para o almoxarifado?",
        a: "Fazemos coletas em janelas fixas, por exemplo 9h e 15h, passando por fornecedores combinados e retornando ao almoxarifado com romaneio. Esse fluxo reduz compras emergenciais e organiza o recebimento da fábrica.",
      },
      {
        q: "Atendem emergências de parada de linha?",
        a: "É uma das nossas especialidades. Com um chamado no WhatsApp, despachamos o piloto mais próximo ao fornecedor indicado e acompanhamos até a entrega na portaria, com registro de horários para o seu relatório de ocorrência.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Cumbica",
      "Cidade Industrial Satélite",
      "Jardim Cumbica",
      "Pimentas",
      "Bonsucesso",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma fabrica da Cidade Industrial Satelite precisa buscar um sensor no distribuidor da Dutra antes que o turno da noite pare. voce abre o chamado com ordem de compra e codigo da peca; despachamos o piloto mais proximo; ele se apresenta na guarita com documentacao e EPI basico; retira com romaneio; entrega no almoxarifado com protocolo e horarios para o relatorio de ocorrencia. A rota usa O atendimento foca Cumbica, Cidade Industrial Satelite, Jardim Cumbica, Pimentas e Bonsucesso, com ponte a fornecedores da Dutra e ao Bras quando necessario.",
      "Sobre limites, vale o recorte honesto: estao incluidos pilotos credenciaveis para portaria rigida, leitura de DANFE e romaneio, janelas fixas de manha e a tarde e resposta a parada de linha. Ja ficam de fora entrada em areas classificadas sem credenciamento previo e transporte de insumos perigosos.",
      "Em horario comercial de segunda a sexta, das 8h as 18h, as janelas fixas criam fluxo diario; emergencias recebem piloto de prontidao e cada etapa e tratada como exemplo de orcamento com horarios registrados. Pela tabela real Moto11, o calculo e R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra acima disso. Como exemplo de orcamento: 5 km sai R$ 35,00; 10 km sai R$ 40,00; 15 km sai R$ 52,50; 20 km sai R$ 65,00. A espera tem 15 minutos de tolerancia e, apos esse periodo, R$ 0,60 por minuto. Destinos com coleta ou entrega em cartorios, shopping ou aeroporto recebem cotacao a parte, e o atendimento ocorre de segunda a sexta, das 8h as 18h. O valor fechado chega pelo WhatsApp (11) 95724-8425 antes da coleta.",
      "Para decidir se e para voce: e indicado para fabricas, almoxarifados, PCPs e manutencoes com reposicao diaria. Por outro lado, nao e o formato certo para cargas paletizadas ou que exijam munck e caminhao. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Com janelas fixas de coleta pela manha e a tarde, a fabrica ganha um pulmao logistico diario contra fretes emergenciais caros.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motoboy-clinicas",
    title: "Motoboy para Clínicas em Guarulhos",
    h1: "Motoboy para clínicas em Guarulhos com discrição",
    description:
      "Motoboy para clínicas em Guarulhos com transporte sigiloso de guias, exames e materiais entre unidades. Piloto discreto, rota direta e protocolo de entrega.",
    keywords: [
      "motoboy para clínicas guarulhos",
      "entrega para clínica guarulhos",
      "motoboy saúde guarulhos",
      "transporte de guias médicas sp",
      "coleta clínica guarulhos",
    ],
    hero: "Clínicas odontológicas, estéticas, oftalmológicas e multidisciplinares movimentam guias, autorizações, próteses, moldes e materiais entre unidades, laboratórios e convênios. O nosso motoboy para clínicas em Guarulhos executa essas rotas com discrição, pontualidade e embalagem adequada a cada tipo de material. Atendemos polos de saúde da Vila Augusta, do Centro, do Jardim Maia e da Avenida Paulo Faccini, além das clínicas populares do Pimentas e do Bonsucesso. O piloto apresenta-se de forma discreta na recepção, preserva a privacidade dos pacientes e nunca expõe o conteúdo transportado. Moldes e próteses viajam em compartimento separado com proteção contra impacto, e documentos de convênio seguem lacrados com protocolo de entrega. Para redes com duas ou três unidades, montamos circuitos fixos diários que giram materiais, numerário operacional e documentos sem que a recepção precise se preocupar com logística.",
    beneficios: [
      "Discrição total na recepção e no manuseio, com materiais neutros, sem exposição de conteúdo e respeito absoluto à privacidade dos pacientes.",
      "Transporte protegido para moldes, próteses, alinhadores e materiais sensíveis, em compartimento separado com amortecimento contra impactos.",
      "Circuitos fixos entre unidades da mesma rede, laboratórios parceiros e operadoras de convênio, com horários que respeitam a agenda da clínica.",
      "Guias e documentos de convênio lacrados com protocolo de entrega, reduzindo glosas por extravio e organizando o faturamento da recepção.",
    ],
    faq: [
      {
        q: "Vocês transportam moldes e próteses dentárias?",
        a: "Sim, com protocolo específico: compartimento separado, proteção contra impacto e calor, e entrega direta ao laboratório ou à clínica com conferência. Trabalhamos com prótese, moldes de gesso e silicone, alinhadores e peças de implantodontia.",
      },
      {
        q: "Como é garantido o sigilo dos pacientes?",
        a: "Todo material viaja em embalagem neutra e lacrada, sem identificação de paciente visível. Os pilotos são orientados a não comentar conteúdos e a realizar a entrega de forma reservada diretamente ao responsável indicado.",
      },
      {
        q: "Fazem rota entre matriz e filiais da clínica?",
        a: "Fazemos circuitos diários ou semanais entre unidades, incluindo transporte de numerário operacional declarado, documentos, materiais e uniformes, com horários alinhados ao funcionamento de cada unidade.",
      },
      {
        q: "Atendem urgências, como buscar um material no fornecedor?",
        a: "Sim. Para itens que travam atendimento, como um material que acabou no meio do dia, despachamos piloto imediato ao fornecedor e retornamos à clínica em rota direta, com aviso de previsão para a recepção reorganizar a agenda.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Vila Augusta",
      "Centro de Guarulhos",
      "Jardim Maia",
      "Pimentas",
      "Bonsucesso",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma rede odontologica com unidades na Vila Augusta e no Jardim Maia precisa girar moldes e guias entre as recepcoes todos os dias. definimos os pontos e horarios do circuito; o piloto discreto se apresenta na recepcao; recolhe guias lacradas e moldes em compartimento separado; entrega ao responsavel com protocolo; a recepcao acompanha tudo sem se preocupar com logistica. A rota usa Os circuitos ligam Vila Augusta, Centro, Jardim Maia e Paulo Faccini, com extensao as clinicas populares do Pimentas e do Bonsucesso.",
      "Quanto ao escopo, o combinado e claro: estao incluidos transporte sigiloso, protecao contra impacto para proteses e alinhadores, documentos de convenio lacrados e horarios alinhados a agenda. Ja ficam de fora diagnostico clinico, manipulacao de material biologico sem acondicionamento e exposicao de dados de pacientes.",
      "De segunda a sexta, das 8h as 18h, os circuitos diarios respeitam a agenda da clinica; urgencias como falta de material no meio do dia recebem piloto imediato com previsao informada como exemplo de orcamento. O preco segue a tabela oficial: R$ 35,00 ate 8 km, mais R$ 2,50 por quilometro adicional. Para referencia de orcamento, considere 5 km por R$ 35,00, 10 km por R$ 40,00, 15 km por R$ 52,50 e 20 km por R$ 65,00. Ha 15 minutos de espera inclusos; o excedente custa R$ 0,60 o minuto. Rotas envolvendo cartorio, shopping ou aeroporto pedem cotacao especifica. Operamos de segunda a sexta, das 8h as 18h, com confirmacao de valor no WhatsApp (11) 95724-8425 antes de qualquer deslocamento.",
      "Na escolha, considere o perfil ideal: e indicado para clinicas odontologicas, esteticas, oftalmologicas e redes com duas ou tres unidades. Por outro lado, nao e o formato certo para transporte de amostras biologicas criticas, que pertence a operacao laboratorial dedicada. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Para redes com duas ou tres unidades, o circuito fixo diario gira materiais e documentos sem preocupar a recepcao. Moldes e proteses viajam em compartimento separado com protecao contra impacto, e documentos de convenio seguem lacrados com protocolo.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motoboy-laboratorios",
    title: "Motoboy para Laboratórios em Guarulhos",
    h1: "Motoboy para laboratórios em Guarulhos com cadeia do frio",
    description:
      "Motoboy para laboratórios em Guarulhos com coleta de amostras, cadeia do frio e prazo crítico. Coletas programadas em clínicas e hospitais, com biossegurança.",
    keywords: [
      "motoboy para laboratórios guarulhos",
      "coleta de amostras guarulhos",
      "transporte de material biológico sp",
      "motoboy laboratorial guarulhos",
      "coleta de exames guarulhos",
    ],
    hero: "Amostras biológicas têm janela de viabilidade que não negocia: o motoboy para laboratórios em Guarulhos foi estruturado para coletar, conservar e entregar dentro do prazo técnico. Utilizamos bolsas térmicas com gelo reutilizável, separação rígida entre amostras e documentos, e rotas diretas que minimizam o tempo entre a coleta no posto e a entrada no laboratório. Atendemos postos de coleta na Vila Augusta, no Centro, no Jardim Maia e na Vila Galvão, além de coletas em clínicas populares do Pimentas e em hospitais da cidade. Cada coleta registra horário, temperatura de saída quando aplicável e lacre da sacola, com entrega ao responsável técnico mediante protocolo. Operamos circuitos programados duas a três vezes ao dia para laboratórios com múltiplos postos, além de coletas avulsas urgentes quando um exame prioritário não pode esperar o próximo giro. A equipe é treinada em noções de biossegurança e no manuseio correto de materiais com risco biológico.",
    beneficios: [
      "Bolsas térmicas com gelo reutilizável e separação entre amostras e papelada, preservando a viabilidade do material até a entrada no laboratório.",
      "Registro de horário de coleta e de entrega com protocolo ao responsável técnico, sustentando rastreabilidade e acreditações de qualidade.",
      "Circuitos programados em postos de coleta com duas ou três passagens diárias, além de coletas avulsas urgentes para exames prioritários.",
      "Treinamento em biossegurança com manuseio correto de material biológico, descarte adequado de insumos e postura profissional em ambiente hospitalar.",
    ],
    faq: [
      {
        q: "Como é mantida a temperatura das amostras?",
        a: "Usamos bolsas térmicas dedicadas com gelo reutilizável e monitoramento do tempo de trânsito. As rotas são diretas, sem paradas intermediárias, e registramos os horários de coleta e entrega para controle da janela de viabilidade.",
      },
      {
        q: "Vocês coletam em vários postos no mesmo giro?",
        a: "Sim. Montamos circuitos com ordem otimizada entre postos, clínicas e hospitais, com duas ou três passagens diárias conforme o volume. Cada ponto tem horário de passagem definido e protocolo próprio de entrega do material.",
      },
      {
        q: "A equipe tem treinamento para material biológico?",
        a: "Sim. Os pilotos designados recebem orientação de biossegurança, usam EPI quando exigido e seguem procedimento de contenção em caso de vazamento, comunicando imediatamente o laboratório contratante.",
      },
      {
        q: "Fazem coletas urgentes fora do circuito?",
        a: "Fazemos. Exames prioritários, como pré-operatórios e painéis com prazo crítico, recebem piloto dedicado em rota direta, com aviso de saída e previsão de chegada ao laboratório em tempo real.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Vila Augusta",
      "Jardim Maia",
      "Centro de Guarulhos",
      "Vila Galvão",
      "Parque Cecap",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Um laboratorio com postos na Vila Augusta e no Centro precisa de tres passagens diarias sem furar a janela de viabilidade das amostras. alinhamos horarios de passagem por posto; o piloto recolhe com registro de horario e lacre; acondiciona em bolsa termica com gelo reutilizavel; segue direto sem paradas; entrega ao responsavel tecnico com protocolo e rastreabilidade. A rota usa Os circuitos passam por Vila Augusta, Centro, Jardim Maia, Vila Galvao e Parque Cecap, com coletas avulsas em clinicas do Pimentas e hospitais da cidade.",
      "Nos limites do servico, funciona assim: estao incluidos cadeia do frio, separacao rigida entre amostras e papelada, treinamento em biosseguranca e coletas urgentes fora do circuito. Ja ficam de fora analise laboratorial, descarte de residuos e transporte sem identificacao da origem.",
      "De segunda a sexta, das 8h as 18h, cada coleta registra horarios de saida e chegada; a janela de viabilidade e tratada com margem tecnica e cada circuito recebe exemplo de orcamento proprio. Transparencia de valores: a base e R$ 35,00 para trajetos de ate 8 km, acrescida de R$ 2,50 por km que passar desse limite. Exemplos praticos de orcamento ficam assim: 5 km equivale a R$ 35,00; 10 km a R$ 40,00; 15 km a R$ 52,50; 20 km a R$ 65,00. Incluimos 15 minutos de espera; depois disso, cada minuto sai R$ 0,60. Casos de cartorios, shoppings e aeroporto sao cotados separadamente. Nosso horario e segunda a sexta, das 8h as 18h, e cada proposta e fechada pelo WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para laboratorios, postos de coleta, clinicas e hospitais com demanda programada. Por outro lado, nao e o formato certo para remessas que exijam refrigeracao ativa controlada ou veiculo climatizado. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. A equipe segue procedimento de contencao em caso de vazamento, comunicando imediatamente o laboratorio contratante.",
    ],

    schemaType: "Service",
  },
  {
    slug: "pecas-automotivas",
    title: "Entrega de Peças Automotivas em Guarulhos",
    h1: "Entrega de peças automotivas em Guarulhos para oficinas",
    description:
      "Entrega de peças automotivas em Guarulhos com coleta em distribuidoras, conferência de código e chegada rápida. Sua oficina não para por falta de peça.",
    keywords: [
      "entrega de peças automotivas guarulhos",
      "motoboy autopeças guarulhos",
      "buscar peças carro guarulhos",
      "peças automotivas delivery sp",
      "motoboy oficina guarulhos",
    ],
    hero: "Carro no elevador parado esperando peça é prejuízo por hora: a entrega de peças automotivas em Guarulhos conecta oficinas, funilarias e centros automotivos às distribuidoras da Avenida Guarulhos, da Via Dutra e da capital em minutos. Buscamos pelo código exato da peça, conferimos no balcão com foto antes de sair e entregamos direto no seu box, com o conferente assinando o recebimento. Atendemos oficinas do Centro, do Taboão, da Vila Galvão, da Ponte Grande e do Pimentas, além de frotistas e transportadoras com veículos parados no pátio. Peças como sensores, correias, pastilhas, filtros, bombas e componentes elétricos viajam protegidas contra impacto e umidade. Para distribuidoras, operamos o caminho inverso com roteiros de entrega a clientes em toda Guarulhos e Alto Tietê. O piloto entende de código, marca e modelo, então não volta com a peça errada: qualquer divergência no balcão é resolvida por WhatsApp antes de sair da loja.",
    beneficios: [
      "Busca pelo código exato com conferência fotografada no balcão, evitando retorno com peça errada e segunda viagem que atrasa o conserto.",
      "Cobertura das principais distribuidoras da Avenida Guarulhos, da Via Dutra e da capital, com rotas rápidas para oficinas de todos os bairros.",
      "Transporte protegido contra impacto, calor e umidade para componentes sensíveis como sensores, módulos, correias e peças elétricas.",
      "Roteiros para distribuidoras com múltiplas entregas a oficinas clientes, com baixas individuais e relatório consolidado ao final do giro.",
    ],
    faq: [
      {
        q: "Vocês conferem a peça antes de sair da distribuidora?",
        a: "Sim. Fotografamos código, marca e modelo no balcão e confirmamos com você pelo WhatsApp antes de sair. Se houver divergência de aplicação ou preço, resolvemos ali mesmo, sem custo de retorno para a oficina.",
      },
      {
        q: "Buscam peças em São Paulo, no Brás ou na General Osório?",
        a: "Buscamos. Fazemos rotas diárias aos polos de autopeças da capital, consolidando pedidos de várias oficinas quando possível. O prazo é informado no orçamento em horário comercial, conforme o trânsito do dia.",
      },
      {
        q: "E se a peça for grande ou pesada demais para a moto?",
        a: "Peças de até 20 kg e dimensões de baú seguem de moto. Para itens maiores como para-choques, escapamentos e portas, indicamos o formato com amarração externa segura ou o parceiro de utilitário, sempre com orçamento prévio e transparente.",
      },
      {
        q: "Vocês atendem frotistas e transportadoras?",
        a: "Sim, com contrato recorrente. Atendemos frotas de ônibus, caminhões e utilitários com busca programada de peças, entrega no pátio ou na oficina credenciada e faturamento mensal consolidado por veículo ou ordem de serviço.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Taboão",
      "Vila Galvão",
      "Ponte Grande",
      "Centro de Guarulhos",
      "Pimentas",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma oficina do Taboao tem um SUV no elevador aguardando sensor e bomba, com o cliente voltando as 17h. voce envia codigo, marca e modelo; o piloto busca no balcao; fotografa codigo e preco antes de sair; resolve divergencias pelo WhatsApp ali mesmo; entrega no box com recebimento assinado. A rota usa A busca cobre as distribuidoras da Avenida Guarulhos, da Dutra e os polos da capital como Bras e General Osorio, entregando em Taboao, Vila Galvao, Ponte Grande e Pimentas.",
      "Sobre limites, vale o recorte honesto: estao incluidos conferencia fotografada no balcao, protecao contra impacto e umidade e roteiros para distribuidoras com baixas individuais. Ja ficam de fora pecas acima de 20 kg ou das dimensoes do bau sem avaliacao previa e instalacao mecanica no local.",
      "Em horario comercial de segunda a sexta, das 8h as 18h, os prazos de buscas locais e de coletas na capital sao informados no orcamento, conforme o transito do dia. Sem taxa surpresa: cobramos R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra. Um exemplo de conta ajuda a planejar: 5 km custa R$ 35,00, 10 km custa R$ 40,00, 15 km custa R$ 52,50 e 20 km custa R$ 65,00. Voce tem 15 minutos de espera sem custo, e o minuto adicional sai R$ 0,60. Entregas ou coletas em cartorios, shopping e aeroporto seguem cotacao a parte. Atendemos segunda a sexta, das 8h as 18h, e o orcamento fechado e enviado ao WhatsApp (11) 95724-8425.",
      "Para decidir se e para voce: e indicado para oficinas, funilarias, centros automotivos, frotistas e distribuidoras. Por outro lado, nao e o formato certo para componentes estruturais grandes como portas e para-choques sem plano de amarracao avaliado. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Para distribuidoras, operamos o caminho inverso com roteiros de entrega a clientes em toda Guarulhos e Alto Tiete.",
    ],

    schemaType: "Service",
  },
  {
    slug: "courier",
    title: "Courier em Guarulhos",
    h1: "Courier em Guarulhos com padrão executivo de entrega",
    description:
      "Courier em Guarulhos com padrão executivo: piloto uniformizado, protocolo formal e discrição total. Para empresas que exigem apresentação sempre impecável.",
    keywords: [
      "courier guarulhos",
      "courier sp",
      "serviço de courier guarulhos",
      "entrega executiva guarulhos",
      "motoboy premium guarulhos",
    ],
    hero: "Há entregas em que a imagem de quem chega importa tanto quanto a velocidade: convites de diretoria, contratos de alto valor, brindes corporativos, documentos para clientes premium. O nosso courier em Guarulhos atende esse padrão com pilotos uniformizados, abordagem cordial, pasta executiva e protocolo formal em cada entrega. Operamos a partir do Centro e da Vila Augusta em direção a condomínios empresariais, escritórios de alto padrão e residências de perfil executivo no Jardim Maia, na Vila Galvão e no Parque Cecap. Cada chamado inclui confirmação de coleta, janela de chegada informada ao destinatário e baixa com foto e assinatura. Empresas que recebem auditorias, certificações ou visitas de matriz usam o courier como extensão do cerimonial: tudo chega no horário, com a postura certa e sem improviso. O serviço também cobre rotas Guarulhos–São Paulo para documentos que precisam transitar entre matriz e filial com tratamento executivo nas duas pontas.",
    beneficios: [
      "Padrão executivo com piloto uniformizado, comunicação formal e pasta de apresentação, adequado para diretorias, clientes premium e eventos corporativos.",
      "Janela de chegada informada ao destinatário com antecedência, reduzindo esperas e transmitindo profissionalismo em nome da sua empresa.",
      "Protocolo formal com assinatura, identificação de quem recebeu e foto, arquivado para comprovação em auditorias e processos de qualidade.",
      "Rotas Guarulhos–São Paulo com o mesmo padrão nas duas pontas, ideal para grupos empresariais com matriz na capital e operação em Guarulhos.",
    ],
    faq: [
      {
        q: "Qual a diferença do courier para o motoboy comum?",
        a: "O courier segue protocolo executivo: uniforme, abordagem formal, janela de chegada avisada, pasta de apresentação e comprovação reforçada. É indicado quando o destinatário é diretoria, cliente estratégico ou autoridade, e a imagem da entrega conta.",
      },
      {
        q: "Vocês entregam convites, brindes e kits corporativos?",
        a: "Sim, com cuidado redobrado de apresentação. Kits, cestas e brindes viajam protegidos e são entregues com postura de cerimonial, incluindo lista de destinatários, controle de assinaturas e relatório final de distribuição.",
      },
      {
        q: "É possível agendar o courier com antecedência?",
        a: "Sim, e é o recomendado para eventos e ações com data marcada. Reservamos o piloto, alinhamos o roteiro de destinatários e confirmamos na véspera, com plano de contingência para imprevistos de trânsito ou ausência do recebedor.",
      },
      {
        q: "Quanto custa o serviço de courier?",
        a: "O preço segue a tabela real Moto11 (0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra), variando com distância, número de paradas e espera. Ações com múltiplos destinatários recebem proposta fechada por roteiro, com valor fixo e relatório incluso.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Jardim Maia",
      "Vila Augusta",
      "Vila Galvão",
      "Parque Cecap",
      "Centro de Guarulhos",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma diretoria no Jardim Maia precisa enviar convites e brindes a cinco clientes estrategicos com apresentacao impecavel. alinhamos lista de destinatarios e janelas; reservamos o piloto uniformizado; cada entrega tem chegada avisada; usa pasta executiva e protocolo formal; o relatorio final consolida assinaturas e fotos por destinatario. A rota usa A operacao parte do Centro e da Vila Augusta para condominios empresariais, escritorios de alto padrao e residencias executivas no Jardim Maia, Vila Galvao e Parque Cecap, com extensao Guarulhos-Sao Paulo.",
      "Quanto ao escopo, o combinado e claro: estao incluidos padrao executivo, janela informada ao destinatario, comprovacao reforcada e tratamento de cerimonial em eventos corporativos. Ja ficam de fora entregas anonimas sem identificacao e operacoes que exijam veiculo de passeio.",
      "De segunda a sexta, das 8h as 18h, cada roteiro recebe proposta fechada por numero de paradas; acoes com data marcada sao reservadas com antecedencia e confirmadas na vespera como exemplo de orcamento. A conta e direta e sempre apresentada antes da saida: R$ 35,00 ate 8 km, mais R$ 2,50 por km excedente. Como exemplos de orcamento, um trajeto de 5 km fica R$ 35,00, um de 10 km fica R$ 40,00, um de 15 km fica R$ 52,50 e um de 20 km fica R$ 65,00. A tolerancia de espera e de 15 minutos, com adicional de R$ 0,60 por minuto apos esse marco. Missoes em cartorios, shoppings ou no aeroporto recebem cotacao propria. Funcionamos de segunda a sexta, das 8h as 18h, pelo WhatsApp (11) 95724-8425.",
      "Na escolha, considere o perfil ideal: e indicado para empresas com auditorias, certificacoes, diretorias e clientes premium. Por outro lado, nao e o formato certo para entregas simples de baixo valor sem exigencia de apresentacao. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Empresas que recebem auditorias e visitas de matriz usam o courier como extensao do cerimonial corporativo.",
    ],

    schemaType: "Service",
  },
  {
    slug: "panfletos",
    title: "Distribuição de Panfletos em Guarulhos",
    h1: "Distribuição de panfletos em Guarulhos com roteiro e prova",
    description:
      "Distribuição de panfletos em Guarulhos com roteiro planejado, equipe uniformizada e comprovação fotográfica. Sua campanha chega onde o seu cliente está.",
    keywords: [
      "distribuição de panfletos guarulhos",
      "panfletagem guarulhos",
      "entrega de flyers guarulhos",
      "distribuir folhetos sp",
      "marketing de rua guarulhos",
    ],
    hero: "Inauguração de loja, matrícula escolar, pizzaria nova no bairro, clínica com agenda aberta: o panfleto bem distribuído ainda lota estabelecimentos em Guarulhos. Nossa distribuição de panfletos combina motocicletas para reposição e deslocamento rápido com pontos de entrega a pé nos locais de maior fluxo, como o calçadão do Centro, a estação de ônibus da Avenida Guarulhos, as feiras do Bonsucesso e do Pimentas e as saídas de escolas e faculdades. Antes da ação, definimos com você o mapa de calor: quais ruas, quais horários e qual perfil de público abordar em cada ponto. Durante a campanha, você recebe fotos georreferenciadas dos pontos cobertos, contagem de material distribuído e reposição ágil quando um ponto consome mais que o previsto. Também fazemos distribuição porta a porta em condomínios e ruas residenciais do Jardim Maia, da Vila Galvão e do Parque Cecap, além de ação em semáforos com equipe uniformizada e abordagem respeitosa.",
    beneficios: [
      "Mapa de calor da campanha com ruas, horários e pontos de fluxo definidos junto ao cliente, concentrando o material onde o público-alvo circula.",
      "Comprovação com fotos dos pontos cobertos, contagem de peças distribuídas e relatório final que permite auditar cada real investido.",
      "Equipe uniformizada com abordagem respeitosa em semáforos, calçadões, feiras, escolas e portas de condomínios, preservando a imagem da sua marca.",
      "Reposição ágil por moto quando um ponto consome o material antes do previsto, mantendo a ação no ritmo sem pausas por falta de panfleto.",
    ],
    faq: [
      {
        q: "Como sei que os panfletos foram mesmo distribuídos?",
        a: "Você recebe fotos dos pontos em ação, contagem de peças por ponto e relatório final com horários e locais. Também pode acompanhar presencialmente ou solicitar pontos de verificação surpresa durante a campanha.",
      },
      {
        q: "Vocês fazem panfletagem em semáforos?",
        a: "Fazemos, com equipe uniformizada e abordagem rápida e respeitosa, respeitando a sinalização e a legislação municipal. Indicamos os cruzamentos de maior retenção em Guarulhos conforme o perfil da sua campanha.",
      },
      {
        q: "Qual a quantidade mínima para contratar?",
        a: "Ações a partir de 2.000 peças, com equipe dimensionada ao volume e ao prazo. Para campanhas maiores, acima de 10.000 peças, montamos cronograma por fases com cobertura progressiva dos bairros.",
      },
      {
        q: "Vocês também imprimem o material?",
        a: "Podemos indicar gráficas parceiras com preço negociado e cuidar da retirada do material impresso. O foco da nossa operação é a distribuição com prova, mas deixamos a campanha pronta do arquivo à rua se você preferir.",
      },
    ],
    tempoMedio: "ação de meio período ou diária",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Bonsucesso",
      "Pimentas",
      "Jardim Maia",
      "Vila Galvão",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Uma pizzaria nova no Bonsucesso quer lotar o salao no fim de semana de inauguracao com acao em semaforos e feiras. definimos mapa de calor com ruas, horarios e perfil de publico; a equipe uniformizada assume os pontos a pe; motos fazem reposicao rapida; voce recebe fotos dos pontos, contagem por ponto e relatorio final com horarios. A rota usa Os pontos quentes incluem o calcadao do Centro, a estacao de onibus da Avenida Guarulhos, as feiras do Bonsucesso e do Pimentas, saidas de escolas e os semaforos de maior retencao.",
      "Nos limites do servico, funciona assim: estao incluidos planejamento por ponto de fluxo, comprovacao fotografica, reposicao agil e porta a porta em condominios e ruas residenciais. Ja ficam de fora impressao propria em larga escala, feita via graficas parceiras indicadas, e abordagem insistente que prejudique a marca.",
      "As acoes ocorrem em meio periodo ou diaria dentro do horario comercial de segunda a sexta, das 8h as 18h, ou em datas combinadas; o cronograma por fases e tratado como exemplo de orcamento a partir de 2.000 pecas. Para planejar o custo, use a regra verdadeira: R$ 35,00 cobre ate 8 km; cada quilometro a mais soma R$ 2,50. Na pratica do orcamento, isso significa R$ 35,00 aos 5 km, R$ 40,00 aos 10 km, R$ 52,50 aos 15 km e R$ 65,00 aos 20 km. A espera inclui 15 minutos de cortesia e cobra R$ 0,60 por minuto seguinte. Servicos com cartorio, shopping ou aeroporto sao orcados caso a caso. O expediente e segunda a sexta, das 8h as 18h, e o fechamento acontece no WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para lojas em inauguracao, escolas, pizzarias, clinicas com agenda aberta e campanhas de bairro. Por outro lado, nao e o formato certo para campanhas que exijam midia segmentada digital em vez de rua. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. A acao em porta de condominios e ruas residenciais do Jardim Maia, da Vila Galvao e do Parque Cecap completa a cobertura.",
    ],

    schemaType: "Service",
  },
  {
    slug: "correspondencias",
    title: "Entrega de Correspondências em Guarulhos",
    h1: "Entrega de correspondências em Guarulhos com controle",
    description:
      "Entrega de correspondências em Guarulhos com triagem, roteirização e baixa individual. Boletos, comunicados e cartas entregues com comprovação individual.",
    keywords: [
      "entrega de correspondências guarulhos",
      "motoboy correspondência guarulhos",
      "distribuição de boletos sp",
      "entrega de cartas guarulhos",
      "correio privado guarulhos",
    ],
    hero: "Condomínios, escolas, administradoras e empresas ainda dependem de correspondência física que o correio entrega com lentidão ou sem comprovação individual. A nossa entrega de correspondências em Guarulhos assume lotes de cartas, boletos, comunicados e notificações com triagem por bairro, roteirização otimizada e baixa individual por endereço. Cada peça recebe protocolo de entrega com data, hora e identificação de quem recebeu, e as não entregues retornam com motivo registrado: ausente, mudou-se, endereço insuficiente ou recusado. Atendemos administradoras de condomínios da Vila Augusta e do Parque Cecap, escolas do Jardim Maia e do Centro, e empresas que disparam comunicados a clientes em massa. Para cobranças e notificações com efeito jurídico, o registro fotográfico e o relatório de tentativas sustentam a demonstração de boa-fé na tentativa de entrega. O custo por peça cai conforme o volume do lote, e a operação pode ser pontual ou recorrente, semanal ou mensal.",
    beneficios: [
      "Triagem e roteirização por bairro que organizam lotes grandes em giros eficientes, reduzindo o custo por peça frente a envios individuais.",
      "Baixa individual com data, hora e identificação do recebedor, além de motivo registrado para cada tentativa sem sucesso na primeira visita.",
      "Relatório de tentativas com fotos que sustenta cobranças, notificações e demonstrações de boa-fé em processos administrativos e judiciais.",
      "Operação pontual ou recorrente, semanal ou mensal, para administradoras, escolas, condomínios e empresas com disparos regulares de comunicados.",
    ],
    faq: [
      {
        q: "Vocês entregam boletos e cobranças?",
        a: "Sim, com protocolo individual por endereço. Entregamos boletos, segundos avisos e comunicados de cobrança, registrando data, hora e recebedor, e devolvendo as peças não entregues com o motivo detalhado para a sua próxima ação.",
      },
      {
        q: "Como funcionam as tentativas de entrega?",
        a: "Realizamos até duas tentativas em dias alternados dentro do contratado, registrando cada visita com foto e horário. Após as tentativas, a peça retorna com relatório completo, e você decide entre nova investida, carta registrada ou outro meio.",
      },
      {
        q: "Qual o volume mínimo para contratar o lote?",
        a: "Operamos lotes a partir de 50 peças, com preço por peça decrescente por faixa de volume. Para condomínios e escolas com distribuição interna, o lote pode ser entregue centralizado na administração com protocolo único.",
      },
      {
        q: "A entrega tem validade jurídica como notificação?",
        a: "Nossa comprovação serve como evidência da tentativa e da entrega, com fotos, horários e identificação. Para notificações extrajudiciais formais, orientamos o formato do documento e indicamos quando é necessário o envio por cartório ou oficial.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Parque Cecap",
      "Vila Augusta",
      "Jardim Maia",
      "Centro de Guarulhos",
      "Ponte Grande",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma administradora do Parque Cecap precisa distribuir trezentos comunicados de assembleia em cinco condominios numa semana. voce entrega o lote com base de enderecos; triamos por bairro e otimizamos a ordem; cada peca recebe baixa individual com data, hora e recebedor; as nao entregues retornam com motivo registrado; o relatorio com fotos sustenta cobrancas e demonstra boa-fe. A rota usa Os lotes sao triados por bairro entre Parque Cecap, Vila Augusta, Jardim Maia, Centro e Ponte Grande, com giros que evitam cruzamentos pendulares.",
      "Sobre limites, vale o recorte honesto: estao incluidos triagem, roteirizacao, ate duas tentativas em dias alternados, protocolo individual e devolucao motivada. Ja ficam de fora validade de notificacao extrajudicial formal, que exige via de cartorio ou oficial, e postagem nos Correios.",
      "Os lotes rodam de segunda a sexta, das 8h as 18h, com o prazo de conclusao do lote informado no orcamento; o preco por peca cai por faixa de volume a partir de 50 pecas. Pela tabela real Moto11, o calculo e R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra acima disso. Como exemplo de orcamento: 5 km sai R$ 35,00; 10 km sai R$ 40,00; 15 km sai R$ 52,50; 20 km sai R$ 65,00. A espera tem 15 minutos de tolerancia e, apos esse periodo, R$ 0,60 por minuto. Destinos com coleta ou entrega em cartorios, shopping ou aeroporto recebem cotacao a parte, e o atendimento ocorre de segunda a sexta, das 8h as 18h. O valor fechado chega pelo WhatsApp (11) 95724-8425 antes da coleta.",
      "Para decidir se e para voce: e indicado para administradoras, escolas, condominios e empresas com disparos regulares. Por outro lado, nao e o formato certo para remessas unitarias urgentes, melhor resolvidas no expresso. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Para cobrancas e notificacoes com efeito pratico, o registro fotografico sustenta a demonstracao de boa-fe na tentativa.",
    ],

    schemaType: "Service",
  },
  {
    slug: "transporte-valores",
    title: "Transporte de Malotes de Valor em Guarulhos",
    h1: "Transporte de malotes de valor em Guarulhos com segurança",
    description:
      "Transporte de malotes de valor em Guarulhos com lacre numerado, rota sigilosa e piloto fixo. Documentos financeiros e numerário operacional declarado.",
    keywords: [
      "transporte de valores guarulhos",
      "malote de valor guarulhos",
      "transporte de documentos financeiros sp",
      "escolta de malote guarulhos",
      "motoboy valores guarulhos",
    ],
    hero: "Cheques, documentos financeiros, contratos de alto valor e numerário operacional de baixo montante exigem mais que uma entrega comum: exigem cadeia de custódia. O nosso transporte de malotes de valor em Guarulhos opera com lacres numerados, rotas sigilosas que variam a cada ciclo, piloto fixo de confiança e comunicação restrita sobre horários e trajetos. Atendemos comércios do Centro que movimentam o caixa entre loja e banco, redes do Bonsucesso que consolidam valores das filiais e prestadores de serviço que transportam documentos sensíveis entre escritório e cliente. Cada movimentação é autorizada formalmente, com declaração de conteúdo, limite de valor e identificação de quem entrega e de quem recebe nas duas pontas. Deixamos claro o escopo: operamos malotes e numerário operacional dentro dos limites legais do transporte não especializado, e orientamos a contratação de carro-forte sempre que o montante exigir. Segurança aqui é processo, não promessa.",
    beneficios: [
      "Cadeia de custódia completa com lacres numerados, declaração de conteúdo e identificação formal de entregador e recebedor nas duas pontas.",
      "Rotas sigilosas com variação de trajeto e janela, piloto fixo de confiança e comunicação restrita sobre horários, sem exposição da operação.",
      "Autorização formal prévia com limite de valor declarado, alinhando responsabilidades e mantendo a operação dentro dos limites legais.",
      "Orientação honesta de escopo: indicamos carro-forte especializado sempre que o montante exigir, sem assumir riscos fora da nossa habilitação.",
    ],
    faq: [
      {
        q: "Quais valores podem ser transportados de moto?",
        a: "Operamos malotes com cheques, documentos financeiros e numerário operacional de baixo montante, sempre com declaração e limite formal. Para grandes quantias em espécie, a legislação exige carro-forte, e indicamos parceiros especializados.",
      },
      {
        q: "Como é garantida a segurança do trajeto?",
        a: "Com lacre numerado conferido nas duas pontas, rota que varia a cada ciclo, piloto fixo de confiança, janelas de horário restritas e comunicação discreta. Qualquer divergência trava a entrega e aciona o contratante imediatamente.",
      },
      {
        q: "Vocês fazem o trajeto loja-banco diariamente?",
        a: "Sim, com rota fixa e horários combinados, incluindo retorno com comprovante de depósito. Comércios do Centro, do Bonsucesso e do Pimentas usam esse circuito para zerar o caixa na boca do banco com segurança.",
      },
      {
        q: "Existe contrato e termo de responsabilidade?",
        a: "Sim. Toda operação recorrente tem contrato com escopo, limites, procedimentos de contingência e termo de responsabilidade assinado, protegendo contratante e contratado com regras claras.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Bonsucesso",
      "Pimentas",
      "Vila Augusta",
      "Paraventi",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Um comercio do Centro precisa levar o malote do caixa a agencia bancaria todos os dias sem expor funcionario. formaliza-se autorizacao com limite e declaracao de conteudo; cada movimentacao usa lacre numerado conferido nas duas pontas; a rota varia a cada ciclo; piloto fixo de confianca cumpre a janela restrita; qualquer divergencia trava a entrega e aciona o contratante. A rota usa Os circuitos diarios ligam lojas do Centro, do Bonsucesso e do Pimentas as agencias da Paulo Faccini e do Centro, com retorno trazendo comprovante de deposito.",
      "Quanto ao escopo, o combinado e claro: estao incluidos cadeia de custodia completa, rotas sigilosas, contrato com escopo e termo de responsabilidade. Ja ficam de fora grandes quantias em especie, que por lei exigem carro-forte, e operacoes sem declaracao formal.",
      "De segunda a sexta, das 8h as 18h, os circuitos tem horarios combinados e janelas restritas; cada rota recebe exemplo de orcamento proprio com limites declarados. O preco segue a tabela oficial: R$ 35,00 ate 8 km, mais R$ 2,50 por quilometro adicional. Para referencia de orcamento, considere 5 km por R$ 35,00, 10 km por R$ 40,00, 15 km por R$ 52,50 e 20 km por R$ 65,00. Ha 15 minutos de espera inclusos; o excedente custa R$ 0,60 o minuto. Rotas envolvendo cartorio, shopping ou aeroporto pedem cotacao especifica. Operamos de segunda a sexta, das 8h as 18h, com confirmacao de valor no WhatsApp (11) 95724-8425 antes de qualquer deslocamento.",
      "Na escolha, considere o perfil ideal: e indicado para comercios, redes com filiais e prestadores que movem documentos financeiros e numerario operacional declarado. Por outro lado, nao e o formato certo para transporte de alto numerario ou escolta armada. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Toda operacao recorrente tem contrato com escopo, limites e procedimentos de contingencia assinados. Comercios do Centro que movimentam o caixa entre loja e banco usam o circuito diario para zerar o caixa com seguranca.",
    ],

    schemaType: "Service",
  },
  {
    slug: "motoboy-eventos",
    title: "Motoboy para Eventos em Guarulhos",
    h1: "Motoboy para eventos em Guarulhos com plantão dedicado",
    description:
      "Motoboy para eventos em Guarulhos com plantão dedicado, reposição de materiais e emergências. Cerimônias, feiras e shows sem nenhum improviso logístico.",
    keywords: [
      "motoboy para eventos guarulhos",
      "logística de eventos guarulhos",
      "motoboy formatura guarulhos",
      "apoio logístico eventos sp",
      "entrega para buffet guarulhos",
    ],
    hero: "Evento bom é aquele em que nada falta: o brinde que acabou, o microfone reserva, o documento do cerimonial, a aliança esquecida, o bolo que precisa buscar. O nosso motoboy para eventos em Guarulhos fica de plantão dedicado durante a festa, a feira ou a cerimônia, resolvendo reposições e emergências sem que os convidados percebam. Atendemos buffets da Vila Augusta e do Jardim Maia, chácaras de eventos no Cabuçu e no Recreio São Jorge, formaturas no Centro e feiras corporativas em Cumbica. Antes do evento, alinhamos checklist de materiais, endereços de fornecedores e janelas críticas da programação. Durante, o piloto fica posicionado próximo ao local, com canal direto com o cerimonialista pelo WhatsApp e autonomia para buscar, levar e trazer o que for preciso. Depois, ainda recolhe sobras, devolve materiais a fornecedores e entrega achados e perdidos. É o seguro logístico que separa eventos amadores de produções profissionais.",
    beneficios: [
      "Plantão dedicado durante todo o evento, com piloto posicionado próximo ao local e canal direto com cerimonialista para acionamento imediato.",
      "Checklist prévio de materiais, fornecedores e janelas críticas, montado em reunião de alinhamento antes da data para antecipar necessidades.",
      "Reposição silenciosa de brindes, bebidas, materiais e equipamentos sem interromper a programação nem expor o improviso aos convidados.",
      "Pós-evento com devolução a fornecedores, recolhimento de sobras e destinação de achados e perdidos, fechando a logística com relatório.",
    ],
    faq: [
      {
        q: "Como funciona o plantão durante o evento?",
        a: "O piloto fica de prontidão nas imediações do local durante o período contratado, acionado pelo WhatsApp do cerimonial. Cada saída é registrada com horário e motivo, e o período inclui tolerância de deslocamentos curtos na região.",
      },
      {
        q: "Vocês buscam esquecidos, como alianças e documentos?",
        a: "Sim, é um dos acionamentos mais comuns. Buscamos o item onde foi esquecido e retornamos em rota direta e prioritária, com atualizações de posição para o cerimonial reorganizar a programação se necessário.",
      },
      {
        q: "Atendem chácaras e locais afastados?",
        a: "Atendemos chácaras no Cabuçu, Recreio São Jorge e região rural de Guarulhos, além de espaços em Arujá e Santa Isabel. Para locais afastados, combinamos ponto de apoio próximo e janelas de deslocamento realistas no orçamento.",
      },
      {
        q: "Quanto custa o plantão para eventos?",
        a: "O plantão é orçado por período (ex.: 4 horas na região central, incluindo deslocamentos curtos). Períodos maiores, locais afastados e múltiplos pilotos para feiras recebem proposta fechada conforme o briefing do evento.",
      },
    ],
    tempoMedio: "plantão de 4h ou diária",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Vila Augusta",
      "Jardim Maia",
      "Cabuçu",
      "Recreio São Jorge",
      "Centro de Guarulhos",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Um buffet da Vila Augusta recebe trezentos convidados no sabado e teme faltar brindes e material do cerimonial. antes do evento alinhamos checklist, enderecos de fornecedores e janelas criticas; no dia, o piloto fica posicionado proximo ao local com canal direto com o cerimonialista; cada saida e registrada; no pos-evento ha devolucao a fornecedores e relatorio de sobras e achados. A rota usa O plantao cobre buffets da Vila Augusta e do Jardim Maia, chacaras do Cabucu e do Recreio Sao Jorge, formaturas no Centro e feiras em Cumbica.",
      "Nos limites do servico, funciona assim: estao incluidos plantao dedicado, checklist previo, reposicao silenciosa e pos-evento com devolucoes. Ja ficam de fora organizacao do evento, montagem de estruturas e servico de garcom.",
      "O plantao e contratado por periodo dentro da disponibilidade, com alinhamento previo; deslocamentos curtos entram no periodo e excedentes seguem exemplo de orcamento fechado antes do evento. Transparencia de valores: a base e R$ 35,00 para trajetos de ate 8 km, acrescida de R$ 2,50 por km que passar desse limite. Exemplos praticos de orcamento ficam assim: 5 km equivale a R$ 35,00; 10 km a R$ 40,00; 15 km a R$ 52,50; 20 km a R$ 65,00. Incluimos 15 minutos de espera; depois disso, cada minuto sai R$ 0,60. Casos de cartorios, shoppings e aeroporto sao cotados separadamente. Nosso horario e segunda a sexta, das 8h as 18h, e cada proposta e fechada pelo WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para buffets, cerimonialistas, formaturas, feiras corporativas e casamentos. Por outro lado, nao e o formato certo para eventos que exigem equipe fixa de producao em vez de apoio logistico sob demanda. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Depois do evento, o piloto ainda recolhe sobras, devolve materiais a fornecedores e destina achados e perdidos.",
    ],

    schemaType: "Service",
  },
  {
    slug: "busca-entrega",
    title: "Busca e Entrega em Guarulhos",
    h1: "Busca e entrega em Guarulhos: a gente vai e traz",
    description:
      "Busca e entrega em Guarulhos para farmácia, cartório, gráfica e fornecedores. Peça pelo WhatsApp e receba sem sair de casa, com nota fiscal e troco certo.",
    keywords: [
      "busca e entrega guarulhos",
      "motoboy busca farmácia guarulhos",
      "buscar remédio guarulhos",
      "motoboy faz compras guarulhos",
      "buscar documentos cartório guarulhos",
    ],
    hero: "Remédio na farmácia, segunda via no cartório, cópias na gráfica, peça no fornecedor, lanche para a equipe: o serviço de busca e entrega em Guarulhos resolve a sua lista sem você sair do lugar. Você manda o pedido pelo WhatsApp com endereço, referência e, se houver, pagamento antecipado ou autorização de compra, e o piloto executa com foto de confirmação antes de fechar qualquer gasto. Atendemos residências do Jardim Maia, da Vila Galvão e do Parque Cecap, idosos que precisam de apoio com farmácia e mercado, e empresas que delegam pequenas compras operacionais. Cada compra gera nota ou cupom fiscal fotografado e devolvido junto com o troco documentado. Para itens controlados, como medicamentos tarjados, seguimos a exigência de receita e retiramos somente com a documentação em ordem. É praticidade com prestação de contas: você sabe exatamente onde cada real foi gasto antes mesmo do piloto voltar.",
    beneficios: [
      "Execução completa da sua lista: farmácia, cartório, gráfica, mercado e fornecedores, com foto de confirmação antes de qualquer gasto ou compra.",
      "Prestação de contas rigorosa com notas e cupons fiscais fotografados, troco documentado e relatório de cada item adquirido na saída.",
      "Apoio a idosos e pessoas com mobilidade reduzida para remédios, exames e compras essenciais, com atendimento paciente e cordial.",
      "Medicamentos controlados retirados somente com receita e documentação em ordem, respeitando a regulação sanitária em todas as etapas.",
    ],
    faq: [
      {
        q: "Como funciona o pagamento das compras?",
        a: "Você pode pagar antecipadamente por Pix, deixar cartão autorizado ou provisionar valor em conta para compras recorrentes. Cada gasto é comprovado com nota fiscal fotografada e troco devolvido com registro, sem arredondamentos.",
      },
      {
        q: "Vocês buscam remédios com receita?",
        a: "Sim, inclusive controlados, desde que a receita esteja válida e em nome do paciente. Fotografamos a receita antes da saída e conferimos na farmácia, garantindo conformidade com a vigilância sanitária.",
      },
      {
        q: "Fazem fila de cartório e retiram certidões?",
        a: "Fazemos. Retiramos segundas vias, certidões e escrituras mediante procuração ou autorização quando exigida, aguardamos a lavratura e devolvemos com protocolo e recibo de emolumentos pagos.",
      },
      {
        q: "Qual o valor do serviço de busca?",
        a: "Seguimos a tabela real Moto11: 0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra, com 15 min de tolerância de espera (+R$ 0,60/min após). Compras com múltiplas paradas recebem orçamento fechado por roteiro antes da execução.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Jardim Maia",
      "Vila Galvão",
      "Parque Cecap",
      "Vila Augusta",
      "Ponte Grande",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma senhora do Jardim Maia precisa do remedio controlado da farmacia e das copias da grafica sem sair de casa. voce manda a lista pelo WhatsApp com referencias; combinamos pagamento antecipado por Pix ou provisao; o piloto executa com foto antes de fechar gasto; cada compra volta com nota ou cupom fotografado e troco documentado. A rota usa As saidas atendem Jardim Maia, Vila Galvao, Parque Cecap, Vila Augusta e Ponte Grande, passando por farmacias, cartorios, graficas e mercados do entorno.",
      "Sobre limites, vale o recorte honesto: estao incluidos farmacia, cartorio, grafica, mercado e fornecedores, com prestacao de contas rigorosa e apoio a idosos. Ja ficam de fora compras sem autorizacao de pagamento, retirada de controlados sem receita valida e servicos que exijam presenca do titular.",
      "De segunda a sexta, das 8h as 18h, cada saida simples recebe exemplo de orcamento proprio; multiplas paradas viram roteiro fechado e a espera em filas segue a tolerancia de 15 minutos. Sem taxa surpresa: cobramos R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra. Um exemplo de conta ajuda a planejar: 5 km custa R$ 35,00, 10 km custa R$ 40,00, 15 km custa R$ 52,50 e 20 km custa R$ 65,00. Voce tem 15 minutos de espera sem custo, e o minuto adicional sai R$ 0,60. Entregas ou coletas em cartorios, shopping e aeroporto seguem cotacao a parte. Atendemos segunda a sexta, das 8h as 18h, e o orcamento fechado e enviado ao WhatsApp (11) 95724-8425.",
      "Para decidir se e para voce: e indicado para residencias, idosos, pessoas com mobilidade reduzida e empresas com compras operacionais. Por outro lado, nao e o formato certo para listas de atacado volumosas que exigem carro. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Para itens controlados, como medicamentos tarjados, a retirada segue a exigencia de receita em ordem. Cada compra gera nota ou cupom fiscal fotografado e devolvido junto com o troco documentado, sem arredondamentos.",
    ],

    schemaType: "Service",
  },
  {
    slug: "logistica-urbana",
    title: "Logística Urbana em Guarulhos",
    h1: "Logística urbana em Guarulhos para operações B2B",
    description:
      "Logística urbana em Guarulhos para empresas com múltiplos pontos, janelas e SLAs. Roteirização, pilotos dedicados e indicadores semanais de desempenho.",
    keywords: [
      "logística urbana guarulhos",
      "last mile guarulhos",
      "distribuição urbana sp",
      "operação logística guarulhos",
      "entregas b2b guarulhos",
    ],
    hero: "Quando a operação passa de dez entregas por dia entre filiais, clientes e fornecedores, o improviso sai caro: entra a logística urbana planejada. Desenhamos para a sua empresa em Guarulhos malhas de coleta e entrega com janelas, SLAs, roteirização diária e pilotos dedicados que vestem a camisa da operação. Atendemos distribuidoras de Cumbica, redes varejistas com lojas espalhadas pelos bairros, indústrias com entregas técnicas e operadores de e-commerce com promessa de mesmo dia. O projeto começa com o mapeamento dos seus pontos, volumes e horários críticos, e evolui para rotas fixas com indicadores: taxa de entrega no prazo, tentativas, avarias e tempo médio por parada. Relatórios semanais mostram onde a operação ganha ou perde, e ajustes de rota são propostos com dados, não com achismo. É o last mile tratado como engenharia, com a flexibilidade da moto e a disciplina de uma transportadora.",
    beneficios: [
      "Projeto logístico com mapeamento de pontos, volumes e janelas, convertido em rotas fixas com SLA de prazo e penalidades claras de desempenho.",
      "Pilotos dedicados à sua operação, treinados nos procedimentos da empresa e com postura de equipe própria nos pontos de entrega e coleta.",
      "Indicadores semanais de pontualidade, tentativas, avarias e tempo por parada, com propostas de ajuste de rota baseadas em dados reais.",
      "Escalabilidade para picos sazonais com reforço de pilotos e motos, absorvendo Black Friday, fim de ano e campanhas sem quebrar o nível de serviço.",
    ],
    faq: [
      {
        q: "Para qual volume vale contratar logística urbana?",
        a: "A partir de dez entregas diárias ou cinco pontos fixos com janelas críticas, o projeto já se paga frente a chamados avulsos. Abaixo disso, indicamos a entrega programada, que entrega parte dos benefícios sem o desenho completo.",
      },
      {
        q: "Vocês trabalham com SLA e indicadores?",
        a: "Sim. Definimos em contrato o percentual de entregas no prazo, o tempo máximo de resposta a urgências e as regras de tentativa e devolução. O desempenho é medido semanalmente e apresentado em relatório com plano de ação para desvios.",
      },
      {
        q: "Os pilotos podem usar uniforme da minha empresa?",
        a: "Podem atuar com colete ou uniforme da sua marca, além de crachá da operação, reforçando a identidade perante clientes e recebedores. Alinhamos previamente as regras de abordagem e apresentação de cada ponto.",
      },
      {
        q: "Como é feita a cobrança da operação?",
        a: "Por proposta mensal baseada em rotas, janelas e volume estimado, com faixas de variação para meses de pico e vale. Extras fora do escopo seguem tabela pré-aprovada, sem surpresa no fechamento.",
      },
    ],
    tempoMedio: "SLA contratado por rota",
    precoBase: "proposta mensal sob consulta",
    areasAtendidas: [
      "Cumbica",
      "Cidade Industrial Satélite",
      "Centro de Guarulhos",
      "Bonsucesso",
      "Jardim Presidente Dutra",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma rede varejista com oito lojas espalhadas pelos bairros precisa de malha diaria com SLA em vez de dez chamados avulsos. mapeamos pontos, volumes e horarios criticos; desenhamos rotas fixas com janelas e penalidades de desempenho; pilotos dedicados assumem com postura de equipe propria; indicadores semanais mostram pontualidade, tentativas e tempo por parada; ajustes entram com dados. A rota usa A malha tipica conecta Cumbica, Cidade Industrial Satelite, Centro, Bonsucesso e Jardim Presidente Dutra, com ramificacoes ao Pimentas e ao Aeroporto.",
      "Quanto ao escopo, o combinado e claro: estao incluidos projeto logistico, pilotos dedicados, indicadores semanais e escalabilidade para picos como Black Friday. Ja ficam de fora frota propria dedicada com veiculo da contratante e armazenagem.",
      "A operacao roda de segunda a sexta, das 8h as 18h, sob SLA contratado por rota; extras fora do escopo seguem tabela pre-aprovada tratada como exemplo de orcamento. A conta e direta e sempre apresentada antes da saida: R$ 35,00 ate 8 km, mais R$ 2,50 por km excedente. Como exemplos de orcamento, um trajeto de 5 km fica R$ 35,00, um de 10 km fica R$ 40,00, um de 15 km fica R$ 52,50 e um de 20 km fica R$ 65,00. A tolerancia de espera e de 15 minutos, com adicional de R$ 0,60 por minuto apos esse marco. Missoes em cartorios, shoppings ou no aeroporto recebem cotacao propria. Funcionamos de segunda a sexta, das 8h as 18h, pelo WhatsApp (11) 95724-8425.",
      "Na escolha, considere o perfil ideal: e indicado para distribuidoras, redes varejistas, industrias com entregas tecnicas e e-commerces com promessa de mesmo dia. Por outro lado, nao e o formato certo para operacoes com menos de dez entregas diarias, melhor atendidas pela programada. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Relatorios semanais mostram onde a operacao ganha ou perde, e ajustes de rota sao propostos com dados.",
    ],

    schemaType: "Service",
  },
  {
    slug: "same-day",
    title: "Entrega Same Day em Guarulhos",
    h1: "Entrega same day em Guarulhos para e-commerces e lojas",
    description:
      "Entrega same day em Guarulhos com cutoff estendido, roteirização por bairro e rastreio para o cliente final. Vendeu hoje, seu cliente recebe ainda hoje.",
    keywords: [
      "entrega same day guarulhos",
      "same day delivery guarulhos",
      "entrega no mesmo dia sp",
      "logística e-commerce guarulhos",
      "entrega expressa loja virtual sp",
    ],
    hero: "Prometer entrega no mesmo dia e cumprir exige operação afinada: cutoff claro, coleta pontual, roteirização por bairro e comunicação com o cliente final. A nossa entrega same day em Guarulhos foi construída para e-commerces, lojas de Instagram e varejistas que vendem até o início da tarde e despacham ainda hoje. Coletamos no seu estoque em janelas fixas, separamos por zona de entrega e rodamos roteiros otimizados que cobrem Centro, Vila Augusta, Pimentas, Bonsucesso e os bairros residenciais com densidade de pedidos. O cliente final recebe previsão de chegada e confirmação com foto, o que derruba drasticamente as mensagens de SAC perguntando onde está o pedido. Para picos de campanha, escalamos pilotos extras sem renegociar o contrato. E quando um pedido estoura o cutoff, oferecemos a janela do dia seguinte com prioridade de primeira rota, mantendo a promessa comercial da sua loja sem improviso.",
    beneficios: [
      "Cutoff estendido com janelas fixas de coleta que permitem vender até o início da tarde e ainda entregar no mesmo dia em Guarulhos.",
      "Roteirização por zona de entrega com ordem otimizada de paradas, reduzindo o custo por pedido e aumentando a taxa de primeira tentativa.",
      "Comunicação automática com o cliente final, com previsão de chegada e foto de recebimento que reduzem SAC, chargeback e avaliações negativas.",
      "Escala elástica para campanhas e datas sazonais, com pilotos extras acionados sob demanda e sem renegociação de contrato no pico.",
    ],
    faq: [
      {
        q: "Até que horas posso despachar para entrega no mesmo dia?",
        a: "O cutoff padrão é às 14h para entregas no mesmo dia em horário comercial (seg–sex, 8h–18h), com janelas de coleta às 10h e às 14h. Pedidos após o cutoff entram na primeira rota do próximo dia útil.",
      },
      {
        q: "Como meu cliente acompanha o pedido?",
        a: "Enviamos link de rastreio com a posição do piloto e a previsão de chegada, além da confirmação com foto após a entrega. Você pode integrar esse fluxo ao seu pós-venda por WhatsApp ou e-mail transacional.",
      },
      {
        q: "Vocês fazem entregas à noite?",
        a: "Não. As entregas acontecem em horário comercial (seg–sex, 8h–18h). Se o destinatário só está em casa após esse horário, programamos a entrega para a primeira janela do próximo dia útil.",
      },
      {
        q: "Qual o custo por pedido no same day?",
        a: "O preço por parada em roteiros com múltiplos pedidos na mesma zona cai conforme o volume mensal. Pedidos avulsos fora de roteiro seguem a tabela real Moto11 (0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra).",
      },
    ],
    tempoMedio: "entrega no mesmo dia",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Pimentas",
      "Bonsucesso",
      "Parque Cecap",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Uma loja de Instagram no Centro vendeu vinte pedidos ate as 13h e prometeu entrega ainda hoje. coletamos no estoque em janela fixa; separamos por zona; rodamos a ordem otimizada; o cliente final recebe previsao e confirma com foto; pedidos apos o cutoff entram na primeira rota do dia seguinte com prioridade. A rota usa Os roteiros por zona cobrem Centro, Vila Augusta, Pimentas, Bonsucesso e os residenciais densos, com cutoff padrao as 14h e coletas as 10h e as 14h.",
      "Nos limites do servico, funciona assim: estao incluidos cutoff estendido, roteirizacao por zona, comunicacao ao cliente final e escala elastica em campanhas. Ja ficam de fora garantia de janela exata minuto a minuto e operacao fora da area de cobertura sem acordo previo.",
      "De segunda a sexta, das 8h as 18h, o padrao entrega ate as 20h com rota noturna dedicada sob acordo; cada roteiro recebe exemplo de orcamento por parada com faixas por volume. Para planejar o custo, use a regra verdadeira: R$ 35,00 cobre ate 8 km; cada quilometro a mais soma R$ 2,50. Na pratica do orcamento, isso significa R$ 35,00 aos 5 km, R$ 40,00 aos 10 km, R$ 52,50 aos 15 km e R$ 65,00 aos 20 km. A espera inclui 15 minutos de cortesia e cobra R$ 0,60 por minuto seguinte. Servicos com cartorio, shopping ou aeroporto sao orcados caso a caso. O expediente e segunda a sexta, das 8h as 18h, e o fechamento acontece no WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para e-commerces, lojas de Instagram e varejistas com venda ate o inicio da tarde. Por outro lado, nao e o formato certo para pedidos unitarios isolados fora de roteiro, que seguem a tabela do expresso. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Quando um pedido estoura o cutoff, ele entra na janela do dia seguinte com prioridade de primeira rota.",
    ],

    schemaType: "Service",
  },
  {
    slug: "advogados",
    title: "Motoboy para Advogados em Guarulhos",
    h1: "Motoboy para advogados em Guarulhos e no Fórum",
    description:
      "Motoboy para advogados em Guarulhos com diligências no Fórum, protocolos e cópias. Sigilo profissional, prazo fatal cumprido e protocolo formal com foto.",
    keywords: [
      "motoboy para advogados guarulhos",
      "diligência jurídica guarulhos",
      "motoboy fórum guarulhos",
      "protocolo judicial guarulhos",
      "entrega peças jurídicas sp",
    ],
    hero: "Prazos processuais não admitem desculpa: o motoboy para advogados em Guarulhos executa diligências no Fórum, protocolos físicos, retirada de certidões, cópias de autos e entregas a clientes com o rigor que a advocacia exige. Conhecemos os cartórios do Fórum de Guarulhos, os horários de atendimento, as exigências de cada balcão e os atalhos de quem vive de prazo. Escritórios do Centro, da Vila Augusta e da Avenida Salgado Filho contam com piloto habitual que já sabe onde protocolar cada peça e como conferir o carimbo antes de sair do balcão. Petições urgentes recebem tratamento de prazo fatal, com saída imediata e comprovação reforçada por foto do protocolo. Também distribuímos peças a clientes e correspondentes, buscamos documentos em cartórios e levamos pastas a audiências e sustentações. O sigilo profissional é absoluto: nada do conteúdo é exposto, fotografado ou comentado, e cada diligência gera relatório próprio para a sua prestação de contas ao cliente.",
    beneficios: [
      "Diligências no Fórum de Guarulhos com conhecimento de cartórios, horários, balcões e conferência de carimbo antes de sair do atendimento.",
      "Tratamento de prazo fatal para petições urgentes, com saída imediata, rota direta e comprovação reforçada por foto do protocolo carimbado.",
      "Sigilo profissional absoluto sobre conteúdos, partes e valores, com transporte lacrado e pilotos orientados ao padrão da advocacia.",
      "Relatório por diligência com data, hora, balcão, protocolo e fotos, pronto para anexar à prestação de contas e à cobrança de honorários.",
    ],
    faq: [
      {
        q: "Vocês protocolam petições físicas no Fórum?",
        a: "Sim. Protocolamos petições, juntadas e documentos nos cartórios competentes, conferindo carimbo, data e numeração antes de sair do balcão. Enviamos a foto do protocolo na hora e devolvemos a via física ao escritório no mesmo dia.",
      },
      {
        q: "Fazem cópias de autos e retirada de certidões?",
        a: "Fazemos, mediante procuração ou autorização quando exigida. Retiramos certidões, cópias de processos físicos e documentos em cartórios extrajudiciais, com conferência de páginas e numeração antes da entrega ao advogado.",
      },
      {
        q: "Atendem diligências em São Paulo e outros fóruns?",
        a: "Atendemos fóruns da capital, como Barra Funda, João Mendes e trabalhistas, além de comarcas vizinhas como São Miguel e Itaquaquecetuba. Diligências externas são orçadas por roteiro, com prazo e comprovação combinados antes da saída.",
      },
      {
        q: "Como é cobrado o serviço para escritórios?",
        a: "Por diligência avulsa com preço pela tabela real Moto11 (0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra), ou por pacote mensal para bancas com demanda recorrente. Pacotes incluem piloto habitual e relatório consolidado para faturamento.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Jardim Santa Mena",
      "Paraventi",
      "Itapegica",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma banca do Centro tem contestacao com prazo fatal e audiencia simultanea, sem ninguem para ir ao Forum. voce envia a peca com checklist; conferimos paginas, assinaturas e anexos; protocolamos no cartorio competente verificando carimbo e data; enviamos foto na hora; devolvemos a via fisica no mesmo dia com relatorio por diligencia. A rota usa As diligencias concentram-se no Forum de Guarulhos, na Salgado Filho, na Vila Augusta e nos cartorios centrais, com extensao a Barra Funda, Joao Mendes e comarcas vizinhas.",
      "Sobre limites, vale o recorte honesto: estao incluidos protocolo fisico, distribuicao, copias de autos, diligencias externas e sigilo profissional absoluto. Ja ficam de fora consultoria juridica, elaboracao de pecas e atos privativos de advogado.",
      "De segunda a sexta, das 8h as 18h, peticoes urgentes recebem saida imediata em rota direta; diligencias externas sao orcadas por roteiro como exemplo de orcamento com prazo combinado. Pela tabela real Moto11, o calculo e R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra acima disso. Como exemplo de orcamento: 5 km sai R$ 35,00; 10 km sai R$ 40,00; 15 km sai R$ 52,50; 20 km sai R$ 65,00. A espera tem 15 minutos de tolerancia e, apos esse periodo, R$ 0,60 por minuto. Destinos com coleta ou entrega em cartorios, shopping ou aeroporto recebem cotacao a parte, e o atendimento ocorre de segunda a sexta, das 8h as 18h. O valor fechado chega pelo WhatsApp (11) 95724-8425 antes da coleta.",
      "Para decidir se e para voce: e indicado para bancas, departamentos juridicos e correspondentes com diligencia diaria. Por outro lado, nao e o formato certo para pessoas fisicas sem peca preparada que precisem de orientacao processual. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Cada diligencia gera relatorio proprio, pronto para anexar a prestacao de contas e a cobranca de honorarios.",
    ],

    schemaType: "Service",
  },
  {
    slug: "contadores",
    title: "Motoboy para Contadores em Guarulhos",
    h1: "Motoboy para contadores em Guarulhos no fechamento",
    description:
      "Motoboy para contadores em Guarulhos com busca de documentos, guias e contratos assinados. Piloto habitual que conhece sua rotina e o fechamento mensal.",
    keywords: [
      "motoboy para contadores guarulhos",
      "motoboy contábil guarulhos",
      "buscar documentos contábeis sp",
      "entrega de guias guarulhos",
      "diligência contábil guarulhos",
    ],
    hero: "Todo escritório contábil conhece o gargalo: clientes que atrasam documentos, guias que vencem amanhã, contratos que precisam de assinatura hoje. O motoboy para contadores em Guarulhos foi desenhado para esse ciclo, com busca programada de documentos em clientes, entrega de guias, DARFs e holerites, e coleta de assinaturas em contratos e distratos. Atendemos bancas do Centro, da Avenida Salgado Filho, da Vila Augusta e do Taboão, com intensificação natural nos dias 5, 10, 15 e 20, quando os vencimentos se acumulam. O piloto habitual conhece os clientes do escritório, os responsáveis pelo financeiro de cada empresa e os atalhos para fechar a rota do dia. Documentos fiscais viajam organizados por cliente e competência, com checklist de recebimento que aponta na hora o que veio faltando. No fechamento do mês, reforçamos a operação com segundo piloto para que nenhuma guia vença por falta de braço na rua.",
    beneficios: [
      "Busca programada de documentos em clientes com checklist por competência, apontando na coleta o que está faltando para o fechamento.",
      "Entrega de guias, DARFs, holerites e contratos com protocolo, evitando vencimentos e multas por atraso na última milha documental.",
      "Piloto habitual que conhece os clientes da banca, os responsáveis financeiros e a rota ideal para fechar o giro do dia sem retrabalho.",
      "Reforço nos dias de pico de vencimento, com segundo piloto disponível para absorver os dias 5, 10, 15 e 20 sem sobrecarregar a operação.",
    ],
    faq: [
      {
        q: "Vocês buscam documentos nos clientes do escritório?",
        a: "Sim, com roteiro programado por região e checklist por cliente. O piloto confere notas, extratos e comprovantes na retirada e sinaliza na hora o que ficou faltando, permitindo cobrar o cliente antes do vencimento.",
      },
      {
        q: "Entregam guias e documentos com vencimento no dia?",
        a: "Entregamos com prioridade de prazo fatal, incluindo guias, DARFs e contratos que vencem no dia. Para esses casos, despachamos em rota direta e confirmamos o recebimento com foto e horário imediatamente.",
      },
      {
        q: "Como funciona no pico do fechamento mensal?",
        a: "Reforçamos sua conta com piloto adicional nos dias críticos, mantemos janelas estendidas de coleta e priorizamos vencimentos do dia. Basta avisar a previsão de volume para dimensionarmos a equipe da semana.",
      },
      {
        q: "Os documentos são organizados por cliente?",
        a: "Sim. Todo material é identificado por cliente e competência, com protocolo de entrega e relatório diário. Isso facilita a baixa no seu sistema, a cobrança de honorários e a auditoria de documentos recebidos.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Taboão",
      "Vila Augusta",
      "São João",
      "Vila Rio de Janeiro",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Uma banca contabil do Taboao tem quarenta clientes para buscar documentos antes dos vencimentos dos dias 10 e 20. montamos roteiro por regiao com checklist por cliente e competencia; o piloto habitual confere notas e extratos na retirada; sinaliza faltas na hora; entrega guias e contratos com protocolo; o relatorio diario chega organizado para baixa no sistema. A rota usa O giro cobre Centro, Taboao, Vila Augusta, Sao Joao e Vila Rio, intensificando nos dias 5, 10, 15 e 20 com segundo piloto de reforco.",
      "Quanto ao escopo, o combinado e claro: estao incluidos busca programada, entrega de guias e DARFs, piloto habitual e reforco em pico de vencimento. Ja ficam de fora escrituracao contabil, calculo de tributos e responsabilidade tecnica pelos numeros.",
      "De segunda a sexta, das 8h as 18h, vencimentos do dia recebem prioridade de prazo fatal em rota direta; cada ciclo recebe exemplo de orcamento com janelas e reforco dimensionado. O preco segue a tabela oficial: R$ 35,00 ate 8 km, mais R$ 2,50 por quilometro adicional. Para referencia de orcamento, considere 5 km por R$ 35,00, 10 km por R$ 40,00, 15 km por R$ 52,50 e 20 km por R$ 65,00. Ha 15 minutos de espera inclusos; o excedente custa R$ 0,60 o minuto. Rotas envolvendo cartorio, shopping ou aeroporto pedem cotacao especifica. Operamos de segunda a sexta, das 8h as 18h, com confirmacao de valor no WhatsApp (11) 95724-8425 antes de qualquer deslocamento.",
      "Na escolha, considere o perfil ideal: e indicado para bancas contabeis, BPOs financeiros e empresas com fechamento mensal pesado. Por outro lado, nao e o formato certo para rotinas sem vencimento critico, que funcionam no avulso simples. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. No fechamento do mes, o reforco com segundo piloto impede que qualquer guia venca por falta de braco na rua.",
    ],

    schemaType: "Service",
  },
  {
    slug: "hospitais",
    title: "Motoboy para Hospitais em Guarulhos",
    h1: "Motoboy para hospitais em Guarulhos com prontidão",
    description:
      "Motoboy para hospitais em Guarulhos com transporte de amostras, documentos e medicamentos. Equipe treinada, biossegurança e circuitos programados em horário comercial.",
    keywords: [
      "motoboy para hospitais guarulhos",
      "transporte hospitalar guarulhos",
      "coleta hospitalar sp",
      "motoboy saúde hospitalar guarulhos",
      "entrega medicamentos hospital sp",
    ],
    hero: "A rotina hospitalar gera demandas logísticas contínuas: amostras para laboratórios externos, medicamentos entre unidades, documentos para convênios, próteses e órteses para o centro cirúrgico, resultados urgentes para o pronto-atendimento. O nosso motoboy para hospitais em Guarulhos atende as principais unidades da cidade, do Centro à Vila Galvão, do Pimentas ao Bonsucesso, com pilotos treinados em biossegurança e postura adequada ao ambiente hospitalar. Operamos em horário comercial (seg–sex, 8h–18h) com bolsas térmicas para materiais sensíveis, compartimentos separados para documentos e insumos, e protocolos de entrega diretamente ao responsável técnico, nunca largados em recepções. Para hospitais com demanda contínua, mantemos circuitos programados ao longo do dia. Cada transporte gera registro com horários e recebedor, compondo a rastreabilidade que auditorias hospitalares e acreditações exigem.",
    beneficios: [
      "Pilotos treinados em biossegurança com postura adequada ao ambiente hospitalar, incluindo EPI, higiene e entrega direta ao responsável técnico.",
      "Bolsas térmicas e compartimentos separados para amostras, medicamentos, documentos e insumos, sem contaminação cruzada entre materiais.",
      "Circuitos programados em horário comercial entre hospital, laboratórios, farmácias e operadoras, com prioridade para demandas críticas do dia.",
      "Rastreabilidade completa com horários, recebedores e protocolos, pronta para auditorias internas, acreditações e comissões de qualidade.",
    ],
    faq: [
      {
        q: "Vocês transportam amostras e medicamentos controlados?",
        a: "Sim, com bolsas térmicas, separação adequada e entrega ao responsável técnico mediante protocolo. Medicamentos controlados exigem autorização formal e documentação da farmácia hospitalar, conferidas antes de cada transporte.",
      },
      {
        q: "Atendem emergências fora do horário comercial?",
        a: "Nosso atendimento hospitalar é em horário comercial (seg–sex, 8h–18h), com circuitos programados e prioridade para demandas críticas do dia. Fora desse horário, chame no WhatsApp e retornamos no próximo dia útil.",
      },
      {
        q: "A equipe pode circular em áreas restritas?",
        a: "Nossos pilotos seguem as normas de cada unidade, utilizam EPI exigido e realizam entregas nos pontos designados, como farmácia, laboratório e SAME, sem circular em áreas restritas além do ponto de entrega autorizado.",
      },
      {
        q: "Como é formalizada a contratação pelo hospital?",
        a: "Por contrato de prestação continuada com escopo, horários, circuitos e indicadores, incluindo cláusulas de sigilo, biossegurança e responsabilidade técnica. Fornecemos toda a documentação para cadastro de fornecedores e comissões.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Galvão",
      "Pimentas",
      "Bonsucesso",
      "Parque Cecap",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Um hospital da Vila Galvao precisa enviar amostras ao laboratorio externo e buscar um medicamento da farmacia central na mesma manha. alinhamos escopo, horarios e pontos designados como farmacia, laboratorio e SAME; pilotos com EPI retiram com protocolo; transportam em compartimentos separados; entregam direto ao responsavel tecnico; cada etapa gera registro para auditoria e acreditacao. A rota usa Os circuitos atendem unidades do Centro, Vila Galvao, Pimentas, Bonsucesso e Parque Cecap, ligando hospital a laboratorios, farmacias e operadoras.",
      "Nos limites do servico, funciona assim: estao incluidos biosseguranca, bolsas termicas, circuitos programados, plantao para intercorrencias e rastreabilidade completa. Ja ficam de fora circulacao em areas restritas alem do ponto autorizado e transporte sem autorizacao da farmacia hospitalar.",
      "Os circuitos diurnos rodam de segunda a sexta, das 8h as 18h, sob contrato com indicadores; intercorrencias noturnas seguem canal prioritario do hospital conveniado com exemplo de orcamento proprio. Transparencia de valores: a base e R$ 35,00 para trajetos de ate 8 km, acrescida de R$ 2,50 por km que passar desse limite. Exemplos praticos de orcamento ficam assim: 5 km equivale a R$ 35,00; 10 km a R$ 40,00; 15 km a R$ 52,50; 20 km a R$ 65,00. Incluimos 15 minutos de espera; depois disso, cada minuto sai R$ 0,60. Casos de cartorios, shoppings e aeroporto sao cotados separadamente. Nosso horario e segunda a sexta, das 8h as 18h, e cada proposta e fechada pelo WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para hospitais, prontos-atendimentos, laboratorios hospitalares e operadoras com demanda continua. Por outro lado, nao e o formato certo para remocoes de pacientes e transporte de equipamentos de grande porte. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Cada transporte gera registro com horarios e recebedor, compondo a rastreabilidade que as auditorias hospitalares exigem. Para hospitais com demanda continua, ha circuitos programados ao longo do dia e plantao para intercorrencias pelo canal prioritario.",
    ],

    schemaType: "Service",
  },
  {
    slug: "cartorio",
    title: "Motoboy para Cartório em Guarulhos",
    h1: "Motoboy para cartório em Guarulhos: filas e certidões",
    description:
      "Motoboy para cartório em Guarulhos com retirada de certidões, escrituras e autenticações. Enfrentamos a fila e devolvemos tudo protocolado com recibo.",
    keywords: [
      "motoboy cartório guarulhos",
      "retirar certidão guarulhos",
      "despachante cartório guarulhos",
      "segunda via documentos guarulhos",
      "autenticação cartório sp",
    ],
    hero: "Certidão de nascimento para matrícula, escritura para financiamento, procuração para inventário, autenticação para concorrência: quase todo projeto importante passa pelo balcão de um cartório. O nosso motoboy para cartório em Guarulhos cobre os tabelionatos e registros civis do Centro, da Vila Augusta, do Pimentas e do Bonsucesso, além dos cartórios de notas e protestos mais movimentados da cidade. Apresentamos o pedido com a documentação correta, pagamos os emolumentos mediante provisão, aguardamos a lavratura e devolvemos tudo com recibo oficial e protocolo. Conhecemos os prazos médios de cada serventia, os dias de maior movimento e quais atos exigem procuração, reconhecimento de firma ou presença das partes, então orientamos antes para evitar viagem perdida. Escritórios de advocacia, imobiliárias e despachantes usam o serviço diariamente; pessoas físicas recorrem quando precisam resolver sem faltar ao trabalho. É a fila do cartório vencida por quem já sabe o caminho do balcão.",
    beneficios: [
      "Cobertura dos cartórios de notas, registros civis, imóveis e protestos de Guarulhos, com conhecimento de prazos, exigências e dias de pico.",
      "Orientação prévia sobre procurações, firmas e documentos necessários, evitando viagens perdidas por falta de papel no balcão.",
      "Pagamento de emolumentos mediante provisão com recibo oficial devolvido, prestação de contas transparente e troco documentado.",
      "Devolução protocolada com recibo da serventia, conferência de nomes, datas e averbações antes de sair do cartório.",
    ],
    faq: [
      {
        q: "Quais atos vocês conseguem resolver no cartório?",
        a: "Segundas vias de certidões, autenticações, reconhecimentos de firma, escrituras simples, procurações e consultas de protesto, conforme a exigência de cada ato. Atos que exigem presença das partes são orientados previamente para agendamento correto.",
      },
      {
        q: "Preciso enviar procuração para a retirada?",
        a: "Depende do ato e da serventia. Certidões públicas geralmente dispensam procuração; escrituras, inventários e atos personalíssimos exigem autorização ou presença. Confirmamos a exigência exata antes da saída para não perder a viagem.",
      },
      {
        q: "Como funcionam os emolumentos e as taxas?",
        a: "Você provisiona o valor estimado por Pix antes da saída, pagamos no balcão e devolvemos o recibo oficial com o troco documentado. A tabela de emolumentos é pública e conferimos o valor cobrado em cada atendimento.",
      },
      {
        q: "Qual o prazo para ficar pronta uma certidão?",
        a: "Varia por serventia e tipo: certidões simples saem em 1 a 5 dias úteis, e atos complexos podem levar semanas. Retiramos no prazo, acompanhamos pendências e avisamos sobre qualquer exigência complementar do cartório.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "sob cotação",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Vila Augusta",
      "Pimentas",
      "Bonsucesso",
      "São João",
    ],
    detalhes: [
      "Na pratica, o atendimento segue um roteiro fechado: Uma imobiliaria do Pimentas precisa da segunda via de uma certidao de onus para liberar financiamento ainda nesta semana. voce informa o ato e os dados da busca; confirmamos exigencias de procuracao e documentos; provisionamos emolumentos por Pix; apresentamos o pedido; aguardamos a lavratura; conferimos nomes, datas e averbacoes; devolvemos recibo oficial e protocolo. A rota usa A cobertura alcanca tabelionatos e registros do Centro, Vila Augusta, Pimentas, Bonsucesso e Sao Joao, alem de notas e protestos movimentados.",
      "Sobre limites, vale o recorte honesto: estao incluidos segundas vias, autenticacoes, reconhecimentos, consultas de protesto e acompanhamento de pendencias. Ja ficam de fora atos personalissimos sem presenca das partes e promessa de prazo de serventia, que varia de 1 a 5 dias uteis ou semanas.",
      "De segunda a sexta, das 8h as 18h, cada ida recebe exemplo de orcamento com tolerancia de espera; por envolver cartorio, a missao recebe cotacao a parte e o recibo de emolumentos volta documentado. Sem taxa surpresa: cobramos R$ 35,00 fixos ate 8 km e R$ 2,50 por km extra. Um exemplo de conta ajuda a planejar: 5 km custa R$ 35,00, 10 km custa R$ 40,00, 15 km custa R$ 52,50 e 20 km custa R$ 65,00. Voce tem 15 minutos de espera sem custo, e o minuto adicional sai R$ 0,60. Entregas ou coletas em cartorios, shopping e aeroporto seguem cotacao a parte. Atendemos segunda a sexta, das 8h as 18h, e o orcamento fechado e enviado ao WhatsApp (11) 95724-8425.",
      "Para decidir se e para voce: e indicado para advocacias, imobiliarias, despachantes e pessoas fisicas sem tempo de faltar ao trabalho. Por outro lado, nao e o formato certo para quem precisa do documento na hora quando a serventia exige dias de lavratura. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Escritorios de advocacia, imobiliarias e despachantes usam o servico diariamente para vencer a fila do balcao.",
    ],

    schemaType: "Service",
  },
  {
    slug: "pecas-juridicas",
    title: "Entrega de Peças Jurídicas em Guarulhos",
    h1: "Entrega de peças jurídicas em Guarulhos com prazo fatal",
    description:
      "Entrega de peças jurídicas em Guarulhos com protocolo no Fórum, cópias e distribuição a correspondentes. Prazo fatal cumprido com comprovação fotográfica.",
    keywords: [
      "entrega de peças jurídicas guarulhos",
      "protocolo de petição guarulhos",
      "correspondente jurídico guarulhos",
      "diligência processual sp",
      "distribuição de peças fórum guarulhos",
    ],
    hero: "Petição inicial, contestação, recurso, memoriais, contrarrazões: cada peça jurídica carrega um prazo que, perdido, não volta. A nossa entrega de peças jurídicas em Guarulhos combina protocolo físico no Fórum, distribuição a correspondentes e cópias autenticadas com disciplina de quem entende processo. Atendemos bancas do Centro e da Vila Augusta, departamentos jurídicos de Cumbica e escritórios da capital com causas na comarca de Guarulhos. Antes da saída, conferimos páginas, assinaturas e anexos contra o checklist do advogado; no balcão, verificamos carimbo, data e numeração; depois, devolvemos a via protocolada com foto imediata pelo WhatsApp. Para recursos e peças volumosas, organizamos encadernação e separação de vias por destinatário. Também cumprimos diligências externas como distribuição em outras comarcas, carga rápida de autos físicos quando autorizada e entrega de memoriais em gabinetes. O advogado acompanha tudo sem sair da audiência: a rua anda enquanto ele sustenta.",
    beneficios: [
      "Conferência prévia de páginas, assinaturas e anexos contra o checklist do advogado, eliminando devoluções por peça incompleta ou sem firma.",
      "Protocolo com verificação de carimbo, data e numeração no balcão, com foto imediata ao advogado e devolução da via física no mesmo dia.",
      "Distribuição a correspondentes e outras comarcas com controle de vias por destinatário, encadernação e organização de anexos volumosos.",
      "Acompanhamento em tempo real para o advogado em audiência, com atualizações de cada etapa até o protocolo definitivo e arquivado.",
    ],
    faq: [
      {
        q: "Vocês conferem a peça antes de protocolar?",
        a: "Sim. Conferimos número de páginas, assinaturas, anexos e identificação do processo contra o seu checklist antes de sair. Qualquer divergência é comunicada imediatamente para correção, evitando protocolo de peça incompleta.",
      },
      {
        q: "Fazem distribuição em outras comarcas?",
        a: "Fazemos distribuição e diligências em comarcas vizinhas e nos fóruns da capital, com orçamento por roteiro e prazo combinado. Para causas fora da região, articulamos com correspondentes parceiros e acompanhamos até a confirmação.",
      },
      {
        q: "Entregam memoriais em gabinetes?",
        a: "Entregamos memoriais, sustentações escritas e documentos a gabinetes e câmaras quando permitido, seguindo os protocolos de recepção de cada unidade e registrando data, hora e recebedor para o seu controle.",
      },
      {
        q: "Como recebo a comprovação do protocolo?",
        a: "Na hora, por foto do carimbo no WhatsApp, e no mesmo dia com a via física devolvida ao escritório. Mantemos arquivo digital dos protocolos para consulta futura em caso de questionamento de tempestividade.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Centro de Guarulhos",
      "Paraventi",
      "Vila Augusta",
      "Jardim Santa Mena",
      "Itapegica",
    ],
    detalhes: [
      "O funcionamento e simples e rastreavel: Um correspondente na capital tem recurso volumoso para distribuir na comarca de Guarulhos com protocolo ainda hoje. conferimos paginas, assinaturas e anexos contra seu checklist; organizamos vias por destinatario; protocolamos verificando carimbo, data e numeracao; fotografamos na hora; devolvemos a via no mesmo dia e arquivamos digitalmente para prova de tempestividade. A rota usa O eixo liga bancas do Centro e da Vila Augusta ao Forum, com distribuicao a Paraventi, Santa Mena, Itapegica e, quando preciso, a comarcas vizinhas e a capital.",
      "Quanto ao escopo, o combinado e claro: estao incluidos protocolo, distribuicao, copias, memoriais em gabinetes quando permitido e arquivo digital dos protocolos. Ja ficam de fora redacao da peca, calculo de custas e sustentacao oral.",
      "De segunda a sexta, das 8h as 18h, pecas urgentes saem em rota direta; distribuicoes externas seguem exemplo de orcamento por roteiro com prazo combinado. A conta e direta e sempre apresentada antes da saida: R$ 35,00 ate 8 km, mais R$ 2,50 por km excedente. Como exemplos de orcamento, um trajeto de 5 km fica R$ 35,00, um de 10 km fica R$ 40,00, um de 15 km fica R$ 52,50 e um de 20 km fica R$ 65,00. A tolerancia de espera e de 15 minutos, com adicional de R$ 0,60 por minuto apos esse marco. Missoes em cartorios, shoppings ou no aeroporto recebem cotacao propria. Funcionamos de segunda a sexta, das 8h as 18h, pelo WhatsApp (11) 95724-8425.",
      "Na escolha, considere o perfil ideal: e indicado para bancas, correspondentes e departamentos juridicos com prazo fatal. Por outro lado, nao e o formato certo para diligencias sem peca pronta ou sem checklist de conferencia. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. O advogado acompanha tudo sem sair da audiencia, enquanto a rua anda com atualizacoes de cada etapa. Para recursos e pecas volumosas, a operacao organiza encadernacao e separacao de vias por destinatario antes da saida.",
    ],

    schemaType: "Service",
  },
  {
    slug: "exames-medicos",
    title: "Transporte de Exames Médicos em Guarulhos",
    h1: "Transporte de exames médicos em Guarulhos com urgência",
    description:
      "Transporte de exames médicos em Guarulhos com coleta domiciliar, cadeia do frio e entrega prioritária. Resultado urgente chega a tempo da sua consulta.",
    keywords: [
      "transporte de exames médicos guarulhos",
      "levar exame laboratório guarulhos",
      "coleta domiciliar exames sp",
      "entrega de resultados guarulhos",
      "motoboy exames guarulhos",
    ],
    hero: "Exame pré-operatório com cirurgia marcada, biópsia aguardando laudo, painel com janela de análise curta: o transporte de exames médicos em Guarulhos trata cada amostra e cada envelope como prioridade clínica. Coletamos em domicílios do Jardim Maia, da Vila Galvão e do Parque Cecap, em clínicas da Vila Augusta e do Centro, e em hospitais de toda a cidade, levando ao laboratório indicado com rota direta e registro de horários. Amostras sensíveis viajam em bolsa térmica com gelo reutilizável e separação total de documentos; envelopes com lâminas, pedidos médicos e resultados seguem lacrados e identificados. No caminho inverso, buscamos resultados prontos e entregamos ao paciente ou ao consultório antes da consulta, fechando o ciclo com pontualidade. Idosos e pacientes com mobilidade reduzida contam com coleta domiciliar agendada, atendimento cordial e comunicação clara com a família sobre cada etapa do transporte.",
    beneficios: [
      "Coleta domiciliar agendada com atendimento cordial, ideal para idosos, pacientes com mobilidade reduzida e pré-operatórios com agenda apertada.",
      "Bolsa térmica com gelo reutilizável para amostras sensíveis, com rota direta, registro de horários e entrega ao responsável técnico.",
      "Busca de resultados prontos com entrega ao paciente ou ao consultório antes da consulta, fechando o ciclo exame-resultado sem deslocamento.",
      "Sigilo e identificação lacrada de envelopes, lâminas e pedidos médicos, com comunicação clara à família sobre cada etapa do transporte.",
    ],
    faq: [
      {
        q: "Vocês coletam exames em casa?",
        a: "Sim, mediante agendamento com o pedido médico e as orientações de jejum ou preparo. O piloto retira o material no horário combinado, acondiciona corretamente e leva ao laboratório indicado com registro de horários.",
      },
      {
        q: "Amostras com prazo curto de análise são priorizadas?",
        a: "Sim. Exames com janela crítica, como pré-operatórios e culturas, recebem piloto dedicado em rota direta, com aviso de saída e previsão de chegada ao laboratório acompanhados em tempo real pela família ou pela clínica.",
      },
      {
        q: "Vocês buscam o resultado depois de pronto?",
        a: "Buscamos resultados impressos ou mídias e entregamos ao paciente ou ao consultório, inclusive com agendamento casado à data da consulta. Para laboratórios com liberação online, orientamos o acesso digital sem custo adicional.",
      },
      {
        q: "Quanto custa o transporte de exames?",
        a: "Seguimos a tabela real Moto11: 0–8 km por R$ 35,00 fixos, +R$ 2,50 por km extra, com 15 min de tolerância de espera (+R$ 0,60/min após). Circuitos recorrentes para clínicas recebem proposta por volume.",
      },
    ],
    tempoMedio: "prazo informado no orçamento em horário comercial",
    precoBase: "a partir de R$ 35,00 (0–8 km) — cotação por distância",
    areasAtendidas: [
      "Jardim Maia",
      "Vila Galvão",
      "Parque Cecap",
      "Vila Augusta",
      "Centro de Guarulhos",
    ],
    detalhes: [
      "Cada chamado obedece a mesma sequencia testada: Uma paciente do Parque Cecap tem cirurgia marcada e o pre-operatorio precisa chegar ao laboratorio antes do meio-dia. agendamos a coleta com pedido medico e orientacoes de preparo; retiramos no horario com atendimento cordial; acondicionamos em bolsa termica quando sensivel; levamos em rota direta com horarios registrados; buscamos o resultado e entregamos antes da consulta. A rota usa As coletas atendem domicilios do Jardim Maia, Vila Galvao e Parque Cecap, clinicas da Vila Augusta e do Centro e hospitais de toda a cidade.",
      "Nos limites do servico, funciona assim: estao incluidos coleta domiciliar, cadeia do frio, busca de resultados e comunicacao clara com a familia. Ja ficam de fora coleta biologica invasiva, interpretacao de laudo e orientacao clinica.",
      "De segunda a sexta, das 8h as 18h, exames com janela critica recebem piloto dedicado; cada transporte recebe exemplo de orcamento por distancia e urgencia, e circuitos para clinicas tem tabela por volume. Para planejar o custo, use a regra verdadeira: R$ 35,00 cobre ate 8 km; cada quilometro a mais soma R$ 2,50. Na pratica do orcamento, isso significa R$ 35,00 aos 5 km, R$ 40,00 aos 10 km, R$ 52,50 aos 15 km e R$ 65,00 aos 20 km. A espera inclui 15 minutos de cortesia e cobra R$ 0,60 por minuto seguinte. Servicos com cartorio, shopping ou aeroporto sao orcados caso a caso. O expediente e segunda a sexta, das 8h as 18h, e o fechamento acontece no WhatsApp (11) 95724-8425.",
      "O servico vale a pena quando: e indicado para pacientes, idosos, clinicas e consultorios com ciclo exame-resultado. Por outro lado, nao e o formato certo para amostras que exijam veiculo climatizado dedicado. Para pedir, envie origem, destino, descricao do material e prazo-limite real pelo WhatsApp (11) 95724-8425, em horario comercial de segunda a sexta, das 8h as 18h, e receba o valor fechado com a previsao antes de confirmar. Idosos e pacientes com mobilidade reduzida contam com coleta domiciliar agendada e comunicacao clara com a familia.",
    ],

    schemaType: "Service",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}
