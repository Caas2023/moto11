import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Horário de atendimento da Moto11 em Guarulhos",
  description: "A Moto11 atende de segunda a sexta, das 8h às 18h. Não há atendimento noturno, aos fins de semana ou feriados.",
  alternates: { canonical: `${SITE.baseUrl}/motoboy-24-horas` },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <article className="max-w-3xl space-y-8">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Horário de atendimento" }]} />
       <PageHero compact eyebrow="Horário real" title="A Moto11 não atende 24 horas" description="Atendemos de segunda a sexta, das 8h às 18h. Não operamos à noite, de madrugada, aos fins de semana ou em feriados. Mantemos este endereço antigo para esclarecer quem chega procurando atendimento 24 horas." />
      <section className="rounded-3xl border border-line bg-surface-warm p-7">
        <h2 className="font-display text-2xl font-bold text-brand-950">Precisa de uma entrega?</h2>
        <p className="mt-3 leading-relaxed text-muted">
          Envie origem, destino e item pelo WhatsApp. Durante o expediente, consulte o valor e
          a disponibilidade. Mensagens enviadas fora do horário podem ser respondidas no próximo
          dia útil. Para cartórios, shopping e aeroporto, a cotação é feita à parte.
        </p>
        <Link className="mt-4 inline-block font-semibold text-primary-700 underline underline-offset-4" href="/precos">Ver tabela de preços</Link>
      </section>
      <WhatsAppCTA title="Consulte sua rota" subtitle="Atendimento de segunda a sexta, das 8h às 18h." message="Olá! Quero cotar uma rota em horário comercial. Origem: / Destino: / Item: " />
    </article>
  );
}
