import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  FileCheck,
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
      "Entregas em Guarulhos e rotas metropolitanas, com atendimento comercial de seg. a sex., 8h às 18h.",
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
    title: "Cotação pelo atendente",
    desc: "Toda solicitação é avaliada pelo atendente no WhatsApp. Disponibilidade e condições são confirmadas antes da coleta.",
  },
  {
    icon: Clock,
    title: "Informações completas",
    desc: "Endereços, item, horário e instruções de acesso ajudam o atendente a avaliar a solicitação com segurança.",
  },
  {
    icon: FileCheck,
    title: "Instruções de entrega",
    desc: "Informe se há necessidade de protocolo, assinatura, retorno ou contato específico no destino.",
  },
  {
    icon: Truck,
    title: "Item e embalagem",
    desc: "Descreva peso, dimensões, fragilidade e embalagem para que o atendente confirme se o transporte é viável.",
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
    texto: "O atendente avalia os detalhes da rota e confirma disponibilidade e condições pelo WhatsApp.",
  },
  {
    numero: "03",
    titulo: "Confirmação da coleta",
    texto: "Depois da confirmação, mantenha uma pessoa disponível na coleta e siga as instruções combinadas no atendimento.",
  },
  {
    numero: "04",
    titulo: "Entrega combinada",
    texto: "Confirme com o atendente o contato do destino e qualquer exigência de recebimento antes da coleta.",
  },
];

export default function SobreNosPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional Moto11"
        title="Atendimento de motoboy com informação clara desde o início."
        description="A Moto11 recebe solicitações para Guarulhos e rotas para São Paulo. Cada rota é avaliada pelo atendente antes da confirmação."
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
              A solicitação começa com informações claras. Assim, o atendente pode avaliar a rota antes de confirmar a coleta:
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
              O que informar para uma rota em Guarulhos e São Paulo.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Guarulhos tem polos industriais, comerciais e residenciais conectados por vias como a Rodovia Presidente Dutra, a Rodovia Ayrton Senna, a Avenida Monteiro Lobato e a Avenida Tiradentes. A condição da rota varia conforme origem, destino, horário e acesso ao local.
            </p>
            <p>
              Para escritórios, indústrias, comércios e consultórios, informe se a retirada acontece em doca, recepção, portaria, cartório ou outro ponto com regras de acesso. Inclua nome e telefone de quem estará no local.
            </p>
            <p>
              Nas rotas entre Guarulhos e São Paulo, envie os dois endereços completos, a janela desejada e o prazo-limite real. O atendente avalia a disponibilidade no momento do pedido; uma página de região não confirma uma rota automaticamente.
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
              Abaixo está o fluxo da solicitação pelo WhatsApp:
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
              Envie os dados da rota pelo WhatsApp e aguarde a avaliação do atendente.
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
