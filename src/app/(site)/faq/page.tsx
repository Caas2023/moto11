import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Perguntas frequentes sobre motoboy em Guarulhos",
  description:
    "Respostas confirmadas sobre preço, horário, espera, cobertura e contratação de motoboy em Guarulhos.",
  alternates: { canonical: `${SITE.baseUrl}/faq` },
  openGraph: {
    title: "FAQ Motoboy em Guarulhos",
    description: "Respostas diretas sobre preço, horário, cobertura e contratação.",
    url: `${SITE.baseUrl}/faq`,
    type: "website",
  },
};

const FAQS: { q: string; a: string }[] = [
  { q: "Quanto custa um motoboy em Guarulhos?", a: "Consulte a tabela de preços. O valor final depende dos endereços e das condições da rota e é confirmado antes da coleta." },
  { q: "Qual é o horário de atendimento?", a: "Atendemos de segunda a sexta, das 8h às 18h. Fora do horário comercial, chame no WhatsApp e retornamos no próximo dia útil." },
  { q: "Como é calculado o tempo de espera?", a: "Há um período de tolerância; depois, a espera pode ser cobrada conforme a tabela de preços. Se houver risco de fila, informe antes de confirmar." },
  { q: "Cartório, shopping e aeroporto seguem a tabela comum?", a: "Não automaticamente. Esses locais recebem cotação à parte por causa de acesso, estacionamento e possível espera." },
  { q: "Qual é o prazo de coleta?", a: "A previsão depende do endereço, do trânsito e da disponibilidade no momento do pedido. Ela é informada antes da confirmação; não publicamos um prazo único para toda Guarulhos." },
  { q: "Quais bairros são atendidos?", a: "Recebemos solicitações para bairros de Guarulhos. A cobertura de cada chamado é confirmada pelos endereços completos e pela disponibilidade no horário solicitado." },
  { q: "A Moto11 faz rotas para São Paulo?", a: "Rotas entre Guarulhos e São Paulo podem ser cotadas. Envie origem e destino completos para receber valor e previsão." },
  { q: "O que preciso enviar para cotar?", a: "Origem, destino, descrição do item, contatos nas duas pontas, prazo desejado e informação sobre espera, retorno ou múltiplas paradas." },
  { q: "O orçamento é confirmado antes da coleta?", a: "Sim. Você recebe a estimativa ou o valor aplicável à rota e decide se deseja confirmar o chamado antes do deslocamento." },
  { q: "Posso pedir fora do horário comercial?", a: "Você pode deixar a mensagem no WhatsApp. Como não há atendimento noturno ou de fim de semana confirmado, o retorno pode ocorrer no próximo dia útil." },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <article className="space-y-8">
      <JsonLd data={faqJsonLd} />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "FAQ" }]} />
      <PageHero compact eyebrow="Dúvidas frequentes" title="Perguntas frequentes sobre motoboy em Guarulhos" description="Consulte preço, horário, espera, cobertura e os dados necessários para pedir uma cotação com clareza." />

      <div className="grid gap-3">
        {FAQS.map((f, i) => (
          <details key={f.q} className="rounded-xl border p-4 open:bg-zinc-50">
            <summary className="cursor-pointer font-bold">
              {String(i + 1).padStart(2, "0")}. {f.q}
            </summary>
            <p className="mt-2 text-zinc-700">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como usar estas respostas</h2>
        <p>
          Este FAQ explica as condições gerais para pedir uma cotação de motoboy em Guarulhos e em rotas para São Paulo. Ele não substitui a confirmação do endereço, do item e da disponibilidade no momento do atendimento. A previsão muda com trânsito, sentido da viagem, horário de recebimento, acesso ao local e necessidade de espera. Por isso, uma resposta que descreve a regra ajuda a preparar o pedido, mas o valor e a possibilidade da missão são confirmados antes da coleta.
        </p>
        <p>
          Para acelerar a conversa, envie rua, número, complemento e referência de origem; endereço completo de destino; nome e telefone de quem entrega e de quem recebe; descrição, peso e dimensões aproximadas do item; horário-limite; e qualquer etapa adicional, como assinatura, protocolo, fila, retorno ou múltiplas paradas. Cartórios, shopping e aeroporto exigem cotação específica porque podem ter estacionamento, credenciamento e espera diferentes de uma entrega simples.
        </p>
        <p>
          Cada resposta foi escrita para refletir o atendimento informado pela Moto11: segunda a sexta, das 8h às 18h, com retorno de mensagens fora desse período no próximo dia útil. A página de preços concentra a fórmula publicada, enquanto o WhatsApp confirma a rota real. Não anunciamos prazo absoluto, operação noturna ou cobertura automática apenas porque um bairro aparece em uma lista. Se sua dúvida não estiver aqui, descreva a missão completa e peça uma avaliação direta.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Como evitar uma cotação incompleta</h2>
        <p>
          O erro mais comum em uma solicitação é enviar somente o nome do bairro e perguntar quanto custa. O bairro ajuda a localizar a missão, mas não informa a rua, o acesso, o sentido da rota ou a distância até o destino. Uma cotação confiável precisa de dois endereços, mesmo quando a coleta e a entrega ficam no mesmo município. Para condomínios, empresas e centros comerciais, inclua torre, doca, portaria ou referência que ajude o piloto a encontrar a pessoa certa.
        </p>
        <p>
          Também é importante diferenciar o objeto da tarefa. Levar um envelope fechado de um ponto a outro é diferente de protocolar documento, aguardar atendimento, trazer uma assinatura de volta ou cumprir várias paradas. Escreva todas as etapas no primeiro contato. Isso permite avaliar espera, retorno e acesso antes de apresentar valor, em vez de descobrir uma cobrança ou limitação quando o piloto já estiver no local.
        </p>
        <p>
          A descrição do item deve ser objetiva. Informe se é documento, caixa, peça, alimento, medicamento, equipamento ou outro volume; indique peso e tamanho aproximados; e diga se há fragilidade, temperatura ou embalagem especial. A Moto11 pode recusar ou redirecionar materiais que não sejam compatíveis com transporte em moto. Essa análise não é burocracia: evita risco de queda, dano, exposição indevida ou chegada sem condição segura de recebimento.
        </p>
        <p>
          Em rotas para São Paulo, envie a origem em Guarulhos e o endereço completo na capital. Trânsito, chuva, bloqueio, horário e acesso alteram a previsão, portanto o tempo informado no atendimento é uma estimativa contextual, não uma promessa universal. Se houver compromisso com hora-limite, escreva esse horário e diga o que acontece se a entrega não puder ser concluída. A equipe pode então explicar a viabilidade antes de você confirmar.
        </p>
        <p>
          O FAQ não substitui o atendimento porque cada missão tem uma combinação própria de fatores. Uma coleta em empresa pode depender de portaria e autorização; uma entrega em residência pode depender de alguém disponível para receber; uma tarefa em cartório pode exigir fila, protocolo e devolução. A resposta correta para esses casos nasce da descrição completa, não de uma frase pronta associada ao nome do bairro.
        </p>
        <p>
          Se o item for documento, diga se precisa de assinatura, carimbo, protocolo ou retorno. Se for encomenda, diga tamanho, peso, embalagem e fragilidade. Se for peça, amostra ou material de empresa, informe como deve ser conferido na retirada e quem autoriza a entrega. Essas instruções não são detalhes secundários: elas determinam o que precisa ser feito e ajudam a evitar uma segunda tentativa.
        </p>
        <p>
          A confirmação também deve considerar a comunicação entre as pontas. Mantenha o telefone de quem entrega e de quem recebe disponível, avise sobre interfone ou doca e informe se o local tem horário restrito. Quando uma pessoa não estiver autorizada a receber, explique o procedimento antes da saída. O piloto não deve improvisar acesso, assinar algo em nome de terceiro ou deixar material em local não combinado.
        </p>
        <p>
          Para empresas, dúvidas frequentes costumam virar instruções recorrentes: como nomear pedidos, como enviar lista de paradas, como organizar comprovantes e quem aprova adicionais. Registre essas regras internamente e encaminhe a versão atual ao atendimento. Se o roteiro mudar, atualize a mensagem. A operação fica mais previsível quando todos trabalham com o mesmo endereço, horário e responsável.
        </p>
        <p>
          Por fim, compare sempre o valor com o escopo que foi confirmado. Uma proposta pode incluir deslocamento, mas não uma espera longa ou uma etapa de retorno. Pergunte antes de confirmar se o protocolo, a assinatura, a devolução e as tentativas estão contemplados. A Moto11 prefere esclarecer a condição antes da coleta a apresentar um preço baixo que não descreve a missão inteira.
        </p>
      </div>

      <WhatsAppCTA
        title="Ainda tem dúvidas? Pergunte agora"
        subtitle="Atendimento de segunda a sexta, das 8h às 18h."
        message="Olá! Li o FAQ e ainda tenho uma dúvida sobre motoboy em Guarulhos."
      />
    </article>
  );
}
