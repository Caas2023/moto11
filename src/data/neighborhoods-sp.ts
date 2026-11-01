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
    regiao: "Centro Hist\u00f3rico de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e a S\u00e9, na regi\u00e3o central de S\u00e3o Paulo",
    resumoRota: "A S\u00e9 fica no centro hist\u00f3rico de S\u00e3o Paulo, pr\u00f3xima \u00e0 Rua Boa Vista e conectada por eixos como as avenidas Tiradentes e do Estado. Para solicitar uma cota\u00e7\u00e3o entre Guarulhos e a S\u00e9, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es necess\u00e1rias para avaliar o atendimento.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Tiradentes", "Av. do Estado", "Rua Boa Vista"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A regi\u00e3o da S\u00e9 tem cal\u00e7ad\u00f5es e restri\u00e7\u00f5es de circula\u00e7\u00e3o. Informe o ponto de acesso e eventuais orienta\u00e7\u00f5es do local ao pedir a cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar um deslocamento para a S\u00e9?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
      },
      {
        pergunta: "O prazo pode ser informado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o com os endere\u00e7os e o hor\u00e1rio desejado; ela depende das condi\u00e7\u00f5es da rota e da avalia\u00e7\u00e3o do atendimento.",
      },
      {
        pergunta: "Como informar uma exig\u00eancia do destinat\u00e1rio?",
        resposta: "Descreva a exig\u00eancia e os dados de contato na solicita\u00e7\u00e3o para verificar se ela pode ser atendida.",
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
    regiao: "Regi\u00e3o central de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e o Br\u00e1s, na regi\u00e3o central de S\u00e3o Paulo",
    resumoRota: "O Br\u00e1s fica na \u00e1rea central de S\u00e3o Paulo, com vias como Rua Miller, Rua do Gas\u00f4metro e Avenida Rangel Pestana. Para pedir uma cota\u00e7\u00e3o entre Guarulhos e o Br\u00e1s, informe os endere\u00e7os, o hor\u00e1rio desejado e as caracter\u00edsticas do item para avalia\u00e7\u00e3o.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Rangel Pestana", "Rua Miller / Rua do Gasômetro"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Descrição do item para avaliação na cotação", "Instruções de acesso ao local"],
    orientacaoTransito: "O Br\u00e1s re\u00fane com\u00e9rcio em vias com circula\u00e7\u00e3o intensa. Informe na cota\u00e7\u00e3o o ponto exato de coleta ou destino e as condi\u00e7\u00f5es de acesso.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o no Br\u00e1s?",
        resposta: "Informe os endere\u00e7os, o hor\u00e1rio e as orienta\u00e7\u00f5es da loja ou do destinat\u00e1rio para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "Como informar as caracter\u00edsticas do item?",
        resposta: "Descreva dimens\u00f5es, peso e condi\u00e7\u00f5es de acondicionamento na cota\u00e7\u00e3o para avaliar a viabilidade.",
      },
      {
        pergunta: "O endere\u00e7o nas imedia\u00e7\u00f5es pode ser inclu\u00eddo?",
        resposta: "Envie o endere\u00e7o completo na solicita\u00e7\u00e3o para confirma\u00e7\u00e3o durante a cota\u00e7\u00e3o.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Mooca, na Zona Leste de São Paulo",
    resumoRota: "A Mooca fica na Zona Leste de São Paulo, com eixos como Avenida Salim Farah Maluf, Avenida Paes de Barros e Avenida Alcântara Machado. Para cotar um deslocamento entre Guarulhos e Mooca, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rodovia Presidente Dutra", "Marginal Tietê", "Av. Salim Farah Maluf", "Av. Paes de Barros", "Av. Alcântara Machado (Radial Leste)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Salim Farah Maluf, a Avenida Paes de Barros e a Radial Leste são referências de acesso à região. Informe os pontos exatos para avaliar a rota na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para a Mooca?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Tatuapé, na Zona Leste de São Paulo",
    resumoRota: "O Tatuapé fica na Zona Leste de São Paulo, com vias como Avenida Salim Farah Maluf, Avenida Alcântara Machado, Rua Tuiuti e Avenida Regente Feijó. Para cotar um deslocamento entre Guarulhos e Tatuapé, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rodovia Presidente Dutra", "Av. Salim Farah Maluf", "Av. Alcântara Machado (Radial Leste)", "Rua Tuiuti", "Av. Regente Feijó"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Radial Leste, a Salim Farah Maluf e a Rua Tuiuti são referências para a região. Indique na cotação o ponto de origem, o destino e as orientações de entrada.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para o Tatuapé?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Leste de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e a Penha, na Zona Leste de S\u00e3o Paulo",
    resumoRota: "A Penha fica na Zona Leste de S\u00e3o Paulo e tem acesso por vias como as avenidas Gabriela Mistral, Amador Bueno da Veiga e Penha de Fran\u00e7a. Para cotar um deslocamento entre Guarulhos e a Penha, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as orienta\u00e7\u00f5es de acesso.",
    eixosViarios: ["Av. Gabriela Mistral", "Av. Guarulhos (Ponte Grande)", "Marginal Tietê", "Av. Amador Bueno da Veiga", "Av. Penha de França"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "As condi\u00e7\u00f5es de deslocamento variam conforme data, hor\u00e1rio e rota. Informe esses dados para receber uma avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como verificar a possibilidade de atendimento para a Penha?",
        resposta: "Envie origem, destino, hor\u00e1rio desejado e detalhes da solicita\u00e7\u00e3o para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
      },
      {
        pergunta: "Como informar uma exig\u00eancia de acesso ao destino?",
        resposta: "Inclua as exig\u00eancias e os contatos do local na solicita\u00e7\u00e3o para verificar se podem ser atendidos.",
      },
      {
        pergunta: "Como solicitar uma cota\u00e7\u00e3o de Guarulhos para a Penha?",
        resposta: "Informe os endere\u00e7os completos, o hor\u00e1rio e as instru\u00e7\u00f5es necess\u00e1rias para receber a avalia\u00e7\u00e3o.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Itaquera, na Zona Leste de São Paulo",
    resumoRota: "Itaquera fica na Zona Leste de São Paulo, com acesso por Rodovia Ayrton Senna, Avenida Jacu-Pêssego, Radial Leste e Avenida Itaquera. Para cotar um deslocamento entre Guarulhos e Itaquera, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rodovia Ayrton Senna (SP-070)", "Av. Jacu-Pêssego", "Radial Leste", "Av. Itaquera"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Jacu-Pêssego e a Radial Leste são eixos associados ao acesso a Itaquera. Informe os pontos exatos para avaliar a rota na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Itaquera?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e São Miguel Paulista, na Zona Leste de São Paulo",
    resumoRota: "São Miguel Paulista fica na Zona Leste de São Paulo, com eixos como Avenida Marechal Tito, Avenida Pires do Rio e Avenida Nordestina. Para cotar um deslocamento entre Guarulhos e São Miguel Paulista, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Marechal Tito", "Rodovia Ayrton Senna", "Av. Pires do Rio", "Av. Nordestina"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Marechal Tito e a Avenida Nordestina são referências para localizar os pontos na região. Informe o endereço completo para avaliação na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para São Miguel Paulista?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Vila Prudente, na Zona Leste de São Paulo",
    resumoRota: "Vila Prudente fica na Zona Leste de São Paulo, com vias como Avenida Salim Farah Maluf, Avenida Professor Luiz Inácio Anhaia Mello, Rua Ibitirama e Avenida Paes de Barros. Para cotar um deslocamento entre Guarulhos e Vila Prudente, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Salim Farah Maluf", "Av. Prof. Luiz Ignácio Anhaia Mello", "Rua Ibitirama", "Av. Paes de Barros"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Anhaia Mello e a Avenida Salim Farah Maluf são referências de acesso à Vila Prudente. Informe os pontos exatos e o horário para avaliação na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Vila Prudente?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Ipiranga, na Zona Sul de São Paulo",
    resumoRota: "O Ipiranga fica na Zona Sul de São Paulo, com eixos como Avenida do Estado, Avenida Nazaré, Avenida Doutor Ricardo Jafet e Rua Silva Bueno. Para cotar um deslocamento entre Guarulhos e Ipiranga, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. do Estado", "Av. Nazaré", "Av. Doutor Ricardo Jafet", "Rua Silva Bueno"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida do Estado, a Avenida Nazaré e a Avenida Doutor Ricardo Jafet ajudam a localizar os endereços do Ipiranga. Indique o ponto exato para avaliação na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para o Ipiranga?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Sacomã, na Zona Sul de São Paulo",
    resumoRota: "Sacomã fica na Zona Sul de São Paulo, próximo à Rodovia Anchieta e a vias como Avenida das Juntas Provisórias, Rua Silva Bueno e Avenida Presidente Wilson. Para cotar um deslocamento entre Guarulhos e Sacomã, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rodovia Anchieta", "Av. das Juntas Provisórias", "Rua Silva Bueno", "Av. Presidente Wilson"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Rodovia Anchieta e a Avenida das Juntas Provisórias são referências para a região. Informe o ponto exato de origem e destino para avaliar a rota na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Sacomã?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Moema, na Zona Sul de São Paulo",
    resumoRota: "Moema fica na Zona Sul de São Paulo, com vias como Avenida Ibirapuera, Avenida Indianópolis, Avenida Moreira Guimarães e Alameda dos Maracatins. Para cotar um deslocamento entre Guarulhos e Moema, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Ibirapuera", "Av. Indianópolis", "Av. Moreira Guimarães (Corredor Norte-Sul)", "Alameda dos Maracatins"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Ibirapuera, a Avenida Indianópolis e a Alameda dos Maracatins são referências para os endereços de Moema. Inclua o ponto de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Moema?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Vila Mariana, na Zona Sul de São Paulo",
    resumoRota: "Vila Mariana fica na Zona Sul de São Paulo, com eixos como Avenida 23 de Maio, Rua Domingos de Morais, Avenida Sena Madureira e Rua Vergueiro. Para cotar um deslocamento entre Guarulhos e Vila Mariana, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. 23 de Maio", "Rua Domingos de Morais", "Av. Sena Madureira", "Rua Vergueiro"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Rua Domingos de Morais, a Rua Vergueiro e a Avenida Sena Madureira são referências para a região. Informe os pontos exatos para avaliação na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Vila Mariana?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Pinheiros, na Zona Oeste de São Paulo",
    resumoRota: "Pinheiros fica na Zona Oeste de São Paulo, com eixos como Avenida Brigadeiro Faria Lima, Avenida Rebouças, Marginal Pinheiros, Rua Teodoro Sampaio e Avenida Henrique Schaumann. Para cotar um deslocamento entre Guarulhos e Pinheiros, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Brigadeiro Faria Lima", "Av. Rebouças", "Marginal Pinheiros", "Rua Teodoro Sampaio", "Av. Henrique Schaumann"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Faria Lima, a Avenida Rebouças e a Rua Teodoro Sampaio são referências para os pontos em Pinheiros. Informe o endereço completo na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Pinheiros?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Lapa, na Zona Oeste de São Paulo",
    resumoRota: "A Lapa fica na Zona Oeste de São Paulo, com vias como Rua Doze de Outubro, Avenida Ermano Marchetti, Rua Clélia e Rua Guaicurus. Para cotar um deslocamento entre Guarulhos e Lapa, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Tietê", "Rua Doze de Outubro", "Av. Ermano Marchetti", "Rua Clélia", "Rua Guaicurus"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Rua Doze de Outubro, a Avenida Ermano Marchetti e a Rua Clélia são referências para localizar endereços da Lapa. Informe o ponto exato na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para a Lapa?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Perdizes, na Zona Oeste de São Paulo",
    resumoRota: "Perdizes fica na Zona Oeste de São Paulo, com vias como Avenida Sumaré, Rua Cardoso de Almeida, Avenida Francisco Matarazzo e Rua Monte Alegre. Para cotar um deslocamento entre Guarulhos e Perdizes, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Sumaré", "Rua Cardoso de Almeida", "Av. Francisco Matarazzo", "Rua Monte Alegre"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Sumaré, a Rua Cardoso de Almeida e a Rua Monte Alegre são referências para os endereços de Perdizes. Inclua o ponto de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Perdizes?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Norte de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e Santana, na Zona Norte de S\u00e3o Paulo",
    resumoRota: "Santana fica na Zona Norte de S\u00e3o Paulo, com eixos como Avenida Cruzeiro do Sul, Avenida Braz Leme, Avenida Santos Dumont e Rua Volunt\u00e1rios da P\u00e1tria. Para cotar um deslocamento entre Guarulhos e Santana, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Av. Cruzeiro do Sul", "Av. Braz Leme", "Av. Santos Dumont (SP)", "Rua Voluntários da Pátria", "Ponte das Bandeiras"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "Informe na cota\u00e7\u00e3o a data, o hor\u00e1rio e os pontos de origem e destino para avaliar as condi\u00e7\u00f5es do deslocamento.",
    faq: [
      {
        pergunta: "O prazo pode ser informado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o com os endere\u00e7os e o hor\u00e1rio desejado; ela depende da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar exig\u00eancias do destino?",
        resposta: "Descreva as exig\u00eancias e os contatos do local na solicita\u00e7\u00e3o para verificar se podem ser atendidos.",
      },
      {
        pergunta: "Como pedir uma cota\u00e7\u00e3o para Santana?",
        resposta: "Envie os endere\u00e7os completos, o hor\u00e1rio desejado e os detalhes da solicita\u00e7\u00e3o para avalia\u00e7\u00e3o.",
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
    regiao: "Zona Norte de São Paulo",
    subtitulo: "Rota entre Guarulhos e Tucuruvi, na Zona Norte de São Paulo",
    resumoRota: "Tucuruvi fica na Zona Norte de São Paulo, com eixos como Avenida Guapira, Avenida Tucuruvi, Avenida Doutor Antônio Maria Laet e Avenida Nova Cantareira. Para cotar um deslocamento entre Guarulhos e Tucuruvi, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Guapira", "Av. Tucuruvi", "Av. Doutor Antônio Maria Laet", "Av. Nova Cantareira"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Guapira, a Avenida Tucuruvi e a Avenida Nova Cantareira são referências para a região. Informe o endereço completo para avaliação na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Tucuruvi?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Norte de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e Vila Maria, na Zona Norte de S\u00e3o Paulo",
    resumoRota: "Vila Maria fica na Zona Norte de S\u00e3o Paulo, pr\u00f3xima \u00e0 Rodovia Presidente Dutra e \u00e0 Marginal Tiet\u00ea. Entre as vias locais est\u00e3o a Avenida Guilherme Cotching e a Rua Curu\u00e7\u00e1. Para cotar um deslocamento entre Guarulhos e Vila Maria, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Rodovia Presidente Dutra (km 230)", "Marginal Tietê", "Av. Guilherme Cotching", "Rua Curuçá"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A proximidade com a Dutra e a Marginal Tiet\u00ea pode influenciar a escolha da rota. Informe os pontos exatos e o hor\u00e1rio na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para Vila Maria?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as instru\u00e7\u00f5es do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o; ela depende dos endere\u00e7os, do hor\u00e1rio e da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar as caracter\u00edsticas do item?",
        resposta: "Descreva o item e suas condi\u00e7\u00f5es de acondicionamento na solicita\u00e7\u00e3o para avaliar a viabilidade.",
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
    regiao: "Zona Norte de São Paulo",
    subtitulo: "Rota entre Guarulhos e Jaçanã, na Zona Norte de São Paulo",
    resumoRota: "Jaçanã fica na Zona Norte de São Paulo, com vias como Avenida Jaçanã, Avenida Guapira, Rua Benjamin Pereira e Avenida Mendes da Rocha. Para cotar um deslocamento entre Guarulhos e Jaçanã, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Jaçanã", "Av. Guapira", "Rua Benjamin Pereira", "Av. Mendes da Rocha"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Jaçanã e a Avenida Guapira são referências para localizar os pontos no bairro. Informe origem, destino e horário na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Jaçanã?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Noroeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Freguesia do Ó, na Zona Noroeste de São Paulo",
    resumoRota: "Freguesia do Ó fica na Zona Noroeste de São Paulo, com eixos como Avenida Inajar de Souza, Avenida Ministro Petrônio Portela e Largo da Matriz. Para cotar um deslocamento entre Guarulhos e Freguesia do Ó, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Tietê", "Av. Inajar de Souza", "Av. Ministro Petrônio Portela", "Largo da Matriz"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Inajar de Souza, a Avenida Ministro Petrônio Portela e o Largo da Matriz são referências para a região. Informe o ponto exato na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Freguesia do Ó?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Noroeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Pirituba, na Zona Noroeste de São Paulo",
    resumoRota: "Pirituba fica na Zona Noroeste de São Paulo, com vias como Avenida Raimundo Pereira de Magalhães, Avenida Mutinga e o acesso à Rodovia dos Bandeirantes. Para cotar um deslocamento entre Guarulhos e Pirituba, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Tietê", "Av. Raimundo Pereira de Magalhães", "Av. Mutinga", "Rodovia dos Bandeirantes (acesso)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Raimundo Pereira de Magalhães e a Avenida Mutinga são referências para localizar os pontos em Pirituba. Informe os endereços completos na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Pirituba?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Butantã, na Zona Oeste de São Paulo",
    resumoRota: "Butantã fica na Zona Oeste de São Paulo, com eixos como Avenida Vital Brasil, Avenida Corifeu de Azevedo Marques e o acesso à Rodovia Raposo Tavares. Para cotar um deslocamento entre Guarulhos e Butantã, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Pinheiros", "Av. Vital Brasil", "Av. Corifeu de Azevedo Marques", "Rodovia Raposo Tavares (km 10 a 14)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Vital Brasil, a Avenida Corifeu de Azevedo Marques e a Raposo Tavares são referências para a região. Informe o ponto exato de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Butantã?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Morumbi, na Zona Sul de São Paulo",
    resumoRota: "Morumbi fica na Zona Sul de São Paulo, com vias como Avenida Giovanni Gronchi, Avenida Morumbi, Avenida Albert Einstein e Avenida Chucri Zaidan. Para cotar um deslocamento entre Guarulhos e Morumbi, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Pinheiros", "Av. Giovanni Gronchi", "Av. Morumbi", "Av. Albert Einstein", "Av. Chucri Zaidan"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Giovanni Gronchi, a Avenida Morumbi e a Avenida Chucri Zaidan são referências para os pontos da região. Inclua o ponto de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Morumbi?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Campo Belo, na Zona Sul de São Paulo",
    resumoRota: "Campo Belo fica na Zona Sul de São Paulo, com vias como Avenida Washington Luís, Avenida Jornalista Roberto Marinho, Avenida Santo Amaro e Rua Vieira de Morais. Para cotar um deslocamento entre Guarulhos e Campo Belo, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Washington Luís", "Av. Jornalista Roberto Marinho", "Av. Santo Amaro", "Rua Vieira de Morais"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Washington Luís, a Avenida Jornalista Roberto Marinho e a Rua Vieira de Morais são referências para o bairro. Informe os pontos exatos na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Campo Belo?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Santo Amaro, na Zona Sul de São Paulo",
    resumoRota: "Santo Amaro fica na Zona Sul de São Paulo, com eixos como Avenida Santo Amaro, Avenida Washington Luís, Avenida Adolfo Pinheiro e Largo Treze de Maio. Para cotar um deslocamento entre Guarulhos e Santo Amaro, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Pinheiros", "Av. Santo Amaro", "Av. Washington Luís", "Av. Adolfo Pinheiro", "Largo Treze de Maio"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Santo Amaro, a Avenida Adolfo Pinheiro e o Largo Treze de Maio são referências para a região. Informe o ponto exato e o horário na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Santo Amaro?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Zona Sul de São Paulo",
    subtitulo: "Rota entre Guarulhos e Campo Limpo, na Zona Sul de São Paulo",
    resumoRota: "Campo Limpo fica na Zona Sul de São Paulo, com vias como Estrada do Campo Limpo, Avenida Carlos Lacerda e Avenida Professor Francisco Morato. Para cotar um deslocamento entre Guarulhos e Campo Limpo, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Estrada do Campo Limpo", "Av. Carlos Lacerda", "Av. Professor Francisco Morato", "Marginal Pinheiros (acesso)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Estrada do Campo Limpo, a Avenida Carlos Lacerda e a Avenida Professor Francisco Morato são referências para os endereços da região. Informe o ponto exato na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Campo Limpo?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Itaim Bibi, na Zona Oeste de São Paulo",
    resumoRota: "Itaim Bibi fica na Zona Oeste de São Paulo, com eixos como Avenida Brigadeiro Faria Lima, Avenida Presidente Juscelino Kubitschek, Rua Joaquim Floriano e Avenida Santo Amaro. Para cotar um deslocamento entre Guarulhos e Itaim Bibi, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Brigadeiro Faria Lima", "Av. Pres. Juscelino Kubitschek", "Rua Joaquim Floriano", "Av. Santo Amaro", "Marginal Pinheiros"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Faria Lima, a Avenida Juscelino Kubitschek e a Rua Joaquim Floriano são referências para localizar os pontos no Itaim Bibi. Inclua o acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Itaim Bibi?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Jardins, na Zona Oeste de São Paulo",
    resumoRota: "Jardins fica na Zona Oeste de São Paulo, com vias como Rua Oscar Freire, Avenida Brasil, Avenida Europa, Alameda Santos e Avenida Rebouças. Para cotar um deslocamento entre Guarulhos e Jardins, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rua Oscar Freire", "Av. Brasil", "Av. Europa", "Alameda Santos", "Av. Rebouças"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Rua Oscar Freire, a Avenida Europa e a Alameda Santos são referências para os pontos em Jardins. Informe o ponto exato de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Jardins?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Região central de São Paulo",
    subtitulo: "Rota entre Guarulhos e Bela Vista, na região central de São Paulo",
    resumoRota: "Bela Vista fica na região central de São Paulo, com eixos como Avenida Paulista, Rua Dona Adma Jafet, Rua Maestro Cardim e Avenida Brigadeiro Luís Antônio. Para cotar um deslocamento entre Guarulhos e Bela Vista, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Paulista", "Rua Dona Adma Jafet", "Rua Maestro Cardim", "Av. Brigadeiro Luís Antônio", "Av. 23 de Maio"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Paulista, a Rua Maestro Cardim e a Avenida Brigadeiro Luís Antônio são referências para a região. Informe o ponto de origem, o destino e o acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Bela Vista?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Região central de São Paulo",
    subtitulo: "Rota entre Guarulhos e República, na região central de São Paulo",
    resumoRota: "República fica na região central de São Paulo, com vias como Praça da República, Avenida São João, Avenida Ipiranga, Rua da Consolação e Avenida Rio Branco. Para cotar um deslocamento entre Guarulhos e República, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Praça da República", "Av. São João", "Av. Ipiranga", "Rua da Consolação", "Av. Rio Branco"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Praça da República, a Avenida São João e a Avenida Ipiranga são referências para os pontos da região. Informe o acesso específico na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para República?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar uma exigência do destino?",
        resposta: "Descreva a exigência e os contatos do local na solicitação para verificar se ela pode ser atendida.",
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
    regiao: "Região central de São Paulo",
    subtitulo: "Rota entre Guarulhos e Santa Cecília, na região central de São Paulo",
    resumoRota: "Santa Cecília fica na região central de São Paulo, com vias como Rua Santa Isabel, Rua Jaguaribe, Rua das Palmeiras, Avenida Angélica e Avenida São João. Para cotar um deslocamento entre Guarulhos e Santa Cecília, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rua Santa Isabel", "Rua Jaguaribe", "Rua das Palmeiras", "Av. Angélica", "Av. São João"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Angélica, a Avenida São João e a Rua Jaguaribe são referências para a região. Inclua o ponto de acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Santa Cecília?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Região central de São Paulo",
    subtitulo: "Rota entre Guarulhos e Cambuci, na região central de São Paulo",
    resumoRota: "Cambuci fica na região central de São Paulo, com vias como Avenida do Estado, Rua Lavapés, Rua da Mooca e Avenida Lins de Vasconcelos. Para cotar um deslocamento entre Guarulhos e Cambuci, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. do Estado", "Rua Lavapés", "Rua da Mooca", "Av. Lins de Vasconcelos"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida do Estado, a Rua Lavapés e a Avenida Lins de Vasconcelos são referências para os endereços do Cambuci. Informe o ponto exato na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Cambuci?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Oeste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Vila Leopoldina, na Zona Oeste de São Paulo",
    resumoRota: "Vila Leopoldina fica na Zona Oeste de São Paulo, com vias como Avenida Doutor Gastão Vidigal, Avenida Imperatriz Leopoldina e os acessos às marginais Tietê e Pinheiros. Para cotar um deslocamento entre Guarulhos e Vila Leopoldina, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Marginal Tietê", "Av. Doutor Gastão Vidigal", "Av. Imperatriz Leopoldina", "Marginal Pinheiros (acesso)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Doutor Gastão Vidigal e a Avenida Imperatriz Leopoldina são referências para os pontos na Vila Leopoldina. Informe o endereço completo na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Vila Leopoldina?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar orientações de entrada?",
        resposta: "Inclua as instruções e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
    regiao: "Zona Oeste de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e Barra Funda, na Zona Oeste de S\u00e3o Paulo",
    resumoRota: "Barra Funda fica na Zona Oeste de S\u00e3o Paulo, com acesso por vias como Avenida Marqu\u00eas de S\u00e3o Vicente, Avenida Francisco Matarazzo e Rua Ant\u00e1rtica. Para cotar um deslocamento entre Guarulhos e Barra Funda, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Marginal Tietê", "Av. Marquês de São Vicente", "Av. Francisco Matarazzo", "Rua Antártica"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Marginal Tiet\u00ea e a Avenida Marqu\u00eas de S\u00e3o Vicente s\u00e3o eixos de acesso \u00e0 regi\u00e3o. Informe os pontos exatos e o hor\u00e1rio para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para Barra Funda?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as instru\u00e7\u00f5es de acesso para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser informado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o com os endere\u00e7os e o hor\u00e1rio desejado; ela depende da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar uma exig\u00eancia do destino?",
        resposta: "Descreva a exig\u00eancia e os contatos do local na solicita\u00e7\u00e3o para verificar se ela pode ser atendida.",
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
    regiao: "Zona Leste de São Paulo",
    subtitulo: "Rota entre Guarulhos e Aricanduva, na Zona Leste de São Paulo",
    resumoRota: "Aricanduva fica na Zona Leste de São Paulo, com vias como Avenida Aricanduva, Avenida Salim Farah Maluf, Avenida Rio das Pedras e o acesso à Radial Leste. Para cotar um deslocamento entre Guarulhos e Aricanduva, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Av. Aricanduva", "Radial Leste (acesso)", "Av. Salim Farah Maluf", "Av. Rio das Pedras"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Avenida Aricanduva, a Avenida Rio das Pedras e a Salim Farah Maluf são referências para a região. Informe o ponto exato de coleta ou destino na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Aricanduva?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar as características do item?",
        resposta: "Descreva dimensões, peso e condições de acondicionamento na cotação para avaliar a viabilidade.",
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
    regiao: "Grande ABC",
    subtitulo: "Rota entre Guarulhos e S\u00e3o Caetano do Sul, no Grande ABC",
    resumoRota: "S\u00e3o Caetano do Sul integra o Grande ABC. Entre os eixos vi\u00e1rios associados ao munic\u00edpio est\u00e3o as avenidas Goi\u00e1s, do Estado e dos Estados, al\u00e9m da Estrada das L\u00e1grimas. Para cotar um deslocamento entre Guarulhos e S\u00e3o Caetano do Sul, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Av. Goiás", "Av. do Estado", "Av. dos Estados", "Estrada das Lágrimas", "Av. Salim Farah Maluf (acesso)"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A defini\u00e7\u00e3o da rota depende dos pontos de origem e destino. Informe os endere\u00e7os e o hor\u00e1rio desejado para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para S\u00e3o Caetano do Sul?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as instru\u00e7\u00f5es do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o; ela depende dos endere\u00e7os, do hor\u00e1rio e da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar exig\u00eancias do destino?",
        resposta: "Descreva as exig\u00eancias e os contatos do local na solicita\u00e7\u00e3o para verificar se podem ser atendidos.",
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
    regiao: "Grande ABC",
    subtitulo: "Rota entre Guarulhos e Santo Andr\u00e9, no Grande ABC",
    resumoRota: "Santo Andr\u00e9 integra o Grande ABC. Entre os eixos vi\u00e1rios associados ao munic\u00edpio est\u00e3o Avenida dos Estados, Avenida Industrial, Avenida Pereira Barreto e o trecho Leste do Rodoanel M\u00e1rio Covas. Para cotar um deslocamento entre Guarulhos e Santo Andr\u00e9, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Av. dos Estados", "Av. Industrial", "Rodoanel Mário Covas (trecho Leste)", "Av. Pereira Barreto"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A defini\u00e7\u00e3o da rota depende dos pontos de origem e destino. Informe os endere\u00e7os e o hor\u00e1rio desejado para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para Santo Andr\u00e9?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as caracter\u00edsticas do item para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o; ela depende dos endere\u00e7os, do hor\u00e1rio e da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar exig\u00eancias do destino?",
        resposta: "Descreva as exig\u00eancias e os contatos do local na solicita\u00e7\u00e3o para verificar se podem ser atendidos.",
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
    regiao: "Grande ABC",
    subtitulo: "Rota entre Guarulhos e S\u00e3o Bernardo do Campo, no Grande ABC",
    resumoRota: "S\u00e3o Bernardo do Campo integra o Grande ABC e \u00e9 atravessado pela Via Anchieta e pela Rodovia dos Imigrantes. Outros eixos citados para o munic\u00edpio s\u00e3o a Avenida Brigadeiro Faria Lima e a Avenida Jurubatuba. Para cotar um deslocamento entre Guarulhos e S\u00e3o Bernardo do Campo, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Via Anchieta (SP-150)", "Rodoanel Mário Covas (trecho Sul)", "Av. Brigadeiro Faria Lima (SBC)", "Av. Jurubatuba"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A defini\u00e7\u00e3o da rota depende dos pontos de origem e destino. Informe os endere\u00e7os e o hor\u00e1rio desejado para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para S\u00e3o Bernardo do Campo?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as instru\u00e7\u00f5es do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "Como informar as caracter\u00edsticas do item?",
        resposta: "Descreva dimens\u00f5es, peso e condi\u00e7\u00f5es de acondicionamento na cota\u00e7\u00e3o para avaliar a viabilidade.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o; ela depende dos endere\u00e7os, do hor\u00e1rio e da avalia\u00e7\u00e3o da rota.",
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
    regiao: "Regi\u00e3o Metropolitana de S\u00e3o Paulo",
    subtitulo: "Rota entre Guarulhos e Osasco, na Regi\u00e3o Metropolitana de S\u00e3o Paulo",
    resumoRota: "Osasco integra a Regi\u00e3o Metropolitana de S\u00e3o Paulo. Entre os eixos vi\u00e1rios associados ao munic\u00edpio est\u00e3o a Marginal Tiet\u00ea, a Rodovia Castello Branco, a Avenida dos Autonomistas e a Avenida Hil\u00e1rio Pereira de Souza. Para cotar um deslocamento entre Guarulhos e Osasco, informe os endere\u00e7os completos, o hor\u00e1rio desejado e as instru\u00e7\u00f5es de acesso.",
    eixosViarios: ["Marginal Tietê", "Rodovia Castello Branco", "Av. dos Autonomistas", "Av. Hilário Pereira de Souza"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A defini\u00e7\u00e3o da rota depende dos pontos de origem e destino. Informe os endere\u00e7os e o hor\u00e1rio desejado para avalia\u00e7\u00e3o na cota\u00e7\u00e3o.",
    faq: [
      {
        pergunta: "Como cotar uma solicita\u00e7\u00e3o para Osasco?",
        resposta: "Envie os endere\u00e7os, o hor\u00e1rio e as instru\u00e7\u00f5es do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contrata\u00e7\u00e3o?",
        resposta: "Solicite a estimativa na cota\u00e7\u00e3o; ela depende dos endere\u00e7os, do hor\u00e1rio e da avalia\u00e7\u00e3o da rota.",
      },
      {
        pergunta: "Como informar exig\u00eancias do destino?",
        resposta: "Descreva as exig\u00eancias e os contatos do local na solicita\u00e7\u00e3o para verificar se podem ser atendidos.",
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
    regiao: "Região Metropolitana de São Paulo",
    subtitulo: "Rota entre Guarulhos e Barueri, na Região Metropolitana de São Paulo",
    resumoRota: "Barueri integra a Região Metropolitana de São Paulo, com eixos como Rodovia Castello Branco, Alameda Rio Negro, Alameda Araguaia, Avenida Tamboré e Alameda Mamoré. Para cotar um deslocamento entre Guarulhos e Barueri, informe os endereços completos, o horário desejado e as instruções de acesso.",
    eixosViarios: ["Rodovia Castello Branco (km 21 ao 26)", "Alameda Rio Negro", "Alameda Araguaia", "Av. Tamboré", "Alameda Mamoré"],
    demandasComuns: ["Endereços completos de origem e destino", "Horário desejado para a solicitação", "Instruções de acesso ao local", "Descrição do item para avaliação na cotação"],
    orientacaoTransito: "A Rodovia Castello Branco, a Alameda Rio Negro e a Alameda Araguaia são referências para os pontos em Barueri. Inclua o acesso na cotação.",
    faq: [
      {
        pergunta: "Como cotar uma solicitação para Barueri?",
        resposta: "Envie os endereços, o horário e as instruções do local para verificar a possibilidade de atendimento.",
      },
      {
        pergunta: "O prazo pode ser estimado antes da contratação?",
        resposta: "Solicite a estimativa na cotação; ela depende dos endereços, do horário e da avaliação da rota.",
      },
      {
        pergunta: "Como informar exigências de acesso ao destino?",
        resposta: "Descreva as exigências e os contatos do local na solicitação para verificar se podem ser atendidos.",
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
