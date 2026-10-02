import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  FileText,
  Route,
  Store,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  PHONE_DISPLAY,
  PHONE_TEL_LINK,
  PHONE_WA,
  buildMetadata,
  jsonLdFAQ,
  jsonLdService,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Motoboy em Guarulhos para entregas e coletas",
  description:
    "Motoboy em Guarulhos para entregas, coletas agendadas e rotas empresariais. Atendimento de segunda a sexta, das 8h às 18h.",
  path: "/",
  keywords: [
    "motoboy em Guarulhos",
    "entrega de moto Guarulhos",
    "coleta agendada Guarulhos",
    "motoboy para empresas Guarulhos",
  ],
});

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Quero calcular uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar).",
)}`;

const services = [
  {
    icon: FileText,
    title: "Documentos e pequenos volumes",
    text: "Coleta e entrega ponto a ponto para documentos, chaves e encomendas compatíveis com o transporte em moto. Informe o item para validarmos antes da saída.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Rotas para empresas",
    text: "Atendimento avulso ou programado para escritórios, comércios e operações que precisam organizar coletas durante o expediente.",
  },
  {
    icon: Store,
    title: "Apoio ao comércio local",
    text: "Entregas para lojas e e-commerces com origem, destino, contato do recebedor e condições combinadas antes do deslocamento.",
  },
  {
    icon: Building2,
    title: "Cartório, shopping e aeroporto",
    text: "Esses locais podem envolver acesso, estacionamento e espera. Por isso, cada missão recebe cotação específica, sem preço genérico enganoso.",
  },
];

const steps = [
  {
    number: "01",
    title: "Envie a rota",
    text: "Informe endereço de coleta, destino, descrição do item e prazo desejado pelo WhatsApp.",
  },
  {
    number: "02",
    title: "Receba a cotação",
    text: "Calculamos a distância, explicamos eventuais exceções e confirmamos o valor antes da saída.",
  },
  {
    number: "03",
    title: "Confirme o chamado",
    text: "Com endereço, contato e condições conferidos, a coleta é programada dentro do horário comercial.",
  },
];

const faq = [
  {
    pergunta: "Quanto custa um motoboy em Guarulhos?",
    resposta:
      "O valor depende da rota e das condições de coleta. Consulte a tabela de preços ou envie os endereços para uma cotação. Cartórios, shopping e aeroporto recebem cotação específica.",
  },
  {
    pergunta: "Qual é o horário de atendimento?",
    resposta:
      "Atendemos de segunda a sexta, das 8h às 18h. Mensagens enviadas fora desse período podem ser respondidas no próximo dia útil.",
  },
  {
    pergunta: "Como funciona a cobrança por espera?",
    resposta:
      "Há um período de tolerância; depois, a espera pode ser cobrada. Consulte os detalhes na tabela de preços e avise se houver risco de fila.",
  },
  {
    pergunta: "A Moto11 atende São Paulo capital?",
    resposta:
      "Rotas entre Guarulhos e São Paulo podem ser cotadas. A disponibilidade, o valor e a previsão dependem dos endereços completos e das condições do trânsito no momento do pedido.",
  },
];

export default function Home() {
  const serviceSchema = jsonLdService({
    name: "Serviço de motoboy em Guarulhos",
    description:
      "Entregas e coletas de moto em Guarulhos, com orçamento por rota e atendimento de segunda a sexta, das 8h às 18h.",
    path: "/",
  });

  return (
    <main id="conteudo-principal" className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(faq)) }}
      />

      <section className="relative isolate overflow-hidden bg-brand-950 text-white lg:min-h-[calc(100svh-4.5rem)] flex items-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-moto11.png')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-950/90" />
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-6">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-orange-200">
                Guarulhos e rotas para São Paulo · Seg–sex, 8h–18h
              </p>
              <h1 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]">
                Motoboy em Guarulhos com preço claro antes da saída.
              </h1>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Envie origem, destino e item. Calculamos a rota pela quilometragem real e confirmamos as condições pelo WhatsApp antes de qualquer coleta.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-cta inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-success px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Calcular orçamento
                </a>
                <a
                  href={`tel:${PHONE_TEL_LINK}`}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Ligar {PHONE_DISPLAY}
                </a>
              </div>
              <ul className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-300 sm:text-sm">
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary-400" aria-hidden="true" />
                  <span>Seg–sex, 8h–18h</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary-400" aria-hidden="true" />
                  <span>Preço fechado</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary-400" aria-hidden="true" />
                  <span>Cotação por rota</span>
                </li>
              </ul>
            </div>

            <aside className="rounded-2xl border border-white/20 bg-white/95 p-5 text-foreground shadow-2xl backdrop-blur-sm sm:p-6" aria-label="Como solicitar uma cotação">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-700">Cotação rápida</p>
                <h2 className="mt-1 font-display text-xl font-bold tracking-tight text-brand-950 sm:text-2xl">Envie 4 dados para receber o valor</h2>
                <div className="my-3 h-px bg-line" />
                <ul className="grid grid-cols-2 gap-2 text-xs text-brand-950 sm:text-sm">
                  <li className="rounded-lg bg-surface-warm p-2"><strong>1. Origem:</strong> endereço com número</li>
                  <li className="rounded-lg bg-surface-warm p-2"><strong>2. Destino:</strong> endereço e contato</li>
                  <li className="rounded-lg bg-surface-warm p-2"><strong>3. Item:</strong> peso e dimensões</li>
                  <li className="rounded-lg bg-surface-warm p-2"><strong>4. Janela:</strong> horário desejado</li>
                </ul>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="quote-cta mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm sm:text-base font-bold text-white transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2">
                  Enviar dados da rota <WhatsAppIcon className="h-4 w-4" />
                </a>
                <div className="mt-2.5 flex items-center justify-between text-xs font-medium text-muted">
                  <span>Cartório/aeroporto: cotação à parte</span>
                  <Link href="/precos" className="font-bold text-primary-700 hover:underline inline-flex items-center gap-1">
                    Tabela <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="guia-home">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Antes da coleta</p>
            <h2 id="guia-home" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">Uma boa entrega começa antes da moto sair.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Entregas de moto parecem simples até surgir uma portaria sem autorização, um destinatário que não está no local ou um item sem embalagem adequada. Por isso, o pedido mais útil é o que descreve a rota inteira: endereço completo de coleta, destino, nome e telefone de quem entrega e de quem recebe, além do tipo de item. Se existe senha, protocolo, retorno ou horário-limite, essa informação também precisa entrar na primeira mensagem.
            </p>
            <p>
              A confirmação da rota evita que uma cotação seja baseada só no nome de um bairro. Condomínios, centros comerciais, cartórios e aeroportos têm regras próprias de acesso e podem exigir tempo adicional. A Moto11 atende de segunda a sexta, das 8h às 18h; fora desse período, a mensagem pode ficar para o próximo dia útil. Para consultar a regra de cobrança, use a <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">tabela de preços</Link>. Informe também se haverá assinatura, protocolo, retorno ou múltiplas paradas. Esses dados ajudam a equipe a explicar o escopo antes do preço e reduzem o risco de uma etapa importante ficar fora da solicitação inicial.
            </p>
            <p>
              Se a entrega cruza municípios, informe os dois endereços sem abreviações. Uma rota entre Guarulhos e São Paulo não tem uma duração fixa: trânsito, sentido da viagem, horário de recebimento e acesso ao destino mudam a viabilidade. Nas páginas de <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/areas-atendidas">áreas atendidas</Link> e <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/sao-paulo">rotas para São Paulo</Link>, você encontra os locais organizados para consulta; o atendimento confirma a rota real. Para entregas empresariais, vale reunir contatos, janelas e instruções em uma mensagem única. Para pedidos particulares, descreva o item e diga quem estará disponível para receber. A clareza no início protege o remetente, o destinatário e o profissional que executa a missão.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="servicos-home">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">O que resolvemos</p>
              <h2 id="servicos-home" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
                Entregas urbanas sem promessa vazia.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Cada chamado começa pela informação correta. Antes de aceitar,
                precisamos entender o item, os dois endereços, o contato no
                destino e o prazo necessário. Isso permite indicar o formato
                adequado e evitar que uma corrida simples vire surpresa no
                balcão ou na portaria.
              </p>
              <Link href="/servicos" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-primary-700 hover:underline">
                Conhecer os serviços <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-white p-6 sm:p-8">
                  <Icon className="h-7 w-7 text-primary-700" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-bold text-brand-950">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="como-funciona">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Processo simples</p>
            <h2 id="como-funciona" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Da mensagem à coleta em três etapas.
            </h2>
          </div>
          <ol className="mt-10 grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t-2 border-brand-950 pt-5">
                <span className="font-display text-sm font-bold text-primary-700">{step.number}</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-brand-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-6 border border-orange-200 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-brand-950">O que enviar para receber uma cotação útil</h3>
              <p className="mt-3 max-w-3xl leading-7 text-muted">
                Escreva a origem e o destino completos, descreva o item, informe
                se há portaria, fila ou necessidade de espera e diga o horário
                limite real. Para múltiplas paradas, envie a sequência desejada.
                Quanto melhor o contexto, mais precisa será a resposta.
              </p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 font-bold text-white hover:bg-brand-950">
              Enviar minha rota <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="cobertura-home">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Cobertura</p>
            <h2 id="cobertura-home" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Guarulhos como ponto central da rota.
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-muted">
              <p>
                A Moto11 recebe solicitações para bairros de Guarulhos e também
                para trajetos com origem ou destino em São Paulo. Como distância
                e trânsito mudam muito entre regiões, não publicamos um prazo
                único para toda a cidade. A previsão é informada depois que os
                endereços são conferidos.
              </p>
              <p>
                Em locais como aeroporto, shopping e cartórios, o tempo de
                acesso pode ser maior que o próprio deslocamento. Por isso,
                essas missões são avaliadas separadamente. A cotação considera
                as condições apresentadas pelo cliente e deixa claro o que está
                ou não incluído.
              </p>
              <p>
                A página de cada região serve para organizar a navegação local,
                mas a confirmação final sempre depende do endereço completo e
                da disponibilidade no dia. Essa abordagem é mais responsável do
                que prometer coleta imediata em qualquer bairro.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/areas-atendidas" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-900 px-5 py-2 font-bold text-brand-950 hover:bg-brand-950 hover:text-white">
                Áreas de Guarulhos
              </Link>
              <Link href="/sao-paulo" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-900 px-5 py-2 font-bold text-brand-950 hover:bg-brand-950 hover:text-white">
                Rotas para São Paulo
              </Link>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden bg-brand-900 p-7 text-white sm:p-10">
            <Route className="h-10 w-10 text-primary-400" aria-hidden="true" />
            <div className="absolute left-14 top-24 h-48 w-px bg-white/30" aria-hidden="true" />
            <div className="relative mt-10 space-y-10 pl-12">
              {[
                ["Origem", "Endereço completo e referência"],
                ["Percurso", "Distância e condições avaliadas"],
                ["Destino", "Contato e instruções de entrega"],
              ].map(([label, text]) => (
                <div key={label} className="relative">
                  <span className="absolute -left-[3.35rem] top-1 h-4 w-4 rounded-full border-4 border-primary-400 bg-brand-900" aria-hidden="true" />
                  <p className="font-display text-xl font-bold">{label}</p>
                  <p className="mt-1 text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
                Atendimento de segunda a sexta, das 8h às 18h. Fora desse horário, deixe os dados da rota para retorno no próximo dia útil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="guia-operacional-home">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Logística de precisão</p>
            <h2 id="guia-operacional-home" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Operação de motoboy desenhada para a realidade de Guarulhos.
            </h2>
            <div className="mt-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-cta inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-success px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotar entrega agora
              </a>
            </div>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Guarulhos possui dinâmicas viárias singulares que exigem planejamento preventivo de rotas. O fluxo intenso ao longo da Rodovia Presidente Dutra, da Rodovia Ayrton Senna, do corredor Tiradentes e do acesso ao Aeroporto Internacional de Guarulhos (GRU) pode transformar uma entrega simples em atraso se o piloto não conhecer os desvios locais e os horários de carregamento de cada polo comercial. A Moto11 monitora o trânsito antes do deslocamento e confirma a previsão real de atendimento no momento da cotação.
            </p>
            <p>
              Para escritórios, clínicas e indústrias, a pontualidade na entrega de malotes bancários, contratos para assinatura, laudos médicos e reposição de componentes de linha de produção depende de protocolos formais. Todos os chamados contam com confirmação nominal de quem recebeu, registro de horário e retorno digital do comprovante. Isso garante rastreabilidade completa para a controladoria e para o departamento fiscal das empresas contratantes, sem surpresas no encerramento do expediente.
            </p>
            <p>
              A transparência de preços é o pilar central da nossa relação com o cliente. Trabalhamos com a tabela oficial de R$ 35,00 fixos para percursos de 0 a 8 km e acréscimo de R$ 2,50 por quilômetro excedente, oferecendo 15 minutos de tolerância sem cobrança para esperas pontuais em portarias ou balcões. O valor informado no WhatsApp antes do início do trajeto é exatamente o valor final da entrega, eliminando tarifas dinâmicas ocultas ou adicionais não combinados.
            </p>
            <p>
              Atendemos de segunda a sexta-feira, das 8h às 18h, priorizando a segurança viária dos nossos profissionais e a integridade dos itens transportados. Operamos com baús vedados resistentes à água e adequados para cargas de até 20 kg. Caso sua missão envolva cartórios, shoppings ou o Terminal de Cargas do Aeroporto, os detalhes de credenciamento e acesso são avaliados previamente para que a entrega ocorra com total previsibilidade.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="faq-home">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Dúvidas frequentes</p>
            <h2 id="faq-home" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Informação para decidir sem pressa.
            </h2>
            <Link href="/faq" className="mt-6 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline">
              Ver todas as dúvidas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faq.map((item) => (
              <details key={item.pergunta} className="group py-5">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
                  {item.pergunta}
                  <span className="text-2xl font-normal text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pt-3 leading-7 text-muted">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Tem origem, destino e item?</h2>
            <p className="mt-2 text-orange-50">Envie os dados e receba a cotação antes de confirmar a coleta.</p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white">
            Pedir orçamento <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
