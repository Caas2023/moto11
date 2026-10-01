import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { PHONE_WA } from "@/lib/seo";

export function WhatsAppButton({ className }: { className?: string }) {
  const href = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent("Olá! Preciso de um motoboy em Guarulhos.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Moto11 no WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
