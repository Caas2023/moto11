import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA, canonical } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Canal de contato e diretrizes da Moto11 em conformidade com a LGPD.",
  alternates: { canonical: canonical("/politica-privacidade") },
  robots: { index: false, follow: true },
};

const whatsappHref = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Olá! Gostaria de falar sobre a política de privacidade da Moto11.",
)}`;

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Dados e Privacidade"
        title="Política de privacidade e proteção de dados."
        description="Diretrizes claras de conformidade com a LGPD (Lei Geral de Proteção de Dados) para clientes e parceiros da Moto11."
      >
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Privacidade</span>
        </nav>
      </PageHero>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose max-w-none space-y-6 text-muted">
            <h2 className="font-display text-2xl font-bold text-brand-950">1. Compromisso com a Privacidade e Proteção de Dados (LGPD)</h2>
            <p className="leading-relaxed">
              A Moto11 atua em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). Esta Política de Privacidade descreve de forma clara como tratamos, coletamos, armazenamos e protegemos as informações fornecidas por pessoas físicas e jurídicas ao solicitar orçamentos, cotações de frete ou contratar serviços de motoboy em Guarulhos e na Região Metropolitana de São Paulo.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">2. Dados Pessoais Coletados</h2>
            <p className="leading-relaxed">
              Para a elaboração de orçamentos e a execução segura das rotas de entrega, coletamos exclusivamente os dados necessários para o cumprimento da missão logística contratada:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Dados de identificação e contato do remetente:</strong> nome completo ou razão social, telefone celular/WhatsApp e e-mail corporativo ou pessoal.</li>
              <li><strong>Dados de coleta e entrega:</strong> endereços completos (rua, número, complemento, bairro, cidade, CEP), referências locais e nome do contato designado no destino.</li>
              <li><strong>Informações do item transportado:</strong> descrição genérica do volume, dimensões e peso aproximados, sem necessidade de abertura de envelopes ou revelação de conteúdos confidenciais.</li>
              <li><strong>Dados de faturamento e comprovação:</strong> CNPJ/CPF quando exigido para emissão de nota fiscal de prestação de serviços ou protocolo assinado de recebimento.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-950">3. Finalidade do Tratamento de Dados</h2>
            <p className="leading-relaxed">
              Os dados coletados são utilizados estritamente para as seguintes finalidades operacionais:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Avaliação da rota e confirmação das condições de atendimento pelo WhatsApp.</li>
              <li>Comunicação direta com remetente e destinatário durante o percurso via WhatsApp ou ligação para resolução de dúvidas de acesso em portarias e interfones.</li>
              <li>Emissão de protocolo digital de entrega, recibos ou relatórios mensais de faturamento para empresas conveniadas.</li>
              <li>Cumprimento de obrigações fiscais e tributárias legais perante os órgãos municipais e fazendários.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-950">4. Sigilo das Cargas e Documentos Transportados</h2>
            <p className="leading-relaxed">
              A Moto11 adota o princípio da inviolabilidade da carga. Nossos pilotos transportam envelopes, pastas de documentos e embalagens devidamente lacrados pelo remetente. É expressamente proibida a abertura, inspeção interna não autorizada ou divulgação de qualquer documento, contrato ou material confiado à nossa custódia logística.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">5. Armazenamento e Compartilhamento de Dados</h2>
            <p className="leading-relaxed">
              Não comercializamos, alugamos ou compartilhamos dados pessoais de clientes com terceiros para fins de marketing ou publicidade. Os registros de conversas e comprovantes de entrega são armazenados em ambiente seguro apenas pelo período necessário para fins de comprovação da entrega, auditoria contratual e exigências legais.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-950">6. Direitos do Titular dos Dados</h2>
            <p className="leading-relaxed">
              Nos termos do artigo 18 da LGPD, você tem o direito de solicitar a confirmação da existência de tratamento, o acesso aos dados, a correção de informações incompletas ou a eliminação de dados pessoais desnecessários, ressalvada a guarda obrigatória por dever legal ou fiscal.
            </p>
            <p className="leading-relaxed">
              Para exercer qualquer um dos seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato diretamente com nossa equipe pelo telefone ou WhatsApp oficial {SITE.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA Final Padronizado */}
      <section className="bg-primary-700 py-14 text-white" aria-labelledby="cta-final-privacidade">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="cta-final-privacidade" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ficou com alguma dúvida sobre seus dados?
            </h2>
            <p className="mt-2 text-orange-50">
              Entre em contato conosco pelo WhatsApp oficial para atendimento imediato.
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
