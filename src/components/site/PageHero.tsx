import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, description, children, compact = false }: PageHeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-brand-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-moto11.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-950/85" />
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${compact ? "py-10 sm:py-14" : "py-16 sm:py-24"}`}>
        {children}
        {eyebrow && <p className="mt-8 text-sm font-semibold text-orange-100">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.04em]">{title}</h1>
        {description && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>}
      </div>
    </header>
  );
}
