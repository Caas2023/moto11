import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso | Moto11 Express – Motoboy em Guarulhos",
  description:
    "Regras de contratação do serviço de motoboy em Guarulhos: preços, prazos, responsabilidades, volumes aceitos, cancelamentos e suporte.",
  alternates: { canonical: `${SITE.baseUrl}/termos-uso` },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Termos de uso" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Termos de Uso | Moto11 – Motoboy em Guarulhos",
          url: `${SITE.baseUrl}/termos-uso`,
        }}
      />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Termos de uso do serviço de motoboy em Guarulhos
        </h1>
        <p className="mt-4 text-zinc-700">
          Última atualização: 30 de setembro de 2026. Ao solicitar orçamento ou contratar a
          Moto11 Express, você concorda com as regras abaixo — escritas para evitar mal-entendidos
          sobre preço, prazo e responsabilidade.
        </p>
      </header>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">1. Objeto e contratação</h2>
        <p>
          Recebemos solicitações de transporte de itens compatíveis com motocicleta em
          Guarulhos e para rotas sob consulta. A contratação ocorre após a aprovação
          das condições pelo WhatsApp ou telefone, com origem, destino, item e prazo desejado.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">2. Preços, pagamento e cancelamento</h2>
        <p>
          O preço é confirmado antes do deslocamento e inclui coleta, transporte e comprovação de
          entrega. Adicionais de espera além da janela combinada, parada extra ou reagendamento por
          ausência do destinatário são avisados e cobrados à parte, sempre com aprovação prévia.
          Forma de pagamento e regras de cancelamento devem ser confirmadas no atendimento.
          Se o deslocamento já tiver começado, eventual custo será informado antes da decisão seguinte.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">3. Prazos e limites de responsabilidade</h2>
        <p>
          Prazos informados são estimativas operacionais considerando distância e trânsito, não
          garantia absoluta em casos fortuitos (temporal severo, bloqueio viário, interdição).
          Em atraso relevante, o atendente atualiza a previsão e oferece alternativa. Nossa
          responsabilidade cobre guarda e transporte diligente do volume, com indenização limitada
           às regras legais aplicáveis e às condições aceitas para o chamado. Não transportamos
           itens ilícitos ou incompatíveis com a segurança do transporte. O cliente declara ter
           direito sobre os bens enviados e deve informar corretamente sua natureza.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">4. Conduta, suporte e foro</h2>
        <p>
          Pilotos seguem o Código de Trânsito e podem recusar rotas com risco à segurança,
          sobrecarga ou acondicionamento inadequado, oferecendo alternativa segura. Divergências
           são tratadas primeiro pelo atendimento via WhatsApp/telefone, conforme o caso e a
           legislação aplicável. Persistindo o impasse, aplica-se o foro da comarca de
          Guarulhos/SP. Estes termos podem ser atualizados com nova data de vigência; a versão em
          vigor é sempre a publicada nesta página.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">5. Exemplos práticos do dia a dia</h2>
        <p>
           Na prática, envie todos os detalhes antes de confirmar. Se houver ausência
           do destinatário, fila, mudança de endereço ou condição inesperada, a equipe
           deve informar a situação e combinar o próximo passo antes de gerar um novo
           custo. Prazos podem ser revistos por trânsito, clima ou bloqueios, sempre
           com comunicação pelo canal usado na contratação.
        </p>
      </div>

      <WhatsAppCTA compact message="Olá! Li os termos de uso e quero contratar um motoboy em Guarulhos." />
    </article>
  );
}
