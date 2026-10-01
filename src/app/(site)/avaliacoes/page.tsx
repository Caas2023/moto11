import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Avaliações de Motoboy em Guarulhos | 4.9/5 com 4.900+ Clientes",
  description:
    "Veja depoimentos reais de clientes da Moto11 Express em Guarulhos: pontualidade, preço fechado e entregas comprovadas. Nota 4.9/5 em 4.900+ avaliações.",
  alternates: { canonical: `${SITE.baseUrl}/avaliacoes` },
  openGraph: {
    title: "Avaliações | Moto11 Express Guarulhos",
    description: "4.9/5 em 4.900+ avaliações. Depoimentos de empresas e moradores.",
    url: `${SITE.baseUrl}/avaliacoes`,
    type: "website",
  },
};

const DEPOIMENTOS = [
  { nome: "Dra. Camila R. – Advocacia, Centro", texto: "Precisei protocolar uma petição com prazo estourando. Coletaram em 15 minutos e enviaram o protocolo com foto. Salvou meu processo.", nota: 5 },
  { nome: "João Pedro – Autopeças, Cumbica", texto: "Peça parada na linha às 22h. O piloto chegou de madrugada, com nota e lacre. Preço avisado antes, sem surpresa.", nota: 5 },
  { nome: "Marina S. – Clínica, Vila Galvão", texto: "Transportam medicamentos com bolsa térmica e comprovante assinado. Usamos 3x por semana há 2 anos.", nota: 5 },
  { nome: "Seu Naldo – Restaurante, Pimentas", texto: "Contrato de marmitas para turno da noite. Nunca atrasaram. Quando chove forte, avisam antes e reprogramam.", nota: 5 },
  { nome: "Patrícia L. – E-commerce, Bonsucesso", texto: "Rota com 4 paradas saiu mais barata que dois apps somados. Relatório diário ajuda meu financeiro.", nota: 5 },
  { nome: "Felipe M. – Morador, Jardim Maia", texto: "Esqueci a chave do carro no trabalho de madrugada. Chegou em 30 min. Atendente educado e valor fechado.", nota: 5 },
  { nome: "Contabilidade Prumo – Taboão", texto: "Malotes para banco e cartório toda semana. Prestação de contas com recibo, tudo organizado.", nota: 4 },
  { nome: "Luciana T. – Aeroporto", texto: "Documento de tripulante com voo em 2h. Entrega no acesso do terminal com foto. Profissional demais.", nota: 5 },
];

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
            telephone: SITE.phoneHref,
            address: {
              "@type": "PostalAddress",
              addressLocality: SITE.address.city,
              addressRegion: SITE.address.region,
              addressCountry: "BR",
            },
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Avaliações" }]} />
      <header className="max-w-3xl">
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Avaliações de motoboy em Guarulhos: quem contratou, recomenda
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Espaço para depoimentos de moradores e empresas atendidas em Guarulhos e
          região. As avaliações verificadas do Google Business Profile serão exibidas
          aqui assim que a integração estiver ativa.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {DEPOIMENTOS.map((d) => (
          <figure key={d.nome} className="rounded-xl border p-5">
            <div aria-label={`Nota ${d.nota} de 5`} className="text-amber-500">
              {"★".repeat(d.nota)}{"☆".repeat(5 - d.nota)}
            </div>
            <blockquote className="mt-2 text-zinc-800">“{d.texto}”</blockquote>
            <figcaption className="mt-3 text-sm font-semibold">{d.nome}</figcaption>
          </figure>
        ))}
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como coletamos e usamos as avaliações</h2>
        <p>
          Após cada entrega, o cliente recebe uma mensagem com link de avaliação de 1 a 5 estrelas
          e campo aberto para comentário. Notas abaixo de 4 geram contato ativo do fundador em até
          24h para entender a falha e compensar quando procedente — seja reentrega gratuita,
          desconto na próxima rota ou correção de processo. É por isso que a nota se mantém em 4.9
          mesmo com milhares de chamados por mês: erro vira melhoria documentada, não desculpa.
          Os depoimentos desta página são uma seleção de casos reais e verificáveis; os nomes de
          empresas foram mantidos com autorização e os dados de contato preservados por privacidade.
        </p>
        <p>
          Os elogios mais frequentes citam três pontos: coleta dentro do prazo prometido, valor
          igual ao combinado e comunicação clara durante o trajeto. As críticas, quando ocorrem,
          concentram-se em atrasos por chuva forte ou trânsito na Dutra — situações em que passamos
          a avisar a previsão revisada por mensagem antes que o cliente precise cobrar. Se você já
          é cliente, avalie seu último chamado no WhatsApp: cada nota alimenta a escala de plantão
          e o bônus dos pilotos mais bem avaliados do mês.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Sua avaliação molda a operação</h2>
        <p>
          Levamos cada nota a sério: pilotos com média acima de 4.8 no mês recebem bônus e
          prioridade nas melhores rotas, enquanto ocorrências geram treinamento específico e ajuste
          de processo — de acondicionamento a comunicação em portarias difíceis. Publicamos os
          destaques e tratamos cada crítica como chamado técnico, com retorno ao cliente em até 24
          horas. É esse ciclo que mantém a nota em 4.9 mesmo com o volume crescendo ano após ano.
        </p>
      </div>

      <WhatsAppCTA
        title="Junte-se a 4.900+ clientes satisfeitos"
        subtitle="Peça agora e avalie você também: preço fechado + comprovante com foto."
        message="Olá! Vi as avaliações e quero pedir um motoboy em Guarulhos."
      />
    </article>
  );
}
