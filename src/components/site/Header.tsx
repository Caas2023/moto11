"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL_LINK, PHONE_WA } from "@/lib/seo";

const QUOTE_MESSAGE = "Olá! Quero calcular uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar) / Horário desejado: (informar).";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Áreas atendidas", href: "/areas-atendidas" },
  { label: "Sobre", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-h-11 items-center" aria-label="Moto11 — página inicial">
          <Image src="/images/logo-moto11-oficial.png" alt="Moto11 Motoboy" width={152} height={51} className="h-auto w-36 sm:w-40" priority />
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
            href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(QUOTE_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex h-11 items-center gap-2 rounded-full bg-success px-5 text-sm font-bold text-white transition-colors hover:bg-brand-900"
          >
            <WhatsAppIcon className="h-4 w-4" /> Calcular orçamento
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
              href={`https://wa.me/${PHONE_WA}?text=${encodeURIComponent(QUOTE_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
               className="quote-cta inline-flex h-11 items-center justify-center rounded-full bg-success text-sm font-bold text-white"
            >
              <><WhatsAppIcon className="h-5 w-5" /> Calcular orçamento no WhatsApp</>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
