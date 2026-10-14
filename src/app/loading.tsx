export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="flex flex-1 flex-col items-center justify-center px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-primary-700"
      />
      <p className="mt-4 text-sm font-medium text-muted">
        Carregando conteúdo da Moto11…
      </p>
    </main>
  );
}
