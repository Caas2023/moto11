import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE, localBusinessJsonLd } from "@/lib/site";
import { PHONE_DISPLAY, PHONE_TEL_LINK, PHONE_WA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contato Moto11 | WhatsApp e Telefone em Guarulhos",
  description:
    "Fale com a Moto11 em Guarulhos por WhatsApp, telefone ou e-mail. Atendimento comercial de segunda a sexta, das 8h às 18h.",
  alternates: { canonical: `${SITE.baseUrl}/contato` },
  openGraph: {
    title: "Contato | Moto11 Express Guarulhos",
    description: "WhatsApp, telefone e canais oficiais da Moto11 em Guarulhos.",
    url: `${SITE.baseUrl}/contato`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de falar com o atendimento da Moto11.",
)}`;

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato – Moto11 Express",
            url: `${SITE.baseUrl}/contato`,
          },
        ]}
      />

      <PageHero
        eyebrow="Canais de Atendimento"
        title="Fale com a Moto11 em Guarulhos."
        description="Atendimento comercial ágil de segunda a sexta, das 8h às 18h. Chame no WhatsApp para cotações imediatas ou ligue para esclarecer dúvidas da sua entrega."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Contato</span>
        </nav>
      </PageHero>

      {/* Seção 1: Cards de Canais */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="canais-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Atendimento Direto</p>
            <h2 id="canais-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Escolha como prefere falar conosco.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Para orçamentos urgentes de entrega, recomendamos o WhatsApp para resposta em minutos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Card WhatsApp */}
            <article className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-success">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  WhatsApp Oficial
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Canal mais rápido para cotação de rotas, envio de endereços e acompanhamento de coletas.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-cta mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-success px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-900"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chamar {PHONE_DISPLAY}
              </a>
            </article>

            {/* Card Telefone */}
            <article className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  Ligação Telefônica
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Contato por voz durante o horário de expediente para suporte ou informações operacionais.
                </p>
              </div>
              <a
                href={`tel:${PHONE_TEL_LINK}`}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-line bg-surface-warm px-5 py-2.5 text-sm font-bold text-brand-950 transition-colors hover:border-brand-950"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Ligar {PHONE_DISPLAY}
              </a>
            </article>

            {/* Card E-mail */}
            <article className="flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-xs transition-all hover:border-slate-300 hover:shadow-md">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-brand-950">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  E-mail Corporativo
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Para contratos empresariais, propostas de rotas recorrentes e faturamento para CNPJ.
                </p>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-line bg-surface-warm px-5 py-2.5 text-sm font-bold text-brand-950 transition-colors hover:border-brand-950"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> {SITE.email}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Seção 2: Formulário e Informações Operacionais */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="form-contato-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            {/* Formulário */}
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-xs">
              <h2 id="form-contato-title" className="font-display text-2xl font-bold text-brand-950">
                Envie uma mensagem
              </h2>
              <p className="mt-2 text-sm text-muted">
                Preencha os campos abaixo e entraremos em contato o mais rápido possível:
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary-700 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    Horário de Atendimento
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Segunda a sexta-feira, das 08h às 18h.
                </p>
                <p className="mt-2 text-xs text-muted">
                  Não operamos aos finais de semana, de madrugada ou em feriados. Mensagens enviadas fora do expediente são respondidas no primeiro dia útil subsequente.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary-700 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-brand-950">
                    Área Operacional
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Guarulhos e rotas para São Paulo e Região Metropolitana.
                </p>
                <p className="mt-2 text-xs text-muted">
                  Operação logística sem balcão aberto ao público para retirada de encomendas; todos os chamados são atendidos ponto a ponto nos endereços acordados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-contato">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-contato" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Precisa de um motoboy agora?
            </h2>
            <p className="mt-2 text-orange-50">
              Chame nossa equipe pelo WhatsApp e receba a cotação imediata da sua rota.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
