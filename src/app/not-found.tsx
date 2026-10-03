import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";

export default function NotFound() {
  return (
    <main id="conteudo-principal" className="flex flex-1 flex-col">
      <PageHero compact eyebrow="Erro 404" title="Página não encontrada" description="A página que você procurou não existe ou foi movida. Volte para o início ou fale com a Moto11 para solicitar uma entrega." />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-12 sm:flex-row sm:px-6">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-success px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-900"
        >
          Voltar para o início
        </Link>
        <Link
          href="/contato"
          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Falar com a Moto11
        </Link>
      </div>
    </main>
  );
}
