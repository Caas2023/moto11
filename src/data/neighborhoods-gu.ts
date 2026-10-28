export interface NeighborhoodFaq {
  pergunta: string;
  resposta: string;
}

export interface NeighborhoodNeighbor {
  slug: string;
  nome: string;
}

export interface Neighborhood {
  slug: string;
  nome: string;
  zona: string;
  subtitulo: string;
  resumoLocal: string;
  viasPrincipais: string[];
  demandasComuns: string[];
  particularidadesLogistica: string;
  faq: NeighborhoodFaq[];
  bairrosVizinhos: NeighborhoodNeighbor[];
}

export const neighborhoodsGu: Neighborhood[] = [
  {
    slug: "cumbica",
    nome: "Cumbica",
    zona: "Polo Industrial e Log\u00edstico",
    subtitulo: "Atendimento r\u00e1pido a galp\u00f5es industriais, transportadoras e autope\u00e7as",
    resumoLocal: "Cumbica \u00e9 o cora\u00e7\u00e3o industrial de Guarulhos e um dos mais expressivos polos de manufatura do pa\u00eds. Cortado pela Via Dutra e pela Avenida Santos Dumont, o bairro abriga centenas de metal\u00fargicas, distribuidoras e operadores log\u00edsticos. A Moto11 atende coletas emergenciais de insumos de linha de produ\u00e7\u00e3o, envio de DANFEs, ordens de compra e amostras t\u00e9cnicas com pilotos preparados para portarias de acesso restrito.",
    viasPrincipais: ["Av. Santos Dumont", "Rodovia Presidente Dutra (km 215 ao 220)", "Av. Monteiro Lobato", "Av. Papa João Paulo I"],
    demandasComuns: ["Peças de reposição e componentes usinados", "DANFEs, notas fiscais e romaneios urgentes", "Malotes contábeis e bancários entre fábricas", "Insumos com cutoff de expedição diário"],
    particularidadesLogistica: "O tr\u00e1fego na Av. Santos Dumont e marginais da Dutra costuma apresentar lentid\u00e3o nos hor\u00e1rios de troca de turno (7h \u00e0s 8h30 e 17h \u00e0s 18h30). A moto contorna esses gargalos por vias internas, assegurando o cumprimento de SLAs fabris rigorosos.",
    faq: [
      {
        pergunta: "O motoboy tem documenta\u00e7\u00e3o e EPI para entrar em portarias de f\u00e1bricas?",
        resposta: "Sim, nossos pilotos atendem com traje adequado, cal\u00e7ado fechado e documenta\u00e7\u00e3o regularizada, respeitando os protocolos das guaritas industriais.",
      },
      {
        pergunta: "Qual o tempo para atendimento urgente em Cumbica?",
        resposta: "Mantemos pilotos circulando na regi\u00e3o da Dutra e Santos Dumont, garantindo posicionamento \u00e1gil ap\u00f3s a confirma\u00e7\u00e3o no WhatsApp.",
      },
      {
        pergunta: "Qual o limite de carga por moto em Cumbica?",
        resposta: "Transportamos caixas, amostras e pacotes de at\u00e9 20 kg que caibam com seguran\u00e7a no ba\u00fa de 100 litros.",
      },
    ],
    bairrosVizinhos: [
      { slug: "jardim-cumbica", nome: "Jardim Cumbica" },
      { slug: "jardim-nova-cumbica", nome: "Jardim Nova Cumbica" },
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
      { slug: "bonsucesso", nome: "Bonsucesso" },
    ],
  },
  {
    slug: "centro-guarulhos",
    nome: "Centro de Guarulhos",
    zona: "Polo Comercial, Financeiro e Jur\u00eddico",
    subtitulo: "Agilidade m\u00e1xima para cart\u00f3rios, f\u00f3runs, escrit\u00f3rios e ag\u00eancias banc\u00e1rias",
    resumoLocal: "O Centro de Guarulhos \u00e9 o centro financeiro e administrativo da cidade. Em torno do Cal\u00e7ad\u00e3o da Dom Pedro II, da Av. Tiradentes e da Rua Fel\u00edcio Marcondes concentram-se os principais tabelionatos, cart\u00f3rios de registro, varas forenses e sedes corporativas. A Moto11 executa coletas di\u00e1rias de contratos, procura\u00e7\u00f5es, processos e malotes banc\u00e1rios com protocolo formal assinado.",
    viasPrincipais: ["Av. Tiradentes", "Av. Paulo Faccini", "Rua Dom Pedro II (Calçadão)", "Rua Felício Marcondes", "Av. Esperança"],
    demandasComuns: ["Reconhecimento de firma e autenticações em cartórios centrais", "Protocolos de petições e certidões no Fórum de Guarulhos", "Entrega de documentos contratuais entre escritórios e clientes", "Circuito de malotes bancários e ordens de pagamento"],
    particularidadesLogistica: "A escassez de vagas e as faixas exclusivas tornam o carro impratic\u00e1vel no Centro. O motoboy profissional \u00e9 a solu\u00e7\u00e3o necess\u00e1ria para vencer o tr\u00e2nsito e protocolar documentos dentro do prazo forense.",
    faq: [
      {
        pergunta: "Voc\u00eas fazem fila de cart\u00f3rio para reconhecimento de firma?",
        resposta: "Sim. Realizamos servi\u00e7os cartor\u00e1rios com espera alinhada previamente no or\u00e7amento, colhendo assinaturas e enviando o comprovante com foto.",
      },
      {
        pergunta: "Como \u00e9 comprovada a entrega de documentos sigilosos?",
        resposta: "Todas as entregas s\u00e3o protocoladas com nome leg\u00edvel, documento e hor\u00e1rio, com comprovante digital disponibilizado imediatamente.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel agendar coletas di\u00e1rias para escrit\u00f3rios?",
        resposta: "Sim, atendemos contabilidades e advocacias com rotinas programadas ou chamados avulsos durante todo o hor\u00e1rio comercial.",
      },
    ],
    bairrosVizinhos: [
      { slug: "macedo", nome: "Macedo" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "vila-progresso", nome: "Vila Progresso" },
    ],
  },
  {
    slug: "bonsucesso",
    nome: "Bonsucesso",
    zona: "Polo Industrial e Comercial da Zona Leste",
    subtitulo: "Cobertura completa entre a Dutra, Shopping Bonsucesso e complexos fabris",
    resumoLocal: "O Bonsucesso \u00e9 um dos distritos mais din\u00e2micos de Guarulhos. Pr\u00f3ximo \u00e0 Dutra (km 208 ao 212), re\u00fane ind\u00fastrias qu\u00edmicas, metal\u00fargicas e transportadoras, al\u00e9m de um forte com\u00e9rcio varejista ancorado pelo Shopping Bonsucesso e Av. Paschoal Thomeu. A Moto11 atende empresas locais conectando a Zona Leste aos demais polos do munic\u00edpio e \u00e0 capital.",
    viasPrincipais: ["Rodovia Presidente Dutra", "Av. Paschoal Thomeu", "Av. Juscelino Kubitschek", "Estrada Acácio Antonio Batista"],
    demandasComuns: ["Amostras e peças entre indústrias e fornecedores", "Entregas do comércio varejista e lojistas do shopping", "Remessa de contratos, notas fiscais e relatórios", "Conexão expressa com a Dutra e Centro de Guarulhos"],
    particularidadesLogistica: "A dist\u00e2ncia at\u00e9 o Centro requer c\u00e1lculo preciso das condi\u00e7\u00f5es da Dutra. Nossos pilotos usam alternativas pelo Trevo de Bonsucesso e vias locais para otimizar os trajetos.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem lojas dentro do Shopping Bonsucesso?",
        resposta: "Sim, realizamos coletas e entregas em lojas e quiosques, respeitando as normas de acesso e docas do shopping.",
      },
      {
        pergunta: "Qual a estimativa de tempo do Bonsucesso at\u00e9 o Centro?",
        resposta: "A estimativa \u00e9 informada no WhatsApp conforme o tr\u00e2nsito do momento, priorizando rotas diretas de moto.",
      },
      {
        pergunta: "Empresas do Bonsucesso podem ter faturamento mensal?",
        resposta: "Sim, oferecemos op\u00e7\u00f5es de faturamento corporativo para empresas cadastradas que demandam coletas recorrentes.",
      },
    ],
    bairrosVizinhos: [
      { slug: "sadokin", nome: "Sadokim" },
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "presidente-dutra", nome: "Jardim Presidente Dutra" },
      { slug: "guarulhos-sul", nome: "Guarulhos Sul (Pimentas)" },
    ],
  },
  {
    slug: "vila-galvao",
    nome: "Vila Galv\u00e3o",
    zona: "Zona Oeste Residencial e Comercial Tradicional",
    subtitulo: "Entregas r\u00e1pidas no Lago dos Patos, Av. Tim\u00f3teo Penteado e divisa com SP",
    resumoLocal: "A Vila Galv\u00e3o \u00e9 famosa pelo Lago dos Patos e pelo com\u00e9rcio consolidado na Av. Dona Eug\u00eania e Av. Tim\u00f3teo Penteado. O bairro abriga cl\u00ednicas m\u00e9dicas, col\u00e9gios e resid\u00eancias de m\u00e9dio e alto padr\u00e3o. Sua localiza\u00e7\u00e3o colada \u00e0 Zona Norte de S\u00e3o Paulo (Ja\u00e7an\u00e3/Tucuruvi) facilita rotas intermunicipais di\u00e1rias para contratos, exames e encomendas.",
    viasPrincipais: ["Av. Doutor Timóteo Penteado", "Rua Treze de Maio", "Av. Dona Eugênia", "Av. Sete de Setembro"],
    demandasComuns: ["Entregas de farmácias, pet shops e comércio de proximidade", "Documentos imobiliários e contratos de locação", "Coleta de exames e guias em consultórios da Timóteo Penteado", "Deslocamento expresso entre Guarulhos e a Zona Norte de SP"],
    particularidadesLogistica: "Ruas residenciais arborizadas e tr\u00e2nsito concentrado nos cruzamentos da Tim\u00f3teo Penteado. A moto garante fluidez em coletas locais e r\u00e1pidas chegadas \u00e0 capital.",
    faq: [
      {
        pergunta: "Fazem entregas r\u00e1pidas para o Ja\u00e7an\u00e3 e Tucuruvi?",
        resposta: "Sim. Pela proximidade geogr\u00e1fica, as rotas entre Vila Galv\u00e3o e a Zona Norte paulistana s\u00e3o di\u00e1rias e muito r\u00e1pidas.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel transportar encomendas fr\u00e1geis com cuidado?",
        resposta: "Sim, nossos ba\u00fas s\u00e3o protegidos com acolchoamento para garantir a integridade de embalagens delicadas.",
      },
      {
        pergunta: "Qual o hor\u00e1rio de atendimento na Vila Galv\u00e3o?",
        resposta: "Atendemos de segunda a sexta-feira, das 8h \u00e0s 18h, com resposta r\u00e1pida via WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "jardim-vila-galvao", nome: "Jardim Vila Galv\u00e3o" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "jardim-tranquilidade", nome: "Jardim Tranquilidade" },
      { slug: "picanco", nome: "Pican\u00e7o" },
    ],
  },
  {
    slug: "picanco",
    nome: "Pican\u00e7o",
    zona: "Zona Central-Norte Residencial e Comercial",
    subtitulo: "Atendimento \u00e1gil no entorno da Av. Salgado Filho, Shopping Maia e Suplicy",
    resumoLocal: "O Pican\u00e7o conecta o Centro, o Bosque Maia e a Vila Galv\u00e3o. Cortado pela Av. Salgado Filho e Av. Suplicy, possui grande concentra\u00e7\u00e3o de condom\u00ednios verticais, com\u00e9rcio diversificado e proximidade com o Parque Shopping Maia. A Moto11 presta servi\u00e7os para moradores e com\u00e9rcios locais, transportando chaves, contratos e encomendas com rapidez.",
    viasPrincipais: ["Av. Salgado Filho", "Av. Suplicy", "Rua Cachoeira", "Av. Doutor Timóteo Penteado"],
    demandasComuns: ["Encomendas de e-commerce e lojistas do bairro", "Contratos para imobiliárias e administradoras", "Coletas em condomínios residenciais com portaria", "Peças e suprimentos para comércios locais"],
    particularidadesLogistica: "O tr\u00e1fego na Salgado Filho afunila em hor\u00e1rios de pico escolar e comercial. O motoboy consegue desviar por ruas residenciais paralelas para chegar pontualmente.",
    faq: [
      {
        pergunta: "O motoboy realiza entregas em portarias de condom\u00ednios?",
        resposta: "Sim, as entregas s\u00e3o efetuadas na portaria com identifica\u00e7\u00e3o formal e aviso por interfone.",
      },
      {
        pergunta: "Voc\u00eas atendem o Parque Shopping Maia?",
        resposta: "Sim, retiramos mercadorias no shopping mediante nota ou autoriza\u00e7\u00e3o do comprador.",
      },
      {
        pergunta: "Como cotar uma rota a partir do Pican\u00e7o?",
        resposta: "Envie os endere\u00e7os no WhatsApp e receba na hora o valor fechado calculado pela rota real vi\u00e1ria.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "vila-galvao", nome: "Vila Galv\u00e3o" },
      { slug: "jardim-santa-mena", nome: "Jardim Santa Mena" },
      { slug: "jardim-flor-da-montanha", nome: "Jardim Flor da Montanha" },
    ],
  },
  {
    slug: "gopouva",
    nome: "Gopo\u00fava",
    zona: "Zona Centro-Sul M\u00e9dica e Residencial",
    subtitulo: "Polo de cl\u00ednicas, consult\u00f3rios odontol\u00f3gicos e com\u00e9rcios da Av. Em\u00edlio Ribas",
    resumoLocal: "O Gopo\u00fava destaca-se pelas cl\u00ednicas m\u00e9dicas, consult\u00f3rios odontol\u00f3gicos e laborat\u00f3rios instalados na Av. Em\u00edlio Ribas e Rua C\u00f4nego Valad\u00e3o. O bairro tem sa\u00edda r\u00e1pida para a Dutra e Anel Vi\u00e1rio. A Moto11 atende profissionais da sa\u00fade com transporte de moldes prot\u00e9ticos, laudos e guias de conv\u00eanio, al\u00e9m de atender o com\u00e9rcio geral.",
    viasPrincipais: ["Av. Emílio Ribas", "Rua Cônego Valadão", "Av. Torres da Silva", "Anel Viário de Guarulhos"],
    demandasComuns: ["Moldes odontológicos e trabalhos protéticos", "Laudos, receitas e guias de convênio para clínicas", "Malotes bancários para o comércio da Emílio Ribas", "Encomendas residenciais e de e-commerce"],
    particularidadesLogistica: "A Av. Em\u00edlio Ribas tem faixa estreita e grande fluxo de \u00f4nibus. Nossos motociclistas usam rotas alternativas pelo Jardim Tranquilidade e Vila Augusta para contornar lentid\u00f5es.",
    faq: [
      {
        pergunta: "Como s\u00e3o transportados moldes dent\u00e1rios no Gopo\u00fava?",
        resposta: "Utilizamos compartimentos individuais protegidos contra choque mec\u00e2nico para manter a precis\u00e3o do molde.",
      },
      {
        pergunta: "Atendem cl\u00ednicas com hor\u00e1rios fixos de coleta?",
        resposta: "Sim, agendamos coletas di\u00e1rias matinais e vespertinas com laborat\u00f3rios e consult\u00f3rios parceiros.",
      },
      {
        pergunta: "H\u00e1 toler\u00e2ncia caso a guia m\u00e9dica demore a ser liberada?",
        resposta: "Sim, alinhamos a toler\u00e2ncia pr\u00e9via no or\u00e7amento para que a espera em balc\u00e3o ocorra com transpar\u00eancia.",
      },
    ],
    bairrosVizinhos: [
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "vila-augusta", nome: "Vila Augusta" },
      { slug: "jardim-tranquilidade", nome: "Jardim Tranquilidade" },
      { slug: "vila-galvao", nome: "Vila Galv\u00e3o" },
    ],
  },
  {
    slug: "taboao",
    nome: "Tabo\u00e3o",
    zona: "Zona Norte / Polo Log\u00edstico e Aerovi\u00e1rio",
    subtitulo: "Ponto de conex\u00e3o na Pra\u00e7a 8, Av. Ot\u00e1vio Braga de Mesquita e Linha 13-Jade",
    resumoLocal: "O Tabo\u00e3o \u00e9 um p\u00f3lo vibrante na Zona Norte de Guarulhos, marcado pela Pra\u00e7a 8 de Dezembro e pela Av. Ot\u00e1vio Braga de Mesquita. Sedia a esta\u00e7\u00e3o da CPTM (Linha 13-Jade) e faz divisa com o Aeroporto de Guarulhos. Re\u00fane dep\u00f3sitos, oficinas, ind\u00fastrias qu\u00edmicas e com\u00e9rcios que demandam fretes expressos e transporte de pe\u00e7as cont\u00ednuo.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Praça 8 de Dezembro", "Av. Silvestre Pires de Freitas", "Av. Lauro de Gusmão Silveira"],
    demandasComuns: ["Peças e suprimentos para oficinas mecânicas e frotas", "Encomendas no comércio ao redor da Praça 8", "Envio de notas fiscais e relatórios para galpões", "Despacho expresso para o Aeroporto e Dutra"],
    particularidadesLogistica: "O corredor da Ot\u00e1vio Braga de Mesquita tem tr\u00e1fego intenso de ve\u00edculos pesados. O transporte em moto encurta o deslocamento at\u00e9 o Aeroporto e a regi\u00e3o central.",
    faq: [
      {
        pergunta: "Atendem empresas pr\u00f3ximas \u00e0 esta\u00e7\u00e3o da CPTM no Tabo\u00e3o?",
        resposta: "Sim, cobrimos condom\u00ednios de galp\u00f5es e com\u00e9rcios no entorno da esta\u00e7\u00e3o e da Silvestre Pires de Freitas.",
      },
      {
        pergunta: "O motoboy pode retirar autope\u00e7as para oficinas?",
        resposta: "Sim, retiramos pe\u00e7as em distribuidores e entregamos diretamente no balc\u00e3o da sua oficina com comprovante.",
      },
      {
        pergunta: "Qual a forma de pedir motoboy no Tabo\u00e3o?",
        resposta: "Basta enviar origem, destino e material pelo WhatsApp para receber cota\u00e7\u00e3o e previs\u00e3o imediatas.",
      },
    ],
    bairrosVizinhos: [
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
      { slug: "vila-barros", nome: "Vila Barros" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
    ],
  },
  {
    slug: "via-dutra",
    nome: "Via Dutra (eixo Guarulhos)",
    zona: "Corredor Log\u00edstico Rodovi\u00e1rio BR-116",
    subtitulo: "Atendimento a transportadoras, centros de distribui\u00e7\u00e3o e hot\u00e9is corporativos",
    resumoLocal: "O eixo da Rodovia Presidente Dutra em Guarulhos concentra os maiores centros de distribui\u00e7\u00e3o, operadoras de carga fracionada, concession\u00e1rias e hot\u00e9is corporativos da RMSP. A Moto11 atende frotistas e transportadoras com coleta e entrega de minutas, romaneios, protocolos e pe\u00e7as de reposi\u00e7\u00e3o r\u00e1pida para ve\u00edculos que n\u00e3o podem ficar parados.",
    viasPrincipais: ["Rodovia Presidente Dutra (BR-116)", "Acessos à Rod. Fernão Dias e Ayrton Senna", "Marginal da Dutra", "Ponte do Rio Tietê"],
    demandasComuns: ["Retirada de minutas e despachos em balcões de transportadoras", "Peças emergenciais para frotas em manutenção", "Documentos entre filiais corporativas ao longo da rodovia", "Atendimento expresso a executivos em hotéis da Dutra"],
    particularidadesLogistica: "Congestionamentos nas pistas expressas e marginais s\u00e3o frequentes. O motoboy utiliza acessos vicinais e marginais para cumprir janelas operacionais cr\u00edticas.",
    faq: [
      {
        pergunta: "Realizam servi\u00e7os de protocolo em transportadoras na Dutra?",
        resposta: "Sim, aguardamos confer\u00eancia no balc\u00e3o de libera\u00e7\u00e3o e retornamos com o canhoto ou romaneio carimbado.",
      },
      {
        pergunta: "Como \u00e9 calculado o valor para entregas ao longo da Dutra?",
        resposta: "A cota\u00e7\u00e3o \u00e9 baseada na quilometragem real at\u00e9 o retorno ou sa\u00edda correspondente da rodovia.",
      },
      {
        pergunta: "Atendem postos de combust\u00edvel e garagens na rodovia?",
        resposta: "Sim, entregamos pe\u00e7as e documentos em pontos de apoio e p\u00e1tios em toda a extens\u00e3o guarulhense.",
      },
    ],
    bairrosVizinhos: [
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "vila-endres", nome: "Vila Endres" },
      { slug: "parque-novo-mundo", nome: "Parque Novo Mundo" },
      { slug: "ponta-grande", nome: "Ponta Grande" },
    ],
  },
  {
    slug: "vila-endres",
    nome: "Vila Endres",
    zona: "Zona Sul / Internacional Shopping",
    subtitulo: "Agilidade ao lado do Shopping Internacional, Av. Cavadas e Av. Rotary",
    resumoLocal: "A Vila Endres abriga o Internacional Shopping Guarulhos e importantes complexos de escrit\u00f3rios e atacados. Pr\u00f3xima \u00e0 Ponte Grande e \u00e0 Marginal Tiet\u00ea, permite conex\u00f5es quase imediatas com a Zona Norte e a Zona Leste da capital. A Moto11 atende lojistas, prestadores de servi\u00e7os e condom\u00ednios com transporte seguro de encomendas e documentos.",
    viasPrincipais: ["Av. Rotary", "Av. Cavadas", "Av. Guarulhos", "Rua Engenheiro Camilo Olivetti"],
    demandasComuns: ["Retiradas e despachos no Internacional Shopping Guarulhos", "Entregas corporativas para escritórios da Av. Rotary", "Peças e produtos de tecnologia de lojas vizinhas", "Conexão rápida com a Penha e Marginal Tietê"],
    particularidadesLogistica: "O tr\u00e2nsito no trevo do Shopping Internacional exige aten\u00e7\u00e3o nos finais de tarde. A moto garante acesso facilitado a docas de carga e portarias.",
    faq: [
      {
        pergunta: "Voc\u00eas recolhem itens no Internacional Shopping?",
        resposta: "Sim, retiramos mercadorias em lojas e balc\u00f5es mediante comprovante de compra ou nota.",
      },
      {
        pergunta: "Qual a estimativa at\u00e9 a Marginal Tiet\u00ea a partir da Vila Endres?",
        resposta: "Por estar na divisa, o trajeto de moto \u00e9 percorrido em poucos minutos fora do pico.",
      },
      {
        pergunta: "H\u00e1 custo adicional para condom\u00ednios na Vila Endres?",
        resposta: "N\u00e3o, o valor \u00e9 fechado pela rota e inclui toler\u00e2ncia para identifica\u00e7\u00e3o na portaria.",
      },
    ],
    bairrosVizinhos: [
      { slug: "ponta-grande", nome: "Ponta Grande" },
      { slug: "vila-augusta", nome: "Vila Augusta" },
      { slug: "via-dutra", nome: "Via Dutra (eixo Guarulhos)" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
    ],
  },
  {
    slug: "macedo",
    nome: "Macedo",
    zona: "Zona Central-Leste / Polo Administrativo e da Sa\u00fade",
    subtitulo: "Atendimento ao F\u00f3rum Trabalhista, HMU, cl\u00ednicas e Av. Monteiro Lobato",
    resumoLocal: "O Macedo \u00e9 um polo institucional que sedia o F\u00f3rum Trabalhista de Guarulhos, o Hospital Municipal de Urg\u00eancias (HMU), cart\u00f3rios e empresas de engenharia e contabilidade. A Moto11 transporta peti\u00e7\u00f5es, laudos m\u00e9dicos, certid\u00f5es e malotes banc\u00e1rios com pontualidade comprovada ao longo da Av. Monteiro Lobato e Av. Tiradentes.",
    viasPrincipais: ["Av. Monteiro Lobato", "Av. Tiradentes", "Av. Papa João Paulo I", "Rua Claudino Barbosa"],
    demandasComuns: ["Protocolo e retirada de petições no Fórum Trabalhista", "Exames e relatórios no HMU e clínicas parceiras", "Guias fiscais e certidões em escritórios contábeis", "Circuito financeiro na Av. Monteiro Lobato"],
    particularidadesLogistica: "Grande rota\u00e7\u00e3o de ve\u00edculos e restri\u00e7\u00f5es de estacionamento exigem agilidade. Nossos motoboys efetuam entregas diretas em secretarias, cart\u00f3rios e recep\u00e7\u00f5es.",
    faq: [
      {
        pergunta: "Fazem protocolo f\u00edsico de peti\u00e7\u00f5es no F\u00f3rum Trabalhista?",
        resposta: "Sim, o piloto recolhe o carimbo de protocolo e envia a comprova\u00e7\u00e3o fotogr\u00e1fica no WhatsApp.",
      },
      {
        pergunta: "Como funciona o envio de laudos m\u00e9dicos entre cl\u00ednicas?",
        resposta: "O material viaja em envelope lacrado com sigilo e entrega direta ao profissional indicado.",
      },
      {
        pergunta: "Posso agendar coletas semanais no Macedo?",
        resposta: "Sim, disponibilizamos rotas programadas para escrit\u00f3rios que demandam servi\u00e7os regulares.",
      },
    ],
    bairrosVizinhos: [
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
      { slug: "morros", nome: "Morros" },
    ],
  },
  {
    slug: "parque-novo-mundo",
    nome: "Parque Novo Mundo",
    zona: "Divisa Guarulhos / SP",
    subtitulo: "Conex\u00e3o expressa entre transportadoras da divisa e a Marginal Tiet\u00ea",
    resumoLocal: "Localizado no entroncamento entre a Dutra e a Marginal Tiet\u00ea, o Parque Novo Mundo \u00e9 um dos maiores entrepostos de transporte rodovi\u00e1rio e log\u00edstica fracionada da Grande S\u00e3o Paulo. A Moto11 atende armaz\u00e9ns, transportadoras e escrit\u00f3rios de frete com transporte urgente de minutas, faturas, amostras e pe\u00e7as automotivas.",
    viasPrincipais: ["Rodovia Presidente Dutra (km 228 ao 230)", "Marginal Tietê", "Av. Morvan Dias de Figueiredo", "Av. Ernesto Geisel"],
    demandasComuns: ["Liberação de romaneios e canhotos de frete em transportadoras", "Peças automotivas para frotas de carga pesada", "Envio de faturas e contratos entre matriz e filiais de logística", "Coleta rápida para entrega na Zona Norte e Central de SP"],
    particularidadesLogistica: "O entroncamento da Dutra com a Marginal costuma ter tr\u00e2nsito pesado de carretas. A motocicleta \u00e9 essencial para cruzar a divisa sem perder o hor\u00e1rio de expedi\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Atendem galp\u00f5es do Parque Novo Mundo na divisa de Guarulhos?",
        resposta: "Sim, atendemos transportadoras e centros de cross-docking em ambos os lados da divisa.",
      },
      {
        pergunta: "O piloto aguarda libera\u00e7\u00e3o de carga em balc\u00e3o?",
        resposta: "Sim, aguardamos confer\u00eancia documental dentro da toler\u00e2ncia acordada no or\u00e7amento.",
      },
      {
        pergunta: "Como cotar frete urgente para o Parque Novo Mundo?",
        resposta: "Envie os endere\u00e7os no WhatsApp; nossa equipe calcula a rota vi\u00e1ria e responde imediatamente.",
      },
    ],
    bairrosVizinhos: [
      { slug: "via-dutra", nome: "Via Dutra (eixo Guarulhos)" },
      { slug: "ponta-grande", nome: "Ponta Grande" },
      { slug: "vila-endres", nome: "Vila Endres" },
    ],
  },
  {
    slug: "bosque-maia",
    nome: "Bosque Maia",
    zona: "Zona Centro-Norte Nobre e Gastron\u00f4mica",
    subtitulo: "Atendimento refinado na Av. Paulo Faccini, cl\u00ednicas e sedes executivas",
    resumoLocal: "O Bosque Maia \u00e9 a \u00e1rea mais nobre de Guarulhos, circundando o parque municipal mais famoso da cidade. Na Av. Paulo Faccini e vias adjacentes concentram-se restaurantes conceituados, cl\u00ednicas m\u00e9dicas de est\u00e9tica, sedes corporativas e edif\u00edcios residenciais de alto padr\u00e3o. A Moto11 oferece coletas e entregas pontuais com discri\u00e7\u00e3o e cuidado redobrado.",
    viasPrincipais: ["Av. Paulo Faccini", "Av. Papa João XXIII", "Av. Salgado Filho", "Rua General Severiano"],
    demandasComuns: ["Documentos executivos e contratos confidenciais", "Entregas do polo gastronômico e empórios da Paulo Faccini", "Transporte de exames e produtos estéticos para clínicas", "Atendimento a moradores de condomínios de alto padrão"],
    particularidadesLogistica: "A Paulo Faccini tem tr\u00e2nsito intenso no hor\u00e1rio do almo\u00e7o e fins de tarde. A moto permite acesso r\u00e1pido a consult\u00f3rios e edif\u00edcios empresariais.",
    faq: [
      {
        pergunta: "O motoboy atende escrit\u00f3rios e consult\u00f3rios na Paulo Faccini?",
        resposta: "Sim, atendemos com hora marcada e comprovante de entrega assinado.",
      },
      {
        pergunta: "Voc\u00eas entregam encomendas gourmet e itens especiais?",
        resposta: "Sim, nossos ba\u00fas s\u00e3o limpos e vedados, preservando a apresenta\u00e7\u00e3o dos produtos.",
      },
      {
        pergunta: "Qual a anteced\u00eancia necess\u00e1ria para pedir motoboy no Bosque Maia?",
        resposta: "Atendemos chamados imediatos ou agendados, com resposta r\u00e1pida no WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "picanco", nome: "Pican\u00e7o" },
      { slug: "jardim-santa-mena", nome: "Jardim Santa Mena" },
      { slug: "jardim-flor-da-montanha", nome: "Jardim Flor da Montanha" },
    ],
  },
  {
    slug: "morros",
    nome: "Morros",
    zona: "Zona Nordeste em Expans\u00e3o",
    subtitulo: "Cobertura em bairros residenciais e com\u00e9rcios da Av. Brigadeiro Faria Lima",
    resumoLocal: "O bairro dos Morros \u00e9 uma regi\u00e3o residencial em forte desenvolvimento entre o Macedo, o Cecap e o Bom Clima. Com com\u00e9rcio em expans\u00e3o ao longo da Av. Brigadeiro Faria Lima (Guarulhos), o bairro demanda entregas \u00e1geis de varejo, materiais t\u00e9cnicos e documentos para pequenas empresas e moradores.",
    viasPrincipais: ["Av. Brigadeiro Faria Lima (Guarulhos)", "Av. Tiradentes", "Rua Eugênio Diamante", "Estrada dos Morros"],
    demandasComuns: ["Entregas de farmácias, materiais de construção e autopeças", "Contratos e correspondências comerciais", "Distribuição de encomendas de lojas virtuais", "Apoio logístico a condomínios residenciais"],
    particularidadesLogistica: "\u00c1rea com relevo ondulado e ruas estreitas em alguns trechos. O piloto de moto transita com facilidade conectando os Morros ao Centro em poucos minutos.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem condom\u00ednios residenciais no bairro dos Morros?",
        resposta: "Sim, entregamos e coletamos em todas as portarias residenciais do bairro.",
      },
      {
        pergunta: "Como \u00e9 calculado o valor para entregas nos Morros?",
        resposta: "O valor \u00e9 calculado pela quilometragem exata a partir da coleta at\u00e9 a entrega.",
      },
      {
        pergunta: "O motoboy transporta pequenas ferramentas e pe\u00e7as?",
        resposta: "Sim, volumes de at\u00e9 20 kg compat\u00edveis com o ba\u00fa s\u00e3o transportados com seguran\u00e7a.",
      },
    ],
    bairrosVizinhos: [
      { slug: "macedo", nome: "Macedo" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
      { slug: "itapetinga", nome: "Itapetinga" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
    ],
  },
  {
    slug: "jardim-bom-clima",
    nome: "Jardim Bom Clima",
    zona: "Polo Administrativo Municipal",
    subtitulo: "Atendimento \u00e0 Prefeitura de Guarulhos, F\u00e1cil Bom Clima e \u00f3rg\u00e3os p\u00fablicos",
    resumoLocal: "O Jardim Bom Clima abriga a sede da Prefeitura de Guarulhos (Pa\u00e7o Municipal), a C\u00e2mara de Vereadores, postos do F\u00e1cil e secretarias municipais. \u00c9 um destino di\u00e1rio para despachos de editais, licita\u00e7\u00f5es, certid\u00f5es p\u00fablicas e processos administrativos. A Moto11 presta servi\u00e7os \u00e1geis para empresas que participam de concorr\u00eancias p\u00fablicas.",
    viasPrincipais: ["Av. Bom Clima", "Av. Tiradentes", "Av. Gilberto Dini", "Rua João Cavalari"],
    demandasComuns: ["Protocolo de documentos e certidões na Prefeitura de Guarulhos", "Entrega de propostas comerciais e pastas de licitação", "Coleta em secretarias municipais e Fácil Bom Clima", "Documentos contábeis e fiscais para empresas do entorno"],
    particularidadesLogistica: "O fluxo administrativo gera concentra\u00e7\u00e3o de ve\u00edculos ao redor do Pa\u00e7o Municipal. O motoboy viabiliza protocolos em prazos cr\u00edticos sem perda de tempo em estacionamentos.",
    faq: [
      {
        pergunta: "Voc\u00eas protocolam envelopes de licita\u00e7\u00e3o na Prefeitura?",
        resposta: "Sim, nossos pilotos entregam propostas no setor de licita\u00e7\u00f5es e retornam com o protocolo carimbado.",
      },
      {
        pergunta: "Atendem despachos do F\u00e1cil Bom Clima?",
        resposta: "Sim, retiramos e entregamos certid\u00f5es e guias municipais com total pontualidade.",
      },
      {
        pergunta: "Qual o prazo para atender chamados no Bom Clima?",
        resposta: "Mantemos motos pr\u00f3ximas \u00e0 Av. Tiradentes, permitindo chegadas r\u00e1pidas ap\u00f3s o acionamento.",
      },
    ],
    bairrosVizinhos: [
      { slug: "macedo", nome: "Macedo" },
      { slug: "morros", nome: "Morros" },
      { slug: "taboao", nome: "Tabo\u00e3o" },
      { slug: "picanco", nome: "Pican\u00e7o" },
    ],
  },
  {
    slug: "jardim-nova-cumbica",
    nome: "Jardim Nova Cumbica",
    zona: "Zona Industrial Sul",
    subtitulo: "Log\u00edstica para ind\u00fastrias metalmec\u00e2nicas e empresas de log\u00edstica",
    resumoLocal: "O Jardim Nova Cumbica \u00e9 uma extens\u00e3o fabril estrat\u00e9gica de Cumbica, pr\u00f3ximo \u00e0 Rodovia Ayrton Senna e \u00e0 Dutra. Concentra empresas de autope\u00e7as, embalagens, metalurgia e transportes. A Moto11 atende demandas industriais di\u00e1rias, transportando componentes t\u00e9cnicos, ferramentas, notas fiscais e malotes entre unidades de produ\u00e7\u00e3o.",
    viasPrincipais: ["Av. Santos Dumont", "Av. Papa João Paulo I", "Rua Nova Guataporanga", "Rua Brejão"],
    demandasComuns: ["Componentes usinados e reposição de linha de produção", "Notas fiscais, manifestos de carga e romaneios", "Malotes entre escritório e fábrica", "Amostras para ensaios laboratoriais e qualidade"],
    particularidadesLogistica: "A proximidade com a Ayrton Senna e a Santos Dumont permite conex\u00f5es r\u00e1pidas com o Alto Tiet\u00ea e a Zona Leste paulistana.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem portarias fabris com controle de crach\u00e1?",
        resposta: "Sim, nossos pilotos possuem trajes adequados e seguem as normas de identifica\u00e7\u00e3o das ind\u00fastrias.",
      },
      {
        pergunta: "Qual a capacidade do ba\u00fa para pe\u00e7as mec\u00e2nicas?",
        resposta: "Suportamos at\u00e9 20 kg por motocicleta em ba\u00fa de 100 litros com amarra\u00e7\u00e3o de seguran\u00e7a.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel faturar os servi\u00e7os para ind\u00fastrias?",
        resposta: "Sim, disponibilizamos faturamento mensal mediante aprova\u00e7\u00e3o cadastral corporativa.",
      },
    ],
    bairrosVizinhos: [
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "jardim-cumbica", nome: "Jardim Cumbica" },
      { slug: "presidente-dutra", nome: "Jardim Presidente Dutra" },
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
    ],
  },
  {
    slug: "itapetinga",
    nome: "Itapetinga",
    zona: "Zona Norte Residencial",
    subtitulo: "Entregas em bairros residenciais e pequenas empresas da Zona Norte",
    resumoLocal: "O Itapetinga \u00e9 um bairro residencial tranquilo na Zona Norte de Guarulhos, vizinho ao Morros e Santa Clara. A Moto11 atende moradores, prestadores de servi\u00e7o e pequenas empresas com entregas de farm\u00e1cia, com\u00e9rcio eletr\u00f4nico, pe\u00e7as t\u00e9cnicas e documentos.",
    viasPrincipais: ["Estrada do Itapetinga", "Rua São Geraldo", "Estrada da Água Fria", "Estrada de Santa Clara"],
    demandasComuns: ["Encomendas de lojas online e comércio de proximidade", "Entrega de receitas, remédios e exames", "Documentos contratuais e malotes", "Pequenas encomendas e presentes"],
    particularidadesLogistica: "Regi\u00e3o predominantemente residencial onde o conhecimento das ruas e acessos agiliza a entrega porta a porta.",
    faq: [
      {
        pergunta: "Atendem condom\u00ednios no Itapetinga?",
        resposta: "Sim, entregamos com confirma\u00e7\u00e3o na portaria ou diretamente ao destinat\u00e1rio autorizado.",
      },
      {
        pergunta: "Qual o hor\u00e1rio de atendimento no Itapetinga?",
        resposta: "Atendemos de segunda a sexta, das 8h \u00e0s 18h, com cota\u00e7\u00e3o direta pelo WhatsApp.",
      },
      {
        pergunta: "Como acompanhar o motoboy em tr\u00e2nsito?",
        resposta: "O cliente recebe confirma\u00e7\u00e3o de coleta e foto da baixa assim que a entrega \u00e9 conclu\u00edda.",
      },
    ],
    bairrosVizinhos: [
      { slug: "morros", nome: "Morros" },
      { slug: "santa-clara", nome: "Santa Clara" },
      { slug: "vila-rio", nome: "Vila Rio" },
      { slug: "jardim-adriana", nome: "Jardim Adriana" },
    ],
  },
  {
    slug: "vila-augusta",
    nome: "Vila Augusta",
    zona: "Zona Sul Comercial e Residencial Nobre",
    subtitulo: "Entregas na Av. Guarulhos, Av. Rotary, cl\u00ednicas e condom\u00ednios",
    resumoLocal: "A Vila Augusta \u00e9 um dos bairros mais tradicionais e valorizados de Guarulhos. Cortada pela Av. Guarulhos e Av. Rotary, combina col\u00e9gios renomados, cl\u00ednicas m\u00e9dicas, escrit\u00f3rios corporativos e condom\u00ednios verticais modernos. A Moto11 realiza entregas di\u00e1rias de contratos, malotes, encomendas e laudos com rapidez e discri\u00e7\u00e3o.",
    viasPrincipais: ["Av. Guarulhos", "Av. Rotary", "Rua Cônego Valadão", "Rua Santa Izabel"],
    demandasComuns: ["Contratos para administradoras e imobiliárias", "Guias médicas e laudos para clínicas e consultórios", "Malotes bancários para o comércio da Av. Guarulhos", "Encomendas expressas para condomínios residenciais"],
    particularidadesLogistica: "A Av. Guarulhos e a C\u00f4nego Valad\u00e3o t\u00eam tr\u00e1fego denso no pico. O motoboy utiliza rotas transversais para garantir chegadas pontuais.",
    faq: [
      {
        pergunta: "Fazem coletas em consult\u00f3rios m\u00e9dicos na Vila Augusta?",
        resposta: "Sim, realizamos transporte de laudos, exames e guias com sigilo absoluto.",
      },
      {
        pergunta: "O motoboy entrega em portarias de edif\u00edcios na Vila Augusta?",
        resposta: "Sim, com identifica\u00e7\u00e3o formal e cumprimento dos regulamentos condominiais.",
      },
      {
        pergunta: "Qual o tempo m\u00e9dio de chegada na Vila Augusta?",
        resposta: "Por estarmos posicionados estrategicamente na regi\u00e3o central e sul, a chegada \u00e9 muito \u00e1gil.",
      },
    ],
    bairrosVizinhos: [
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "vila-endres", nome: "Vila Endres" },
      { slug: "ponta-grande", nome: "Ponta Grande" },
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
    ],
  },
  {
    slug: "jardim-vila-galvao",
    nome: "Jardim Vila Galv\u00e3o",
    zona: "Zona Oeste / Conex\u00e3o SP",
    subtitulo: "Atendimento residencial e comercial colado ao Ja\u00e7an\u00e3 e Tucuruvi",
    resumoLocal: "O Jardim Vila Galv\u00e3o \u00e9 uma \u00e1rea residencial nobre e arborizada adjacente \u00e0 Vila Galv\u00e3o tradicional, fazendo divisa com a Zona Norte de S\u00e3o Paulo. A Moto11 atende moradores, consult\u00f3rios e com\u00e9rcios locais, conectando a regi\u00e3o rapidamente ao Ja\u00e7an\u00e3, Tucuruvi e ao Centro de Guarulhos.",
    viasPrincipais: ["Av. Doutor Timóteo Penteado", "Rua Treze de Maio", "Rua Vicente Melro", "Av. Rotary"],
    demandasComuns: ["Entregas para condomínios e casas residenciais", "Medicamentos e produtos de saúde de farmácias", "Documentos contratuais de imobiliárias", "Despacho intermunicipal para a Zona Norte paulistana"],
    particularidadesLogistica: "As ruas residenciais tranquilas contrastam com a movimenta\u00e7\u00e3o da Tim\u00f3teo Penteado. A moto transita com rapidez em ambos os cen\u00e1rios.",
    faq: [
      {
        pergunta: "Voc\u00eas fazem rotas para a Zona Norte de SP a partir do Jardim Vila Galv\u00e3o?",
        resposta: "Sim, \u00e9 uma de nossas rotas mais frequentes, com tempo reduzido pela proximidade.",
      },
      {
        pergunta: "O motoboy avisa o morador antes da entrega?",
        resposta: "Sim, o piloto faz contato pelo WhatsApp ou interfone na chegada.",
      },
      {
        pergunta: "Como solicitar uma entrega r\u00e1pida?",
        resposta: "Basta enviar endere\u00e7o de retirada, entrega e detalhes do item no nosso WhatsApp comercial.",
      },
    ],
    bairrosVizinhos: [
      { slug: "vila-galvao", nome: "Vila Galv\u00e3o" },
      { slug: "jardim-tranquilidade", nome: "Jardim Tranquilidade" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
    ],
  },
  {
    slug: "cidade-soberana",
    nome: "Cidade Soberana",
    zona: "Zona Leste / S\u00e3o Jo\u00e3o",
    subtitulo: "Com\u00e9rcio popular, materiais de constru\u00e7\u00e3o e servi\u00e7os de proximidade",
    resumoLocal: "A Cidade Soberana \u00e9 um dos bairros mais populosos da regi\u00e3o de S\u00e3o Jo\u00e3o, na Zona Leste de Guarulhos. Com com\u00e9rcio ativo de materiais de constru\u00e7\u00e3o, autope\u00e7as, farm\u00e1cias e vestu\u00e1rio, o bairro demanda transporte cont\u00ednuo de suprimentos e encomendas para moradores e comerciantes locais.",
    viasPrincipais: ["Estrada do Saboó", "Estrada de Nazaré", "Rua Bela Vista", "Av. Florianópolis"],
    demandasComuns: ["Peças automotivas e ferramentas para oficinas", "Encomendas de lojas de varejo e e-commerce", "Medicamentos e produtos farmacêuticos", "Documentos e malotes para pequenas empresas"],
    particularidadesLogistica: "A dist\u00e2ncia em rela\u00e7\u00e3o ao Centro de Guarulhos torna o motoboy a solu\u00e7\u00e3o mais econ\u00f4mica e r\u00e1pida para deslocamentos pontuais.",
    faq: [
      {
        pergunta: "Atendem toda a regi\u00e3o da Cidade Soberana e S\u00e3o Jo\u00e3o?",
        resposta: "Sim, cobrimos todas as ruas e vias principais da Cidade Soberana.",
      },
      {
        pergunta: "Qual o prazo para coletas na Zona Leste?",
        resposta: "Informamos o prazo no or\u00e7amento conforme a localiza\u00e7\u00e3o do piloto mais pr\u00f3ximo.",
      },
      {
        pergunta: "Transportam caixas de ferramentas e pe\u00e7as?",
        resposta: "Sim, volumes de at\u00e9 20 kg que caibam no ba\u00fa s\u00e3o transportados normalmente.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bananal", nome: "Bananal" },
      { slug: "presidente-dutra", nome: "Jardim Presidente Dutra" },
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "morros", nome: "Morros" },
    ],
  },
  {
    slug: "jardim-adriana",
    nome: "Jardim Adriana",
    zona: "Zona Norte Populosa",
    subtitulo: "Com\u00e9rcio vibrante na Av. Mariana Ubaldina do Esp\u00edrito Santo",
    resumoLocal: "O Jardim Adriana \u00e9 um bairro tradicional e adensado na Zona Norte de Guarulhos. O com\u00e9rcio intenso na Av. Mariana Ubaldina do Esp\u00edrito Santo e Av. Faria Lima movimenta farm\u00e1cias, \u00f3ticas, escrit\u00f3rios e oficinas. A Moto11 atende comerciantes e moradores com transporte r\u00e1pido de compras, documentos e pe\u00e7as.",
    viasPrincipais: ["Av. Mariana Ubaldina do Espírito Santo", "Av. Brigadeiro Faria Lima (Guarulhos)", "Rua Luís Gonzaga", "Rua do Rosário"],
    demandasComuns: ["Entregas do comércio varejista e delivery no mesmo dia", "Receitas médicas, medicamentos e óculos", "Contratos e guias de escritórios contábeis", "Peças e suprimentos para manutenção local"],
    particularidadesLogistica: "A concentra\u00e7\u00e3o comercial na Av. Mariana Ubaldina gera reten\u00e7\u00f5es em hor\u00e1rios de pico. A moto circula pelas vias paralelas com agilidade.",
    faq: [
      {
        pergunta: "Fazem entregas no mesmo dia para lojistas do Jardim Adriana?",
        resposta: "Sim, realizamos coletas no balc\u00e3o e entrega direta ao cliente no mesmo dia.",
      },
      {
        pergunta: "Qual o hor\u00e1rio de atendimento no Jardim Adriana?",
        resposta: "Atendemos de segunda a sexta, das 8h \u00e0s 18h, via WhatsApp.",
      },
      {
        pergunta: "Como confirmar o valor da corrida?",
        resposta: "Calculamos pela rota vi\u00e1ria real e informamos o pre\u00e7o fechado antes da moto sair.",
      },
    ],
    bairrosVizinhos: [
      { slug: "itapetinga", nome: "Itapetinga" },
      { slug: "morros", nome: "Morros" },
      { slug: "vila-rio", nome: "Vila Rio" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
    ],
  },
  {
    slug: "presidente-dutra",
    nome: "Jardim Presidente Dutra",
    zona: "Polo Comercial e Industrial da Zona Leste",
    subtitulo: "Atendimento na Av. Papa Jo\u00e3o Paulo I e ind\u00fastrias mec\u00e2nicas",
    resumoLocal: "O Jardim Presidente Dutra \u00e9 um vibrante polo comercial e industrial na Zona Leste de Guarulhos. Articulado pela movimentada Av. Papa Jo\u00e3o Paulo I, o bairro re\u00fane fundi\u00e7\u00f5es, metal\u00fargicas, transportadoras, lojas de materiais e grande densidade habitacional. A Moto11 presta servi\u00e7os \u00e1geis de motofrete e entregas corporativas.",
    viasPrincipais: ["Av. Papa João Paulo I", "Rua Bela Vista do Paraíso", "Rua Macarani", "Acesso à Rodovia Presidente Dutra"],
    demandasComuns: ["Peças usinadas e reposição técnica para indústrias", "Documentos fiscais, romaneios e ordens de serviço", "Malotes bancários para o comércio da Papa João Paulo I", "Entregas de e-commerce e produtos para o consumidor final"],
    particularidadesLogistica: "A Av. Papa Jo\u00e3o Paulo I possui fluxo intenso de caminh\u00f5es e \u00f4nibus. O motoboy garante entregas pontuais contornando os sem\u00e1foros mais lentos.",
    faq: [
      {
        pergunta: "Atendem empresas fabris no Presidente Dutra?",
        resposta: "Sim, realizamos coletas e entregas em f\u00e1bricas, oficinas e lojas de autope\u00e7as.",
      },
      {
        pergunta: "Voc\u00eas emitem comprovante de entrega?",
        resposta: "Sim, o piloto recolhe protocolo com assinatura e envia foto imediatamente.",
      },
      {
        pergunta: "Como agendar um chamado no Jardim Presidente Dutra?",
        resposta: "Chame no WhatsApp (11) 95724-8425 e informe os dois endere\u00e7os para cota\u00e7\u00e3o.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "jardim-nova-cumbica", nome: "Jardim Nova Cumbica" },
      { slug: "cidade-soberana", nome: "Cidade Soberana" },
    ],
  },
  {
    slug: "cabucu",
    nome: "Cabu\u00e7u",
    zona: "Zona Norte / Rodoanel Norte",
    subtitulo: "Log\u00edstica para ch\u00e1caras, empresas de eventos e materiais rurais/urbanos",
    resumoLocal: "O Cabu\u00e7u situa-se na Zona Norte de Guarulhos, pr\u00f3ximo \u00e0 Serra da Cantareira e ao Rodoanel M\u00e1rio Covas (trecho Norte). Mescla \u00e1reas urbanizadas, s\u00edtios de eventos e com\u00e9rcios de materiais. A Moto11 atende a regi\u00e3o com transporte seguro de suprimentos, documentos e pe\u00e7as mec\u00e2nicas.",
    viasPrincipais: ["Estrada do Cabuçu", "Estrada da Cantareira", "Av. Pedro de Souza Lopes", "Rodoanel Mário Covas (trecho Norte)"],
    demandasComuns: ["Materiais e ferramentas para chácaras e oficinas", "Documentos e contratos de compra e venda", "Entregas de materiais de evento e decoração", "Apoio a moradores e comércios locais"],
    particularidadesLogistica: "As dist\u00e2ncias maiores e trechos sinuosos exigem pilotos experientes que conhe\u00e7am as refer\u00eancias locais e acessos vicinais.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem \u00e1reas de ch\u00e1caras no Cabu\u00e7u?",
        resposta: "Sim, atendemos locais com endere\u00e7o formal ou pontos de refer\u00eancia mapeados.",
      },
      {
        pergunta: "Qual a anteced\u00eancia recomendada para coletas no Cabu\u00e7u?",
        resposta: "Recomendamos solicitar com alguma margem para posicionar o piloto na Zona Norte.",
      },
      {
        pergunta: "O valor do frete muda em estradas vicinais?",
        resposta: "O valor \u00e9 calculado pela quilometragem vi\u00e1ria total informada antes da sa\u00edda.",
      },
    ],
    bairrosVizinhos: [
      { slug: "recreio-sao-jorge", nome: "Recreio S\u00e3o Jorge" },
      { slug: "santa-clara", nome: "Santa Clara" },
      { slug: "vila-rio", nome: "Vila Rio" },
      { slug: "picanco", nome: "Pican\u00e7o" },
    ],
  },
  {
    slug: "recreio-sao-jorge",
    nome: "Recreio S\u00e3o Jorge",
    zona: "Zona Norte Residencial",
    subtitulo: "Atendimento a oficinas, com\u00e9rcio varejista e moradores da regi\u00e3o",
    resumoLocal: "O Recreio S\u00e3o Jorge \u00e9 um bairro residencial da Zona Norte de Guarulhos, pr\u00f3ximo ao Cabu\u00e7u. A Moto11 atende oficinas mec\u00e2nicas, dep\u00f3sitos e fam\u00edlias que precisam enviar documentos, pe\u00e7as ou compras com rapidez at\u00e9 o Centro ou bairros vizinhos.",
    viasPrincipais: ["Estrada do Recreio", "Av. Palmira", "Rua Monte das Oliveiras", "Estrada do Cabuçu"],
    demandasComuns: ["Peças automotivas para reparos rápidos", "Remédios e encomendas farmacêuticas", "Documentos pessoais e contratos", "Pequenas caixas de compras online"],
    particularidadesLogistica: "A moto \u00e9 o ve\u00edculo ideal para trafegar com agilidade nas vias locais do bairro, evitando atrasos comuns do transporte coletivo.",
    faq: [
      {
        pergunta: "Atendem todo o Recreio S\u00e3o Jorge?",
        resposta: "Sim, cobrimos todas as vias principais e secund\u00e1rias do bairro.",
      },
      {
        pergunta: "Voc\u00eas entregam encomendas de farm\u00e1cia?",
        resposta: "Sim, buscamos na farm\u00e1cia e entregamos na sua resid\u00eancia com seguran\u00e7a.",
      },
      {
        pergunta: "Como \u00e9 feito o pagamento do motoboy?",
        resposta: "Pode ser pago via Pix ou link de cart\u00e3o pelo contratante.",
      },
    ],
    bairrosVizinhos: [
      { slug: "cabucu", nome: "Cabu\u00e7u" },
      { slug: "santa-clara", nome: "Santa Clara" },
      { slug: "vila-rio", nome: "Vila Rio" },
      { slug: "itapetinga", nome: "Itapetinga" },
    ],
  },
  {
    slug: "jardim-cumbica",
    nome: "Jardim Cumbica",
    zona: "Zona Mista e Industrial",
    subtitulo: "Suporte a ind\u00fastrias metal\u00fargicas, qu\u00edmicas e com\u00e9rcio vicinal",
    resumoLocal: "O Jardim Cumbica \u00e9 um n\u00facleo adensado colado \u00e0 Base A\u00e9rea e \u00e0s ind\u00fastrias da Av. Santos Dumont. Combina galp\u00f5es de usinagem, oficinas de manuten\u00e7\u00e3o e com\u00e9rcio varejista. A Moto11 opera com rotas di\u00e1rias transportando amostras, ordens de compra e mercadorias.",
    viasPrincipais: ["Rua Juazeiro do Norte", "Av. Santos Dumont", "Rua Brigadeiro Mario Perdigão", "Av. Monteiro Lobato"],
    demandasComuns: ["Usinagem, parafusos e componentes industriais", "Malotes contábeis e guias de recolhimento", "Alimentos e marmitas corporativas para fábricas", "Encomendas expressas para moradores"],
    particularidadesLogistica: "A circula\u00e7\u00e3o entre galp\u00f5es exige conhecimento das portarias de carga e descarga. Nossos pilotos realizam baixas r\u00e1pidas e protocoladas.",
    faq: [
      {
        pergunta: "Atendem f\u00e1bricas na Rua Juazeiro do Norte?",
        resposta: "Sim, atendemos metal\u00fargicas e oficinas em toda a extens\u00e3o do Jardim Cumbica.",
      },
      {
        pergunta: "Qual o hor\u00e1rio para coletas em empresas?",
        resposta: "Atendemos de segunda a sexta, das 8h \u00e0s 18h, alinhando com a expedi\u00e7\u00e3o fabril.",
      },
      {
        pergunta: "O motoboy leva notas fiscais para o cliente assinar?",
        resposta: "Sim, colhemos o protocolo ou assinatura no canhoto e enviamos foto imediata.",
      },
    ],
    bairrosVizinhos: [
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "jardim-nova-cumbica", nome: "Jardim Nova Cumbica" },
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
    ],
  },
  {
    slug: "vila-fatima",
    nome: "Vila F\u00e1tima",
    zona: "Zona Centro-Norte / Esta\u00e7\u00e3o CPTM",
    subtitulo: "Conex\u00e3o com a CPTM Vila F\u00e1tima, Av. Ot\u00e1vio Braga de Mesquita e Bom Clima",
    resumoLocal: "A Vila F\u00e1tima \u00e9 um ponto central de articula\u00e7\u00e3o urbana, abrigando a Esta\u00e7\u00e3o Vila F\u00e1tima da Linha 13-Jade da CPTM. Cortada pela Av. Ot\u00e1vio Braga de Mesquita, re\u00fane laborat\u00f3rios m\u00e9dicos, pequenas ind\u00fastrias, com\u00e9rcios e cl\u00ednicas. A Moto11 transporta laudos, pe\u00e7as e documentos com agilidade.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Rua José Bernardo Medeiros", "Av. Tiradentes", "Rua Carlos Drummond de Andrade"],
    demandasComuns: ["Exames laboratoriais e guias médicas", "Peças automotivas e suprimentos comerciais", "Contratos e correspondências de empresas", "Encomendas para clientes no entorno da CPTM"],
    particularidadesLogistica: "A proximidade com a esta\u00e7\u00e3o e a Av. Tiradentes facilita o deslocamento r\u00e1pido tanto para o Centro quanto para o Tabo\u00e3o.",
    faq: [
      {
        pergunta: "Atendem laborat\u00f3rios pr\u00f3ximos \u00e0 esta\u00e7\u00e3o da CPTM?",
        resposta: "Sim, transportamos materiais e laudos com total cuidado e pontualidade.",
      },
      {
        pergunta: "Qual o tempo de resposta para chamados na Vila F\u00e1tima?",
        resposta: "Temos motos circulando na Ot\u00e1vio Braga de Mesquita com tempo de chegada reduzido.",
      },
      {
        pergunta: "Como solicitar or\u00e7amento no WhatsApp?",
        resposta: "Envie origem e destino para o nosso n\u00famero comercial e receba a proposta fechada.",
      },
    ],
    bairrosVizinhos: [
      { slug: "taboao", nome: "Tabo\u00e3o" },
      { slug: "macedo", nome: "Macedo" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
      { slug: "vila-barros", nome: "Vila Barros" },
    ],
  },
  {
    slug: "jardim-santa-mena",
    nome: "Jardim Santa Mena",
    zona: "Zona Nobre de Cl\u00ednicas e Consult\u00f3rios",
    subtitulo: "Servi\u00e7os nobres no entorno da Av. Suplicy e Bosque Maia",
    resumoLocal: "O Jardim Santa Mena \u00e9 um bairro nobre vizinho ao Bosque Maia e \u00e0 Av. Salgado Filho. Conhecido por abrigar cl\u00ednicas dermatol\u00f3gicas, odontol\u00f3gicas, escrit\u00f3rios de advocacia e resid\u00eancias de alto padr\u00e3o, demanda um servi\u00e7o de motoboy discreto e pontual. A Moto11 transporta documentos sigilosos, pr\u00f3teses dent\u00e1rias e encomendas exclusivas.",
    viasPrincipais: ["Av. Suplicy", "Av. Salgado Filho", "Rua Campinas", "Rua General Severiano"],
    demandasComuns: ["Próteses dentárias e moldes para clínicas do bairro", "Documentos contratuais e escrituras particulares", "Exames médicos e receitas com sigilo", "Entregas personalizadas para condomínios"],
    particularidadesLogistica: "\u00c1rea com ruas calmas e bem sinalizadas. O piloto atende com cordialidade e pontualidade exigida pelos estabelecimentos de sa\u00fade e moradores.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem cl\u00ednicas odontol\u00f3gicas no Santa Mena?",
        resposta: "Sim, temos experi\u00eancia no transporte cuidadoso de moldes de gesso e alinhadores.",
      },
      {
        pergunta: "Como \u00e9 mantido o sigilo de documentos m\u00e9dicos?",
        resposta: "Os envelopes trafegam lacrados e s\u00e3o entregues em m\u00e3os com comprovante assinado.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel programar coletas em hor\u00e1rios pr\u00e9-fixados?",
        resposta: "Sim, atendemos com agendamento pr\u00e9vio ou chamados imediatos no hor\u00e1rio comercial.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "picanco", nome: "Pican\u00e7o" },
      { slug: "jardim-flor-da-montanha", nome: "Jardim Flor da Montanha" },
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
    ],
  },
  {
    slug: "vila-barros",
    nome: "Vila Barros",
    zona: "Zona Norte / Dep\u00f3sitos e Oficinas",
    subtitulo: "Atendimento entre a Av. Ot\u00e1vio Braga de Mesquita e bairros adjacentes",
    resumoLocal: "A Vila Barros situa-se na transi\u00e7\u00e3o entre a Vila F\u00e1tima e o Tabo\u00e3o. Re\u00fane dep\u00f3sitos, oficinas de ve\u00edculos pesados, distribuidoras locais e forte \u00e1rea residencial. A Moto11 atende empresas e oficinas com entrega r\u00e1pida de pe\u00e7as, baterias, documentos e compras.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Rua Carlos Drummond de Andrade", "Rua Araguatins", "Av. Tiradentes"],
    demandasComuns: ["Peças para oficinas mecânicas e frotas de vans", "Documentos fiscais e ordens de compra", "Entregas do comércio varejista local", "Pacotes e correspondências para moradores"],
    particularidadesLogistica: "Tr\u00e1fego constante de caminh\u00f5es na Ot\u00e1vio Braga. A agilidade do piloto de moto garante que pe\u00e7as cheguem sem travar a bancada da oficina.",
    faq: [
      {
        pergunta: "O motoboy busca pe\u00e7as em distribuidores para a Vila Barros?",
        resposta: "Sim, retiramos pe\u00e7as faturadas ou pagas e entregamos diretamente no balc\u00e3o.",
      },
      {
        pergunta: "Qual a capacidade m\u00e1xima por moto?",
        resposta: "Transportamos at\u00e9 20 kg em ba\u00fas vedados de 100 litros com seguran\u00e7a.",
      },
      {
        pergunta: "Como \u00e9 comprovada a entrega?",
        resposta: "Com foto do canhoto assinado e mensagem de confirma\u00e7\u00e3o no WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "taboao", nome: "Tabo\u00e3o" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
    ],
  },
  {
    slug: "jardim-tranquilidade",
    nome: "Jardim Tranquilidade",
    zona: "Zona Sul / Hospital Padre Bento",
    subtitulo: "Cobertura no entorno do Hospital Padre Bento e com\u00e9rcios da Em\u00edlio Ribas",
    resumoLocal: "O Jardim Tranquilidade \u00e9 um bairro tradicional que abriga o Hospital Padre Bento, laborat\u00f3rios e com\u00e9rcios consolidados entre a Vila Galv\u00e3o e o Gopo\u00fava. A Moto11 atende unidades de sa\u00fade, cl\u00ednicas de repouso e moradores com entregas de medicamentos, exames, contratos e encomendas.",
    viasPrincipais: ["Rua Santa Lúcia", "Av. Emílio Ribas", "Rua Jacob", "Av. Torres da Silva"],
    demandasComuns: ["Medicamentos e insumos para o Hospital Padre Bento e clínicas", "Exames, laudos e guias de convênio médico", "Contratos e correspondências comerciais", "Entregas domiciliares para moradores do bairro"],
    particularidadesLogistica: "As ruas no entorno do hospital demandam pilotagem atenta e silenciosa. Nossos motoboys cumprem os hor\u00e1rios de visita e protocolo com pontualidade.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam receitas e rem\u00e9dios no Padre Bento?",
        resposta: "Sim, entregamos e retiramos documentos e insumos hospitalares com identifica\u00e7\u00e3o.",
      },
      {
        pergunta: "Qual o tempo de coleta no Jardim Tranquilidade?",
        resposta: "Com pilotos atuando no Gopo\u00fava e Vila Galv\u00e3o, a chegada costuma ser muito r\u00e1pida.",
      },
      {
        pergunta: "Atendem cl\u00ednicas com rota di\u00e1ria?",
        resposta: "Sim, disponibilizamos rotas fixas ou coletas sob demanda para a \u00e1rea da sa\u00fade.",
      },
    ],
    bairrosVizinhos: [
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "vila-galvao", nome: "Vila Galv\u00e3o" },
      { slug: "vila-augusta", nome: "Vila Augusta" },
      { slug: "jardim-vila-galvao", nome: "Jardim Vila Galv\u00e3o" },
    ],
  },
  {
    slug: "vila-rio",
    nome: "Vila Rio",
    zona: "Zona Norte / Shopping P\u00e1tio Guarulhos",
    subtitulo: "Atendimento na Av. Salgado Filho, grandes atacarejos e condom\u00ednios",
    resumoLocal: "A Vila Rio de Janeiro (Vila Rio) \u00e9 um polo vibrante na Zona Norte de Guarulhos. Cortada pela Av. Salgado Filho e Av. Benjamin Harris Hunicutt, abriga o Shopping P\u00e1tio Guarulhos, atacarejos, cemit\u00e9rios e grandes condom\u00ednios. A Moto11 atende lojistas, administradoras e moradores com entregas pontuais.",
    viasPrincipais: ["Av. Salgado Filho", "Av. Benjamin Harris Hunicutt", "Shopping Pátio Guarulhos", "Rua Floro de Oliveira"],
    demandasComuns: ["Entregas para lojas e clientes do Shopping Pátio Guarulhos", "Documentos para administradoras de condomínios", "Peças e suprimentos para o comércio da Salgado Filho", "Encomendas e delivery para os grandes residenciais"],
    particularidadesLogistica: "O cruzamento da Salgado Filho com a Benjamin Harris Hunicutt apresenta tr\u00e1fego intenso. A moto contorna os pontos cr\u00edticos com facilidade.",
    faq: [
      {
        pergunta: "Voc\u00eas retiram mercadorias no Shopping P\u00e1tio Guarulhos?",
        resposta: "Sim, retiramos compras em lojas ou docas conforme instru\u00e7\u00f5es pr\u00e9vias.",
      },
      {
        pergunta: "O motoboy atende condom\u00ednios na Vila Rio?",
        resposta: "Sim, entregamos na portaria com interfone e comprovante fotogr\u00e1fico.",
      },
      {
        pergunta: "Como cotar uma rota da Vila Rio para o Centro?",
        resposta: "Basta enviar os dados pelo WhatsApp e confirmamos valor e previs\u00e3o na hora.",
      },
    ],
    bairrosVizinhos: [
      { slug: "picanco", nome: "Pican\u00e7o" },
      { slug: "jardim-adriana", nome: "Jardim Adriana" },
      { slug: "santa-clara", nome: "Santa Clara" },
      { slug: "morros", nome: "Morros" },
    ],
  },
  {
    slug: "jd-paulista-guarulhos",
    nome: "Jardim Paulista (Guarulhos)",
    zona: "Zona Central Nobre",
    subtitulo: "Atendimento a executivos, consultorias e resid\u00eancias de alto padr\u00e3o",
    resumoLocal: "O Jardim Paulista em Guarulhos \u00e9 um enclave nobre pr\u00f3ximo \u00e0 Av. Paulo Faccini e Av. Tim\u00f3teo Penteado. Residencial e arborizado, concentra executivos, profissionais liberais e consultorias. A Moto11 oferece servi\u00e7o de courier com alto padr\u00e3o de atendimento, discri\u00e7\u00e3o e pontualidade.",
    viasPrincipais: ["Rua Francisco Gonzaga Vasconcelos", "Av. Paulo Faccini", "Av. Tiradentes", "Rua do Rosário"],
    demandasComuns: ["Contratos executivos e minutas contratuais", "Documentos confidenciais e escrituras", "Compras exclusivas e presentes", "Malotes e correspondências corporativas"],
    particularidadesLogistica: "Ruas tranquilas e bem monitoradas por seguran\u00e7a privada. Nossos pilotos atuam com crach\u00e1 e apresenta\u00e7\u00e3o profissional na recep\u00e7\u00e3o e portarias.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem chamados com exig\u00eancia de sigilo?",
        resposta: "Sim, garantimos envelope lacrado e protocolo assinado em todas as entregas.",
      },
      {
        pergunta: "Qual o tempo de resposta no Jardim Paulista?",
        resposta: "Muito r\u00e1pido, devido \u00e0 proximidade imediata com a base operacional na Paulo Faccini.",
      },
      {
        pergunta: "Como agendar coletas matinais?",
        resposta: "Voc\u00ea pode agendar na v\u00e9spera ou no in\u00edcio do expediente pelo WhatsApp comercial.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "picanco", nome: "Pican\u00e7o" },
      { slug: "jardim-santa-mena", nome: "Jardim Santa Mena" },
    ],
  },
  {
    slug: "santa-clara",
    nome: "Santa Clara",
    zona: "Zona Norte Residencial e Comercial",
    subtitulo: "Entregas na Estrada de Santa Clara e liga\u00e7\u00e3o com o Parque Continental",
    resumoLocal: "O Santa Clara situa-se na Zona Norte de Guarulhos, integrando \u00e1reas residenciais familiares e pequenas empresas ao longo da Estrada de Santa Clara. A Moto11 atende moradores e comerciantes locais com fretes r\u00e1pidos para o Centro e bairros vizinhos.",
    viasPrincipais: ["Estrada de Santa Clara", "Rua Maria Paula Mota", "Av. Benjamin Harris Hunicutt", "Estrada do Itapetinga"],
    demandasComuns: ["Medicamentos e produtos farmacêuticos", "Peças e materiais de construção de pequeno porte", "Documentos para cartórios e bancos no Centro", "Compras online e pacotes residenciais"],
    particularidadesLogistica: "Relevo acidentado e vias sinuosas. A motocicleta \u00e9 o meio mais \u00e1gil para transitar entre Santa Clara e os corredores centrais da cidade.",
    faq: [
      {
        pergunta: "Atendem todo o bairro Santa Clara?",
        resposta: "Sim, cobrimos todas as vias da Estrada de Santa Clara e imedia\u00e7\u00f5es.",
      },
      {
        pergunta: "Como acompanhar o status da entrega?",
        resposta: "Informamos o deslocamento e disponibilizamos foto do comprovante assim que baixado.",
      },
      {
        pergunta: "\u00c9 poss\u00edvel pagar por Pix na entrega?",
        resposta: "Sim, facilitamos o pagamento via Pix diretamente pelo WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "itapetinga", nome: "Itapetinga" },
      { slug: "vila-rio", nome: "Vila Rio" },
      { slug: "cabucu", nome: "Cabu\u00e7u" },
      { slug: "recreio-sao-jorge", nome: "Recreio S\u00e3o Jorge" },
    ],
  },
  {
    slug: "sadokin",
    nome: "Sadokim",
    zona: "Polo Metal\u00fargico e Pesado da Dutra",
    subtitulo: "Atendimento a fundi\u00e7\u00f5es, caldeirarias e log\u00edstica de pe\u00e7as pesadas",
    resumoLocal: "O Sadokim \u00e9 uma zona industrial pesada no extremo leste de Guarulhos, adjacente \u00e0 Dutra (km 210) e ao Bonsucesso. Concentra fundi\u00e7\u00f5es, metal\u00fargicas, caldeirarias e operadores log\u00edsticos. A Moto11 transporta amostras de controle de qualidade, pe\u00e7as de urg\u00eancia e documentos fiscais para as ind\u00fastrias da regi\u00e3o.",
    viasPrincipais: ["Estrada Municipal", "Rodovia Presidente Dutra (km 210)", "Av. Paschoal Thomeu", "Estrada da Água Chata"],
    demandasComuns: ["Amostras de metalurgia e corpos de prova para ensaios", "Documentos fiscais, DANFEs e romaneios de frete", "Peças de reposição e vedações de urgência", "Malotes entre planta fabril e escritórios corporativos"],
    particularidadesLogistica: "Grandes dist\u00e2ncias e tr\u00e1fego pesado de carretas na Dutra. O piloto de moto acessa as portarias fabris de forma mais r\u00e1pida e segura.",
    faq: [
      {
        pergunta: "Voc\u00eas entram em p\u00e1tios industriais no Sadokim?",
        resposta: "Sim, nossos pilotos cumprem os protocolos de portaria e identifica\u00e7\u00e3o de cada f\u00e1brica.",
      },
      {
        pergunta: "Qual a capacidade de peso para pe\u00e7as de usinagem?",
        resposta: "At\u00e9 20 kg por motocicleta em ba\u00fa de 100 litros com amarra\u00e7\u00e3o apropriada.",
      },
      {
        pergunta: "Empresas do Sadokim podem emitir faturamento mensal?",
        resposta: "Sim, oferecemos faturamento corporativo para clientes com demanda cont\u00ednua.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "itaquaquecetuba-divisa", nome: "Divisa com Itaquaquecetuba" },
      { slug: "presidente-dutra", nome: "Jardim Presidente Dutra" },
    ],
  },
  {
    slug: "bananal",
    nome: "Bananal",
    zona: "Zona Leste / Eixo S\u00e3o Jo\u00e3o",
    subtitulo: "Com\u00e9rcio vibrante e entregas de proximidade na Estrada do Bananal",
    resumoLocal: "O Bananal \u00e9 um dos bairros mais populosos da grande regi\u00e3o do S\u00e3o Jo\u00e3o. Com com\u00e9rcio intenso de farm\u00e1cias, \u00f3ticas, roupas e materiais, a Estrada do Bananal movimenta o dia a dia da comunidade. A Moto11 realiza entregas comerciais e coleta de documentos conectando o bairro aos polos centrais.",
    viasPrincipais: ["Estrada do Bananal", "Estrada Velha de Nazaré", "Rua Joaquina de Jesus", "Av. Florianópolis"],
    demandasComuns: ["Entregas do comércio varejista para moradores", "Receitas médicas e remédios de farmácias locais", "Contratos e correspondências de pequenas empresas", "Pacotes e mercadorias de e-commerce"],
    particularidadesLogistica: "O tr\u00e1fego de pedestres e \u00f4nibus na Estrada do Bananal requer pilotagem atenta. A moto garante entregas pontuais porta a porta.",
    faq: [
      {
        pergunta: "Voc\u00eas fazem entregas para moradores no Bananal?",
        resposta: "Sim, atendemos todas as ruas e resid\u00eancias do bairro com confirma\u00e7\u00e3o de entrega.",
      },
      {
        pergunta: "Qual o prazo para o motoboy chegar ao Bananal?",
        resposta: "Informamos o tempo estimado no or\u00e7amento, posicionando o piloto mais pr\u00f3ximo da Zona Leste.",
      },
      {
        pergunta: "Como solicitar uma cota\u00e7\u00e3o r\u00e1pida?",
        resposta: "Chame no WhatsApp (11) 95724-8425 informando origem e destino da rota.",
      },
    ],
    bairrosVizinhos: [
      { slug: "cidade-soberana", nome: "Cidade Soberana" },
      { slug: "guarulhos-sul", nome: "Guarulhos Sul (Pimentas)" },
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "morros", nome: "Morros" },
    ],
  },
  {
    slug: "itaquaquecetuba-divisa",
    nome: "Divisa com Itaquaquecetuba",
    zona: "Corredor Intermunicipal Alto Tiet\u00ea",
    subtitulo: "Log\u00edstica expressa entre Guarulhos, Itaqu\u00e1 e Rodovia Ayrton Senna",
    resumoLocal: "A divisa entre Guarulhos e Itaquaquecetuba concentra ind\u00fastrias metal\u00fargicas, centros de triagem log\u00edstica e distribuidoras ao longo da Estrada de Santa M\u00f4nica e da Rodovia Ayrton Senna. A Moto11 executa trajetos intermunicipais \u00e1geis ligando os polos de Cumbica e Pimentas a Itaquaquecetuba e Aruj\u00e1.",
    viasPrincipais: ["Estrada de Santa Mônica", "Rodovia Ayrton Senna (SP-070)", "Estrada Pinheirinho Velho", "Av. Almirante Tamandaré"],
    demandasComuns: ["Peças industriais e componentes mecânicos", "Documentos fiscais e romaneios intermunicipais", "Malotes entre fábricas com unidades em ambas as cidades", "Amostras para laboratórios do Alto Tietê"],
    particularidadesLogistica: "A Ayrton Senna oferece fluxo r\u00e1pido, mas acessos vicinais demandam conhecimento pr\u00e1tico das vias locais. A moto garante conex\u00e3o pontual entre as duas cidades.",
    faq: [
      {
        pergunta: "Atendem empresas do lado de Itaquaquecetuba tamb\u00e9m?",
        resposta: "Sim, operamos rotas completas entre Guarulhos e os polos industriais de Itaqu\u00e1 e Aruj\u00e1.",
      },
      {
        pergunta: "Qual o limite de volume para pe\u00e7as entre os munic\u00edpios?",
        resposta: "Transportamos caixas e pacotes de at\u00e9 20 kg devidamente acondicionados no ba\u00fa.",
      },
      {
        pergunta: "Como \u00e9 calculada a cota\u00e7\u00e3o intermunicipal?",
        resposta: "Pela quilometragem vi\u00e1ria exata percorrida de moto, com pre\u00e7o fixado antes da sa\u00edda.",
      },
    ],
    bairrosVizinhos: [
      { slug: "guarulhos-sul", nome: "Guarulhos Sul (Pimentas)" },
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "sadokin", nome: "Sadokim" },
      { slug: "cumbica", nome: "Cumbica" },
    ],
  },
  {
    slug: "guarulhos-sul",
    nome: "Guarulhos Sul (Pimentas)",
    zona: "Maior Polo Populacional de Guarulhos",
    subtitulo: "Atendimento no Hospital Pimentas, UNIFESP, Terminal e com\u00e9rcio intenso",
    resumoLocal: "O distrito dos Pimentas (Guarulhos Sul) \u00e9 a regi\u00e3o mais populosa de Guarulhos. Sedia o Hospital Municipal Pimentas-Bonsucesso, o campus da UNIFESP, o Terminal de \u00d4nibus e o Shopping Bonsucesso. A Moto11 presta atendimento a com\u00e9rcios, cl\u00ednicas populares, escolas e ind\u00fastrias locais, conectando a Zona Leste aos cart\u00f3rios e f\u00f3runs do Centro.",
    viasPrincipais: ["Estrada Pres. Juscelino Kubitschek de Oliveira", "Estrada do Pimentas", "Av. Jurema", "Av. Alpheu de Oliveira"],
    demandasComuns: ["Insumos, receitas e exames para clínicas e hospitais", "Malotes e documentos contratuais de empresas locais", "Entregas de e-commerce e lojistas da região", "Despacho expresso de documentos para o Fórum e Prefeitura"],
    particularidadesLogistica: "A Av. Juscelino Kubitschek possui intenso tr\u00e1fego comercial. A pilotagem experiente de moto dribla reten\u00e7\u00f5es garantindo chegadas no prazo.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem o Hospital Pimentas-Bonsucesso?",
        resposta: "Sim, realizamos entregas e coletas de exames e documentos na administra\u00e7\u00e3o hospitalar.",
      },
      {
        pergunta: "Atendem com\u00e9rcio e lojas na regi\u00e3o dos Pimentas?",
        resposta: "Sim, atendemos lojistas locais com coletas no balc\u00e3o e entrega com foto.",
      },
      {
        pergunta: "Qual a estimativa de tempo dos Pimentas at\u00e9 o Centro?",
        resposta: "Informamos a previs\u00e3o no or\u00e7amento conforme as condi\u00e7\u00f5es vi\u00e1rias da Dutra e vias locais.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bonsucesso", nome: "Bonsucesso" },
      { slug: "itaquaquecetuba-divisa", nome: "Divisa com Itaquaquecetuba" },
      { slug: "cidade-soberana", nome: "Cidade Soberana" },
      { slug: "cumbica", nome: "Cumbica" },
    ],
  },
  {
    slug: "aeroporto-gru-entorno",
    nome: "Entorno do Aeroporto GRU",
    zona: "Polo Internacional A\u00e9reo e TECA",
    subtitulo: "Atendimento a terminais de passageiros, cargas (TECA) e hot\u00e9is",
    resumoLocal: "O Aeroporto Internacional de S\u00e3o Paulo/Guarulhos (GRU Airport) e seu entorno concentram os Terminais de Passageiros 1, 2 e 3, o Terminal de Cargas (TECA), hangares e hot\u00e9is executivos. A Moto11 \u00e9 especialista em miss\u00f5es cr\u00edticas no aeroporto: entrega de documentos esquecidos por viajantes, pe\u00e7as para embarque imediato, desembara\u00e7o de guias aduaneiras e suporte a despachantes.",
    viasPrincipais: ["Rodovia Hélio Smidt", "Av. Jamil João Zarif", "Marginal do Rio Baquirivu", "Acesso aos Terminais 1, 2 e 3 e TECA"],
    demandasComuns: ["Documentos esquecidos (passaportes, procurações, contratos) antes do voo", "Peças e componentes com cutoff aéreo urgente no TECA", "Guias de despacho aduaneiro para comissárias de bordo e despachantes", "Atendimento a passageiros e tripulantes em hotéis do aeroporto"],
    particularidadesLogistica: "O aeroporto possui regras estritas de parada e estacionamento regulamentado. Nossos pilotos conhecem os pontos autorizados de parada e pisos de embarque/desembarque.",
    faq: [
      {
        pergunta: "Voc\u00eas entregam documentos a passageiros antes do embarque?",
        resposta: "Sim, combinamos o ponto de encontro exato (piso, balc\u00e3o de check-in ou desembarque) para entrega em m\u00e3os.",
      },
      {
        pergunta: "Atendem o Terminal de Cargas (TECA)?",
        resposta: "Sim, retiramos e entregamos documentos de carga e pequenos volumes com a documenta\u00e7\u00e3o exigida na portaria.",
      },
      {
        pergunta: "Como cotar servi\u00e7o urgente no Aeroporto de Guarulhos?",
        resposta: "Chame imediatamente no WhatsApp informando o terminal, o hor\u00e1rio do voo e a urg\u00eancia.",
      },
    ],
    bairrosVizinhos: [
      { slug: "taboao", nome: "Tabo\u00e3o" },
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "vila-fatima", nome: "Vila F\u00e1tima" },
      { slug: "vila-barros", nome: "Vila Barros" },
    ],
  },
  {
    slug: "vila-progresso",
    nome: "Vila Progresso",
    zona: "Zona Central / Educacional",
    subtitulo: "Atendimento na Av. Esperan\u00e7a, escolas t\u00e9cnicas, consult\u00f3rios e Centro",
    resumoLocal: "A Vila Progresso \u00e9 um bairro residencial e comercial tradicional colado ao Centro de Guarulhos. Cortado pela Av. Esperan\u00e7a e pr\u00f3ximo \u00e0 Rua Dona Tecla, sedia institui\u00e7\u00f5es de ensino, consult\u00f3rios m\u00e9dicos, escrit\u00f3rios cont\u00e1beis e com\u00e9rcio de bairro. A Moto11 realiza entregas r\u00e1pidas e protocolos de rotina com rapidez.",
    viasPrincipais: ["Av. Esperança", "Rua Dona Tecla", "Av. Tiradentes", "Rua Sete de Setembro"],
    demandasComuns: ["Documentos contábeis, holerites e certidões", "Exames e guias para consultórios médicos", "Malotes entre escritórios e agências bancárias centrais", "Entregas de e-commerce e pacotes residenciais"],
    particularidadesLogistica: "F\u00e1cil conex\u00e3o com o Anel Vi\u00e1rio e Centro. A moto acessa rapidamente edif\u00edcios e lojas sem perda de tempo em engarrafamentos.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem escrit\u00f3rios na Av. Esperan\u00e7a?",
        resposta: "Sim, realizamos coletas e entregas em escrit\u00f3rios e estabelecimentos comerciais locais.",
      },
      {
        pergunta: "Qual a anteced\u00eancia para pedir motoboy na Vila Progresso?",
        resposta: "Atendemos chamados de prontid\u00e3o no hor\u00e1rio comercial, de segunda a sexta, das 8h \u00e0s 18h.",
      },
      {
        pergunta: "Como \u00e9 fornecido o comprovante de entrega?",
        resposta: "O comprovante \u00e9 emitido digitalmente com foto do protocolo assinado no WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "macedo", nome: "Macedo" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "bosque-maia", nome: "Bosque Maia" },
    ],
  },
  {
    slug: "jardim-flor-da-montanha",
    nome: "Jardim Flor da Montanha",
    zona: "Zona Central-Norte / Parque Shopping Maia",
    subtitulo: "Atendimento ao Parque Shopping Maia, condom\u00ednios clube e cl\u00ednicas",
    resumoLocal: "O Jardim Flor da Montanha \u00e9 um dos bairros mais modernos e valorizados de Guarulhos, ancorado pelo Parque Shopping Maia e pela Av. Bartholomeu de Carlos. Re\u00fane grandes condom\u00ednios clube, restaurantes renomados e cl\u00ednicas m\u00e9dicas. A Moto11 atende moradores e lojistas com coletas expressas e entregas de compras.",
    viasPrincipais: ["Av. Bartholomeu de Carlos", "Av. Dona Tecla", "Rua Dona Antônia", "Av. Salgado Filho"],
    demandasComuns: ["Retiradas no Parque Shopping Maia com nota ou autorização", "Documentos contratuais e malotes para condomínios", "Laudos e exames para clínicas especializadas", "Encomendas de comércio eletrônico para condomínios residenciais"],
    particularidadesLogistica: "As portarias dos condom\u00ednios clube exigem identifica\u00e7\u00e3o rigorosa. Nossos pilotos atuam com crach\u00e1 e respeitam as regras internas de entrega.",
    faq: [
      {
        pergunta: "Voc\u00eas realizam coletas dentro do Parque Shopping Maia?",
        resposta: "Sim, retiramos mercadorias em lojas e quiosques com autoriza\u00e7\u00e3o pr\u00e9via.",
      },
      {
        pergunta: "Como funciona a entrega em condom\u00ednios da Bartholomeu de Carlos?",
        resposta: "A entrega \u00e9 feita na portaria com comunica\u00e7\u00e3o imediata ao morador via interfone.",
      },
      {
        pergunta: "Como cotar uma rota a partir do Flor da Montanha?",
        resposta: "Envie os dados no WhatsApp e receba a cota\u00e7\u00e3o fechada calculada pela rota vi\u00e1ria.",
      },
    ],
    bairrosVizinhos: [
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "picanco", nome: "Pican\u00e7o" },
      { slug: "jardim-santa-mena", nome: "Jardim Santa Mena" },
      { slug: "vila-progresso", nome: "Vila Progresso" },
    ],
  },
  {
    slug: "ponta-grande",
    nome: "Ponta Grande",
    zona: "Divisa Guarulhos / Penha (SP)",
    subtitulo: "Ponto estrat\u00e9gico na divisa com a Zona Leste de SP e Marginal Tiet\u00ea",
    resumoLocal: "A Ponta Grande \u00e9 o portal de entrada sul de Guarulhos, situada na divisa imediata com a Penha, na Zona Leste de S\u00e3o Paulo. Cortada pela Av. Guarulhos e colada \u00e0 Marginal Tiet\u00ea e Dutra, \u00e9 uma localiza\u00e7\u00e3o privilegiada para opera\u00e7\u00f5es log\u00edsticas r\u00e1pidas intermunicipais. A Moto11 transporta encomendas, pe\u00e7as e documentos com agilidade.",
    viasPrincipais: ["Av. Guarulhos", "Rua Cabo João Teruel Fregoni", "Ponte Grande", "Marginal Tietê (acesso)"],
    demandasComuns: ["Conexão intermunicipal expressa Guarulhos ↔ Zona Leste de SP", "Peças automotivas de oficinas e revendas locais", "Documentos entre filiais em Guarulhos e na capital", "Entregas do comércio e atacados da Av. Guarulhos"],
    particularidadesLogistica: "A proximidade com a Marginal Tiet\u00ea e Av. Salim Farah Maluf permite que o motoboy alcance os bairros de SP em tempo recorde.",
    faq: [
      {
        pergunta: "Fazem entregas r\u00e1pidas para a Penha e Tatuap\u00e9 na capital?",
        resposta: "Sim, a rota leva poucos minutos devido \u00e0 divisa geogr\u00e1fica direta da Ponta Grande.",
      },
      {
        pergunta: "O motoboy atende empresas na Rua Cabo Jo\u00e3o Teruel Fregoni?",
        resposta: "Sim, cobrimos ind\u00fastrias leves e galp\u00f5es instalados na regi\u00e3o.",
      },
      {
        pergunta: "Qual o hor\u00e1rio de atendimento na Ponta Grande?",
        resposta: "Atendemos de segunda a sexta-feira, das 8h \u00e0s 18h, com resposta r\u00e1pida no WhatsApp.",
      },
    ],
    bairrosVizinhos: [
      { slug: "vila-endres", nome: "Vila Endres" },
      { slug: "vila-augusta", nome: "Vila Augusta" },
      { slug: "parque-novo-mundo", nome: "Parque Novo Mundo" },
    ],
  },
  {
    slug: "vila-camisaria",
    nome: "Vila Camisaria",
    zona: "Zona Central Tradicional",
    subtitulo: "Atendimento a pequenos escrit\u00f3rios, consult\u00f3rios e resid\u00eancias consolidadas",
    resumoLocal: "A Vila Camisaria \u00e9 um bairro tradicional pr\u00f3ximo ao Centro de Guarulhos e \u00e0 Vila Moreira. Re\u00fane resid\u00eancias consolidadas, consult\u00f3rios odontol\u00f3gicos, pequenos escrit\u00f3rios e oficinas de bairro. A Moto11 atende comerciantes e moradores com transporte r\u00e1pido de exames, contratos e compras.",
    viasPrincipais: ["Rua Coronel Portilho", "Rua Doutor Ramos", "Rua Cerqueira César", "Av. Tiradentes"],
    demandasComuns: ["Exames e próteses para consultórios da região", "Documentos e contratos de imobiliárias e comércios", "Compras de farmácia e entregas domiciliares", "Malotes bancários para o Centro de Guarulhos"],
    particularidadesLogistica: "Ruas de tr\u00e2nsito calmo com acesso imediato ao quadril\u00e1tero central da cidade. A moto oferece deslocamento em poucos minutos.",
    faq: [
      {
        pergunta: "Voc\u00eas atendem cl\u00ednicas na Vila Camisaria?",
        resposta: "Sim, realizamos coletas e entregas de documentos e materiais de sa\u00fade com cuidado.",
      },
      {
        pergunta: "Qual o tempo de chegada de um motoboy na Vila Camisaria?",
        resposta: "Por estar colada ao Centro, o posicionamento do piloto \u00e9 imediato ap\u00f3s a confirma\u00e7\u00e3o.",
      },
      {
        pergunta: "Como solicitar uma entrega na Vila Camisaria?",
        resposta: "Basta enviar uma mensagem no WhatsApp com o endere\u00e7o de coleta e destino.",
      },
    ],
    bairrosVizinhos: [
      { slug: "centro-guarulhos", nome: "Centro de Guarulhos" },
      { slug: "gopouva", nome: "Gopo\u00fava" },
      { slug: "vila-progresso", nome: "Vila Progresso" },
      { slug: "macedo", nome: "Macedo" },
    ],
  },
];

export const neighborhoodGuSlugs = neighborhoodsGu.map((area) => area.slug);

export function getNeighborhoodGu(slug: string): Neighborhood | undefined {
  return neighborhoodsGu.find((area) => area.slug === slug);
}
