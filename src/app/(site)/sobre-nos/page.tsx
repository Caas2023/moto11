import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Moto11 | Motoboy Profissional em Guarulhos e SP",
  description:
    "Conheça a história e o modelo de atendimento da Moto11 em Guarulhos: coletas expressas, rotas empresariais e compromisso com o prazo.",
  alternates: { canonical: `${SITE.baseUrl}/sobre-nos` },
  openGraph: {
    title: "Sobre a Moto11 | Motoboy em Guarulhos e SP",
    description:
      "Entregas expressas em Guarulhos e rotas metropolitanas com preço fechado antes da saída e atendimento comercial de seg. a sex., 8h às 18h.",
    url: `${SITE.baseUrl}/sobre-nos`,
    type: "website",
  },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de conhecer melhor os serviços da Moto11 e solicitar uma cotação para minha empresa/entrega.",
)}`;

const PILARES = [
  {
    icon: ShieldCheck,
    title: "Preço Fechado Sem Surpresas",
    desc: "Apresentamos o valor final no WhatsApp antes de deslocar o piloto. Não trabalhamos com tarifas dinâmicas ocultas ou acréscimos arbitrários no balcão.",
  },
  {
    icon: Clock,
    title: "Pontualidade e Janelas Reais",
    desc: "Atendimento focado no horário comercial, de segunda a sexta, das 8h às 18h, priorizando a segurança viária dos pilotos e a integridade da sua carga.",
  },
  {
    icon: FileCheck,
    title: "Comprovação Digital Imediata",
    desc: "Toda entrega concluída gera foto do protocolo assinado com nome legível e documento do recebedor, enviada imediatamente no chat para sua tranquilidade.",
  },
  {
    icon: Truck,
    title: "Cuidado e Proteção da Carga",
    desc: "Operamos com baús vedados resistentes à água e adequados para até 20 kg, ideais para documentos, contratos, exames, peças e encomendas de e-commerce.",
  },
];

const PASSOS = [
  {
    numero: "01",
    titulo: "Envio das Informações",
    texto: "Você informa origem, destino, descrição do volume e horário desejado pelo WhatsApp.",
  },
  {
    numero: "02",
    titulo: "Cotação e Confirmação",
    texto: "Calculamos a rota viária real, alinhamos a tolerância e confirmamos o valor exato antes da partida.",
  },
  {
    numero: "03",
    titulo: "Deslocamento e Coleta",
    texto: "O piloto mais bem posicionado é acionado e retira o item no local combinado com agilidade.",
  },
  {
    numero: "04",
    titulo: "Entrega e Protocolo",
    texto: "O item é entregue em mãos com assinatura do recebedor e comprovante enviado em tempo real.",
  },
];

export default function SobreNosPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional Moto11"
        title="Agilidade urbana com compromisso real em cada rota."
        description="A Moto11 nasceu para resolver a logística rápida em Guarulhos e rotas para São Paulo com seriedade, clareza e previsibilidade para empresas e pessoas."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Sobre nós</span>
        </nav>
      </PageHero>

      {/* Seção 1: Pilares */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="pilares-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Nosso Compromisso</p>
            <h2 id="pilares-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Uma boa entrega começa pelo respeito à sua operação.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Não fazemos promessas impossíveis. Trabalhamos com processos claros que garantem a segurança do remetente, do destinatário e do profissional na rua:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="rounded-2xl border border-line bg-surface-warm p-6 transition-all hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 2: Contexto Operacional em Guarulhos */}
      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="operacao-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Conhecimento Local</p>
            <h2 id="operacao-title" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Especialistas na malha viária de Guarulhos e Grande SP.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Guarulhos é uma das cidades economicamente mais ativas e complexas do país. Ligar polos industriais em Cumbica e Bonsucesso ao Centro comercial, à Vila Augusta ou aos bairros residenciais exige mais do que seguir um aplicativo: exige conhecimento dos horários de pico da Rodovia Presidente Dutra, da Rodovia Ayrton Senna e das vias arteriais como Monteiro Lobato e Tiradentes.
            </p>
            <p>
              Nossa operação posiciona pilotos estrategicamente para atender prontamente chamados em escritórios, indústrias, comércios e consultórios. Entendemos as particularidades de docas de carga, recepções corporativas, cartórios e o Terminal de Cargas do Aeroporto Internacional de Guarulhos (GRU), orientando o cliente desde o primeiro contato sobre as etapas necessárias para que a entrega ocorra sem surpresas.
            </p>
            <p>
              Para rotas entre Guarulhos e a capital paulista, operamos com comunicação constante. Cada entrega interestadual ou metropolitana tem suas variáveis de trânsito monitoradas para oferecer previsibilidade real, permitindo que a sua empresa cumpra prazos fiscais, bancários e comerciais com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3: Como Funciona Passo a Passo */}
      <section className="bg-surface py-16 sm:py-24" aria-labelledby="como-funciona-sobre">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Processo Transparente</p>
            <h2 id="como-funciona-sobre" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Como funciona o chamado na prática.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Do primeiro contato no WhatsApp até a confirmação de entrega com comprovante:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((passo) => (
              <div key={passo.numero} className="rounded-2xl border border-line bg-white p-6 shadow-xs">
                <span className="font-display text-3xl font-extrabold text-primary-600">
                  {passo.numero}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
                  {passo.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {passo.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-sobre">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-sobre" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Precisa de motoboy para sua empresa ou coleta rápida?
            </h2>
            <p className="mt-2 text-orange-50">
              Chame nossa equipe no WhatsApp e receba a cotação imediata da sua rota.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com a Moto11
          </a>
        </div>
      </section>
    </>
  );
}
