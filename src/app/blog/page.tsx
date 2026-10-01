import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guias sobre motoboy em Guarulhos",
  description:
    "Central de conteúdo da Moto11. Os artigos estão em revisão editorial para publicar somente informações operacionais confirmadas.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <main id="conteudo-principal" className="bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand-950">Início</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Blog</span>
        </nav>
        <BookOpenCheck className="mt-12 h-10 w-10 text-primary-700" aria-hidden="true" />
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-6xl">
          Guias Moto11 em revisão editorial.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          Os artigos antigos misturavam referências de mercado com condições da
          operação. Estamos revisando cada texto para deixar claro o que é tabela
          oficial da Moto11, o que depende de cotação e o que não faz parte do
          horário de atendimento.
        </p>
        <div className="mt-10 border-l-2 border-primary-600 bg-white p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-brand-950">Enquanto isso, consulte as páginas validadas</h2>
          <ul className="mt-5 space-y-4">
            {[
              ["Tabela real de preços", "/precos"],
              ["Serviços disponíveis", "/servicos"],
              ["Áreas atendidas", "/areas-atendidas"],
              ["Perguntas frequentes", "/faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="inline-flex items-center gap-2 font-bold text-primary-700 hover:underline">
                  {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
