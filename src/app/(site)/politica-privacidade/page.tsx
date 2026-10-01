import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WhatsAppCTA } from "@/components/site/whatsapp-cta";
import { JsonLd } from "@/components/site/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Moto11 Express Guarulhos (LGPD)",
  description:
    "Como a Moto11 Express coleta, usa e protege seus dados em Guarulhos: finalidades, direitos do titular, cookies e contato do encarregado (LGPD).",
  alternates: { canonical: `${SITE.baseUrl}/politica-privacidade` },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <article className="space-y-8">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Política de privacidade" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Política de Privacidade | Moto11 Guarulhos (LGPD)",
          url: `${SITE.baseUrl}/politica-privacidade`,
        }}
      />
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Política de privacidade (LGPD)
        </h1>
        <p className="mt-4 text-zinc-700">
          Última atualização: 30 de setembro de 2026. Esta política explica, em linguagem direta,
          quais dados a Moto11 Express coleta ao prestar serviços de motoboy em Guarulhos, para
          que usamos cada dado, com quem compartilhamos, por quanto tempo guardamos e como você
          exerce seus direitos.
        </p>
      </header>

      <div className="prose max-w-3xl space-y-5 text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">1. Quem somos e como falar conosco</h2>
        <p>
          Moto11, com atendimento em Guarulhos/SP, telefone (11) 95724-8425 e
          e-mail contato@moto11guarulhos.com.br. Não divulgamos endereço físico
          de atendimento ao público. Dúvidas sobre dados podem ser enviadas ao
          e-mail com o assunto “Privacidade/LGPD”.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">2. Dados que coletamos</h2>
        <p>
          Coletamos apenas o necessário para operar: nome, telefone/WhatsApp, endereços de coleta
          e entrega com complemento, descrição do volume, horários e preferências de pagamento.
          Pilotos registram foto do comprovante, nome de quem recebeu e horário. O site pode gerar
          dados técnicos mínimos (logs de acesso, páginas visitadas) para segurança e melhoria.
          Não solicitamos dados sensíveis, senhas bancárias ou documentos além do necessário para
          serviços em cartório, quando o próprio cliente os fornece voluntariamente.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">3. Para que usamos seus dados</h2>
        <p>
          Usamos os dados para elaborar orçamentos, designar pilotos, executar coletas e entregas,
           manter contato sobre a solicitação e cumprir obrigações aplicáveis. Não
           vendemos os dados fornecidos. Informações são mantidas somente pelo tempo
           necessário à finalidade e às obrigações legais correspondentes.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">4. Compartilhamento e segurança</h2>
        <p>
          Compartilhamos dados estritamente operacionais: o piloto recebe coleta, entrega e contato
          do solicitante; processadores de pagamento recebem dados da transação; e autoridades
           recebem dados somente quando houver obrigação legal. Adotamos medidas
           razoáveis de acesso e segurança compatíveis com os canais utilizados.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">5. Seus direitos e cookies</h2>
        <p>
          Você pode pedir confirmação, acesso, correção, anonimização, portabilidade, eliminação e
          revogação de consentimento pelo e-mail acima, com resposta em até 15 dias. Este site usa
          apenas cookies técnicos essenciais ao funcionamento; não usamos rastreadores de
           publicidade próprios. Links para WhatsApp seguem as políticas dessa plataforma.
          Dúvidas sobre esta política ou sobre um chamado específico? Fale no canal abaixo e
          informe o protocolo da entrega para localização rápida.
        </p>
        <h2 className="text-2xl font-bold text-zinc-900">6. Retenção, eliminação e atualizações</h2>
        <p>
           Guardamos dados de contratação e entrega pelo tempo necessário à operação e às obrigações
           legais aplicáveis. Encerrada a necessidade, os dados são eliminados ou
          anonimizados de forma segura. Você pode solicitar a eliminação antecipada a qualquer
          momento pelo e-mail do encarregado, ressalvadas as hipóteses legais de retenção, que serão
          explicadas na resposta. Esta política pode ser atualizada para refletir mudanças na
          operação ou na lei; a versão vigente é sempre a publicada nesta página, com a data de
          atualização no topo. Alterações relevantes serão comunicadas pelo canal de atendimento.
        </p>
      </div>

      <WhatsAppCTA compact message="Olá! Tenho uma dúvida sobre privacidade/LGPD referente a uma entrega em Guarulhos." />
    </article>
  );
}
