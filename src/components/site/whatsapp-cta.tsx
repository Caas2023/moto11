import { SITE, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function WhatsAppCTA({
  title = "Precisa de motoboy agora em Guarulhos?",
  subtitle = "Atendimento seg. a sex., 8h–18h. O atendente avalia a solicitação e confirma disponibilidade pelo WhatsApp.",
  message = DEFAULT_WA_MESSAGE,
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  message?: string;
  compact?: boolean;
}) {
  return (
    <section
      aria-label="Chamada para WhatsApp"
      className={`rounded-2xl bg-brand-950 text-white ${compact ? "p-6" : "p-8 sm:p-10"}`}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary-400">
            {SITE.hours}
          </p>
          <h2 className={`${compact ? "text-xl" : "text-2xl sm:text-3xl"} mt-2 font-bold`}>
            {title}
          </h2>
          <p className="mt-2 text-slate-300">{subtitle}</p>
          <p className="mt-3 text-sm text-slate-400">
            Ou ligue agora:{" "}
            <a href={SITE.phoneHref} className="font-semibold text-white underline">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="quote-cta inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-success px-7 py-3.5 text-base font-bold text-white transition hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
        >
          <><WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp</>
        </a>
      </div>
    </section>
  );
}
