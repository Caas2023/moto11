"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";

const CATEGORIAS = [
  { id: "docs", label: "Documentos e Malotes", icon: "📄" },
  { id: "encomenda", label: "Pacotes e Peças", icon: "📦" },
  { id: "empresas", label: "Empresas e Rotas", icon: "🏢" },
  { id: "especial", label: "Cartório / Aeroporto / Shopping", icon: "⚖️" },
] as const;

export function CotacaoForm({ compact = false }: { compact?: boolean }) {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [categoria, setCategoria] = useState<string>("docs");

  const origemId = useId();
  const destinoId = useId();

  const categoriaAtiva = CATEGORIAS.find((c) => c.id === categoria) || CATEGORIAS[0];

  const buildWhatsAppMessage = () => {
    const hasOrigem = origem.trim().length > 0;
    const hasDestino = destino.trim().length > 0;

    if (hasOrigem || hasDestino) {
      return `Olá! Gostaria de cotar uma entrega da categoria *${categoriaAtiva.label}*.
• Origem: ${hasOrigem ? origem.trim() : "(a combinar)"}
• Destino: ${hasDestino ? destino.trim() : "(a combinar)"}

Poderia me informar a disponibilidade e o valor para essa rota?`;
    }

    return `Olá! Gostaria de solicitar uma cotação para entrega de *${categoriaAtiva.label}* em Guarulhos/SP. Poderia me informar como funciona e o valor da rota?`;
  };

  const whatsappUrl = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  if (compact) {
    return (
      <aside
        className="rounded-2xl border border-white/20 bg-white/95 p-5 text-foreground shadow-2xl backdrop-blur-md sm:p-6"
        aria-label="Cotação rápida de entrega"
      >
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Cotação Imediata
            </p>
          </div>
          <span className="rounded-full bg-surface-warm px-2.5 py-0.5 text-xs font-semibold text-brand-950">
            Resposta rápida
          </span>
        </div>

        <div className="mt-4 space-y-3.5">
          <div>
            <label htmlFor={origemId} className="block text-xs font-bold text-brand-950">
              Endereço ou Bairro de Coleta (Origem)
            </label>
            <input
              id={origemId}
              type="text"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              placeholder="Ex: Centro, Cumbica, Macedo..."
              className="mt-1.5 h-11 w-full rounded-xl border border-line bg-surface px-3.5 text-sm text-brand-950 transition-colors placeholder:text-muted focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
            />
          </div>

          <div>
            <label htmlFor={destinoId} className="block text-xs font-bold text-brand-950">
              Endereço ou Bairro de Entrega (Destino)
            </label>
            <input
              id={destinoId}
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Ex: Bonsucesso, Aeroporto, SP..."
              className="mt-1.5 h-11 w-full rounded-xl border border-line bg-surface px-3.5 text-sm text-brand-950 transition-colors placeholder:text-muted focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
            />
          </div>

          <div>
            <span className="block text-xs font-bold text-brand-950 mb-1.5">
              O que você precisa transportar?
            </span>
            <div role="group" aria-label="Categoria da entrega" className="grid grid-cols-2 gap-1.5">
              {CATEGORIAS.map((cat) => {
                const isSelected = categoria === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setCategoria(cat.id)}
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-left text-xs font-medium transition-all ${
                      isSelected
                        ? "border-primary-600 bg-primary-50/70 text-primary-900 font-semibold shadow-xs"
                        : "border-line bg-surface text-muted hover:border-slate-300 hover:text-brand-950"
                    }`}
                  >
                    <span aria-hidden="true">{cat.icon}</span>
                    <span className="truncate">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-success px-4 text-center text-sm font-bold text-white shadow-lg shadow-success/20 transition-all hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>Consultar Valor no WhatsApp</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>

          <p className="text-center text-[11px] text-muted flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary-600 shrink-0" aria-hidden="true" />
            Sem taxas escondidas · Preço fechado antes da saída
          </p>
        </div>
      </aside>
    );
  }

  // Versão completa para a página /precos e páginas de serviço
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-xl sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Cotação Sob Demanda
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-brand-950 sm:text-2xl">
            Simule seu trajeto e receba o valor exato
          </h3>
        </div>
        <p className="text-xs text-muted sm:text-right">
          Atendimento humano imediato<br className="hidden sm:inline" /> de seg. a sex., 8h às 18h
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={origemId} className="block text-sm font-bold text-brand-950">
            Ponto de Coleta (Origem)
          </label>
          <input
            id={origemId}
            type="text"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            placeholder="Rua, número ou bairro em Guarulhos"
            className="mt-2 h-12 w-full rounded-xl border border-line bg-surface px-4 text-sm text-brand-950 transition-colors placeholder:text-muted focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          />
        </div>

        <div>
          <label htmlFor={destinoId} className="block text-sm font-bold text-brand-950">
            Ponto de Entrega (Destino)
          </label>
          <input
            id={destinoId}
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Endereço de destino ou cidade (SP/Guarulhos)"
            className="mt-2 h-12 w-full rounded-xl border border-line bg-surface px-4 text-sm text-brand-950 transition-colors placeholder:text-muted focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-bold text-brand-950 mb-2.5">
          Tipo de Item / Serviço Necessário
        </label>
        <div role="group" aria-label="Categoria da entrega" className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIAS.map((cat) => {
            const isSelected = categoria === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setCategoria(cat.id)}
                className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                  isSelected
                    ? "border-primary-600 bg-primary-50/80 text-primary-950 font-semibold shadow-xs"
                    : "border-line bg-surface text-muted hover:border-slate-300 hover:text-brand-950"
                }`}
              >
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <span className="text-xs font-medium leading-snug">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-surface-warm p-5 border border-line/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-bold text-brand-950 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
              Cotação em tempo real pelo WhatsApp
            </p>
            <p className="text-xs text-muted max-w-md">
              Avaliamos a rota de moto real, calculamos a melhor previsão e enviamos o orçamento final sem compromisso.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2.5 rounded-xl bg-success px-6 text-sm font-bold text-white shadow-lg shadow-success/20 transition-all hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Chamar no WhatsApp para Cotar</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
