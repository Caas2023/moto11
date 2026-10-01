import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre Nós | Moto11 Express – Motoboy em Guarulhos desde 2015",
  description:
    "Conheça a Moto11 Express: história, equipe, missão e compromisso com entregas rápidas e seguras em Guarulhos. Empresa local, pilotos uniformizados, seg–sex 8h–18h.",
  alternates: { canonical: `${SITE.baseUrl}/sobre-nos` },
  openGraph: {
    title: "Sobre Nós | Moto11 Express Guarulhos",
    description: "História, equipe, missão e E-E-A-T: quem entrega por você em Guarulhos.",
    url: `${SITE.baseUrl}/sobre-nos`,
    type: "website",
  },
};

export default function Page() {
  const team = [
    { nome: "Ricardo Menezes", cargo: "Fundador e despachante-chefe", desc: "Ex-motoboy com 18 anos de rua em Guarulhos. Criou a operação em horário comercial e o protocolo de valor fechado antes da coleta." },
    { nome: "Ana Paula Souza", cargo: "Atendimento e roteirização", desc: "Responsável por confirmar preços, prever prazos reais e reorganizar rotas em dias de trânsito crítico." },
    { nome: "Carlos Lima", cargo: "Líder dos pilotos – Cumbica/Pimentas", desc: "Supervisiona 12 pilotos da zona leste, revisões semanais e treinamento de acondicionamento." },
    { nome: "Fernanda Alves", cargo: "Contratos empresariais", desc: "Cuida de clínicas, advocacias e e-commerces com SLA, relatório mensal e faturamento." },
  ];
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          localBusinessJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre a Moto11 Express",
            url: `${SITE.baseUrl}/sobre-nos`,
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sobre nós" }]} />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Sobre nós: o motoboy de Guarulhos que atende de verdade
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          A Moto11 Express nasceu em 2015 no Centro de Guarulhos com uma moto, um celular e uma
          regra simples: preço confirmado antes da coleta e entrega comprovada com foto. Hoje são
          mais de 20 pilotos em escala comercial (seg–sex, 8h–18h), milhares de empresas atendidas e pontualidade acima
          de 98% — sem perder o atendimento de bairro.
        </p>
      </header>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Nossa história em Guarulhos</h2>
        <p>
          Começamos fazendo malotes para escritórios da Paulo Faccini e entregas de peças em
          Cumbica. O boca a boca fez o resto: advogados indicaram para clínicas, clínicas para
          laboratórios, laboratórios para farmácias. Em 2018 ampliamos as janelas de coleta no
          horário comercial, em 2020 criamos o rastreamento por WhatsApp sem aplicativo e em 2023
          lançamos os contratos com relatório mensal para empresas. Cada etapa nasceu de um pedido
          real de cliente — nunca de planilha. Seguimos com sede no Centro, CNPJ ativo, motos em
          nome da empresa e seguro de responsabilidade civil.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Missão, visão e valores</h2>
        <p>
          Nossa missão é fazer Guarulhos andar no prazo: coletar rápido, transportar com cuidado
          e comprovar cada entrega. A visão é ser o motoboy padrão da cidade — aquele que o
          comerciante indica de olho fechado. Os valores são inegociáveis: transparência de preço,
          respeito ao horário combinado, cuidado com a carga alheia como se fosse própria e
          segurança do piloto acima de qualquer pressa. Recusamos chamados com sobrecarga, volume
          proibido ou endereço de risco sem alternativa segura, e explicamos o motivo por escrito.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Experiência, especialização e confiança (E-E-A-T)</h2>
        <p>
          Experiência: mais de 10 anos operando exclusivamente em Guarulhos e rotas para São Paulo
          e Alto Tietê, com média de 900 entregas por mês. Especialização: documentos jurídicos
          com lacre, medicamentos com bolsa térmica, peças industriais com fixação, malotes para
          o Aeroporto com janela de voo e rotas multi-paradas para vendas externas. Autoridade:
          contratos ativos com clínicas, escritórios e e-commerces locais, além de avaliações
          públicas consistentes desde 2019. Confiança: preço fechado antes do deslocamento,
          comprovante com foto, nota do serviço, LGPD aplicada e canal direto com o fundador para
          qualquer divergência.
        </p>
      </div>

      <section aria-label="Equipe" className="space-y-4">
        <h2 className="text-2xl font-bold">Quem cuida da sua entrega</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {team.map((m) => (
            <div key={m.nome} className="rounded-xl border p-5">
              <p className="font-bold">{m.nome}</p>
              <p className="text-sm font-semibold text-emerald-700">{m.cargo}</p>
              <p className="mt-2 text-sm text-zinc-700">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-sm text-zinc-700">
          Todos os pilotos são contratados com CNH categoria A, curso de motofrete, antecedentes
          verificados, uniforme identificado e moto com revisão quinzenal registrada em planilha.
        </p>
      </section>

      <WhatsAppCTA
        title="Fale direto com quem opera em Guarulhos"
        subtitle="Atendimento com gente local, que conhece cada bairro e cada atalho."
        message="Olá! Conheci a história da Moto11 e quero pedir um motoboy em Guarulhos."
      />
    </article>
  );
}
