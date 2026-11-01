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
    zona: "Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino em Cumbica",
    resumoLocal: "Cumbica fica em Guarulhos e tem ligação com a Rodovia Presidente Dutra, a Avenida Santos Dumont, a Avenida Monteiro Lobato e a Avenida Papa João Paulo I.",
    viasPrincipais: ["Av. Santos Dumont", "Rodovia Presidente Dutra (km 215 ao 220)", "Av. Monteiro Lobato", "Av. Papa João Paulo I"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Cumbica dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Cumbica?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir portarias ou áreas com acesso controlado?",
        resposta: "Informe previamente as regras de acesso conhecidas. A possibilidade de atendimento depende da confirmação dessas condições na cotação.",
      },
      {
        pergunta: "Como avaliar se o item é compatível com a rota?",
        resposta: "Descreva dimensões, peso e acondicionamento do item. A compatibilidade deve ser avaliada antes da contratação.",
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
    zona: "Região central de Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino no Centro de Guarulhos",
    resumoLocal: "O Centro de Guarulhos inclui o Calçadão da Dom Pedro II e tem como vias de referência a Avenida Tiradentes, a Avenida Paulo Faccini, a Rua Felício Marcondes e a Avenida Esperança.",
    viasPrincipais: ["Av. Tiradentes", "Av. Paulo Faccini", "Rua Dom Pedro II (Calçadão)", "Rua Felício Marcondes", "Av. Esperança"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota no Centro dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para o Centro de Guarulhos?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir cartórios, fóruns ou edifícios comerciais?",
        resposta: "Informe o local e eventuais regras de acesso. A possibilidade de atendimento depende da confirmação das condições na cotação.",
      },
      {
        pergunta: "Como avaliar a necessidade de espera no local?",
        resposta: "Descreva a atividade prevista e o horário desejado. Eventual espera deve ser tratada antes da contratação.",
      },
    ],
    bairrosVizinhos: [
      { slug: "macedo", nome: "Macedo" },
      { slug: "gopouva", nome: "Gopoúva" },
      { slug: "bosque-maia", nome: "Bosque Maia" },
      { slug: "vila-progresso", nome: "Vila Progresso" },
    ],
  },
  {
    slug: "bonsucesso",
    nome: "Bonsucesso",
    zona: "Região leste de Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino em Bonsucesso",
    resumoLocal: "Bonsucesso fica na região leste de Guarulhos, próximo à Rodovia Presidente Dutra. Entre as referências locais estão o Shopping Bonsucesso, a Avenida Paschoal Thomeu, a Avenida Juscelino Kubitschek e a Estrada Acácio Antonio Batista.",
    viasPrincipais: ["Rodovia Presidente Dutra", "Av. Paschoal Thomeu", "Av. Juscelino Kubitschek", "Estrada Acácio Antonio Batista"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Bonsucesso dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Bonsucesso?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir o Shopping Bonsucesso?",
        resposta: "Informe a loja ou o ponto de encontro e eventuais regras de acesso. A possibilidade de atendimento deve ser confirmada na cotação.",
      },
      {
        pergunta: "Como avaliar uma rota entre Bonsucesso e outro bairro?",
        resposta: "Envie os dois endereços completos. As condições da rota devem ser verificadas antes da contratação.",
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
    nome: "Vila Galvão",
    zona: "Região oeste de Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino na Vila Galvão",
    resumoLocal: "A Vila Galvão fica na região oeste de Guarulhos. O Lago dos Patos e as avenidas Doutor Timóteo Penteado e Dona Eugênia são referências locais; o bairro está próximo à Zona Norte de São Paulo.",
    viasPrincipais: ["Av. Doutor Timóteo Penteado", "Rua Treze de Maio", "Av. Dona Eugênia", "Av. Sete de Setembro"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota na Vila Galvão dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para a Vila Galvão?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "É possível cotar uma rota para a Zona Norte de São Paulo?",
        resposta: "Informe o endereço completo de destino. A possibilidade de atendimento e as condições da rota devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar uma entrega em condomínio ou comércio?",
        resposta: "Compartilhe o endereço e as regras de acesso conhecidas. Essas condições devem ser avaliadas antes da contratação.",
      },
    ],
    bairrosVizinhos: [
      { slug: "jardim-vila-galvao", nome: "Jardim Vila Galvão" },
      { slug: "gopouva", nome: "Gopoúva" },
      { slug: "jardim-tranquilidade", nome: "Jardim Tranquilidade" },
      { slug: "picanco", nome: "Picanço" },
    ],
  },
  {
    slug: "picanco",
    nome: "Pican\u00e7o",
    zona: "Região central-norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Picanço e vias da região central-norte",
    resumoLocal: "O Picanço conecta referências como o Centro de Guarulhos, o Bosque Maia e a Vila Galvão. A Avenida Salgado Filho, a Avenida Suplicy, a Rua Cachoeira e a Avenida Doutor Timóteo Penteado são vias locais.",
    viasPrincipais: ["Av. Salgado Filho", "Av. Suplicy", "Rua Cachoeira", "Av. Doutor Timóteo Penteado"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Picanço dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Picanço?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir condomínios, comércios ou o Parque Shopping Maia?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região centro-sul de Guarulhos",
    subtitulo: "Cotações para rotas entre Gopoúva e vias da região centro-sul",
    resumoLocal: "Gopoúva fica na região centro-sul de Guarulhos. A Avenida Emílio Ribas, a Rua Cônego Valadão, a Avenida Torres da Silva e o Anel Viário de Guarulhos são referências locais.",
    viasPrincipais: ["Av. Emílio Ribas", "Rua Cônego Valadão", "Av. Torres da Silva", "Anel Viário de Guarulhos"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Gopoúva dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Gopoúva?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir clínicas, consultórios ou comércios da Avenida Emílio Ribas?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    nome: "Taboão",
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino no Taboão",
    resumoLocal: "O Taboão fica na região norte de Guarulhos. A Praça 8 de Dezembro, a Avenida Otávio Braga de Mesquita, a Avenida Silvestre Pires de Freitas e a Avenida Lauro de Gusmão Silveira são referências locais.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Praça 8 de Dezembro", "Av. Silvestre Pires de Freitas", "Av. Lauro de Gusmão Silveira"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota no Taboão dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para o Taboão?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "É possível cotar uma rota próxima à Praça 8 de Dezembro?",
        resposta: "Informe o endereço completo e o ponto de referência, se necessário. A possibilidade de atendimento deve ser confirmada na cotação.",
      },
      {
        pergunta: "Como informar um local com acesso controlado?",
        resposta: "Compartilhe as regras de acesso conhecidas. Essas condições devem ser avaliadas antes da contratação.",
      },
    ],
    bairrosVizinhos: [
      { slug: "aeroporto-gru-entorno", nome: "Entorno do Aeroporto GRU" },
      { slug: "vila-fatima", nome: "Vila Fátima" },
      { slug: "vila-barros", nome: "Vila Barros" },
      { slug: "jardim-bom-clima", nome: "Jardim Bom Clima" },
    ],
  },
  {
    slug: "via-dutra",
    nome: "Via Dutra (eixo Guarulhos)",
    zona: "Eixo da Rodovia Presidente Dutra em Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino no eixo da Via Dutra",
    resumoLocal: "A Rodovia Presidente Dutra (BR-116) atravessa Guarulhos. No eixo local, há acessos à Rodovia Fernão Dias, à Rodovia Ayrton Senna, às marginais da Dutra e à Ponte do Rio Tietê.",
    viasPrincipais: ["Rodovia Presidente Dutra (BR-116)", "Acessos à Rod. Fernão Dias e Ayrton Senna", "Marginal da Dutra", "Ponte do Rio Tietê"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Ponto de acesso à rodovia, quando aplicável"],
    particularidadesLogistica: "As condições da rota no eixo da Dutra dependem dos endereços e dos acessos informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para uma rota no eixo da Dutra?",
        resposta: "Informe os endereços de coleta e entrega, o acesso ou saída de referência, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir transportadoras, hotéis ou pontos de apoio?",
        resposta: "Informe o endereço completo e eventuais regras de acesso. A possibilidade de atendimento deve ser confirmada na cotação.",
      },
      {
        pergunta: "Como avaliar uma retirada ou entrega junto à rodovia?",
        resposta: "Descreva o ponto de acesso e a atividade prevista. As condições devem ser verificadas antes da contratação.",
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
    zona: "Região sul de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Endres e vias da região sul",
    resumoLocal: "A Vila Endres fica na região sul de Guarulhos. O Internacional Shopping Guarulhos, a Avenida Rotary, a Avenida Cavadas, a Avenida Guarulhos e a Rua Engenheiro Camilo Olivetti são referências locais.",
    viasPrincipais: ["Av. Rotary", "Av. Cavadas", "Av. Guarulhos", "Rua Engenheiro Camilo Olivetti"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Endres dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Endres?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir o Internacional Shopping Guarulhos ou edifícios da região?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região central-leste de Guarulhos",
    subtitulo: "Cotações para rotas entre o Macedo e vias da região central-leste",
    resumoLocal: "O Macedo fica na região central-leste de Guarulhos. A Avenida Monteiro Lobato, a Avenida Tiradentes, a Avenida Papa João Paulo I e a Rua Claudino Barbosa são vias de referência.",
    viasPrincipais: ["Av. Monteiro Lobato", "Av. Tiradentes", "Av. Papa João Paulo I", "Rua Claudino Barbosa"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Macedo dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Macedo?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir prédios institucionais, clínicas ou escritórios da região?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Divisa entre Guarulhos e São Paulo",
    subtitulo: "Cotações para rotas no eixo entre a Dutra e a Marginal Tietê",
    resumoLocal: "O Parque Novo Mundo fica no eixo da Rodovia Presidente Dutra e da Marginal Tietê, na divisa entre Guarulhos e São Paulo. A Avenida Morvan Dias de Figueiredo e a Avenida Ernesto Geisel são referências locais.",
    viasPrincipais: ["Rodovia Presidente Dutra (km 228 ao 230)", "Marginal Tietê", "Av. Morvan Dias de Figueiredo", "Av. Ernesto Geisel"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Parque Novo Mundo dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Parque Novo Mundo?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Dutra ou à Marginal Tietê?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região centro-norte de Guarulhos",
    subtitulo: "Cotações para rotas no entorno do Bosque Maia e da Avenida Paulo Faccini",
    resumoLocal: "O Bosque Maia fica na região centro-norte de Guarulhos, no entorno do parque municipal de mesmo nome. A Avenida Paulo Faccini, a Avenida Papa João XXIII, a Avenida Salgado Filho e a Rua General Severiano são referências locais.",
    viasPrincipais: ["Av. Paulo Faccini", "Av. Papa João XXIII", "Av. Salgado Filho", "Rua General Severiano"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Bosque Maia dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Bosque Maia?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Bosque Maia ou à Avenida Paulo Faccini?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região nordeste de Guarulhos",
    subtitulo: "Cotações para rotas entre os Morros e vias da região nordeste",
    resumoLocal: "Morros fica na região nordeste de Guarulhos. A Avenida Brigadeiro Faria Lima, a Avenida Tiradentes, a Rua Eugênio Diamante e a Estrada dos Morros são referências locais.",
    viasPrincipais: ["Av. Brigadeiro Faria Lima (Guarulhos)", "Av. Tiradentes", "Rua Eugênio Diamante", "Estrada dos Morros"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Morros dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Morros?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada dos Morros ou nas vias de acesso?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região central de Guarulhos",
    subtitulo: "Cotações para rotas no entorno do Jardim Bom Clima",
    resumoLocal: "O Jardim Bom Clima fica na região central de Guarulhos. A Avenida Bom Clima, a Avenida Tiradentes, a Avenida Gilberto Dini e a Rua João Cavalari são referências locais; o Paço Municipal e o Fácil Bom Clima ficam na região.",
    viasPrincipais: ["Av. Bom Clima", "Av. Tiradentes", "Av. Gilberto Dini", "Rua João Cavalari"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Bom Clima dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Bom Clima?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir o Paço Municipal, o Fácil Bom Clima ou prédios do entorno?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região de Cumbica, Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Nova Cumbica e vias de Cumbica",
    resumoLocal: "O Jardim Nova Cumbica fica na região de Cumbica, em Guarulhos. A Avenida Santos Dumont, a Avenida Papa João Paulo I, a Rua Nova Guataporanga e a Rua Brejão são referências locais.",
    viasPrincipais: ["Av. Santos Dumont", "Av. Papa João Paulo I", "Rua Nova Guataporanga", "Rua Brejão"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Nova Cumbica dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Nova Cumbica?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Santos Dumont ou à Avenida Papa João Paulo I?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Itapetinga e vias da região norte",
    resumoLocal: "O Itapetinga fica na região norte de Guarulhos. A Estrada do Itapetinga, a Rua São Geraldo, a Estrada da Água Fria e a Estrada de Santa Clara são referências locais.",
    viasPrincipais: ["Estrada do Itapetinga", "Rua São Geraldo", "Estrada da Água Fria", "Estrada de Santa Clara"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Itapetinga dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Itapetinga?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços nas estradas do Itapetinga ou de Santa Clara?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região sul de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Augusta e vias da região sul",
    resumoLocal: "A Vila Augusta fica na região sul de Guarulhos. A Avenida Guarulhos, a Avenida Rotary, a Rua Cônego Valadão e a Rua Santa Izabel são referências locais.",
    viasPrincipais: ["Av. Guarulhos", "Av. Rotary", "Rua Cônego Valadão", "Rua Santa Izabel"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Augusta dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Augusta?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir condomínios, clínicas ou comércios da região?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região oeste de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Vila Galvão e a Zona Norte de São Paulo",
    resumoLocal: "O Jardim Vila Galvão fica na região oeste de Guarulhos, junto à Vila Galvão e próximo à Zona Norte de São Paulo. A Avenida Doutor Timóteo Penteado, a Rua Treze de Maio, a Rua Vicente Melro e a Avenida Rotary são referências locais.",
    viasPrincipais: ["Av. Doutor Timóteo Penteado", "Rua Treze de Maio", "Rua Vicente Melro", "Av. Rotary"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Vila Galvão dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Vila Galvão?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Doutor Timóteo Penteado ou à divisa com São Paulo?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região de São João, leste de Guarulhos",
    subtitulo: "Cotações para rotas entre a Cidade Soberana e vias da região de São João",
    resumoLocal: "A Cidade Soberana fica na região de São João, no leste de Guarulhos. A Estrada do Saboó, a Estrada de Nazaré, a Rua Bela Vista e a Avenida Florianópolis são referências locais.",
    viasPrincipais: ["Estrada do Saboó", "Estrada de Nazaré", "Rua Bela Vista", "Av. Florianópolis"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Cidade Soberana dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Cidade Soberana?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada do Saboó ou na Estrada de Nazaré?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Adriana e vias da região norte",
    resumoLocal: "O Jardim Adriana fica na região norte de Guarulhos. A Avenida Mariana Ubaldina do Espírito Santo, a Avenida Brigadeiro Faria Lima, a Rua Luís Gonzaga e a Rua do Rosário são referências locais.",
    viasPrincipais: ["Av. Mariana Ubaldina do Espírito Santo", "Av. Brigadeiro Faria Lima (Guarulhos)", "Rua Luís Gonzaga", "Rua do Rosário"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Adriana dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Adriana?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Mariana Ubaldina do Espírito Santo?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região leste de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Presidente Dutra e vias da região leste",
    resumoLocal: "O Jardim Presidente Dutra fica na região leste de Guarulhos. A Avenida Papa João Paulo I, a Rua Bela Vista do Paraíso, a Rua Macarani e o acesso à Rodovia Presidente Dutra são referências locais.",
    viasPrincipais: ["Av. Papa João Paulo I", "Rua Bela Vista do Paraíso", "Rua Macarani", "Acesso à Rodovia Presidente Dutra"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Presidente Dutra dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Presidente Dutra?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Papa João Paulo I ou ao acesso da Dutra?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Cabuçu e vias da região norte",
    resumoLocal: "O Cabuçu fica na região norte de Guarulhos, próximo à Serra da Cantareira e ao trecho norte do Rodoanel Mário Covas. A Estrada do Cabuçu, a Estrada da Cantareira e a Avenida Pedro de Souza Lopes são referências locais.",
    viasPrincipais: ["Estrada do Cabuçu", "Estrada da Cantareira", "Av. Pedro de Souza Lopes", "Rodoanel Mário Covas (trecho Norte)"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Cabuçu dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Cabuçu?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada do Cabuçu, na Estrada da Cantareira ou no Rodoanel?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Recreio São Jorge e vias da região norte",
    resumoLocal: "O Recreio São Jorge fica na região norte de Guarulhos, próximo ao Cabuçu. A Estrada do Recreio, a Avenida Palmira, a Rua Monte das Oliveiras e a Estrada do Cabuçu são referências locais.",
    viasPrincipais: ["Estrada do Recreio", "Av. Palmira", "Rua Monte das Oliveiras", "Estrada do Cabuçu"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Recreio São Jorge dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Recreio São Jorge?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada do Recreio ou próximos ao Cabuçu?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região de Cumbica, Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Cumbica e vias de Cumbica",
    resumoLocal: "O Jardim Cumbica fica na região de Cumbica, em Guarulhos. A Rua Juazeiro do Norte, a Avenida Santos Dumont, a Rua Brigadeiro Mario Perdigão e a Avenida Monteiro Lobato são referências locais.",
    viasPrincipais: ["Rua Juazeiro do Norte", "Av. Santos Dumont", "Rua Brigadeiro Mario Perdigão", "Av. Monteiro Lobato"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Cumbica dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Cumbica?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Rua Juazeiro do Norte ou próximos à Avenida Santos Dumont?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região centro-norte de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Fátima e vias da região centro-norte",
    resumoLocal: "A Vila Fátima fica na região centro-norte de Guarulhos, entre o Taboão e o Macedo. A Avenida Otávio Braga de Mesquita, a Rua José Bernardo Medeiros, a Avenida Tiradentes e a Rua Carlos Drummond de Andrade são referências locais.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Rua José Bernardo Medeiros", "Av. Tiradentes", "Rua Carlos Drummond de Andrade"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Fátima dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Fátima?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Otávio Braga de Mesquita?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região centro-norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Santa Mena e vias da região centro-norte",
    resumoLocal: "O Jardim Santa Mena fica na região centro-norte de Guarulhos, próximo ao Bosque Maia e à Avenida Salgado Filho. A Avenida Suplicy, a Rua Campinas e a Rua General Severiano são referências locais.",
    viasPrincipais: ["Av. Suplicy", "Av. Salgado Filho", "Rua Campinas", "Rua General Severiano"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Santa Mena dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Santa Mena?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Bosque Maia ou à Avenida Suplicy?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Barros e vias da região norte",
    resumoLocal: "A Vila Barros fica na região norte de Guarulhos, entre a Vila Fátima e o Taboão. A Avenida Otávio Braga de Mesquita, a Rua Carlos Drummond de Andrade, a Rua Araguatins e a Avenida Tiradentes são referências locais.",
    viasPrincipais: ["Av. Otávio Braga de Mesquita", "Rua Carlos Drummond de Andrade", "Rua Araguatins", "Av. Tiradentes"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Barros dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Barros?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Otávio Braga de Mesquita?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região sul de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Tranquilidade e vias da região sul",
    resumoLocal: "O Jardim Tranquilidade fica na região sul de Guarulhos, entre a Vila Galvão e Gopoúva. A Rua Santa Lúcia, a Avenida Emílio Ribas, a Rua Jacob e a Avenida Torres da Silva são referências locais; o Hospital Padre Bento fica no bairro.",
    viasPrincipais: ["Rua Santa Lúcia", "Av. Emílio Ribas", "Rua Jacob", "Av. Torres da Silva"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Tranquilidade dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Tranquilidade?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Hospital Padre Bento ou à Avenida Emílio Ribas?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Rio e vias da região norte",
    resumoLocal: "A Vila Rio de Janeiro, também chamada Vila Rio, fica na região norte de Guarulhos. A Avenida Salgado Filho, a Avenida Benjamin Harris Hunicutt, a Rua Floro de Oliveira e o Shopping Pátio Guarulhos são referências locais.",
    viasPrincipais: ["Av. Salgado Filho", "Av. Benjamin Harris Hunicutt", "Shopping Pátio Guarulhos", "Rua Floro de Oliveira"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Rio dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Rio?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Shopping Pátio Guarulhos ou à Avenida Salgado Filho?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região central de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Paulista e vias da região central",
    resumoLocal: "O Jardim Paulista fica na região central de Guarulhos, próximo à Avenida Paulo Faccini e à Avenida Doutor Timóteo Penteado. A Rua Francisco Gonzaga Vasconcelos, a Avenida Tiradentes e a Rua do Rosário são referências locais.",
    viasPrincipais: ["Rua Francisco Gonzaga Vasconcelos", "Av. Paulo Faccini", "Av. Tiradentes", "Rua do Rosário"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Paulista (Guarulhos) dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Paulista (Guarulhos)?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Paulo Faccini ou à Avenida Doutor Timóteo Penteado?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região norte de Guarulhos",
    subtitulo: "Cotações para rotas entre Santa Clara e vias da região norte",
    resumoLocal: "Santa Clara fica na região norte de Guarulhos. A Estrada de Santa Clara, a Rua Maria Paula Mota, a Avenida Benjamin Harris Hunicutt e a Estrada do Itapetinga são referências locais.",
    viasPrincipais: ["Estrada de Santa Clara", "Rua Maria Paula Mota", "Av. Benjamin Harris Hunicutt", "Estrada do Itapetinga"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Santa Clara dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Santa Clara?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada de Santa Clara ou na Estrada do Itapetinga?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região leste de Guarulhos",
    subtitulo: "Cotações para rotas entre Sadokim, Bonsucesso e o eixo da Dutra",
    resumoLocal: "Sadokim fica no leste de Guarulhos, próximo a Bonsucesso e à Rodovia Presidente Dutra. A Estrada Municipal, a Estrada da Água Chata e a Avenida Paschoal Thomeu são referências locais.",
    viasPrincipais: ["Estrada Municipal", "Rodovia Presidente Dutra (km 210)", "Av. Paschoal Thomeu", "Estrada da Água Chata"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Sadokim dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Sadokim?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Dutra, à Estrada da Água Chata ou à Avenida Paschoal Thomeu?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região de São João, leste de Guarulhos",
    subtitulo: "Cotações para rotas entre o Bananal e vias da região de São João",
    resumoLocal: "O Bananal fica na região de São João, no leste de Guarulhos. A Estrada do Bananal, a Estrada Velha de Nazaré, a Rua Joaquina de Jesus e a Avenida Florianópolis são referências locais.",
    viasPrincipais: ["Estrada do Bananal", "Estrada Velha de Nazaré", "Rua Joaquina de Jesus", "Av. Florianópolis"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Bananal dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Bananal?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Estrada do Bananal ou na Estrada Velha de Nazaré?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Corredor entre Guarulhos e Itaquaquecetuba",
    subtitulo: "Cotações para rotas entre Guarulhos, Itaquaquecetuba e o eixo Ayrton Senna",
    resumoLocal: "A divisa entre Guarulhos e Itaquaquecetuba fica no corredor do Alto Tietê. A Estrada de Santa Mônica, a Rodovia Ayrton Senna, a Estrada Pinheirinho Velho e a Avenida Almirante Tamandaré são referências locais.",
    viasPrincipais: ["Estrada de Santa Mônica", "Rodovia Ayrton Senna (SP-070)", "Estrada Pinheirinho Velho", "Av. Almirante Tamandaré"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Divisa com Itaquaquecetuba dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Divisa com Itaquaquecetuba?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na divisa, na Estrada de Santa Mônica ou na Rodovia Ayrton Senna?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região dos Pimentas, Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino na região dos Pimentas",
    resumoLocal: "A região dos Pimentas, também identificada aqui como Guarulhos Sul, tem como referências a Estrada Presidente Juscelino Kubitschek de Oliveira, a Estrada do Pimentas, a Avenida Jurema e a Avenida Alpheu de Oliveira. O Hospital Municipal Pimentas-Bonsucesso, o campus da UNIFESP, o terminal de ônibus e o Shopping Bonsucesso são referências da região.",
    viasPrincipais: ["Estrada Pres. Juscelino Kubitschek de Oliveira", "Estrada do Pimentas", "Av. Jurema", "Av. Alpheu de Oliveira"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota na região dos Pimentas dependem dos endereços informados e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para a região dos Pimentas?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir o Hospital Pimentas-Bonsucesso ou o campus da UNIFESP?",
        resposta: "Informe o endereço e as regras de acesso conhecidas. A possibilidade de atendimento deve ser confirmada na cotação.",
      },
      {
        pergunta: "Como cotar uma rota dos Pimentas para outro bairro?",
        resposta: "Envie os dois endereços completos. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Entorno do Aeroporto Internacional de São Paulo/Guarulhos",
    subtitulo: "Cotações para rotas com origem ou destino no entorno do Aeroporto GRU",
    resumoLocal: "O entorno do Aeroporto Internacional de São Paulo/Guarulhos (GRU Airport) inclui os Terminais de Passageiros 1, 2 e 3 e o Terminal de Cargas (TECA). A Rodovia Hélio Smidt, a Avenida Jamil João Zarif e a Marginal do Rio Baquirivu são referências de acesso.",
    viasPrincipais: ["Rodovia Hélio Smidt", "Av. Jamil João Zarif", "Marginal do Rio Baquirivu", "Acesso aos Terminais 1, 2 e 3 e TECA"],
    demandasComuns: ["Endereços de coleta e entrega", "Terminal ou ponto de referência", "Data e horário desejados", "Informações de acesso, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota no entorno do aeroporto dependem do terminal, do ponto de encontro e das regras de acesso informadas e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para o entorno do Aeroporto GRU?",
        resposta: "Informe os endereços de coleta e entrega, o terminal ou ponto de referência, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir terminais de passageiros ou o TECA?",
        resposta: "Informe o local exato e as regras de acesso conhecidas. A possibilidade de atendimento depende da confirmação dessas condições na cotação.",
      },
      {
        pergunta: "Como informar um encontro no aeroporto?",
        resposta: "Indique o terminal e o ponto de referência desejado. As condições de acesso devem ser verificadas antes da contratação.",
      },
    ],
    bairrosVizinhos: [
      { slug: "taboao", nome: "Taboão" },
      { slug: "cumbica", nome: "Cumbica" },
      { slug: "vila-fatima", nome: "Vila Fátima" },
      { slug: "vila-barros", nome: "Vila Barros" },
    ],
  },
  {
    slug: "vila-progresso",
    nome: "Vila Progresso",
    zona: "Região central de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Progresso e vias da região central",
    resumoLocal: "A Vila Progresso fica próxima ao Centro de Guarulhos. A Avenida Esperança, a Rua Dona Tecla, a Avenida Tiradentes e a Rua Sete de Setembro são referências locais.",
    viasPrincipais: ["Av. Esperança", "Rua Dona Tecla", "Av. Tiradentes", "Rua Sete de Setembro"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Progresso dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Progresso?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços na Avenida Esperança ou próximos ao Centro?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região central-norte de Guarulhos",
    subtitulo: "Cotações para rotas entre o Jardim Flor da Montanha e vias da região central-norte",
    resumoLocal: "O Jardim Flor da Montanha fica na região central-norte de Guarulhos. A Avenida Bartholomeu de Carlos, a Avenida Dona Tecla, a Rua Dona Antônia, a Avenida Salgado Filho e o Parque Shopping Maia são referências locais.",
    viasPrincipais: ["Av. Bartholomeu de Carlos", "Av. Dona Tecla", "Rua Dona Antônia", "Av. Salgado Filho"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Jardim Flor da Montanha dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Jardim Flor da Montanha?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Parque Shopping Maia ou à Avenida Bartholomeu de Carlos?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Divisa entre Guarulhos e a Zona Leste de São Paulo",
    subtitulo: "Cotações para rotas entre a Ponta Grande, Guarulhos e a Zona Leste de São Paulo",
    resumoLocal: "A Ponta Grande fica na divisa entre Guarulhos e a Zona Leste de São Paulo. A Avenida Guarulhos, a Rua Cabo João Teruel Fregoni, a Ponte Grande e o acesso à Marginal Tietê são referências locais.",
    viasPrincipais: ["Av. Guarulhos", "Rua Cabo João Teruel Fregoni", "Ponte Grande", "Marginal Tietê (acesso)"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Ponta Grande dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Ponta Grande?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos à Avenida Guarulhos, à Ponte Grande ou à Marginal Tietê?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
    zona: "Região central de Guarulhos",
    subtitulo: "Cotações para rotas entre a Vila Camisaria e vias da região central",
    resumoLocal: "A Vila Camisaria fica próxima ao Centro de Guarulhos e à Vila Moreira. A Rua Coronel Portilho, a Rua Doutor Ramos, a Rua Cerqueira César e a Avenida Tiradentes são referências locais.",
    viasPrincipais: ["Rua Coronel Portilho", "Rua Doutor Ramos", "Rua Cerqueira César", "Av. Tiradentes"],
    demandasComuns: ["Endereços de coleta e entrega", "Descrição do item", "Data e horário desejados", "Informações de acesso ou ponto de referência, quando aplicáveis"],
    particularidadesLogistica: "As condições da rota em Vila Camisaria dependem dos endereços e das informações de acesso fornecidos e devem ser avaliadas na cotação.",
    faq: [
      {
        pergunta: "Como solicitar cotação para Vila Camisaria?",
        resposta: "Informe os endereços de coleta e entrega, a data desejada e uma descrição do item. A disponibilidade e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "A rota pode incluir endereços próximos ao Centro, à Vila Moreira ou à Avenida Tiradentes?",
        resposta: "Informe o endereço completo e as regras de acesso conhecidas. A possibilidade de atendimento e as condições devem ser confirmadas na cotação.",
      },
      {
        pergunta: "Como informar um ponto de referência na região?",
        resposta: "Compartilhe o endereço completo e o ponto de referência, se necessário. As condições da rota devem ser verificadas antes da contratação.",
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
