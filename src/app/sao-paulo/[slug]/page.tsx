import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, MapPin, Route } from "lucide-react";
import {
  getSpNeighborhood,
  neighborhoodsSp,
} from "@/data/neighborhoods-sp";
import { PHONE_WA, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";

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
    description: `Solicite cotação de motoboy entre Guarulhos e ${area.nome}, São Paulo. Valor e previsão dependem dos endereços e do trânsito.`,
    path: `/sao-paulo/${area.slug}`,
    keywords: [`motoboy Guarulhos ${area.nome}`, `entrega ${area.nome} Guarulhos`],
    noIndex: true,
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
    `Olá! Quero cotar uma rota entre Guarulhos e ${area.nome}, São Paulo. Coleta: (informar) / Entrega: (informar).`,
  )}`;

  return (
    <main id="conteudo-principal" className="bg-surface">
      <PageHero
        compact
        eyebrow="Rota metropolitana sob consulta"
        title={<>Motoboy entre Guarulhos e {area.nome}</>}
        description="Envie os endereços completos, o item e o horário desejado. A Moto11 verifica distância, condições e disponibilidade antes de apresentar valor e previsão para a rota."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand-950">Início</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/sao-paulo" className="hover:text-brand-950">São Paulo</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{area.nome}</span>
        </nav>
      </PageHero>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

        <section className="py-12" aria-labelledby="dados-rota-sp">
          <h2 id="dados-rota-sp" className="font-display text-3xl font-bold text-brand-950">O que precisamos confirmar</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <article className="border-t-2 border-brand-950 pt-5">
              <MapPin className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Origem e destino</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Bairro não basta: envie rua, número, complemento e contato nas duas pontas.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Etapas da missão</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Informe paradas, espera, retorno, protocolo ou qualquer acesso controlado.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Clock3 className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-brand-950">Prazo possível</h3>
              <p className="mt-2 text-sm leading-6 text-muted">A previsão depende do trânsito e é informada no atendimento, seg–sex, 8h–18h.</p>
            </article>
          </div>
        </section>

        <section className="bg-surface-warm p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-brand-950">Sem tempo fixo publicado</h2>
          <p className="mt-4 leading-7 text-muted">
            A duração muda conforme o ponto exato em Guarulhos, o endereço em
            {` ${area.nome}`}, o horário e as condições viárias. A equipe não usa
            uma média genérica como promessa. Depois de receber os endereços,
            informa uma estimativa atual para você decidir antes da coleta.
          </p>
        </section>

        <section className="mt-12 space-y-5 text-muted" aria-labelledby="detalhes-rota-sp">
          <h2 id="detalhes-rota-sp" className="font-display text-2xl font-bold text-brand-950">Operação da rota entre Guarulhos e {area.nome}</h2>
          <div className="space-y-4 leading-relaxed text-sm sm:text-base">
            <p className="whitespace-pre-line">{area.conteudoUnico}</p>
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-700 px-6 py-3 font-bold text-white hover:bg-brand-950">
            Cotar rota para {area.nome}
          </a>
          <Link href="/sao-paulo" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-900 px-6 py-3 font-bold text-brand-950 hover:bg-brand-950 hover:text-white">
            Ver outras regiões
          </Link>
        </div>
      </div>
    </main>
  );
}
