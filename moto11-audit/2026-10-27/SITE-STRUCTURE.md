# Arquitetura proposta sem expansão

Preservar rotas atuais até revisão de intenção com dados. Não migrar URLs apenas para simetria.

- `/`: intenção principal de motoboy em Guarulhos; proposta e cotação.
- `/servicos`: hub navegável das 30 modalidades existentes. Cada modalidade deve receber link contextual e ter finalidade distinta.
- `/servicos/[slug]`: escopo, restrições, processo, evidência e cotação; relacionados por afinidade, não primeiros registros fixos.
- `/areas-atendidas` → 40 `/areas/[slug]`: cobertura GU verificada.
- `/sao-paulo` → 40 `/sao-paulo/[slug]`: separar capital e outros municípios nos rótulos sem migrar rotas automaticamente.
- `/precos`: critérios de orçamento e condições aprovadas, sem tabela inventada.
- `/sobre-nos`, `/contato`, `/faq`: confiança, ação e dúvidas reais.
- `/termos-uso`, `/politica-privacidade`: acessíveis pelo footer; noindex fora de sitemap.
- `/motoboy-24-horas`: noindex atual; manter fora de sitemap se essa for intenção. Não apresentar operação 24h não comprovada.

## Contrato de dados

Relação regional deve guardar destino validado ou coleção+slug. Links entre bairros de cidades diferentes não podem receber prefixo fixo incorreto. Testar slugs únicos, destinos existentes, URL canônica e status de indexação pretendida. Destino de serviço inexistente não deve ser criado apenas para satisfazer link errado.

## Schema

Uma entidade central SAB; Service por modalidade e área atendida verdadeira; BreadcrumbList por hierarquia real. Não criar LocalBusiness/filial fictícia por bairro. Validar markup externo antes de prometer elegibilidade. FAQ útil independe de rich result.

## Sitemap

122 entradas atuais menos 3 noindex = 119 candidatas, se intenção restante for confirmada. Não chamar 119 de páginas indexadas. lastmod deve representar atualização efetiva; valor fixo antigo não é erro por si só. Sem inventar datas diárias.
