import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato Moto11 | WhatsApp e telefone em Guarulhos",
  description:
    "Fale com a Moto11 em Guarulhos por WhatsApp, telefone ou e-mail. Atendimento de segunda a sexta, das 8h às 18h.",
  alternates: { canonical: `${SITE.baseUrl}/contato` },
  openGraph: {
    title: "Contato | Moto11 Express Guarulhos",
    description: "WhatsApp, telefone e e-mail oficiais da Moto11 em Guarulhos.",
    url: `${SITE.baseUrl}/contato`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          localBusinessJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato – Moto11 Express",
            url: `${SITE.baseUrl}/contato`,
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Contato: motoboy em Guarulhos em horário comercial
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Use o WhatsApp, telefone ou e-mail em horário comercial. A Moto11 não
          divulga endereço físico de atendimento ao público; as coletas são combinadas por rota.
        </p>
      </header>

      <section aria-label="Canais de atendimento" className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-5">
          <p className="font-bold">WhatsApp comercial</p>
          <p className="mt-1 text-sm text-zinc-700">Seg–sex, 8h–18h.</p>
          <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-emerald-700 underline">{SITE.whatsappDisplay}</a>
        </div>
        <div className="rounded-xl border p-5">
          <p className="font-bold">Telefone</p>
          <p className="mt-1 text-sm text-zinc-700">Ligações durante o horário comercial.</p>
          <a href={SITE.phoneHref} className="mt-3 inline-block font-bold underline">{SITE.phoneDisplay}</a>
        </div>
        <div className="rounded-xl border p-5">
          <p className="font-bold">E-mail</p>
          <p className="mt-1 text-sm text-zinc-700">Orçamentos e contratos empresariais.</p>
          <a href={`mailto:${SITE.email}`} className="mt-3 inline-block font-bold underline">{SITE.email}</a>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-4">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">Área e horário de atendimento</h2>
            <address className="mt-3 text-sm not-italic leading-6 text-zinc-700">
              <strong>{SITE.name} – {SITE.tagline}</strong>
              <br />
              {SITE.address.city} – {SITE.address.region} (sem balcão aberto ao público)
              <br />
              Tel: <a href={SITE.phoneHref} className="underline">{SITE.phoneDisplay}</a>
              <br />
              {SITE.hours}
            </address>
          </div>
          <div className="rounded-2xl border bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
            <strong className="text-zinc-900">Para receber uma cotação:</strong>{" "}
            envie origem, destino, item, contatos e prazo desejado. Atendimento e
            previsão dependem da rota e da disponibilidade.
          </div>
        </div>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como acelerar seu atendimento</h2>
        <p>
          Ao chamar, envie de uma vez: endereço completo de coleta com complemento e referência,
          nome e telefone de quem entrega o volume, endereço de destino com o nome do
          destinatário, descrição do item e o horário limite. Com esses dados, o atendente
           permite avaliar a rota com menos idas e vindas. Para locais com acesso
           especial, informe previamente as exigências conhecidas. Para demandas
           empresariais, indique frequência e janelas desejadas.
        </p>
        <p>
          O atendimento ocorre de segunda a sexta, das 8h às 18h. Mensagens enviadas
          fora desse período podem ser respondidas no próximo dia útil. Se a demanda
          tiver horário limite, escreva essa informação logo no início da mensagem.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Como confirmamos a área atendida</h2>
        <p>
          Recebemos solicitações em Guarulhos e para rotas com São Paulo. A cobertura
          final depende dos endereços completos, do item, do horário e da disponibilidade.
          Cartórios, shopping e aeroporto recebem cotação à parte. Consulte a página de
          áreas atendidas e confirme a rota no canal oficial antes de programar a coleta.
        </p>
      </div>

      <WhatsAppCTA compact message="Olá! Vim pela página de contato e preciso de um motoboy em Guarulhos." />
    </article>
  );
}
