import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  FileText,
  Package,
  Route,
  Store,
} from "lucide-react";
import { PRICING, formatBRL } from "@/data/pricing";
import { PHONE_WA, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Serviços de motoboy em Guarulhos",
  description:
    "Conheça os serviços de motoboy da Moto11 em Guarulhos: entregas ponto a ponto, coletas agendadas e apoio para empresas. Atendimento seg–sex, 8h–18h.",
  path: "/servicos",
  keywords: [
    "serviços de motoboy em Guarulhos",
    "entrega de documentos Guarulhos",
    "coleta agendada motoboy",
    "motoboy empresarial Guarulhos",
  ],
});

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Quero saber qual serviço atende minha rota. Origem: (informar) / Destino: (informar) / Item: (informar).",
)}`;

const categories = [
  {
    icon: FileText,
    title: "Documentos",
    text: "Transporte ponto a ponto de envelopes e documentos. Informe se haverá assinatura, protocolo, devolução ou espera para que a cotação considere a missão completa.",
  },
  {
    icon: Package,
    title: "Pequenos volumes",
    text: "Encomendas compatíveis com o transporte seguro em moto. Medidas, peso, embalagem e natureza do item precisam ser informados antes da confirmação.",
  },
  {
    icon: CalendarClock,
    title: "Coleta agendada",
    text: "Chamados planejados para um dia e uma janela de horário. O agendamento depende da rota, da disponibilidade e do funcionamento do local de coleta.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Apoio para empresas",
    text: "Rotas avulsas ou recorrentes para escritórios e operações comerciais. Frequência e condições são definidas em proposta, sem pacote fictício publicado no site.",
  },
  {
    icon: Store,
    title: "Comércio e e-commerce",
    text: "Coleta no estabelecimento e entrega ao destinatário, com os contatos e as instruções repassados pelo contratante antes do deslocamento.",
  },
  {
    icon: Building2,
    title: "Locais com acesso especial",
    text: "Cartórios, shopping e aeroporto recebem cotação própria. Filas, estacionamento, regras de entrada e espera podem alterar o custo e a previsão.",
  },
];

export default function ServicesPage() {
  return (
    <main id="conteudo-principal">
      <header className="bg-brand-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Início</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Serviços</span>
          </nav>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary-400">Serviços Moto11</p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.04] tracking-[-0.04em]">
            Serviço de motoboy definido pela necessidade da sua rota.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Uma entrega confiável começa por um escopo claro. A Moto11 recebe
            solicitações em Guarulhos para documentos, pequenos volumes,
            coletas agendadas e demandas empresariais, sempre em horário
            comercial: segunda a sexta, das 8h às 18h.
          </p>
        </div>
      </header>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="categorias-servico">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Modalidades</p>
            <h2 id="categorias-servico" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Escolha o ponto de partida. A rota define os detalhes.
            </h2>
          </div>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-white p-6 sm:p-8">
                <Icon className="h-7 w-7 text-primary-700" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="cotacao-servico">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Route className="h-9 w-9 text-primary-700" aria-hidden="true" />
            <h2 id="cotacao-servico" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              O orçamento é calculado com dados concretos.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Para trajetos de até {PRICING.baseKm} km, o valor base é {formatBRL(PRICING.basePrice)}.
              Acima dessa distância, acrescentamos {formatBRL(PRICING.extraPerKm)} por quilômetro
              excedente. Essa regra ajuda o cliente a entender a conta antes de
              enviar os endereços, mas a distância final precisa ser verificada
              na rota real.
            </p>
            <p>
              A espera tem {PRICING.waitToleranceMin} minutos de tolerância. Depois disso, a cobrança
              é de {formatBRL(PRICING.waitPerMin)} por minuto. Quando o serviço envolve balcão, portaria,
              retirada com senha ou pessoa específica, vale avisar já no primeiro
              contato. Assim, o orçamento não omite uma etapa importante.
            </p>
            <p>
              Cartórios, shopping e aeroporto não usam automaticamente a mesma
              fórmula da corrida simples. Esses destinos recebem cotação à parte,
              pois acesso, estacionamento, credenciamento e tempo de espera podem
              variar. Publicar um preço único para essas situações seria pouco
              transparente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="antes-de-pedir">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Antes de pedir</p>
              <h2 id="antes-de-pedir" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                Seis informações evitam retrabalho.
              </h2>
              <ol className="mt-8 space-y-5">
                {[
                  "Endereço completo de coleta, com referência quando necessário.",
                  "Endereço completo de entrega e nome de quem receberá.",
                  "Descrição do item, incluindo peso e dimensões aproximadas.",
                  "Prazo desejado e horário de funcionamento dos dois locais.",
                  "Necessidade de espera, assinatura, protocolo ou retorno.",
                  "Contato de uma pessoa disponível em cada ponta da rota.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-4 border-t border-line pt-4 leading-7 text-muted">
                    <span className="font-display font-bold text-primary-700">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-brand-900 p-7 text-white sm:p-10">
              <h2 className="font-display text-3xl font-bold">O que não prometemos sem avaliar</h2>
              <div className="mt-7 space-y-6 text-slate-200">
                <p>
                  Não prometemos coleta em poucos minutos para qualquer bairro.
                  O tempo depende da disponibilidade, do endereço e do trânsito.
                  A previsão é apresentada no atendimento, não inventada na página.
                </p>
                <p>
                  Não divulgamos atendimento 24 horas. O expediente confirmado é
                  de segunda a sexta, das 8h às 18h. Mensagens fora desse período
                  podem ficar para o próximo dia útil.
                </p>
                <p>
                  Não oferecemos garantia de prazo absoluto quando a missão depende
                  de fila, liberação de terceiros, portaria, clima ou bloqueio viário.
                  Esses riscos são explicados antes da confirmação sempre que forem conhecidos.
                </p>
                <p>
                  Não transportamos um item sem entender se ele é compatível com a
                  moto e com a embalagem disponível. A descrição correta protege o
                  material, o condutor e o destinatário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-16 text-white" aria-labelledby="servico-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="servico-cta" className="font-display text-3xl font-bold sm:text-4xl">Não sabe qual modalidade escolher?</h2>
            <p className="mt-3 leading-7 text-slate-300">Envie a missão em linguagem simples. A equipe avalia a rota e explica o formato disponível antes de você confirmar.</p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-3 font-bold text-white hover:bg-white hover:text-brand-950">
            Descrever a entrega <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
