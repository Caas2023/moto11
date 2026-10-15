"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { waLink } from "@/lib/site";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [assunto, setAssunto] = useState("Entrega urgente");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const href = waLink(
    `Olá! Sou ${nome || "(nome)"} (${tel || "telefone"}). Assunto: ${assunto}. Detalhes da entrega: ${mensagem || "-"}`
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="grid gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8"
      aria-label="Formulário de contato e orçamento"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="text-sm font-semibold text-brand-950">
            Nome completo
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="mt-1 min-h-11 w-full rounded-lg border border-line bg-surface-warm px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          />
        </div>
        <div>
          <label htmlFor="tel" className="text-sm font-semibold text-brand-950">
            Telefone / WhatsApp
          </label>
          <input
            id="tel"
            required
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            placeholder="(11) 9XXXX-XXXX"
            className="mt-1 min-h-11 w-full rounded-lg border border-line bg-surface-warm px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          />
        </div>
      </div>
      <div>
        <label htmlFor="assunto" className="text-sm font-semibold text-brand-950">
          Tipo de solicitação
        </label>
        <select
          id="assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          className="mt-1 min-h-11 w-full rounded-lg border border-line bg-surface-warm px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <option>Entrega urgente</option>
          <option>Coleta programada</option>
          <option>Contrato para empresa</option>
          <option>Serviço de cartório / banco</option>
          <option>Outro assunto</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="text-sm font-semibold text-brand-950">
          Detalhes da rota e do item
        </label>
        <textarea
          id="mensagem"
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Descreva origem (rua/bairro), destino, tipo de volume e prazo desejado"
          className="mt-1 w-full rounded-lg border border-line bg-surface-warm px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        />
      </div>

      <button
        type="submit"
        className="quote-cta mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 text-base font-bold text-white transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {enviado ? "Reenviar pelo WhatsApp" : "Enviar solicitação pelo WhatsApp"}
      </button>

      {enviado && (
        <p className="rounded-lg bg-surface-warm p-3 text-center text-xs font-medium text-success" role="status">
          ✓ Janela do WhatsApp aberta. Se não abriu automaticamente, verifique se seu navegador bloqueou pop-ups.
        </p>
      )}

      <p className="text-xs text-muted">
        Ao enviar, seus dados são organizados diretamente no WhatsApp da central para confirmação imediata de valor e disponibilidade.
      </p>
    </form>
  );
}
