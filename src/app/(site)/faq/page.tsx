import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE } from "@/lib/site";
import { PHONE_WA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre Motoboy em Guarulhos | Moto11",
  description:
    "Tire suas dúvidas sobre cotação, horários de atendimento, tempo de espera, áreas atendidas e como solicitar sua entrega de moto.",
  alternates: { canonical: `${SITE.baseUrl}/faq` },
  openGraph: {
    title: "FAQ Motoboy em Guarulhos | Moto11",
    description: "Respostas diretas sobre cotação, horários, cobertura e contratação de motoboy.",
    url: `${SITE.baseUrl}/faq`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de tirar uma dúvida sobre entregas com a Moto11.",
)}`;

const FAQS = [
  {
    q: "Como é calculada a cotação de motoboy?",
    a: "O valor é calculado com base na quilometragem viária real de moto entre os pontos de coleta e entrega, considerando o tipo de volume e as particularidades do local. Você recebe o valor fechado no WhatsApp antes da saída, sem taxas ocultas.",
  },
  {
    q: "Qual é o horário de atendimento da Moto11?",
    a: "Nosso atendimento opera de segunda a sexta-feira, das 08h às 18h. Não realizamos entregas noturnas, de madrugada ou aos finais de semana. Mensagens enviadas fora do expediente são respondidas no início do próximo dia útil.",
  },
  {
    q: "Como funciona a tolerância de espera?",
    a: "Oferecemos uma tolerância de cortesia para localização de responsáveis e liberação em portarias ou balcões. Caso o local exija espera prolongada (como filas em cartórios), combinamos as condições previamente pelo WhatsApp antes de aguardar.",
  },
  {
    q: "Cartório, shopping e aeroporto têm regras especiais?",
    a: "Sim. Esses locais exigem procedimentos específicos de estacionamento, credenciamento em docas ou espera em guichês. Por isso, recebem cotação sob medida no momento do pedido para total previsibilidade.",
  },
  {
    q: "Qual é a previsão de chegada do motoboy?",
    a: "A previsão depende do ponto de coleta, do trânsito viário no momento e da disponibilidade de pilotos na região. O prazo estimado é sempre informado no WhatsApp antes de você confirmar a corrida.",
  },
  {
    q: "Quais regiões e bairros são atendidos?",
    a: "Atendemos todos os bairros e polos industriais de Guarulhos (Centro, Cumbica, Macedo, Bonsucesso, Pimentas, Vila Augusta, etc.) e realizamos rotas diárias para São Paulo Capital e Região Metropolitana.",
  },
  {
    q: "O que preciso enviar para cotar uma entrega?",
    a: "Basta informar: 1. Endereço completo de coleta; 2. Endereço completo de entrega; 3. O que vai transportar (documentos, caixas, etc.); 4. Horário desejado.",
  },
  {
    q: "O valor informado pode mudar após a corrida?",
    a: "Não. A transparência é nosso compromisso. O preço fechado no WhatsApp antes do início do trajeto é exatamente o valor final da entrega, eliminando tarifas dinâmicas ou surpresas.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Tire suas Dúvidas"
        title="Perguntas frequentes sobre o serviço de motoboy."
        description="Respostas claras sobre cotação, horários de funcionamento, regras de espera e como solicitar a sua entrega com segurança e agilidade."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">FAQ</span>
        </nav>
      </PageHero>

      {/* Seção 1: Accordion FAQ */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="faq-list-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-primary-700">Dúvidas Comuns</p>
            <h2 id="faq-list-title" className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Informação direta para decidir com rapidez.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-line bg-surface p-6 transition-colors open:bg-surface-warm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-brand-950">
                  <span>
                    <span className="mr-2 text-primary-600">{String(i + 1).padStart(2, "0")}.</span>
                    {f.q}
                  </span>
                  <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted text-base pl-8 border-l-2 border-primary-600/30">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 2: Como Evitar Cotações Incompletas */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="dicas-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-primary-700">Dica Prática</p>
              <h2 id="dicas-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
                Como agilizar sua cotação no WhatsApp.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>
                O detalhe que mais acelera a liberação do motoboy é enviar os endereços completos logo na primeira mensagem. Apenas o nome do bairro ajuda a situar a região, mas não permite traçar a rota viária real de moto, calcular a distância e verificar o trânsito do trajeto.
              </p>
              <p>
                Para condomínios, prédios empresariais ou centros comerciais, inclua bloco, sala, número de portaria ou nome do destinatário. Se houver protocolo de assinatura ou retorno de documento, mencione antecipadamente para que a missão seja planejada do início ao fim sem interrupções.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-faq">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-faq" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Sua dúvida não estava aqui?
            </h2>
            <p className="mt-2 text-orange-50">
              Chame nossa equipe pelo WhatsApp e receba a resposta para a sua rota na hora.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
