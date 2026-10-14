"use client";

import { useState } from "react";

const MOCK: Record<string, { status: string; historico: string[] }> = {
  "M11-1001": {
    status: "A caminho da coleta – Centro, Guarulhos",
    historico: ["Pedido recebido", "Piloto designado", "A caminho da coleta"],
  },
  "M11-1002": {
    status: "Em rota de entrega – destino Cumbica",
    historico: ["Pedido recebido", "Coletado no Centro", "Em rota de entrega"],
  },
  "M11-1003": {
    status: "Entregue e assinado às 14h32",
    historico: ["Pedido recebido", "Coletado", "Em rota", "Entregue e assinado"],
  },
};

export function TrackingForm() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  function buscar(e: React.FormEvent) {
    e.preventDefault();
    const key = code.trim().toUpperCase();
    const found = MOCK[key];
    if (found) {
      setResult(found.status);
      setHistory(found.historico);
    } else if (!key) {
      setResult("Digite o código da entrega (ex: M11-1001).");
      setHistory([]);
    } else {
      setResult(`Código ${key} não encontrado na demonstração. Chame no WhatsApp com o comprovante para rastrear sua entrega real.`);
      setHistory([]);
    }
  }

  return (
    <div className="rounded-2xl border p-6 sm:p-8">
      <form onSubmit={buscar} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="track-code" className="sr-only">Código de rastreamento</label>
        <input
          id="track-code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ex: M11-1001"
          className="flex-1 rounded-lg border px-4 py-3"
        />
        <button type="submit" className="rounded-full bg-zinc-950 px-7 py-3 font-bold text-white hover:bg-zinc-800">
          Rastrear
        </button>
      </form>
      {result && (
        <div className="mt-5 rounded-xl bg-zinc-50 p-4">
          <p className="font-bold">{result}</p>
          {history.length > 0 && (
            <ol className="mt-2 list-decimal pl-5 text-sm text-zinc-700">
              {history.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ol>
          )}
          <p className="mt-3 text-xs text-zinc-500">Demonstração com códigos fictícios: M11-1001, M11-1002, M11-1003.</p>
        </div>
      )}
    </div>
  );
}
