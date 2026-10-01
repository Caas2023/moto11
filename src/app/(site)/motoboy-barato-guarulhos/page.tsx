import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Motoboy Barato em Guarulhos: Preço Justo sem Dor de Cabeça",
  description:
    "Motoboy barato em Guarulhos sem cair em cilada: quando o preço baixo vale a pena, 5 armadilhas comuns e como economizar até 25% com segurança.",
  alternates: { canonical: `${SITE.baseUrl}/motoboy-barato-guarulhos` },
  openGraph: {
    title: "Motoboy Barato em Guarulhos",
    description: "Como pagar menos com segurança: dicas práticas + orçamento fechado.",
    url: `${SITE.baseUrl}/motoboy-barato-guarulhos`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Motoboy barato em Guarulhos" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Motoboy Barato em Guarulhos: Preço Justo sem Dor de Cabeça",
          url: `${SITE.baseUrl}/motoboy-barato-guarulhos`,
        }}
      />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Motoboy barato em Guarulhos: como pagar menos sem pagar duas vezes
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Todo mundo quer economizar — e é possível pagar menos por motoboy em Guarulhos sem abrir
          mão de prazo e segurança. O segredo é saber quando o preço baixo é eficiência real e
          quando é cilada. Este guia mostra as duas coisas.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-bold">5 sinais de barato que sai caro</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-800">
            <li>Preço sem valor fechado por escrito</li>
            <li>Taxa de retorno ou espera escondida</li>
            <li>Sem comprovante com foto</li>
            <li>Piloto sem identificação ou contato</li>
            <li>Sem nota nem protocolo rastreável</li>
          </ul>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="font-bold">5 formas legítimas de economizar</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-zinc-800">
            <li>Juntar paradas no mesmo roteiro</li>
            <li>Trocar urgente por programada com folga</li>
            <li>Fixar janelas de coleta (10h/16h)</li>
            <li>Deixar volume pronto na portaria</li>
            <li>Contrato mensal com 15–25% off</li>
          </ul>
        </div>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Quando o barato vale a pena</h2>
        <p>
          O preço baixo é legítimo quando vem de eficiência: rota curta bem alocada, paradas
          agrupadas, coleta programada fora do pico e volume recorrente com desconto contratual.
          Nesses cenários, uma entrega simples no mesmo bairro pode custar de R$ 25 a R$ 32 com
          o mesmo padrão de comprovação de uma rota longa. O piloto roda menos, a base organiza
          melhor a fila e a economia é repassada — sem cortar seguro, revisão da moto ou
          comprovante. É o barato do processo bem feito, não do improviso.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">A conta que ninguém mostra</h2>
        <p>
          Considere o custo total, não só a tarifa: uma entrega “R$ 5 mais barata” que atrasa 2
          horas pode custar uma multa contratual, uma consulta remarcada ou uma linha parada.
          Some ainda retrabalho — pedir segundo piloto porque o primeiro sumiu — e taxas extras
          cobradas no destino. Em 2025, os chamados de resgate (refazer entrega mal feita por
          terceiros) representaram 8% dos nossos atendimentos, quase sempre com o cliente pagando
          duas vezes. Preço fechado, protocolo rastreável e foto de entrega eliminam esse risco.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Peça comprovação antes de fechar</h2>
        <p>
          Antes de aprovar qualquer orçamento barato, exija três evidências que não custam nada a
          quem trabalha sério: valor total por escrito com origem, destino e prazo; protocolo de
          rastreamento consultável; e foto do comprovante após a entrega. Some a isso a nota do
          serviço e um telefone que atende de verdade. Se o prestador enrola em qualquer um desses
          pontos, o desconto é ilusão. Aqui, esses cinco itens acompanham até a rota mais simples —
          porque economia de verdade é pagar pouco uma única vez, com a entrega comprovada.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Roteiro para pagar o menor preço seguro</h2>
        <p>
          Para pessoa física: agrupe envios da semana em um único roteiro, prefira janelas fora do
          pico (10h–11h30 e 14h–16h) e informe tudo de uma vez no WhatsApp para receber o melhor
          encaixe. Para empresas: consolide coletas em dois horários fixos, use rotas multi-paradas
          e migre para contrato mensal — a economia típica fica entre 15% e 25% já no primeiro mês,
          com relatório que prova cada centavo ao financeiro. Envie sua média semanal agora e
          receba a simulação comparativa gratuita: tarifa avulsa versus tarifa contratada, lado a lado.
        </p>
      </div>

      <WhatsAppCTA
        title="Peça o orçamento econômico da sua rota"
        subtitle="Diga sua origem, destino e frequência — devolvemos o menor preço seguro."
        message="Olá! Quero um motoboy barato em Guarulhos com preço fechado. Minha rota: origem (informar) / destino (informar)."
      />
    </article>
  );
}
