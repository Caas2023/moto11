import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Melhor Motoboy em Guarulhos: Como Escolher sem Errar",
  description:
    "Quem é o melhor motoboy em Guarulhos? Critérios de pontualidade, preço fechado, comprovação e avaliações + por que empresas escolhem a Moto11 Express.",
  alternates: { canonical: `${SITE.baseUrl}/melhor-motoboy-guarulhos` },
  openGraph: {
    title: "Melhor Motoboy em Guarulhos",
    description: "Checklist objetivo + provas de qualidade para contratar com segurança.",
    url: `${SITE.baseUrl}/melhor-motoboy-guarulhos`,
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
            "@type": "LocalBusiness",
            name: `${SITE.name} – Motoboy em Guarulhos`,
            url: SITE.baseUrl,
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "4937", bestRating: "5" },
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Melhor motoboy em Guarulhos" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Melhor motoboy em Guarulhos: o checklist que separa promessa de entrega
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          “Melhor” não é quem promete o menor preço no anúncio — é quem coleta no horário,
          confirma o valor antes, comprova a entrega e resolve quando algo sai do plano. Veja os
          7 critérios que empresas e moradores de Guarulhos usam para escolher, e onde a Moto11
          Express se encaixa em cada um.
        </p>
      </header>

      <ol className="grid gap-4 sm:grid-cols-2">
        {[
          { t: "1. Preço fechado antes", d: "Valor por escrito no WhatsApp, sem taxa surpresa no destino." },
          { t: "2. Coleta no prazo", d: "Previsão real por bairro e cumprimento acima de 98%." },
          { t: "3. Comprovação com foto", d: "Foto do comprovante + nome de quem recebeu e horário." },
          { t: "4. Piloto identificado", d: "Uniforme, CNH A, motofrete e moto com revisão registrada." },
          { t: "5. Rastreio sem app", d: "Atualizações automáticas por WhatsApp para remetente e destino." },
          { t: "6. Avaliações consistentes", d: "Nota alta com volume real — 4.9/5 em 4.900+ avaliações." },
          { t: "7. Suporte humano 24h", d: "Atendente local que resolve, não robô que enrola." },
        ].map((c) => (
          <li key={c.t} className="rounded-xl border p-4">
            <p className="font-bold">{c.t}</p>
            <p className="mt-1 text-sm text-zinc-700">{c.d}</p>
          </li>
        ))}
      </ol>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como aplicar o checklist na prática</h2>
        <p>
          Antes de contratar, faça o teste de 2 minutos: chame no WhatsApp informando coleta,
          entrega e item, e observe se a resposta traz valor fechado, previsão de coleta e nome do
          piloto — ou apenas “chama que a gente vê”. Pergunte como é feita a comprovação de entrega
          e o que acontece se o destinatário estiver ausente. Um serviço sério explica o protocolo
          de tentativa, reagendamento e custo antes de você precisar perguntar. Desconfie de preços
          muito abaixo da tabela: geralmente escondem retorno cobrado, ausência de nota ou piloto
          sem identificação.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Por que empresas de Guarulhos nos escolhem</h2>
        <p>
          Escritórios de advocacia do Centro valorizam o lacre numerado e o protocolo com foto para
          juntar no processo. Clínicas da Vila Galvão e laboratórios contam com bolsa térmica e
          cadeia de comprovação para medicamentos. Autopeças de Cumbica usam o plantão de madrugada
          para linhas paradas. E-commerces de Bonsucesso e Pimentas aproveitam rotas multi-paradas
          com relatório diário que o financeiro adora. Em todos os casos, o diferencial citado nas
          avaliações é o mesmo: comunicação clara do início ao fim, sem precisar cobrar atualização.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Teste sem risco</h2>
        <p>
          A forma mais honesta de eleger o melhor é testar com uma entrega real de baixo risco:
          um envelope ou caixa simples em horário comercial. Compare coleta, comunicação, cuidado
          com o volume e comprovante final. Se o padrão se mantiver em duas ou três rotas, migre o
          volume recorrente para contrato com desconto e SLA. Oferecemos justamente esse caminho:
          primeira rota com acompanhamento reforçado, relatório completo e proposta empresarial
          somente se você aprovar a operação. O risco fica conosco, não com você.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Sinais de alerta na primeira conversa</h2>
        <p>
          Desconfie de quem não informa valor fechado por escrito, não gera protocolo rastreável,
          não envia comprovante com foto ou atende apenas por perfil sem identificação da empresa.
          Outro alerta é a promessa de qualquer prazo sem perguntar horário, trânsito ou janela do
          destinatário — quem opera de verdade faz perguntas antes de prometer. Por fim, desconfie
          de preços muito abaixo da tabela sem explicação de roteirização: quase sempre escondem
          retorno cobrado, espera tarifada ou ausência de nota. O teste de dois minutos no WhatsApp
          revela tudo isso antes de você comprometer qualquer carga importante.
        </p>
      </div>

      <WhatsAppCTA
        title="Teste o padrão Moto11 na sua próxima entrega"
        subtitle="Valor fechado, coleta no prazo e comprovante com foto — comprove você mesmo."
        message="Olá! Quero testar o melhor motoboy de Guarulhos na minha próxima entrega."
      />
    </article>
  );
}
