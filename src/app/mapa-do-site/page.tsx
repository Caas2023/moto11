import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { neighborhoodsGu } from "@/data/neighborhoods-gu";
import { neighborhoodsSp } from "@/data/neighborhoods-sp";
import { SERVICES } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = buildMetadata({
  title: "Mapa do site",
  description: "Encontre as páginas de serviços, cotação, áreas de Guarulhos e rotas para São Paulo da Moto11.",
  path: "/mapa-do-site",
});

const pages = [
  ["Início", "/"],
  ["Serviços", "/servicos"],
  ["Solicitar cotação", "/precos"],
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

const serviceLinks = SERVICES.map(({ slug, title }) => ({ slug, nome: title }));

function Directory({ title, intro, prefix, links }: { title: string; intro: string; prefix: string; links: readonly { nome: string; slug: string }[] }) {
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
            <p>Use esta página para encontrar serviços e regiões. Envie origem, destino, item e horário pelo <Link className="font-semibold text-primary-700 underline" href="/precos">formulário de cotação</Link> ou fale com a equipe pelo <Link className="font-semibold text-primary-700 underline" href="/contato">Contato</Link>.</p>
            <p>Se a região ou a necessidade não estiver listada, envie os dados da rota pelo WhatsApp para avaliação do atendente. A lista não garante disponibilidade, prazo ou atendimento automático.</p>
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
        <Directory title="Serviços" intro="Páginas de modalidades com informações para preparar a solicitação." prefix="/servicos/" links={serviceLinks} />
        <Directory title="Bairros de Guarulhos" intro="Links para consultas por região. A disponibilidade depende dos endereços, do horário e das condições da rota." prefix="/areas/" links={neighborhoodsGu} />
        <Directory title="Regiões de São Paulo" intro="Links para rotas entre Guarulhos e São Paulo. Informe os endereços para avaliação do atendente." prefix="/sao-paulo/" links={neighborhoodsSp} />
      </div>
    </main>
  );
}
