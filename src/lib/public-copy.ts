const unpublishedCommercialDetail = /\b(?:preç[oa]s?|price|valores?|orçamento fechado|taxas?|tarifas?|custos?|quanto custa|descontos?|econômic[oa]s?|mais barato|investimento|cobrança|cobrado|rastreio|rastreamento|rastreabilidade|comprov\w*|protocolo|foto(?:gráfic[oa])?|assinatura|carimbo|baú|lacre|romaneio|bolsa térmica|cadeia do frio|gps|piloto(?:s)? (?:fixo|dedicado|posicionado)|em tempo real|prazo|duraç\w*|estimativa|previsão|garanti[am]|seguro|nota fiscal|faturamento|pix|cartão|cnpj|sla|plantão|\d+\s*kg|\d+\s*litros?)\b|R\$\s?\d|\b\d+(?:[.,]\d+)?\s+reais\b/i;
const operationalClaim = /\b(?:atendemos|atende|operamos|realizamos|fazemos|transportamos|coletamos|entregamos|retiramos|buscamos|enviamos|emitimos|fornecemos|mantemos|montamos|definimos|acompanhamos|monitoramos|confirmamos|cumprimos|garantimos|planejamos?|organizamos|nossos pilotos|nossa operação|a moto11|é (?:feita|realizada|entregue|transportado|coletado|enviado|confirmado|disponibilizado|informado)|são (?:transportados|entregues|coletados))\b/i;

export function publicCopy(text: string): string {
  return text
    .split(/(?<=[.!?])\s+/)
    .filter(
      (sentence) =>
        !unpublishedCommercialDetail.test(sentence) &&
        !operationalClaim.test(sentence) &&
        !/^(?:sim|não)\.?$/i.test(sentence.trim()),
    )
    .join(" ");
}
