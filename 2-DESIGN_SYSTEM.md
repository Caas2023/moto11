# DESIGN SYSTEM - MOTO11 GUARULHOS
## Sistema de Design e Diretrizes Visuais v1.0

---

## 1. IDENTIDADE VISUAL

### Concepto
A marca Moto11 transmite: **velocidade, confiança, energia e proximidade** com o comércio guarulhense.

---

## 2. PALETA DE CORES

### Cores Principais
| Nome | Hex | Uso | Obs. |
|------|-----|-----|------|
| **Laranja** | `#FF6B00` | CTAs, destaques, elementos interativos | Cor principal |
| **Preto** | `#1A1A1A` | Fondos escuros, texto principal | Elegância |
| **Laranja Claro** | `#FF8C42` | Hover, destaques secundários | Contraste |

### Cores de Design
| Nome | Hex | Uso |
|------|-----|-----|
| **Laranja Manga** | `#FFBC42` | Gradientes, ícones |
| **Super Laranja** | `#FF9500` | Destaques de conteúdo |
| **Noite Tardia** | `#041A36` | Fundos escuros elegançs |
| **Azul Escuro** | `#1A3058` | Detalhes, bordas |

### Cores Complementares
| Nome | Hex | Uso |
|------|-----|-----|
| **Off-White** | `#F2F4F6` | Fundos claros de seção |
| **Cream** | `#FDF5ED` | Fundos alternativos, cards |
| **Gray** | `#6B7280` | Texto secundário |

### Cores Botão WhatsApp
| Nome | Hex | Uso |
|------|-----|-----|
| **Verde Whats** | `#25D366` | Botão WhatsApp |
| **Verde Menta** | `#87E8AE` | Hover WhatsApp |
| **Citrus** | `#F2EB88` | Detalhes WhatsApp |

### Semáforo (Status e Feedbacks)
| Nome | Hex | Uso |
|------|-----|-----|
| **Verde Estado** | `#27AE60` | Sucesso, "Entregue" |
| **Vermelho Laranja** | `#EC5242` | Erro, "Atrasado" |
| **Amaranth Crimson** | `#C50720` | Destaque removível |

---

## 3. TIPOGRAFIA

### Fontes
| Tipo | Fonte | Uso |
|------|-------|-----|
| **Display / H1-H2** | Poppins (Bold, 700) | Títulos de página, hero |
| **Corpo** | Inter (Regular 400, Medium 500) | Parágrafos, navegação |
| **Monospace** | Space Mono | Dados estatísticos, preços |

### Escala de Tamanho
```
H1: 48px / 3rem      (Desktop) | 32px (Mobile)
H2: 36px / 2.25rem    (Desktop) | 24px (Mobile)
H3: 24px / 1.5rem     (Desktop) | 20px (Mobile)
H4: 18px / 1.125rem   (Desktop) | 16px (Mobile)
Body: 16px / 1rem     (Padrão)
Small: 14px / 0.875rem (Legendas, metadados)
```

---

## 4. SÍMBOLOS GRÁFICOS

### Padrões Decorativos
- **`DG4b452508`** (Oval): Destaque de imagens, efeitos ópticos
- **`DG80133558`** (Ponto): Marcadores de mapa de cor, decorativos
- **`DGef015bed`** (Isso): Elemento de navegação dinâmica

### Ícones (Lucide React)
```
bike, map-pin, phone, clock, shield, package, 
chevron-right, star, quote, whatsapp, arrow-right,
mail, menu, x, check-circle, alert-circle
```

---

## 5. SOMBRAS E BORDAS

```css
/* Sombra principal */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Sombra hover */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Border radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

## 6. ANIMATION TOKENS

```css
/* Durations */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;

/* Easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
```

---

## 7. COMPONENTES PRINCIPAIS

### 7.1 Button
```
Estado Normal:   bg-gradient-to-r from-orange-600 to-orange-500
Hover:           bg-gradient-to-r from-orange-500 to-orange-400
Ativa:           scale-[0.98]
Texto:           text-white font-bold rounded-md
Padding:         px-6 py-3
```

### 7.2 Card
```
Fundo:           bg-white
Borda:           rounded-xl border border-gray-100
Sombra:          shadow-md hover:shadow-lg
Transicao:       transition-shadow duration-300
```

### 7.3 Header
```
Fondo:           bg-gradient-to-r from-gray-900 to-gray-950
Texto:           text-white
Altura:          h-16 (mobile) / h-20 (desktop)
Posicao:         fixed top-0 z-50
```

### 7.4 Hero Section
```
Fondo:           linear-gradient(to right, #041A36 0%, #1A3058 70%, #FF6B00 100%)
Elementos:       Texto sobreposto esquerda, mockup celular (direita)
```

### 7.5 WhatsApp Button (Float)
```
Forma:           rounded-full
Cor:             bg-[#25D366]
Icone:           Icone WhatsApp branco
Sombr:           shadow-lg hover:shadow-xl
Posicao:         fixed bottom-4 right-4 z-50
```

### 7.6 Service Grid
```
Layout:          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Espacamento:     gap-6
Card:            Padrão Card (acima)
```

### 7.7 Neighborhood Card
```
Layout:          Flex row (imagem + info)
Imagem:          w-24 h-24 rounded-lg object-cover
Info:            Flex-col com nome, tempo, CTA
```

### 7.8 Footer
```
Fondo:           bg-gray-900
Texto:           text-gray-400
Layout:          Grid 4-colunas (desktop), 1-coluna (mobile)
Secoes:          Logo+Desc, Links Rapidos, Servicos, Contato
```

---

## 8. RESPONSIVIDADE

| Breakpoint | Largura | Uso |
|------------|---------|-----|
| **sm** | 640px | Celulares grandes |
| **md** | 768px | Tablets |
| **lg** | 1024px | Notebooks |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Monitores grandes |

---

## 9. DECLARACAO DE ESTRATEGIA DE DESIGN E COR

> "Cores vibrantes como **laranja, mangue, palha, amarelo, laranja-manga** transmitem energia e velocidade, fundamentais para uma marca de motofrete."
>
> "We whites e off-whites equilibram a energia, tornando o design limpo e profissional."
>
> "Tomadas de azul profundo (noite tardia) criam fundamentos elegantes para hero sections/secoes escuras com texto em tons vibrantes como super-laranja e dália."

---

## 10. ICONOGRAFIA E IMAGENS

### Estilo de Fotografia
- **Frota:** Fotos de baunilha da frota, itens de entrega no manípulo da moto
- **Equipe:** Fotos profissionais dos motoboys com uniformes
- **Itens:** Caixas, caixas de correio, documentos - cores: laranja, branco e creme
- **Localizacao:** Bairros de Guarulhos, comércios e prédios corporativos

### Estilo de Ícones
- **Família:** Lucide React
- **Estilo:** Linear/outline com contornos finos
- **Tamanho base:** 24px

---

*Documento: DESIGN_SYSTEM.md*
*Versao: 1.0*
*Data: 21/03/2025*
