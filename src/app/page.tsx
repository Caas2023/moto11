import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  ShieldCheck,
  Store,
} from "lucide-react";
import { PRICING, formatBRL } from "@/data/pricing";
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
    "Motoboy em Guarulhos para entregas, coletas agendadas e rotas empresariais. Até 8 km por R$ 35. Atendimento de segunda a sexta, das 8h às 18h.",
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
      "A tabela da Moto11 é R$ 35,00 para trajetos de até 8 km. Acima de 8 km, são acrescentados R$ 2,50 por quilômetro excedente. Cartórios, shopping e aeroporto recebem cotação específica.",
  },
  {
    pergunta: "Qual é o horário de atendimento?",
    resposta:
      "Atendemos de segunda a sexta, das 8h às 18h. Mensagens enviadas fora desse período podem ser respondidas no próximo dia útil.",
  },
  {
    pergunta: "Como funciona a cobrança por espera?",
    resposta:
      "Há 15 minutos de tolerância. Depois desse período, a espera custa R$ 0,60 por minuto. A regra é informada antes da confirmação quando houver risco de fila ou demora no local.",
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

      <section className="relative isolate bg-brand-950 text-white">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(to bottom right, black, transparent 78%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-primary-400 pl-3 text-sm font-semibold tracking-wide text-orange-100">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Atendimento local em Guarulhos e rotas sob consulta
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              Motoboy em Guarulhos com preço claro antes da saída.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Envie a origem, o destino e o item. A Moto11 calcula a rota,
              informa as condições e confirma o orçamento pelo WhatsApp — sem
              inventar prazo, taxa ou disponibilidade.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-brand-950"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Calcular pelo WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL_LINK}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Ligar {PHONE_DISPLAY}
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-400" aria-hidden="true" />
                Seg–sex, 8h–18h
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-400" aria-hidden="true" />
                Valor antes da coleta
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-400" aria-hidden="true" />
                Cotação por rota
              </li>
            </ul>
          </div>

          <aside className="relative border border-white/15 bg-white p-6 text-foreground shadow-2xl sm:p-8" aria-label="Resumo da tabela de preços">
            <div className="absolute -right-3 -top-3 h-20 w-20 bg-primary-400" aria-hidden="true" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
                Tabela oficial Moto11
              </p>
              <p className="mt-4 font-display text-5xl font-bold tracking-tight text-brand-950">
                {formatBRL(PRICING.basePrice)}
              </p>
              <p className="mt-1 text-lg font-semibold text-brand-900">
                para trajetos de até {PRICING.baseKm} km
              </p>
              <div className="my-6 h-px bg-line" />
              <dl className="space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Quilômetro excedente</dt>
                  <dd className="font-bold text-brand-950">+ {formatBRL(PRICING.extraPerKm)}/km</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Tolerância de espera</dt>
                  <dd className="font-bold text-brand-950">{PRICING.waitToleranceMin} minutos</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Após a tolerância</dt>
                  <dd className="font-bold text-brand-950">{formatBRL(PRICING.waitPerMin)}/min</dd>
                </div>
              </dl>
              <p className="mt-6 border-l-2 border-primary-600 pl-3 text-sm leading-6 text-muted">
                Cartórios, shopping e aeroporto são cotados à parte por causa
                de acesso, estacionamento e possível espera.
              </p>
              <Link href="/precos" className="mt-6 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline">
                Ver detalhes da tabela <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
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

      <section className="bg-brand-950 py-16 text-white sm:py-24" aria-labelledby="compromisso-home">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <ShieldCheck className="h-9 w-9 text-primary-400" aria-hidden="true" />
              <h2 id="compromisso-home" className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Clareza antes da velocidade.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-white/25 pt-5">
                <PackageCheck className="h-6 w-6 text-primary-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">Item validado</h3>
                <p className="mt-2 leading-7 text-slate-300">Antes da confirmação, avaliamos se o volume e o tipo de item são adequados ao transporte em moto.</p>
              </div>
              <div className="border-t border-white/25 pt-5">
                <Route className="h-6 w-6 text-primary-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">Rota informada</h3>
                <p className="mt-2 leading-7 text-slate-300">Origem, destino e exceções entram na cotação. O cliente decide depois de receber as condições.</p>
              </div>
              <div className="border-t border-white/25 pt-5">
                <Clock3 className="h-6 w-6 text-primary-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">Horário real</h3>
                <p className="mt-2 leading-7 text-slate-300">Não anunciamos operação noturna ou de fim de semana: o expediente é de segunda a sexta, das 8h às 18h.</p>
              </div>
              <div className="border-t border-white/25 pt-5">
                <MessageCircle className="h-6 w-6 text-primary-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">Contato direto</h3>
                <p className="mt-2 leading-7 text-slate-300">A confirmação acontece pelo número oficial {PHONE_DISPLAY}, evitando canais e informações divergentes.</p>
              </div>
            </div>
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-brand-950">
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
