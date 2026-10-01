import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { jsonLdFAQ, type FaqItem } from "@/lib/seo";

export function FaqAccordion({
  items,
  title = "Perguntas frequentes",
  className,
}: {
  items: FaqItem[];
  title?: string;
  className?: string;
}) {
  return (
    <section aria-label={title} className={cn("w-full", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ(items)) }}
      />
      <h2 className="font-display text-2xl font-bold text-zinc-950">{title}</h2>
      <Accordion className="mt-4 rounded-xl border border-zinc-200 bg-white px-4">
        {items.map((item, i) => (
          <AccordionItem key={`${i}-${item.pergunta}`} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-zinc-900">
              <span>{item.pergunta}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-7 text-zinc-600">{item.resposta}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
