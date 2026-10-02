import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Route, Search } from "lucide-react";
import { neighborhoodsGu } from "@/data/neighborhoods-gu";
import { PHONE_WA, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const metadata: Metadata = buildMetadata({
  title: "Áreas atendidas por motoboy em Guarulhos",
  description:
    "Consulte bairros de Guarulhos para coleta e entrega de moto. Disponibilidade e previsão são confirmadas pela rota, de segunda a sexta, das 8h às 18h.",
  path: "/areas-atendidas",
  keywords: [
    "motoboy bairros de Guarulhos",
    "áreas atendidas motoboy Guarulhos",
    "entrega Cumbica",
    "motoboy Centro Guarulhos",
  ],
});

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Quero confirmar atendimento no meu bairro. Coleta: (informar) / Entrega: (informar).",
)}`;

export default function AreasAtendidasPage() {
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Cobertura local"
        title="Motoboy nos bairros de Guarulhos, com rota confirmada antes da coleta."
        description="Use a lista para localizar sua região e entender como solicitar. Atendimento, disponibilidade e previsão não são definidos apenas pelo nome do bairro: precisamos dos endereços completos e do horário desejado."
      >
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Início</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Áreas atendidas</span>
          </nav>
      </PageHero>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="lista-bairros">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <MapPin className="h-8 w-8 text-primary-700" aria-hidden="true" />
              <h2 id="lista-bairros" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                Consulte por bairro
              </h2>
              <p className="mt-4 leading-7 text-muted">
                As páginas locais estão sendo revisadas para que nenhuma delas
                publique prazo, distância ou promessa sem validação. O WhatsApp
                continua sendo o canal correto para confirmar uma rota específica.
              </p>
            </div>
            <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {neighborhoodsGu.map((area) => (
                <li key={area.slug} className="bg-white">
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex min-h-20 items-center justify-between gap-3 p-4 font-semibold text-brand-950 hover:bg-surface-warm"
                  >
                    {area.nome}
                    <ArrowRight className="h-4 w-4 text-primary-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16 sm:py-24" aria-labelledby="rota-nao-bairro">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Search className="h-9 w-9 text-primary-700" aria-hidden="true" />
            <h2 id="rota-nao-bairro" className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              O bairro orienta. O endereço decide.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Dois endereços no mesmo bairro podem ter condições diferentes.
              Condomínios exigem contato na portaria; empresas podem limitar o
              recebimento a uma doca ou janela; centros comerciais podem exigir
              estacionamento e deslocamento interno. Por isso, o nome da região
              não basta para fechar preço e prazo.
            </p>
            <p>
              Ao pedir a cotação, informe número, complemento, referência e o
              contato de quem entrega e de quem recebe. Se houver documentação,
              senha, autorização ou horário limite, inclua essa informação na
              primeira mensagem. Isso permite avaliar a missão inteira.
            </p>
            <p>
              Em trajetos que cruzam a cidade, o trânsito nos principais eixos
              pode alterar a previsão. A equipe informa uma estimativa no momento
              do atendimento, dentro do expediente de segunda a sexta, das 8h às 18h.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="como-confirmar-area">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Confirmação de cobertura</p>
            <h2 id="como-confirmar-area" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Três verificações antes de aceitar a rota.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <article className="border-t-2 border-brand-950 pt-5">
              <MapPin className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-brand-950">Localização</h3>
              <p className="mt-3 leading-7 text-muted">Conferimos origem e destino completos, não apenas o bairro ou um ponto de referência.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Clock3 className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-brand-950">Horário</h3>
              <p className="mt-3 leading-7 text-muted">Validamos se a coleta cabe no expediente e se o destino estará aberto quando a moto chegar.</p>
            </article>
            <article className="border-t-2 border-brand-950 pt-5">
              <Route className="h-6 w-6 text-primary-700" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-brand-950">Condições</h3>
              <p className="mt-3 leading-7 text-muted">Espera, acesso especial e múltiplas paradas entram na análise antes da confirmação.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24" aria-labelledby="guia-bairro">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Guia de cobertura</p>
            <h2 id="guia-bairro" className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">O bairro ajuda a encontrar a página. A coleta depende do endereço.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              Guarulhos reúne regiões residenciais, comerciais, industriais e aeroportuárias com rotinas diferentes. Uma referência de bairro facilita a conversa, mas não diz sozinha onde o item será retirado, se a rua é acessível, se há portaria ou se o destinatário estará disponível. Por isso, as páginas locais servem como ponto de partida para pesquisa, enquanto a confirmação é feita com origem, destino e horário completos.
            </p>
            <p>
              Antes de pedir, confira o número, complemento, bloco, sala e ponto de referência. Se o local usa portaria, avise o nome de quem autoriza a entrada e deixe um contato que possa atender. Para empresas, confirme se a retirada acontece no balcão, na doca ou em outro ponto interno. Para documentos, diga se há assinatura, protocolo ou devolução. Esses detalhes não são burocracia: eles definem o que a moto precisa fazer ao chegar.
            </p>
            <p>
              A previsão de uma rota não é uma promessa automática por bairro. O trânsito, a disponibilidade no momento da solicitação, o sentido da viagem e as condições de recebimento mudam o percurso. Atendimento é de segunda a sexta, das 8h às 18h. Para serviços que envolvem cartório, shopping ou aeroporto, explique a tarefa e consulte a cotação antes de confirmar. A <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/precos">tabela de preços</Link> mostra a regra de rotas simples.
            </p>
            <p>
              Se o seu bairro não estiver na lista ou a entrega sair de Guarulhos para outro município, isso não significa recusa automática. Envie os dois endereços e o item para avaliação. Para destinos na capital, visite também as <Link className="font-semibold text-primary-700 underline underline-offset-4" href="/sao-paulo">rotas entre Guarulhos e São Paulo</Link>. O objetivo é confirmar uma entrega possível, e não prometer cobertura baseada apenas em uma página.
            </p>
          </div>
        </div>
      </section>

      <EditorialSections variant="areas" />
      <section className="bg-brand-950 py-16 text-white" aria-labelledby="area-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="area-cta" className="font-display text-3xl font-bold sm:text-4xl">Seu bairro não apareceu ou a rota cruza municípios?</h2>
            <p className="mt-3 leading-7 text-slate-300">Envie os dois endereços. A equipe confirma a possibilidade de atendimento e apresenta o orçamento antes da saída.</p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-3 font-bold hover:bg-white hover:text-brand-950">
            Confirmar minha rota <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
