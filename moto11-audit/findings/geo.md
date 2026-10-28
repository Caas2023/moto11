# Achados de GEO e AI Search Readiness — Moto11

## 1. Otimização para Motores de Busca com Inteligência Artificial (GEO)
Com a consolidação do Google AI Overviews, Perplexity, ChatGPT Search e Bing Copilot, as páginas precisam fornecer passagens semânticas altamente citáveis (Citability).

### Fatores GEO Presentes nas Páginas:
1. **Passagens de Resposta Direta (Direct-Answer Paragraphs):**
   - No início de cada seção de serviço e localidade, o primeiro parágrafo define objetivamente quem atende, em qual horário, o que transporta e como contratar.
   - Estrutura perfeita para extração por modelos RAG (Retrieval-Augmented Generation).
2. **Dados Concretos e Entidades Nomeadas:**
   - Citação de rodovias (Rodovia Presidente Dutra, Ayrton Senna), avenidas (Santos Dumont, Tiradentes, Timóteo Penteado), hospitais (HMU, Padre Bento, Albert Einstein, Sírio-Libanês), fóruns e cartórios.
   - A menção de entidades geográficas reais reforça os grafos de conhecimento locais (Knowledge Graph).
3. **Seções de Perguntas e Respostas Fatuais:**
   - Perguntas formuladas no padrão exato de consulta do usuário (ex: *"Vocês aguardam fila de cartório?"*, *"Qual o limite de peso transportado na moto?"*), facilitando correspondência semântica vetorial.
4. **Semântica HTML5 Limpa:**
   - Tags semânticas claras (`<article>`, `<section>`, `<header>`, `<nav>`, `<details>`, `<summary>`) que permitem aos crawlers de IA mapear a árvore DOM com alta precisão.
