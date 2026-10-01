"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [assunto, setAssunto] = useState("Entrega urgente");
  const [mensagem, setMensagem] = useState("");

  const href = waLink(
    `Olá! Sou ${nome || "(nome)"} (${tel || "telefone"}). Assunto: ${assunto}. Detalhes: ${mensagem || "-"}`
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank");
      }}
      className="grid gap-4 rounded-2xl border p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="font-semibold">Nome</label>
          <input id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>
        <div>
          <label htmlFor="tel" className="font-semibold">Telefone / WhatsApp</label>
          <input id="tel" required value={tel} onChange={(e) => setTel(e.target.value)} placeholder="(11) 9XXXX-XXXX" className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>
      </div>
      <div>
        <label htmlFor="assunto" className="font-semibold">Assunto</label>
        <select id="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2">
          <option>Entrega urgente</option>
          <option>Coleta programada</option>
          <option>Contrato para empresa</option>
          <option>Serviço de cartório / banco</option>
          <option>Outro assunto</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="font-semibold">Mensagem</label>
        <textarea id="mensagem" rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Descreva origem, destino, volume e prazo desejado" className="mt-1 w-full rounded-lg border px-3 py-2" />
      </div>
      <button type="submit" className="rounded-full bg-emerald-500 px-7 py-3 font-bold text-zinc-950 hover:bg-emerald-400">
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-zinc-500">Ao enviar, seus dados abrem no WhatsApp. Não armazenamos mensagens neste formulário demonstrativo.</p>
    </form>
  );
}
