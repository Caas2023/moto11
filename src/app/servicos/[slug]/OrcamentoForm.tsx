"use client";

import { useState } from "react";
import type { Service } from "@/data/services";

import { PHONE_WA } from "@/lib/seo";

/** WhatsApp oficial da operação (DDI+DDD+número, só dígitos) — canônico em `@/lib/seo`. */
export const WHATSAPP_NUMBER = PHONE_WA;

interface Props {
  service: Service;
}

export default function OrcamentoForm({ service }: Props) {
  const [nome, setNome] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [detalhes, setDetalhes] = useState("");

  const mensagem = `Olá! Quero um orçamento de ${service.title}. Nome: ${nome || "-"} | Coleta: ${origem || "-"} | Entrega: ${destino || "-"} | Detalhes: ${detalhes || "-"}`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none";

  return (
    <form
      id="orcamento"
      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
    >
      <h2 className="text-xl font-semibold text-zinc-900">
        Solicitar orçamento de {service.title.toLowerCase()}
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        Preencha os campos e envie direto para o nosso WhatsApp. Respondemos em
        minutos no horário comercial.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-700">
          Seu nome
          <input
            className={`${inputClass} mt-1`}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex.: Maria Silva"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          Endereço de coleta
          <input
            className={`${inputClass} mt-1`}
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            placeholder="Ex.: Av. Paulo Faccini, Centro"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          Endereço de entrega
          <input
            className={`${inputClass} mt-1`}
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Ex.: Av. Guarulhos, Vila Augusta"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          O que será transportado?
          <input
            className={`${inputClass} mt-1`}
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            placeholder="Ex.: envelope com contrato, 2 vias"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto"
      >
        Enviar orçamento pelo WhatsApp
      </button>
      <p className="mt-3 text-xs text-zinc-500">
        Tempo médio: {service.tempoMedio} · {service.precoBase}. Sem
        compromisso.
      </p>
    </form>
  );
}
