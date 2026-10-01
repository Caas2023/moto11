import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RelatedLinkItem {
  href: string;
  title: string;
  description?: string;
}

export interface RelatedLinksProps {
  services?: RelatedLinkItem[];
  areas?: RelatedLinkItem[];
  posts?: RelatedLinkItem[];
  /** Pathname atual — excluído da lista para evitar auto-link. */
  currentPath?: string;
  className?: string;
  id?: string;
}

const MAX_PER_GROUP = 6;

function dedupe(items: RelatedLinkItem[], currentPath?: string): RelatedLinkItem[] {
  const seen = new Set<string>();
  const out: RelatedLinkItem[] = [];
  for (const item of items) {
    if (!item?.href || !item?.title) continue;
    if (currentPath && item.href === currentPath) continue;
    const key = item.href.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= MAX_PER_GROUP) break;
  }
  return out;
}

function Group({
  heading,
  items,
  ariaLabel,
}: {
  heading: string;
  items: RelatedLinkItem[];
  ariaLabel: string;
}) {
  if (items.length === 0) return null;
  return (
    <section aria-label={ariaLabel}>
      <h2 className="text-lg font-semibold tracking-tight">{heading}</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-start gap-2 rounded-lg border p-3 transition-colors hover:border-foreground/30 hover:bg-muted"
            >
              <ArrowRight
                className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
              <span>
                <span className="block text-sm font-medium leading-snug">
                  {item.title}
                </span>
                {item.description ? (
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Bloco de links internos contextuais (hub-and-spoke).
 * Uso: fim de páginas de serviço / área / combo / post.
 * Âncoras vêm de `title` — sempre descritivas com keyword, nunca "clique aqui".
 */
export function RelatedLinks({
  services = [],
  areas = [],
  posts = [],
  currentPath,
  className,
  id,
}: RelatedLinksProps) {
  const svc = dedupe(services, currentPath);
  const ars = dedupe(areas, currentPath);
  const pst = dedupe(posts, currentPath);

  if (svc.length === 0 && ars.length === 0 && pst.length === 0) return null;

  return (
    <nav
      id={id}
      aria-label="Links relacionados"
      className={cn("grid gap-8", className)}
    >
      <Group
        heading="Serviços relacionados em Guarulhos"
        items={svc}
        ariaLabel="Serviços relacionados"
      />
      <Group
        heading="Bairros atendidos na região"
        items={ars}
        ariaLabel="Áreas atendidas"
      />
      <Group
        heading="Guias do blog que explicam o serviço"
        items={pst}
        ariaLabel="Posts relacionados"
      />
    </nav>
  );
}

export default RelatedLinks;
