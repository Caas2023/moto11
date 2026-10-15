import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Condições de Atendimento e Termos de Uso | Moto11",
  description: "Informações sobre condições de atendimento, contratação e regras de transporte da Moto11 em Guarulhos e SP.",
  robots: { index: false, follow: true },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Tenho uma dúvida sobre as condições de atendimento da Moto11.",
)}`;

export default function TermosUsoPage() {
  return (
    <>
      <PageHero
        eyebrow="Informações de Contratação"
        title="Condições de atendimento e termos de uso."
        description="Regras transparentes sobre transporte de cargas leves, horário de expediente, procedimentos de espera e responsabilidades operacionais."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Termos de uso</span>
        </nav>
      </PageHero>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose max-w-none space-y-6 text-muted">
            <h2 className="font-display text-2xl font-bold text-brand-950">1. Objeto e Âmbito de Atuação</h2>
            <p className="leading-relaxed">
              Estes Termos e Condições de Atendimento estabelecem as regras gerais aplicáveis à contratação dos serviços de transporte rápido de cargas leves, encomendas e documentos por motocicleta oferecidos pela Moto11 em Guarulhos e em rotas metropolitanas com a cidade de São Paulo e municípios vizinhos.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">2. Horário Oficial de Funcionamento</h2>
            <p className="leading-relaxed">
              Os serviços da Moto11 operam exclusivamente de segunda a sexta-feira, das 08h00 às 18h00, em dias úteis. A Moto11 não realiza atendimento noturno, de madrugada, aos sábados, domingos ou em feriados municipais, estaduais e nacionais. Solicitações encaminhadas fora do horário comercial são registradas e respondidas a partir do primeiro dia útil subsequente.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">3. Precificação, Cotação e Espera</h2>
            <p className="leading-relaxed">
              Os valores dos fretes são orçados de forma transparente com base na rota viária percorrida, tipo de volume e condições de atendimento:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cotação prévia obrigatória:</strong> O valor final do serviço é sempre informado e acordado previamente com o contratante pelo WhatsApp antes do deslocamento do piloto.</li>
              <li><strong>Critério de distância:</strong> A rota é calculada com base no trajeto viário real de moto entre os pontos de coleta e entrega, sem cobrança de taxas dinâmicas não combinadas.</li>
              <li><strong>Franquia de espera:</strong> É concedida tolerância de cortesia para localização de responsáveis, liberação em portarias ou conferência simples no local.</li>
              <li><strong>Tempo adicional de espera:</strong> Em casos de retenção prolongada além da franquia, eventuais adicionais são comunicados e aprovados previamente junto ao contratante pelo canal de atendimento.</li>
              <li><strong>Destinos com cotação especial:</strong> Rotas com paradas em cartórios, fóruns judiciais, shoppings e no Terminal de Cargas ou terminais de passageiros do Aeroporto Internacional de Guarulhos (GRU) recebem cotação específica antes da saída em razão de filas e procedimentos de acesso.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-950">4. Itens Permitidos e Limitações de Carga</h2>
            <p className="leading-relaxed">
              São aceitos para transporte em baú de motocicleta volumes de até aproximadamente 20 kg que caibam com segurança no compartimento vedado (baú de até 90–100 litros) ou na grelha de fixação apropriada, tais como documentos, contratos, chaves, peças automotivas de pequeno porte, materiais de escritório, exames laboratoriais e pacotes de e-commerce devidamente embalados.
            </p>
            <p className="leading-relaxed">
              <strong>Restrições absolutas:</strong> É terminantemente proibido o transporte de substâncias ilícitas, armas, munições, produtos inflamáveis, botijões de gás, animais vivos, materiais explosivos ou corrosivos, bem como valores em espécie sem prévia declaração formal de numerário operacional de baixo valor.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">5. Responsabilidades do Contratante</h2>
            <p className="leading-relaxed">
              O cliente remetente compromete-se a fornecer informações verídicas e completas sobre os endereços de coleta e entrega (incluindo complemento, número de sala/bloco e ponto de referência), além de assegurar que o destinatário estará apto e autorizado a receber o volume no horário previsto para a baixa da entrega.
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-termos">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-termos" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ficou com alguma dúvida sobre o atendimento?
            </h2>
            <p className="mt-2 text-orange-50">
              Chame nossa equipe pelo WhatsApp e esclarecemos qualquer detalhe da sua entrega.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-primary-700 hover:bg-brand-950 hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
