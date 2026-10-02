"use client";

import { useMemo, useState } from "react";
import { waLink } from "@/lib/site";
import { PRICING, formatBRL, quotePrice, quoteWait } from "@/data/pricing";

export function OrcamentoForm() {
  const [km, setKm] = useState(8);
  const [paradas, setParadas] = useState(1);
  const [esperaMin, setEsperaMin] = useState(0);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");

  const base = useMemo(() => quotePrice(km), [km]);
  const espera = useMemo(() => quoteWait(esperaMin), [esperaMin]);
  const total = useMemo(
    () => Math.round((base + espera) * 100) / 100,
    [base, espera]
  );

  const msg = `Olá! Fiz a simulação no site (tabela Moto11): ${km} km, ${paradas} parada(s), espera de ${esperaMin} min. Estimativa: ${formatBRL(total)} (0–8 km R$ 35 fixo + R$ 2,50/km extra; espera com 15 min de tolerância + R$ 0,60/min). Origem: ${origem || "-"} / Destino: ${destino || "-"}. Pode confirmar o valor final?`;

  return (
    <div className="grid gap-6 rounded-2xl border p-6 sm:grid-cols-2 sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="km" className="font-semibold">Distância estimada (km): {km} km</label>
          <input
            id="km"
            type="range"
            min={1}
            max={60}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            className="mt-2 w-full"
          />
          <p className="text-sm text-zinc-600">
            0–8 km: {formatBRL(PRICING.basePrice)} fixo · acima de 8 km: +{" "}
            {formatBRL(PRICING.extraPerKm)}/km extra.
          </p>
        </div>
        <div>
          <label htmlFor="paradas" className="font-semibold">Paradas</label>
          <select
            id="paradas"
            value={paradas}
            onChange={(e) => setParadas(Number(e.target.value))}
            className="mt-2 w-full rounded-lg border px-3 py-2"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n} parada{n > 1 ? "s" : ""}</option>
            ))}
          </select>
          <p className="mt-1 text-sm text-zinc-600">
            O valor é calculado por distância + espera. Informe o roteiro completo no
            WhatsApp para otimizarmos as paradas.
          </p>
        </div>
        <div>
          <label htmlFor="espera" className="font-semibold">Tempo de espera estimado: {esperaMin} min</label>
          <input
            id="espera"
            type="range"
            min={0}
            max={60}
            value={esperaMin}
            onChange={(e) => setEsperaMin(Number(e.target.value))}
            className="mt-2 w-full"
          />
          <p className="text-sm text-zinc-600">
            {PRICING.waitToleranceMin} min de tolerância inclusos · após:{" "}
            {formatBRL(PRICING.waitPerMin)}/min.
          </p>
        </div>
        <div className="grid gap-3">
          <input value={origem} onChange={(e) => setOrigem(e.target.value)} placeholder="Bairro de origem (ex: Centro)" className="rounded-lg border px-3 py-2" />
          <input value={destino} onChange={(e) => setDestino(e.target.value)} placeholder="Bairro de destino (ex: Cumbica)" className="rounded-lg border px-3 py-2" />
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl bg-zinc-950 p-6 text-white">
        <div>
          <p className="text-sm text-zinc-400">Estimativa pela tabela real Moto11 (a confirmar)</p>
          <p className="mt-1 text-5xl font-extrabold">{formatBRL(total)}</p>
          <p className="mt-3 text-sm text-zinc-300">
            {formatBRL(base)} pela distância ({km} km)
            {espera > 0 ? ` + ${formatBRL(espera)} de espera (${esperaMin} min)` : " · sem cobrança de espera"}.
            O preço final é confirmado no WhatsApp com coleta, prazo e tipo de volume — sem surpresa.
          </p>
          <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs leading-relaxed text-amber-200">
            Cartórios, shopping e aeroporto: cotação à parte. Atendimento de segunda a
            sexta, das 8h às 18h.
          </p>
        </div>
        <a
          href={waLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-success px-6 py-3 font-bold text-white hover:bg-brand-900"
        >
          Confirmar valor no WhatsApp
        </a>
      </div>
    </div>
  );
}
