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
import { publicCopy } from "@/lib/public-copy";
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
    description: `Serviço de motoboy em ${area.nome}, Guarulhos. Entregas expressas, coletas de documentos, peças e malotes. Solicite uma cotação ao atendente pelo WhatsApp.`,
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
  const subtitle = publicCopy(area.subtitulo) || `Consulte informações de acesso e solicite uma cotação para ${area.nome}.`;
  const summary = publicCopy(area.resumoLocal) || `Esta página reúne referências locais para ajudar você a informar a rota em ${area.nome}.`;
  const faqItems = area.faq
    .map((item) => ({ pergunta: publicCopy(item.pergunta), resposta: publicCopy(item.resposta) }))
    .filter((item) => item.pergunta && item.resposta);

  const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
    `Olá! Quero solicitar uma cotação com o atendente para uma entrega em ${area.nome}, Guarulhos. Origem: (informar) / Destino: (informar) / Item: (informar).`,
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Serviço de Motoboy em ${area.nome}, Guarulhos`,
    serviceType: "Serviço de Motoboy e Entregas Expressas",
    description: subtitle,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(faqItems)) }}
      />

      <PageHero
        compact
        eyebrow={`Cobertura em Guarulhos · ${area.zona}`}
        title={<>Motoboy em {area.nome}, Guarulhos</>}
        description={
          <>
            {subtitle} Atendimento de segunda a sexta, das 8h às 18h.
            Toda cotação é avaliada pelo atendente no WhatsApp; a disponibilidade
            e as condições dependem de confirmação.
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
            <p>{summary}</p>
            <p>
              Ao solicitar uma cotação, informe o ponto de coleta, o endereço de
              entrega e as particularidades do item, como volume, peso, embalagem
              ou necessidade de retorno. O atendente avalia a solicitação pelo
              WhatsApp antes de confirmar disponibilidade e condições.
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
              As vias abaixo são referências úteis para descrever a rota. O
              percurso e a disponibilidade são avaliados no atendimento:
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
              {publicCopy(area.particularidadesLogistica)}
            </p>
          </div>
        </section>

        {/* Diretrizes Operacionais e Capacidade de Carga */}
        <section
          className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-xs"
          aria-labelledby="operacao-capacidade-bairro"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="operacao-capacidade-bairro"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Diretrizes operacionais e capacidade de carga em {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            O transporte ágil por motoboy em {area.nome} é estruturado para atender demandas urgentes
            e rotinas programadas com segurança viária e pontualidade. Para garantir a integridade da
            encomenda e o cumprimento das normas do Código de Trânsito Brasileiro (CTB) e regulamentações do CONTRAN,
            trabalhamos com critérios definidos para o compartimento de carga:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary-700" />
                Dimensões do Baú
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Compartimentos padronizados de até 80 a 90 litros, adequados para caixas de até
                40 cm x 40 cm x 40 cm. Cargas não podem ultrapassar as extremidades do baú nem obstruir
                a visibilidade dos retrovisores ou a placa da motocicleta.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Limite de Peso
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Capacidade recomendada de até 15 kg a 20 kg por corrida para preservar a estabilidade da
                moto e a agilidade nas vias de {area.nome}. Para pesos superiores ou lotes fracionados,
                consulte opções de transporte dedicado ou divisão em mais de uma rota.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface-warm p-5">
              <h3 className="font-bold text-brand-950 flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary-700" />
                Materiais Autorizados
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Documentos societários, malotes fiscais, peças técnicas, suprimentos de TI, exames laboratoriais
                acondicionados e encomendas de comércio eletrônico. Não transportamos produtos perigosos,
                inflamáveis ou itens ilícitos.
              </p>
            </div>
          </div>
        </section>

        {/* Procedimentos em Portarias e Protocolos */}
        <section
          className="border-l-4 border-primary-700 pl-4 sm:pl-6 space-y-4"
          aria-labelledby="procedimentos-portaria-bairro"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Segurança e Comprovação
          </span>
          <h2
            id="procedimentos-portaria-bairro"
            className="font-display text-2xl font-bold text-brand-950 sm:text-3xl"
          >
            Procedimentos de coleta, portarias e protocolo de entrega em {area.nome}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted">
            A rotina de entregas em {area.nome} costuma envolver endereços comerciais, plantas industriais,
            centros de distribuição e condomínios residenciais. Para que o atendimento ocorra sem interrupções
            e sem cobranças imprevistas de tempo de espera excessivo, adotamos procedimentos claros em cada etapa:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="rounded-xl border border-line bg-white p-5 shadow-xs space-y-2">
              <h3 className="font-bold text-brand-950 text-base">Identificação e Liberação de Acesso</h3>
              <p className="text-sm text-muted leading-relaxed">
                Nossos motoboys parceiros atuam devidamente identificados com capacete, documento pessoal (RG/CNH)
                e baú fechado. Se o ponto de coleta ou entrega em {area.nome} exigir autorização prévia na portaria,
                informe o nome do visitante ou deixe a liberação autorizada na guarita com antecedência para evitar retenções.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 shadow-xs space-y-2">
              <h3 className="font-bold text-brand-950 text-base">Protocolo Físico e Comprovante Digital</h3>
              <p className="text-sm text-muted leading-relaxed">
                Toda entrega importante pode ser formalizada com comprovante assinado contendo nome legível,
                número de documento e data/hora do recebimento. Para agilizar a rotina da sua empresa, a foto do canhoto
                ou do protocolo assinado pode ser enviada diretamente no WhatsApp logo após a conclusão da rota.
              </p>
            </div>
          </div>
        </section>

        {/* Planejamento de Rotas e Horários Locais */}
        <section
          className="rounded-2xl border border-line bg-surface-warm p-6 sm:p-8"
          aria-labelledby="planejamento-rotas-bairro"
        >
          <div className="flex items-center gap-3">
            <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
            <h2
              id="planejamento-rotas-bairro"
              className="font-display text-2xl font-bold text-brand-950"
            >
              Planejamento de rotas e melhor horário para solicitar em {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            {area.nome} integra a malha da {area.zona} de Guarulhos e possui particularidades de fluxo viário
            que merecem atenção estratégica. O deslocamento rápido depende não apenas da habilidade do piloto,
            mas do momento em que o chamado é aberto e da clareza dos dados informados:
          </p>
          <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              Durante os picos da manhã (das 7h às 9h30) e do final da tarde (das 17h às 19h), os corredores de acesso
              que conectam {area.nome} às rodovias e avenidas troncais registram lentidão acentuada. Sempre que a sua
              demanda permitir, programar a coleta no meio da manhã (entre 9h30 e 11h30) ou no início da tarde (entre 13h e 15h)
              garante trajetos mais fluídos e menores riscos de atraso decorrentes de congestionamentos urbanos.
            </p>
            <p>
              Ao solicitar o serviço, comunique se há restrições de horário para carga e descarga no destinatário,
              se existe intervalo de almoço na recepção ou se a entrega precisa ser efetuada impreterivelmente até um
              horário limite. Com essas informações, o atendente no WhatsApp dimensiona o trajeto ideal e confirma a viabilidade.
            </p>
          </div>
        </section>

        {/* Demandas Mais Frequentes */}
        <section aria-labelledby="demandas-bairro">
          <div className="border-l-4 border-primary-700 pl-4 sm:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Informações para a cotação

            </span>
            <h2
              id="demandas-bairro"
              className="mt-1 font-display text-2xl font-bold text-brand-950 sm:text-3xl"
            >
              Situações comuns ao solicitar motoboy em {area.nome}
            </h2>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
              A lista abaixo ajuda a explicar o pedido. Confirme com o atendente
              se a tarefa e o item podem ser atendidos:
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
              <h3 className="mt-4 font-bold text-brand-950">Confirmação com atendente</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                O atendente confirma disponibilidade e condições pelo WhatsApp
                antes de qualquer coleta.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ Local */}
        {faqItems.length > 0 && <section aria-labelledby="faq-bairro">
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
              Envie os dados da rota no WhatsApp. O atendente avaliará a
              solicitação e confirmará disponibilidade e condições.
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
