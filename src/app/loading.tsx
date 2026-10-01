export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="flex flex-1 flex-col items-center justify-center px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-red-700"
      />
      <p className="mt-4 text-sm font-medium text-zinc-600">
        Carregando conteúdo da Moto11…
      </p>
    </main>
  );
}
