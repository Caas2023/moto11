# CHECKLIST VERIFICACAO - FASES 1 A 5
## Fases: Analise, Conteudo, Arquitetura, SEO On-Page, E-A-T

---

## FASE 1: ANALISE E PLANEJAMENTO

- [ ] 1.1 Top 10 concorrentes analisados em profundidade
  - [ ] Sites visualizados em capturas de tela ou visita
  - [ ] Palavras-chave de cada concorrente listadas
  - [ ] Estrutura de paginas mapeada
  - [ ] Pontos fortes e fracos documentados

- [ ] 1.2 Mapeamento de keywords fixo
  - [ ] 20 palavras-chave principais (Curto, Medio, Longo termo)
  - [ ] Volume e dificuldade estimados por palavra-chave
  - [ ] Intencao de busca definida (Informacional, Navigacional, Transacional)
  - [ ] Competitividade avaliada (Alta, Media, Baixa, Muito Baixa)

- [ ] 1.3 Estrategia de conteudo superior ao da concorrencia
  - [ ] Padroes de conteudo identificados nos concorrentes
  - [ ] Oportunidades de conteudo unico mapeadas
  - [ ] Diferenciais (Selling Points) definidos

- [ ] 1.4 Decisao sobre Plataforma e Arquitetura
  - [ ] Criterios de selecao de plataforma (SEO, Facilidade, Escala, Custo)
  - [ ] Plataforma selecionada (Next.js + Payload CMS ou WordPress + Elementor)
  - [ ] Justificativa de escolha documentada

- [ ] 1.5 Plano de Projeto e Ferramentas de Gestao
  - [ ] Ferramenta de gestao de projeto escolhida (Trello, Notion, Jira)
  - [ ] Plano de sprints ou cronograma em estagios definido
  - [ ] Equipe e responsabilidades definidas
  - [ ] Ponto de partida (Iniciante, Intermediario, Avancado) determinado

---

## FASE 2: CONTEUDO E PALAVRAS-CHAVE

### 2.1 Paginas de Servico Especiais (31 paginas)
- [ ] Lista de 31 servicos validada e completa
- [ ] Descricao de aprox. 50 palavras para cada servico criada
- [ ] Identificador de dores para cada servico definido
- [ ] Identificador de beneficios para cada servico definido

Servicos validados:
- [ ] Motoboy Expresso
- [ ] Motofrete
- [ ] Entrega Documentos
- [ ] Entrega Encomendas
- [ ] Coleta Entrega
- [ ] Servico Mensageiro
- [ ] Transporte Malotes
- [ ] Coleta Transportadores
- [ ] Aeroporto Guarulhos
- [ ] Entrega Urgente
- [ ] Entrega Programada
- [ ] Motoboy para Escritorios
- [ ] Motoboy para Industrias
- [ ] Motoboy para Clinicas
- [ ] Motoboy Laboratorio
- [ ] Pecas Automotivas
- [ ] Courier Express
- [ ] Distribuicao Panfletos
- [ ] Correspondencias Bancarias
- [ ] Transporte Valores
- [ ] Motoboy para Eventos
- [ ] Busca e Entrega
- [ ] Logistica Urbana
- [ ] Entrega Mesmo Dia
- [ ] Motoboy para Advogados
- [ ] Motoboy para Contadores
- [ ] Motoboy para Hospitais
- [ ] Coleta Cartorio
- [ ] Pecas Juridicas Coleta
- [ ] Exames Medicos
- [ ] Moto Entrega
- [ ] Entregador/a para Ifood

### 2.2 Criacao de Conteudo Unico Otimizado (Conteudo "X1")
- [ ] 32 paginas de servico criadas com:
  - [ ] Titulo de pagina (H1) otimizado
  - [ ] URL slug definido
  - [ ] Meta Description unica (155 caracteres)
  - [ ] H2 Variantes: [2+]
  - [ ] Introducao (aprox. 100 - 150 palavras)
  - [ ] Palavra chave principal: Definida na Introducao
  - [ ] Perguntas Frequentes [3-5]
  - [ ] CTA: Definida na Introducao

### 2.3 Paginas de Locais e Mapas (12 ou mais paginas de bairro)
- [ ] 12 bairros de Guarulhos selecionados para paginas
- [ ] Descrições padrão de backlinks na pagina do bairro (50 caracteres)
- [ ] Endereços e mapas sinicos mapeados
- [ ] Paginas gravadas no formato: `/areas/[nome-do-bairro]`

Bairros selecionados:
- [ ] Cumbica
- [ ] Centro
- [ ] Bosque Maia
- [ ] Morros
- [ ] Bonsucesso
- [ ] Vila Galvao
- [ ] Taboao
- [ ] Macedo
- [ ] Parque Novo Mundo
- [ ] Jardim Bom Clima
- [ ] Jardim Nova Cumbica
- [ ] Itapetinga

### 2.4 Paginas Legais
- [ ] Pagina de Politica de Privacidade criada com dados ficticios (GDPR/LGPD)
- [ ] Pagina de Termos de Uso criada com dados ficticios
- [ ] Pagina de aviso de cookies criada e configurada

### 2.5 Otimizacao para Palavras-Chave Long Tail
- [ ] Variantes de busca long tail mapeadas para servicos
- [ ] Variantes para cada pagina de servico/solucao criadas

