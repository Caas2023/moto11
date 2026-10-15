import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/PageHero";
import { CotacaoForm } from "@/components/site/CotacaoForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cotação e Preços de Motoboy em Guarulhos | Moto11",
  description:
    "Cotação rápida e transparente de motoboy em Guarulhos e rotas para São Paulo. Preço justo calculado pela rota real, sem taxas ocultas. Consulte pelo WhatsApp.",
  alternates: { canonical: `${SITE.baseUrl}/precos` },
  openGraph: {
    title: "Cotação e Preços de Motoboy em Guarulhos | Moto11",
    description:
      "Cotação rápida e transparente de motoboy em Guarulhos. Preço fechado antes da saída sem surpresas no balcão.",
    url: `${SITE.baseUrl}/precos`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de cotar uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar). Poderia me passar o valor e a previsão?",
)}`;

const CRITERIOS = [
  {
    icon: MapPin,
    title: "Quilometragem Real por Rota",
    text: "O valor considera a rota viária real de moto entre os pontos de coleta e entrega, e não uma estimativa imprecisa em linha reta. Isso garante justiça para quem contrata e para o profissional.",
  },
  {
    icon: ShieldCheck,
    title: "Preço Fechado Antes da Saída",
    text: "Você recebe o valor final acordado pelo WhatsApp antes da moto ligar o motor. Não operamos com tarifas dinâmicas surpresa ou acréscimos arbitrários ao final da corrida.",
  },
  {
    icon: Clock3,
    title: "Tolerância para Despacho e Espera",
    text: "Sabemos que portarias, triagens de condomínios e balcões comerciais exigem alguns minutos. O atendimento combina antecipadamente a tolerância necessária para sua operação.",
  },
  {
    icon: CheckCircle2,
    title: "Missões Especiais sem Pegadinha",
    text: "Entregas em cartórios com fila de autenticação, docas de shoppings ou Terminal de Cargas do Aeroporto de Guarulhos têm suas particularidades avaliadas na cotação para total previsibilidade.",
  },
];

const CHECKLIST = [
  {
    step: "1",
    title: "Endereços Completos",
    desc: "Informe rua, número e bairro da coleta e da entrega. Se houver número de sala, bloco ou portaria específica, mencione na mensagem.",
  },
  {
    step: "2",
    title: "Descrição do Volume",
    desc: "Diga se é envelope de documentos, peças, amostras ou caixas, garantindo acomodação segura no baú vedado de até 20 kg.",
  },
  {
    step: "3",
    title: "Janela de Horário",
    desc: "Indique se a entrega é urgente para saída imediata ou se precisa ser programada para um horário específico durante o expediente comercial (8h às 18h).",
  },
  {
    step: "4",
    title: "Contatos de Origem e Destino",
    desc: "Ter o nome e telefone de quem entrega e de quem recebe evita desencontros e acelera o protocolo de entrega.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cotação de Motoboy em Guarulhos",
            serviceType: "Serviço de Entrega e Coleta Expressa",
            provider: {
              "@type": "LocalBusiness",
              name: "Moto11",
              telephone: "+5511957248425",
              areaServed: ["Guarulhos", "São Paulo"],
            },
            description:
              "Cotação transparente por rota real de motoboy para empresas e particulares em Guarulhos e rotas para São Paulo.",
          },
        ]}
      />

      <PageHero
        eyebrow="Transparência e Rapidez"
        title="Cotação e Preços de Motoboy em Guarulhos"
        description="Sem taxas ocultas ou tarifas dinâmicas. O valor da entrega é calculado de acordo com o trajeto real e confirmado no WhatsApp antes de deslocar o piloto."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Cotação e Preços</span>
        </nav>
      </PageHero>

      {/* Seção 1: Formulário de Cotação */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="form-cotacao-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-semibold text-primary-700">Simule Agora</p>
            <h2 id="form-cotacao-title" className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Cotação rápida para o seu endereço
            </h2>
            <p className="mt-3 text-lg leading-8 text-muted">
              Preencha os pontos de saída e chegada para enviar a rota completa direto ao nosso WhatsApp oficial.
            </p>
          </div>
          <CotacaoForm />
        </div>
      </section>

      {/* Seção 2: Critérios de Precificação */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="como-calculamos">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Critérios Claros</p>
            <h2 id="como-calculamos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Como é calculado o valor da sua entrega.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Avaliamos fatores técnicos reais para oferecer a proposta mais justa e previsível para você e para o piloto:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CRITERIOS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-7 transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 3: Checklist para WhatsApp */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="checklist-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Agilidade no Atendimento</p>
            <h2 id="checklist-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              O que enviar para receber sua cotação em minutos.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Ao chamar no WhatsApp, ter essas 4 informações em mãos agiliza a liberação imediata do seu motoboy:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKLIST.map((c) => (
              <div key={c.step} className="rounded-2xl bg-surface-warm p-6 border border-line">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-950 text-sm font-bold text-white">
                  {c.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Dúvidas sobre faturamento e rotas */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="faq-precos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Dúvidas frequentes</p>
            <h2 id="faq-precos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Informação clara sobre pagamento e cotação.
            </h2>
            <Link href="/faq" className="mt-6 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline">
              Ver todas as dúvidas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                <span>Quais são as formas de pagamento aceitas?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Aceitamos Pix e transferência bancária imediata para chamados avulsos. Para empresas com rotas semanais ou mensais recorrentes, oferecemos condições de faturamento mediante cadastro e aprovação prévia.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                <span>Como recebo o comprovante da entrega?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Assim que a missão é concluída, a foto do protocolo assinado com nome legível e documento de quem recebeu é enviada imediatamente no mesmo chat do WhatsApp onde o chamado foi aberto.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                <span>Vocês atendem fora do horário comercial?</span>
                <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-3 leading-7 text-muted">
                Nosso atendimento opera de segunda a sexta-feira, das 8h às 18h. Não realizamos saídas noturnas, de madrugada ou aos fins de semana. Mensagens enviadas fora do horário comercial são respondidas no início do próximo dia útil.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Seção 5: Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-precos">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-precos" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tem origem, destino e item para entregar?
            </h2>
            <p className="mt-2 text-orange-50">
              Envie os dados no WhatsApp e receba a confirmação do valor antes de fechar a corrida.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir cotação no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
