import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { neighborhoodsGu } from "@/data/neighborhoods-gu";
import { neighborhoodsSp } from "@/data/neighborhoods-sp";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { EditorialSections } from "@/components/site/EditorialSections";

export const metadata: Metadata = buildMetadata({
  title: "Mapa do site | Moto11",
  description: "Encontre as páginas de serviços, preços, áreas de Guarulhos e rotas para São Paulo da Moto11.",
  path: "/mapa-do-site",
});

const pages = [
  ["Início", "/"],
  ["Serviços", "/servicos"],
  ["Tabela de preços", "/precos"],
  ["Áreas atendidas em Guarulhos", "/areas-atendidas"],
  ["Rotas para São Paulo", "/sao-paulo"],
  ["Perguntas frequentes", "/faq"],
  ["Sobre a Moto11", "/sobre-nos"],
  ["Contato", "/contato"],
  ["Horário de atendimento", "/motoboy-24-horas"],
  ["Privacidade", "/politica-privacidade"],
  ["Condições de atendimento", "/termos-uso"],
  ["Mapa do site", "/mapa-do-site"],
] as const;

function Directory({ title, intro, links }: { title: string; intro: string; links: readonly { nome: string; slug: string }[] }) {
  const prefix = title.includes("Guarulhos") ? "/areas/" : "/sao-paulo/";
  return (
    <section aria-labelledby={title.replaceAll(" ", "-").toLowerCase()}>
      <h2 id={title.replaceAll(" ", "-").toLowerCase()} className="font-display text-3xl font-bold text-brand-950">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-muted">{intro}</p>
      <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {links.map((area) => (
          <li key={area.slug} className="bg-white">
            <Link className="flex min-h-14 items-center justify-between gap-3 p-4 font-semibold text-brand-950 hover:bg-surface-warm" href={`${prefix}${area.slug}`}>
              {area.nome}<ArrowRight className="h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPage() {
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Navegação completa"
        title="Mapa do site Moto11"
        description="Encontre as páginas principais, os bairros de Guarulhos e as regiões de São Paulo organizadas em um só lugar."
      >
          <MapPin className="h-9 w-9 text-primary-400" aria-hidden="true" />
      </PageHero>
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        <section aria-labelledby="como-usar-mapa">
          <h2 id="como-usar-mapa" className="font-display text-3xl font-bold text-brand-950">Como usar este mapa</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-7 text-muted">
            <p>Use esta página para escolher o próximo passo sem depender de uma busca por palavra-chave. Se você já sabe que precisa contratar, comece por <Link className="font-semibold text-primary-700 underline" href="/contato">Contato</Link> e envie origem, destino, item e horário. Se ainda está comparando condições, consulte <Link className="font-semibold text-primary-700 underline" href="/precos">Preços</Link> e <Link className="font-semibold text-primary-700 underline" href="/faq">Perguntas frequentes</Link>.</p>
            <p>A lista de bairros organiza consultas de cobertura, mas não transforma o nome da região em garantia de disponibilidade ou prazo. As rotas locais detalhadas permanecem sob revisão editorial e não são usadas para criar volume artificial de páginas indexáveis. Para uma travessia entre municípios, abra o hub de São Paulo e informe os dois endereços completos.</p>
            <p>As páginas deste mapa seguem uma hierarquia simples: serviço explica o que pode ser feito, preço explica a regra, contato recebe a missão e o atendimento confirma a rota real. Páginas legais ficam disponíveis para transparência e podem não participar da indexação. Links que apontam para páginas antigas são encaminhados para o destino canônico correspondente.</p>
          </div>
        </section>
        <section aria-labelledby="paginas-principais">
          <h2 id="paginas-principais" className="font-display text-3xl font-bold text-brand-950">Páginas principais</h2>
          <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pages.map(([label, href]) => (
              <li key={href} className="bg-white"><Link className="flex min-h-14 items-center justify-between gap-3 p-4 font-semibold text-brand-950 hover:bg-surface-warm" href={href}>{label}<ArrowRight className="h-4 w-4 shrink-0 text-primary-700" aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </section>
        <EditorialSections variant="map" />
        <Directory title="Bairros de Guarulhos" intro="Links para consultas por região. A disponibilidade da entrega depende dos endereços completos, do horário e das condições da rota." links={neighborhoodsGu} />
        <Directory title="Regiões de São Paulo" intro="Links para rotas entre Guarulhos e São Paulo. Informe os dois endereços para confirmar valor e disponibilidade." links={neighborhoodsSp} />
      </div>
    </main>
  );
}
