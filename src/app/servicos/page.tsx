import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  FileText,
  Package,
  Route,
  Store,
} from "lucide-react";
import { PHONE_WA, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

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
      <PageHero
        eyebrow="Serviços Moto11"
        title="Serviço de motoboy definido pela necessidade da sua rota."
        description="Uma entrega confiável começa por um escopo claro. A Moto11 recebe solicitações em Guarulhos para documentos, pequenos volumes, coletas agendadas e demandas empresariais, sempre em horário comercial: segunda a sexta, das 8h às 18h."
      >
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Início</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Serviços</span>
          </nav>
      </PageHero>

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
              A distância e as condições de cada rota são verificadas antes da confirmação.
              Consulte os valores na tabela de preços ou envie os endereços para uma cotação.
            </p>
            <p>
              A espera pode alterar o valor. Quando o serviço envolve balcão, portaria,
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

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="guia-servicos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Guia prático</p>
            <h2 id="guia-servicos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">Como escolher o serviço certo sem supor condições.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Para documentos, o ponto principal costuma ser a informação que acompanha o envelope. Diga se existe protocolo, assinatura, devolução, senha ou prazo-limite. A pessoa que solicita a entrega também deve indicar quem pode receber no destino. Isso reduz a chance de o piloto chegar a uma recepção sem autorização, de o documento ficar aguardando ou de uma segunda tentativa ser necessária.
            </p>
            <p>
              Para pequenos volumes, descreva o conteúdo sem esconder características importantes. Peso aproximado, dimensões, embalagem e fragilidade ajudam a avaliar se o item é adequado ao transporte em moto. Uma caixa que cabe no baú pode não ser segura se estiver mal fechada; um objeto pequeno pode exigir cuidado adicional se for sensível a impacto ou temperatura. Quando existir uma condição especial, ela deve ser confirmada antes da coleta, não no momento em que a moto chega.
            </p>
            <p>
              Coletas agendadas funcionam melhor quando o item já está liberado e o responsável pelo local sabe que haverá retirada. Informe a janela desejada, o horário de funcionamento e um telefone alternativo. Em empresas, vale concentrar as informações recorrentes em uma mensagem clara: origem, destinos, frequência, contatos e restrições de acesso. Isso permite avaliar cada pedido pela operação real, em vez de publicar um pacote ou prazo genérico que pode não servir à sua rotina.
            </p>
            <p>
              Cartórios, shopping e aeroporto merecem atenção extra. Esses locais podem ter fila, estacionamento, balcão, credenciamento ou restrição de entrada. O caminho correto é informar o local exato, a tarefa esperada e o horário em que o atendimento está disponível. Consulte a <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">tabela de preços</Link> para a regra de rotas simples e solicite cotação específica quando o serviço tiver etapas adicionais.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="protocolos-servicos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Rastreabilidade e segurança</p>
            <h2 id="protocolos-servicos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Cadeia de custódia e comprovação em cada etapa.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              O transporte de documentos jurídicos, licitações, procurações e balanços contábeis exige procedimentos formais de custódia. Na Moto11, os envelopes são retirados lacrados, com conferência presencial da quantidade de vias e identificação imediata do destinatário. A baixa é realizada exclusivamente mediante protocolo carimbado ou assinatura com nome legível e horário exato, garantindo arquivo probatório digital imediato para sua empresa via WhatsApp.
            </p>
            <p>
              Para mercadorias de e-commerce e peças de reposição industrial, aplicamos checklists de conferência de volume e integridade externa da embalagem na coleta. Nosso baú profissional conta com isolamento contra intempéries e forração protetora para evitar impactos. Itens com valor agregado relevante ou prazos de entrega no mesmo dia útil recebem prioridade de roteirização para evitar baldeações desnecessárias ou paradas intermediárias não autorizadas.
            </p>
            <p>
              Empresas que demandam rotas programadas semanais ou mensais contam com atendimento dedicado e faturamento facilitado. Alinhamos antecipadamente os dias de coleta, as janelas de passagem e os contatos responsáveis em cada unidade, criando um fluxo operacional silencioso que libera sua equipe interna de tarefas externas de trânsito.
            </p>
            <p>
              Caso ocorra qualquer imprevisto no destino — como destinatário ausente, portaria fechada ou necessidade de conferência prolongada além da tolerância de 15 minutos —, o piloto entra em contato imediato pelo WhatsApp antes de tomar qualquer decisão. O contratante sempre mantém o controle da missão, podendo autorizar a continuidade da espera a R$ 0,60 por minuto, reagendar a entrega ou determinar o retorno com segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="faturamento-servicos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Gestão corporativa</p>
            <h2 id="faturamento-servicos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Faturamento mensal e relatórios para empresas conveniadas.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Para escritórios e empresas que realizam coletas com frequência semanal ou diária em Guarulhos e na Grande São Paulo, a Moto11 disponibiliza modalidade de faturamento periódico com relatório consolidado. Cada chamado executado é discriminado por data, horário exato de retirada e de entrega, endereço de origem, ponto de destino, nome legível do recebedor e valor contratado segundo a tabela de distância oficial.
            </p>
            <p>
              Essa estrutura elimina a necessidade de adiantamento em dinheiro ou reembolsos manuais contínuos para a equipe administrativa. A emissão de documento fiscal e o envio do fechamento para a controladoria facilitam a conciliação financeira e garantem total conformidade contábil. Para solicitar a abertura de cadastro corporativo, envie a estimativa de saídas semanais e as rotas habituais para nossa equipe pelo canal oficial do WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-16 text-white" aria-labelledby="servico-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="servico-cta" className="font-display text-3xl font-bold sm:text-4xl">Não sabe qual modalidade escolher?</h2>
            <p className="mt-3 leading-7 text-slate-300">Envie a missão em linguagem simples. A equipe avalia a rota e explica o formato disponível antes de você confirmar.</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 font-bold text-white transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Calcular orçamento no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
