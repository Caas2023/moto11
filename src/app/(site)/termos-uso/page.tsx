import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Condições de atendimento | Moto11",
  description: "Informações básicas para solicitar uma entrega à Moto11.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <article className="max-w-3xl space-y-6">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Condições de atendimento" }]} />
       <PageHero compact eyebrow="Informações de contratação" title="Condições de atendimento" />
      <div className="prose max-w-3xl space-y-5 text-muted">
        <h2 className="font-display text-2xl font-bold text-brand-950">1. Objeto e Âmbito de Atuação</h2>
        <p>
          Estes Termos e Condições de Atendimento estabelecem as regras gerais aplicáveis à contratação dos serviços de transporte rápido de cargas leves, encomendas e documentos por motocicleta oferecidos pela Moto11 em Guarulhos e em rotas metropolitanas com a cidade de São Paulo e municípios vizinhos.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">2. Horário Oficial de Funcionamento</h2>
        <p>
          Os serviços da Moto11 operam exclusivamente de segunda a sexta-feira, das 08h00 às 18h00, em dias úteis. A Moto11 não realiza atendimento noturno, de madrugada, aos sábados, domingos ou em feriados municipais, estaduais e nacionais. Solicitações encaminhadas fora do horário comercial são registradas e respondidas a partir do primeiro dia útil subsequente.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">3. Precificação, Cotação e Espera</h2>
        <p>
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
        <p>
          São aceitos para transporte em baú de motocicleta volumes de até aproximadamente 20 kg que caibam com segurança no compartimento vedado (baú de até 90–100 litros) ou na grelha de fixação apropriada, tais como documentos, contratos, chaves, peças automotivas de pequeno porte, materiais de escritório, exames laboratoriais e pacotes de e-commerce devidamente embalados.
        </p>
        <p>
          <strong>Restrições absolutas:</strong> É terminantemente proibido o transporte de substâncias ilícitas, armas, munições, produtos inflamáveis, botijões de gás, animais vivos, materiais explosivos ou corrosivos, bem como valores em espécie sem prévia declaração formal de numerário operacional de baixo valor.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">5. Responsabilidades do Contratante</h2>
        <p>
          O cliente remetente compromete-se a fornecer informações verídicas e completas sobre os endereços de coleta e entrega (incluindo complemento, número de sala/bloco e ponto de referência), além de assegurar que o destinatário estará apto e autorizado a receber o volume no horário previsto para a baixa da entrega.
        </p>
      </div>
    </article>
  );
}
