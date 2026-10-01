import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-red-700 uppercase">
        Erro 404
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-zinc-950 sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-zinc-600">
        A página que você procurou não existe ou foi movida. Volte para a
        página inicial ou fale com a Moto11 pelo WhatsApp para solicitar uma
        entrega.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-red-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-red-800"
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
