import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, MapPin, Route } from "lucide-react";
import {
  getNeighborhoodGu,
  neighborhoodGuSlugs,
} from "@/data/neighborhoods-gu";
import { PHONE_WA, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";

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
    description: `Consulte coleta e entrega de motoboy em ${area.nome}, Guarulhos. Valor e previsão são confirmados pela rota real, de segunda a sexta, das 8h às 18h.`,
    path: `/areas/${area.slug}`,
    keywords: [`motoboy ${area.nome}`, `entrega ${area.nome} Guarulhos`],
    noIndex: true,
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
    `Olá! Quero cotar uma rota com coleta ou entrega em ${area.nome}, Guarulhos. Origem: (informar) / Destino: (informar).`,
  )}`;

  return (
    <main id="conteudo-principal" className="bg-surface">
      <PageHero
        compact
        eyebrow="Consulta de cobertura local"
        title={<>Motoboy em {area.nome}, Guarulhos</>}
        description={<>Solicite uma cotação informando o endereço completo em {area.nome}, a outra ponta da rota, o item e o prazo desejado. A disponibilidade e a previsão são confirmadas no atendimento, sem tempo genérico por bairro.</>}
      >
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand-950">Início</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/areas-atendidas" className="hover:text-brand-950">Áreas atendidas</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{area.nome}</span>
        </nav>
      </PageHero>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

        <section className="py-12" aria-labelledby="como-cotar-area">
          <h2 id="como-cotar-area" className="font-display text-3xl font-bold text-brand-950">Como cotar uma rota nesta região</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <article className="border-t-2 border-brand-950 pt-5">
              <MapPin className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Endereços</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Envie rua, número, complemento e referência da coleta e da entrega.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Missão</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Descreva item, contatos, paradas e qualquer necessidade de espera ou retorno.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Clock3 className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Horário</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Atendimento de segunda a sexta, das 8h às 18h, conforme disponibilidade.</p>
            </article>
          </div>
        </section>

        <section className="bg-surface-warm p-6 sm:p-8" aria-labelledby="preco-area">
          <h2 id="preco-area" className="font-display text-2xl font-bold text-brand-950">Cotação para a sua rota</h2>
          <p className="mt-4 leading-7 text-muted">
            Informe origem, destino e item para confirmar o valor antes da coleta.
            A tabela completa está na página de preços. Cartórios, shopping e aeroporto
            são cotados à parte.
          </p>
        </section>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-bold text-white hover:bg-brand-950">
            Cotar rota em {area.nome}
          </a>
          <Link href="/areas-atendidas" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-900 px-6 py-3 font-bold text-brand-950 hover:bg-brand-950 hover:text-white">
            Ver outros bairros
          </Link>
        </div>
      </div>
    </main>
  );
}
