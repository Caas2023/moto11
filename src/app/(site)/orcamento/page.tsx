import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { OrcamentoForm } from "@/components/site/orcamento-form";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Orçamento de motoboy em Guarulhos",
  description:
    "Simule o preço do motoboy em Guarulhos por distância, paradas e espera. Estimativa imediata pela tabela real + confirmação no WhatsApp em minutos, em horário comercial.",
  alternates: { canonical: `${SITE.baseUrl}/orcamento` },
  openGraph: {
    title: "Orçamento de Motoboy em Guarulhos em 1 Minuto",
    description: "Calcule a estimativa por km e confirme o valor fechado no WhatsApp.",
    url: `${SITE.baseUrl}/orcamento`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd data={localBusinessJsonLd()} />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Orçamento" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Orçamento de motoboy em Guarulhos: calcule em 1 minuto
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Precisa saber quanto custa um motoboy em Guarulhos antes de chamar? Use a calculadora
           abaixo para ter uma estimativa por distância e espera — depois
          confirme o valor fechado no WhatsApp. Sem cadastro, sem enrolação e com atendimento
           em horário comercial, de segunda a sexta, das 8h às 18h.
        </p>
      </header>

      <OrcamentoForm />

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como funciona o cálculo do preço</h2>
        <p>
          O preço do motoboy em Guarulhos segue a tabela real Moto11: trajetos de 0 a 8 km
          custam R$ 35,00 fixos; acima de 8 km, soma-se R$ 2,50 por quilômetro extra. O tempo
          de espera tem 15 minutos de tolerância inclusos e, após esse período, custa R$ 0,60
          por minuto. Cartórios, shopping e aeroporto têm cotação à parte. A calculadora desta
          página usa exatamente essa tabela — o valor final é sempre confirmado por escrito no
          WhatsApp, com origem, destino, número de paradas e prazo combinados.
        </p>
        <p>
           A distância informada na calculadora é uma referência. Para rotas com duas
           ou mais paradas, envie o roteiro completo no primeiro contato. A equipe
           confirma a distância aplicável e as condições antes da coleta.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que informar para receber o valor fechado</h2>
        <p>
          Para confirmar seu orçamento em minutos, envie no WhatsApp o endereço de coleta com
          ponto de referência, o endereço de entrega, o tipo de volume (envelope, caixa pequena,
           item), o horário ideal e se há necessidade de espera ou retorno.
           Com esses dados, a equipe consegue verificar a rota e confirmar o valor.
           Se o volume exigir cuidado específico, informe antes para avaliação.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Urgente, programado ou contrato: qual sai mais barato?</h2>
        <p>
           Uma coleta programada dá mais contexto para organizar o atendimento, mas
           disponibilidade e previsão sempre precisam ser confirmadas. Demandas recorrentes
           podem receber uma proposta específica depois que frequência, rotas e horários forem
           entendidos. Não publicamos desconto ou SLA sem essa avaliação.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Por que pedir orçamento na Moto11 Express</h2>
        <p>
           A calculadora usa somente a tabela confirmada: R$ 35,00 até 8 km,
           R$ 2,50 por quilômetro excedente e R$ 0,60 por minuto após os 15 minutos
           de tolerância. Cartórios, shopping e aeroporto ficam fora da simulação e
           recebem cotação própria. Faça a estimativa e envie os endereços para confirmar.
        </p>
      </div>

      <WhatsAppCTA message="Olá! Fiz a simulação de orçamento no site e quero confirmar o valor fechado para Guarulhos." />
    </article>
  );
}
