import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { getCombo, getComboSlugs } from "@/data/combos";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getComboSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const combo = getCombo(slug);

  return buildMetadata({
    title: combo?.title ?? "Serviços de motoboy em Guarulhos",
    description:
      "Consulte os serviços disponíveis e receba uma cotação baseada na rota real.",
    path: `/combos/${slug}`,
    noIndex: true,
  });
}

export default function ComboPage() {
  permanentRedirect("/servicos");
}
