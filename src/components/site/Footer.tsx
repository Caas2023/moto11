import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL_LINK, PHONE_WA } from "@/lib/seo";

const QUOTE_MESSAGE = "Olá! Quero calcular uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar) / Horário desejado: (informar).";

const SERVICOS = [
  { label: "Entrega expressa", href: "/servicos" },
  { label: "Coleta agendada", href: "/servicos" },
  { label: "Motoboy para empresas", href: "/servicos" },
  { label: "Entregas para e-commerce", href: "/servicos" },
];

const NAVEGACAO = [
  { label: "Serviços", href: "/servicos" },
  { label: "Áreas atendidas", href: "/areas-atendidas" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
  { label: "Mapa do site", href: "/mapa-do-site" },
];

export function Footer() {
  const waLink = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(QUOTE_MESSAGE)}`;

  return (
    <footer className="w-full bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image src="/images/logo-moto11-oficial.png" alt="Moto11 Motoboy" width={217} height={72} className="h-auto w-48" />
          <address className="mt-4 space-y-2 text-sm leading-6 not-italic">
            <p className="flex items-start gap-2">
               <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
               Guarulhos/SP — serviço sem endereço público de atendimento
            </p>
            <p>
              <a href={`tel:${PHONE_TEL_LINK}`} className="flex items-center gap-2 hover:text-white">
                 <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="flex items-start gap-2">
               <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              Seg. a sex. 8h–18h
            </p>
          </address>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
             className="quote-cta mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-success px-5 text-sm font-bold text-white transition-colors hover:bg-brand-900"
          >
            <><WhatsAppIcon className="h-4 w-4" /> Calcular orçamento</>
          </a>
        </div>

        <nav aria-label="Serviços da Moto11">
          <p className="text-sm font-semibold tracking-wide text-white uppercase">
            Serviços
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICOS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navegação do rodapé">
          <p className="text-sm font-semibold tracking-wide text-white uppercase">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAVEGACAO.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Moto11 – Empresa de Motoboy em Guarulhos/SP.</p>
          <p>Entregas rápidas, coletas agendadas e motoboy para empresas.</p>
        </div>
      </div>
    </footer>
  );
}
