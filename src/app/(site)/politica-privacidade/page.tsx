import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { SITE, waLink } from "@/lib/site";
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
      <p className="text-lg leading-relaxed text-muted">
        Para solicitar uma cotação, você pode enviar informações da coleta e da entrega pelo
        WhatsApp. O botão abre uma conversa na plataforma WhatsApp; evite compartilhar senhas ou
        documentos pessoais desnecessários. Para dúvidas ou solicitações sobre dados enviados à
        Moto11, entre em contato pelo telefone {SITE.phoneDisplay}.
      </p>
      <a href={waLink("Olá! Tenho uma dúvida sobre os dados que enviei à Moto11.")} className="inline-block rounded-full bg-primary-700 px-6 py-3 font-semibold text-white">Falar sobre privacidade</a>
      <p className="text-sm text-muted">Política detalhada pendente de validação das práticas de tratamento de dados.</p>
    </article>
  );
}
