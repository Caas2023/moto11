import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/PageHero";
import { SITE, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato Moto11 | WhatsApp e telefone em Guarulhos",
  description:
    "Fale com a Moto11 em Guarulhos por WhatsApp, telefone ou e-mail. Atendimento de segunda a sexta, das 8h às 18h.",
  alternates: { canonical: `${SITE.baseUrl}/contato` },
  openGraph: {
    title: "Contato | Moto11 Express Guarulhos",
    description: "WhatsApp, telefone e e-mail oficiais da Moto11 em Guarulhos.",
    url: `${SITE.baseUrl}/contato`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <JsonLd
        data={[
          localBusinessJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato – Moto11 Express",
            url: `${SITE.baseUrl}/contato`,
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
      <PageHero compact eyebrow="Atendimento Moto11" title="Contato: motoboy em Guarulhos em horário comercial" description="Use o WhatsApp, telefone ou e-mail em horário comercial. A Moto11 não divulga endereço físico de atendimento ao público; as coletas são combinadas por rota." />

      <section aria-label="Canais de atendimento" className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border p-5">
          <p className="font-bold">WhatsApp comercial</p>
          <p className="mt-1 text-sm text-zinc-700">Seg–sex, 8h–18h.</p>
          <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-emerald-700 underline">{SITE.whatsappDisplay}</a>
        </div>
        <div className="rounded-xl border p-5">
          <p className="font-bold">Telefone</p>
          <p className="mt-1 text-sm text-zinc-700">Ligações durante o horário comercial.</p>
          <a href={SITE.phoneHref} className="mt-3 inline-block font-bold underline">{SITE.phoneDisplay}</a>
        </div>
        <div className="rounded-xl border p-5">
          <p className="font-bold">E-mail</p>
          <p className="mt-1 text-sm text-zinc-700">Orçamentos e contratos empresariais.</p>
          <a href={`mailto:${SITE.email}`} className="mt-3 inline-block font-bold underline">{SITE.email}</a>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-4">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">Área e horário de atendimento</h2>
            <address className="mt-3 text-sm not-italic leading-6 text-zinc-700">
              <strong>{SITE.name} – {SITE.tagline}</strong>
              <br />
              {SITE.address.city} – {SITE.address.region} (sem balcão aberto ao público)
              <br />
              Tel: <a href={SITE.phoneHref} className="underline">{SITE.phoneDisplay}</a>
              <br />
              {SITE.hours}
            </address>
          </div>
          <div className="rounded-2xl border bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
            <strong className="text-zinc-900">Para receber uma cotação:</strong>{" "}
            envie origem, destino, item, contatos e prazo desejado. Atendimento e
            previsão dependem da rota e da disponibilidade.
          </div>
        </div>
      </div>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como acelerar seu atendimento</h2>
        <p>
          Ao chamar, envie de uma vez: endereço completo de coleta com complemento e referência,
          nome e telefone de quem entrega o volume, endereço de destino com o nome do
          destinatário, descrição do item e o horário limite. Com esses dados, o atendente
           permite avaliar a rota com menos idas e vindas. Para locais com acesso
           especial, informe previamente as exigências conhecidas. Para demandas
           empresariais, indique frequência e janelas desejadas.
        </p>
        <p>
          O atendimento ocorre de segunda a sexta, das 8h às 18h. Mensagens enviadas
          fora desse período podem ser respondidas no próximo dia útil. Se a demanda
          tiver horário limite, escreva essa informação logo no início da mensagem.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Como confirmamos a área atendida</h2>
        <p>
          Recebemos solicitações em Guarulhos e para rotas com São Paulo. A cobertura
          final depende dos endereços completos, do item, do horário e da disponibilidade.
          Cartórios, shopping e aeroporto recebem cotação à parte. Consulte a página de
          áreas atendidas e confirme a rota no canal oficial antes de programar a coleta.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">O que acontece depois da mensagem</h2>
        <p>
          A equipe começa conferindo os dados enviados. Se faltar número, complemento, contato de quem recebe ou descrição do item, pode pedir essa informação antes de confirmar. Depois, avalia a distância, o horário, as condições de acesso e qualquer espera prevista. O retorno deve deixar claro se a missão é possível, qual valor se aplica e qual previsão pode ser considerada naquele momento. Você decide se confirma antes da coleta; uma mensagem não cria obrigação de contratar.
        </p>
        <p>
          Para uma cotação mais rápida, copie a mensagem estruturada do botão de WhatsApp e substitua os campos entre parênteses. Em uma única conversa, informe origem, destino, item, horário-limite e etapas adicionais. Se for empresa, acrescente frequência, quantidade de paradas, nota ou protocolo necessário e pessoa responsável no local. Quanto mais completo o pedido, menor a chance de uma segunda troca para descobrir uma condição importante.
        </p>
        <p>
          O canal comercial funciona de segunda a sexta, das 8h às 18h. Mensagens fora desse intervalo podem ser respondidas no próximo dia útil. Não há balcão público no endereço operacional informado e não divulgamos atendimento noturno como se fosse confirmado. Para privacidade, envie somente os dados necessários à cotação e evite compartilhar informações sensíveis do conteúdo transportado na primeira mensagem. Assim, o primeiro atendimento permanece objetivo, seguro e fácil de revisar.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Qual canal escolher</h2>
        <p>
          O WhatsApp é o canal mais prático para cotação porque permite enviar endereços, referências e instruções na mesma conversa. Use o telefone quando precisar explicar uma situação rapidamente ou confirmar uma dúvida durante o horário comercial. O formulário desta página ajuda a organizar a solicitação, mas a confirmação continua dependendo da leitura da rota e dos dados fornecidos. Não envie senha, documento pessoal completo ou informação financeira desnecessária para iniciar o orçamento.
        </p>
        <p>
          Para solicitações empresariais, o primeiro contato pode incluir CNPJ apenas se necessário para a proposta, frequência de coleta, quantidade média de paradas e exigência de nota fiscal do serviço. Para entregas pontuais, origem, destino, item e prazo costumam ser suficientes para começar. Se a retirada depende de autorização, portaria ou código de liberação, informe quem estará esperando o piloto e qual procedimento o local exige.
        </p>
        <p>
          Depois de enviar a missão, aguarde a confirmação das condições antes de programar o remetente ou destinatário. Se alguma informação mudar, como endereço, peso, horário ou número de paradas, avise antes da saída. Uma pequena alteração pode mudar distância, acesso ou espera. Manter tudo na mesma conversa facilita o histórico e reduz o risco de o atendimento trabalhar com uma versão antiga do pedido.
        </p>
        <p>
          Se não houver resposta imediata, confira se a mensagem contém o telefone correto e se todos os dados foram enviados. Evite abrir várias conversas com versões diferentes da mesma rota, porque isso pode separar informações importantes. Uma única mensagem organizada costuma ser mais eficiente do que vários textos curtos com origem, destino e horário enviados em momentos diferentes.
        </p>
        <p>
          O contato também é o momento certo para perguntar sobre comprovante, assinatura, retorno, tolerância de espera e forma de pagamento. Não presuma que uma etapa está incluída porque ela costuma existir em outro serviço. Descreva o que precisa acontecer no destino e espere a confirmação do atendimento. Essa prática evita que o piloto chegue sem autorização, sem documento exigido ou sem instrução sobre quem pode receber.
        </p>
        <p>
          Para uma operação recorrente, reúna os pedidos em um roteiro com endereços, janelas e responsáveis. A equipe pode avaliar se há uma condição comercial ou formato de atendimento adequado, mas isso depende da missão e não deve ser apresentado como preço automático. O canal de contato existe para transformar a necessidade real em uma proposta compreensível antes de qualquer deslocamento.
        </p>
      </div>

      <WhatsAppCTA compact message="Olá! Vim pela página de contato e preciso de um motoboy em Guarulhos." />
    </article>
  );
}
