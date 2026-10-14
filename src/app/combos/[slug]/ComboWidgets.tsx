"use client";

import { useEffect, useMemo, useState } from "react";
import { PHONE_WA } from "@/lib/seo";

/** Placeholder de contagem regressiva para o corte same-day (16h). */
export function Countdown({ slug }: { slug: string }) {
  const [now, setNow] = useState<Date | null>(() =>
    typeof window === "undefined" ? null : new Date()
  );

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const { label, urgent } = (() => {
    if (!now) return { label: "calculando janela de hoje…", urgent: false };
    const cutoff = new Date(now);
    cutoff.setHours(16, 0, 0, 0);
    const diff = cutoff.getTime() - now.getTime();
    if (diff <= 0)
      return {
        label: "corte de hoje encerrado — agende a primeira janela de amanhã",
        urgent: false,
      };
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1000);
    const pad = (n: number) => String(n).padStart(2, "0");
    return {
      label: `faltam ${pad(h)}:${pad(m)}:${pad(s)} para o corte same-day de hoje`,
      urgent: h === 0 && m < 30,
    };
  })();

  return (
    <div
      data-combo={slug}
      className={`rounded-xl border px-4 py-3 text-sm font-medium ${
        urgent
          ? "border-red-300 bg-red-50 text-red-800"
          : "border-amber-300 bg-amber-50 text-amber-900"
      }`}
    >
      <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-current" />
      {label}
    </div>
  );
}

/** Formulário de orçamento que monta a mensagem e abre o WhatsApp. */
export function OrcamentoForm({
  slug,
  h1,
}: {
  slug: string;
  h1: string;
}) {
  const [nome, setNome] = useState("");
  const [coleta, setColeta] = useState("");
  const [entrega, setEntrega] = useState("");
  const [detalhes, setDetalhes] = useState("");

  const href = useMemo(() => {
    const text = `Olá! Quero orçamento (${slug}). Nome: ${nome || "-"} | Coleta: ${coleta || "-"} | Entrega: ${entrega || "-"} | Detalhes: ${detalhes || "-"}`;
    return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`;
  }, [slug, nome, coleta, entrega, detalhes]);

  const input =
    "w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="grid gap-3"
    >
      <p className="text-sm text-zinc-600">
        Preencha os endereços para agilizar — a resposta chega com valor
        fechado para: <strong>{h1}</strong>
      </p>
      <input
        className={input}
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        className={input}
        placeholder="Endereço de coleta"
        value={coleta}
        onChange={(e) => setColeta(e.target.value)}
        required
      />
      <input
        className={input}
        placeholder="Endereço de entrega"
        value={entrega}
        onChange={(e) => setEntrega(e.target.value)}
        required
      />
      <textarea
        className={input}
        placeholder="Detalhes (o que será transportado, prazo, vara/cartório…)"
        rows={3}
        value={detalhes}
        onChange={(e) => setDetalhes(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Enviar e receber orçamento no WhatsApp
      </button>
    </form>
  );
}
