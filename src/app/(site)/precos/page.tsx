import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";
import { PRICING, formatBRL, quotePrice, quoteWait } from "@/data/pricing";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Tabela de Preços de Motoboy em Guarulhos",
  description:
    "Tabela real de preços de motoboy em Guarulhos: 0–8 km R$ 35,00 fixos, +R$ 2,50/km extra, espera com 15 min de tolerância +R$ 0,60/min. Cartórios, shopping e aeroporto: cotação à parte.",
  alternates: { canonical: `${SITE.baseUrl}/precos` },
  openGraph: {
    title: "Tabela de Preços de Motoboy em Guarulhos",
    description: "Preço por distância e espera, calculado pela tabela real. Confirme o valor fechado no WhatsApp.",
    url: `${SITE.baseUrl}/precos`,
    type: "website",
  },
};

const ROWS = [
  { servico: "Entrega de 0 a 8 km (preço fixo)", ref: `${formatBRL(quotePrice(5))} — ex.: 5 km`, obs: "Valor fechado por distância" },
  { servico: "Entrega de 10 km", ref: formatBRL(quotePrice(10)), obs: `R$ 35,00 + 2 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Entrega de 15 km", ref: formatBRL(quotePrice(15)), obs: `R$ 35,00 + 7 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Entrega de 20 km", ref: formatBRL(quotePrice(20)), obs: `R$ 35,00 + 12 km × ${formatBRL(PRICING.extraPerKm)}` },
  { servico: "Tempo de espera", ref: `${PRICING.waitToleranceMin} min de tolerância + ${formatBRL(PRICING.waitPerMin)}/min — ex.: 30 min = ${formatBRL(quoteWait(30))}`, obs: "Avisado antes de continuar aguardando" },
  { servico: "Cartórios, shopping e aeroporto", ref: "Cotação à parte", obs: "Preço diferente — peça no WhatsApp" },
];

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Table",
            about: "Tabela de preços de motoboy em Guarulhos",
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Preços" }]} />
      <PageHero compact eyebrow="Valores e condições" title="Tabela de preços de motoboy em Guarulhos" description={<>Preço por distância e espera, calculado pela tabela real Moto11: 0–8 km por {formatBRL(PRICING.basePrice)} fixos, +{formatBRL(PRICING.extraPerKm)}/km extra, espera com {PRICING.waitToleranceMin} min de tolerância +{formatBRL(PRICING.waitPerMin)}/min. O preço final é sempre confirmado no WhatsApp antes da coleta — sem taxa escondida.</>} />

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="p-4 text-left font-semibold">Tabela real Moto11 — Guarulhos e região (sujeita a confirmação por rota)</caption>
          <thead className="bg-zinc-950 text-white">
            <tr>
              <th className="p-3">Serviço</th>
              <th className="p-3">Valor de referência</th>
              <th className="p-3">Observação</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r.servico} className={i % 2 ? "bg-zinc-50" : "bg-white"}>
                <td className="p-3 font-medium">{r.servico}</td>
                <td className="p-3">{r.ref}</td>
                <td className="p-3">{r.obs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como ler a tabela sem errar</h2>
        <p>
          Os valores acima saem direto da regra: {formatBRL(PRICING.basePrice)} fixos para
          trajetos de 0 a {PRICING.baseKm} km e {formatBRL(PRICING.extraPerKm)} por quilômetro
          extra acima disso. A distância é calculada pela rota real de moto, não em linha reta,
          e o atendente informa o total fechado antes de deslocar o piloto. Se o seu roteiro tem
          espera em fila ou volume fora do padrão, o adicional é avisado antecipadamente
          — confirme o valor final antes de solicitar a entrega.
        </p>
        <p>
          Atendemos solicitações de rotas em Guarulhos e para São Paulo. O atendimento é de segunda a sexta, das 8h às 18h
          — sem operação de madrugada, à noite, aos fins de semana ou em feriados.
          Cartórios, shopping e aeroporto têm cotação à parte, com preço informado antes da coleta.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que confirmar antes de contratar</h2>
        <p>
          Envie a descrição do item, os endereços e qualquer necessidade especial de manuseio.
          Pergunte sobre comprovante, espera e eventual retorno antes de confirmar o pedido.
          Serviços em cartórios, shopping e aeroporto exigem cotação específica.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Rotas para empresas</h2>
        <p>
          Se sua empresa precisa de entregas recorrentes ou várias paradas, envie o roteiro completo
          para avaliação. A tabela acima serve como referência para rotas simples; valores para
          operações específicas são informados na cotação.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que entra no cálculo</h2>
        <p>
          A cotação começa pelos endereços completos de coleta e entrega. O atendente precisa saber a distância da rota, o sentido da viagem e se existe alguma etapa além de pegar e deixar o item. Uma entrega ponto a ponto pode seguir a regra de distância publicada; já uma missão com retorno, múltiplas paradas, fila, portaria ou protocolo precisa considerar o tempo e o trabalho adicionais. Essa distinção evita comparar uma corrida simples com uma tarefa que exige permanência no local.
        </p>
        <p>
          Os exemplos da tabela são referências para ajudar no planejamento, não promessa de que toda rota terá o mesmo valor. A quilometragem efetiva, a origem, o destino e as condições especiais precisam ser conferidos. Quando houver diferença entre a expectativa do cliente e a rota real, a equipe explica o motivo antes de seguir. O preço fechado deve ser entendido como a condição confirmada para aquela missão específica, naquele horário e com aquelas informações.
        </p>
        <p>
          Em caso de dúvida, compare primeiro o tipo de tarefa, não apenas o número de quilômetros. Uma corrida curta até um shopping pode exigir estacionamento e espera; uma distância maior entre dois endereços liberados pode ser mais simples de executar. Descrever o cenário completo torna a cotação mais justa e reduz a chance de o cliente escolher uma referência que não corresponde ao serviço solicitado.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Exemplos de pedidos bem descritos</h2>
        <p>
          Um pedido objetivo pode dizer: coleta de um envelope lacrado em uma empresa, entrega em outro endereço, destinatário identificado e horário-limite. Se houver necessidade de assinatura, inclua essa etapa. Outro pedido pode envolver uma caixa pequena, com peso e medida aproximados, retirada em loja e entrega em residência. Nessa situação, indique contato do comprador e se o local tem portaria. Exemplos assim ajudam o atendimento a diferenciar uma corrida direta de uma missão com instruções adicionais.
        </p>
        <p>
          Em uma rota empresarial recorrente, descreva os pontos fixos, dias, janelas e quantidade de paradas. Informe se cada parada exige foto, protocolo, assinatura ou retorno. O atendimento pode avaliar o conjunto, mas o preço não deve ser deduzido apenas pelo número de entregas: distância, sequência, espera e acesso influenciam. A cotação deve refletir o roteiro que será executado, não uma média abstrata.
        </p>
        <p>
          Para uma solicitação com prazo sensível, informe o horário máximo e o motivo operacional sem expor dados desnecessários. Isso permite verificar se a rota cabe no expediente e se o trânsito pode comprometer a estimativa. Nenhum preço publicado garante que um deslocamento impossível será realizado; se as condições não forem compatíveis, a equipe precisa explicar antes da confirmação.
        </p>
        <p>
          A tabela também não substitui a conferência do item. Materiais frágeis, perecíveis, volumosos, perigosos ou que exigem acondicionamento específico precisam ser descritos com honestidade. Não esconda dimensões para tentar encaixar um pedido na tarifa mais baixa. A solução correta começa com segurança, compatibilidade e informação suficiente para que o transporte seja avaliado. Quando houver incerteza, pergunte antes de embalar e antes de solicitar o deslocamento. Essa conversa prévia costuma economizar tempo e evita que o piloto descubra uma incompatibilidade somente ao chegar. Também permite orientar a embalagem, o contato no destino e o procedimento adequado antes que a rota seja confirmada.
        </p>
        <p>
          O item também faz parte da avaliação. Informe peso, dimensões aproximadas, embalagem, fragilidade e qualquer restrição de manuseio. O transporte em moto precisa ser seguro para o material, o piloto e as pessoas que recebem. Se a caixa não couber no baú ou exigir equipamento que não foi combinado, o pedido pode precisar de outra solução. A confirmação antes da coleta protege as duas pontas e evita custo inesperado.
        </p>
        <p>
          Para empresas, vale enviar frequência, janela, quantidade de paradas, contatos e horários de doca ou recepção. O preço de uma operação recorrente não deve ser inferido pela multiplicação automática de uma corrida avulsa: o roteiro completo pode mudar quilometragem, espera e organização. A Moto11 retorna com as condições aplicáveis antes do primeiro deslocamento. Essa transparência é mais útil que uma promessa fixa que não considera a operação real.
        </p>
      </div>

      <WhatsAppCTA
        title="Quer o valor exato da sua rota?"
        subtitle="Envie origem e destino para confirmar o valor e a disponibilidade da rota."
        message="Olá! Vi a tabela de preços no site e quero o valor fechado da minha rota em Guarulhos."
      />
    </article>
  );
}
