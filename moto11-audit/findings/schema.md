# Achados de Dados Estruturados (Schema.org) — Moto11

## 1. Schema LocalBusiness / ProfessionalService (RootLayout)
- Declarado via JSON-LD em `src/app/layout.tsx` a partir de `src/lib/seo.ts`:
  - `@type`: `["LocalBusiness", "ProfessionalService"]`
  - `@id`: `https://www.moto11guarulhos.com.br/#empresa`
  - `name`: `Moto11 – Empresa de Motoboy`
  - `telephone`: `+5511957248425`
  - `address`: `Guarulhos, SP, BR` (Modelo SAB — sem logradouro público de fachada para proteger privacidade e evitar suspensão do GBP)
  - `geo`: Latitude `-23.4546`, Longitude `-46.5333`
  - `openingHoursSpecification`: Segunda a sexta, das 08h00 às 18h00
  - `areaServed`: 16 cidades da Região Metropolitana de São Paulo (Guarulhos, São Paulo, Arujá, Santa Isabel, Itaquaquecetuba, Poá, Ferraz, Suzano, Mogi, Osasco, Barueri, Santo André, São Bernardo, São Caetano, Mauá, Diadema)

## 2. Schema WebSite (RootLayout)
- Declarado com `@id`: `https://www.moto11guarulhos.com.br/#website`
- `name`: `Moto11`
- `inLanguage`: `pt-BR`
- `publisher`: Referenciado ao `@id` da empresa

## 3. Schema Service (Serviços e Localidades)
- Presente em todas as páginas de serviços (`/servicos/[slug]`) e de localidades (`/areas/[slug]` e `/sao-paulo/[slug]`):
  - `@type`: `Service`
  - `name`: Título do serviço ou atendimento no bairro
  - `serviceType`: Modalidade do serviço prestado
  - `description`: Subtítulo descritivo
  - `provider`: Apontando para o nó `LocalBusiness` canônico
  - `areaServed`: Bairro específico em Guarulhos ou destino metropolitano

## 4. Schema BreadcrumbList
- Implementado em todas as páginas filhas para exibição de trilhas de navegação ricas nos snippets da SERP do Google:
  - Posição 1: Início
  - Posição 2: Seção Pilar (Serviços, Áreas ou São Paulo)
  - Posição 3: Página Final (Serviço, Bairro ou Destino)

## 5. Schema FAQPage
- Implementado na Home, nas 30 páginas de serviços e nas 80 páginas de localidades:
  - Marcação de perguntas e respostas aceitas para leitura de motores de busca e indexadores semânticos.
