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
import { SERVICES } from "@/data/services";
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
    "Olá! Quero falar com um atendente sobre o serviço para minha rota. Origem: (informar) / Destino: (informar) / Item: (informar).",
)}`;

const categories = [
  {
    icon: FileText,
    title: "Documentos",
    text: "Transporte ponto a ponto de envelopes e documentos. Informe se haverá assinatura, protocolo, devolução ou espera para avaliação do atendente.",
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
    text: "Cartórios, shopping e aeroporto têm regras específicas de acesso. Informe a tarefa e aguarde a avaliação do atendente.",
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
            <p className="text-sm font-semibold text-primary-700">Modalidades</p>
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

      <section className="border-t border-line bg-surface py-16 sm:py-20" aria-labelledby="modalidades-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="modalidades-title" className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
            Modalidades e aplicações do serviço
          </h2>
           <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
             Consulte as modalidades abaixo. Para outras necessidades, envie
             origem, destino e item pelo WhatsApp para avaliação do atendente;
             antes, veja quais dados informar na{" "}
             <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">
               cotação da rota
             </Link>.
           </p>
           <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
             {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 font-semibold text-brand-950 transition-colors hover:border-primary-700 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
                >
                  {service.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="cotacao-servico">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <Route className="h-9 w-9 text-primary-700" aria-hidden="true" />
            <h2 id="cotacao-servico" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Toda cotação passa pelo atendente.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Envie os endereços e detalhes da entrega pelo WhatsApp para avaliação do atendente.
            </p>
            <p>
              Quando o serviço envolve balcão, portaria, retirada com senha ou pessoa
              específica, avise já no primeiro contato para que o atendente avalie
              a solicitação completa.
            </p>
            <p>
              Cartórios, shopping e aeroporto podem exigir procedimentos de acesso,
              estacionamento, credenciamento ou espera. O atendente avalia cada
              solicitação antes de confirmar as condições.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="antes-de-pedir">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-primary-700">Antes de pedir</p>
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
            <p className="text-sm font-semibold text-primary-700">Guia prático</p>
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
              Cartórios, shopping e aeroporto merecem atenção extra. Esses locais podem ter fila, estacionamento, balcão, credenciamento ou restrição de entrada. Informe o local exato, a tarefa esperada e o horário em que o atendimento está disponível. O atendente avaliará a solicitação pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="protocolos-servicos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Instruções da entrega</p>
            <h2 id="protocolos-servicos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Detalhes que precisam entrar no pedido.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              O transporte de documentos jurídicos, licitações, procurações e balanços contábeis exige instruções claras. Informe se o material estará lacrado, quantas vias existem, quem pode receber e se há protocolo ou assinatura. O atendente confirma quais procedimentos podem ser atendidos antes da coleta.
            </p>
            <p>
              Para mercadorias de e-commerce e peças de reposição industrial, descreva volume, dimensões, fragilidade e a embalagem disponível. Itens sensíveis ou com prazo no mesmo dia útil precisam ser avaliados pelo atendente antes da confirmação.
            </p>
            <p>
              Para uma necessidade recorrente, informe dias, janelas, contatos e restrições de acesso. O atendente avalia a viabilidade de cada rota antes de propor uma rotina.
            </p>
            <p>
              Se houver risco de destinatário ausente, portaria fechada ou conferência prolongada, informe isso no pedido. Combine com o atendente como proceder antes da coleta.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="faturamento-servicos">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Solicitações recorrentes</p>
            <h2 id="faturamento-servicos" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Empresas podem explicar a rotina antes de pedir.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Se a demanda se repete, envie a frequência, os endereços, as janelas desejadas, os contatos e as regras de acesso. Essas informações permitem ao atendente avaliar a operação completa, em vez de tratar cada trecho como uma corrida isolada.
            </p>
            <p>
              Não publicamos pacotes, condições comerciais ou níveis de serviço sem uma avaliação da rota. O atendimento pelo WhatsApp é o caminho para esclarecer o que pode ser combinado para uma necessidade recorrente.
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
            Pedir cotação no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
