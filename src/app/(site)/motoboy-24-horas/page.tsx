import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Horário de Atendimento da Moto11 em Guarulhos",
  description: "A Moto11 atende de segunda a sexta, das 8h às 18h. Não há atendimento noturno, aos fins de semana ou feriados.",
  alternates: { canonical: `${SITE.baseUrl}/motoboy-24-horas` },
  robots: { index: false, follow: true },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Quero cotar uma entrega em horário comercial. Origem: (informar) / Destino: (informar) / Item: (informar).",
)}`;

export default function Motoboy24HorasPage() {
  return (
    <>
      <PageHero
        eyebrow="Horário Oficial"
        title="A Moto11 não atende 24 horas."
        description="Atendimento exclusivo de segunda a sexta, das 8h às 18h. Não operamos à noite, de madrugada, aos fins de semana ou em feriados para garantir a segurança viária dos pilotos e a pontualidade na sua entrega."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Horário de atendimento</span>
        </nav>
      </PageHero>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-line bg-surface-warm p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary-700 shrink-0" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold text-brand-950">
                Precisa de uma entrega em horário comercial?
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Envie origem, destino e item pelo WhatsApp. O atendente avalia a solicitação durante o expediente (8h às 18h) e confirma disponibilidade e condições. Mensagens enviadas fora do horário podem ser respondidas no próximo dia útil.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/precos"
                className="inline-flex items-center gap-2 font-bold text-primary-700 hover:underline"
              >
                Como funciona a cotação <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="prose max-w-none mt-12 space-y-6 text-muted">
            <h2 className="font-display text-2xl font-bold text-brand-950">
              Por que a Moto11 não divulga operação 24 horas
            </h2>
            <p className="leading-relaxed">
              Muitos anúncios na internet usam o termo “motoboy 24 horas” apenas como chamariz comercial. No entanto, na prática de Guarulhos e São Paulo, manter plantões noturnos contínuos e de madrugada exige operações diferenciadas que muitas vezes comprometem a segurança dos profissionais.
            </p>
            <p className="leading-relaxed">
              A Moto11 adota transparência absoluta: nosso expediente é de segunda a sexta-feira, das 08h00 às 18h00. Focamos nossa frota nos períodos de maior demanda produtiva da cidade: o expediente bancário, cartórios, fóruns judiciais e a expedição de indústrias e comércios da Via Dutra e de Cumbica.
            </p>
            <p className="leading-relaxed">
              O atendimento ocorre em horário comercial. Para que a solicitação seja avaliada, envie origem, destino, item e o prazo desejado pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-24h">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-24h" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Deseja agendar uma entrega para o próximo dia útil?
            </h2>
            <p className="mt-2 text-orange-50">
              Deixe sua mensagem no WhatsApp com os dois endereços e retornamos com a cotação.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
