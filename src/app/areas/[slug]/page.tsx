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
  getNeighborhoodGu,
  neighborhoodGuSlugs,
} from "@/data/neighborhoods-gu";
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
  return neighborhoodGuSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getNeighborhoodGu(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Motoboy em ${area.nome}, Guarulhos`,
    description: `Serviço de motoboy em ${area.nome}, Guarulhos. Entregas expressas, coletas de documentos, peças e malotes. Cotação por rota viária pelo WhatsApp.`,
    path: `/areas/${area.slug}`,
    keywords: [
      `motoboy ${area.nome}`,
      `entrega ${area.nome} guarulhos`,
      `motofrete ${area.nome}`,
      `coleta motoboy ${area.nome}`,
      `motoboy em Guarulhos`,
    ],
    noIndex: false,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getNeighborhoodGu(slug);
  if (!area) notFound();

  const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
    `Olá! Quero cotar uma entrega em ${area.nome}, Guarulhos. Origem: (informar) / Destino: (informar) / Item: (informar).`,
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Serviço de Motoboy em ${area.nome}, Guarulhos`,
    serviceType: "Serviço de Motoboy e Entregas Expressas",
    description: area.subtitulo,
    url: `${SITE_URL}/areas/${area.slug}`,
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area.nome}, Guarulhos - SP`,
    },
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
        name: "Áreas atendidas",
        item: `${SITE_URL}/areas-atendidas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.nome,
        item: `${SITE_URL}/areas/${area.slug}`,
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
        eyebrow={`Cobertura em Guarulhos · ${area.zona}`}
        title={<>Motoboy em {area.nome}, Guarulhos</>}
        description={
          <>
            {area.subtitulo}. Atendimento profissional para empresas, comércios
            e particulares com preço fechado antes da moto sair, de segunda a
            sexta, das 8h às 18h.
          </>
        }
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/areas-atendidas"
            className="hover:text-white transition-colors"
          >
            Áreas atendidas
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page" className="text-white font-medium">
            {area.nome}
          </span>
        </nav>
      </PageHero>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-16">
        {/* Panorama Regional */}
        <section aria-labelledby="panorama-bairro">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Perfil da região
            </span>
            <h2
              id="panorama-bairro"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Atendimento e logística de motoboy em {area.nome}
            </h2>
          </div>
          <div className="mt-6 text-base sm:text-lg leading-relaxed text-muted space-y-4">
            <p>{area.resumoLocal}</p>
            <p>
              A operação da Moto11 em {area.nome} prioriza a previsibilidade:
              ao solicitar uma cotação, você informa o ponto de coleta, o
              endereço de entrega e as particularidades da carga (como volume,
              peso ou necessidade de protocolo assinado). Nossa equipe calcula a
              rota real por quilometragem viária e confirma a disponibilidade
              imediata, garantindo que o valor informado seja o valor final, sem
              adicionais surpresa.
            </p>
          </div>
        </section>

        {/* Vias Principais e Particularidades */}
        <section
          className="rounded-2xl border border-line bg-surface-warm p-6 sm:p-8"
          aria-labelledby="vias-bairro"
        >
          <div className="flex items-center gap-3">
            <Compass className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="vias-bairro"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Principais vias e acesso em {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            Nossos pilotos conhecem profundamente os acessos viários e os
            horários de maior movimento no bairro, otimizando o deslocamento
            pelas seguintes vias de referência:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {area.viasPrincipais.map((via) => (
              <div
                key={via}
                className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-brand-950 shadow-xs"
              >
                <MapPin
                  className="h-4 w-4 shrink-0 text-primary-700"
                  aria-hidden="true"
                />
                <span>{via}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-primary-100 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Condição de trânsito local
            </p>
            <p className="mt-1 text-sm text-muted leading-relaxed">
              {area.particularidadesLogistica}
            </p>
          </div>
        </section>

        {/* Demandas Mais Frequentes */}
        <section aria-labelledby="demandas-bairro">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Especialidades
            </span>
            <h2
              id="demandas-bairro"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              O que mais transportamos em {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            Cada região possui necessidades distintas. Em {area.nome}, os
            chamados mais frequentes abrangem:
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

        {/* Como Funciona a Cotação */}
        <section aria-labelledby="como-cotar-area">
          <h2
            id="como-cotar-area"
            className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
          >
            Como cotar sua rota em {area.nome}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <article className="border-t-2 border-brand-950 pt-5">
              <MapPin className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Endereços completos</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Envie rua, número, complemento e ponto de referência da coleta e
                da entrega em {area.nome}.
              </p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Descrição do item</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Informe o tipo de material, contatos no local, necessidade de
                protocolo assinado ou retorno.
              </p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Clock3 className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Preço e confirmação</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Calculamos a quilometragem viária e informamos o valor fechado
                antes da moto ser despachada.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ Local */}
        <section aria-labelledby="faq-bairro">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="faq-bairro"
              className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Dúvidas frequentes sobre motoboy em {area.nome}
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

        {/* Bairros Vizinhos (Links Internos Semânticos) */}
        {area.bairrosVizinhos && area.bairrosVizinhos.length > 0 && (
          <section
            className="border-t border-line pt-10"
            aria-labelledby="vizinhos-bairro"
          >
            <h2
              id="vizinhos-bairro"
              className="font-display text-xl font-bold text-brand-950"
            >
              Outras regiões atendidas próximas a {area.nome}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {area.bairrosVizinhos.map((v) => (
                <Link
                  key={v.slug}
                  href={`/areas/${v.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-brand-950 hover:border-brand-950 hover:bg-brand-950 hover:text-white transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary-700" aria-hidden="true" />
                  <span>{v.nome}</span>
                </Link>
              ))}
              <Link
                href="/areas-atendidas"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800 hover:bg-primary-100 transition-colors"
              >
                Ver todos os bairros de Guarulhos
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        {/* CTA WhatsApp */}
        <section
          className="rounded-2xl bg-brand-950 p-8 text-white sm:p-10"
          aria-labelledby="cta-bairro"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
              Solicitação imediata
            </span>
            <h2
              id="cta-bairro"
              className="mt-2 font-display text-2xl font-bold sm:text-3xl"
            >
              Precisa de motoboy em {area.nome}?
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Envie a origem e o destino da rota no WhatsApp. Passamos a cotação
              fechada e posicionamos o piloto mais próximo para a coleta.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir cotação em {area.nome}
              </a>
              <Link
                href="/precos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Como funciona o cálculo de preço
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
