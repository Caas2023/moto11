/**
 * Tabela de preços REAL Moto11 — fonte única de verdade.
 * Fornecida pelo cliente. Não inventar outros valores.
 *
 * Regra: 0–8 km = R$ 35,00 fixo.
 * Acima de 8 km: R$ 35,00 + R$ 2,50 por km extra.
 * Espera: 15 min de tolerância, após R$ 0,60/min.
 * Cartórios, shopping, aeroporto: cotação à parte (preço diferente).
 * Horário: segunda a sexta, 8h às 18h.
 */

export const PRICING = {
  baseKm: 8,
  basePrice: 35.0,
  extraPerKm: 2.5,
  waitToleranceMin: 15,
  waitPerMin: 0.6,
  hoursDisplay: "Segunda a sexta, das 8h às 18h",
  quoteExceptions: ["cartórios", "shopping", "aeroporto"],
} as const;

export function quotePrice(km: number): number {
  if (!Number.isFinite(km) || km <= 0) return PRICING.basePrice;
  if (km <= PRICING.baseKm) return PRICING.basePrice;
  return PRICING.basePrice + (km - PRICING.baseKm) * PRICING.extraPerKm;
}

export function quoteWait(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes <= PRICING.waitToleranceMin) return 0;
  return (minutes - PRICING.waitToleranceMin) * PRICING.waitPerMin;
}

export function formatBRL(v: number): string {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
