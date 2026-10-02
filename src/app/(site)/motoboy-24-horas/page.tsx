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

      <section className="prose max-w-3xl space-y-5 text-muted">
        <h2 className="font-display text-2xl font-bold text-brand-950">Por que a Moto11 não divulga operação 24 horas</h2>
        <p>
          Muitos anúncios na internet usam o termo “motoboy 24 horas” como chamariz comercial para atrair cliques a qualquer momento do dia ou da madrugada. No entanto, na prática operacional da maioria das cidades brasileiras, manter plantões noturnos contínuos e atendimento de madrugada exige equipes em escalas diferenciadas de segurança, adicionais de periculosidade e regras viárias estritas.
        </p>
        <p>
          A Moto11 adota uma postura de total transparência com o cliente: nosso expediente oficial é de segunda a sexta-feira, das 08h00 às 18h00. Fora desse período, nosso canal no WhatsApp recebe as mensagens e registra as informações enviadas (origem, destino, item e horário desejado), mas o retorno com a cotação definitiva e o agendamento da coleta ocorrem a partir das primeiras horas do próximo dia útil.
        </p>
        <p>
          Manter o foco exclusivo no horário comercial diurno nos permite concentrar a frota nos períodos de maior demanda produtiva em Guarulhos e na Grande São Paulo: o horário bancário, o funcionamento de fóruns e cartórios, os horários de expedição e recebimento de cargas industriais ao longo da Via Dutra e os picos de faturamento das empresas.
        </p>
        <p>
          Dessa forma, garantimos que cada piloto designado para a sua rota esteja devidamente descansado, com motocicleta revisada, baú higienizado e equipamentos de proteção individual adequados, cumprindo as normas regulamentadas pelo município e pelo Contran. Para nós, a segurança e a pontualidade na entrega de documentos sigilosos, contratos e mercadorias vêm sempre antes de promessas de atendimento ininterrupto que não refletem a operação real.
        </p>
      </section>
      <WhatsAppCTA title="Consulte sua rota" subtitle="Atendimento de segunda a sexta, das 8h às 18h." message="Olá! Quero cotar uma rota em horário comercial. Origem: / Destino: / Item: " />
    </article>
  );
}
