export type Review = {
  nome: string;
  bairro: string;
  texto: string;
  stars: 4 | 5;
  /** ISO date YYYY-MM-DD */
  date: string;
  service: string;
};

export type BusinessReview = Review;

/** Bairros de Guarulhos + serviços — 30 depoimentos únicos, 2–3 frases cada. */
export const REVIEWS: Review[] = [
  {
    nome: "Carlos M.",
    bairro: "Centro",
    texto:
      "Precisei de uma coleta urgente de documentos no Centro e o motoboy chegou em 20 minutos. Atendimento pelo WhatsApp foi direto e o preço fechado antes da corrida. Virou nosso parceiro fixo no escritório.",
    stars: 5,
    date: "2026-09-12",
    service: "Coleta e entrega de documentos",
  },
  {
    nome: "Fernanda L.",
    bairro: "Vila Galvão",
    texto:
      "Minha loja virtual envia de 10 a 15 pacotes por dia e a Moto11 nunca atrasou uma coleta. Eles organizam as retiradas por rota e mandam confirmação com foto. Reduziu muito minhas reclamações no marketplace.",
    stars: 5,
    date: "2026-08-28",
    service: "Entregas para e-commerce",
  },
  {
    nome: "Roberto S.",
    bairro: "Cumbica",
    texto:
      "Trabalho com manutenção industrial e vivo pedindo peças de última hora. Já me salvaram numa sexta à noite buscando um rolamento em São Paulo. Profissional de verdade, com nota e recibo de tudo.",
    stars: 5,
    date: "2026-09-02",
    service: "Busca de peças automotivas e industriais",
  },
  {
    nome: "Patrícia A.",
    bairro: "Jardim Maia",
    texto:
      "Minha mãe idosa precisava de um remédio controlado num domingo à noite. Como era emergência, eles atenderam e entregaram em menos de uma hora. Cuidado e respeito que a gente não esquece.",
    stars: 5,
    date: "2026-07-19",
    service: "Entrega emergencial de farmácia",
  },
  {
    nome: "Diego R.",
    bairro: "Pimentas",
    texto:
      "Uso para levar malotes do pet shop até o contador toda semana. Sempre o mesmo piloto, pontual e educado. O valor mensal ficou melhor que contratar entregador próprio.",
    stars: 5,
    date: "2026-06-30",
    service: "Rota fixa de malotes",
  },
  {
    nome: "Aline C.",
    bairro: "Bonsucesso",
    texto:
      "Vendi um celular no marketplace e fiquei com medo de golpe na entrega. O motoboy conferiu o pagamento comigo por telefone antes de entregar o aparelho. Segurança que faz diferença.",
    stars: 5,
    date: "2026-08-15",
    service: "Entrega com conferência de pagamento",
  },
  {
    nome: "Marcos V.",
    bairro: "Vila Augusta",
    texto:
      "Meu restaurante faz entregas no almoço e o iFood estava comendo meu lucro. Migrei parte das entregas para a Moto11 e a comida chega mais rápida e quente. Cliente percebeu na hora.",
    stars: 5,
    date: "2026-09-05",
    service: "Delivery para restaurantes",
  },
  {
    nome: "Juliana P.",
    bairro: "Macedo",
    texto:
      "Precisava levar um contrato assinado até a Paulista com prazo estourando. Coletaram em 15 minutos e mandaram o comprovante de entrega com horário. Salvou um negócio de seis dígitos.",
    stars: 5,
    date: "2026-05-22",
    service: "Entrega expressa de documentos",
  },
  {
    nome: "Thiago O.",
    bairro: "Gopoúva",
    texto:
      "Oficina mecânica aqui: quando falta peça no meio do serviço, ligo e eles buscam na distribuidora. Já evitou carro parado no elevador várias vezes. Agilidade nota dez.",
    stars: 4,
    date: "2026-07-08",
    service: "Busca de peças automotivas",
  },
  {
    nome: "Camila F.",
    bairro: "Vila Flórida",
    texto:
      "Sou advogada e envio petições físicas e chaves de clientes com frequência. Tudo lacrado, protocolado e com foto da entrega. Sigilo e organização impecáveis até hoje.",
    stars: 5,
    date: "2026-08-03",
    service: "Entrega de documentos sigilosos",
  },
  {
    nome: "Anderson T.",
    bairro: "Cocaia",
    texto:
      "Fiz uma mudança pequena de apartamento e usei o serviço de apoio com baú. Levaram caixas e um micro-ondas com todo cuidado. Preço justo e sem enrolação no orçamento.",
    stars: 4,
    date: "2026-04-17",
    service: "Transporte de pequenos volumes",
  },
  {
    nome: "Beatriz N.",
    bairro: "Paraventi",
    texto:
      "Minha floricultura depende de entregas no mesmo dia em datas comemorativas. No Dia das Mães fizeram 40 entregas para mim sem uma reclamação. Planejamento de rota excelente.",
    stars: 5,
    date: "2026-05-11",
    service: "Entregas programadas em datas sazonais",
  },
  {
    nome: "Rafael G.",
    bairro: "Taboão",
    texto:
      "Esqueci a chave do carro dentro do escritório em São Paulo num sábado. O motoboy buscou a reserva na minha casa e levou até mim. Resolveu em uma hora o que ia estragar meu fim de semana.",
    stars: 5,
    date: "2026-06-14",
    service: "Entrega emergencial",
  },
  {
    nome: "Vanessa H.",
    bairro: "Ponte Grande",
    texto:
      "Tenho um brechó online e preciso de coletas quase diárias nos Correios e transportadoras. Eles montaram um horário fixo comigo e cumprem à risca. Nunca mais enfrentei fila.",
    stars: 5,
    date: "2026-09-18",
    service: "Coletas recorrentes para e-commerce",
  },
  {
    nome: "Paulo D.",
    bairro: "Jardim Tranquilidade",
    texto:
      "Levaram exames do meu pai até o laboratório com urgência e trouxeram o protocolo carimbado. Trataram o assunto com seriedade e discrição. Recomendo de olhos fechados.",
    stars: 5,
    date: "2026-03-29",
    service: "Transporte de exames e materiais de saúde",
  },
  {
    nome: "Larissa M.",
    bairro: "Vila Rio",
    texto:
      "Meu salão envia kits de cabelo para clientes de outras cidades. As caixas chegam intactas e no prazo combinado. O rastreio pelo WhatsApp me deixa tranquila.",
    stars: 5,
    date: "2026-08-21",
    service: "Envio de produtos cosméticos",
  },
  {
    nome: "Eduardo B.",
    bairro: "Jardim São Paulo",
    texto:
      "Construtora aqui: vivemos mandando plantas, contratos e amostras entre obra e escritório. Terceirizei tudo com a Moto11 e o custo caiu quase 30% contra motoboy avulso.",
    stars: 5,
    date: "2026-07-25",
    service: "Contrato empresarial recorrente",
  },
  {
    nome: "Renata S.",
    bairro: "Jardim Vila Galvão",
    texto:
      "Pedi uma entrega de presente de aniversário com horário marcado e chegou cinco minutos antes. Ainda mandaram foto da entrega para eu mostrar na festa. Capricho raro.",
    stars: 5,
    date: "2026-09-08",
    service: "Entrega agendada com horário marcado",
  },
  {
    nome: "Felipe Q.",
    bairro: "Itaquaquecetuba",
    texto:
      "Moro em Itaquá e achei que não atenderiam, mas cobrem a região toda. Buscaram um notebook para assistência e devolveram pronto em dois dias. Comunicação clara do início ao fim.",
    stars: 5,
    date: "2026-06-05",
    service: "Coleta e devolução de eletrônicos",
  },
  {
    nome: "Sandra E.",
    bairro: "Arujá",
    texto:
      "Minha doceria faz entregas de bolo de festa e eu morria de medo do transporte. Eles levam com caixa reforçada e o bolo chega perfeito. Minhas clientes elogiam direto.",
    stars: 5,
    date: "2026-08-09",
    service: "Entrega de alimentos frágeis",
  },
  {
    nome: "Lucas Z.",
    bairro: "São Paulo – Vila Maria",
    texto:
      "Precisei de um vai-e-volta de contrato entre Guarulhos e a Vila Maria no mesmo dia. Resolveram as duas pernas em três horas com comprovantes. Eficiência de empresa grande com preço de bairro.",
    stars: 5,
    date: "2026-05-30",
    service: "Vai-e-volta intermunicipal",
  },
  {
    nome: "Mariana W.",
    bairro: "Poá",
    texto:
      "Sou veterinária e envio amostras para o laboratório toda semana. Caixa térmica, prazo crítico e zero erro até agora. Confiança total no manuseio.",
    stars: 5,
    date: "2026-07-14",
    service: "Transporte de amostras laboratoriais",
  },
  {
    nome: "José C.",
    bairro: "Ferraz de Vasconcelos",
    texto:
      "Minha papelaria recebe mercadoria de fornecedor em São Paulo. Eles coletam e trazem no mesmo dia, mais barato que o frete do distribuidor. Virei cliente fiel.",
    stars: 4,
    date: "2026-04-25",
    service: "Coleta em fornecedor",
  },
  {
    nome: "Tatiane J.",
    bairro: "Suzano",
    texto:
      "Organizei um evento corporativo e precisei distribuir 60 kits em três cidades num dia só. Montaram a logística e cumpriram tudo dentro do prazo. Equipe muito profissional.",
    stars: 5,
    date: "2026-09-20",
    service: "Distribuição de kits corporativos",
  },
  {
    nome: "Bruno K.",
    bairro: "Mogi das Cruzes",
    texto:
      "Loja de bike: envio peças e acessórios para clientes da região. Uma vez a caixa chegou com a embalagem amassada e eles mesmos refizeram a entrega sem custo. Postura correta.",
    stars: 4,
    date: "2026-03-15",
    service: "Entregas para comércio local",
  },
  {
    nome: "Daniela U.",
    bairro: "Jardim Bom Clima",
    texto:
      "Precisava autenticar documentos no cartório do Centro e não podia sair do trabalho. O motoboy fez o leva-e-traz com os protocolos. Praticidade que vale cada centavo.",
    stars: 5,
    date: "2026-08-30",
    service: "Serviço de cartório leva-e-traz",
  },
  {
    nome: "Igor Y.",
    bairro: "Vila Endres",
    texto:
      "Meu e-commerce de suplementos tem pico de pedidos no início do mês. Eles reforçam a equipe de coleta nesses dias sem eu nem pedir. Antecipam minha necessidade, coisa rara.",
    stars: 5,
    date: "2026-09-01",
    service: "Coletas sob demanda para e-commerce",
  },
  {
    nome: "Cristina I.",
    bairro: "Jardim Presidente Dutra",
    texto:
      "Escola de idiomas: enviamos certificados e materiais para alunos que mudaram de cidade. Cada envelope vai com registro fotográfico. Pais e alunos sempre elogiam o cuidado.",
    stars: 5,
    date: "2026-06-20",
    service: "Envio de documentos educacionais",
  },
  {
    nome: "Otávio X.",
    bairro: "Santa Isabel",
    texto:
      "Distância maior e mesmo assim chegaram no horário combinado para buscar um contrato. Cobraram o adicional de deslocamento com transparência, sem surpresa na fatura. Honestidade acima de tudo.",
    stars: 5,
    date: "2026-05-05",
    service: "Coleta intermunicipal",
  },
  {
    nome: "Priscila V.",
    bairro: "Santos Dumont",
    texto:
      "Trabalho com festas e preciso de retiradas de última hora em fornecedores. Já me atenderam às 21h numa véspera de casamento. Quem vive de evento sabe o valor disso.",
    stars: 5,
    date: "2026-09-15",
    service: "Coleta noturna de última hora",
  },
];
