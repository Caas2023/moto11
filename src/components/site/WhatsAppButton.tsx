import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE_WA } from "@/lib/seo";

export function WhatsAppButton({ className }: { className?: string }) {
  const href = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Olá! Quero calcular uma entrega. Origem: (informar) / Destino: (informar) / Item: (informar) / Horário desejado: (informar).")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Moto11 no WhatsApp"
      className={cn(
        "quote-cta fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2",
        className,
      )}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
