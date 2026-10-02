import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Privacidade | Moto11",
  description: "Canal de contato da Moto11 para dúvidas sobre informações pessoais.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <article className="max-w-3xl space-y-6">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Privacidade" }]} />
       <PageHero compact eyebrow="Dados e contato" title="Privacidade" />
      <div className="prose max-w-3xl space-y-5 text-muted">
        <h2 className="font-display text-2xl font-bold text-brand-950">1. Compromisso com a Privacidade e Proteção de Dados (LGPD)</h2>
        <p>
          A Moto11 atua em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). Esta Política de Privacidade descreve de forma clara como tratamos, coletamos, armazenamos e protegemos as informações fornecidas por pessoas físicas e jurídicas ao solicitar orçamentos, cotações de frete ou contratar serviços de motoboy em Guarulhos e na Região Metropolitana de São Paulo.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">2. Dados Pessoais Coletados</h2>
        <p>
          Para a elaboração de orçamentos e a execução segura das rotas de entrega, coletamos exclusivamente os dados necessários para o cumprimento da missão logística contratada:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dados de identificação e contato do remetente:</strong> nome completo ou razão social, telefone celular/WhatsApp e e-mail corporativo ou pessoal.</li>
          <li><strong>Dados de coleta e entrega:</strong> endereços completos (rua, número, complemento, bairro, cidade, CEP), referências locais e nome do contato designado no destino.</li>
          <li><strong>Informações do item transportado:</strong> descrição genérica do volume, dimensões e peso aproximados, sem necessidade de abertura de envelopes ou revelação de conteúdos confidenciais.</li>
          <li><strong>Dados de faturamento e comprovação:</strong> CNPJ/CPF quando exigido para emissão de nota fiscal de prestação de serviços ou protocolo assinado de recebimento.</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-brand-950">3. Finalidade do Tratamento de Dados</h2>
        <p>
          Os dados coletados são utilizados estritamente para as seguintes finalidades operacionais:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cálculo da quilometragem e determinação do valor final da corrida conforme a tabela de preços oficial.</li>
          <li>Comunicação direta com remetente e destinatário durante o percurso via WhatsApp ou ligação para resolução de dúvidas de acesso em portarias e interfones.</li>
          <li>Emissão de protocolo digital de entrega, recibos ou relatórios mensais de faturamento para empresas conveniadas.</li>
          <li>Cumprimento de obrigações fiscais e tributárias legais perante os órgãos municipais e fazendários.</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-brand-950">4. Sigilo das Cargas e Documentos Transportados</h2>
        <p>
          A Moto11 adota o princípio da inviolabilidade da carga. Nossos pilotos transportam envelopes, pastas de documentos e embalagens devidamente lacrados pelo remetente. É expressamente proibida a abertura, inspeção interna não autorizada ou divulgação de qualquer documento, contrato ou material confiado à nossa custódia logística.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">5. Armazenamento e Compartilhamento de Dados</h2>
        <p>
          Não comercializamos, alugamos ou compartilhamos dados pessoais de clientes com terceiros para fins de marketing ou publicidade. Os registros de conversas e comprovantes de entrega são armazenados em ambiente seguro apenas pelo período necessário para fins de comprovação da entrega, auditoria contratual e exigências legais.
        </p>

        <h2 className="font-display text-2xl font-bold text-brand-950">6. Direitos do Titular dos Dados</h2>
        <p>
          Nos termos do artigo 18 da LGPD, você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos dados, a correção de informações incompletas ou a eliminação de dados pessoais desnecessários, ressalvada a guarda obrigatória por dever legal ou fiscal.
        </p>
        <p>
          Para exercer qualquer um dos seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato diretamente com nossa equipe pelo telefone ou WhatsApp oficial {SITE.phoneDisplay}.
        </p>
      </div>
    </article>
  );
}
