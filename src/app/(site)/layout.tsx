import type { ReactNode } from "react";

/**
 * O shell global (Header/Footer/WhatsApp) já vive no layout raiz.
 * Este layout aninhado aplica o contêiner de leitura e o landmark acessível (#conteudo-principal).
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main id="conteudo-principal" className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
      {children}
    </main>
  );
}
