"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL_LINK, PHONE_WA } from "@/lib/seo";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Áreas atendidas", href: "/areas-atendidas" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Moto11 — página inicial">
          <span className="flex h-10 w-10 -skew-x-6 items-center justify-center bg-primary-700 font-display text-lg font-bold text-white">
            <span className="skew-x-6">M</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-brand-950">
              Moto11
            </span>
            <span className="block text-xs font-medium text-muted">
              Motoboy em Guarulhos/SP
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
               className="rounded-full px-3 py-2 text-sm font-semibold text-brand-900 transition-colors hover:bg-surface-warm hover:text-primary-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${PHONE_TEL_LINK}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-brand-950 transition-colors hover:border-brand-900"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Olá! Preciso de um motoboy em Guarulhos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary-700 px-5 text-sm font-bold text-white transition-colors hover:bg-brand-950"
          >
            Pedir orçamento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-brand-950 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div className={cn("border-t border-line bg-surface lg:hidden", open ? "block" : "hidden")}>
        <nav aria-label="Navegação móvel" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-surface-warm"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 pb-2">
            <a
              href={`tel:${PHONE_TEL_LINK}`}
               className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line text-sm font-semibold text-brand-950"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Ligar {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Olá! Preciso de um motoboy em Guarulhos.")}`}
              target="_blank"
              rel="noopener noreferrer"
               className="inline-flex h-11 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white"
            >
              Pedir motoboy no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
