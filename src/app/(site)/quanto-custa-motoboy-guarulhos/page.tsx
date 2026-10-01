import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";
import { PRICING, formatBRL, quotePrice, quoteWait } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Quanto Custa Motoboy em Guarulhos? Preço por Distância",
  description:
    "Quanto custa motoboy em Guarulhos? 0–8 km R$ 35,00 fixos, +R$ 2,50/km extra, espera com 15 min de tolerância +R$ 0,60/min. Exemplos calculados e cotação à parte para cartórios, shopping e aeroporto.",
  alternates: { canonical: `${SITE.baseUrl}/quanto-custa-motoboy-guarulhos` },
  openGraph: {
    title: "Quanto Custa Motoboy em Guarulhos? Preço por Distância",
    description: "Preço real por distância + exemplos calculados e dicas para pagar menos.",
    url: `${SITE.baseUrl}/quanto-custa-motoboy-guarulhos`,
    type: "website",
  },
};

export default function Page() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Quanto custa motoboy em Guarulhos?", acceptedAnswer: { "@type": "Answer", text: `Trajetos de 0 a 8 km custam ${formatBRL(PRICING.basePrice)} fixos; acima de 8 km, soma-se ${formatBRL(PRICING.extraPerKm)} por km extra. Ex.: 5 km = ${formatBRL(quotePrice(5))}; 10 km = ${formatBRL(quotePrice(10))}; 15 km = ${formatBRL(quotePrice(15))}; 20 km = ${formatBRL(quotePrice(20))}. O valor fechado é confirmado no WhatsApp antes da coleta.` } },
      { "@type": "Question", name: "O que deixa o motoboy mais caro?", acceptedAnswer: { "@type": "Answer", text: `Distância acima de 8 km (${formatBRL(PRICING.extraPerKm)}/km extra) e espera após ${PRICING.waitToleranceMin} min de tolerância (${formatBRL(PRICING.waitPerMin)}/min). Cartórios, shopping e aeroporto têm cotação à parte.` } },
    ],
  };
  return (
    <article className="space-y-8">
      <JsonLd data={faq} />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Quanto custa motoboy em Guarulhos" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Quanto custa um motoboy em Guarulhos? Guia direto por distância
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Resposta curta: trajetos de 0 a 8 km custam <strong>{formatBRL(PRICING.basePrice)} fixos</strong>;
          acima disso, soma-se <strong>{formatBRL(PRICING.extraPerKm)} por km extra</strong>. Abaixo
          você vê exemplos calculados, o que encarece o preço e como pagar menos — com valor
          fechado no WhatsApp.
        </p>
      </header>

      <div className="grid gap-4 rounded-2xl border p-6 sm:grid-cols-3">
        {[
          { t: "Até 8 km", d: `${formatBRL(quotePrice(5))} fixos · Ex: Centro → Vila Augusta (5 km).` },
          { t: "10–15 km", d: `${formatBRL(quotePrice(10))}–${formatBRL(quotePrice(15))} · Ex: Centro → Cumbica (10 km) ou Pimentas (15 km).` },
          { t: "20 km", d: `${formatBRL(quotePrice(20))} · Ex: travessia longa dentro de Guarulhos e região.` },
        ].map((c) => (
          <div key={c.t} className="rounded-xl bg-zinc-50 p-4">
            <p className="font-bold">{c.t}</p>
            <p className="mt-1 text-sm text-zinc-700">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <p>
          <strong>Espera:</strong> {PRICING.waitToleranceMin} min de tolerância inclusos; após,{" "}
          {formatBRL(PRICING.waitPerMin)}/min — ex.: 30 min de espera = {formatBRL(quoteWait(30))}.{" "}
          <strong>Cartórios, shopping e aeroporto:</strong> cotação à parte. Atendimento de segunda
          a sexta, das 8h às 18h.
        </p>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Exemplos calculados pela tabela real</h2>
        <p>
          Aplicando a regra ({formatBRL(PRICING.basePrice)} até {PRICING.baseKm} km +{" "}
          {formatBRL(PRICING.extraPerKm)}/km extra): um envelope do Centro para a Vila Galvão
          (5 km) sai por {formatBRL(quotePrice(5))}; uma caixa de peças do Centro para Cumbica
          (10 km) por {formatBRL(quotePrice(10))}; um malote de 15 km por {formatBRL(quotePrice(15))};
          e uma rota de 20 km por {formatBRL(quotePrice(20))}. Se o piloto aguardar 30 minutos em
          portaria ou balcão, soma-se {formatBRL(quoteWait(30))} de espera. Juntar entregas no mesmo
          roteiro quase sempre compensa — informe o roteiro completo logo no primeiro contato.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que encarece (e como evitar)</h2>
        <p>
          Dois fatores pesam no preço: distância acima de 8 km ({formatBRL(PRICING.extraPerKm)}/km
          extra) e tempo de espera após {PRICING.waitToleranceMin} min de tolerância
          ({formatBRL(PRICING.waitPerMin)}/min). Você evita custo extra informando o roteiro completo
          de uma vez, deixando documentos e autorizações separados na portaria e avisando o
          destinatário antes da chegada. Cartórios, shopping e aeroporto seguem cotação à parte —
          peça o valor fechado antes da coleta. Empresas que concentram coletas em janelas fixas
          — por exemplo 10h e 16h — organizam o gasto mensal com previsibilidade.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Como pedir o valor fechado em minutos</h2>
        <p>
          Envie no WhatsApp a coleta com referência, a entrega com destinatário, o tipo de volume
          e o prazo. O atendente responde com total, previsão de coleta e nome do piloto — tudo
          registrado. Se o valor estourar seu orçamento, peça alternativa: reagrupar paradas
          ou ajustar a janela de coleta costuma reduzir o total sem perder o prazo crítico.
          E compare com consciência: o mais barato que não comprova a
          entrega, some no trânsito ou cobra retorno escondido sai mais caro no fim do mês.
        </p>
      </div>

      <WhatsAppCTA
        title="Descubra quanto custa a sua rota agora"
        subtitle="Envie origem e destino e receba o valor fechado em minutos, sem compromisso."
        message="Olá! Quero saber quanto custa um motoboy em Guarulhos para minha rota. Origem: (informar) / Destino: (informar)."
      />
    </article>
  );
}