### 2.6 Paginas de "Duvidas Comuns" (FAQ Schema Markup)
- [ ] Secao de perguntas frequentes em cada pagina de servico
- [ ] Schema markup de FAQPage implementado (JSON-LD)

### 2.7 Pagina 'Sobre Nos' (Otimizada para Confiança E-A-T)
- [ ] Conteudo qualificado sobre os esforcos do CTA
- [ ] Historia da Moto11 (ficticia, otimizada)
- [ ] Equipe e credenciais listadas
- [ ] Depoimentos de clientes incluidos (ficticios)

### 2.8 Pagina de Precos (se aplicavel)
- [ ] Tabela de precos ficticios criada
- [ ] Comparativo com a concorrencia (ficticio)
- [ ] CTA para pedir orcamento personalizado

---

## FASE 3: ARQUITETURA E ESTRUTURA

- [ ] 3.1 Estrutura de diretorios do projeto criada (`mkdir -p`)
- [ ] 3.2 Design de URL limpo e hierarquico construido no formato `/servicos/[servico-id]`
- [ ] 3.3 Navegacao facil (menu principal, links no rodape)
  - [ ] Menu de navegacao criado
  - [ ] Links de navegacao no rodape criados
- [ ] 3.4 Sitemap em XML construido e gerado automaticamente
- [ ] 3.5 Robots.txt otimizado: permite acesso a Googlebot, bloqueia diretorios de admin
- [ ] 3.6 Pagina de erro 404 personalizada criada (acessivel em `/404`)

---

## FASE 4: SEO ON-PAGE (Otimizacao nos Detalhes)

### 4.1 Otimizacao de Titulos e Meta Tags
- [ ] Titulos da pagina (H1) configurados corretamente
- [ ] Meta Descricoes precisas e concisas (120 - 160 caracteres)
- [ ] Atributos 'title' precisos para links e imagens

### 4.2 Tags de Cabecalho Otimizadas (H1, H2, H3)
- [ ] H1 unico por pagina com a palavra-chave principal
- [ ] H2 - H6 em ordem hierarquica
- [ ] Palavras-chave semanticas incluidas nos cabecalhos

### 4.3 Atributos Alt Text Descritivos em Todas as Imagens
- [ ] Atributo 'alt' incluido em todas as tags `<img>`
- [ ] Texto descritivo com palavras-chave relevantes
- [ ] Imagens com contexto informativo (inao decorativas)

### 4.4 Implementacao de Schema Markup (Rich Snippets)
- [ ] Marcação JSON-LD para LocalBusiness / Organizacao
- [ ] Marcação de Servicos detalhada (preco, area, avaliacoes)
- [ ] Marcação de BreadcrumbList para caminho de paginas
- [ ] Marcação de FAQPage (Perguntas Frequentes)
- [ ] Marcação de Review (Avaliacoes de Clientes)

### 4.5 Uso Estrategico de Links Internos (Link Equity)
- [ ] Grafo de links internos entre paginas de servico e de area
- [ ] Palavra-chave "ancora" (anchor text) descritiva
- [ ] Paginas de conteudo popular (Pillars) com links para paginas de servico
- [ ] Links no menu de navegacao e rodape

### 4.6 Otimizacao de Velocidade de Pagina para SEO
- [ ] Formatos de imagem ideais (WebP/AVIF)
- [ ] Compressao de imagens (Tinify, TinyPNG)
- [ ] Dimensao e largura do atributo 'srcset' para imagens responsivas
- [ ] Lazy loading para imagens e conteudo nao essencial
- [ ] Minificacao de CSS e JavaScript

### 4.7 Implementacao de Navegacao 'Breadcrumb'
- [ ] Componente de breadcrumb incluso no layout da pagina
- [ ] Atributo Schema.org/BreadcrumbList implementado

### 4.8 URLs amigaveis e Descritivas
- [ ] URLs curtas, legiveis e contendo palavras-chave

### 4.9 Otimizacao para Dispositivos Mobile (Design Responsivo)
- [ ] Layouts fluidos ou media queries para celulares e tablets
- [ ] Meta tag `viewport` configurada corretamente
- [ ] Navegacao hamburger para dispositivos moveis
- [ ] Carregamento rapido em conexoes 3G/4G (debouncing de eventos, CSS in-line essencial)

### 4.10 Acessibilidade Web (WCAG)
- [ ] Imagens com texto alternativo descritivo
- [ ] Teclas de atalho e navegacao por teclado funcionais
- [ ] Contraste de cores adequado (4.5:1 min. para texto)
- [ ] Elementos com foco visivel com estilo

---

## FASE 5: CONFIABILIDADE E AUTORIDADE (E-A-T - SEO Tecnico)

- [ ] 5.1 Pagina 'Sobre Nos' completa e otimizada
- [ ] 5.2 Depoimentos de clientes factuais (reais ou ficticios detalhados)
- [ ] 5.3 Contato fisico e de midia claro e visivel
  - [ ] Endereco ficticio (Rua do Comerciante, 321, Centro, Guarulhos - SP, CEP 07010-010)
  - [ ] Telefone ficticio com area 11
  - [ ] Email ficticio (ex: contato@moto11guarulhos.com.br)
- [ ] 5.4 SSL/HTTPS configurado (Site seguro - barra de endereco com cadeado)

---

*Documento: 4-CHECKLIST_FASES_1_5.md*
*Versao: 1.0*
*Data: 21/03/2025*
