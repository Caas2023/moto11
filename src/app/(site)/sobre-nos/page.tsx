import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Sobre a Moto11 | Motoboy em Guarulhos",
  description: "Conheça o atendimento da Moto11 em Guarulhos e saiba como solicitar uma cotação pelo WhatsApp.",
  alternates: { canonical: `${SITE.baseUrl}/sobre-nos` },
};

export default function Page() {
  return (
    <article className="space-y-10">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Sobre nós" }]} />
      <PageHero compact eyebrow="Moto11 · Guarulhos" title="Sobre a Moto11" description="Atendemos solicitações de motoboy em Guarulhos e rotas para São Paulo. Antes de confirmar uma entrega, precisamos conhecer a origem, o destino, o item e as condições da coleta. Assim podemos informar o valor e verificar a disponibilidade da rota." />
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-line bg-white p-7">
          <h2 className="font-display text-2xl font-bold text-brand-950">Como pedir</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Envie pelo WhatsApp os endereços de coleta e entrega, o tipo de item e o horário desejado.
            Para cartórios, shopping e aeroporto, o valor é cotado conforme a solicitação.
          </p>
          <Link className="mt-4 inline-block font-semibold text-primary-700 underline underline-offset-4" href="/servicos">Conheça os serviços</Link>
        </section>
        <section className="rounded-3xl border border-line bg-surface-warm p-7">
          <h2 className="font-display text-2xl font-bold text-brand-950">Horário e preços</h2>
          <p className="mt-3 leading-relaxed text-muted">
            O atendimento funciona de segunda a sexta, das 8h às 18h. Não há operação noturna,
            aos fins de semana ou em feriados. Consulte a tabela de preços ou envie
            sua rota para receber uma cotação.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            A Moto11 trabalha com uma regra simples de comunicação: primeiro entende a missão, depois confirma o que pode ser feito. Isso inclui verificar se o item é compatível com o transporte em moto, se o local permite a retirada e se o horário solicitado cabe na operação. Quando há cartório, shopping, aeroporto, portaria controlada ou espera, essa condição entra na conversa antes da confirmação. O objetivo é reduzir surpresa, não criar uma promessa genérica para todos os bairros.
          </p>
          <Link className="mt-4 inline-block font-semibold text-primary-700 underline underline-offset-4" href="/precos">Veja a tabela completa</Link>
        </section>
      </div>
      <section className="prose max-w-3xl space-y-5 text-muted" aria-labelledby="como-trabalhamos">
        <h2 id="como-trabalhamos" className="font-display text-2xl font-bold text-brand-950">Como funciona o atendimento</h2>
        <p>
          A Moto11 organiza o atendimento a partir da missão real, e não de um pacote genérico. Uma pessoa pode precisar apenas de uma entrega de documentos entre dois endereços; outra pode precisar de coleta em uma loja, entrega ao cliente final, retorno com assinatura ou espera em uma recepção. Essas diferenças mudam a análise da rota. Por isso, o primeiro contato pede informações práticas: origem, destino, item, contatos e horário desejado.
        </p>
        <p>
          O valor é apresentado antes da coleta. A tabela de preços serve como referência para trajetos simples, enquanto cartórios, shopping, aeroporto, múltiplas paradas e tarefas com espera recebem avaliação própria. Essa separação evita que uma tarifa curta seja apresentada como se servisse para qualquer missão. Também permite que a pessoa decida com mais clareza, sabendo quais etapas foram consideradas e quais condições ainda dependem do local.
        </p>
        <p>
          O atendimento oficial funciona de segunda a sexta, das 8h às 18h. Mensagens podem ser enviadas pelo WhatsApp a qualquer momento, mas pedidos fora desse período podem ficar para o próximo dia útil. Não divulgamos operação noturna, fim de semana ou feriado como disponibilidade garantida. Quando uma solicitação cruza Guarulhos e São Paulo, a equipe precisa dos dois endereços completos para avaliar trânsito, distância, sentido e horário de recebimento.
        </p>
        <p>
          A descrição do item também protege a execução. Peso, dimensões, embalagem, fragilidade e necessidade de temperatura ou sigilo devem ser informados antes da confirmação. O transporte em moto precisa ser compatível com o baú e com as condições de segurança disponíveis. Se a missão exigir equipamento, carga ou acesso que não foram combinados, a equipe explica a limitação antes de deslocar o piloto.
        </p>
        <p>
          A página existe para tornar essa conversa mais objetiva. Não apresenta uma história inventada, números de frota ou avaliações sem fonte. Em vez disso, mostra como pedir, onde consultar preço e quais informações ajudam a reduzir retrabalho. A decisão final continua sendo feita com dados da rota e disponibilidade do momento. Para começar, use o WhatsApp e envie a missão completa em uma única mensagem.
        </p>
        <p>
          Também é importante separar informação institucional de recomendação automática. O fato de a Moto11 atender determinada cidade ou bairro não significa que exista um piloto disponível em todos os horários, nem que uma coleta possa ser prometida sem endereço. As páginas de cobertura organizam a consulta e ajudam a iniciar a conversa; a confirmação é feita pelo canal oficial, com base no pedido completo.
        </p>
        <p>
          Para clientes recorrentes, uma conversa inicial bem documentada pode servir de base para novas cotações, mas cada mudança de rota deve ser informada. Alterar endereço, quantidade, horário, peso ou necessidade de espera pode mudar a operação. A empresa deve manter seus próprios contatos e instruções atualizados e confirmar qualquer condição especial antes de enviar o item para retirada.
        </p>
        <p>
          A proposta da Moto11 é oferecer uma decisão simples: explicar o que foi informado, mostrar a regra aplicável e deixar o cliente confirmar com conhecimento das condições. Quando uma solicitação não cabe no escopo do transporte em moto, o melhor atendimento é dizer isso antes da saída. Essa clareza protege o material, o destinatário e o profissional responsável pela rota.
        </p>
        <p>
          O relacionamento também depende de expectativa correta. Uma empresa que precisa de entregas todos os dias deve explicar volume, horários e responsáveis desde o início. Uma pessoa que precisa de uma única coleta deve enviar a rota completa e aguardar a condição aplicável. Os dois cenários podem ser atendidos de forma diferente, e não é útil apresentar o mesmo pacote para necessidades que não são iguais.
        </p>
        <p>
          A comunicação pelo WhatsApp facilita o registro do pedido, mas não elimina a necessidade de conferência. Antes de aceitar, revise endereços, nome do destinatário, item, horário e etapas. Se houver mudança, atualize a equipe. A Moto11 trabalha melhor quando a informação usada na cotação é a mesma informação disponível para quem executa a coleta e para quem recebe a entrega.
        </p>
      </section>
      <WhatsAppCTA title="Converse com a Moto11" subtitle="Envie sua rota para conferir preço e disponibilidade em horário comercial." message="Olá! Quero saber mais sobre os serviços da Moto11. Minha rota é: " />
    </article>
  );
}
