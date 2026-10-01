import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Entrega Urgente em Guarulhos | Piloto Dedicado em Minutos",
  description:
    "Entrega urgente em Guarulhos com piloto dedicado, coleta prioritária e comprovante com foto. Documentos, remédios, peças e chaves. Chame no WhatsApp.",
  alternates: { canonical: `${SITE.baseUrl}/entrega-urgente` },
  openGraph: {
    title: "Entrega Urgente em Guarulhos",
    description: "Prioridade total na fila, coleta em minutos e entrega com comprovante.",
    url: `${SITE.baseUrl}/entrega-urgente`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Entrega urgente de motoboy em Guarulhos",
            provider: { "@type": "LocalBusiness", name: SITE.name },
            areaServed: "Guarulhos, SP",
            url: `${SITE.baseUrl}/entrega-urgente`,
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Entrega urgente" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Entrega urgente em Guarulhos com piloto dedicado
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Quando cada minuto conta — documento com prazo, remédio, peça parada, chave esquecida
          — a entrega urgente coloca um piloto dedicado só para você, com coleta prioritária,
          rota direta e comprovante com foto. Atendimento em horário comercial (seg–sex, 8h–18h)
          em toda Guarulhos. Fora desse horário, chame no WhatsApp e retornamos no próximo dia útil.
        </p>
      </header>

      <ol className="grid gap-4 sm:grid-cols-4">
        {[
          { t: "1. Chame no WhatsApp", d: "Envie coleta, entrega e o item. Marcamos como URGENTE." },
          { t: "2. Valor fechado", d: "Preço com prioridade confirmado antes do deslocamento." },
          { t: "3. Coleta prioritária", d: "Piloto mais próximo desviado para você em minutos." },
          { t: "4. Entrega comprovada", d: "Foto do comprovante + mensagem de confirmação." },
        ].map((s) => (
          <li key={s.t} className="rounded-xl border p-4">
            <p className="font-bold">{s.t}</p>
            <p className="mt-1 text-sm text-zinc-700">{s.d}</p>
          </li>
        ))}
      </ol>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">O que caracteriza a entrega urgente</h2>
        <p>
          Diferente da entrega padrão, que pode compartilhar janela de rota com outras coletas
          próximas, a urgente trava um piloto exclusivamente para o seu chamado do início ao fim.
          Ele vai direto ao ponto de coleta, sem paradas intermediárias, e segue pela rota mais
          rápida até o destino — considerando trânsito em tempo real na Dutra, Fernão Dias, Paulo
          Faccini e vias do Centro. O atendente acompanha o deslocamento e avisa cada etapa:
          piloto a caminho, coleta realizada, em rota e entrega concluída. Para destinatários
          corporativos, ligamos antes para garantir recebimento imediato na portaria.
        </p>
        <p>
          Os itens mais comuns na modalidade urgente são envelopes com contratos e licitações,
          receitas e medicamentos de uso imediato, chaves de imóvel e de veículo, peças de
          manutenção industrial, HDs e notebooks para suporte técnico, e malotes para o Aeroporto
          com horário de voo marcado. Cada categoria tem um cuidado específico: documentos viajam
          em pasta impermeável lacrada, eletrônicos em baú com amortecimento, remédios em bolsa
          térmica e chaves em envelope numerado com retirada apenas pelo destinatário autorizado.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Prazos reais por região</h2>
        <p>
          Dentro do Centro e bairros vizinhos, a coleta urgente ocorre em 10 a 20 minutos e a
          entrega total raramente passa de 1 hora. Para Cumbica, Pimentas e Bonsucesso, conte com
          20 a 35 minutos de coleta e entrega total entre 1h e 1h30 conforme o trânsito. Rotas
          Guarulhos → São Paulo capital em regime urgente levam de 1h30 a 2h30 porta a porta, com
          saída imediata após a coleta. Esses prazos são médias operacionais de 2025; o atendente
          informa a previsão exata do seu chamado considerando horário, chuva e bloqueios viários.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Quanto custa a prioridade</h2>
        <p>
          A tarifa urgente aplica cerca de 40% sobre a tarifa padrão da mesma rota, justamente
          porque reserva um piloto dedicado e reorganiza a fila. Na prática, uma rota padrão de
          R$ 40 sai por cerca de R$ 56 na urgente — diferença pequena diante de um prazo perdido,
          uma linha de produção parada ou um voo perdido. O valor é sempre confirmado antes do
          deslocamento, com protocolo registrado. Empresas com SLA crítico podem contratar
          prioridade permanente com janelas garantidas e faturamento mensal.
        </p>
      </div>

      <WhatsAppCTA
        title="Ativar entrega urgente agora"
        subtitle="Piloto dedicado em horário comercial (seg–sex, 8h–18h). Resposta em minutos."
        message="URGENTE: preciso de motoboy agora em Guarulhos. Coleta: (informar) / Entrega: (informar) / Item: (informar)."
      />
    </article>
  );
}
