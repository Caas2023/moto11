# PRD TECNICO - MOTO11 GUARULHOS
## Product Requirements Document v2.0

---

## 1. RESUMO EXECUTIVO

Site institucional + Blog + Painel Admin para Moto11 Guarulhos - empresa de motofrete e entregas rápidas em Guarulhos/SP.

**Objetivo:** Posicionar no Google (Top 3) para 20+ palavras-chave de motofrete em Guarulhos.

---

## 2. REQUISITOS FUNCIONAIS

### 2.1 Site Publico (Frontend)

#### Homepage
- Hero section com video de frota (autoplay muted)
- CTAs: "Orçamento via WhatsApp" (botao flutuante)
- Cards dos 32 servicos (icones, descricao, link)
- Mapa de Guarulhos clicavel por bairro
- Depoimentos de clientes (carrossel)
- Contador: "X entregas realizadas este mês"
- Blog (ultimos 3 posts)

#### 32 Paginas de Servico
- Layout padronizado com variacao de conteudo
- SEO otimizado (H1, H2, meta tags)
- FAQ Accordion com Schema
- CTA: Formulario + WhatsApp
- Video especifico por servico (quando aplicavel)

#### 12 Paginas de Area
- Informacoes unicas por bairro
- Rotas e tempos estimados
- Comercios famosos do bairro
- Fotos do bairro (quando disponivel)

#### Paginas Institucionais
- Sobre Nos (historia, equipe, missao)
- Contato (formulario + mapa + WhatsApp)
- Politica de Privacidade
- Termos de Uso

### 2.2 Painel Administrativo (CMS)

| Modulo | Funcionalidade |
|--------|---------------|
| **Dashboard** | KPIs, graficos, mapa de calor |
| **Paginas** | CRUD para 32 servicos e 12 areas |
| **Blog** | Editor WYSIWYG, categorias, tags |
| **Orcamentos** | Listagem, filtros, exportacao |
| **Depoimentos** | CRUD com moderacao |
| **Media** | Upload multiplo, organizacao por pasta |
| **SEO Manager** | Edicao de meta tags, preview Google |
| **Usuarios** | Roles (Admin, Editor, Autor) |
| **Configuracoes** | Dados da empresa, redes sociais |

---

## 3. REQUISITOS NAO-FUNCIONAIS

### 3.1 Performance
- PageSpeed > 90 (mobile e desktop)
- First Contentful Paint < 1.5s
- TTFB < 600ms

### 3.2 SEO
- 100% das paginas com Schema.org
- Sitemap dinamico (atualizado automaticamente)
- Robots.txt otimizado
- URLs amigaveis (/servicos/nome-servico)
- Meta tags unicos por pagina

### 3.3 Acessibilidade
- WCAG 2.1 AA
- Contraste minimo 4.5:1
- Navegacao por teclado
- Leitores de tela compativel

### 3.4 Seguranca
- HTTPS 100%
- Protecao contra XSS e CSRF
- Sanitizacao de inputs
- Rate limiting

---

## 4. FLUXO DE USUARIO

```
[Usuario chega ao site]
        |
        v
[Homepage] --> [Escolhe servico/area] 
        |                       |
        v                       v
[Pagina de Servico] <-- [Pagina de Area]
        |                       |
        v                       v
[Orçamento/Contato] <--> [WhatsApp]
        |
        v
[Confirmacao]
```

---

## 5. CRITERIOS DE ACEITACAO

- [ ] 32 paginas de servico funcionais
- [ ] 12 paginas de area funcionais
- [ ] Blog com 20+ posts publicados
- [ ] Painel Admin 100% funcional
- [ ] Formulario de orcamento funcionando
- [ ] WhatsApp API integrado
- [ ] PageSpeed > 90
- [ ] Top 10 Google para 5 palavras-chave

---

*Documento: PRD_TECNICO.md*
*Versao: 2.0*
*Data: 21/03/2025*