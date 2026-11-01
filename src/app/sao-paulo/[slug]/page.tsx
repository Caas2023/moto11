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
import { publicCopy } from "@/lib/public-copy";
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
    description: `Rota de motoboy de Guarulhos para ${area.nome}, São Paulo. Entregas expressas, malotes e documentos. Solicite cotação ao atendente pelo WhatsApp.`,
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
  const subtitle = publicCopy(area.subtitulo) || `Consulte referências da região e solicite uma cotação para ${area.nome}.`;
  const summary = publicCopy(area.resumoRota) || `Esta página reúne referências de rota para ajudar você a informar o destino em ${area.nome}.`;
  const faqItems = area.faq
    .map((item) => ({ pergunta: publicCopy(item.pergunta), resposta: publicCopy(item.resposta) }))
    .filter((item) => item.pergunta && item.resposta);

  const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
    `Olá! Quero solicitar uma cotação com o atendente para uma rota entre Guarulhos e ${area.nome}, São Paulo. Origem: (informar) / Destino: (informar) / Item: (informar).`,
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Serviço de Motoboy entre Guarulhos e ${area.nome}, São Paulo`,
    serviceType: "Serviço de Motoboy e Entregas Intermunicipais",
    description: subtitle,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(faqItems)) }}
      />

      <PageHero
        compact
        eyebrow={`Rota Metropolitana · Guarulhos ↔ ${area.regiao}`}
        title={<>Motoboy entre Guarulhos e {area.nome}</>}
        description={
          <>
            {subtitle} Atendimento de segunda a sexta, das 8h às 18h.
            Toda cotação é avaliada pelo atendente no WhatsApp e depende de
            confirmação de disponibilidade e condições.
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
            <p>{summary}</p>
            <p>
              Rotas intermunicipais entre Guarulhos e a capital exigem
              planejamento detalhado. Informe os dois endereços completos, o item
              e o horário desejado. O atendente avalia a solicitação pelo WhatsApp
              antes de confirmar disponibilidade e condições.
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
              Estes são corredores metropolitanos que ajudam a contextualizar o
              destino. O percurso real depende dos endereços e das condições no
              momento da solicitação:
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
              {publicCopy(area.orientacaoTransito)}
            </p>
          </div>
        </section>

        {/* Diretrizes Operacionais e Capacidade de Carga Intermunicipal */}
        <section
          className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-xs"
          aria-labelledby="operacao-capacidade-rota"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="operacao-capacidade-rota"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Diretrizes operacionais e capacidade de carga entre Guarulhos e {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            A conexão intermunicipal entre a base operacional em Guarulhos e {area.nome}, na {area.regiao} de São Paulo,
            demanda atenção especial à segurança da carga, velocidade de tráfego rodoviário e proteção contra intempéries.
            Para assegurar que o transporte ocorra dentro dos padrões legais e técnicos:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary-700" />
                Baú Impermeável e Hermético
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Compartimentos fechados de até 80 a 90 litros com vedação adequada contra chuva, poeira e
                vibração rodoviária. Acomoda caixas até 40 cm x 40 cm x 40 cm, pastas contratuais e malotes
                sem amassamentos durante o trajeto intermunicipal.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Limite de Peso e Estabilidade
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Carga limite recomendada entre 15 kg e 20 kg. Essa faixa de peso assegura a estabilidade
                e frenagem segura da motocicleta ao trafegar em vias expressas de alta velocidade como a Rodovia Presidente Dutra,
                Ayrton Senna e as pistas da Marginal Tietê.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary-700" />
                Cargas Aceitas e Restrições
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Atendemos remessas de documentos jurídicos, certidões em cartórios, peças de reposição urgentes,
                eletrônicos e mercadorias corporativas. Não transportamos cargas indivisíveis volumosas, animais,
                substâncias tóxicas ou materiais corrosivos.
              </p>
            </div>
          </div>
        </section>

        {/* Procedimentos em Edifícios Corporativos, Docas e Cartórios */}
        <section
          className="border-l-4 border-primary-700 pl-4 sm:pl-6 space-y-4"
          aria-labelledby="procedimentos-acesso-rota"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Acesso e Comprovação na Capital
          </span>
          <h2
            id="procedimentos-acesso-rota"
            className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
          >
            Procedimentos em edifícios comerciais, condomínios e protocolo em {area.nome}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted">
            Entregas em {area.nome} frequentemente envolvem edifícios comerciais com controle rigoroso de doca,
            estacionamento de motos em bolsões específicos, triagem em recepções centrais ou atendimento em cartórios e repartições.
            Para que a rota ocorra de maneira ágil:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="rounded-xl border border-line bg-white p-5 shadow-xs space-y-2">
              <h3 className="font-bold text-brand-950 text-base">Recepção Predial e Liberação de Crachá</h3>
              <p className="text-sm text-muted leading-relaxed">
                O motoboy se apresenta munido de documento com foto e capacete em mãos nas portarias de {area.nome}.
                Caso o edifício exija autorização nominal prévia enviada por e-mail ou sistema de controle de acesso,
                providenciar a liberação antecipada minimiza o tempo em fila de espera e agiliza a entrega no andar corporativo.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 shadow-xs space-y-2">
              <h3 className="font-bold text-brand-950 text-base">Comprovante Assinado e Retorno de Vias</h3>
              <p className="text-sm text-muted leading-relaxed">
                Para remessas com exigência de protocolo, coletamos carimbo de recebimento, assinatura e número de documento
                do destinatário. Se o serviço contemplar retorno com a via assinada para Guarulhos, a rota de ida e volta
                é combinada antecipadamente no WhatsApp com envio imediato da confirmação fotográfica.
              </p>
            </div>
          </div>
        </section>

        {/* Planejamento de Tráfego Intermunicipal e Janelas de Horário */}
        <section
          className="rounded-2xl border border-line bg-surface-warm p-6 sm:p-8"
          aria-labelledby="planejamento-viario-rota"
        >
          <div className="flex items-center gap-3">
            <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="planejamento-viario-rota"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Planejamento viário e janelas recomendadas para a rota {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            A ligação rodoviária entre Guarulhos e a {area.regiao} de São Paulo atravessa eixos viários de alta densidade
            de tráfego, como as pontes da Marginal Tietê e as principais radiais da capital. Um planejamento correto de horário
            faz toda a diferença na previsibilidade da sua encomenda:
          </p>
          <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              O tráfego de entrada na capital no início da manhã (especialmente entre 7h e 9h30) e a saída de São Paulo
              no retorno para Guarulhos no final da tarde (das 17h às 19h30) sofrem fortes retenções. Para entregas que dependem
              de prazo reduzido, abrir o chamado entre as 10h e 12h ou no início da tarde (13h30 às 15h) proporciona
              trajetos mais limpos e tempo de resposta otimizado.
            </p>
            <p>
              Ao solicitar sua cotação pelo WhatsApp, detalhe eventuais restrições de recebimento (ex.: encerramento de expediente
              às 17h, parada para almoço ou necessidade de horário agendado com fiscal). Assim, nosso atendente confirma
              a escala e a viabilidade operacional antes do envio da moto.
            </p>
          </div>
        </section>

        {/* Demandas Mais Frequentes Nesta Rota */}
        <section aria-labelledby="demandas-rota">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Informações para a cotação

            </span>
            <h2
              id="demandas-rota"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Situações comuns em rotas para {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
              A lista abaixo ajuda a explicar a necessidade. Confirme com o
              atendente se a tarefa e o item podem ser atendidos:
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
                  {publicCopy(demanda)}
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
              <h3 className="mt-4 font-bold text-brand-950">Confirmação pelo atendente</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                O atendente confirma disponibilidade e condições antes de
                qualquer coleta.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ Rota SP */}
        {faqItems.length > 0 && <section aria-labelledby="faq-rota">
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
            {faqItems.map((item) => (
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
        </section>}

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
              Envie os endereços completos no WhatsApp para avaliação do
              atendente. Disponibilidade e condições dependem de confirmação.
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
                Solicitar cotação
              </Link>
              <Link
                href="/servicos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Ver serviços de motoboy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
