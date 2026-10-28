# Execução do plano aprovado

Plano: `/home/caas/.claude/plans/lovely-juggling-dusk.md`. Aplicação: raiz `src/`, confirmada pelo usuário. Branch `fix/seo-integridade-cotacao`. Alterações anteriores preservadas; `web/` não modificada. Sem commit ou deploy.

## Decisões e progresso

- Ruling: usar branch local sem worktree — usuário não solicitou worktree; preservar working tree atual é necessário para corrigir a versão auditada.
- Ruling: manter seletores como botões com aria-pressed e grupo nomeado — preserva comportamento e layout; risco residual exige teste interativo da mudança de categoria.
- Links regionais: removidas somente as 12 referências inválidas após autorização específica. Nenhuma página removida. Permanecem 308 relações existentes e válidas por coleção; teste verifica também listas não vazias e duplicatas.
- Hub: 30 serviços têm links reais gerados por SERVICES; títulos extraídos do campo title. Não usados dados legados de internal-links.ts.
- Sitemap: excluídas /motoboy-24-horas, /termos-uso e /politica-privacidade. Noindex intencional preservado; esperado 119 entradas.
- Legais: canonical próprio com helper existente; robots continua noindex/follow.
- Cotação: grupos nomeados e aria-pressed em categorias, nas duas variantes. Fluxo/mensagem WhatsApp preservados.
- TDD: scripts/test-seo-integrity.cjs executado antes da implementação: 8 falhas esperadas; após implementação: 8 aprovados, 0 falhas. Testes renderizam componentes reais e executam módulos TypeScript reais sem instalar dependências.

## Promessas: validação operacional pendente

Não há evidência suficiente para confirmar ou negar capacidades. Não reescrever factualidade sem responsável da operação. Solicitar resposta por alegação:

| Alegação ativa | Evidência/decisão necessária |
|---|---|
| Coleta em minutos e prazos específicos | Janela real por região/horário e limites de disponibilidade |
| Rastreio em tempo real | Ferramenta/link ou procedimento disponibilizado ao cliente |
| Foto/assinatura/protocolo universal | Modalidades que incluem comprovante e exceções |
| Material médico/cadeia térmica/biossegurança | Materiais aceitos, procedimentos e requisitos aplicáveis comprovados |
| Transporte de valores/credenciamento | Escopo permitido e autorização/capacidade operacional |
| Economia acima de 30% e espera R$0,60/min | Base de comparação e condição comercial aprovada |

Referências de origem e exemplos detalhados: findings/content-programmatic-local.md e findings/geo-agentic.md. Nenhuma promessa foi considerada validada apenas por aparecer no código.

## Medição: decisão pendente

Usuário informou “Sem analytics”. Não foi adicionado pixel, rastreador, endpoint ou evento sem destino durável. Evento local isolado não seria medição real.

Proposta para etapa posterior: escolher ferramenta e política de consentimento/privacidade; medir intenção de WhatsApp com rota/posição/categoria, sem nome/telefone/endereço/mensagem no analytics. Separar clique de conversa qualificada, orçamento e venda mediante conciliação operacional. Não há leads medidos nesta fase.

## Verificação final

- 8/8 testes de regressão aprovados, confirmados também pela revisão independente.
- TypeScript aprovado; ESLint da aplicação sem erros e com 12 avisos preexistentes de imports não usados.
- Build final aprovado.
- Crawl HTTP da build corrigida: 119 URLs do sitemap com HTTP 200; 30 links de serviços no hub; zero destinos de navegação não resolvidos; canonical próprio e noindex confirmados nas duas páginas legais.
- A primeira checagem HTTP confundiu link de recurso manifest com navegação; corrigido o verificador para analisar somente âncoras, sem alteração de aplicação para contornar o teste.
- Revisão independente não identificou bug nas alterações; lacuna não bloqueante: teste interativo de troca de categoria continua pendente. Os testes atuais verificam markup real inicial, não navegação browser/leitor de tela.

## Limites de verificação

Testes de renderização estática verificam estado inicial, links e metadata. Não substituem browser interativo/leitor de tela. Contraste computado, fallback de popup e mudança interativa de categoria não foram alterados por suposição. Métricas públicas/CWV/GSC permanecem indisponíveis conforme auditoria.
