import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { TrackingForm } from "@/components/site/tracking-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rastreamento de Entrega em Guarulhos | Acompanhe seu Pedido",
  description:
    "Rastreie sua entrega da Moto11 Express em Guarulhos: digite o código, veja o status e receba atualizações no WhatsApp em horário comercial (seg–sex, 8h–18h).",
  alternates: { canonical: `${SITE.baseUrl}/rastreamento` },
  openGraph: {
    title: "Rastreamento de Entrega em Guarulhos",
    description: "Digite o código e acompanhe coleta, rota e entrega em tempo real.",
    url: `${SITE.baseUrl}/rastreamento`,
    type: "website",
  },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Rastreamento" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Rastreamento de entrega em Guarulhos",
          provider: { "@type": "LocalBusiness", name: SITE.name },
          areaServed: "Guarulhos, SP",
          url: `${SITE.baseUrl}/rastreamento`,
        }}
      />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Rastreamento de entrega em Guarulhos
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Acompanhe sua coleta e entrega em tempo real. Digite o código recebido no WhatsApp
          (formato M11-0000) e veja o status atualizado. Para entregas reais, enviamos cada etapa
          automaticamente por mensagem.
        </p>
      </header>

      <TrackingForm />

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Como funciona o rastreamento real</h2>
        <p>
          Cada chamado gera um protocolo único que acompanha a entrega do início ao fim. Você
          recebe confirmação de pedido recebido, nome do piloto designado, aviso de chegada na
          coleta, confirmação de retirada e aviso de entrega concluída com foto do comprovante.
          Empresas com volume alto recebem ainda planilha diária com todos os protocolos, horários
          e responsáveis pelo recebimento. Todo o histórico fica disponível por 90 dias para
          conferência do financeiro e auditoria.
        </p>
        <p>
          O rastreamento por mensagem foi escolhido de propósito: dispensa aplicativo, funciona
          em qualquer celular e chega até para destinatários que não contrataram o serviço. O
          piloto registra cada etapa com um toque no próprio celular, e o sistema replica para
          remetente e destinatário simultaneamente. Em rotas para o Aeroporto ou São Paulo, o
          acompanhamento inclui previsão atualizada conforme o trânsito, evitando ligações de
          cobrança e ansiedade.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Perdeu o código? Resolva em 1 minuto</h2>
        <p>
          Se você apagou a mensagem com o protocolo, chame no WhatsApp informando nome do
          remetente, data aproximada e bairro de entrega — localizamos o chamado em segundos e
          reenviamos o status atual com o comprovante. Para empresas, basta informar o CNPJ ou o
          nome do solicitante cadastrado. Em casos de destinatário ausente, o piloto aguarda a
          janela combinada, registra a tentativa com foto e o atendente agenda nova tentativa no
          mesmo dia, sempre com sua autorização prévia de valor.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Garantias de cada entrega rastreada</h2>
        <p>
          Toda entrega rastreada inclui lacre numerado em documentos e valores, foto de coleta e
          de entrega, nome legível de quem recebeu e horário registrado. Volumes frágeis têm
          registro de acondicionamento. Se houver qualquer divergência — endereço errado,
          destinatário desconhecido ou recusa — o piloto não abandona a carga: retorna à base ou
          aguarda instrução, e o atendente resolve com você pelo WhatsApp antes de qualquer custo
          adicional. É assim que mantemos mais de 98% de entregas concluídas na primeira tentativa.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">Relatórios para empresas com volume</h2>
        <p>
          Operações com mais de dez entregas por semana recebem, além do rastreio por mensagem,
          uma planilha diária consolidada com protocolo, solicitante, origem, destino, horários de
          coleta e entrega, nome do recebedor e valor — pronta para importar no financeiro. Fechamos
          o mês com relatório assinado e nota única, eliminando a conciliação corrida a corrida.
          O gestor acompanha tudo sem ligar para a base: qualquer exceção, como ausência do
          destinatário ou endereço divergente, aparece destacada com a ação tomada e o novo prazo.
          Para começar, basta informar o CNPJ e os solicitantes autorizados; em um dia útil o
          painel de acompanhamento está ativo, sem custo de implantação e sem fidelidade mínima.
        </p>
      </div>

      <WhatsAppCTA
        title="Não achou seu código? Fale com a base"
        subtitle="Informe nome, data e bairro de entrega e localizamos seu pedido na hora."
        message="Olá! Preciso rastrear minha entrega em Guarulhos. Meu nome é (informar) e a entrega foi em (data/bairro)."
      />
    </article>
  );
}
