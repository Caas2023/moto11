import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/PageHero";
import { CotacaoForm } from "@/components/site/CotacaoForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solicitar cotação de motoboy em Guarulhos",
  description:
    "Solicite sua cotação de motoboy em Guarulhos ou São Paulo. Toda solicitação é avaliada pelo atendente no WhatsApp, sem confirmação automática.",
  alternates: { canonical: `${SITE.baseUrl}/precos` },
  openGraph: {
    title: "Solicitar cotação de motoboy em Guarulhos",
    description: "Fale com o atendente da Moto11 pelo WhatsApp para solicitar uma cotação.",
    url: `${SITE.baseUrl}/precos`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar uma cotação. Origem: (informar) / Destino: (informar) / Item: (informar). Por favor, encaminhe ao atendente.",
)}`;

const CRITERIOS = [
  {
    icon: MapPin,
    title: "Análise da rota",
    text: "O atendente avalia os endereços e as informações da entrega para orientar sua solicitação.",
  },
  {
    icon: ShieldCheck,
    title: "Confirmação pelo atendente",
    text: "A disponibilidade e as condições são confirmadas pelo atendente antes de qualquer coleta.",
  },
  {
    icon: Clock3,
    title: "Despacho e espera",
    text: "Informe regras de acesso, janelas de horário e possíveis esperas para que o atendente avalie a solicitação.",
  },
  {
    icon: CheckCircle2,
    title: "Locais com regras específicas",
    text: "Entregas em cartórios, shoppings ou no aeroporto podem ter regras de acesso específicas, avaliadas pelo atendente.",
  },
];

const CHECKLIST = [
  {
    step: "1",
    title: "Endereços Completos",
    desc: "Informe rua, número e bairro da coleta e da entrega. Se houver número de sala, bloco ou portaria específica, mencione na mensagem.",
  },
  {
    step: "2",
    title: "Descrição do Volume",
    desc: "Diga se é envelope de documentos, peças, amostras ou caixas para que o atendente avalie as condições de transporte.",
  },
  {
    step: "3",
    title: "Janela de Horário",
    desc: "Indique o horário desejado. O atendimento funciona de segunda a sexta-feira, das 8h às 18h, e a disponibilidade é avaliada pelo atendente.",
  },
  {
    step: "4",
    title: "Contatos de Origem e Destino",
    desc: "Informe os contatos disponíveis na origem e no destino para que o atendente avalie as informações necessárias à solicitação.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Solicitação de cotação de motoboy em Guarulhos",
            serviceType: "Serviço de Entrega e Coleta Expressa",
            provider: {
              "@type": "LocalBusiness",
              name: "Moto11",
              telephone: "+5511957248425",
              areaServed: ["Guarulhos", "São Paulo"],
            },
            description:
              "Solicite uma cotação ao atendente da Moto11 pelo WhatsApp.",
          },
        ]}
      />

      <PageHero
        eyebrow="Atendimento pelo WhatsApp"
        title="Solicite uma cotação de motoboy"
        description="Envie os detalhes da entrega. Toda cotação é encaminhada ao atendente pelo WhatsApp, que confirma disponibilidade e condições."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Solicitar cotação</span>
        </nav>
      </PageHero>

      {/* Seção 1: Formulário de Cotação */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="form-cotacao-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-semibold text-primary-700">Fale com um atendente</p>
            <h2 id="form-cotacao-title" className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Informe os dados da entrega
            </h2>
            <p className="mt-3 text-lg leading-8 text-muted">
              Informe origem, destino e item. O botão abre uma conversa no WhatsApp para o atendente receber sua solicitação.
            </p>
          </div>
          <CotacaoForm />
        </div>
      </section>

      {/* Seção 2: Como funciona o atendimento */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="como-calculamos">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Critérios Claros</p>
            <h2 id="como-calculamos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Como funciona a cotação
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              O atendente analisa os detalhes enviados e informa pelo WhatsApp as condições que puder confirmar. O envio do formulário não confirma disponibilidade ou contratação.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CRITERIOS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-7 transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 3: Checklist para WhatsApp */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="checklist-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Informações para atendimento</p>
            <h2 id="checklist-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              O que enviar para o atendente
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Essas informações ajudam o atendente a avaliar sua solicitação:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKLIST.map((c) => (
              <div key={c.step} className="rounded-2xl bg-surface-warm p-6 border border-line">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-950 text-sm font-bold text-white">
                  {c.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Dúvidas sobre faturamento e rotas */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="faq-precos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Dúvidas frequentes</p>
            <h2 id="faq-precos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Dúvidas sobre atendimento e cotação.
            </h2>
            <Link href="/faq" className="mt-6 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline">
              Ver todas as dúvidas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
              <span>Como solicito uma cotação?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Envie origem, destino e descrição do item pelo WhatsApp. O atendente avalia a solicitação e informa as condições aplicáveis.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                <span>Como recebo o comprovante da entrega?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Se precisar de comprovante ou de algum procedimento específico, informe isso ao atendente. Ele avalia o que pode ser combinado antes da coleta.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                <span>Vocês atendem fora do horário comercial?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Nosso atendimento funciona de segunda a sexta-feira, das 8h às 18h. Solicitações enviadas fora desse período são avaliadas pelo atendente durante o horário comercial.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Seção 5: Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-precos">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-precos" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tem origem, destino e item para entregar?
            </h2>
            <p className="mt-2 text-orange-50">
              Envie os dados pelo WhatsApp para avaliação do atendente. A disponibilidade depende de confirmação.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com atendente no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
