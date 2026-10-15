import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/PageHero";
import { CotacaoForm } from "@/components/site/CotacaoForm";
import { SITE } from "@/lib/site";
import { CheckCircle2, Clock3, MapPin, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

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
    <article className="space-y-12 sm:space-y-16">
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

      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Cotação e Preços" }]} />

      <PageHero
        compact
        eyebrow="Transparência e Rapidez"
        title="Cotação e Preços de Motoboy em Guarulhos"
        description="Sem taxas ocultas ou tarifas dinâmicas. O valor da entrega é calculado de acordo com o trajeto real e confirmado no WhatsApp antes de deslocar o piloto."
      />

      {/* Formulário de Cotação */}
      <section aria-labelledby="form-cotacao-title" className="space-y-4">
        <h2 id="form-cotacao-title" className="sr-only">
          Formulário de Cotação de Rota
        </h2>
        <CotacaoForm />
      </section>

      {/* Como calculamos */}
      <section aria-labelledby="como-calculamos" className="space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Critérios Claros
          </p>
          <h2 id="como-calculamos" className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
            Como é calculado o valor da sua entrega
          </h2>
          <p className="mt-2.5 text-sm text-muted sm:text-base leading-relaxed">
            Entenda os fatores levados em conta para apresentar a cotação mais justa e segura para a sua demanda:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {CRITERIOS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6 transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* O que enviar para cotar */}
      <section aria-labelledby="checklist-title" className="rounded-2xl bg-surface-warm p-6 sm:p-10 border border-line">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Agilidade no Atendimento
          </p>
          <h2 id="checklist-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
            O que enviar para receber sua cotação em minutos
          </h2>
          <p className="mt-2 text-sm text-muted">
            Ao chamar no WhatsApp, ter essas 4 informações em mãos agiliza a liberação do seu motoboy:
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHECKLIST.map((c) => (
            <div key={c.step} className="rounded-xl bg-surface p-5 border border-line/60">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-950 text-xs font-bold text-white">
                {c.step}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-brand-950">
                {c.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dúvidas sobre faturamento e rotas */}
      <section aria-labelledby="faq-precos" className="space-y-6">
        <h2 id="faq-precos" className="font-display text-2xl font-bold text-brand-950">
          Dúvidas frequentes sobre pagamento e cotação
        </h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-line bg-surface p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-brand-950">
              <span>Quais são as formas de pagamento aceitas?</span>
              <span className="text-xl text-primary-700 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Aceitamos Pix e transferência bancária imediata para chamados avulsos. Para empresas com rotas semanais ou mensais recorrentes, oferecemos condições de faturamento mediante cadastro e aprovação prévia.
            </p>
          </details>

          <details className="group rounded-xl border border-line bg-surface p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-brand-950">
              <span>Como recebo o comprovante da entrega?</span>
              <span className="text-xl text-primary-700 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Assim que a missão é concluída, a foto do protocolo assinado com nome legível e documento de quem recebeu é enviada imediatamente no mesmo chat do WhatsApp onde o chamado foi aberto.
            </p>
          </details>

          <details className="group rounded-xl border border-line bg-surface p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-brand-950">
              <span>Vocês atendem fora do horário comercial?</span>
              <span className="text-xl text-primary-700 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Nosso atendimento opera de segunda a sexta-feira, das 8h às 18h. Não realizamos saídas noturnas, de madrugada ou aos fins de semana. Mensagens enviadas fora do horário comercial são respondidas no início do próximo dia útil.
            </p>
          </details>
        </div>
      </section>

      {/* Links de apoio */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
        <p>
          Precisa de rotas contínuas para seu negócio?{" "}
          <Link href="/servicos" className="font-semibold text-primary-700 hover:underline">
            Conheça nossos serviços empresariais
          </Link>
        </p>
        <Link href="/areas-atendidas" className="font-semibold text-brand-950 hover:text-primary-700">
          Ver bairros atendidos em Guarulhos →
        </Link>
      </div>
    </article>
  );
}
