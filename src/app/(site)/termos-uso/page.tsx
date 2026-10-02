import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Condições de atendimento | Moto11",
  description: "Informações básicas para solicitar uma entrega à Moto11.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <article className="max-w-3xl space-y-6">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Condições de atendimento" }]} />
       <PageHero compact eyebrow="Informações de contratação" title="Condições de atendimento" />
      <p className="text-lg leading-relaxed text-muted">
        O atendimento da Moto11 funciona de segunda a sexta, das 8h às 18h. Informe origem,
        destino e item para receber uma cotação e confirmar a disponibilidade. O valor da rota
        e as condições específicas devem ser confirmados antes de contratar o serviço.
      </p>
      <p className="text-muted">Consulte a <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">tabela de preços</Link> ou tire dúvidas pelo telefone {SITE.phoneDisplay}.</p>
      <p className="text-sm text-muted">Termos contratuais detalhados pendentes de validação.</p>
    </article>
  );
}
