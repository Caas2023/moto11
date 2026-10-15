import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, description, children, compact = false }: PageHeroProps) {
  return (
    <header className="relative isolate w-full overflow-hidden bg-brand-950 text-white">
      <Image
        src="/images/hero-moto11.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-950/85" />
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${compact ? "py-10 sm:py-14" : "py-16 sm:py-24"}`}>
        {children}
        {eyebrow && <p className="mt-8 text-sm font-semibold text-primary-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.04em]">{title}</h1>
        {description && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>}
      </div>
    </header>
  );
}
