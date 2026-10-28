import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Compass,
  FileText,
  HelpCircle,
  MapPin,
  Route,
  ShieldCheck,
} from "lucide-react";
import {
  getSpNeighborhood,
  neighborhoodsSp,
} from "@/data/neighborhoods-sp";
import {
  PHONE_WA,
  SITE_NAME,
  SITE_URL,
  buildMetadata,
  jsonLdFAQ,
} from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoodsSp.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getSpNeighborhood(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Motoboy entre Guarulhos e ${area.nome}, São Paulo`,
    description: `Rota de motoboy de Guarulhos para ${area.nome}, São Paulo. Entregas expressas, malotes e documentos. Cotação por quilometragem viária no WhatsApp.`,
    path: `/sao-paulo/${area.slug}`,
    keywords: [
      `motoboy guarulhos ${area.nome}`,
      `entrega guarulhos ${area.nome}`,
      `motofrete sp ${area.nome}`,
      `motoboy ${area.nome}`,
      `entrega de moto ${area.nome}`,
    ],
    noIndex: false,
  });
}

export default async function SaoPauloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getSpNeighborhood(slug);
  if (!area) notFound();

  const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
    `Olá! Quero cotar uma rota entre Guarulhos e ${area.nome}, São Paulo. Origem: (informar) / Destino: (informar) / Item: (informar).`,
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Serviço de Motoboy entre Guarulhos e ${area.nome}, São Paulo`,
    serviceType: "Serviço de Motoboy e Entregas Intermunicipais",
    description: area.subtitulo,
    url: `${SITE_URL}/sao-paulo/${area.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: `${SITE_NAME} – Empresa de Motoboy`,
      telephone: "+5511957248425",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guarulhos",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Guarulhos",
      },
      {
        "@type": "AdministrativeArea",
        name: `${area.nome}, São Paulo - SP`,
      },
    ],
  };

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
        name: "São Paulo",
        item: `${SITE_URL}/sao-paulo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.nome,
        item: `${SITE_URL}/sao-paulo/${area.slug}`,
      },
    ],
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(area.faq)) }}
      />

      <PageHero
        compact
        eyebrow={`Rota Metropolitana · Guarulhos ↔ ${area.regiao}`}
        title={<>Motoboy entre Guarulhos e {area.nome}</>}
        description={
          <>
            {area.subtitulo}. Despacho intermunicipal ágil com valor fixado
            antes da saída e comprovação digital de entrega, de segunda a sexta,
            das 8h às 18h.
          </>
        }
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/sao-paulo"
            className="hover:text-white transition-colors"
          >
            São Paulo
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page" className="text-white font-medium">
            {area.nome}
          </span>
        </nav>
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-16">
        {/* Panorama da Rota */}
        <section aria-labelledby="panorama-rota">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Operação intermunicipal
            </span>
            <h2
              id="panorama-rota"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Logística de motoboy entre Guarulhos e {area.nome}
            </h2>
          </div>
          <div className="mt-6 text-base sm:text-lg leading-relaxed text-muted space-y-4">
            <p>{area.resumoRota}</p>
            <p>
              Rotas intermunicipais entre Guarulhos e a capital exigem
              planejamento detalhado. A Moto11 monitora as condições viárias da
              Rodovia Presidente Dutra, da Rodovia Ayrton Senna e das Marginais
              Tietê e Pinheiros em tempo real. O cliente informa os dois
              endereços completos e o material transportado, recebendo o valor
              fechado da corrida e a estimativa realista de entrega antes do
              piloto iniciar a viagem.
            </p>
          </div>
        </section>

        {/* Eixos Viários e Trânsito Metropolitano */}
        <section
          className="rounded-2xl border border-line bg-surface-warm p-6 sm:p-8"
          aria-labelledby="eixos-rota"
        >
          <div className="flex items-center gap-3">
            <Compass className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="eixos-rota"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Eixos viários e estratégia de tráfego
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            O deslocamento de moto entre Guarulhos e {area.nome} utiliza os
            principais corredores metropolitanos:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {area.eixosViarios.map((eixo) => (
              <div
                key={eixo}
                className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-brand-950 shadow-xs"
              >
                <Route
                  className="h-4 w-4 shrink-0 text-primary-700"
                  aria-hidden="true"
                />
                <span>{eixo}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-primary-100 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Condições viárias e horários de pico
            </p>
            <p className="mt-1 text-sm text-muted leading-relaxed">
              {area.orientacaoTransito}
            </p>
          </div>
        </section>

        {/* Demandas Mais Frequentes Nesta Rota */}
        <section aria-labelledby="demandas-rota">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Aplicações práticas
            </span>
            <h2
              id="demandas-rota"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              O que mais transportamos para {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            As necessidades mais recorrentes atendidas pela Moto11 neste trajeto
            incluem:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {area.demandasComuns.map((demanda) => (
              <div
                key={demanda}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-xs"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-success"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-brand-950 leading-relaxed">
                  {demanda}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Como Funciona a Cotação Intermunicipal */}
        <section aria-labelledby="como-cotar-sp">
          <h2
            id="como-cotar-sp"
            className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
          >
            Como cotar e agendar sua rota para {area.nome}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <article className="border-t-2 border-brand-950 pt-5">
              <MapPin className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Origem e destino exatos</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Envie os endereços completos em Guarulhos e em {area.nome},
                incluindo referências e contatos no local.
              </p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <FileText className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Descrição e requisitos</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Informe se haverá protocolo assinado, espera em portaria ou
                retorno de documentos ao ponto de origem.
              </p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Clock3 className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Valor fechado no WhatsApp</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Receba a proposta calculada pela quilometragem viária real e
                confirme a saída imediata do piloto.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ Rota SP */}
        <section aria-labelledby="faq-rota">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="faq-rota"
              className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Dúvidas frequentes da rota Guarulhos ↔ {area.nome}
            </h2>
          </div>
          <div className="mt-6 divide-y divide-line rounded-xl border border-line bg-white px-6">
            {area.faq.map((item) => (
              <details key={item.pergunta} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-950">
                  <span className="text-base sm:text-lg">{item.pergunta}</span>
                  <span
                    className="text-2xl font-light text-primary-700 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Rotas Relacionadas (Links Internos Semânticos) */}
        {area.rotasRelacionadas && area.rotasRelacionadas.length > 0 && (
          <section
            className="border-t border-line pt-10"
            aria-labelledby="rotas-relacionadas"
          >
            <h2
              id="rotas-relacionadas"
              className="font-display text-xl font-bold text-brand-950"
            >
              Outras rotas conectadas na Grande São Paulo
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {area.rotasRelacionadas.map((r) => (
                <Link
                  key={r.slug}
                  href={`/sao-paulo/${r.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-brand-950 hover:border-brand-950 hover:bg-brand-950 hover:text-white transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary-700" aria-hidden="true" />
                  <span>{r.nome}</span>
                </Link>
              ))}
              <Link
                href="/sao-paulo"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800 hover:bg-primary-100 transition-colors"
              >
                Ver todas as regiões de São Paulo
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* CTA WhatsApp */}
        <section
          className="rounded-2xl bg-brand-950 p-8 text-white sm:p-10"
          aria-labelledby="cta-rota"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
              Atendimento intermunicipal
            </span>
            <h2
              id="cta-rota"
              className="mt-2 font-display text-2xl font-bold sm:text-3xl"
            >
              Precisa de motoboy para {area.nome}?
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Envie os endereços completos no WhatsApp. Calculamos a melhor rota
              viária e confirmamos valor e previsão antes de qualquer coleta.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir cotação para {area.nome}
              </a>
              <Link
                href="/precos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Critérios de preço e rota
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
