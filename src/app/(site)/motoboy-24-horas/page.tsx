import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Motoboy em Horário Comercial em Guarulhos | Seg–Sex 8h–18h",
  description:
    "Motoboy em Guarulhos em horário comercial (seg–sex, 8h–18h): coleta prioritária, urgências dentro do horário comercial e preço fechado no WhatsApp. Fora desse horário, retornamos no próximo dia útil.",
  alternates: { canonical: `${SITE.baseUrl}/motoboy-24-horas` },
  openGraph: {
    title: "Motoboy em Horário Comercial em Guarulhos",
    description: "Atendemos seg–sex, 8h–18h. Urgência dentro do horário comercial, com valor avisado antes.",
    url: `${SITE.baseUrl}/motoboy-24-horas`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd data={localBusinessJsonLd()} />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Motoboy em horário comercial" }]} />

      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-zinc-800" role="note">
        <p className="font-bold text-zinc-900">Aviso honesto: atendemos seg–sex, 8h–18h.</p>
        <p className="mt-1">
          Esta página mantém o endereço <code>/motoboy-24-horas</code> por motivos de busca, mas{" "}
          <strong>não operamos de madrugada, à noite, aos fins de semana ou em feriados</strong>.
          Fora do horário comercial, chame no WhatsApp e retornamos no próximo dia útil.
        </p>
      </div>

      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Motoboy em horário comercial em Guarulhos
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Atendemos de <strong>segunda a sexta, das 8h às 18h</strong>, com base no Centro e
          cobertura em Cumbica, Pimentas, Bonsucesso, Vila Galvão e Aeroporto. A urgência que
          resolvemos é a urgência <strong>dentro do horário comercial</strong>: piloto dedicado,
          coleta prioritária e valor confirmado antes do deslocamento.
        </p>
      </header>

      <div className="grid gap-4 rounded-2xl border p-6 sm:grid-cols-3">
        {[
          { t: "Coleta em horário comercial", d: "15–25 min no Centro e 25–40 min em Cumbica, Pimentas e Bonsucesso, seg–sex 8h–18h." },
          { t: "Cobertura total", d: "Centro, Cumbica, Pimentas, Bonsucesso, Vila Galvão e Aeroporto." },
          { t: "Preço avisado antes", d: "Valor fechado no WhatsApp antes da coleta, sem taxa surpresa." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl bg-zinc-50 p-4">
            <p className="font-bold">{c.t}</p>
            <p className="mt-1 text-sm text-zinc-700">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Urgência dentro do horário comercial</h2>
        <p>
          Prazo fatal de licitação, peça que parou a linha de produção, documento para o fórum,
          malote para o Aeroporto com voo marcado: se o relógio está correndo{" "}
          <strong>entre 8h e 18h em dia útil</strong>, um piloto dedicado assume o seu chamado com
          prioridade sobre a fila, segue em rota direta e mantém contato até a baixa. O despacho
          considera o trânsito em tempo real entre Centro, Cumbica, Pimentas e Bonsucesso,
          escolhendo o trajeto mais rápido. O preço da prioridade é informado de forma fechada
          antes da saída.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que programar com antecedência</h2>
        <p>
          Cartórios, fórum, bancos e repartições funcionam em horário comercial — e é aí que
          nossa operação rende mais. Envie a pauta com antecedência (coleta, paradas, prazo-limite)
          e receba roteiro otimizado, valor fechado e previsão real de coleta e entrega. Empresas
          com rotina diária ganham janelas fixas — por exemplo 10h, 14h e 17h — e canal direto,
          sem repetir endereço a cada chamado.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Fora do horário comercial</h2>
        <p>
          Não há coleta de madrugada, à noite, aos sábados, domingos ou feriados. Se você chamar
          fora do horário comercial, deixe coleta, entrega e descrição do item no WhatsApp:{" "}
          <strong>retornamos no próximo dia útil, em ordem de chegada</strong>, com valor e
          previsão. Para demandas críticas, programe a coleta na última janela útil anterior.
        </p>
      </div>

      <WhatsAppCTA
        title="Chame em horário comercial em Guarulhos"
        subtitle="Seg–sex, 8h–18h. Envie coleta e entrega e receba valor + previsão em minutos."
        message="Olá! Preciso de um motoboy em horário comercial em Guarulhos. Coleta: (informar) / Entrega: (informar)."
      />
    </article>
  );
}
