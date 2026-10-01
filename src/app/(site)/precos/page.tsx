import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";
import { PRICING, formatBRL, quotePrice, quoteWait } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Tabela de Preços de Motoboy em Guarulhos",
  description:
    "Tabela real de preços de motoboy em Guarulhos: 0–8 km R$ 35,00 fixos, +R$ 2,50/km extra, espera com 15 min de tolerância +R$ 0,60/min. Cartórios, shopping e aeroporto: cotação à parte.",
  alternates: { canonical: `${SITE.baseUrl}/precos` },
  openGraph: {
    title: "Tabela de Preços de Motoboy em Guarulhos",
    description: "Preço por distância e espera, calculado pela tabela real. Confirme o valor fechado no WhatsApp.",
    url: `${SITE.baseUrl}/precos`,
    type: "website",
  },
};

const ROWS = [
  { servico: "Entrega de 0 a 8 km (preço fixo)", ref: `${formatBRL(quotePrice(5))} — ex.: 5 km`, obs: "Valor fechado por distância" },
  { servico: "Entrega de 10 km", ref: formatBRL(quotePrice(10)), obs: `R$ 35,00 + 2 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Entrega de 15 km", ref: formatBRL(quotePrice(15)), obs: `R$ 35,00 + 7 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Entrega de 20 km", ref: formatBRL(quotePrice(20)), obs: `R$ 35,00 + 12 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Tempo de espera", ref: `${PRICING.waitToleranceMin} min de tolerância + ${formatBRL(PRICING.waitPerMin)}/min — ex.: 30 min = ${formatBRL(quoteWait(30))}`, obs: "Avisado antes de continuar aguardando" },
  { servico: "Cartórios, shopping e aeroporto", ref: "Cotação à parte", obs: "Preço diferente — peça no WhatsApp" },
];

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Table",
            about: "Tabela de preços de motoboy em Guarulhos",
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Preços" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Tabela de preços de motoboy em Guarulhos
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Preço por distância e espera, calculado pela tabela real Moto11: 0–8 km por{" "}
          {formatBRL(PRICING.basePrice)} fixos, +{formatBRL(PRICING.extraPerKm)}/km extra,
          espera com {PRICING.waitToleranceMin} min de tolerância +{formatBRL(PRICING.waitPerMin)}/min.
          O preço final é sempre confirmado no WhatsApp antes da coleta — sem taxa escondida.
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="p-4 text-left font-semibold">Tabela real Moto11 — Guarulhos e região (sujeita a confirmação por rota)</caption>
          <thead className="bg-zinc-950 text-white">
            <tr>
              <th className="p-3">Serviço</th>
              <th className="p-3">Valor de referência</th>
              <th className="p-3">Observação</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r.servico} className={i % 2 ? "bg-zinc-50" : "bg-white"}>
                <td className="p-3 font-medium">{r.servico}</td>
                <td className="p-3">{r.ref}</td>
                <td className="p-3">{r.obs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como ler a tabela sem errar</h2>
        <p>
          Os valores acima saem direto da regra: {formatBRL(PRICING.basePrice)} fixos para
          trajetos de 0 a {PRICING.baseKm} km e {formatBRL(PRICING.extraPerKm)} por quilômetro
          extra acima disso. A distância é calculada pela rota real de moto, não em linha reta,
          e o atendente informa o total fechado antes de deslocar o piloto. Se o seu roteiro tem
          espera em fila ou volume fora do padrão, o adicional é avisado antecipadamente
          — você aprova ou ajusta a rota, sem surpresa na fatura.
        </p>
        <p>
          As rotas mais pedidas em Guarulhos são Centro → Cumbica, Centro → Pimentas e
          Vila Galvão → região do Aeroporto. O atendimento é de segunda a sexta, das 8h às 18h
          — sem operação de madrugada, à noite, aos fins de semana ou em feriados.
          Cartórios, shopping e aeroporto têm cotação à parte, com preço informado antes da coleta.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que está incluído em todos os preços</h2>
        <p>
          Todo atendimento inclui piloto uniformizado, baú vedado com capa de chuva, confirmação
          de coleta por mensagem, foto do comprovante na entrega e reenvio da nota do serviço.
          Volumes frágeis recebem fixação interna e lacre sem custo. Remédios e vacinas viajam em
          bolsa térmica quando solicitado. Não cobramos taxa de retorno quando o destinatário
          está ausente na primeira tentativa dentro da janela combinada: reagendamos a entrega no
          mesmo dia pelo custo de uma nova rota simples, com prioridade.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Quando vale a pena o plano empresa</h2>
        <p>
          Escritórios de advocacia, clínicas, autopeças, restaurantes e e-commerces que enviam
          todos os dias economizam com roteirização: juntar duas ou três entregas no mesmo
          deslocamento reduz o custo unitário e garante janelas fixas de coleta — por exemplo,
          10h, 14h e 17h. O contrato inclui relatório mensal com data, rota, valor e comprovante,
          além de um canal direto com o despachante. Para simular a economia, envie
          sua média semanal no WhatsApp e receba a proposta com desconto aplicado em até 30 minutos
          no horário comercial.
        </p>
      </div>

      <WhatsAppCTA
        title="Quer o valor exato da sua rota?"
        subtitle="Envie origem e destino e receba o preço fechado + previsão de coleta em minutos."
        message="Olá! Vi a tabela de preços no site e quero o valor fechado da minha rota em Guarulhos."
      />
    </article>
  );
}
