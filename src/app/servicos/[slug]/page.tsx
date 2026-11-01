import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HelpCircle,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import {
  PHONE_WA,
  SITE_URL,
  buildMetadata,
  jsonLdFAQ,
  jsonLdService,
} from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CotacaoForm } from "@/components/site/CotacaoForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/servicos/${service.slug}`,
    keywords: service.keywords.filter((keyword) => !/preç|valor|R\$/i.test(keyword)),
    noIndex: false,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
            `Olá! Quero solicitar uma cotação com o atendente para ${service.title} em Guarulhos. Origem: (informar) / Destino: (informar) / Detalhes: (informar).`,
  )}`;

  const serviceSchema = jsonLdService({
    name: service.h1,
    description: service.description,
    path: `/servicos/${service.slug}`,
    serviceType: service.title,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
        item: `${SITE_URL}/servicos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/servicos/${service.slug}`,
      },
    ],
  };

  const faqItems = service.faq.map((f) => ({
    pergunta: f.q,
    resposta: f.a,
  }));

  // Outros serviços para linkagem interna
  const outrosServicos = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    6,
  );

  return (
    <main id="conteudo-principal" className="bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(faqItems)) }}
      />

      <PageHero
        compact
        eyebrow="Modalidade de Atendimento · Moto11"
        title={<>{service.h1}</>}
        description={
          <>
            {service.description} Atendimento de segunda a sexta, das 8h às 18h.
            Toda cotação é avaliada pelo atendente no WhatsApp; disponibilidade e
            condições dependem de confirmação.
          </>
        }
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/servicos"
            className="hover:text-white transition-colors"
          >
            Serviços
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page" className="text-white font-medium">
            {service.title}
          </span>
        </nav>
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-16">
        {/* Visão Geral e Hero */}
        <section aria-labelledby="visao-geral-servico">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Escopo da missão
            </span>
            <h2
              id="visao-geral-servico"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Como funciona o {service.title.toLowerCase()}
            </h2>
          </div>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
            {service.hero}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-brand-950">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-warm px-3.5 py-1.5">
              <Clock3 className="h-4 w-4 text-primary-700" aria-hidden="true" />
              Tempo médio: {service.tempoMedio}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-warm px-3.5 py-1.5">
              <Route className="h-4 w-4 text-primary-700" aria-hidden="true" />
              Cotação com atendente pelo WhatsApp
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-warm px-3.5 py-1.5">
              <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
              Seg–Sex, 8h às 18h
            </span>
          </div>
        </section>

        {/* Informações publicáveis do serviço */}
        {service.beneficios.length > 0 && <section
          className="rounded-2xl border border-line bg-surface-warm p-6 sm:p-8"
          aria-labelledby="beneficios-servico"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="beneficios-servico"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Informações deste atendimento
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.beneficios.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-xs"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-success"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-brand-950 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>}

        {/* Detalhes Operacionais */}
        {service.detalhes && service.detalhes.length > 0 && (
          <section aria-labelledby="detalhes-operacionais">
            <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Rotina e limites
              </span>
              <h2
                id="detalhes-operacionais"
                className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
              >
                Processo operacional em detalhes
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {service.detalhes.map((paragrafo, idx) => (
                <p key={idx}>{paragrafo}</p>
              ))}
            </div>
          </section>
        )}

        {/* Áreas mais atendidas */}
        {service.areasAtendidas && service.areasAtendidas.length > 0 && (
          <section
            className="rounded-xl border border-line bg-white p-6 sm:p-8"
            aria-labelledby="cobertura-servico"
          >
            <h2
              id="cobertura-servico"
              className="font-display text-xl font-bold text-brand-950"
            >
              Regiões relacionadas a este serviço
            </h2>
            <p className="mt-2 text-sm text-muted">
              Use estas referências para descrever sua rota ao atendente. A
              disponibilidade depende dos endereços completos e do horário:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.areasAtendidas.map((areaNome) => (
                <span
                  key={areaNome}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-warm px-3.5 py-1.5 text-xs sm:text-sm font-medium text-brand-950"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary-700" aria-hidden="true" />
                  {areaNome}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Formulário de Cotação */}
        <section aria-labelledby="cotacao-servico">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Solicitação pelo WhatsApp
            </span>
            <h2
              id="cotacao-servico"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Envie sua rota para o atendente
            </h2>
          </div>
          <CotacaoForm />
        </section>

        {/* FAQ do Serviço */}
        {service.faq.length > 0 && <section aria-labelledby="faq-servico">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="faq-servico"
              className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Perguntas frequentes sobre {service.title.toLowerCase()}
            </h2>
          </div>
          <div className="mt-6 divide-y divide-line rounded-xl border border-line bg-white px-6">
            {service.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-950">
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <span
                    className="text-2xl font-light text-primary-700 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>}

        {/* Outros Serviços */}
        <section
          className="border-t border-line pt-10"
          aria-labelledby="outros-servicos"
        >
          <h2
            id="outros-servicos"
            className="font-display text-xl font-bold text-brand-950"
          >
            Conheça outras modalidades de motoboy
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outrosServicos.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-950 hover:shadow-xs"
              >
                <p className="font-bold text-brand-950 group-hover:text-primary-700 transition-colors">
                  {s.title}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-muted">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:underline"
            >
              Ver todos os serviços de motoboy em Guarulhos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <section
          className="rounded-2xl bg-brand-950 p-8 text-white sm:p-10"
          aria-labelledby="cta-final-servico"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
              Atendimento em horário comercial
            </span>
            <h2
              id="cta-final-servico"
              className="mt-2 font-display text-2xl font-bold sm:text-3xl"
            >
              Pronto para solicitar {service.title.toLowerCase()}?
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Fale diretamente com o atendente no WhatsApp. Envie os endereços
              de coleta e entrega para avaliação. A disponibilidade e as condições
              serão confirmadas antes de qualquer coleta.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com a equipe no WhatsApp
              </a>
              <Link
                href="/precos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Entenda nossa política de cotação
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
