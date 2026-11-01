import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Clock3, MapPin, Route } from "lucide-react";
import { neighborhoodsSp } from "@/data/neighborhoods-sp";
import { PHONE_WA, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const metadata: Metadata = buildMetadata({
  title: "Motoboy de Guarulhos para São Paulo",
  description:
    "Solicite uma cotação de motoboy entre Guarulhos e São Paulo pelo WhatsApp. O atendente avalia os endereços e as condições da rota. Atendimento seg–sex, 8h–18h.",
  path: "/sao-paulo",
  keywords: [
    "motoboy Guarulhos São Paulo",
    "entrega Guarulhos capital",
    "coleta São Paulo entrega Guarulhos",
    "motofrete Guarulhos SP",
  ],
});

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Quero falar com um atendente para solicitar uma cotação entre Guarulhos e São Paulo. Coleta: (informar) / Entrega: (informar) / Item: (informar).",
)}`;

export default function SaoPauloHubPage() {
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Rotas metropolitanas"
        title="Motoboy entre Guarulhos e São Paulo com cotação por endereço."
        description="Para atravessar os dois municípios, bairro e distância fazem muita diferença. Envie origem, destino, item e prazo desejado. A Moto11 avalia a rota e informa as condições antes da confirmação."
      >
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Início</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">São Paulo</span>
          </nav>
      </PageHero>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="regioes-sp">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <Building2 className="h-8 w-8 text-primary-700" aria-hidden="true" />
              <h2 id="regioes-sp" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                Regiões para consulta de rota
              </h2>
              <p className="mt-4 leading-7 text-muted">
                 A lista organiza destinos frequentes de pesquisa. Outros destinos
                 ou necessidades devem ser avaliados pelo atendente no WhatsApp,
                 com os endereços completos e o item da rota.
               </p>
             </div>
             <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
               {neighborhoodsSp.map((area) => (
                <li key={area.slug} className="bg-white">
                  <Link href={`/sao-paulo/${area.slug}`} className="group flex min-h-20 items-center justify-between gap-3 p-4 font-semibold text-brand-950 hover:bg-surface-warm">
                    {area.nome}
                    <ArrowRight className="h-4 w-4 text-primary-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="calculo-sp">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Route className="h-9 w-9 text-primary-700" aria-hidden="true" />
            <h2 id="calculo-sp" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Como funciona a cotação entre Guarulhos e São Paulo?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              São Paulo tem uma área extensa, e dizer apenas “capital” não
              permite calcular a viagem. Um destino próximo à divisa e outro na
              zona sul formam rotas completamente diferentes. A origem dentro
              de Guarulhos também altera o percurso e a distância total.
            </p>
            <p>
              O trânsito pode mudar rapidamente nos corredores que conectam os
              municípios. Em vez de publicar uma duração fixa, a equipe informa
              uma previsão depois de conferir os endereços e as condições do
              momento. Essa previsão é uma estimativa operacional, não uma
              garantia contra ocorrências viárias ou climáticas.
            </p>
            <p>
              Paradas intermediárias, retorno ao ponto de origem, espera em
              recepção e acesso a edifícios comerciais também precisam entrar
              no pedido. Confira as{" "}
              <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/servicos">
                modalidades de serviço
              </Link>{" "}
              e os dados para a{" "}
              <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">
                cotação da rota
              </Link>. O atendente avalia esses detalhes antes de confirmar as condições.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="sentidos-rota">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-700">Nos dois sentidos</p>
            <h2 id="sentidos-rota" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Coleta em Guarulhos ou em São Paulo.
            </h2>
          </div>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
            <article className="bg-surface p-7 sm:p-10">
              <MapPin className="h-7 w-7 text-primary-700" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold text-brand-950">Guarulhos → São Paulo</h3>
              <p className="mt-4 leading-8 text-muted">
                Informe o ponto exato de coleta em Guarulhos e o destino na
                capital. Se o item precisa chegar antes de um horário específico,
                diga o prazo limite real, não apenas “urgente”. Isso permite
                avaliar se a rota é viável dentro do expediente.
              </p>
            </article>
            <article className="bg-surface p-7 sm:p-10">
              <MapPin className="h-7 w-7 text-primary-700" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-bold text-brand-950">São Paulo → Guarulhos</h3>
              <p className="mt-4 leading-8 text-muted">
                Para coleta na capital, envie o endereço, o responsável pela
                liberação e o horário em que o item estará pronto. Uma moto não
                deve ser acionada antes de a retirada estar confirmada, pois a
                 espera podem alterar a sequência da rota e precisam ser
                 avaliadas pelo atendente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white" aria-labelledby="planejamento-sp">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Clock3 className="h-8 w-8 text-primary-400" aria-hidden="true" />
            <h2 id="planejamento-sp" className="mt-5 font-display text-3xl font-bold sm:text-4xl">Planeje dentro do horário real.</h2>
          </div>
          <div className="space-y-5 leading-8 text-slate-200">
            <p>
              O atendimento da Moto11 ocorre de segunda a sexta, das 8h às 18h.
              Não há promessa de coleta noturna, em fins de semana ou feriados.
              Se a entrega tem compromisso cedo, solicite a cotação e programe
              a retirada no dia útil anterior sempre que possível.
            </p>
            <p>
              Para documentos, confira previamente se o destinatário aceitará
              o material e até qual horário. Para empresas e condomínios,
              confirme portaria, bloco, sala e autorização. Para locais com
              acesso controlado, envie os requisitos antes do deslocamento.
            </p>
            <p>
              Essas verificações parecem simples, mas evitam espera, tentativa
              frustrada e nova viagem. O objetivo é fazer uma cotação que reflita
              a rota completa, não apenas a distância entre dois pontos no mapa.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="guia-sp">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Planejamento da rota</p>
            <h2 id="guia-sp" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">Para cruzar municípios, a informação precisa acompanhar o item.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              “São Paulo” não é um destino suficiente para programar uma entrega saindo de Guarulhos. A cidade tem regiões muito diferentes entre si, e o sentido da rota também muda a operação. Informe o endereço completo nos dois pontos, o horário desejado, o item e os contatos de coleta e entrega. Se houver uma hora-limite, diga o horário real em que o local deixa de receber, em vez de resumir o pedido como urgente.
            </p>
            <p>
              Edifícios comerciais, condomínios, hospitais, órgãos públicos e centros de compras podem exigir cadastro, identificação, retirada em doca ou entrega em balcão. Um pedido claro informa essas etapas antes do deslocamento. Isso ajuda a avaliar espera, retorno, autorização e acesso sem transformar um detalhe do destino em surpresa depois que a rota foi confirmada.
            </p>
            <p>
              As páginas de região abaixo organizam destinos pesquisados com frequência. Elas não prometem tempo de percurso nem substituem a avaliação de disponibilidade. Atendimento ocorre de segunda a sexta, das 8h às 18h; não há operação noturna, em fins de semana ou feriados. Para uma travessia, envie o roteiro completo pelo WhatsApp e aguarde a avaliação do atendente.
            </p>
            <p>
              A capital tem restrições viárias e áreas de circulação controlada. Informe se o destino tem regra de acesso, estacionamento, doca ou horário de recebimento. O atendente considera esses dados ao avaliar a rota.
            </p>
            <p>
              Para empresas que mantêm trocas frequentes entre Guarulhos e São Paulo, informe frequência, janelas, contatos e regras de acesso. O atendente pode avaliar a solicitação recorrente conforme a disponibilidade da operação.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="rotas-metropolitanas">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary-700">Corredores de tráfego</p>
            <h2 id="rotas-metropolitanas" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Deslocamento eficiente entre Guarulhos e a capital.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              A conexão entre Guarulhos e as diferentes zonas de São Paulo depende do sentido da rota, dos endereços exatos e do horário. Destinos na Zona Leste, como Brás, Mooca, Tatuapé e Penha, têm acessos diferentes dos destinos do centro ou das zonas Sul e Oeste.
            </p>
            <p>
              Destinos na região central, como Sé, República e Paulista, e nas zonas Sul e Oeste, como Pinheiros, Itaim Bibi, Moema e Vila Mariana, também exigem atenção a acessos, regras do edifício e horário de recebimento. Não use uma página de região como confirmação automática de prazo.
            </p>
            <p>
              Em qualquer chamado metropolitano, combine pelo WhatsApp quem entrega, quem recebe e qual confirmação é necessária. Essas informações evitam dúvidas no percurso e devem ser avaliadas antes da coleta.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-16 text-white" aria-labelledby="sp-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="sp-cta" className="font-display text-3xl font-bold sm:text-4xl">Quer cotar a travessia para São Paulo?</h2>
            <p className="mt-2 text-slate-300">Envie os endereços completos, o item e o horário desejado.</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-success px-7 py-3 font-bold text-white transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir cotação no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
