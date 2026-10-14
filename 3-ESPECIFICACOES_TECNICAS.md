# ESPECIFICACOES TECNICAS - MOTO11 GUARULHOS
## Documento Tecnico do Projeto v1.0

---

## 1. ARQUITETURA DO SISTEMA

```
+------------------+        +------------------+        +------------------+
|     CLIENTE      |        |     VERCEL       |        |   RAILWAY/FILE   |
|    (Navegador)   | <----> |   (Next.js +     | <----> |    (Payload CMS  |
|                  |   CDN   |    Tailwind)     |  API   |    + PostgreSQL) |
+---------+--------+        +---------+--------+        +---------+--------+
          |                          |                           |
          |                          |                           |
          v                          v                           v
+-----------------------------------------------+-------------------+--------+
|                  GOOGLE SERVICES              |     OUTROS      |
|  - Search Console  - Analytics 4  - Ads       |  - Cloudinary   |
|  - Maps API      - reCAPTCHA     - Fonts    |  - Twilio       |
|                                               |  - SendGrid     |
+-----------------------------------------------+-----------------+--------+
```

---

## 2. STACK TECNOLOGICO

### 2.1 Front-End
| Tecnologia | Versao | Proposito |
|------------|--------|-----------|
| **Next.js** | 14+ (App Router) | Framework React (SSR/SSG) |
| **React** | 18+ | Biblioteca UI |
| **TypeScript** | 5+ | Tipagem estatica |
| **Tailwind CSS** | 3.4+ | Utilitarios CSS |
| **shadcn/ui** | ^1.0 | Componentes de UI |
| **Lucide React** | ^0.4 | Iconography |

### 2.2 Back-End (API e CMS)
| Tecnologia | Versao | Proposito |
|------------|--------|-----------|
| **Payload CMS** | ^2.16 | Headless CMS |
| **Node.js** | ^20+ | Ambiente de execucao |
| **TypeScript** | 5+ | Tipagem do CMS |

### 2.3 Banco de Dados
| Tecnologia | Versao | Proposito |
|------------|--------|-----------|
| **PostgreSQL** | ^16 | Dados estruturados |
| **Redis** | ^7 | Cache e sessões |

### 2.4 Infraestrutura e Deploy
| Servico | Uso |
|---------|-----|
| **Vercel** | Hosting front-end (CI/CD automatico) |
| **Railway** | Hosting Payload CMS + PostgreSQL |
| **Cloudinary** | Armazenamento e otimizacao de imagens |
| **Google Cloud** | Maps API, reCAPTCHA |

---

## 3. ESTRUTURA DO PROJETO

```
moto11-guarulhos/
|
+-- apps/
|   +-- web/                    # Next.js (frontend publico)
|   |   +-- app/
|   |   |   +-- (site)/
|   |   |   |   +-- servicos/
|   |   |   |   +-- areas/
|   |   |   |   +-- blog/
|   |   |   |   +-- contato/
|   |   +-- components/
|   |   +-- hooks/
|   |   +-- lib/
|   |   +-- styles/
|   |
|   +-- cms/                    # Payload CMS (backend)
|       +-- src/
|       |   +-- collections/
|       |   |   +-- Services.ts
|       |   |   +-- Areas.ts
|       |   |   +-- Blog.ts
|       |   |   +-- Quotes.ts
|       |   |   +-- Testimonials.ts
|       |   |   +-- Media.ts
|       |   |   +-- Users.ts
|       |   |
|       +-- payload.config.ts
|       +-- docker-compose.yml
|
+-- packages/
|   +-- ui/                     # Componentes compartilhados
|   |   +-- components/
|   |   +-- package.json
|   |
|   +-- shared-types/           # TypeScript types
|       +-- src/
|       +-- package.json
|
+-- turbo.json                  # Configuracao do Turborepo
+-- package.json
+-- .env
```

---

## 4. COMPONENTES PRINCIPAIS

### 4.1 Componentes de UI (shadcn/ui)
- Button, Card, Badge, Input
- Select, Checkbox, Dialog, Sheet
- Tabs, Accordion, Dropdown Menu
- Toast, Table, Textarea

### 4.2 Componentes Customizados
- ServiceCard: Card de servico com icone, titulo, descricao e CTA
- NeighborhoodCard: Card de bairro com imagem, nome e link
- WhatsAppButton: Botao flutuante de WhatsApp
- TestimonialSlider: Carrossel de depoimentos
- MapEmbed: Mapa do Google integrado
- QuoteForm: Formulario de orcamento
- Header: Navegacao com menu mobile
- Footer: Rodape com links e redes sociais

---

## 5. HOOKS CUSTOMIZADOS

```typescript
// hooks/useWhatsAppLink.ts
// Gera link de WhatsApp com mensagem pre-definida

// hooks/useScrollAnimation.ts  
// Intersection Observer para animacoes de scroll

// hooks/useCurrentLocation.ts
// Obtem localizacao do usuario para sugestoes
```

---

## 6. INTEGRACOES DE API

### 6.1 Google Maps API
- Key: GOOGLE_MAPS_API_KEY
- Uso: Mapas interativos, autocomplete de enderecos
- Limite: 1.000 req/dia (plano gratuito)

### 6.2 WhatsApp Business API (via Twilio)
- Key: TWILIO_AUTH_TOKEN, SID, PHONE_NUMBER_ID
- Uso: Envio de mensagens automaticas
- Limite: Tarifacao por mensagem

### 6.3 SendGrid / Resend
- Key: SENDGRID_API_KEY ou RESEND_API_KEY
- Uso: Notificacoes por email
- Limite: 100 emails/dia (plano gratuito)

---

## 7. PERFORMANCE E SEO

### 7.1 Otimizacoes
- SSR/SSG com Next.js App Router
- Imagens: WebP/AVIF com srcset
- Lazy loading para imagens e componentes
- Minificacao de CSS e JavaScript
- CDN via Vercel Edge Network

### 7.2 SEO Tecnico
- Meta tags dinamicas por pagina
- Sitemap.xml gerado automaticamente
- Robots.txt configurado
- Schema.org (JSON-LD): LocalBusiness, Service, FAQ, Review
- Canonical URLs
- Open Graph e Twitter Cards

---

*Documento: 3-ESPECIFICACOES_TECNICAS.md*
*Versao: 1.0*
*Data: 21/03/2025*
