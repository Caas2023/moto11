import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL_LINK, PHONE_WA } from "@/lib/seo";

const SERVICOS = [
  { label: "Entrega expressa", href: "/servicos" },
  { label: "Coleta agendada", href: "/servicos" },
  { label: "Motoboy para empresas", href: "/servicos" },
  { label: "Entregas para e-commerce", href: "/servicos" },
];

const NAVEGACAO = [
  { label: "Serviços", href: "/servicos" },
  { label: "Áreas atendidas", href: "/areas-atendidas" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  const waLink = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Olá! Quero solicitar um orçamento com a Moto11.")}`;

  return (
    <footer className="w-full bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">Moto11</p>
          <p className="mt-1 text-sm font-medium text-slate-400">
            Moto11 – Empresa de Motoboy
          </p>
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
             className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-primary-700 px-5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-950"
          >
            Pedir orçamento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
