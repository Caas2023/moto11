export interface SpNeighborhoodFaq {
  pergunta: string;
  resposta: string;
}

export interface SpNeighborhoodRoute {
  slug: string;
  nome: string;
}

export interface SpNeighborhood {
  slug: string;
  nome: string;
  regiao: string;
  subtitulo: string;
  resumoRota: string;
  eixosViarios: string[];
  demandasComuns: string[];
  orientacaoTransito: string;
  faq: SpNeighborhoodFaq[];
  rotasRelacionadas: SpNeighborhoodRoute[];
}

export const neighborhoodsSp: SpNeighborhood[] = [
  {
    slug: "se",
    nome: "S\u00e9",
    regiao: "Centro Hist\u00f3rico e Judici\u00e1rio",
    subtitulo: "Conex\u00e3o direta entre Guarulhos e o polo judicial, cart\u00f3rios centrais e f\u00f3runs da capital",
    resumoRota: "A rota entre Guarulhos e a S\u00e9 conecta o polo empresarial do munic\u00edpio ao centro hist\u00f3rico e judici\u00e1rio de S\u00e3o Paulo. Concentrando o Tribunal de Justi\u00e7a do Estado de S\u00e3o Paulo, o F\u00f3rum Jo\u00e3o Mendes J\u00fanior, grandes tabelionatos de notas e \u00f3rg\u00e3os p\u00fablicos, a regi\u00e3o exige transporte seguro e sigiloso de peti\u00e7\u00f5es, processos, certid\u00f5es e procura\u00e7\u00f5es. A Moto11 planeja a sa\u00edda pelo corredor Dutra/Marginal Tiet\u00ea e Avenida do Estado, contornando o tr\u00e1fego denso do centro paulistano para assegurar que prazos forenses impreter\u00edveis sejam cumpridos.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Tiradentes", "Av. do Estado", "Rua Boa Vista"],
    demandasComuns: ["Petições físicas e autos processuais para o Fórum João Mendes", "Autenticações e escrituras em tabelionatos centrais de SP", "Malotes bancários e ordens de pagamento em agências centrais", "Certidões em repartições públicas estaduais e municipais"],
    orientacaoTransito: "O quadril\u00e1tero da S\u00e9 possui cal\u00e7ad\u00f5es exclusivos para pedestres e restri\u00e7\u00f5es severas de tr\u00e1fego para autom\u00f3veis. Nossos pilotos realizam a aproxima\u00e7\u00e3o por vias de acesso r\u00e1pido e completam a entrega em m\u00e3os nos cart\u00f3rios e secretarias das varas judiciais.",
    faq: [
      {
        pergunta: "Voc\u00eas realizam protocolo presencial de processos na S\u00e9?",
        resposta: "Sim. O piloto leva a peti\u00e7\u00e3o, colhe carimbo e comprovante com data e hor\u00e1rio e envia foto imediatamente no WhatsApp.",
      },
      {
        pergunta: "Quanto tempo dura o trajeto de Guarulhos at\u00e9 a S\u00e9 de moto?",
        resposta: "A dura\u00e7\u00e3o varia conforme o tr\u00e2nsito da Marginal Tiet\u00ea e Av. Tiradentes, sendo informada em tempo real no momento da cota\u00e7\u00e3o.",
      },
      {
        pergunta: "Como \u00e9 comprovada a entrega de documentos contratuais sigilosos?",
        resposta: "A entrega \u00e9 feita exclusivamente \u00e0 pessoa indicada, mediante protocolo formal assinado com documento e hor\u00e1rio.",
      },
    ],
    rotasRelacionadas: [
      { slug: "republica", nome: "Rep\u00fablica" },
      { slug: "bela-vista", nome: "Bela Vista" },
      { slug: "bras", nome: "Br\u00e1s" },
      { slug: "mooca", nome: "Mooca" },
    ],
  },
  {
    slug: "bras",
    nome: "Br\u00e1s",
    regiao: "Polo T\u00eaxtil, Confeccionista e Atacadista",
    subtitulo: "Transporte \u00e1gil de amostras t\u00eaxteis, fardos de confec\u00e7\u00e3o e compras no atacado",
    resumoRota: "A rota entre Guarulhos e o Br\u00e1s \u00e9 um dos eixos comerciais mais movimentados da metr\u00f3pole. O Br\u00e1s \u00e9 o principal polo atacadista de moda e confec\u00e7\u00e3o do pa\u00eds, concentrando lojas na Rua Miller, Oriente e imedia\u00e7\u00f5es da 25 de Mar\u00e7o. A Moto11 atende confec\u00e7\u00f5es, estilistas, lojistas e revendedores guarulhenses que precisam retirar fardos leves, amostras de tecidos, aviamentos e reposi\u00e7\u00f5es di\u00e1rias de estoque sem enfrentar os congestionamentos e a falta de vagas da regi\u00e3o central.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Rangel Pestana", "Rua Miller / Rua do Gasômetro"],
    demandasComuns: ["Amostras de tecidos, aviamentos e moldes de confecção", "Retirada de pacotes de compras no atacado da Rua Miller", "Peças de reposição rápida para máquinas de costura", "Notas fiscais e manifestos de mercadoria em trânsito"],
    orientacaoTransito: "O Br\u00e1s possui circula\u00e7\u00e3o intensa de compradores e caminh\u00f5es de carga desde a madrugada at\u00e9 o meio da tarde. A moto transita com agilidade entre as ruas estreitas, acessando balc\u00f5es de lojas e transportadoras sem perda de tempo.",
    faq: [
      {
        pergunta: "O motoboy pode retirar pacotes de compras j\u00e1 pagas no Br\u00e1s?",
        resposta: "Sim, retiramos mercadorias no balc\u00e3o mediante envio do comprovante de pagamento ou c\u00f3digo de retirada fornecido pela loja.",
      },
      {
        pergunta: "Qual a capacidade de peso para fardos de roupas na moto?",
        resposta: "Transportamos at\u00e9 20 kg por viagem em ba\u00fa de 100 litros com amarra\u00e7\u00e3o apropriada para volumes t\u00eaxteis.",
      },
      {
        pergunta: "Voc\u00eas atendem compras na regi\u00e3o da 25 de Mar\u00e7o e Pari tamb\u00e9m?",
        resposta: "Sim, cobrimos todo o quadril\u00e1tero comercial do Br\u00e1s, Pari, Canind\u00e9 e imedia\u00e7\u00f5es da 25 de Mar\u00e7o.",
      },
    ],
    rotasRelacionadas: [
      { slug: "se", nome: "S\u00e9" },
      { slug: "mooca", nome: "Mooca" },
      { slug: "tatuape", nome: "Tatuap\u00e9" },
      { slug: "santana", nome: "Santana" },
    ],
  },
  {
    slug: "mooca",
    nome: "Mooca",
    regiao: "Zona Leste / Polo Industrial e Hospitalar",
    subtitulo: "Atendimento tradicional na Av. Salim Farah Maluf, Av. Paes de Barros e hospitais",
    resumoRota: "A conex\u00e3o entre Guarulhos e a Mooca liga dois tradicionais polos operacionais e industriais. A Mooca re\u00fane ind\u00fastrias leves, distribuidoras, faculdades e complexos hospitalares como o Hospital CEMA e o Hospital Villa-Lobos. A Moto11 transporta laudos laboratoriais, materiais gr\u00e1ficos, pe\u00e7as industriais e malotes comerciais, utilizando o acesso expresso pela Rodovia Presidente Dutra e Avenida Salim Farah Maluf.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Salim Farah Maluf", "Av. Paes de Barros", "Av. Alcântara Machado (Radial Leste)"],
    demandasComuns: ["Laudos e guias médicas para os hospitais e clínicas da Mooca", "Peças e componentes técnicos para oficinas e gráficas locais", "Contratos corporativos entre filiais de Guarulhos e Mooca", "Malotes contábeis e financeiros em agências bancárias"],
    orientacaoTransito: "O acesso pela Salim Farah Maluf oferece boa fluidez fora dos hor\u00e1rios de pico. O piloto de moto evita os n\u00f3s vi\u00e1rios da Radial Leste para garantir pontualidade nas entregas.",
    faq: [
      {
        pergunta: "Fazem entregas em hospitais na Mooca?",
        resposta: "Sim, realizamos entregas e retiradas em recep\u00e7\u00f5es hospitalares e administrativas na Mooca com protocolo.",
      },
      {
        pergunta: "Qual o melhor trajeto de Guarulhos para a Mooca?",
        resposta: "Nossos pilotos utilizam a Dutra conectando \u00e0 Salim Farah Maluf, o eixo vi\u00e1rio mais r\u00e1pido entre os dois pontos.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel faturar fretes recorrentes para empresas na Mooca?",
        resposta: "Sim, empresas cadastradas contam com op\u00e7\u00e3o de faturamento quinzenal ou mensal.",
      },
    ],
    rotasRelacionadas: [
      { slug: "tatuape", nome: "Tatuap\u00e9" },
      { slug: "bras", nome: "Br\u00e1s" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "vila-prudente", nome: "Vila Prudente" },
    ],
  },
  {
    slug: "tatuape",
    nome: "Tatuap\u00e9",
    regiao: "Centro Corporativo e Financeiro da Zona Leste",
    subtitulo: "Deslocamento veloz para o polo comercial da Radial Leste e Shopping An\u00e1lia Franco",
    resumoRota: "O Tatuap\u00e9 \u00e9 o centro corporativo mais sofisticado da Zona Leste paulistana. Ao redor da Radial Leste, da Rua Em\u00edlia Marengo e do Shopping An\u00e1lia Franco, concentram-se consult\u00f3rios m\u00e9dicos de ponta, ag\u00eancias de publicidade, escrit\u00f3rios de advocacia e grandes edif\u00edcios empresariais. A Moto11 garante transporte \u00e1gil de documentos contratuais, malotes executivos, pr\u00f3teses dent\u00e1rias e encomendas expressas entre Guarulhos e o Tatuap\u00e9.",
    eixosViarios: ["Rodovia Presidente Dutra", "Av. Salim Farah Maluf", "Av. Alcântara Machado (Radial Leste)", "Rua Tuiuti", "Av. Regente Feijó"],
    demandasComuns: ["Documentos contratuais e malotes para escritórios executivos", "Trabalhos protéticos e laudos para consultórios da região do Anália Franco", "Retiradas e entregas para lojas e clientes de shoppings do Tatuapé", "Amostras e materiais de agências de comunicação e design"],
    orientacaoTransito: "O tr\u00e1fego na Radial Leste e no entroncamento com a Salim Farah Maluf costuma travar nos hor\u00e1rios de pico. O motoboy contorna os pontos cr\u00edticos por vias arteriais da Zona Leste.",
    faq: [
      {
        pergunta: "Qual o tempo m\u00e9dio de viagem entre Guarulhos e o Tatuap\u00e9?",
        resposta: "Por estar na Zona Leste pr\u00f3xima \u00e0 Dutra, a moto chega ao Tatuap\u00e9 com grande rapidez fora dos hor\u00e1rios de pico.",
      },
      {
        pergunta: "Atendem condom\u00ednios empresariais no Tatuap\u00e9 e An\u00e1lia Franco?",
        resposta: "Sim, nossos pilotos realizam entregas em recep\u00e7\u00f5es comerciais com protocolo assinado.",
      },
      {
        pergunta: "Como solicitar entrega de emerg\u00eancia para o Tatuap\u00e9?",
        resposta: "Basta acionar nosso WhatsApp e passar a rota para confirma\u00e7\u00e3o imediata de valor e despacho.",
      },
    ],
    rotasRelacionadas: [
      { slug: "mooca", nome: "Mooca" },
      { slug: "penha", nome: "Penha" },
      { slug: "aricanduva", nome: "Aricanduva" },
      { slug: "bras", nome: "Br\u00e1s" },
    ],
  },
  {
    slug: "penha",
    nome: "Penha",
    regiao: "Zona Leste / Divisa Imediata com Guarulhos",
    subtitulo: "Conex\u00e3o r\u00e1pida pela Ponte Grande, Av. Gabriela Mistral e Marginal Tiet\u00ea",
    resumoRota: "A Penha de Fran\u00e7a \u00e9 o bairro de S\u00e3o Paulo mais pr\u00f3ximo de Guarulhos pela por\u00e7\u00e3o sul/oeste. Conectada pela Av. Gabriela Mistral, Av. Guarulhos e Marginal Tiet\u00ea, a regi\u00e3o possui cart\u00f3rios tradicionais, com\u00e9rcio diversificado, hospitais e f\u00f3rum regional. A Moto11 executa coletas e entregas em poucos minutos entre Guarulhos e a Penha, sendo uma das rotas mais frequentes e acess\u00edveis da nossa opera\u00e7\u00e3o di\u00e1ria.",
    eixosViarios: ["Av. Gabriela Mistral", "Av. Guarulhos (Ponte Grande)", "Marginal Tietê", "Av. Amador Bueno da Veiga", "Av. Penha de França"],
    demandasComuns: ["Documentos para cartórios de registro e tabelionatos da Penha", "Exames e guias para hospitais e clínicas da região", "Entrega de compras e encomendas do comércio local", "Peças automotivas e suprimentos para oficinas da Av. Amador Bueno"],
    orientacaoTransito: "Pela proximidade geogr\u00e1fica direta, \u00e9 uma rota de baix\u00edssimo tempo de tr\u00e2nsito, imune a grandes atrasos mesmo em dias chuvosos.",
    faq: [
      {
        pergunta: "A entrega para a Penha \u00e9 feita no mesmo dia?",
        resposta: "Sim, as viagens para a Penha costumam ser realizadas em minutos logo ap\u00f3s a coleta em Guarulhos.",
      },
      {
        pergunta: "Voc\u00eas atendem o F\u00f3rum Regional da Penha?",
        resposta: "Sim, fazemos protocolos de peti\u00e7\u00f5es e retirada de certid\u00f5es no f\u00f3rum local.",
      },
      {
        pergunta: "Qual o valor de uma corrida de Guarulhos para a Penha?",
        resposta: "O valor \u00e9 calculado pela quilometragem vi\u00e1ria real e confirmado no WhatsApp antes do in\u00edcio.",
      },
    ],
    rotasRelacionadas: [
      { slug: "tatuape", nome: "Tatuap\u00e9" },
      { slug: "sao-miguel-paulista", nome: "S\u00e3o Miguel Paulista" },
      { slug: "vila-maria", nome: "Vila Maria" },
    ],
  },
  {
    slug: "itaquera",
    nome: "Itaquera",
    regiao: "Polo Regional da Zona Leste",
    subtitulo: "Atendimento ao Poupatempo, Arena Corinthians, F\u00f3rum de Itaquera e com\u00e9rcios",
    resumoRota: "A conex\u00e3o entre Guarulhos e Itaquera \u00e9 articulada pela Rodovia Ayrton Senna e pela Avenida Jacu-P\u00eassego. Itaquera abriga o Poupatempo, a Arena Corinthians, o F\u00f3rum Regional de Itaquera, faculdades e um com\u00e9rcio pujante. A Moto11 transporta documentos forenses, exames de cl\u00ednicas populares, encomendas de lojas virtuais e pe\u00e7as mec\u00e2nicas com rapidez.",
    eixosViarios: ["Rodovia Ayrton Senna (SP-070)", "Av. Jacu-Pêssego", "Radial Leste", "Av. Itaquera"],
    demandasComuns: ["Protocolos no Fórum de Itaquera e órgãos públicos", "Malotes e documentos entre comércios e agências bancárias", "Entregas de e-commerce e produtos para o consumidor final", "Peças e suprimentos industriais e automotivos"],
    orientacaoTransito: "A Av. Jacu-P\u00eassego oferece tr\u00e2nsito r\u00e1pido para motocicletas, interligando a Zona Leste de Guarulhos (Bonsucesso/Pimentas) diretamente a Itaquera sem passar pelo centro da capital.",
    faq: [
      {
        pergunta: "Atendem toda a regi\u00e3o de Itaquera e Arthur Alvim?",
        resposta: "Sim, cobrimos todas as \u00e1reas residenciais e comerciais de Itaquera.",
      },
      {
        pergunta: "Quanto tempo dura o trajeto de Guarulhos a Itaquera pela Ayrton Senna?",
        resposta: "O tempo m\u00e9dio \u00e9 reduzido gra\u00e7as \u00e0 fluidez da Ayrton Senna e Jacu-P\u00eassego.",
      },
      {
        pergunta: "Como enviar documentos para o F\u00f3rum de Itaquera?",
        resposta: "Envie as instru\u00e7\u00f5es no WhatsApp; o motoboy coleta no seu endere\u00e7o e protocola no balc\u00e3o forense.",
      },
    ],
    rotasRelacionadas: [
      { slug: "sao-miguel-paulista", nome: "S\u00e3o Miguel Paulista" },
      { slug: "tatuape", nome: "Tatuap\u00e9" },
      { slug: "aricanduva", nome: "Aricanduva" },
      { slug: "penha", nome: "Penha" },
    ],
  },
  {
    slug: "sao-miguel-paulista",
    nome: "S\u00e3o Miguel Paulista",
    regiao: "Alto Tiet\u00ea / Zona Leste",
    subtitulo: "Com\u00e9rcio vibrante na Av. Marechal Tito e ind\u00fastrias da Zona Leste",
    resumoRota: "S\u00e3o Miguel Paulista conecta a Zona Leste de Guarulhos (Pimentas e Bonsucesso) ao extremo leste paulistano. Pela Av. Marechal Tito e Rodovia Ayrton Senna, o trajeto atende ind\u00fastrias qu\u00edmicas, hospitais, atacados e polos universit\u00e1rios. A Moto11 realiza entregas corporativas e de mercadorias leves com rotas diretas.",
    eixosViarios: ["Av. Marechal Tito", "Rodovia Ayrton Senna", "Av. Pires do Rio", "Av. Nordestina"],
    demandasComuns: ["Amostras e insumos para indústrias locais", "Exames laboratoriais e receitas médicas", "Documentos contratuais e malotes contábeis", "Entregas do comércio varejista da Marechal Tito"],
    orientacaoTransito: "O corredor da Marechal Tito tem intenso tr\u00e2nsito de pedestres e \u00f4nibus. A motocicleta \u00e9 o ve\u00edculo ideal para realizar coletas e entregas pontuais.",
    faq: [
      {
        pergunta: "Voc\u00eas fazem rotas dos Pimentas para S\u00e3o Miguel Paulista?",
        resposta: "Sim, a liga\u00e7\u00e3o \u00e9 quase imediata e possui valor competitivo pela curta dist\u00e2ncia vi\u00e1ria.",
      },
      {
        pergunta: "O motoboy recolhe pagamentos ou comprovantes assinados?",
        resposta: "Sim, podemos colher canhotos de nota e recibos na entrega e retornar com a via assinada.",
      },
      {
        pergunta: "Como cotar servi\u00e7os para S\u00e3o Miguel Paulista?",
        resposta: "Basta enviar os dados pelo WhatsApp comercial da Moto11.",
      },
    ],
    rotasRelacionadas: [
      { slug: "itaquera", nome: "Itaquera" },
      { slug: "penha", nome: "Penha" },
    ],
  },
  {
    slug: "vila-prudente",
    nome: "Vila Prudente",
    regiao: "Corredor Anhaia Mello e Conex\u00e3o ABC",
    subtitulo: "Log\u00edstica expressa entre Guarulhos, Anhaia Mello e Grande ABC",
    resumoRota: "A rota entre Guarulhos e a Vila Prudente \u00e9 estruturada pela Salim Farah Maluf e pela Av. Professor Luiz Ign\u00e1cio Anhaia Mello. O bairro abriga ind\u00fastrias, operadoras log\u00edsticas e pontos de transbordo para o ABC Paulista (S\u00e3o Caetano e Santo Andr\u00e9). A Moto11 transporta faturas, pe\u00e7as mec\u00e2nicas, amostras e contratos com pontualidade.",
    eixosViarios: ["Av. Salim Farah Maluf", "Av. Prof. Luiz Ignácio Anhaia Mello", "Rua Ibitirama", "Av. Paes de Barros"],
    demandasComuns: ["Peças automotivas e industriais para oficinas e galpões", "Contratos corporativos e malotes entre filiais", "Amostras e pequenos volumes de logística reversa", "Despacho expresso com ligação para o Grande ABC"],
    orientacaoTransito: "A Anhaia Mello possui sem\u00e1foros frequentes sob a linha do Monotrilho. O motoboy transita com facilidade pelas faixas e acessos laterais.",
    faq: [
      {
        pergunta: "Fazem conex\u00f5es da Vila Prudente para S\u00e3o Caetano do Sul?",
        resposta: "Sim, estendemos rotas para o ABC com facilidade a partir da Vila Prudente.",
      },
      {
        pergunta: "Qual a estimativa de entrega de Guarulhos para a Vila Prudente?",
        resposta: "A previs\u00e3o \u00e9 repassada no WhatsApp considerando a condi\u00e7\u00e3o da Salim Farah Maluf no momento.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel transportar caixas de ferramentas para a regi\u00e3o?",
        resposta: "Sim, caixas de at\u00e9 20 kg compat\u00edveis com o ba\u00fa viajam protegidas.",
      },
    ],
    rotasRelacionadas: [
      { slug: "mooca", nome: "Mooca" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "sao-caetano", nome: "S\u00e3o Caetano do Sul" },
      { slug: "sacoma", nome: "Sacom\u00e3" },
    ],
  },
  {
    slug: "ipiranga",
    nome: "Ipiranga",
    regiao: "Zona Sul Tradicional e Conex\u00e3o Anchieta",
    subtitulo: "Atendimento a concession\u00e1rias, hospitais, museu e galp\u00f5es comerciais",
    resumoRota: "O Ipiranga \u00e9 um bairro hist\u00f3rico e estrat\u00e9gico da Zona Sul de S\u00e3o Paulo. Cortado pela Av. do Estado, Av. Nazar\u00e9 e Av. Ricardo Jafet, sedia grandes hospitais, concession\u00e1rias de autom\u00f3veis, polos universit\u00e1rios e distribuidoras. A Moto11 conecta Guarulhos ao Ipiranga para transporte de pe\u00e7as automotivas, documentos e laudos m\u00e9dicos com agilidade.",
    eixosViarios: ["Av. do Estado", "Av. Nazaré", "Av. Doutor Ricardo Jafet", "Rua Silva Bueno"],
    demandasComuns: ["Peças automotivas originais para oficinas e concessionárias", "Laudos médicos e exames para hospitais do Ipiranga", "Documentos contratuais e escrituras particulares", "Entregas de e-commerce e comércio da Rua Silva Bueno"],
    orientacaoTransito: "O tr\u00e1fego na Av. do Estado e nas imedia\u00e7\u00f5es do Museu do Ipiranga exige pilotagem atenta. A moto assegura rapidez evitando as filas dos cruzamentos semaf\u00f3ricos.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem concession\u00e1rias de ve\u00edculos no Ipiranga?",
        resposta: "Sim, retiramos e entregamos autope\u00e7as e documentos de transfer\u00eancia com agilidade.",
      },
      {
        pergunta: "Como \u00e9 feito o trajeto de Guarulhos at\u00e9 o Ipiranga?",
        resposta: "Geralmente pela Dutra, Marginal Tiet\u00ea e Av. do Estado ou Salim Farah Maluf, conforme o melhor fluxo.",
      },
      {
        pergunta: "H\u00e1 op\u00e7\u00e3o de entrega com protocolo assinado?",
        resposta: "Sim, toda entrega gera comprovante assinado e foto enviada na hora pelo WhatsApp.",
      },
    ],
    rotasRelacionadas: [
      { slug: "sacoma", nome: "Sacom\u00e3" },
      { slug: "mooca", nome: "Mooca" },
      { slug: "vila-mariana", nome: "Vila Mariana" },
      { slug: "sao-caetano", nome: "S\u00e3o Caetano do Sul" },
    ],
  },
  {
    slug: "sacoma",
    nome: "Sacom\u00e3",
    regiao: "Polo de Transporte e Entrada do ABC",
    subtitulo: "Conex\u00e3o com a Rodovia Anchieta, terminais de \u00f4nibus e ind\u00fastrias",
    resumoRota: "O Sacom\u00e3 \u00e9 o portal de entrada para o ABC Paulista e para a Rodovia Anchieta na Zona Sul da capital. Com forte voca\u00e7\u00e3o para log\u00edstica de cargas leves, oficinas e com\u00e9rcio automotivo, o bairro demanda transporte cont\u00ednuo de pe\u00e7as, documentos aduaneiros e malotes. A Moto11 atende empresas com coletas r\u00e1pidas vindas de Guarulhos.",
    eixosViarios: ["Rodovia Anchieta", "Av. das Juntas Provisórias", "Rua Silva Bueno", "Av. Presidente Wilson"],
    demandasComuns: ["Peças automotivas e suprimentos para garagens e frotistas", "Despacho de documentos fiscais e romaneios de frete", "Malotes entre unidades corporativas em SP e Guarulhos", "Entregas expressas para residências e empresas locais"],
    orientacaoTransito: "O entroncamento da Anchieta com a Av. das Juntas Provis\u00f3rias costuma reter autom\u00f3veis no final da tarde. A moto trafega sem atrasos pelas pistas laterais.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam em transportadoras pr\u00f3ximas \u00e0 Anchieta no Sacom\u00e3?",
        resposta: "Sim, realizamos despachos e retiradas em toda a extens\u00e3o do Sacom\u00e3 e in\u00edcio da Anchieta.",
      },
      {
        pergunta: "Qual o tempo de deslocamento de Guarulhos at\u00e9 o Sacom\u00e3 de moto?",
        resposta: "Informamos a previs\u00e3o exata no WhatsApp ap\u00f3s a checagem das condi\u00e7\u00f5es da Marginal e Av. do Estado.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel transportar pequenas m\u00e1quinas ou pe\u00e7as?",
        resposta: "Sim, at\u00e9 20 kg devidamente acomodados no ba\u00fa fechado da motocicleta.",
      },
    ],
    rotasRelacionadas: [
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "sao-caetano", nome: "S\u00e3o Caetano do Sul" },
      { slug: "sao-bernardo", nome: "S\u00e3o Bernardo do Campo" },
      { slug: "vila-mariana", nome: "Vila Mariana" },
    ],
  },
  {
    slug: "moema",
    nome: "Moema",
    regiao: "Zona Sul Nobre e Corporativa",
    subtitulo: "Atendimento refinado na Av. Ibirapuera, Av. Indian\u00f3polis e entorno de Congonhas",
    resumoRota: "Moema \u00e9 um dos bairros de maior poder aquisitivo e densidade corporativa de S\u00e3o Paulo. Vizinho ao Parque Ibirapuera e ao Aeroporto de Congonhas, abriga sedes de multinacionais, escrit\u00f3rios de arquitetura, consult\u00f3rios de alto padr\u00e3o e cl\u00ednicas est\u00e9ticas. A Moto11 realiza viagens di\u00e1rias entre Guarulhos e Moema com foco em pontualidade, discri\u00e7\u00e3o e seguran\u00e7a documental.",
    eixosViarios: ["Av. Ibirapuera", "Av. Indianópolis", "Av. Moreira Guimarães (Corredor Norte-Sul)", "Alameda dos Maracatins"],
    demandasComuns: ["Contratos executivos e malotes confidenciais", "Trabalhos protéticos e laudos para clínicas renomadas", "Despacho urgente de documentos para o Aeroporto de Congonhas", "Entregas exclusivas para condomínios e residências de alto padrão"],
    orientacaoTransito: "O Corredor Norte-Sul (23 de Maio / Rubem Berta) \u00e9 o eixo principal. O piloto de moto evita o tr\u00e2nsito pesado mantendo velocidade compat\u00edvel e segura nas faixas de rolamento.",
    faq: [
      {
        pergunta: "Fazem entregas urgentes no Aeroporto de Congonhas a partir de Guarulhos?",
        resposta: "Sim, conectamos os dois aeroportos com prioridade absoluta para passageiros e comiss\u00e1rias.",
      },
      {
        pergunta: "Como \u00e9 feita a entrega em condom\u00ednios de alto padr\u00e3o em Moema?",
        resposta: "Seguimos os protocolos das portarias, com identifica\u00e7\u00e3o pr\u00e9via e contato com o morador.",
      },
      {
        pergunta: "Qual a anteced\u00eancia para solicitar motoboy para Moema?",
        resposta: "Recomendamos acionar assim que o documento estiver pronto para posicionarmos o piloto no corredor vi\u00e1rio.",
      },
    ],
    rotasRelacionadas: [
      { slug: "vila-mariana", nome: "Vila Mariana" },
      { slug: "campo-belo", nome: "Campo Belo" },
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "jardins", nome: "Jardins" },
    ],
  },
  {
    slug: "vila-mariana",
    nome: "Vila Mariana",
    regiao: "Polo M\u00e9dico, Universit\u00e1rio e Cultural",
    subtitulo: "Atendimento a hospitais renomados, universidades e Av. Paulista",
    resumoRota: "A Vila Mariana \u00e9 um dos mais importantes polos de sa\u00fade e educa\u00e7\u00e3o de S\u00e3o Paulo. Sedia o Hospital S\u00e3o Paulo, o GRAACC, a AACD, o Instituto do Sono e grandes universidades como a Unifesp e ESPM. A Moto11 transporta laudos, exames biol\u00f3gicos embalados, prontu\u00e1rios m\u00e9dicos, contratos acad\u00eamicos e documentos para escrit\u00f3rios pr\u00f3ximos \u00e0 Av. Paulista.",
    eixosViarios: ["Av. 23 de Maio", "Rua Domingos de Morais", "Av. Sena Madureira", "Rua Vergueiro"],
    demandasComuns: ["Laudos, guias de convênio e prontuários médicos para hospitais", "Contratos acadêmicos e documentos universitários", "Malotes e correspondências entre escritórios da região da Paulista", "Medicamentos e produtos para clínicas especializadas"],
    orientacaoTransito: "A conex\u00e3o pelo Corredor 23 de Maio \u00e9 direta a partir da Marginal Tiet\u00ea. A moto garante pontualidade em miss\u00f5es hospitalares que n\u00e3o podem esperar.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam exames e laudos em hospitais da Vila Mariana?",
        resposta: "Sim, realizamos entregas na administra\u00e7\u00e3o hospitalar ou setor indicado com protocolo.",
      },
      {
        pergunta: "Quanto tempo dura o trajeto de Guarulhos at\u00e9 a Vila Mariana?",
        resposta: "O tempo m\u00e9dio de moto \u00e9 muito vantajoso comparado a carros pelo corredor expresso 23 de Maio.",
      },
      {
        pergunta: "Como solicitar uma entrega para a Vila Mariana?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba a cota\u00e7\u00e3o imediata com pre\u00e7o fixado.",
      },
    ],
    rotasRelacionadas: [
      { slug: "moema", nome: "Moema" },
      { slug: "bela-vista", nome: "Bela Vista" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "jardins", nome: "Jardins" },
    ],
  },
  {
    slug: "pinheiros",
    nome: "Pinheiros",
    regiao: "Polo de Tecnologia, Startups e Faria Lima",
    subtitulo: "Deslocamento veloz para o centro financeiro da Faria Lima e ag\u00eancias criativas",
    resumoRota: "Pinheiros e o entorno da Av. Brigadeiro Faria Lima formam o cora\u00e7\u00e3o financeiro e tecnol\u00f3gico da Am\u00e9rica Latina. O bairro concentra fundos de investimento, fintechs, ag\u00eancias de publicidade e escrit\u00f3rios de advocacia internacional. A Moto11 realiza fretes corporativos entre o parque industrial de Guarulhos e as sedes corporativas de Pinheiros com excel\u00eancia operacional.",
    eixosViarios: ["Av. Brigadeiro Faria Lima", "Av. Rebouças", "Marginal Pinheiros", "Rua Teodoro Sampaio", "Av. Henrique Schaumann"],
    demandasComuns: ["Contratos de investimentos, procurações e atos societários", "Malotes executivos entre matriz fabril em Guarulhos e sede na Faria Lima", "Amostras de design, embalagens e protótipos de produtos", "Equipamentos de TI leves (laptops, tokens de segurança, chaves)"],
    orientacaoTransito: "A Marginal Pinheiros e a Av. Rebou\u00e7as t\u00eam tr\u00e1fego intenso o dia todo. Nossos motoboys experientes navegam com agilidade para entregar na recep\u00e7\u00e3o com pontualidade.",
    faq: [
      {
        pergunta: "Atendem edif\u00edcios corporativos na Av. Brigadeiro Faria Lima?",
        resposta: "Sim, nossos pilotos realizam entregas na recep\u00e7\u00e3o de edif\u00edcios comerciais com identifica\u00e7\u00e3o.",
      },
      {
        pergunta: "Voc\u00eas transportam notebooks e aparelhos de TI?",
        resposta: "Sim, transportamos equipamentos eletr\u00f4nicos em compartimentos estofados contra vibra\u00e7\u00e3o.",
      },
      {
        pergunta: "Como funciona o protocolo de entrega de contratos em Pinheiros?",
        resposta: "O recebedor assina digitalmente ou no protocolo f\u00edsico, com foto imediata enviada pelo WhatsApp.",
      },
    ],
    rotasRelacionadas: [
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "perdizes", nome: "Perdizes" },
      { slug: "butanta", nome: "Butant\u00e3" },
      { slug: "jardins", nome: "Jardins" },
    ],
  },
  {
    slug: "lapa",
    nome: "Lapa",
    regiao: "Zona Oeste Comercial e Industrial Tradicional",
    subtitulo: "Conex\u00e3o r\u00e1pida pela Marginal Tiet\u00ea at\u00e9 o Mercado da Lapa e f\u00f3rum regional",
    resumoRota: "A Lapa \u00e9 o mais importante centro comercial e institucional da Zona Oeste paulistana. Cortada pelas linhas da CPTM e pela Marginal Tiet\u00ea, sedia o F\u00f3rum Regional da Lapa, o Mercado Municipal da Lapa e ind\u00fastrias tradicionais. A Moto11 transporta peti\u00e7\u00f5es, autope\u00e7as, mercadorias leves e documentos com rota direta pela pista expressa da Marginal Tiet\u00ea.",
    eixosViarios: ["Marginal Tietê", "Rua Doze de Outubro", "Av. Ermano Marchetti", "Rua Clélia", "Rua Guaicurus"],
    demandasComuns: ["Protocolo de petições e certidões no Fórum Regional da Lapa", "Peças industriais e ferramentas para oficinas mecânicas", "Documentos contratuais para imobiliárias e contabilidades", "Mercadorias e compras do polo comercial da Rua Doze de Outubro"],
    orientacaoTransito: "A Marginal Tiet\u00ea oferece linha reta entre a Dutra e a Lapa. O piloto de moto vence o percurso rapidamente evitando as filas da pista local.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem o F\u00f3rum Regional da Lapa?",
        resposta: "Sim, realizamos protocolos f\u00edsicos de peti\u00e7\u00f5es com envio de foto do carimbo na hora.",
      },
      {
        pergunta: "Qual a estimativa de tempo de Guarulhos at\u00e9 a Lapa de moto?",
        resposta: "Pela Marginal Tiet\u00ea expressa, o deslocamento \u00e9 direto e consideravelmente r\u00e1pido de moto.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel transportar pe\u00e7as de reposi\u00e7\u00e3o mec\u00e2nica para a Lapa?",
        resposta: "Sim, at\u00e9 20 kg em ba\u00fas protegidos com amarra\u00e7\u00e3o de seguran\u00e7a.",
      },
    ],
    rotasRelacionadas: [
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "perdizes", nome: "Perdizes" },
      { slug: "vila-leopoldina", nome: "Vila Leopoldina" },
      { slug: "pirituba", nome: "Pirituba" },
    ],
  },
  {
    slug: "perdizes",
    nome: "Perdizes",
    regiao: "Zona Oeste Nobre, PUC-SP e Cl\u00ednicas",
    subtitulo: "Atendimento na Av. Sumar\u00e9, Hospital Albert Sabin e condom\u00ednios de alto padr\u00e3o",
    resumoRota: "Perdizes \u00e9 um bairro nobre e arborizado na Zona Oeste, conhecido por sediar a PUC-SP, o Allianz Parque e importantes cl\u00ednicas m\u00e9dicas. A Moto11 atende moradores, consult\u00f3rios e escrit\u00f3rios locais conectando Guarulhos a Perdizes para entrega de documentos acad\u00eamicos, laudos m\u00e9dicos, contratos e encomendas no mesmo dia.",
    eixosViarios: ["Av. Sumaré", "Rua Cardoso de Almeida", "Av. Francisco Matarazzo", "Rua Monte Alegre"],
    demandasComuns: ["Documentos acadêmicos, dissertações e contratos da PUC-SP", "Laudos, exames e receitas médicas em consultórios particulares", "Contratos imobiliários e documentos executivos", "Entregas domiciliares para condomínios de alto padrão"],
    orientacaoTransito: "O relevo acidentado de Perdizes exige pilotagem t\u00e9cnica nas ladeiras da Cardoso de Almeida. A moto garante agilidade de porta a porta.",
    faq: [
      {
        pergunta: "Fazem entregas em condom\u00ednios residenciais em Perdizes?",
        resposta: "Sim, entregamos nas portarias residenciais com protocolo e aviso ao morador.",
      },
      {
        pergunta: "Voc\u00eas atendem a regi\u00e3o do Allianz Parque e PUC?",
        resposta: "Sim, cobrimos toda a extens\u00e3o de Perdizes e Pompeia com agilidade.",
      },
      {
        pergunta: "Como cotar uma rota de Guarulhos para Perdizes?",
        resposta: "Basta enviar uma mensagem no WhatsApp com os dois endere\u00e7os completos.",
      },
    ],
    rotasRelacionadas: [
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "lapa", nome: "Lapa" },
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "santa-cecilia", nome: "Santa Cec\u00edlia" },
    ],
  },
  {
    slug: "santana",
    nome: "Santana",
    regiao: "Centro Comercial da Zona Norte de SP",
    subtitulo: "Atendimento na Av. Cruzeiro do Sul, Campo de Marte e hospitais da ZN",
    resumoRota: "Santana \u00e9 o principal polo comercial, m\u00e9dico e judici\u00e1rio da Zona Norte de S\u00e3o Paulo. Abrigando o F\u00f3rum Regional de Santana, o Campo de Marte, grandes hospitais (San Paolo, Mandaqui) e a Av. Cruzeiro do Sul, o bairro possui conex\u00e3o imediata com Guarulhos pela Rodovia Presidente Dutra e Ponte das Bandeiras. A Moto11 realiza dezenas de viagens di\u00e1rias entre Guarulhos e Santana.",
    eixosViarios: ["Av. Cruzeiro do Sul", "Av. Braz Leme", "Av. Santos Dumont (SP)", "Rua Voluntários da Pátria", "Ponte das Bandeiras"],
    demandasComuns: ["Protocolo de petições e documentos no Fórum de Santana", "Exames, laudos e amostras para hospitais e clínicas da Zona Norte", "Peças e suprimentos para o Campo de Marte e oficinas aeronáuticas", "Malotes bancários e contábeis de empresas e comércios"],
    orientacaoTransito: "Pela proximidade geogr\u00e1fica com a Dutra e Marginal Tiet\u00ea, a rota entre Guarulhos e Santana \u00e9 uma das mais r\u00e1pidas da malha metropolitana.",
    faq: [
      {
        pergunta: "Qual o tempo de chegada de Guarulhos a Santana?",
        resposta: "Por estar na Zona Norte pr\u00f3xima \u00e0 Dutra, a viagem de moto leva poucos minutos fora do pico.",
      },
      {
        pergunta: "Voc\u00eas protocolam processos no F\u00f3rum de Santana?",
        resposta: "Sim, com recolhimento de carimbo oficial e foto do protocolo enviada no WhatsApp.",
      },
      {
        pergunta: "Atendem oficinas no Campo de Marte?",
        resposta: "Sim, entregamos pe\u00e7as e documenta\u00e7\u00f5es t\u00e9cnicas em hangares e empresas do aer\u00f3dromo.",
      },
    ],
    rotasRelacionadas: [
      { slug: "tucuruvi", nome: "Tucuruvi" },
      { slug: "vila-maria", nome: "Vila Maria" },
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "bras", nome: "Br\u00e1s" },
    ],
  },
  {
    slug: "tucuruvi",
    nome: "Tucuruvi",
    regiao: "Zona Norte / Terminal Metr\u00f4 Linha 1-Azul",
    subtitulo: "Conex\u00e3o expressa com a divisa de Guarulhos pela Av. Guapira e Ja\u00e7an\u00e3",
    resumoRota: "O Tucuruvi \u00e9 o polo terminal da Linha 1-Azul do Metr\u00f4 na Zona Norte paulistana. Vizinho imediato a Guarulhos atrav\u00e9s do Ja\u00e7an\u00e3 e da Av. Guapira, o bairro re\u00fane o Shopping Metr\u00f4 Tucuruvi, forte com\u00e9rcio popular, cl\u00ednicas m\u00e9dicas e col\u00e9gios. A Moto11 transporta encomendas, compras, pe\u00e7as e documentos em minutos entre os dois munic\u00edpios.",
    eixosViarios: ["Av. Guapira", "Av. Tucuruvi", "Av. Doutor Antônio Maria Laet", "Av. Nova Cantareira"],
    demandasComuns: ["Entregas comerciais rápidas para lojas e clientes do Tucuruvi", "Documentos contratuais e malotes entre comércios vizinhos", "Medicamentos e produtos farmacêuticos com entrega no mesmo dia", "Apoio logístico a moradores e clínicas da região"],
    orientacaoTransito: "A curta dist\u00e2ncia vi\u00e1ria entre a Vila Galv\u00e3o (Guarulhos) e o Tucuruvi faz desta uma das rotas mais econ\u00f4micas e pontuais da nossa opera\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Fazem entregas da Vila Galv\u00e3o para o Tucuruvi?",
        resposta: "Sim, o trajeto \u00e9 praticamente cont\u00edguo, levando poucos minutos de moto.",
      },
      {
        pergunta: "Voc\u00eas atendem lojas do Shopping Metr\u00f4 Tucuruvi?",
        resposta: "Sim, realizamos coletas e entregas em lojas e quiosques com autoriza\u00e7\u00e3o pr\u00e9via.",
      },
      {
        pergunta: "Como pedir motoboy para o Tucuruvi?",
        resposta: "Chame no WhatsApp e receba a cota\u00e7\u00e3o fechada calculada pela rota exata.",
      },
    ],
    rotasRelacionadas: [
      { slug: "santana", nome: "Santana" },
      { slug: "jacana", nome: "Ja\u00e7an\u00e3" },
      { slug: "vila-maria", nome: "Vila Maria" },
    ],
  },
  {
    slug: "vila-maria",
    nome: "Vila Maria",
    regiao: "Polo Log\u00edstico da Zona Norte",
    subtitulo: "Atendimento a dezenas de transportadoras de carga fracionada na Dutra",
    resumoRota: "A Vila Maria \u00e9 nacionalmente reconhecida pela alta concentra\u00e7\u00e3o de transportadoras rodovi\u00e1rias de carga fracionada e armaz\u00e9ns de log\u00edstica. Situada logo na sa\u00edda de Guarulhos pela Dutra e Marginal Tiet\u00ea, a regi\u00e3o demanda motoboys cont\u00ednuos para libera\u00e7\u00e3o de minutas, canhotos de entrega, chaves e pe\u00e7as de caminh\u00e3o. A Moto11 atende transportadoras com velocidade m\u00e1xima.",
    eixosViarios: ["Rodovia Presidente Dutra (km 230)", "Marginal Tietê", "Av. Guilherme Cotching", "Rua Curuçá"],
    demandasComuns: ["Liberação de romaneios, minutas e guias em transportadoras", "Peças automotivas urgentes para frotas de carga pesada", "Malotes entre matriz em Guarulhos e filiais da Vila Maria", "Documentos aduaneiros e de faturamento de frete"],
    orientacaoTransito: "O tr\u00e1fego de carretas na sa\u00edda para a Dutra \u00e9 intenso. Nossos pilotos experientes trafegam com seguran\u00e7a e agilidade entre os galp\u00f5es log\u00edsticos.",
    faq: [
      {
        pergunta: "Voc\u00eas fazem protocolos em balc\u00f5es de transportadoras na Vila Maria?",
        resposta: "Sim, apresentamos autoriza\u00e7\u00e3o, colhemos o protocolo carimbado e enviamos foto imediata.",
      },
      {
        pergunta: "Quanto tempo dura o percurso entre o Centro de Guarulhos e a Vila Maria?",
        resposta: "\u00c9 uma rota curta pela Dutra, geralmente realizada em poucos minutos de moto.",
      },
      {
        pergunta: "Atendem oficinas de caminh\u00e3o na regi\u00e3o?",
        resposta: "Sim, entregamos pe\u00e7as e ferramentas diretamente nas garagens e oficinas.",
      },
    ],
    rotasRelacionadas: [
      { slug: "santana", nome: "Santana" },
      { slug: "tucuruvi", nome: "Tucuruvi" },
      { slug: "bras", nome: "Br\u00e1s" },
    ],
  },
  {
    slug: "jacana",
    nome: "Ja\u00e7an\u00e3",
    regiao: "Divisa Direta Norte com Guarulhos",
    subtitulo: "Deslocamento imediato colado \u00e0 Vila Galv\u00e3o e Anel Vi\u00e1rio",
    resumoRota: "O Ja\u00e7an\u00e3 faz divisa f\u00edsica direta com a Vila Galv\u00e3o e o Jardim Vila Galv\u00e3o em Guarulhos. Com forte com\u00e9rcio de bairro, ag\u00eancias banc\u00e1rias e ind\u00fastrias leves na Av. Ja\u00e7an\u00e3 e Av. Guapira, o bairro possui tr\u00e2nsito fluido com Guarulhos. A Moto11 realiza entregas expressas de medicamentos, encomendas e documentos em minutos de deslocamento.",
    eixosViarios: ["Av. Jaçanã", "Av. Guapira", "Rua Benjamin Pereira", "Av. Mendes da Rocha"],
    demandasComuns: ["Conexão expressa de documentos entre Guarulhos e Jaçanã", "Entregas de farmácias, autopeças e comércio local", "Malotes bancários e contábeis de empresas da divisa", "Compras e encomendas domiciliares no mesmo dia"],
    orientacaoTransito: "A proximidade geogr\u00e1fica permite um dos menores prazos de atendimento entre os dois munic\u00edpios, com custo muito acess\u00edvel.",
    faq: [
      {
        pergunta: "A entrega de Guarulhos para o Ja\u00e7an\u00e3 \u00e9 r\u00e1pida?",
        resposta: "Sim, por ser divisa imediata, o motoboy chega ao destino em pouqu\u00edssimos minutos.",
      },
      {
        pergunta: "Atendem cl\u00ednicas e laborat\u00f3rios no Ja\u00e7an\u00e3?",
        resposta: "Sim, transportamos exames e laudos com total cuidado e pontualidade.",
      },
      {
        pergunta: "Como solicitar uma corrida r\u00e1pida?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba a cota\u00e7\u00e3o fechada na hora.",
      },
    ],
    rotasRelacionadas: [
      { slug: "tucuruvi", nome: "Tucuruvi" },
      { slug: "santana", nome: "Santana" },
    ],
  },
  {
    slug: "freguesia-do-o",
    nome: "Freguesia do \u00d3",
    regiao: "Zona Noroeste Hist\u00f3rica e Industrial",
    subtitulo: "Conex\u00e3o pela Marginal Tiet\u00ea at\u00e9 o Largo da Matriz e Av. Inajar de Souza",
    resumoRota: "A Freguesia do \u00d3 situa-se na Zona Noroeste de S\u00e3o Paulo, \u00e0s margens da Marginal Tiet\u00ea. Re\u00fane \u00e1reas industriais leves, oficinas, restaurantes tradicionais e condom\u00ednios residenciais ao longo da Av. Inajar de Souza. A Moto11 conecta Guarulhos \u00e0 Freguesia do \u00d3 pela pista expressa da Marginal Tiet\u00ea para transporte de pe\u00e7as, contratos e encomendas.",
    eixosViarios: ["Marginal Tietê", "Av. Inajar de Souza", "Av. Ministro Petrônio Portela", "Largo da Matriz"],
    demandasComuns: ["Peças automotivas e industriais para oficinas e metalúrgicas", "Documentos contratuais e malotes contábeis", "Entregas do comércio varejista e e-commerce", "Exames e guias para clínicas locais"],
    orientacaoTransito: "A Marginal Tiet\u00ea oferece liga\u00e7\u00e3o cont\u00ednua. O motoboy contorna os n\u00f3s dos sem\u00e1foros da Inajar de Souza com agilidade.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem empresas e galp\u00f5es na Freguesia do \u00d3?",
        resposta: "Sim, cobrimos todas as \u00e1reas industriais e comerciais do bairro.",
      },
      {
        pergunta: "Qual a estimativa de tempo de moto pela Marginal Tiet\u00ea?",
        resposta: "A moto percorre a pista expressa rapidamente, encurtando o tempo em rela\u00e7\u00e3o ao carro.",
      },
      {
        pergunta: "Como emitir comprovante da entrega?",
        resposta: "O comprovante \u00e9 emitido digitalmente com assinatura e foto no WhatsApp.",
      },
    ],
    rotasRelacionadas: [
      { slug: "lapa", nome: "Lapa" },
      { slug: "pirituba", nome: "Pirituba" },
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "santana", nome: "Santana" },
    ],
  },
  {
    slug: "pirituba",
    nome: "Pirituba",
    regiao: "Zona Noroeste / Conex\u00e3o Anhanguera e Bandeirantes",
    subtitulo: "Atendimento na Av. Mutinga, Av. Raimundo Pereira de Magalh\u00e3es e rodovias",
    resumoRota: "Pirituba \u00e9 um dos maiores distritos da Zona Noroeste paulistana. Cortado pela Av. Raimundo Pereira de Magalh\u00e3es e Av. Mutinga, sedia galp\u00f5es industriais, transportadoras e bairros residenciais populosos. A Moto11 atende empresas com transporte de documentos, suprimentos e pe\u00e7as conectando Guarulhos a Pirituba pela Marginal Tiet\u00ea.",
    eixosViarios: ["Marginal Tietê", "Av. Raimundo Pereira de Magalhães", "Av. Mutinga", "Rodovia dos Bandeirantes (acesso)"],
    demandasComuns: ["Peças mecânicas e industriais para galpões e empresas locais", "Contratos e malotes para escritórios da região", "Entregas residenciais de lojas virtuais", "Apoio a operadoras de transporte próximas às rodovias"],
    orientacaoTransito: "As avenidas principais t\u00eam tr\u00e1fego movimentado. A motocicleta assegura a chegada de pedidos sem sofrer com a lentid\u00e3o das pistas locais.",
    faq: [
      {
        pergunta: "Atendem galp\u00f5es pr\u00f3ximos \u00e0 Av. Raimundo Pereira de Magalh\u00e3es?",
        resposta: "Sim, cobrimos empresas e condom\u00ednios log\u00edsticos em toda a regi\u00e3o de Pirituba.",
      },
      {
        pergunta: "Transportam caixas e ferramentas para oficinas?",
        resposta: "Sim, volumes de at\u00e9 20 kg que caibam no ba\u00fa s\u00e3o transportados normalmente.",
      },
      {
        pergunta: "Como solicitar cota\u00e7\u00e3o de Guarulhos para Pirituba?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba a confirma\u00e7\u00e3o do valor antes da sa\u00edda.",
      },
    ],
    rotasRelacionadas: [
      { slug: "lapa", nome: "Lapa" },
      { slug: "freguesia-do-o", nome: "Freguesia do \u00d3" },
      { slug: "osasco", nome: "Osasco" },
    ],
  },
  {
    slug: "butanta",
    nome: "Butant\u00e3",
    regiao: "Zona Oeste / USP e Polo de Biotecnologia",
    subtitulo: "Atendimento ao Instituto Butantan, Cidade Universit\u00e1ria e Av. Vital Brasil",
    resumoRota: "O Butant\u00e3 destaca-se pela Cidade Universit\u00e1ria (USP), Instituto Butantan e polos de pesquisa biom\u00e9dica na Av. Vital Brasil e Av. Corifeu de Azevedo Marques. A Moto11 atende laborat\u00f3rios, departamentos acad\u00eamicos e empresas de tecnologia com transporte cuidadoso de laudos, ensaios, contratos e componentes.",
    eixosViarios: ["Marginal Pinheiros", "Av. Vital Brasil", "Av. Corifeu de Azevedo Marques", "Rodovia Raposo Tavares (km 10 a 14)"],
    demandasComuns: ["Documentos acadêmicos, teses e contratos de pesquisa", "Laudos técnicos e amostras biológicas não infectantes em embalagem adequada", "Malotes entre escritórios corporativos e departamentos da USP", "Entregas residenciais e comerciais no entorno do metrô Butantã"],
    orientacaoTransito: "A Marginal Pinheiros e a Vital Brasil apresentam tr\u00e1fego intenso. O motoboy experiente navega com agilidade para cumprir hor\u00e1rios acad\u00eamicos e laboratoriais.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam documentos dentro da Cidade Universit\u00e1ria (USP)?",
        resposta: "Sim, entregamos em secretarias, faculdades e institutos da USP com protocolo.",
      },
      {
        pergunta: "Como s\u00e3o transportados laudos e materiais sens\u00edveis?",
        resposta: "Em compartimentos vedados, protegidos contra \u00e1gua e vibra\u00e7\u00e3o excessiva.",
      },
      {
        pergunta: "Qual a previs\u00e3o de tempo de Guarulhos ao Butant\u00e3?",
        resposta: "A estimativa \u00e9 informada no WhatsApp conforme o fluxo da Marginal no momento.",
      },
    ],
    rotasRelacionadas: [
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "morumbi", nome: "Morumbi" },
      { slug: "lapa", nome: "Lapa" },
      { slug: "perdizes", nome: "Perdizes" },
    ],
  },
  {
    slug: "morumbi",
    nome: "Morumbi",
    regiao: "Zona Sul / Polos Corporativos e Hospital Albert Einstein",
    subtitulo: "Atendimento na Av. Giovanni Gronchi, Chucri Zaidan e Hospital Albert Einstein",
    resumoRota: "O Morumbi mescla resid\u00eancias de alto padr\u00e3o com complexos corporativos modernos e hospitais de excel\u00eancia internacional como o Hospital Israelita Albert Einstein. A Moto11 oferece servi\u00e7o de courier com alto padr\u00e3o de pontualidade para entrega de exames, contratos executivos e malotes sigilosos entre Guarulhos e o Morumbi.",
    eixosViarios: ["Marginal Pinheiros", "Av. Giovanni Gronchi", "Av. Morumbi", "Av. Albert Einstein", "Av. Chucri Zaidan"],
    demandasComuns: ["Laudos, receitas e prontuários médicos para o Hospital Albert Einstein", "Contratos corporativos e atos societários para sedes empresariais", "Entregas personalizadas em condomínios fechados do Morumbi", "Malotes executivos confidenciais entre indústrias e diretorias"],
    orientacaoTransito: "As portarias dos condom\u00ednios fechados exigem identifica\u00e7\u00e3o rigorosa. Nossos pilotos possuem documenta\u00e7\u00e3o completa para atendimento \u00e1gil e seguro.",
    faq: [
      {
        pergunta: "Voc\u00eas realizam entregas no Hospital Albert Einstein no Morumbi?",
        resposta: "Sim, entregamos e retiramos documentos e laudos nas recep\u00e7\u00f5es autorizadas do hospital.",
      },
      {
        pergunta: "Como funciona a entrega em condom\u00ednios fechados?",
        resposta: "A entrega \u00e9 realizada na portaria com autoriza\u00e7\u00e3o do morador e protocolo assinado.",
      },
      {
        pergunta: "Qual a toler\u00e2ncia de espera em edif\u00edcios corporativos?",
        resposta: "Alinhamos a toler\u00e2ncia no or\u00e7amento pr\u00e9vio para garantir total previsibilidade.",
      },
    ],
    rotasRelacionadas: [
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "campo-belo", nome: "Campo Belo" },
      { slug: "butanta", nome: "Butant\u00e3" },
      { slug: "pinheiros", nome: "Pinheiros" },
    ],
  },
  {
    slug: "campo-belo",
    nome: "Campo Belo",
    regiao: "Zona Sul Nobre e Polo Corporativo",
    subtitulo: "Atendimento na Av. Washington Lu\u00eds, Av. Roberto Marinho e Berrini",
    resumoRota: "O Campo Belo \u00e9 um bairro nobre vizinho ao Aeroporto de Congonhas e \u00e0 Av. Engenheiro Lu\u00eds Carlos Berrini. Re\u00fane empresas de avia\u00e7\u00e3o, consultorias de engenharia e condom\u00ednios de alto padr\u00e3o. A Moto11 transporta documentos societ\u00e1rios, malotes banc\u00e1rios e compras expressas com total discri\u00e7\u00e3o e pontualidade.",
    eixosViarios: ["Av. Washington Luís", "Av. Jornalista Roberto Marinho", "Av. Santo Amaro", "Rua Vieira de Morais"],
    demandasComuns: ["Documentos contratuais e projetos de engenharia", "Malotes corporativos entre filiais da Berrini e Guarulhos", "Despachos expressos ligados à aviação e Congonhas", "Entregas domiciliares para condomínios residenciais"],
    orientacaoTransito: "O tr\u00e2nsito na Washington Lu\u00eds e Roberto Marinho afunila no hor\u00e1rio de pico. A moto permite conex\u00f5es r\u00e1pidas entre a Zona Sul e Guarulhos.",
    faq: [
      {
        pergunta: "Atendem empresas e escrit\u00f3rios na Av. Roberto Marinho?",
        resposta: "Sim, realizamos entregas na recep\u00e7\u00e3o de edif\u00edcios comerciais com identifica\u00e7\u00e3o.",
      },
      {
        pergunta: "O motoboy pode retirar documentos em Congonhas?",
        resposta: "Sim, atendemos empresas e viajantes no aeroporto com ponto de encontro combinado.",
      },
      {
        pergunta: "Como solicitar uma cota\u00e7\u00e3o para o Campo Belo?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba na hora o valor e previs\u00e3o da rota.",
      },
    ],
    rotasRelacionadas: [
      { slug: "moema", nome: "Moema" },
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "morumbi", nome: "Morumbi" },
      { slug: "santo-amaro", nome: "Santo Amaro" },
    ],
  },
  {
    slug: "santo-amaro",
    nome: "Santo Amaro",
    regiao: "Maior Polo Comercial e Industrial da Zona Sul",
    subtitulo: "Atendimento no Largo Treze, F\u00f3rum Regional de Santo Amaro e ind\u00fastrias",
    resumoRota: "Santo Amaro \u00e9 o mais importante centro financeiro, comercial e institucional da Zona Sul paulistana. Abriga o F\u00f3rum Regional de Santo Amaro, grandes ind\u00fastrias, polos universit\u00e1rios e o centro comercial do Largo Treze. A Moto11 atende empresas conectando o polo fabril de Guarulhos a Santo Amaro para transporte de pe\u00e7as, contratos e peti\u00e7\u00f5es.",
    eixosViarios: ["Marginal Pinheiros", "Av. Santo Amaro", "Av. Washington Luís", "Av. Adolfo Pinheiro", "Largo Treze de Maio"],
    demandasComuns: ["Protocolo de petições e autos no Fórum de Santo Amaro", "Peças e componentes técnicos para indústrias da Zona Sul", "Documentos contratuais e malotes contábeis", "Mercadorias do comércio atacadista e varejista local"],
    orientacaoTransito: "A dist\u00e2ncia e o tr\u00e2nsito da Marginal Pinheiros demandam experi\u00eancia na escolha dos hor\u00e1rios de sa\u00edda. A moto reduz o tempo de viagem quase pela metade frente aos carros.",
    faq: [
      {
        pergunta: "Voc\u00eas protocolam peti\u00e7\u00f5es no F\u00f3rum de Santo Amaro?",
        resposta: "Sim, o piloto recolhe o carimbo de protocolo no balc\u00e3o e envia foto no WhatsApp.",
      },
      {
        pergunta: "Quanto tempo leva uma entrega de Guarulhos para Santo Amaro?",
        resposta: "Informamos a estimativa no momento da cota\u00e7\u00e3o considerando as condi\u00e7\u00f5es da Marginal.",
      },
      {
        pergunta: "Empresas podem faturar os fretes?",
        resposta: "Sim, disponibilizamos faturamento corporativo para clientes com demanda cont\u00ednua.",
      },
    ],
    rotasRelacionadas: [
      { slug: "campo-belo", nome: "Campo Belo" },
      { slug: "campo-limpo", nome: "Campo Limpo" },
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "morumbi", nome: "Morumbi" },
    ],
  },
  {
    slug: "campo-limpo",
    nome: "Campo Limpo",
    regiao: "Zona Sul / Extremo Sul Paulistano",
    subtitulo: "Conex\u00e3o comercial e log\u00edstica entre Guarulhos e a Zona Sul",
    resumoRota: "O Campo Limpo \u00e9 um dos distritos mais populosos da Zona Sul de S\u00e3o Paulo. Com com\u00e9rcio varejista ativo, hospitais p\u00fablicos e polos de distribui\u00e7\u00e3o, o bairro demanda transporte cont\u00ednuo de autope\u00e7as, mercadorias leves e documentos. A Moto11 atende comerciantes e prestadores de servi\u00e7os com fretes diretos.",
    eixosViarios: ["Estrada do Campo Limpo", "Av. Carlos Lacerda", "Av. Professor Francisco Morato", "Marginal Pinheiros (acesso)"],
    demandasComuns: ["Peças automotivas para oficinas mecânicas locais", "Entregas de e-commerce e produtos para o consumidor final", "Documentos fiscais e ordens de serviço", "Medicamentos e produtos farmacêuticos"],
    orientacaoTransito: "O tr\u00e1fego nas vias arteriais do Campo Limpo \u00e9 intenso. A agilidade da moto \u00e9 essencial para atravessar a cidade e entregar no prazo combinado.",
    faq: [
      {
        pergunta: "Atendem todas as regi\u00f5es do Campo Limpo?",
        resposta: "Sim, cobrimos bairros residenciais e centros comerciais do distrito.",
      },
      {
        pergunta: "Qual o limite de peso transportado na moto?",
        resposta: "At\u00e9 20 kg devidamente acomodados no ba\u00fa fechado da motocicleta.",
      },
      {
        pergunta: "Como efetuar o pagamento da corrida?",
        resposta: "O pagamento pode ser feito via Pix ou faturado para empresas conveniadas.",
      },
    ],
    rotasRelacionadas: [
      { slug: "santo-amaro", nome: "Santo Amaro" },
      { slug: "morumbi", nome: "Morumbi" },
      { slug: "butanta", nome: "Butant\u00e3" },
      { slug: "osasco", nome: "Osasco" },
    ],
  },
  {
    slug: "itaim-bibi",
    nome: "Itaim Bibi",
    regiao: "Cora\u00e7\u00e3o Financeiro de S\u00e3o Paulo (Faria Lima / JK)",
    subtitulo: "Atendimento premium a bancos de investimento, multinacionais e grandes escrit\u00f3rios",
    resumoRota: "O Itaim Bibi abriga os cruzamentos mais valorizados do pa\u00eds: Av. Brigadeiro Faria Lima, Av. Presidente Juscelino Kubitschek e Av. Hor\u00e1cio Lafer. Sede de bancos de investimento, multinacionais, fundos de private equity e escrit\u00f3rios de advocacia de grande porte, exige pontualidade e apresenta\u00e7\u00e3o impec\u00e1vel. A Moto11 transporta contratos societ\u00e1rios, malotes executivos e documentos de alto valor.",
    eixosViarios: ["Av. Brigadeiro Faria Lima", "Av. Pres. Juscelino Kubitschek", "Rua Joaquim Floriano", "Av. Santo Amaro", "Marginal Pinheiros"],
    demandasComuns: ["Contratos de fusões, aquisições e procurações societárias", "Malotes confidenciais de alta diretoria", "Atos notariais e escrituras de grande valor", "Tokens de segurança, cartões corporativos e documentos urgentes"],
    orientacaoTransito: "As portarias e docas comerciais dos edif\u00edcios triple-A do Itaim possuem normas estritas de seguran\u00e7a. Nossos pilotos s\u00e3o credenciados e atuam com uniforme e crach\u00e1.",
    faq: [
      {
        pergunta: "Voc\u00eas realizam entregas em edif\u00edcios corporativos na Av. Faria Lima e JK?",
        resposta: "Sim, atendemos com pontualidade e entregamos diretamente na recep\u00e7\u00e3o com protocolo assinado.",
      },
      {
        pergunta: "Como \u00e9 garantido o sigilo de documentos corporativos confidenciais?",
        resposta: "Os documentos viajam lacrados em pastas imperme\u00e1veis sem qualquer viola\u00e7\u00e3o do conte\u00fado.",
      },
      {
        pergunta: "Qual a previs\u00e3o de deslocamento de Guarulhos at\u00e9 o Itaim Bibi?",
        resposta: "A estimativa \u00e9 informada em tempo real no WhatsApp antes do in\u00edcio da corrida.",
      },
    ],
    rotasRelacionadas: [
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "moema", nome: "Moema" },
      { slug: "jardins", nome: "Jardins" },
      { slug: "campo-belo", nome: "Campo Belo" },
    ],
  },
  {
    slug: "jardins",
    nome: "Jardins",
    regiao: "Polo Nobre, Oscar Freire e Alta Gastronomia",
    subtitulo: "Atendimento refinado na Oscar Freire, Av. Brasil, galerias de arte e embaixadas",
    resumoRota: "Os Jardins (Jardim Am\u00e9rica, Jardim Europa, Jardim Paulista) concentram a \u00e1rea mais sofisticada de S\u00e3o Paulo. Conhecido pela Rua Oscar Freire, Av. Brasil e Av. Europa, abriga butiques internacionais, galerias de arte, cl\u00ednicas m\u00e9dicas exclusivas e embaixadas. A Moto11 oferece servi\u00e7o de courier com alto padr\u00e3o de cuidado e discri\u00e7\u00e3o.",
    eixosViarios: ["Rua Oscar Freire", "Av. Brasil", "Av. Europa", "Alameda Santos", "Av. Rebouças"],
    demandasComuns: ["Entregas exclusivas para butiques, joalherias e ateliês", "Documentos diplomáticos, certidões e passaportes", "Laudos e receitas para consultórios particulares dos Jardins", "Compras de luxo com entrega segura e sigilosa"],
    orientacaoTransito: "Ruas arborizadas e monitoradas por seguran\u00e7a privada. O motoboy atende com cordialidade e pontualidade exigida pelo perfil do bairro.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam itens de alto valor ou compras exclusivas nos Jardins?",
        resposta: "Sim, realizamos entregas seguras com acompanhamento ponto a ponto via WhatsApp.",
      },
      {
        pergunta: "O piloto entrega em m\u00e3os de destinat\u00e1rios autorizados?",
        resposta: "Sim, cumprimos instru\u00e7\u00f5es de entrega exclusiva \u00e0 pessoa indicada no pedido.",
      },
      {
        pergunta: "Como solicitar entrega de emerg\u00eancia para os Jardins?",
        resposta: "Chame no WhatsApp da Moto11 informando os detalhes da rota para atendimento imediato.",
      },
    ],
    rotasRelacionadas: [
      { slug: "itaim-bibi", nome: "Itaim Bibi" },
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "bela-vista", nome: "Bela Vista" },
      { slug: "moema", nome: "Moema" },
    ],
  },
  {
    slug: "bela-vista",
    nome: "Bela Vista",
    regiao: "Polo Hospitalar de Excel\u00eancia e Av. Paulista",
    subtitulo: "Atendimento ao Hospital S\u00edrio-Liban\u00eas, Benefic\u00eancia Portuguesa e Av. Paulista",
    resumoRota: "A Bela Vista \u00e9 um dos maiores polos m\u00e9dico-hospitalares do Brasil, abrigando o Hospital S\u00edrio-Liban\u00eas, a Benefic\u00eancia Portuguesa, o Hospital Alem\u00e3o Oswaldo Cruz e o Hospital 9 de Julho. Pr\u00f3ximo \u00e0 Av. Paulista, o bairro demanda transporte di\u00e1rio de laudos, exames, medicamentos especiais e contratos. A Moto11 conecta cl\u00ednicas e laborat\u00f3rios de Guarulhos a esses centros com m\u00e1xima agilidade.",
    eixosViarios: ["Av. Paulista", "Rua Dona Adma Jafet", "Rua Maestro Cardim", "Av. Brigadeiro Luís Antônio", "Av. 23 de Maio"],
    demandasComuns: ["Laudos médicos urgentes e exames laboratoriais", "Medicamentos de alto custo e insumos hospitalares com transporte rápido", "Contratos corporativos para escritórios da Av. Paulista", "Prontuários e autorizações de operadoras de saúde"],
    orientacaoTransito: "O acesso pelo Corredor 23 de Maio garante chegada r\u00e1pida a partir de Guarulhos. A moto evita a lentid\u00e3o dos estacionamentos hospitalares entregando em m\u00e3os na recep\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Fazem entregas no Hospital S\u00edrio-Liban\u00eas e Benefic\u00eancia Portuguesa?",
        resposta: "Sim, nossos pilotos realizam entregas di\u00e1rias nas recep\u00e7\u00f5es hospitalares com protocolo.",
      },
      {
        pergunta: "Como funciona o transporte de exames m\u00e9dicos com sigilo?",
        resposta: "Os exames trafegam lacrados e embalados com absoluta privacidade dos dados do paciente.",
      },
      {
        pergunta: "Qual o tempo m\u00e9dio de viagem entre Guarulhos e a Bela Vista?",
        resposta: "A rota vi\u00e1ria de moto \u00e9 muito \u00e1gil gra\u00e7as ao Corredor 23 de Maio, informada antes da sa\u00edda.",
      },
    ],
    rotasRelacionadas: [
      { slug: "se", nome: "S\u00e9" },
      { slug: "republica", nome: "Rep\u00fablica" },
      { slug: "vila-mariana", nome: "Vila Mariana" },
      { slug: "jardins", nome: "Jardins" },
    ],
  },
  {
    slug: "republica",
    nome: "Rep\u00fablica",
    regiao: "Centro Hist\u00f3rico, Cultural e Administrativo",
    subtitulo: "Atendimento na Pra\u00e7a da Rep\u00fablica, Av. S\u00e3o Jo\u00e3o, Edif\u00edcio Copan e \u00f3rg\u00e3os estaduais",
    resumoRota: "A Rep\u00fablica \u00e9 um polo de reparti\u00e7\u00f5es p\u00fablicas estaduais, \u00f3rg\u00e3os de patrim\u00f4nio, sedes de sindicatos e escrit\u00f3rios de arquitetura ao redor do Edif\u00edcio Copan e Pra\u00e7a da Rep\u00fablica. A Moto11 atende empresas guarulhenses que precisam despachar editais, projetos arquitet\u00f4nicos, documentos p\u00fablicos e contratos com velocidade e protocolo no centro da capital.",
    eixosViarios: ["Praça da República", "Av. São João", "Av. Ipiranga", "Rua da Consolação", "Av. Rio Branco"],
    demandasComuns: ["Protocolos em repartições públicas estaduais e sindicatos", "Projetos arquitetônicos, plantas e contratos executivos", "Documentos contratuais de imobiliárias e contabilidades", "Malotes bancários em agências do centro paulistano"],
    orientacaoTransito: "Ruas com tr\u00e1fego exclusivo de pedestres e \u00f4nibus. A aproxima\u00e7\u00e3o de moto \u00e9 essencial para realizar o protocolo sem enfrentar a escassez de vagas de carro.",
    faq: [
      {
        pergunta: "Voc\u00eas protocolam projetos em \u00f3rg\u00e3os p\u00fablicos na Rep\u00fablica?",
        resposta: "Sim, o piloto leva os envelopes, colhe o carimbo de protocolo e envia a foto no WhatsApp.",
      },
      {
        pergunta: "Qual o hor\u00e1rio para despachos urgentes no Centro de SP?",
        resposta: "Atendemos de segunda a sexta, das 8h \u00e0s 18h, alinhando com o expediente dos \u00f3rg\u00e3os.",
      },
      {
        pergunta: "Como \u00e9 fornecido o comprovante da entrega?",
        resposta: "O comprovante digital \u00e9 disponibilizado imediatamente pelo WhatsApp com o carimbo oficial.",
      },
    ],
    rotasRelacionadas: [
      { slug: "se", nome: "S\u00e9" },
      { slug: "santa-cecilia", nome: "Santa Cec\u00edlia" },
      { slug: "bela-vista", nome: "Bela Vista" },
      { slug: "barra-funda", nome: "Barra Funda" },
    ],
  },
  {
    slug: "santa-cecilia",
    nome: "Santa Cec\u00edlia",
    regiao: "Centro-Oeste / Complexo da Santa Casa de SP",
    subtitulo: "Atendimento \u00e0 Santa Casa de S\u00e3o Paulo, consult\u00f3rios e escrit\u00f3rios",
    resumoRota: "Santa Cec\u00edlia \u00e9 um bairro tradicional que abriga o Complexo Hospitalar da Santa Casa de S\u00e3o Paulo, faculdades m\u00e9dicas, consult\u00f3rios e escrit\u00f3rios de design. A Moto11 conecta laborat\u00f3rios e cl\u00ednicas de Guarulhos a Santa Cec\u00edlia para transporte pontual de laudos, exames, guias e contratos.",
    eixosViarios: ["Rua Santa Isabel", "Rua Jaguaribe", "Rua das Palmeiras", "Av. Angélica", "Av. São João"],
    demandasComuns: ["Laudos, prontuários e receitas para a Santa Casa de SP", "Guias de convênio e exames em consultórios da Av. Angélica", "Documentos contratuais para escritórios e imobiliárias", "Entregas expressas para residências e comércio local"],
    orientacaoTransito: "Tr\u00e2nsito denso nos cruzamentos com a Av. S\u00e3o Jo\u00e3o e Ang\u00e9lica. A motocicleta permite entregas porta a porta sem atrasos.",
    faq: [
      {
        pergunta: "Atendem o complexo da Santa Casa de S\u00e3o Paulo?",
        resposta: "Sim, realizamos entregas na administra\u00e7\u00e3o e recep\u00e7\u00f5es autorizadas da Santa Casa.",
      },
      {
        pergunta: "Voc\u00eas transportam moldes odontol\u00f3gicos para a regi\u00e3o?",
        resposta: "Sim, moldes viajam protegidos contra impacto em compartimento especial no ba\u00fa.",
      },
      {
        pergunta: "Como cotar uma rota de Guarulhos para Santa Cec\u00edlia?",
        resposta: "Envie os endere\u00e7os no WhatsApp da Moto11 e receba o valor e prazo fechados.",
      },
    ],
    rotasRelacionadas: [
      { slug: "republica", nome: "Rep\u00fablica" },
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "perdizes", nome: "Perdizes" },
      { slug: "se", nome: "S\u00e9" },
    ],
  },
  {
    slug: "cambuci",
    nome: "Cambuci",
    regiao: "Polo Gr\u00e1fico e Industrial Central",
    subtitulo: "Atendimento na Av. do Estado, gr\u00e1ficas de seguran\u00e7a e ind\u00fastrias leves",
    resumoRota: "O Cambuci \u00e9 um dos bairros fabris e gr\u00e1ficos mais tradicionais de S\u00e3o Paulo, vizinho ao Centro e \u00e0 Mooca. Abriga gr\u00e1ficas de seguran\u00e7a, confec\u00e7\u00f5es, distribuidoras e dep\u00f3sitos ao longo da Av. do Estado e Rua Lavap\u00e9s. A Moto11 realiza entregas di\u00e1rias de provas gr\u00e1ficas, materiais impressos, malotes e suprimentos com rapidez.",
    eixosViarios: ["Av. do Estado", "Rua Lavapés", "Rua da Mooca", "Av. Lins de Vasconcelos"],
    demandasComuns: ["Provas de impressão, catálogos e materiais de gráficas", "Peças e suprimentos para oficinas mecânicas locais", "Malotes entre matriz em Guarulhos e filiais fabris", "Contratos contratuais e notas fiscais de atacado"],
    orientacaoTransito: "O corredor da Av. do Estado conecta diretamente com as vias de Guarulhos. A moto trafega com fluidez mesmo em hor\u00e1rios de pico.",
    faq: [
      {
        pergunta: "Voc\u00eas transportam materiais impressos de gr\u00e1ficas no Cambuci?",
        resposta: "Sim, transportamos provas, formul\u00e1rios e impressos com cuidado contra amassados.",
      },
      {
        pergunta: "Qual o limite de carga por moto para o Cambuci?",
        resposta: "At\u00e9 20 kg devidamente acomodados em ba\u00fa vedado de 100 litros.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel faturar coletas regulares para empresas?",
        resposta: "Sim, oferecemos op\u00e7\u00f5es de faturamento mensal para pessoas jur\u00eddicas cadastradas.",
      },
    ],
    rotasRelacionadas: [
      { slug: "se", nome: "S\u00e9" },
      { slug: "mooca", nome: "Mooca" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "vila-mariana", nome: "Vila Mariana" },
    ],
  },
  {
    slug: "vila-leopoldina",
    nome: "Vila Leopoldina",
    regiao: "Polo Criativo, Log\u00edstico e CEAGESP",
    subtitulo: "Atendimento a produtoras de v\u00eddeo, tecnologia e galp\u00f5es da Av. Gast\u00e3o Vidigal",
    resumoRota: "A Vila Leopoldina \u00e9 o principal polo criativo e audiovisual de S\u00e3o Paulo, al\u00e9m de abrigar o CEAGESP e grandes condom\u00ednios de galp\u00f5es log\u00edsticos na Av. Dr. Gast\u00e3o Vidigal e Av. Imperatriz Leopoldina. A Moto11 conecta ind\u00fastrias e ag\u00eancias de Guarulhos \u00e0 Vila Leopoldina para transporte \u00e1gil de HDs, equipamentos de filmagem leves, contratos e amostras.",
    eixosViarios: ["Marginal Tietê", "Av. Doutor Gastão Vidigal", "Av. Imperatriz Leopoldina", "Marginal Pinheiros (acesso)"],
    demandasComuns: ["Equipamentos de mídia leves, cartões de memória e HDs para produtoras", "Documentos contratuais e faturas de operadores logísticos", "Amostras comerciais de fornecedores do CEAGESP", "Peças e insumos técnicos para galpões da Gastão Vidigal"],
    orientacaoTransito: "O acesso direto pela pista expressa da Marginal Tiet\u00ea proporciona deslocamento r\u00e1pido entre a Dutra e a Zona Oeste.",
    faq: [
      {
        pergunta: "Atendem produtoras de v\u00eddeo na Vila Leopoldina?",
        resposta: "Sim, realizamos transporte de m\u00eddias e equipamentos com acondicionamento seguro contra impactos.",
      },
      {
        pergunta: "Voc\u00eas realizam coletas de amostras no CEAGESP?",
        resposta: "Sim, retiramos amostras e documentos em boxes autorizados do entreposto.",
      },
      {
        pergunta: "Qual a previs\u00e3o de tempo de Guarulhos at\u00e9 a Vila Leopoldina?",
        resposta: "A estimativa \u00e9 informada no WhatsApp conforme o fluxo da Marginal Tiet\u00ea.",
      },
    ],
    rotasRelacionadas: [
      { slug: "lapa", nome: "Lapa" },
      { slug: "barra-funda", nome: "Barra Funda" },
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "osasco", nome: "Osasco" },
    ],
  },
  {
    slug: "barra-funda",
    nome: "Barra Funda",
    regiao: "Polo Judici\u00e1rio Trabalhista e de Eventos",
    subtitulo: "Atendimento ao F\u00f3rum Ruy Barbosa, Memorial da Am\u00e9rica Latina e Av. Marqu\u00eas de S\u00e3o Vicente",
    resumoRota: "A Barra Funda \u00e9 um polo jur\u00eddico de destaque em S\u00e3o Paulo, abrigando o F\u00f3rum Trabalhista Ruy Barbosa, o F\u00f3rum Criminal Ministro M\u00e1rio Guimar\u00e3es e sedes de grandes empresas de comunica\u00e7\u00e3o. A Moto11 realiza viagens di\u00e1rias entre Guarulhos e a Barra Funda para protocolo de peti\u00e7\u00f5es trabalhistas, autos processuais, contratos e amostras com rigoroso cumprimento de prazos.",
    eixosViarios: ["Marginal Tietê", "Av. Marquês de São Vicente", "Av. Francisco Matarazzo", "Rua Antártica"],
    demandasComuns: ["Protocolo de petições e certidões no Fórum Trabalhista Ruy Barbosa", "Petições criminais no Fórum Ministro Mário Guimarães", "Contratos corporativos e malotes para empresas da Marquês de São Vicente", "Documentos e amostras para produtoras e emissoras de TV"],
    orientacaoTransito: "A Marginal Tiet\u00ea conecta a Dutra diretamente \u00e0 Av. Marqu\u00eas de S\u00e3o Vicente. A motocicleta \u00e9 a \u00fanica op\u00e7\u00e3o capaz de garantir protocolos em dias de tr\u00e2nsito carregado.",
    faq: [
      {
        pergunta: "Voc\u00eas protocolam peti\u00e7\u00f5es f\u00edsicas no F\u00f3rum Trabalhista Ruy Barbosa?",
        resposta: "Sim, o piloto colhe o carimbo oficial no balc\u00e3o e envia foto com data e hora imediatamente.",
      },
      {
        pergunta: "Qual a anteced\u00eancia m\u00ednima para um protocolo no mesmo dia?",
        resposta: "Recomendamos enviar a rota no WhatsApp com anteced\u00eancia em rela\u00e7\u00e3o ao hor\u00e1rio de fechamento do f\u00f3rum.",
      },
      {
        pergunta: "Como \u00e9 feito o pagamento do servi\u00e7o?",
        resposta: "O pagamento pode ser feito via Pix, cart\u00e3o ou faturado para escrit\u00f3rios conveniados.",
      },
    ],
    rotasRelacionadas: [
      { slug: "lapa", nome: "Lapa" },
      { slug: "perdizes", nome: "Perdizes" },
      { slug: "santa-cecilia", nome: "Santa Cec\u00edlia" },
      { slug: "santana", nome: "Santana" },
    ],
  },
  {
    slug: "aricanduva",
    nome: "Aricanduva",
    regiao: "Polo Comercial e Automotivo da Zona Leste",
    subtitulo: "Atendimento ao Centro Comercial Aricanduva, Auto Shopping e autope\u00e7as",
    resumoRota: "O Aricanduva abriga o maior complexo de compras da Am\u00e9rica Latina (Centro Comercial Aricanduva), al\u00e9m do Auto Shopping e forte polo de distribuidoras de autope\u00e7as na Av. Aricanduva. A Moto11 atende lojistas, mec\u00e2nicos e distribuidores com transporte \u00e1gil de pe\u00e7as, suprimentos e encomendas com conex\u00e3o expressa por Guarulhos.",
    eixosViarios: ["Av. Aricanduva", "Radial Leste (acesso)", "Av. Salim Farah Maluf", "Av. Rio das Pedras"],
    demandasComuns: ["Peças automotivas, faróis, retrovisores e acessórios", "Retiradas e entregas em lojas do Centro Comercial Aricanduva", "Documentos fiscais e romaneios de frete", "Entregas de e-commerce para moradores da Zona Leste"],
    orientacaoTransito: "A Av. Aricanduva tem fluxo cont\u00ednuo de ve\u00edculos comerciais. O piloto de moto transita pelas vias expressas e locais com rapidez.",
    faq: [
      {
        pergunta: "Voc\u00eas buscam pe\u00e7as no Auto Shopping Aricanduva?",
        resposta: "Sim, retiramos mercadorias no balc\u00e3o de lojas e distribuidoras com a nota ou comprovante.",
      },
      {
        pergunta: "Qual o limite de volume para pe\u00e7as automotivas?",
        resposta: "Transportamos caixas e pacotes de at\u00e9 20 kg adequadamente acondicionados no ba\u00fa da moto.",
      },
      {
        pergunta: "Como solicitar uma corrida para o Aricanduva?",
        resposta: "Envie os detalhes da rota no WhatsApp e receba a cota\u00e7\u00e3o fechada antes da sa\u00edda.",
      },
    ],
    rotasRelacionadas: [
      { slug: "tatuape", nome: "Tatuap\u00e9" },
      { slug: "itaquera", nome: "Itaquera" },
      { slug: "penha", nome: "Penha" },
    ],
  },
  {
    slug: "sao-caetano",
    nome: "S\u00e3o Caetano do Sul",
    regiao: "Polo Automotivo e Tecnol\u00f3gico do ABC",
    subtitulo: "Conex\u00e3o r\u00e1pida com ind\u00fastrias metalmec\u00e2nicas, Av. Goi\u00e1s e montadoras",
    resumoRota: "S\u00e3o Caetano do Sul \u00e9 uma das cidades de maior \u00edndice de desenvolvimento humano e polo automotivo e tecnol\u00f3gico da Grande S\u00e3o Paulo. Sede da General Motors e dezenas de fornecedores de autope\u00e7as e ind\u00fastrias farmac\u00eauticas, o munic\u00edpio demanda fretes expressos cont\u00ednuos conectando-se a Guarulhos pela Av. do Estado e Salim Farah Maluf. A Moto11 transporta amostras, pe\u00e7as, contratos e malotes corporativos.",
    eixosViarios: ["Av. Goiás", "Av. do Estado", "Av. dos Estados", "Estrada das Lágrimas", "Av. Salim Farah Maluf (acesso)"],
    demandasComuns: ["Peças de reposição e componentes industriais para montadoras e sistemistas", "Amostras laboratoriais e produtos farmacêuticos", "Contratos corporativos e malotes entre matriz e filiais", "Documentos fiscais e certidões em cartórios do ABC"],
    orientacaoTransito: "A Av. dos Estados e a Salim Farah Maluf conectam a Dutra a S\u00e3o Caetano com excelente agilidade para motocicletas.",
    faq: [
      {
        pergunta: "Atendem portarias de montadoras e f\u00e1bricas em S\u00e3o Caetano?",
        resposta: "Sim, nossos pilotos possuem trajes adequados e seguem as normas de identifica\u00e7\u00e3o das plantas fabris.",
      },
      {
        pergunta: "Qual a previs\u00e3o de deslocamento de Guarulhos a S\u00e3o Caetano de moto?",
        resposta: "Informamos a estimativa no WhatsApp considerando as condi\u00e7\u00f5es do tr\u00e2nsito vi\u00e1rio no momento.",
      },
      {
        pergunta: "Empresas de S\u00e3o Caetano podem faturar os servi\u00e7os?",
        resposta: "Sim, disponibilizamos faturamento mensal mediante cadastro corporativo.",
      },
    ],
    rotasRelacionadas: [
      { slug: "santo-andre", nome: "Santo Andr\u00e9" },
      { slug: "sao-bernardo", nome: "S\u00e3o Bernardo do Campo" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "vila-prudente", nome: "Vila Prudente" },
    ],
  },
  {
    slug: "santo-andre",
    nome: "Santo Andr\u00e9",
    regiao: "Centro Comercial e Polo Petroqu\u00edmico do ABC",
    subtitulo: "Atendimento na Av. Industrial, Av. dos Estados e Polo Petroqu\u00edmico",
    resumoRota: "Santo Andr\u00e9 \u00e9 o polo central do Grande ABC, abrigando o Polo Petroqu\u00edmico de Capuava, grandes ind\u00fastrias qu\u00edmicas, metal\u00fargicas e centros comerciais na Av. Industrial e Av. Perimetral. A Moto11 atende empresas com transporte seguro de amostras qu\u00edmicas, pe\u00e7as t\u00e9cnicas, contratos e documentos fiscais ligando o parque fabril de Guarulhos a Santo Andr\u00e9.",
    eixosViarios: ["Av. dos Estados", "Av. Industrial", "Rodoanel Mário Covas (trecho Leste)", "Av. Pereira Barreto"],
    demandasComuns: ["Amostras químicas em embalagens seguras de acordo com as normas", "Peças usinadas e componentes de reposição urgente", "Malotes contábeis e fiscais entre empresas parceiras", "Contratos corporativos e ordens de compra assinadas"],
    orientacaoTransito: "O trajeto pode ser percorrido pela Av. dos Estados ou pelo Rodoanel Leste, dependendo do ponto de partida em Guarulhos. A moto garante pontualidade comprovada.",
    faq: [
      {
        pergunta: "Voc\u00eas transportam amostras para o Polo Petroqu\u00edmico de Capuava?",
        resposta: "Sim, amostras n\u00e3o perigosas devidamente embaladas e vedadas viajam com seguran\u00e7a.",
      },
      {
        pergunta: "Qual o tempo m\u00e9dio de viagem entre Guarulhos e Santo Andr\u00e9?",
        resposta: "A rota \u00e9 planejada pela melhor op\u00e7\u00e3o vi\u00e1ria de moto e confirmada na cota\u00e7\u00e3o.",
      },
      {
        pergunta: "Como acompanhar o motoboy durante a viagem?",
        resposta: "O cliente recebe confirma\u00e7\u00e3o de sa\u00edda e foto do comprovante assinado no destino.",
      },
    ],
    rotasRelacionadas: [
      { slug: "sao-caetano", nome: "S\u00e3o Caetano do Sul" },
      { slug: "sao-bernardo", nome: "S\u00e3o Bernardo do Campo" },
      { slug: "ipiranga", nome: "Ipiranga" },
      { slug: "sacoma", nome: "Sacom\u00e3" },
    ],
  },
  {
    slug: "sao-bernardo",
    nome: "S\u00e3o Bernardo do Campo",
    regiao: "Capital da Ind\u00fastria Automobil\u00edstica",
    subtitulo: "Atendimento a montadoras, sistemistas e galp\u00f5es da Via Anchieta",
    resumoRota: "S\u00e3o Bernardo do Campo \u00e9 o ber\u00e7o da ind\u00fastria automobil\u00edstica brasileira. Cortado pela Via Anchieta e pela Rodovia dos Imigrantes, re\u00fane montadoras, fabricantes de autope\u00e7as, ferramentarias e centros de engenharia. A Moto11 conecta o polo industrial de Cumbica e Guarulhos a S\u00e3o Bernardo para envio de pe\u00e7as urgentes de prot\u00f3tipo, ferramentais e documentos fiscais.",
    eixosViarios: ["Via Anchieta (SP-150)", "Rodoanel Mário Covas (trecho Sul)", "Av. Brigadeiro Faria Lima (SBC)", "Av. Jurubatuba"],
    demandasComuns: ["Peças de protótipo e ferramentais de urgência para linhas de montagem", "DANFEs, certidões e manifestos de transporte intermunicipal", "Malotes entre escritórios de engenharia e plantas fabris", "Contratos societários e documentos de comércio exterior"],
    orientacaoTransito: "O trajeto pode ser efetuado via Rodoanel ou pelas pistas expressas da Anchieta. A agilidade da moto evita paradas de linha de produ\u00e7\u00e3o no polo automotivo.",
    faq: [
      {
        pergunta: "Atendem montadoras na Via Anchieta em S\u00e3o Bernardo?",
        resposta: "Sim, nossos pilotos atendem guaritas industriais com EPI b\u00e1sico e identifica\u00e7\u00e3o formal.",
      },
      {
        pergunta: "Qual o limite de carga para pe\u00e7as automotivas?",
        resposta: "Transportamos at\u00e9 20 kg por moto com seguran\u00e7a em ba\u00fa vedado de 100 litros.",
      },
      {
        pergunta: "Como solicitar uma cota\u00e7\u00e3o de Guarulhos para S\u00e3o Bernardo?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba a confirma\u00e7\u00e3o do valor na hora.",
      },
    ],
    rotasRelacionadas: [
      { slug: "santo-andre", nome: "Santo Andr\u00e9" },
      { slug: "sao-caetano", nome: "S\u00e3o Caetano do Sul" },
      { slug: "sacoma", nome: "Sacom\u00e3" },
      { slug: "ipiranga", nome: "Ipiranga" },
    ],
  },
  {
    slug: "osasco",
    nome: "Osasco",
    regiao: "Polo Financeiro, Log\u00edstico e de E-commerce",
    subtitulo: "Atendimento \u00e0 Cidade de Deus (Bradesco), centros de distribui\u00e7\u00e3o e rodovias",
    resumoRota: "Osasco \u00e9 um dos maiores polos econ\u00f4micos de S\u00e3o Paulo, sediando a matriz do Bradesco (Cidade de Deus), grandes centros de distribui\u00e7\u00e3o de e-commerce e empresas de tecnologia. A conex\u00e3o de Guarulhos a Osasco pela Marginal Tiet\u00ea expressa e Rodovia Castello Branco viabiliza o transporte veloz de malotes banc\u00e1rios, equipamentos de TI leves, contratos e pacotes.",
    eixosViarios: ["Marginal Tietê", "Rodovia Castello Branco", "Av. dos Autonomistas", "Av. Hilário Pereira de Souza"],
    demandasComuns: ["Malotes bancários e financeiros para a Cidade de Deus", "Contratos corporativos e procurações entre empresas", "Equipamentos de informática e tokens de segurança", "Entregas expressas de e-commerce no mesmo dia"],
    orientacaoTransito: "A Marginal Tiet\u00ea expressa oferece pista direta at\u00e9 a Ponte dos Rem\u00e9dios e Osasco. A moto reduz o tempo de percurso pela metade em hor\u00e1rios de pico.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam malotes na Cidade de Deus em Osasco?",
        resposta: "Sim, realizamos entregas na administra\u00e7\u00e3o e recep\u00e7\u00f5es banc\u00e1rias autorizadas.",
      },
      {
        pergunta: "Qual a estimativa de tempo de viagem entre Guarulhos e Osasco?",
        resposta: "Informamos a previs\u00e3o no WhatsApp conforme o fluxo da Marginal Tiet\u00ea.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel faturar servi\u00e7os para empresas de Osasco?",
        resposta: "Sim, oferecemos faturamento mensal para clientes corporativos cadastrados.",
      },
    ],
    rotasRelacionadas: [
      { slug: "barueri", nome: "Barueri" },
      { slug: "lapa", nome: "Lapa" },
      { slug: "vila-leopoldina", nome: "Vila Leopoldina" },
      { slug: "butanta", nome: "Butant\u00e3" },
    ],
  },
  {
    slug: "barueri",
    nome: "Barueri",
    regiao: "Polo Corporativo de Alphaville e Tambor\u00e9",
    subtitulo: "Atendimento na Alameda Rio Negro, Al. Araguaia e grandes sedes globais",
    resumoRota: "Barueri abriga o complexo de Alphaville e Tambor\u00e9, um dos polos empresariais mais importantes do pa\u00eds. Sede de multinacionais de tecnologia, institui\u00e7\u00f5es financeiras, operadoras de cart\u00f5es e data centers, a regi\u00e3o exige transporte executivo de alta confiabilidade. A Moto11 transporta contratos societ\u00e1rios, malotes de diretoria e equipamentos eletr\u00f4nicos com conex\u00e3o direta pela Marginal Tiet\u00ea e Rodovia Castello Branco.",
    eixosViarios: ["Rodovia Castello Branco (km 21 ao 26)", "Alameda Rio Negro", "Alameda Araguaia", "Av. Tamboré", "Alameda Mamoré"],
    demandasComuns: ["Contratos de fusões e aquisições para sedes corporativas em Alphaville", "Malotes executivos confidenciais entre diretoria e fábrica em Guarulhos", "Cartões corporativos, tokens de segurança e equipamentos de TI", "Documentos contratuais para imobiliárias e cartórios de Barueri"],
    orientacaoTransito: "O tr\u00e1fego na Castello Branco costuma ser intenso nos acessos a Alphaville. A motocicleta transita com rapidez pelas faixas de rolamento, assegurando pontualidade em compromissos corporativos decisivos.",
    faq: [
      {
        pergunta: "Atendem edif\u00edcios corporativos em Alphaville e Tambor\u00e9?",
        resposta: "Sim, realizamos entregas com identifica\u00e7\u00e3o formal em portarias e recep\u00e7\u00f5es corporativas.",
      },
      {
        pergunta: "Como \u00e9 garantido o sigilo de documentos corporativos confidenciais?",
        resposta: "Os documentos viajam lacrados em pastas imperme\u00e1veis com entrega exclusiva \u00e0 pessoa autorizada.",
      },
      {
        pergunta: "Qual a previs\u00e3o de tempo de Guarulhos at\u00e9 Alphaville de moto?",
        resposta: "A rota \u00e9 informada com precis\u00e3o no momento da cota\u00e7\u00e3o, considerando o tr\u00e1fego da Castello Branco.",
      },
    ],
    rotasRelacionadas: [
      { slug: "osasco", nome: "Osasco" },
      { slug: "lapa", nome: "Lapa" },
      { slug: "pinheiros", nome: "Pinheiros" },
      { slug: "vila-leopoldina", nome: "Vila Leopoldina" },
    ],
  },
];

export function getSpNeighborhood(slug: string): SpNeighborhood | undefined {
  return neighborhoodsSp.find((area) => area.slug === slug);
}
