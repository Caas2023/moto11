import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes sobre motoboy em Guarulhos",
  description:
    "Respostas confirmadas sobre preço, horário, espera, cobertura e contratação de motoboy em Guarulhos.",
  alternates: { canonical: `${SITE.baseUrl}/faq` },
  openGraph: {
    title: "FAQ Motoboy em Guarulhos",
    description: "Respostas diretas sobre preço, horário, cobertura e contratação.",
    url: `${SITE.baseUrl}/faq`,
    type: "website",
  },
};

const FAQS: { q: string; a: string }[] = [
  { q: "Quanto custa um motoboy em Guarulhos?", a: "A tabela da Moto11 é R$ 35,00 para trajetos de até 8 km. Acima de 8 km, acrescentamos R$ 2,50 por quilômetro excedente. O valor final é confirmado com os endereços completos." },
  { q: "Qual é o horário de atendimento?", a: "Atendemos de segunda a sexta, das 8h às 18h. Fora do horário comercial, chame no WhatsApp e retornamos no próximo dia útil." },
  { q: "Como é calculado o tempo de espera?", a: "Os primeiros 15 minutos estão dentro da tolerância. Depois disso, a espera custa R$ 0,60 por minuto. Se houver risco de fila, informe antes de confirmar." },
  { q: "Cartório, shopping e aeroporto seguem a tabela comum?", a: "Não automaticamente. Esses locais recebem cotação à parte por causa de acesso, estacionamento e possível espera." },
  { q: "Qual é o prazo de coleta?", a: "A previsão depende do endereço, do trânsito e da disponibilidade no momento do pedido. Ela é informada antes da confirmação; não publicamos um prazo único para toda Guarulhos." },
  { q: "Quais bairros são atendidos?", a: "Recebemos solicitações para bairros de Guarulhos. A cobertura de cada chamado é confirmada pelos endereços completos e pela disponibilidade no horário solicitado." },
  { q: "A Moto11 faz rotas para São Paulo?", a: "Rotas entre Guarulhos e São Paulo podem ser cotadas. Envie origem e destino completos para receber valor e previsão." },
  { q: "O que preciso enviar para cotar?", a: "Origem, destino, descrição do item, contatos nas duas pontas, prazo desejado e informação sobre espera, retorno ou múltiplas paradas." },
  { q: "O orçamento é confirmado antes da coleta?", a: "Sim. Você recebe a estimativa ou o valor aplicável à rota e decide se deseja confirmar o chamado antes do deslocamento." },
  { q: "Posso pedir fora do horário comercial?", a: "Você pode deixar a mensagem no WhatsApp. Como não há atendimento noturno ou de fim de semana confirmado, o retorno pode ocorrer no próximo dia útil." },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <article className="space-y-8">
      <JsonLd data={faqJsonLd} />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "FAQ" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Perguntas frequentes sobre motoboy em Guarulhos
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Consulte preço, horário, espera, cobertura e os dados necessários para
          pedir uma cotação com clareza.
        </p>
      </header>

      <div className="grid gap-3">
        {FAQS.map((f, i) => (
          <details key={f.q} className="rounded-xl border p-4 open:bg-zinc-50">
            <summary className="cursor-pointer font-bold">
              {String(i + 1).padStart(2, "0")}. {f.q}
            </summary>
            <p className="mt-2 text-zinc-700">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Não achou sua dúvida?</h2>
        <p>
          Cada rota pode ter portaria, fila, horário de recebimento ou acesso
          especial. Envie a dúvida com coleta, destino, item e horário limite.
          Respondemos em horário comercial com as condições que forem possíveis
          confirmar. Fora desse período, deixe a mensagem para o próximo dia útil.
        </p>
      </div>

      <WhatsAppCTA
        title="Ainda tem dúvidas? Pergunte agora"
        subtitle="Atendimento de segunda a sexta, das 8h às 18h."
        message="Olá! Li o FAQ e ainda tenho uma dúvida sobre motoboy em Guarulhos."
      />
    </article>
  );
}
